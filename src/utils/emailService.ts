// This is a mock email service for demonstration purposes
// In a real-world application, this would be replaced with a server-side email sending solution

export const sendStatusUpdateEmail = async (to: string, claimNumber: string, newStatus: string) => {
  // Simulate an API call to a server-side email service
  console.log(`Sending email to ${to} for claim #${claimNumber}`);
  console.log(`New status: ${newStatus}`);

  // Simulate a delay to mimic network request
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log('Email sent successfully');
};