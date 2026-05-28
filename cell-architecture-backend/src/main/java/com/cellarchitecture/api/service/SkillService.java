package com.cellarchitecture.api.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import com.cellarchitecture.api.domain.Skill;
import com.cellarchitecture.api.domain.response.ResultPaginationDTO;
import com.cellarchitecture.api.repository.SkillRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class SkillService {
    private final SkillRepository skillRepository;

    public SkillService(SkillRepository skillRepository) {
        this.skillRepository = skillRepository;
    }

    public boolean isSkillExist(String skill) {
        return this.skillRepository.existsByNameAndVoidedFalse(skill);
    }

    public Skill handleCreateSkill(Skill dto) {
        return this.skillRepository.save(dto);
    }

    public Skill getById(UUID id) {
        Optional<Skill> skill = this.skillRepository.findByIdAndVoidedFalse(id);
        return skill.orElse(null);
    }

    public Skill updateSkill(Skill dto) {
        return this.skillRepository.save(dto);
    }

    public ResultPaginationDTO getAllSkill(Specification<Skill> spec, Pageable pageable) {
        Specification<Skill> notVoidedSpec = (root, query, cb) -> cb.isFalse(root.get("voided"));
        Specification<Skill> finalSpec = spec == null
                ? notVoidedSpec
                : spec.and(notVoidedSpec);
        Page<Skill> pSkill = this.skillRepository.findAll(finalSpec, pageable);
        ResultPaginationDTO.Meta mt = new ResultPaginationDTO.Meta();
        ResultPaginationDTO result = new ResultPaginationDTO();
        mt.setPage(pageable.getPageNumber() + 1);
        mt.setPageSize(pageable.getPageSize());
        mt.setTotal(pSkill.getTotalElements());
        mt.setPages(pSkill.getTotalPages());

        result.setMeta(mt);
        result.setResult(pSkill.getContent());
        return result;
    }

    public List<Skill> findByIdIn(List<UUID> listId) {
        return this.skillRepository.findByIdInAndVoidedFalse(listId);
    }
}
