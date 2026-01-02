import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  DeleteCommand
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const db = DynamoDBDocumentClient.from(client);
const TABLE_NAME = "Notes";

export const handler = async (event) => {
  const method = event.httpMethod;

  try {
    // GET ALL NOTES
    if (method === "GET") {
      const data = await db.send(new ScanCommand({
        TableName: TABLE_NAME
      }));
      return response(200, data.Items);
    }

    // ADD NOTE
    if (method === "POST") {
      const body = JSON.parse(event.body);
      const note = {
        note_id: Date.now().toString(),
        title: body.title,
        content: body.content,
        created_at: new Date().toISOString()
      };

      await db.send(new PutCommand({
        TableName: TABLE_NAME,
        Item: note
      }));

      return response(201, note);
    }

    // DELETE NOTE
    if (method === "DELETE") {
      const id = event.pathParameters.id;

      await db.send(new DeleteCommand({
        TableName: TABLE_NAME,
        Key: { note_id: id }
      }));

      return response(200, { message: "Note deleted" });
    }

    return response(400, { message: "Invalid method" });

  } catch (error) {
    console.error(error);
    return response(500, { error: error.message });
  }
};

const response = (statusCode, body) => ({
  statusCode,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*"
  },
  body: JSON.stringify(body)
});
