package org.AnilYanai.DTO;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDTO {

    //Data to object class
    @NotBlank
    private String userName;

    @Email
    private String email;

    @Pattern(regexp = "\\d{10}")
    private String phoneNumber;

    private String message;
}
