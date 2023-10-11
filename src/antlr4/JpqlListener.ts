// Generated from C:/Users/jiank/workspace/jpql/Jpql.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


/**
 * JPQL per https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1.html#bnf
 *
 * This is JPA BNF for JPQL. There are gaps and inconsistencies in the BNF itself, explained by other fragments of the spec.
 *
 * @see https://github.com/jakartaee/persistence/blob/master/spec/src/main/asciidoc/ch04-query-language.adoc#bnf
 * @author Greg Turnquist
 * @since 3.1
 */


import { StartContext } from "./JpqlParser";
import { Ql_statementContext } from "./JpqlParser";
import { Select_statementContext } from "./JpqlParser";
import { Update_statementContext } from "./JpqlParser";
import { Delete_statementContext } from "./JpqlParser";
import { From_clauseContext } from "./JpqlParser";
import { IdentificationVariableDeclarationOrCollectionMemberDeclarationContext } from "./JpqlParser";
import { Identification_variable_declarationContext } from "./JpqlParser";
import { Range_variable_declarationContext } from "./JpqlParser";
import { JoinContext } from "./JpqlParser";
import { Fetch_joinContext } from "./JpqlParser";
import { Join_specContext } from "./JpqlParser";
import { Join_conditionContext } from "./JpqlParser";
import { Join_association_path_expressionContext } from "./JpqlParser";
import { Join_collection_valued_path_expressionContext } from "./JpqlParser";
import { Join_single_valued_path_expressionContext } from "./JpqlParser";
import { Collection_member_declarationContext } from "./JpqlParser";
import { Qualified_identification_variableContext } from "./JpqlParser";
import { Map_field_identification_variableContext } from "./JpqlParser";
import { Single_valued_path_expressionContext } from "./JpqlParser";
import { General_identification_variableContext } from "./JpqlParser";
import { General_subpathContext } from "./JpqlParser";
import { Simple_subpathContext } from "./JpqlParser";
import { Treated_subpathContext } from "./JpqlParser";
import { State_field_path_expressionContext } from "./JpqlParser";
import { State_valued_path_expressionContext } from "./JpqlParser";
import { Single_valued_object_path_expressionContext } from "./JpqlParser";
import { Collection_valued_path_expressionContext } from "./JpqlParser";
import { Update_clauseContext } from "./JpqlParser";
import { Update_itemContext } from "./JpqlParser";
import { New_valueContext } from "./JpqlParser";
import { Delete_clauseContext } from "./JpqlParser";
import { Select_clauseContext } from "./JpqlParser";
import { Select_itemContext } from "./JpqlParser";
import { Select_expressionContext } from "./JpqlParser";
import { Constructor_expressionContext } from "./JpqlParser";
import { Constructor_itemContext } from "./JpqlParser";
import { Aggregate_expressionContext } from "./JpqlParser";
import { Where_clauseContext } from "./JpqlParser";
import { Groupby_clauseContext } from "./JpqlParser";
import { Groupby_itemContext } from "./JpqlParser";
import { Having_clauseContext } from "./JpqlParser";
import { Orderby_clauseContext } from "./JpqlParser";
import { Orderby_itemContext } from "./JpqlParser";
import { SubqueryContext } from "./JpqlParser";
import { Subquery_from_clauseContext } from "./JpqlParser";
import { Subselect_identification_variable_declarationContext } from "./JpqlParser";
import { Derived_path_expressionContext } from "./JpqlParser";
import { General_derived_pathContext } from "./JpqlParser";
import { Simple_derived_pathContext } from "./JpqlParser";
import { Treated_derived_pathContext } from "./JpqlParser";
import { Derived_collection_member_declarationContext } from "./JpqlParser";
import { Simple_select_clauseContext } from "./JpqlParser";
import { Simple_select_expressionContext } from "./JpqlParser";
import { Scalar_expressionContext } from "./JpqlParser";
import { Conditional_expressionContext } from "./JpqlParser";
import { Conditional_termContext } from "./JpqlParser";
import { Conditional_factorContext } from "./JpqlParser";
import { Conditional_primaryContext } from "./JpqlParser";
import { Simple_cond_expressionContext } from "./JpqlParser";
import { Between_expressionContext } from "./JpqlParser";
import { In_expressionContext } from "./JpqlParser";
import { In_itemContext } from "./JpqlParser";
import { Like_expressionContext } from "./JpqlParser";
import { Null_comparison_expressionContext } from "./JpqlParser";
import { Empty_collection_comparison_expressionContext } from "./JpqlParser";
import { Collection_member_expressionContext } from "./JpqlParser";
import { Entity_or_value_expressionContext } from "./JpqlParser";
import { Simple_entity_or_value_expressionContext } from "./JpqlParser";
import { Exists_expressionContext } from "./JpqlParser";
import { All_or_any_expressionContext } from "./JpqlParser";
import { Comparison_expressionContext } from "./JpqlParser";
import { Comparison_operatorContext } from "./JpqlParser";
import { Arithmetic_expressionContext } from "./JpqlParser";
import { Arithmetic_termContext } from "./JpqlParser";
import { Arithmetic_factorContext } from "./JpqlParser";
import { Arithmetic_primaryContext } from "./JpqlParser";
import { String_expressionContext } from "./JpqlParser";
import { Datetime_expressionContext } from "./JpqlParser";
import { Boolean_expressionContext } from "./JpqlParser";
import { Enum_expressionContext } from "./JpqlParser";
import { Entity_expressionContext } from "./JpqlParser";
import { Simple_entity_expressionContext } from "./JpqlParser";
import { Entity_type_expressionContext } from "./JpqlParser";
import { Type_discriminatorContext } from "./JpqlParser";
import { Functions_returning_numericsContext } from "./JpqlParser";
import { Functions_returning_datetimeContext } from "./JpqlParser";
import { Functions_returning_stringsContext } from "./JpqlParser";
import { Trim_specificationContext } from "./JpqlParser";
import { Function_invocationContext } from "./JpqlParser";
import { Extract_datetime_fieldContext } from "./JpqlParser";
import { Datetime_fieldContext } from "./JpqlParser";
import { Extract_datetime_partContext } from "./JpqlParser";
import { Datetime_partContext } from "./JpqlParser";
import { Function_argContext } from "./JpqlParser";
import { Case_expressionContext } from "./JpqlParser";
import { General_case_expressionContext } from "./JpqlParser";
import { When_clauseContext } from "./JpqlParser";
import { Simple_case_expressionContext } from "./JpqlParser";
import { Case_operandContext } from "./JpqlParser";
import { Simple_when_clauseContext } from "./JpqlParser";
import { Coalesce_expressionContext } from "./JpqlParser";
import { Nullif_expressionContext } from "./JpqlParser";
import { Trim_characterContext } from "./JpqlParser";
import { Identification_variableContext } from "./JpqlParser";
import { Constructor_nameContext } from "./JpqlParser";
import { LiteralContext } from "./JpqlParser";
import { Input_parameterContext } from "./JpqlParser";
import { Pattern_valueContext } from "./JpqlParser";
import { Date_time_timestamp_literalContext } from "./JpqlParser";
import { Entity_type_literalContext } from "./JpqlParser";
import { Escape_characterContext } from "./JpqlParser";
import { Numeric_literalContext } from "./JpqlParser";
import { Boolean_literalContext } from "./JpqlParser";
import { Enum_literalContext } from "./JpqlParser";
import { String_literalContext } from "./JpqlParser";
import { Single_valued_embeddable_object_fieldContext } from "./JpqlParser";
import { SubtypeContext } from "./JpqlParser";
import { Collection_valued_fieldContext } from "./JpqlParser";
import { Single_valued_object_fieldContext } from "./JpqlParser";
import { State_fieldContext } from "./JpqlParser";
import { Collection_value_fieldContext } from "./JpqlParser";
import { Entity_nameContext } from "./JpqlParser";
import { Result_variableContext } from "./JpqlParser";
import { Superquery_identification_variableContext } from "./JpqlParser";
import { Collection_valued_input_parameterContext } from "./JpqlParser";
import { Single_valued_input_parameterContext } from "./JpqlParser";
import { Function_nameContext } from "./JpqlParser";
import { Character_valued_input_parameterContext } from "./JpqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `JpqlParser`.
 */
export default class JpqlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `JpqlParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.ql_statement`.
	 * @param ctx the parse tree
	 */
	enterQl_statement?: (ctx: Ql_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.ql_statement`.
	 * @param ctx the parse tree
	 */
	exitQl_statement?: (ctx: Ql_statementContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	enterUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.update_statement`.
	 * @param ctx the parse tree
	 */
	exitUpdate_statement?: (ctx: Update_statementContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	enterDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.delete_statement`.
	 * @param ctx the parse tree
	 */
	exitDelete_statement?: (ctx: Delete_statementContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.from_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.from_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.identificationVariableDeclarationOrCollectionMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterIdentificationVariableDeclarationOrCollectionMemberDeclaration?: (ctx: IdentificationVariableDeclarationOrCollectionMemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.identificationVariableDeclarationOrCollectionMemberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitIdentificationVariableDeclarationOrCollectionMemberDeclaration?: (ctx: IdentificationVariableDeclarationOrCollectionMemberDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterIdentification_variable_declaration?: (ctx: Identification_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitIdentification_variable_declaration?: (ctx: Identification_variable_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.range_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterRange_variable_declaration?: (ctx: Range_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.range_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitRange_variable_declaration?: (ctx: Range_variable_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.join`.
	 * @param ctx the parse tree
	 */
	enterJoin?: (ctx: JoinContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.join`.
	 * @param ctx the parse tree
	 */
	exitJoin?: (ctx: JoinContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.fetch_join`.
	 * @param ctx the parse tree
	 */
	enterFetch_join?: (ctx: Fetch_joinContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.fetch_join`.
	 * @param ctx the parse tree
	 */
	exitFetch_join?: (ctx: Fetch_joinContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.join_spec`.
	 * @param ctx the parse tree
	 */
	enterJoin_spec?: (ctx: Join_specContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.join_spec`.
	 * @param ctx the parse tree
	 */
	exitJoin_spec?: (ctx: Join_specContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.join_condition`.
	 * @param ctx the parse tree
	 */
	enterJoin_condition?: (ctx: Join_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.join_condition`.
	 * @param ctx the parse tree
	 */
	exitJoin_condition?: (ctx: Join_conditionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.join_association_path_expression`.
	 * @param ctx the parse tree
	 */
	enterJoin_association_path_expression?: (ctx: Join_association_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.join_association_path_expression`.
	 * @param ctx the parse tree
	 */
	exitJoin_association_path_expression?: (ctx: Join_association_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.join_collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterJoin_collection_valued_path_expression?: (ctx: Join_collection_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.join_collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitJoin_collection_valued_path_expression?: (ctx: Join_collection_valued_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.join_single_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterJoin_single_valued_path_expression?: (ctx: Join_single_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.join_single_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitJoin_single_valued_path_expression?: (ctx: Join_single_valued_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.collection_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterCollection_member_declaration?: (ctx: Collection_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.collection_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitCollection_member_declaration?: (ctx: Collection_member_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.qualified_identification_variable`.
	 * @param ctx the parse tree
	 */
	enterQualified_identification_variable?: (ctx: Qualified_identification_variableContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.qualified_identification_variable`.
	 * @param ctx the parse tree
	 */
	exitQualified_identification_variable?: (ctx: Qualified_identification_variableContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.map_field_identification_variable`.
	 * @param ctx the parse tree
	 */
	enterMap_field_identification_variable?: (ctx: Map_field_identification_variableContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.map_field_identification_variable`.
	 * @param ctx the parse tree
	 */
	exitMap_field_identification_variable?: (ctx: Map_field_identification_variableContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.single_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_path_expression?: (ctx: Single_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.single_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_path_expression?: (ctx: Single_valued_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.general_identification_variable`.
	 * @param ctx the parse tree
	 */
	enterGeneral_identification_variable?: (ctx: General_identification_variableContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.general_identification_variable`.
	 * @param ctx the parse tree
	 */
	exitGeneral_identification_variable?: (ctx: General_identification_variableContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.general_subpath`.
	 * @param ctx the parse tree
	 */
	enterGeneral_subpath?: (ctx: General_subpathContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.general_subpath`.
	 * @param ctx the parse tree
	 */
	exitGeneral_subpath?: (ctx: General_subpathContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_subpath`.
	 * @param ctx the parse tree
	 */
	enterSimple_subpath?: (ctx: Simple_subpathContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_subpath`.
	 * @param ctx the parse tree
	 */
	exitSimple_subpath?: (ctx: Simple_subpathContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.treated_subpath`.
	 * @param ctx the parse tree
	 */
	enterTreated_subpath?: (ctx: Treated_subpathContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.treated_subpath`.
	 * @param ctx the parse tree
	 */
	exitTreated_subpath?: (ctx: Treated_subpathContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.state_field_path_expression`.
	 * @param ctx the parse tree
	 */
	enterState_field_path_expression?: (ctx: State_field_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.state_field_path_expression`.
	 * @param ctx the parse tree
	 */
	exitState_field_path_expression?: (ctx: State_field_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.state_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterState_valued_path_expression?: (ctx: State_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.state_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitState_valued_path_expression?: (ctx: State_valued_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.single_valued_object_path_expression`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_object_path_expression?: (ctx: Single_valued_object_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.single_valued_object_path_expression`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_object_path_expression?: (ctx: Single_valued_object_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	enterCollection_valued_path_expression?: (ctx: Collection_valued_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.collection_valued_path_expression`.
	 * @param ctx the parse tree
	 */
	exitCollection_valued_path_expression?: (ctx: Collection_valued_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.update_clause`.
	 * @param ctx the parse tree
	 */
	enterUpdate_clause?: (ctx: Update_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.update_clause`.
	 * @param ctx the parse tree
	 */
	exitUpdate_clause?: (ctx: Update_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.update_item`.
	 * @param ctx the parse tree
	 */
	enterUpdate_item?: (ctx: Update_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.update_item`.
	 * @param ctx the parse tree
	 */
	exitUpdate_item?: (ctx: Update_itemContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.new_value`.
	 * @param ctx the parse tree
	 */
	enterNew_value?: (ctx: New_valueContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.new_value`.
	 * @param ctx the parse tree
	 */
	exitNew_value?: (ctx: New_valueContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.delete_clause`.
	 * @param ctx the parse tree
	 */
	enterDelete_clause?: (ctx: Delete_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.delete_clause`.
	 * @param ctx the parse tree
	 */
	exitDelete_clause?: (ctx: Delete_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.select_clause`.
	 * @param ctx the parse tree
	 */
	enterSelect_clause?: (ctx: Select_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.select_clause`.
	 * @param ctx the parse tree
	 */
	exitSelect_clause?: (ctx: Select_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.select_item`.
	 * @param ctx the parse tree
	 */
	enterSelect_item?: (ctx: Select_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.select_item`.
	 * @param ctx the parse tree
	 */
	exitSelect_item?: (ctx: Select_itemContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.select_expression`.
	 * @param ctx the parse tree
	 */
	enterSelect_expression?: (ctx: Select_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.select_expression`.
	 * @param ctx the parse tree
	 */
	exitSelect_expression?: (ctx: Select_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.constructor_expression`.
	 * @param ctx the parse tree
	 */
	enterConstructor_expression?: (ctx: Constructor_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.constructor_expression`.
	 * @param ctx the parse tree
	 */
	exitConstructor_expression?: (ctx: Constructor_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.constructor_item`.
	 * @param ctx the parse tree
	 */
	enterConstructor_item?: (ctx: Constructor_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.constructor_item`.
	 * @param ctx the parse tree
	 */
	exitConstructor_item?: (ctx: Constructor_itemContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.aggregate_expression`.
	 * @param ctx the parse tree
	 */
	enterAggregate_expression?: (ctx: Aggregate_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.aggregate_expression`.
	 * @param ctx the parse tree
	 */
	exitAggregate_expression?: (ctx: Aggregate_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.where_clause`.
	 * @param ctx the parse tree
	 */
	enterWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.where_clause`.
	 * @param ctx the parse tree
	 */
	exitWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	enterGroupby_clause?: (ctx: Groupby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	exitGroupby_clause?: (ctx: Groupby_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.groupby_item`.
	 * @param ctx the parse tree
	 */
	enterGroupby_item?: (ctx: Groupby_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.groupby_item`.
	 * @param ctx the parse tree
	 */
	exitGroupby_item?: (ctx: Groupby_itemContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.having_clause`.
	 * @param ctx the parse tree
	 */
	enterHaving_clause?: (ctx: Having_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.having_clause`.
	 * @param ctx the parse tree
	 */
	exitHaving_clause?: (ctx: Having_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	enterOrderby_clause?: (ctx: Orderby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	exitOrderby_clause?: (ctx: Orderby_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.orderby_item`.
	 * @param ctx the parse tree
	 */
	enterOrderby_item?: (ctx: Orderby_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.orderby_item`.
	 * @param ctx the parse tree
	 */
	exitOrderby_item?: (ctx: Orderby_itemContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.subquery_from_clause`.
	 * @param ctx the parse tree
	 */
	enterSubquery_from_clause?: (ctx: Subquery_from_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.subquery_from_clause`.
	 * @param ctx the parse tree
	 */
	exitSubquery_from_clause?: (ctx: Subquery_from_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.subselect_identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterSubselect_identification_variable_declaration?: (ctx: Subselect_identification_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.subselect_identification_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitSubselect_identification_variable_declaration?: (ctx: Subselect_identification_variable_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.derived_path_expression`.
	 * @param ctx the parse tree
	 */
	enterDerived_path_expression?: (ctx: Derived_path_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.derived_path_expression`.
	 * @param ctx the parse tree
	 */
	exitDerived_path_expression?: (ctx: Derived_path_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.general_derived_path`.
	 * @param ctx the parse tree
	 */
	enterGeneral_derived_path?: (ctx: General_derived_pathContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.general_derived_path`.
	 * @param ctx the parse tree
	 */
	exitGeneral_derived_path?: (ctx: General_derived_pathContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_derived_path`.
	 * @param ctx the parse tree
	 */
	enterSimple_derived_path?: (ctx: Simple_derived_pathContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_derived_path`.
	 * @param ctx the parse tree
	 */
	exitSimple_derived_path?: (ctx: Simple_derived_pathContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.treated_derived_path`.
	 * @param ctx the parse tree
	 */
	enterTreated_derived_path?: (ctx: Treated_derived_pathContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.treated_derived_path`.
	 * @param ctx the parse tree
	 */
	exitTreated_derived_path?: (ctx: Treated_derived_pathContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.derived_collection_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterDerived_collection_member_declaration?: (ctx: Derived_collection_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.derived_collection_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitDerived_collection_member_declaration?: (ctx: Derived_collection_member_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_select_clause`.
	 * @param ctx the parse tree
	 */
	enterSimple_select_clause?: (ctx: Simple_select_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_select_clause`.
	 * @param ctx the parse tree
	 */
	exitSimple_select_clause?: (ctx: Simple_select_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_select_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_select_expression?: (ctx: Simple_select_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_select_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_select_expression?: (ctx: Simple_select_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.scalar_expression`.
	 * @param ctx the parse tree
	 */
	enterScalar_expression?: (ctx: Scalar_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.scalar_expression`.
	 * @param ctx the parse tree
	 */
	exitScalar_expression?: (ctx: Scalar_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.conditional_term`.
	 * @param ctx the parse tree
	 */
	enterConditional_term?: (ctx: Conditional_termContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.conditional_term`.
	 * @param ctx the parse tree
	 */
	exitConditional_term?: (ctx: Conditional_termContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.conditional_factor`.
	 * @param ctx the parse tree
	 */
	enterConditional_factor?: (ctx: Conditional_factorContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.conditional_factor`.
	 * @param ctx the parse tree
	 */
	exitConditional_factor?: (ctx: Conditional_factorContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.conditional_primary`.
	 * @param ctx the parse tree
	 */
	enterConditional_primary?: (ctx: Conditional_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.conditional_primary`.
	 * @param ctx the parse tree
	 */
	exitConditional_primary?: (ctx: Conditional_primaryContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_cond_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_cond_expression?: (ctx: Simple_cond_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_cond_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_cond_expression?: (ctx: Simple_cond_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.between_expression`.
	 * @param ctx the parse tree
	 */
	enterBetween_expression?: (ctx: Between_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.between_expression`.
	 * @param ctx the parse tree
	 */
	exitBetween_expression?: (ctx: Between_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.in_expression`.
	 * @param ctx the parse tree
	 */
	enterIn_expression?: (ctx: In_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.in_expression`.
	 * @param ctx the parse tree
	 */
	exitIn_expression?: (ctx: In_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.in_item`.
	 * @param ctx the parse tree
	 */
	enterIn_item?: (ctx: In_itemContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.in_item`.
	 * @param ctx the parse tree
	 */
	exitIn_item?: (ctx: In_itemContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.like_expression`.
	 * @param ctx the parse tree
	 */
	enterLike_expression?: (ctx: Like_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.like_expression`.
	 * @param ctx the parse tree
	 */
	exitLike_expression?: (ctx: Like_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.null_comparison_expression`.
	 * @param ctx the parse tree
	 */
	enterNull_comparison_expression?: (ctx: Null_comparison_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.null_comparison_expression`.
	 * @param ctx the parse tree
	 */
	exitNull_comparison_expression?: (ctx: Null_comparison_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.empty_collection_comparison_expression`.
	 * @param ctx the parse tree
	 */
	enterEmpty_collection_comparison_expression?: (ctx: Empty_collection_comparison_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.empty_collection_comparison_expression`.
	 * @param ctx the parse tree
	 */
	exitEmpty_collection_comparison_expression?: (ctx: Empty_collection_comparison_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.collection_member_expression`.
	 * @param ctx the parse tree
	 */
	enterCollection_member_expression?: (ctx: Collection_member_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.collection_member_expression`.
	 * @param ctx the parse tree
	 */
	exitCollection_member_expression?: (ctx: Collection_member_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.entity_or_value_expression`.
	 * @param ctx the parse tree
	 */
	enterEntity_or_value_expression?: (ctx: Entity_or_value_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.entity_or_value_expression`.
	 * @param ctx the parse tree
	 */
	exitEntity_or_value_expression?: (ctx: Entity_or_value_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_entity_or_value_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_entity_or_value_expression?: (ctx: Simple_entity_or_value_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_entity_or_value_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_entity_or_value_expression?: (ctx: Simple_entity_or_value_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.exists_expression`.
	 * @param ctx the parse tree
	 */
	enterExists_expression?: (ctx: Exists_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.exists_expression`.
	 * @param ctx the parse tree
	 */
	exitExists_expression?: (ctx: Exists_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.all_or_any_expression`.
	 * @param ctx the parse tree
	 */
	enterAll_or_any_expression?: (ctx: All_or_any_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.all_or_any_expression`.
	 * @param ctx the parse tree
	 */
	exitAll_or_any_expression?: (ctx: All_or_any_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.comparison_expression`.
	 * @param ctx the parse tree
	 */
	enterComparison_expression?: (ctx: Comparison_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.comparison_expression`.
	 * @param ctx the parse tree
	 */
	exitComparison_expression?: (ctx: Comparison_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	exitComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.arithmetic_term`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_term?: (ctx: Arithmetic_termContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.arithmetic_term`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_term?: (ctx: Arithmetic_termContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.arithmetic_factor`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_factor?: (ctx: Arithmetic_factorContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.arithmetic_factor`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_factor?: (ctx: Arithmetic_factorContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.arithmetic_primary`.
	 * @param ctx the parse tree
	 */
	enterArithmetic_primary?: (ctx: Arithmetic_primaryContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.arithmetic_primary`.
	 * @param ctx the parse tree
	 */
	exitArithmetic_primary?: (ctx: Arithmetic_primaryContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.string_expression`.
	 * @param ctx the parse tree
	 */
	enterString_expression?: (ctx: String_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.string_expression`.
	 * @param ctx the parse tree
	 */
	exitString_expression?: (ctx: String_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.datetime_expression`.
	 * @param ctx the parse tree
	 */
	enterDatetime_expression?: (ctx: Datetime_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.datetime_expression`.
	 * @param ctx the parse tree
	 */
	exitDatetime_expression?: (ctx: Datetime_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.boolean_expression`.
	 * @param ctx the parse tree
	 */
	enterBoolean_expression?: (ctx: Boolean_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.boolean_expression`.
	 * @param ctx the parse tree
	 */
	exitBoolean_expression?: (ctx: Boolean_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.enum_expression`.
	 * @param ctx the parse tree
	 */
	enterEnum_expression?: (ctx: Enum_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.enum_expression`.
	 * @param ctx the parse tree
	 */
	exitEnum_expression?: (ctx: Enum_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.entity_expression`.
	 * @param ctx the parse tree
	 */
	enterEntity_expression?: (ctx: Entity_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.entity_expression`.
	 * @param ctx the parse tree
	 */
	exitEntity_expression?: (ctx: Entity_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_entity_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_entity_expression?: (ctx: Simple_entity_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_entity_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_entity_expression?: (ctx: Simple_entity_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.entity_type_expression`.
	 * @param ctx the parse tree
	 */
	enterEntity_type_expression?: (ctx: Entity_type_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.entity_type_expression`.
	 * @param ctx the parse tree
	 */
	exitEntity_type_expression?: (ctx: Entity_type_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.type_discriminator`.
	 * @param ctx the parse tree
	 */
	enterType_discriminator?: (ctx: Type_discriminatorContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.type_discriminator`.
	 * @param ctx the parse tree
	 */
	exitType_discriminator?: (ctx: Type_discriminatorContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.functions_returning_numerics`.
	 * @param ctx the parse tree
	 */
	enterFunctions_returning_numerics?: (ctx: Functions_returning_numericsContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.functions_returning_numerics`.
	 * @param ctx the parse tree
	 */
	exitFunctions_returning_numerics?: (ctx: Functions_returning_numericsContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.functions_returning_datetime`.
	 * @param ctx the parse tree
	 */
	enterFunctions_returning_datetime?: (ctx: Functions_returning_datetimeContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.functions_returning_datetime`.
	 * @param ctx the parse tree
	 */
	exitFunctions_returning_datetime?: (ctx: Functions_returning_datetimeContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.functions_returning_strings`.
	 * @param ctx the parse tree
	 */
	enterFunctions_returning_strings?: (ctx: Functions_returning_stringsContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.functions_returning_strings`.
	 * @param ctx the parse tree
	 */
	exitFunctions_returning_strings?: (ctx: Functions_returning_stringsContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.trim_specification`.
	 * @param ctx the parse tree
	 */
	enterTrim_specification?: (ctx: Trim_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.trim_specification`.
	 * @param ctx the parse tree
	 */
	exitTrim_specification?: (ctx: Trim_specificationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.function_invocation`.
	 * @param ctx the parse tree
	 */
	enterFunction_invocation?: (ctx: Function_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.function_invocation`.
	 * @param ctx the parse tree
	 */
	exitFunction_invocation?: (ctx: Function_invocationContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.extract_datetime_field`.
	 * @param ctx the parse tree
	 */
	enterExtract_datetime_field?: (ctx: Extract_datetime_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.extract_datetime_field`.
	 * @param ctx the parse tree
	 */
	exitExtract_datetime_field?: (ctx: Extract_datetime_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.datetime_field`.
	 * @param ctx the parse tree
	 */
	enterDatetime_field?: (ctx: Datetime_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.datetime_field`.
	 * @param ctx the parse tree
	 */
	exitDatetime_field?: (ctx: Datetime_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.extract_datetime_part`.
	 * @param ctx the parse tree
	 */
	enterExtract_datetime_part?: (ctx: Extract_datetime_partContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.extract_datetime_part`.
	 * @param ctx the parse tree
	 */
	exitExtract_datetime_part?: (ctx: Extract_datetime_partContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.datetime_part`.
	 * @param ctx the parse tree
	 */
	enterDatetime_part?: (ctx: Datetime_partContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.datetime_part`.
	 * @param ctx the parse tree
	 */
	exitDatetime_part?: (ctx: Datetime_partContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.function_arg`.
	 * @param ctx the parse tree
	 */
	enterFunction_arg?: (ctx: Function_argContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.function_arg`.
	 * @param ctx the parse tree
	 */
	exitFunction_arg?: (ctx: Function_argContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.general_case_expression`.
	 * @param ctx the parse tree
	 */
	enterGeneral_case_expression?: (ctx: General_case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.general_case_expression`.
	 * @param ctx the parse tree
	 */
	exitGeneral_case_expression?: (ctx: General_case_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.when_clause`.
	 * @param ctx the parse tree
	 */
	enterWhen_clause?: (ctx: When_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.when_clause`.
	 * @param ctx the parse tree
	 */
	exitWhen_clause?: (ctx: When_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_case_expression`.
	 * @param ctx the parse tree
	 */
	enterSimple_case_expression?: (ctx: Simple_case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_case_expression`.
	 * @param ctx the parse tree
	 */
	exitSimple_case_expression?: (ctx: Simple_case_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.case_operand`.
	 * @param ctx the parse tree
	 */
	enterCase_operand?: (ctx: Case_operandContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.case_operand`.
	 * @param ctx the parse tree
	 */
	exitCase_operand?: (ctx: Case_operandContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.simple_when_clause`.
	 * @param ctx the parse tree
	 */
	enterSimple_when_clause?: (ctx: Simple_when_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.simple_when_clause`.
	 * @param ctx the parse tree
	 */
	exitSimple_when_clause?: (ctx: Simple_when_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.coalesce_expression`.
	 * @param ctx the parse tree
	 */
	enterCoalesce_expression?: (ctx: Coalesce_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.coalesce_expression`.
	 * @param ctx the parse tree
	 */
	exitCoalesce_expression?: (ctx: Coalesce_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.nullif_expression`.
	 * @param ctx the parse tree
	 */
	enterNullif_expression?: (ctx: Nullif_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.nullif_expression`.
	 * @param ctx the parse tree
	 */
	exitNullif_expression?: (ctx: Nullif_expressionContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.trim_character`.
	 * @param ctx the parse tree
	 */
	enterTrim_character?: (ctx: Trim_characterContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.trim_character`.
	 * @param ctx the parse tree
	 */
	exitTrim_character?: (ctx: Trim_characterContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.identification_variable`.
	 * @param ctx the parse tree
	 */
	enterIdentification_variable?: (ctx: Identification_variableContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.identification_variable`.
	 * @param ctx the parse tree
	 */
	exitIdentification_variable?: (ctx: Identification_variableContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.constructor_name`.
	 * @param ctx the parse tree
	 */
	enterConstructor_name?: (ctx: Constructor_nameContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.constructor_name`.
	 * @param ctx the parse tree
	 */
	exitConstructor_name?: (ctx: Constructor_nameContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.input_parameter`.
	 * @param ctx the parse tree
	 */
	enterInput_parameter?: (ctx: Input_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.input_parameter`.
	 * @param ctx the parse tree
	 */
	exitInput_parameter?: (ctx: Input_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.pattern_value`.
	 * @param ctx the parse tree
	 */
	enterPattern_value?: (ctx: Pattern_valueContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.pattern_value`.
	 * @param ctx the parse tree
	 */
	exitPattern_value?: (ctx: Pattern_valueContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.date_time_timestamp_literal`.
	 * @param ctx the parse tree
	 */
	enterDate_time_timestamp_literal?: (ctx: Date_time_timestamp_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.date_time_timestamp_literal`.
	 * @param ctx the parse tree
	 */
	exitDate_time_timestamp_literal?: (ctx: Date_time_timestamp_literalContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.entity_type_literal`.
	 * @param ctx the parse tree
	 */
	enterEntity_type_literal?: (ctx: Entity_type_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.entity_type_literal`.
	 * @param ctx the parse tree
	 */
	exitEntity_type_literal?: (ctx: Entity_type_literalContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.escape_character`.
	 * @param ctx the parse tree
	 */
	enterEscape_character?: (ctx: Escape_characterContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.escape_character`.
	 * @param ctx the parse tree
	 */
	exitEscape_character?: (ctx: Escape_characterContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	enterNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.numeric_literal`.
	 * @param ctx the parse tree
	 */
	exitNumeric_literal?: (ctx: Numeric_literalContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	exitBoolean_literal?: (ctx: Boolean_literalContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.enum_literal`.
	 * @param ctx the parse tree
	 */
	enterEnum_literal?: (ctx: Enum_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.enum_literal`.
	 * @param ctx the parse tree
	 */
	exitEnum_literal?: (ctx: Enum_literalContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.single_valued_embeddable_object_field`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_embeddable_object_field?: (ctx: Single_valued_embeddable_object_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.single_valued_embeddable_object_field`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_embeddable_object_field?: (ctx: Single_valued_embeddable_object_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.subtype`.
	 * @param ctx the parse tree
	 */
	enterSubtype?: (ctx: SubtypeContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.subtype`.
	 * @param ctx the parse tree
	 */
	exitSubtype?: (ctx: SubtypeContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.collection_valued_field`.
	 * @param ctx the parse tree
	 */
	enterCollection_valued_field?: (ctx: Collection_valued_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.collection_valued_field`.
	 * @param ctx the parse tree
	 */
	exitCollection_valued_field?: (ctx: Collection_valued_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.single_valued_object_field`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_object_field?: (ctx: Single_valued_object_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.single_valued_object_field`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_object_field?: (ctx: Single_valued_object_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.state_field`.
	 * @param ctx the parse tree
	 */
	enterState_field?: (ctx: State_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.state_field`.
	 * @param ctx the parse tree
	 */
	exitState_field?: (ctx: State_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.collection_value_field`.
	 * @param ctx the parse tree
	 */
	enterCollection_value_field?: (ctx: Collection_value_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.collection_value_field`.
	 * @param ctx the parse tree
	 */
	exitCollection_value_field?: (ctx: Collection_value_fieldContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.entity_name`.
	 * @param ctx the parse tree
	 */
	enterEntity_name?: (ctx: Entity_nameContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.entity_name`.
	 * @param ctx the parse tree
	 */
	exitEntity_name?: (ctx: Entity_nameContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.result_variable`.
	 * @param ctx the parse tree
	 */
	enterResult_variable?: (ctx: Result_variableContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.result_variable`.
	 * @param ctx the parse tree
	 */
	exitResult_variable?: (ctx: Result_variableContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.superquery_identification_variable`.
	 * @param ctx the parse tree
	 */
	enterSuperquery_identification_variable?: (ctx: Superquery_identification_variableContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.superquery_identification_variable`.
	 * @param ctx the parse tree
	 */
	exitSuperquery_identification_variable?: (ctx: Superquery_identification_variableContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.collection_valued_input_parameter`.
	 * @param ctx the parse tree
	 */
	enterCollection_valued_input_parameter?: (ctx: Collection_valued_input_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.collection_valued_input_parameter`.
	 * @param ctx the parse tree
	 */
	exitCollection_valued_input_parameter?: (ctx: Collection_valued_input_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.single_valued_input_parameter`.
	 * @param ctx the parse tree
	 */
	enterSingle_valued_input_parameter?: (ctx: Single_valued_input_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.single_valued_input_parameter`.
	 * @param ctx the parse tree
	 */
	exitSingle_valued_input_parameter?: (ctx: Single_valued_input_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Enter a parse tree produced by `JpqlParser.character_valued_input_parameter`.
	 * @param ctx the parse tree
	 */
	enterCharacter_valued_input_parameter?: (ctx: Character_valued_input_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `JpqlParser.character_valued_input_parameter`.
	 * @param ctx the parse tree
	 */
	exitCharacter_valued_input_parameter?: (ctx: Character_valued_input_parameterContext) => void;
}

