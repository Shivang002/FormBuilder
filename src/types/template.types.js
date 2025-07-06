/**
 * @typedef {'label' | 'text' | 'number' | 'boolean' | 'enum'} FieldType
 */

/**
 * @typedef {Object} EnumOption
 * @property {string} id
 * @property {string} label
 * @property {string} value
 */

/**
 * @typedef {Object} Field
 * @property {string} id
 * @property {string} label
 * @property {FieldType} type
 * @property {string} [placeholder]
 * @property {boolean} [required]
 * @property {1 | 2 | 3} [headingLevel]
 * @property {EnumOption[]} [options]
 */

/**
 * @typedef {Object} Section
 * @property {string} id
 * @property {string} title
 * @property {Field[]} fields
 */

/**
 * @typedef {Object} Template
 * @property {string} id
 * @property {string} name
 * @property {Section[]} sections
 */
