import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import { client, sender } from "./mailtrap";

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    const recipient = [{ email }];
    try {
        const res = await client.send({
            from: sender,
            to: recipient,
            subject: 'Verify your Email',
            html: htmlContent.replace("{verificationToken}", verificationToken),
            category: 'Email Verification'
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send email verification")


    }
}
export const sendWelcomeEmail = async (name: string, email: string) => {
    const recipient = [{ email }];
    const htmlcontent = generateWelcomeEmailHtml(name);
    try {
        const res = await client.send({
            from: sender,
            to: recipient,
            subject: 'Welcome to vishnu dutt',
            html: htmlcontent,
            template_variables: {
                company_info_name: "vishnu dutt",
                name: name
            }
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send Welcome email ")


    }
}
export const sendPasswordResetEmail = async (email: string, resetURL: string) => {
    const recipient = [{ email }];
    const htmlcontent = generatePasswordResetEmailHtml(resetURL);
    try {
        const re = await client.send({
            from: sender,
            to: recipient,
            subject: 'Reset your password',
            html: htmlcontent,
            category: "Reset Password"
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Reset Password ")


    }
}
export const sendResetSuccessEmail = async (email: string) => {
    const recipient = [{ email }];
    const htmlcontent = generateResetSuccessEmailHtml();
    try {
        const res = await client.send({
            from: sender,
            to: recipient,
            subject: 'Password Reset Successfully',
            html: htmlcontent,
            category: "Password Reset"
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to Send Reset Success  ")


    }
}