import { model, Schema, Model, Document } from "mongoose";

interface InterfacePR extends Document {
  status: string;
  title: string;
  description: string;
  baseBranch: string;
  compareBranch: string;
}

const PRSchema: Schema = new Schema({
  status: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  baseBranch: { type: String, required: true },
  compareBranch: { type: String, required: true },
});

export const PR: Model<InterfacePR> = model("PR", PRSchema);
