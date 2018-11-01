import { Entity, IEntityMapBuilder } from './entity';
/**
 * Base entity map function
 */
export interface IEntityMapFunction<T extends Entity> {
    (source: T): T;
}
/**
 * Encapsulates entity mapping
 */
export declare class EntityMaps {
    /**
     * Executes the entity's mapping function, resulting with a new entity with all
     * functions or the original entity on failure
     * @param entityMapBuilder Entity Class to be mapped
     * @param source Source entity to be mapped
     */
    static mapEntityMap<T extends Entity>(entityMapBuilder: IEntityMapBuilder<T>, source: T): T;
    /**
     * Executes the entity's mapping function for a set entities
     * @param entityMapBuilder Entity Class to be mapped
     * @param sources Array of entities to be mapped
     */
    static mapEntityMapArray<T extends Entity>(entityMapBuilder: IEntityMapBuilder<T>, sources: T[]): T[];
}
