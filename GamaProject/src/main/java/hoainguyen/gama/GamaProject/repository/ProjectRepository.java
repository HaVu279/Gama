package hoainguyen.gama.GamaProject.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import hoainguyen.gama.GamaProject.entities.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>  {
	
	List<Project> findByUserId(Long userId);
	
	Optional<Project> findById(Long id);
	
}
