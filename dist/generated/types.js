"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemQueryDocument = exports.ItemsOrderBy = void 0;
exports.useItemQueryQuery = useItemQueryQuery;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const Urql = __importStar(require("urql"));
/** Methods to use when ordering `Item`. */
var ItemsOrderBy;
(function (ItemsOrderBy) {
    ItemsOrderBy["DescriptionAsc"] = "DESCRIPTION_ASC";
    ItemsOrderBy["DescriptionDesc"] = "DESCRIPTION_DESC";
    ItemsOrderBy["IdAsc"] = "ID_ASC";
    ItemsOrderBy["IdDesc"] = "ID_DESC";
    ItemsOrderBy["NameAsc"] = "NAME_ASC";
    ItemsOrderBy["NameDesc"] = "NAME_DESC";
    ItemsOrderBy["Natural"] = "NATURAL";
    ItemsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    ItemsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    ItemsOrderBy["SerialAsc"] = "SERIAL_ASC";
    ItemsOrderBy["SerialDesc"] = "SERIAL_DESC";
})(ItemsOrderBy || (exports.ItemsOrderBy = ItemsOrderBy = {}));
exports.ItemQueryDocument = (0, graphql_tag_1.default) `
    query ItemQuery {
  items {
    nodes {
      description
      id
      name
      nodeId
      serial
    }
  }
}
    `;
function useItemQueryQuery(options) {
    return Urql.useQuery({ query: exports.ItemQueryDocument, ...options });
}
;
