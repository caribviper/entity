# caribviper-entity
Allows the utilisation of entities for a couchdb database

# Install

```
npm install @caribviper/entity
```

# Usage
## IEntity (interface)
base entity to be implemented

## IEntityMapBuilder<T extends Entity> (interface)
interface that allows entities to be mapped 

## Entity (abstract class, implements IEntity) 
implements IEntity

### abstract validateEntity 
Validates an entity
e.g. entity.validateEntity();

### _id
Unique id of the entity
e.g. entity._id

### _rev
revision of the entity
e.g. entity._rev

### type
Type of entity
e.g. entity.type

### timestamp
Time stamp of when entity was last modified
e.g. entity.timestamp

### isTransient 
Indicates if the entity is transient
e.g. entity.isTransient() //returns true/false

### hasType 
Indicates whether the entity has the type property set.
e.g. entity.hasType() //returns true/false

### update 
Changes the value of the timestamp to indicate the most recent update
e.g. entity.update();

### makeTransient 
Force an entity into a transient state
e.g. entity.makeTransient()


### generateId 
Static method that creates a Unique id based on the data passed
e.g. Entity.generateId('identifier-part1', 'identifier-part2')

### fromObject 
Converts an entity from an existing object
e.g. Entity.fromObject(newEntity, anyObject)

### mergeObject 
Merges an entity object to get a new entity object
e.g. Entity.mergeObject<TEntity>(entity1, entity2);

### updateTimestamp 
Updates an existing entity timestamp
e.g. Entity.updateTimestamp(entity)

### isNotTransient 
Checks to see if an entity is not transient
e.g. Entity.isNotTransient(entity)

### isTransient 
Checks to see if an entity is transient
e.g. Entity.isTransient(entity)

### hasType 
Checks whether the entity has a type
e.g. Entity.hasType(entity)

### mapToEntity 
Maps an object or an object array to an entity or entity array respectively


## EntityMaps (class)
Encapsulates entity mapping

### mapEntityMap
Executes the entity's mapping function, resulting with a new entity with all functions or the original entity on failure
e.g. EntityMaps.mapEntityMap<TEntity>(entityMapBuilder, entity)

### mapEntityMapArray
Executes the entity's mapping function for a set entities
e.g. mapEntityMapArray()
