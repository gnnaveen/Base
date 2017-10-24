package com.idamta.BaseComponent;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.idamta.*")
public class BaseComponentApplication {

	public static void main(String[] args) {
		SpringApplication.run(BaseComponentApplication.class, args);
		//allow
	}
}
