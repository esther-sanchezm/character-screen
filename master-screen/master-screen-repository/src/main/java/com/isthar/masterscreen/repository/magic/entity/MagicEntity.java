package com.isthar.masterscreen.repository.magic.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Magic")
public class MagicEntity {

    private static final String ID = "id";
    private static final String NAME = "name";
    private static final String DESCRIPTION = "description";

    @Id
    @Column(name = ID)
    private Integer id;

    @Column(name = NAME)
    private String name;

    @Column(name = DESCRIPTION)
    private String description;

}
