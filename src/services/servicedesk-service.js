import app from "firebase/app";
import "firebase/database";

const devConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROD_API_ID,
};

export default class ServicedeskService {
  constructor() {
    app.initializeApp(devConfig);
    this.db = app.database();
  }

  statuses = ["Open", "In progress", "Closed"];

  async getStatuses() {
    return this.statuses;
  }

  async getAllRequests() {
    const dbAnswer = await this.db.ref("requests").once("value");
    const requests = dbAnswer.val();
    const result = [];
    if (!requests) return result;

    Object.keys(requests).forEach((key) => {
      const r = requests[key];
      result.push({
        ...r,
        id: key,
      });
    });

    return result;
  }

  getStatusCount = async () => {
    const m = {};
    const statuses = await this.getStatuses();
    statuses.forEach((s) => (m[s] = 0));

    const requests = await this.getAllRequests();
    requests.forEach((c) => m[c.status]++);
    const result = Object.entries(m).map((e) => ({
      status: e[0],
      count: e[1],
    }));

    return result;
  };

  getRequestById = async (id) => {
    const dbAnswer = await this.db.ref(`requests/${id}`).once("value");
    const request = dbAnswer.val();
    if (!request) return null;

    // class Request with constructor
    const {
      username = "",
      subject = "",
      description = "",
      status = "",
      solution = "",
      createDate = null,
      closeDate = null,
    } = request;

    return {
      id,
      username,
      subject,
      description,
      status,
      solution,
      createDate,
      closeDate,
    };
  };

  getNextId = async (initId = "0000000") => {
    const dbAnswer = await this.db
      .ref("requests")
      .orderByKey()
      .limitToLast(1)
      .once("value");
    const lastItem = dbAnswer.val();
    const lastId = lastItem ? Object.keys(lastItem)[0] : initId;
    const nextId = (Number.parseInt(lastId) + 1).toString().padStart(7, "0");

    return nextId;
  };

  addRequest = async ({ username, subject, description }) => {
    const newId = await this.getNextId();
    await this.db.ref(`requests/${newId}`).set({
      username,
      subject,
      description,
      createDate: Date.now(),
      status: "Open",
    });
  };

  removeRequest = async (id) => {
    await this.db.ref(`requests/${id}`).remove();
  };

  updateRequest = async (newRequest) => {
    const { id, status, closeDate, ...rest } = newRequest;
    const oldRequest = await this.getRequestById(id);
    if (!oldRequest) throw new Error("Fetching updated item by id error");

    await this.db.ref(`requests/${id}`).set({
      ...rest,
      status,
      closeDate:
        status === "Closed" && status !== oldRequest.status
          ? Date.now()
          : closeDate,
    });
  };
}
