package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.example.demo.model.Alien;

public interface AlienRepo extends JpaRepository<Alien, Integer> {

	List<Alien> findByTech(String tech);

	List<Alien> findByAidGreaterThan(int aid);

	@Query("from Alien where tech=?1 order by aname")
	List<Alien> findByTechSorted(String tech);
}

/*
 * Simple rest with out extra feature.
 * 
 * @RepositoryRestResource(collectionResourceRel="aliens", path="aliens") public
 * interface AlienRepo extends JpaRepository<Alien, Integer> {
 * 
 * }
 */
