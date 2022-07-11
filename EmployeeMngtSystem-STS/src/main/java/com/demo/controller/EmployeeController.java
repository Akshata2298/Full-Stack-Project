package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.demo.model.EmployeeModel;
import com.demo.repository.EmployeeRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@PostMapping("insert")
	@CrossOrigin(origins="http://localhost:4200")
	public EmployeeModel add(@RequestBody EmployeeModel em)
	{
		return employeeRepository.save(em);
	}
	
	@PostMapping("update")
	@CrossOrigin(origins="http://localhost:4200")
	public EmployeeModel update(@RequestBody EmployeeModel em)
	{
		return this.employeeRepository.save(em);
	}
	
	@PostMapping("delete")
	@CrossOrigin(origins="http://localhost:4200")
	public void deletebook(@RequestBody EmployeeModel id)
	{
		 this.employeeRepository.delete(id);
	}

	@GetMapping("view")
	@CrossOrigin(origins="http://localhost:4200")
	public List<EmployeeModel> view()
	{
		return this.employeeRepository.findAll();
	}
}