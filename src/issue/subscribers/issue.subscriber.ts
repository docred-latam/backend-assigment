import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent
} from "typeorm";

import { IssueEntity } from "../entities/issue.entity";

@EventSubscriber()
export class IssueSubscriber implements EntitySubscriberInterface<IssueEntity> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return IssueEntity;
  }

  afterInsert(event: InsertEvent<IssueEntity>) {
    console.log(`AFTER ISSUE INSERTED: `, event.entity);
  }
}
