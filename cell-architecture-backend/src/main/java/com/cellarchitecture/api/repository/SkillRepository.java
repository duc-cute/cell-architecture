package com.cellarchitecture.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import com.cellarchitecture.api.domain.Skill;

import java.util.List;
import java.util.UUID;

@Repository
public interface SkillRepository extends JpaRepository<Skill, UUID>, JpaSpecificationExecutor<Skill> {
    boolean existsByNameAndVoidedFalse(String skill);

    List<Skill> findByIdInAndVoidedFalse(List<UUID> id);

    java.util.Optional<Skill> findByIdAndVoidedFalse(UUID id);
}
