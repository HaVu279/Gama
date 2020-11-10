package hoainguyen.gama.GamaProject.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import hoainguyen.gama.GamaProject.entities.GamaFile;

public interface GamaFileRepository  extends JpaRepository<GamaFile, Long> {
	List<GamaFile> findByProjectId(Long projectId);
	
	Optional<GamaFile> findById(Long id);
}
