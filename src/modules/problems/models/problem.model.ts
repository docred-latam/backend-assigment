import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { AgentsModel } from "src/modules/agents/models/agent.model";

@modelOptions({ schemaOptions: { collection: 'problems' }, options: { allowMixed: 0 } })
export class ProblemModel extends TimeStamps {

  @prop({ required: true })
  description!: Record<string, any>;

  @prop({})
  agent?: Ref<AgentsModel>;

  @prop({})
  solution?: Record<string, any>;

  @prop({ default: false })
  isClosed!: boolean;

  static getProblems(this: ModelType<ProblemModel>):ProblemModel[] | null {
    return this.aggregate([
      { $project: {
        description: 1,
        agent: {"$toObjectId": "$agent"},
        solution: 1,
        isClosed: 1
        }
      },
      { $lookup: { from: 'agents', localField: 'agent', foreignField:'_id', as:'agent'} },
      { $project: {
        description: 1,
        agent: { "$arrayElemAt": ["$agent", 0] },
        solution: 1,
        isClosed: 1
        }
      }
    ]).exec()
  }

}