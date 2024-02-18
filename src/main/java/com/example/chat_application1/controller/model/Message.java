package com.example.chat_application1.controller.model;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Message
{
    private String sendername;
    private String receivername;
    private String message;
    private String data;
    private Status status;
}
