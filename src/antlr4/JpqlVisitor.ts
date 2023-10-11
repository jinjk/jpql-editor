// Generated from C:/Users/jiank/workspace/jpql/Jpql.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JpqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class JpqlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `JpqlParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.ql_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQl_statement?: (ctx: Ql_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.select_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_statement?: (ctx: Select_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.update_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_statement?: (ctx: Update_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.delete_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_statement?: (ctx: Delete_statementContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.from_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_clause?: (ctx: From_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.identificationVariableDeclarationOrCollectionMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentificationVariableDeclarationOrCollectionMemberDeclaration?: (ctx: IdentificationVariableDeclarationOrCollectionMemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.identification_variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentification_variable_declaration?: (ctx: Identification_variable_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.range_variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange_variable_declaration?: (ctx: Range_variable_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.join`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin?: (ctx: JoinContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.fetch_join`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFetch_join?: (ctx: Fetch_joinContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.join_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_spec?: (ctx: Join_specContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.join_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_condition?: (ctx: Join_conditionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.join_association_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_association_path_expression?: (ctx: Join_association_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.join_collection_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_collection_valued_path_expression?: (ctx: Join_collection_valued_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.join_single_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_single_valued_path_expression?: (ctx: Join_single_valued_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.collection_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_member_declaration?: (ctx: Collection_member_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.qualified_identification_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualified_identification_variable?: (ctx: Qualified_identification_variableContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.map_field_identification_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap_field_identification_variable?: (ctx: Map_field_identification_variableContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.single_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_path_expression?: (ctx: Single_valued_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.general_identification_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_identification_variable?: (ctx: General_identification_variableContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.general_subpath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_subpath?: (ctx: General_subpathContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_subpath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_subpath?: (ctx: Simple_subpathContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.treated_subpath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTreated_subpath?: (ctx: Treated_subpathContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.state_field_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_field_path_expression?: (ctx: State_field_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.state_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_valued_path_expression?: (ctx: State_valued_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.single_valued_object_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_object_path_expression?: (ctx: Single_valued_object_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.collection_valued_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_valued_path_expression?: (ctx: Collection_valued_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.update_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_clause?: (ctx: Update_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.update_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_item?: (ctx: Update_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.new_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_value?: (ctx: New_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.delete_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_clause?: (ctx: Delete_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.select_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_clause?: (ctx: Select_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.select_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_item?: (ctx: Select_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.select_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_expression?: (ctx: Select_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.constructor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_expression?: (ctx: Constructor_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.constructor_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_item?: (ctx: Constructor_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.aggregate_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_expression?: (ctx: Aggregate_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.where_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhere_clause?: (ctx: Where_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.groupby_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupby_clause?: (ctx: Groupby_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.groupby_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupby_item?: (ctx: Groupby_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.having_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHaving_clause?: (ctx: Having_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.orderby_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderby_clause?: (ctx: Orderby_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.orderby_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderby_item?: (ctx: Orderby_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.subquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.subquery_from_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery_from_clause?: (ctx: Subquery_from_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.subselect_identification_variable_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubselect_identification_variable_declaration?: (ctx: Subselect_identification_variable_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.derived_path_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerived_path_expression?: (ctx: Derived_path_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.general_derived_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_derived_path?: (ctx: General_derived_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_derived_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_derived_path?: (ctx: Simple_derived_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.treated_derived_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTreated_derived_path?: (ctx: Treated_derived_pathContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.derived_collection_member_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerived_collection_member_declaration?: (ctx: Derived_collection_member_declarationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_select_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_select_clause?: (ctx: Simple_select_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_select_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_select_expression?: (ctx: Simple_select_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.scalar_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalar_expression?: (ctx: Scalar_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.conditional_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_expression?: (ctx: Conditional_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.conditional_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_term?: (ctx: Conditional_termContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.conditional_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_factor?: (ctx: Conditional_factorContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.conditional_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditional_primary?: (ctx: Conditional_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_cond_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_cond_expression?: (ctx: Simple_cond_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.between_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBetween_expression?: (ctx: Between_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.in_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_expression?: (ctx: In_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.in_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn_item?: (ctx: In_itemContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.like_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLike_expression?: (ctx: Like_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.null_comparison_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_comparison_expression?: (ctx: Null_comparison_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.empty_collection_comparison_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_collection_comparison_expression?: (ctx: Empty_collection_comparison_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.collection_member_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_member_expression?: (ctx: Collection_member_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.entity_or_value_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_or_value_expression?: (ctx: Entity_or_value_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_entity_or_value_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_entity_or_value_expression?: (ctx: Simple_entity_or_value_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.exists_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists_expression?: (ctx: Exists_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.all_or_any_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_or_any_expression?: (ctx: All_or_any_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.comparison_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_expression?: (ctx: Comparison_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_operator?: (ctx: Comparison_operatorContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.arithmetic_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_expression?: (ctx: Arithmetic_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.arithmetic_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_term?: (ctx: Arithmetic_termContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.arithmetic_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_factor?: (ctx: Arithmetic_factorContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.arithmetic_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic_primary?: (ctx: Arithmetic_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.string_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_expression?: (ctx: String_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.datetime_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetime_expression?: (ctx: Datetime_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.boolean_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_expression?: (ctx: Boolean_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.enum_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_expression?: (ctx: Enum_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.entity_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_expression?: (ctx: Entity_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_entity_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_entity_expression?: (ctx: Simple_entity_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.entity_type_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_type_expression?: (ctx: Entity_type_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.type_discriminator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_discriminator?: (ctx: Type_discriminatorContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.functions_returning_numerics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions_returning_numerics?: (ctx: Functions_returning_numericsContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.functions_returning_datetime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions_returning_datetime?: (ctx: Functions_returning_datetimeContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.functions_returning_strings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions_returning_strings?: (ctx: Functions_returning_stringsContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.trim_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrim_specification?: (ctx: Trim_specificationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.function_invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_invocation?: (ctx: Function_invocationContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.extract_datetime_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract_datetime_field?: (ctx: Extract_datetime_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.datetime_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetime_field?: (ctx: Datetime_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.extract_datetime_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtract_datetime_part?: (ctx: Extract_datetime_partContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.datetime_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetime_part?: (ctx: Datetime_partContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.function_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_arg?: (ctx: Function_argContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.case_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_expression?: (ctx: Case_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.general_case_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_case_expression?: (ctx: General_case_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.when_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen_clause?: (ctx: When_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_case_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_case_expression?: (ctx: Simple_case_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.case_operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_operand?: (ctx: Case_operandContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.simple_when_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_when_clause?: (ctx: Simple_when_clauseContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.coalesce_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoalesce_expression?: (ctx: Coalesce_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.nullif_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullif_expression?: (ctx: Nullif_expressionContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.trim_character`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrim_character?: (ctx: Trim_characterContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.identification_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentification_variable?: (ctx: Identification_variableContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.constructor_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor_name?: (ctx: Constructor_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.input_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_parameter?: (ctx: Input_parameterContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.pattern_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern_value?: (ctx: Pattern_valueContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.date_time_timestamp_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_time_timestamp_literal?: (ctx: Date_time_timestamp_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.entity_type_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_type_literal?: (ctx: Entity_type_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.escape_character`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEscape_character?: (ctx: Escape_characterContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.numeric_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumeric_literal?: (ctx: Numeric_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.boolean_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean_literal?: (ctx: Boolean_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.enum_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_literal?: (ctx: Enum_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.string_literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_literal?: (ctx: String_literalContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.single_valued_embeddable_object_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_embeddable_object_field?: (ctx: Single_valued_embeddable_object_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.subtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtype?: (ctx: SubtypeContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.collection_valued_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_valued_field?: (ctx: Collection_valued_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.single_valued_object_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_object_field?: (ctx: Single_valued_object_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.state_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_field?: (ctx: State_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.collection_value_field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_value_field?: (ctx: Collection_value_fieldContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.entity_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_name?: (ctx: Entity_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.result_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult_variable?: (ctx: Result_variableContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.superquery_identification_variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperquery_identification_variable?: (ctx: Superquery_identification_variableContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.collection_valued_input_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollection_valued_input_parameter?: (ctx: Collection_valued_input_parameterContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.single_valued_input_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_valued_input_parameter?: (ctx: Single_valued_input_parameterContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_name?: (ctx: Function_nameContext) => Result;
	/**
	 * Visit a parse tree produced by `JpqlParser.character_valued_input_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacter_valued_input_parameter?: (ctx: Character_valued_input_parameterContext) => Result;
}

