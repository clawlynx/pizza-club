export const handleChatClick = () => {
  const phoneNumber = "+442827662062"; // Replace with the actual phone number
  const message = "Hello! I would like to chat."; // Replace with your message
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};