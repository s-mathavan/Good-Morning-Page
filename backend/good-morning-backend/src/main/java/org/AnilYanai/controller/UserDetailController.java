package org.AnilYanai.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.AnilYanai.DTO.UserDTO;
import org.AnilYanai.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("api/v1/user")
@RequiredArgsConstructor
public class UserDetailController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<String> postUserDetails(@RequestBody UserDTO userDTO) {
        userService.save(userDTO);

        log.info("user detail : " + userDTO);
        return ResponseEntity.ok("User Saved Successfully");
    }

    @GetMapping
    public ResponseEntity<Page<UserDTO>> getAllUserDetails(Pageable pageable) {
        return ResponseEntity.ok(userService.getAllUserDetails(pageable));
    }

    @GetMapping("/byphone")
    public ResponseEntity<UserDTO> getUserByPhoneNumber(@RequestParam String phoneNumber) {
        return ResponseEntity.ofNullable(userService.getByPhoneNumber(phoneNumber));
    }
}
