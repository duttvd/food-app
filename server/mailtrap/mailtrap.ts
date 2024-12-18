import { MailtrapClient } from "mailtrap";


const ENDPOINT = "https://send.api.mailtrap.io/";
const client = new MailtrapClient({ token: process.env.MAILTRAP_API_TOKRN! });

const sender = {
    email: "hello@demomailtrap.com",
    name: "Mailtrap Test",
};