package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.dao.AlienRepo;
import com.example.demo.model.Alien;

//@Controller <- for returning web page as it is.  
//@RestController <- for returning data instead of ModelAndView.  

@RestController
public class Aliencontroller {

	@Autowired
	AlienRepo alienRepo;

	@RequestMapping("/home")
	public ModelAndView home() {

		ModelAndView modelAndView = new ModelAndView();

		System.out.println("Inside Home");

		modelAndView.setViewName("home.jsp");

		return modelAndView;
	}

	@RequestMapping("/addAlien")
	public String addAlien(Alien alien) {
		alienRepo.save(alien);
		return "home.jsp";
	}

	@RequestMapping("/getAlien")
	public ModelAndView getAlien(@RequestParam("aid") int aid, @RequestParam("tech") String tech) {
		ModelAndView modelAndView = new ModelAndView();

		Alien alien = alienRepo.findById(aid).orElse(new Alien());
		System.out.println(alien);

		List<Alien> alienList = alienRepo.findByAidGreaterThan(aid);
		System.out.println(alienList);

		alienList = alienRepo.findByTechSorted(tech);
		System.out.println("Sorted : " + alienList.toString());

		alienList = alienRepo.findByTech(tech);

		modelAndView.addObject("alien", alienList.toString());
		modelAndView.setViewName("showAlien.jsp");

		return modelAndView;
	}

	@GetMapping("/aliens")
	public List<Alien> getAllAlien() {
		return alienRepo.findAll();
	}

	@GetMapping("/aliens/{aid}")
	public Optional<Alien> getAlien(@PathVariable("aid") int aid) {
		return alienRepo.findById(aid);
	}

	@DeleteMapping("/aliens/{aid}")
	public String delAlien(@PathVariable("aid") int aid) {

		Alien alien = alienRepo.getOne(aid);

		alienRepo.delete(alien);

		return "Deleted";

	}

	@PostMapping("/aliens")
	public Alien postAlien(@RequestBody Alien alien) {

		return alienRepo.save(alien);
	}

	@PutMapping("/aliens")
	public Alien putAlien(@RequestBody Alien alien) {

		return alienRepo.save(alien);
	}

}
