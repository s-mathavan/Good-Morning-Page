package org.AnilYanai.repository;

import org.AnilYanai.entity.UserDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<UserDetails,Long> {

    public UserDetails findByPhoneNumber(String phoneNumber);
    public Page<UserDetails> findAll(Pageable pageable);
}
