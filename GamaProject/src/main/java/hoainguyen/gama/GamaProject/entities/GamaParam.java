package hoainguyen.gama.GamaProject.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_gama_param")
public class GamaParam {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column(name = "name", nullable = false)
    private String name;
	
	@Column(name = "type", nullable = false)
    private String type;
	
	@Column(name = "type_name", nullable = false)
    private String typeName;
	
	@Column(name = "value", nullable = false)
    private String value;
	
	@Column(name = "gama_file_id")
    private Long gamaFileId;

	public GamaParam() {
		super();
	}

	public GamaParam(Long id, String name, String type, String typeName, Long gamaFileId) {
		super();
		this.id = id;
		this.name = name;
		this.type = type;
		this.typeName = typeName;
		this.gamaFileId = gamaFileId;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public Long getGamaFileId() {
		return gamaFileId;
	}

	public void setGamaFileId(Long gamaFileId) {
		this.gamaFileId = gamaFileId;
	}
	
}
