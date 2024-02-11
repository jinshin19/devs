import { StatementTypes } from "../types/types";

export const statements: StatementTypes = {
    getAllDevs: "select * from devs",
    getDevsByID: "select * from devs where dev_id = ?",
    createDev: "insert into devs ( dev_id, username, firstname, middlename, lastname, stacks, links, password  ) values ( ? )",
    updateDev: "update devs set username = ?, firstname = ?, middlename = ?, lastname = ?, stacks = ?, links = ?, password = ?",
    deleteDev: "delete from devs where dev_id = ?"
}