import { model, Schema } from 'mongoose';
import { TProjcet } from './projcet.interfac';

const ProjctSchema = new Schema<TProjcet>(
  {
    project_name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    imgOne: {
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    github_link_client: {
      type: String,
      required: true,
    },
    github_link_server: {
      type: String,
      required: true,
    },
    live_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Projcet = model<TProjcet>('projcet', ProjctSchema);
