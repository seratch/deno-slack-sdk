/** This file was autogenerated on Tue Aug 30 2022. Follow the steps in src/schema/slack/functions/README.md to rebuild **/
import { DefineFunction } from "../../../functions/mod.ts";
import SchemaTypes from "../../schema_types.ts";
import SlackTypes from "../schema_types.ts";

export default DefineFunction(
  {
    callback_id: "slack#/functions/create_channel",
    source_file: "",
    title: "Create a channel",
    description: "Create a Slack channel",
    input_parameters: {
      required: ["channel_name"],
      properties: {
        channel_name: {
          type: SchemaTypes.string,
          description: "Enter a channel name",
        },
        is_private: {
          type: SchemaTypes.boolean,
          description: "Make this channel private",
        },
      },
    },
    output_parameters: {
      required: ["channel_id"],
      properties: {
        channel_id: {
          type: SlackTypes.channel_id,
          description: "Channel name",
        },
      },
    },
  },
);
