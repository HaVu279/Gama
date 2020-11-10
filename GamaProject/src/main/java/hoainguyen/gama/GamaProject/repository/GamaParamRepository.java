package hoainguyen.gama.GamaProject.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import hoainguyen.gama.GamaProject.entities.GamaParam;

public interface GamaParamRepository extends JpaRepository<GamaParam, Long> {
	
	List<GamaParam> findByGamaFileId(Long gamaFileId);
	
}
