"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encapsulates entity mapping
 */
var EntityMaps = /** @class */ (function () {
    function EntityMaps() {
    }
    /**
     * Executes the entity's mapping function, resulting with a new entity with all
     * functions or the original entity on failure
     * @param entityMapBuilder Entity Class to be mapped
     * @param source Source entity to be mapped
     */
    EntityMaps.mapEntityMap = function (entityMapBuilder, source) {
        return (!source || !entityMapBuilder) ? source : entityMapBuilder.mapToEntity(source);
    };
    /**
     * Executes the entity's mapping function for a set entities
     * @param entityMapBuilder Entity Class to be mapped
     * @param sources Array of entities to be mapped
     */
    EntityMaps.mapEntityMapArray = function (entityMapBuilder, sources) {
        var targets = [];
        sources.forEach(function (source) {
            targets.push(EntityMaps.mapEntityMap(entityMapBuilder, source));
        });
        return targets;
    };
    return EntityMaps;
}());
exports.EntityMaps = EntityMaps;
