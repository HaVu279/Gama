package hoainguyen.gama.GamaProject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import hoainguyen.gama.GamaProject.entities.User;
import hoainguyen.gama.GamaProject.repository.UserRepository;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;
	
	@GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }
	
	@PostMapping("/users")
    public User createUser(@Valid @RequestBody User user) {
        return userRepository.save(user);
    }
	
	@DeleteMapping("/users")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
