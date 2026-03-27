package org.AnilYanai.service;

import jakarta.validation.constraints.Pattern;
import lombok.RequiredArgsConstructor;
import org.AnilYanai.DTO.UserDTO;
import org.AnilYanai.entity.UserDetails;
import org.AnilYanai.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;


@Service
@Validated
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void save(UserDTO userDTO) {

        UserDetails userDetails = UserDetails.builder()
                .userName(userDTO.getUserName())
                .phoneNumber(userDTO.getPhoneNumber())
                .email(userDTO.getEmail())
                .build();

        userRepository.save(userDetails);
    }

    public UserDTO getByPhoneNumber(
            @Pattern(regexp = "\\d{10}", message = "Invalid phone")
            String phoneNumber
    ) {
        UserDetails userDetails = userRepository.findByPhoneNumber(phoneNumber);
        return toUserDTO(userDetails);
    }

    public Page<UserDTO> getAllUserDetails(Pageable pageable) {
        return userRepository.findAll(pageable)
                .map(this::toUserDTO);
    }

    public UserDTO toUserDTO(UserDetails  userDetails) {
        return UserDTO.builder()
                .userName(userDetails.getUserName())
                .email(userDetails.getEmail())
                .phoneNumber(userDetails.getPhoneNumber())
                .build();
    }

}
