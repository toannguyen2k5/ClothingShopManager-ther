package com.example.ClothingStoreManagementAPI.service;

import com.example.ClothingStoreManagementAPI.repository.UserRepository;
import jakarta.mail.*;
import jakarta.mail.internet.*;
import java.util.Properties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ForgetPassService {
	@Autowired
	private UserRepository userRepository;
	
	public boolean SendEmail(String email) {
		if(userRepository.findByEmail(email)!=null) {
			String senderEmail = "Toannguyenmk2005@gmail.com";
	        String appPassword = "mnik mksn arju xeas"; // Mật khẩu ứng dụng
	        // Cấu hình SMTP server của Gmail
	        Properties props = new Properties();
	        props.put("mail.smtp.auth", "true");
	        props.put("mail.smtp.starttls.enable", "true");
	        props.put("mail.smtp.host", "smtp.gmail.com");
	        props.put("mail.smtp.port", "587");

	        // Tạo phiên gửi email
	        Session session = Session.getInstance(props, new Authenticator() {
	            protected PasswordAuthentication getPasswordAuthentication() {
	                return new PasswordAuthentication(senderEmail, appPassword);
	            }
	        });
	        try {
	            // Tạo email
	            Message message = new MimeMessage(session);
	            message.setFrom(new InternetAddress(senderEmail));
	            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(email));
	            message.setSubject("Test Email");
	            String content = "Chào "+userRepository.findByEmail(email).getFullName()+",\r\n"
	            		+ "\r\n"
	            		+ "Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn. Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email này.\r\n"
	            		+ "Để đặt lại mật khẩu của bạn, vui lòng nhấp vào liên kết bên dưới:\r\n"
	            		+ "👉 https://www.google.com/search?q=gg+d%E1%BB%8Bch&oq=gg&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIOCAEQRRgnGDsYgAQYigUyBggCEEUYOzIMCAMQABhDGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgxMjcyajBqNKgCALACAQ&sourceid=chrome&ie=UTF-8 \r\n"
	            		+ "Liên kết này sẽ hết hạn sau [thời gian hết hạn], vì vậy hãy đảm bảo thực hiện sớm.\r\n"
	            		+ "Nếu bạn gặp bất kỳ vấn đề nào, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi.\r\n"
	            		+ "Cảm ơn bạn!\r\n"
	            		+ "Hệ thống bán hàng trực tuyến ";
	            message.setText(content);

	            // Gửi email
	            Transport.send(message);
	            return true;
	        } catch (MessagingException e) {
	            return false;
	        }
		}
		else return false;
	}
}
