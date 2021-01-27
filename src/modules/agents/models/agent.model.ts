import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { ProblemModel } from "src/modules/problems/models/problem.model";

@modelOptions({ schemaOptions: { collection: 'agents' }, options: { allowMixed:0 } })
export class AgentsModel extends TimeStamps {

  @prop({ required: true })
  name!: Record<string, any>;

  @prop({})
  position?: Record<string, any>;

  @prop({ default: false })
  isFree?: boolean;

  @prop({ })
  problem!: Ref<ProblemModel>;

  static getAgents(this: ModelType<AgentsModel>):AgentsModel[] | null {
    return this.aggregate([
      { $project: {
        name: 1,
        position: 1,
        isFree: 1,
        problem: { "$toObjectId": "$problem" }
        }
      },
      { $lookup: { from: 'problems', localField: 'problem', foreignField:'_id', as:'problems'} },
      { $project: {
        name: 1,
        position: 1,
        isFree: 1,
        problem: { "$arrayElemAt": ["$problems", 0] }
        }
      }
    ]).exec()
  }

}