// Generated from C:/Users/jiank/workspace/jpql/Jpql.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import JpqlListener from "./JpqlListener.js";
import JpqlVisitor from "./JpqlVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


/**
 * JPQL per https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1.html#bnf
 *
 * This is JPA BNF for JPQL. There are gaps and inconsistencies in the BNF itself, explained by other fragments of the spec.
 *
 * @see https://github.com/jakartaee/persistence/blob/master/spec/src/main/asciidoc/ch04-query-language.adoc#bnf
 * @author Greg Turnquist
 * @since 3.1
 */

export default class JpqlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly WS = 15;
	public static readonly ABS = 16;
	public static readonly ALL = 17;
	public static readonly AND = 18;
	public static readonly ANY = 19;
	public static readonly AS = 20;
	public static readonly ASC = 21;
	public static readonly AVG = 22;
	public static readonly BETWEEN = 23;
	public static readonly BOTH = 24;
	public static readonly BY = 25;
	public static readonly CASE = 26;
	public static readonly CEILING = 27;
	public static readonly COALESCE = 28;
	public static readonly CONCAT = 29;
	public static readonly COUNT = 30;
	public static readonly CURRENT_DATE = 31;
	public static readonly CURRENT_TIME = 32;
	public static readonly CURRENT_TIMESTAMP = 33;
	public static readonly DATE = 34;
	public static readonly DATETIME = 35;
	public static readonly DELETE = 36;
	public static readonly DESC = 37;
	public static readonly DISTINCT = 38;
	public static readonly END = 39;
	public static readonly ELSE = 40;
	public static readonly EMPTY = 41;
	public static readonly ENTRY = 42;
	public static readonly ESCAPE = 43;
	public static readonly EXISTS = 44;
	public static readonly EXP = 45;
	public static readonly EXTRACT = 46;
	public static readonly FALSE = 47;
	public static readonly FETCH = 48;
	public static readonly FLOOR = 49;
	public static readonly FROM = 50;
	public static readonly FUNCTION = 51;
	public static readonly GROUP = 52;
	public static readonly HAVING = 53;
	public static readonly IN = 54;
	public static readonly INDEX = 55;
	public static readonly INNER = 56;
	public static readonly IS = 57;
	public static readonly JOIN = 58;
	public static readonly KEY = 59;
	public static readonly LEADING = 60;
	public static readonly LEFT = 61;
	public static readonly LENGTH = 62;
	public static readonly LIKE = 63;
	public static readonly LN = 64;
	public static readonly LOCAL = 65;
	public static readonly LOCATE = 66;
	public static readonly LOWER = 67;
	public static readonly MAX = 68;
	public static readonly MEMBER = 69;
	public static readonly MIN = 70;
	public static readonly MOD = 71;
	public static readonly NEW = 72;
	public static readonly NOT = 73;
	public static readonly NULL = 74;
	public static readonly NULLIF = 75;
	public static readonly OBJECT = 76;
	public static readonly OF = 77;
	public static readonly ON = 78;
	public static readonly OR = 79;
	public static readonly ORDER = 80;
	public static readonly OUTER = 81;
	public static readonly POWER = 82;
	public static readonly ROUND = 83;
	public static readonly SELECT = 84;
	public static readonly SET = 85;
	public static readonly SIGN = 86;
	public static readonly SIZE = 87;
	public static readonly SOME = 88;
	public static readonly SQRT = 89;
	public static readonly SUBSTRING = 90;
	public static readonly SUM = 91;
	public static readonly THEN = 92;
	public static readonly TIME = 93;
	public static readonly TRAILING = 94;
	public static readonly TREAT = 95;
	public static readonly TRIM = 96;
	public static readonly TRUE = 97;
	public static readonly TYPE = 98;
	public static readonly UPDATE = 99;
	public static readonly UPPER = 100;
	public static readonly VALUE = 101;
	public static readonly WHEN = 102;
	public static readonly WHERE = 103;
	public static readonly EQUAL = 104;
	public static readonly NOT_EQUAL = 105;
	public static readonly CHARACTER = 106;
	public static readonly IDENTIFICATION_VARIABLE = 107;
	public static readonly STRINGLITERAL = 108;
	public static readonly FLOATLITERAL = 109;
	public static readonly INTLITERAL = 110;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_start = 0;
	public static readonly RULE_ql_statement = 1;
	public static readonly RULE_select_statement = 2;
	public static readonly RULE_update_statement = 3;
	public static readonly RULE_delete_statement = 4;
	public static readonly RULE_from_clause = 5;
	public static readonly RULE_identificationVariableDeclarationOrCollectionMemberDeclaration = 6;
	public static readonly RULE_identification_variable_declaration = 7;
	public static readonly RULE_range_variable_declaration = 8;
	public static readonly RULE_join = 9;
	public static readonly RULE_fetch_join = 10;
	public static readonly RULE_join_spec = 11;
	public static readonly RULE_join_condition = 12;
	public static readonly RULE_join_association_path_expression = 13;
	public static readonly RULE_join_collection_valued_path_expression = 14;
	public static readonly RULE_join_single_valued_path_expression = 15;
	public static readonly RULE_collection_member_declaration = 16;
	public static readonly RULE_qualified_identification_variable = 17;
	public static readonly RULE_map_field_identification_variable = 18;
	public static readonly RULE_single_valued_path_expression = 19;
	public static readonly RULE_general_identification_variable = 20;
	public static readonly RULE_general_subpath = 21;
	public static readonly RULE_simple_subpath = 22;
	public static readonly RULE_treated_subpath = 23;
	public static readonly RULE_state_field_path_expression = 24;
	public static readonly RULE_state_valued_path_expression = 25;
	public static readonly RULE_single_valued_object_path_expression = 26;
	public static readonly RULE_collection_valued_path_expression = 27;
	public static readonly RULE_update_clause = 28;
	public static readonly RULE_update_item = 29;
	public static readonly RULE_new_value = 30;
	public static readonly RULE_delete_clause = 31;
	public static readonly RULE_select_clause = 32;
	public static readonly RULE_select_item = 33;
	public static readonly RULE_select_expression = 34;
	public static readonly RULE_constructor_expression = 35;
	public static readonly RULE_constructor_item = 36;
	public static readonly RULE_aggregate_expression = 37;
	public static readonly RULE_where_clause = 38;
	public static readonly RULE_groupby_clause = 39;
	public static readonly RULE_groupby_item = 40;
	public static readonly RULE_having_clause = 41;
	public static readonly RULE_orderby_clause = 42;
	public static readonly RULE_orderby_item = 43;
	public static readonly RULE_subquery = 44;
	public static readonly RULE_subquery_from_clause = 45;
	public static readonly RULE_subselect_identification_variable_declaration = 46;
	public static readonly RULE_derived_path_expression = 47;
	public static readonly RULE_general_derived_path = 48;
	public static readonly RULE_simple_derived_path = 49;
	public static readonly RULE_treated_derived_path = 50;
	public static readonly RULE_derived_collection_member_declaration = 51;
	public static readonly RULE_simple_select_clause = 52;
	public static readonly RULE_simple_select_expression = 53;
	public static readonly RULE_scalar_expression = 54;
	public static readonly RULE_conditional_expression = 55;
	public static readonly RULE_conditional_term = 56;
	public static readonly RULE_conditional_factor = 57;
	public static readonly RULE_conditional_primary = 58;
	public static readonly RULE_simple_cond_expression = 59;
	public static readonly RULE_between_expression = 60;
	public static readonly RULE_in_expression = 61;
	public static readonly RULE_in_item = 62;
	public static readonly RULE_like_expression = 63;
	public static readonly RULE_null_comparison_expression = 64;
	public static readonly RULE_empty_collection_comparison_expression = 65;
	public static readonly RULE_collection_member_expression = 66;
	public static readonly RULE_entity_or_value_expression = 67;
	public static readonly RULE_simple_entity_or_value_expression = 68;
	public static readonly RULE_exists_expression = 69;
	public static readonly RULE_all_or_any_expression = 70;
	public static readonly RULE_comparison_expression = 71;
	public static readonly RULE_comparison_operator = 72;
	public static readonly RULE_arithmetic_expression = 73;
	public static readonly RULE_arithmetic_term = 74;
	public static readonly RULE_arithmetic_factor = 75;
	public static readonly RULE_arithmetic_primary = 76;
	public static readonly RULE_string_expression = 77;
	public static readonly RULE_datetime_expression = 78;
	public static readonly RULE_boolean_expression = 79;
	public static readonly RULE_enum_expression = 80;
	public static readonly RULE_entity_expression = 81;
	public static readonly RULE_simple_entity_expression = 82;
	public static readonly RULE_entity_type_expression = 83;
	public static readonly RULE_type_discriminator = 84;
	public static readonly RULE_functions_returning_numerics = 85;
	public static readonly RULE_functions_returning_datetime = 86;
	public static readonly RULE_functions_returning_strings = 87;
	public static readonly RULE_trim_specification = 88;
	public static readonly RULE_function_invocation = 89;
	public static readonly RULE_extract_datetime_field = 90;
	public static readonly RULE_datetime_field = 91;
	public static readonly RULE_extract_datetime_part = 92;
	public static readonly RULE_datetime_part = 93;
	public static readonly RULE_function_arg = 94;
	public static readonly RULE_case_expression = 95;
	public static readonly RULE_general_case_expression = 96;
	public static readonly RULE_when_clause = 97;
	public static readonly RULE_simple_case_expression = 98;
	public static readonly RULE_case_operand = 99;
	public static readonly RULE_simple_when_clause = 100;
	public static readonly RULE_coalesce_expression = 101;
	public static readonly RULE_nullif_expression = 102;
	public static readonly RULE_trim_character = 103;
	public static readonly RULE_identification_variable = 104;
	public static readonly RULE_constructor_name = 105;
	public static readonly RULE_literal = 106;
	public static readonly RULE_input_parameter = 107;
	public static readonly RULE_pattern_value = 108;
	public static readonly RULE_date_time_timestamp_literal = 109;
	public static readonly RULE_entity_type_literal = 110;
	public static readonly RULE_escape_character = 111;
	public static readonly RULE_numeric_literal = 112;
	public static readonly RULE_boolean_literal = 113;
	public static readonly RULE_enum_literal = 114;
	public static readonly RULE_string_literal = 115;
	public static readonly RULE_single_valued_embeddable_object_field = 116;
	public static readonly RULE_subtype = 117;
	public static readonly RULE_collection_valued_field = 118;
	public static readonly RULE_single_valued_object_field = 119;
	public static readonly RULE_state_field = 120;
	public static readonly RULE_collection_value_field = 121;
	public static readonly RULE_entity_name = 122;
	public static readonly RULE_result_variable = 123;
	public static readonly RULE_superquery_identification_variable = 124;
	public static readonly RULE_collection_valued_input_parameter = 125;
	public static readonly RULE_single_valued_input_parameter = 126;
	public static readonly RULE_function_name = 127;
	public static readonly RULE_character_valued_input_parameter = 128;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "'('", "')'", 
                                                            "'.'", "'>'", 
                                                            "'>='", "'<'", 
                                                            "'<='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'?'", 
                                                            "':'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "WS", 
                                                             "ABS", "ALL", 
                                                             "AND", "ANY", 
                                                             "AS", "ASC", 
                                                             "AVG", "BETWEEN", 
                                                             "BOTH", "BY", 
                                                             "CASE", "CEILING", 
                                                             "COALESCE", 
                                                             "CONCAT", "COUNT", 
                                                             "CURRENT_DATE", 
                                                             "CURRENT_TIME", 
                                                             "CURRENT_TIMESTAMP", 
                                                             "DATE", "DATETIME", 
                                                             "DELETE", "DESC", 
                                                             "DISTINCT", 
                                                             "END", "ELSE", 
                                                             "EMPTY", "ENTRY", 
                                                             "ESCAPE", "EXISTS", 
                                                             "EXP", "EXTRACT", 
                                                             "FALSE", "FETCH", 
                                                             "FLOOR", "FROM", 
                                                             "FUNCTION", 
                                                             "GROUP", "HAVING", 
                                                             "IN", "INDEX", 
                                                             "INNER", "IS", 
                                                             "JOIN", "KEY", 
                                                             "LEADING", 
                                                             "LEFT", "LENGTH", 
                                                             "LIKE", "LN", 
                                                             "LOCAL", "LOCATE", 
                                                             "LOWER", "MAX", 
                                                             "MEMBER", "MIN", 
                                                             "MOD", "NEW", 
                                                             "NOT", "NULL", 
                                                             "NULLIF", "OBJECT", 
                                                             "OF", "ON", 
                                                             "OR", "ORDER", 
                                                             "OUTER", "POWER", 
                                                             "ROUND", "SELECT", 
                                                             "SET", "SIGN", 
                                                             "SIZE", "SOME", 
                                                             "SQRT", "SUBSTRING", 
                                                             "SUM", "THEN", 
                                                             "TIME", "TRAILING", 
                                                             "TREAT", "TRIM", 
                                                             "TRUE", "TYPE", 
                                                             "UPDATE", "UPPER", 
                                                             "VALUE", "WHEN", 
                                                             "WHERE", "EQUAL", 
                                                             "NOT_EQUAL", 
                                                             "CHARACTER", 
                                                             "IDENTIFICATION_VARIABLE", 
                                                             "STRINGLITERAL", 
                                                             "FLOATLITERAL", 
                                                             "INTLITERAL" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "ql_statement", "select_statement", "update_statement", "delete_statement", 
		"from_clause", "identificationVariableDeclarationOrCollectionMemberDeclaration", 
		"identification_variable_declaration", "range_variable_declaration", "join", 
		"fetch_join", "join_spec", "join_condition", "join_association_path_expression", 
		"join_collection_valued_path_expression", "join_single_valued_path_expression", 
		"collection_member_declaration", "qualified_identification_variable", 
		"map_field_identification_variable", "single_valued_path_expression", 
		"general_identification_variable", "general_subpath", "simple_subpath", 
		"treated_subpath", "state_field_path_expression", "state_valued_path_expression", 
		"single_valued_object_path_expression", "collection_valued_path_expression", 
		"update_clause", "update_item", "new_value", "delete_clause", "select_clause", 
		"select_item", "select_expression", "constructor_expression", "constructor_item", 
		"aggregate_expression", "where_clause", "groupby_clause", "groupby_item", 
		"having_clause", "orderby_clause", "orderby_item", "subquery", "subquery_from_clause", 
		"subselect_identification_variable_declaration", "derived_path_expression", 
		"general_derived_path", "simple_derived_path", "treated_derived_path", 
		"derived_collection_member_declaration", "simple_select_clause", "simple_select_expression", 
		"scalar_expression", "conditional_expression", "conditional_term", "conditional_factor", 
		"conditional_primary", "simple_cond_expression", "between_expression", 
		"in_expression", "in_item", "like_expression", "null_comparison_expression", 
		"empty_collection_comparison_expression", "collection_member_expression", 
		"entity_or_value_expression", "simple_entity_or_value_expression", "exists_expression", 
		"all_or_any_expression", "comparison_expression", "comparison_operator", 
		"arithmetic_expression", "arithmetic_term", "arithmetic_factor", "arithmetic_primary", 
		"string_expression", "datetime_expression", "boolean_expression", "enum_expression", 
		"entity_expression", "simple_entity_expression", "entity_type_expression", 
		"type_discriminator", "functions_returning_numerics", "functions_returning_datetime", 
		"functions_returning_strings", "trim_specification", "function_invocation", 
		"extract_datetime_field", "datetime_field", "extract_datetime_part", "datetime_part", 
		"function_arg", "case_expression", "general_case_expression", "when_clause", 
		"simple_case_expression", "case_operand", "simple_when_clause", "coalesce_expression", 
		"nullif_expression", "trim_character", "identification_variable", "constructor_name", 
		"literal", "input_parameter", "pattern_value", "date_time_timestamp_literal", 
		"entity_type_literal", "escape_character", "numeric_literal", "boolean_literal", 
		"enum_literal", "string_literal", "single_valued_embeddable_object_field", 
		"subtype", "collection_valued_field", "single_valued_object_field", "state_field", 
		"collection_value_field", "entity_name", "result_variable", "superquery_identification_variable", 
		"collection_valued_input_parameter", "single_valued_input_parameter", 
		"function_name", "character_valued_input_parameter",
	];
	public get grammarFileName(): string { return "Jpql.g4"; }
	public get literalNames(): (string | null)[] { return JpqlParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JpqlParser.symbolicNames; }
	public get ruleNames(): string[] { return JpqlParser.ruleNames; }
	public get serializedATN(): number[] { return JpqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JpqlParser._ATN, JpqlParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let localctx: StartContext = new StartContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JpqlParser.RULE_start);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			this.ql_statement();
			this.state = 259;
			this.match(JpqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ql_statement(): Ql_statementContext {
		let localctx: Ql_statementContext = new Ql_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JpqlParser.RULE_ql_statement);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 84:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 261;
				this.select_statement();
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 262;
				this.update_statement();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 263;
				this.delete_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_statement(): Select_statementContext {
		let localctx: Select_statementContext = new Select_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JpqlParser.RULE_select_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.select_clause();
			this.state = 267;
			this.from_clause();
			this.state = 269;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 268;
				this.where_clause();
				}
			}

			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 271;
				this.groupby_clause();
				}
			}

			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 274;
				this.having_clause();
				}
			}

			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===80) {
				{
				this.state = 277;
				this.orderby_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public update_statement(): Update_statementContext {
		let localctx: Update_statementContext = new Update_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JpqlParser.RULE_update_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
			this.update_clause();
			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 281;
				this.where_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public delete_statement(): Delete_statementContext {
		let localctx: Delete_statementContext = new Delete_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JpqlParser.RULE_delete_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this.delete_clause();
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 285;
				this.where_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public from_clause(): From_clauseContext {
		let localctx: From_clauseContext = new From_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JpqlParser.RULE_from_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 288;
			this.match(JpqlParser.FROM);
			this.state = 289;
			this.identification_variable_declaration();
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 290;
				this.match(JpqlParser.T__0);
				this.state = 291;
				this.identificationVariableDeclarationOrCollectionMemberDeclaration();
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identificationVariableDeclarationOrCollectionMemberDeclaration(): IdentificationVariableDeclarationOrCollectionMemberDeclarationContext {
		let localctx: IdentificationVariableDeclarationOrCollectionMemberDeclarationContext = new IdentificationVariableDeclarationOrCollectionMemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JpqlParser.RULE_identificationVariableDeclarationOrCollectionMemberDeclaration);
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 34:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 98:
			case 101:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 297;
				this.identification_variable_declaration();
				}
				break;
			case 54:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 298;
				this.collection_member_declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identification_variable_declaration(): Identification_variable_declarationContext {
		let localctx: Identification_variable_declarationContext = new Identification_variable_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JpqlParser.RULE_identification_variable_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 301;
			this.range_variable_declaration();
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 37) !== 0)) {
				{
				this.state = 304;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 302;
					this.join();
					}
					break;
				case 2:
					{
					this.state = 303;
					this.fetch_join();
					}
					break;
				}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public range_variable_declaration(): Range_variable_declarationContext {
		let localctx: Range_variable_declarationContext = new Range_variable_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JpqlParser.RULE_range_variable_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 309;
			this.entity_name();
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 310;
				this.match(JpqlParser.AS);
				}
			}

			this.state = 313;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join(): JoinContext {
		let localctx: JoinContext = new JoinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JpqlParser.RULE_join);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.join_spec();
			this.state = 316;
			this.join_association_path_expression();
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 317;
				this.match(JpqlParser.AS);
				}
			}

			this.state = 320;
			this.identification_variable();
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===78) {
				{
				this.state = 321;
				this.join_condition();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public fetch_join(): Fetch_joinContext {
		let localctx: Fetch_joinContext = new Fetch_joinContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JpqlParser.RULE_fetch_join);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.join_spec();
			this.state = 325;
			this.match(JpqlParser.FETCH);
			this.state = 326;
			this.join_association_path_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_spec(): Join_specContext {
		let localctx: Join_specContext = new Join_specContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, JpqlParser.RULE_join_spec);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				{
				{
				this.state = 328;
				this.match(JpqlParser.LEFT);
				this.state = 330;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===81) {
					{
					this.state = 329;
					this.match(JpqlParser.OUTER);
					}
				}

				}
				}
				break;
			case 56:
				{
				this.state = 332;
				this.match(JpqlParser.INNER);
				}
				break;
			case 58:
				break;
			default:
				break;
			}
			this.state = 335;
			this.match(JpqlParser.JOIN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_condition(): Join_conditionContext {
		let localctx: Join_conditionContext = new Join_conditionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, JpqlParser.RULE_join_condition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 337;
			this.match(JpqlParser.ON);
			this.state = 338;
			this.conditional_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_association_path_expression(): Join_association_path_expressionContext {
		let localctx: Join_association_path_expressionContext = new Join_association_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, JpqlParser.RULE_join_association_path_expression);
		try {
			this.state = 356;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 340;
				this.join_collection_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 341;
				this.join_single_valued_path_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 342;
				this.match(JpqlParser.TREAT);
				this.state = 343;
				this.match(JpqlParser.T__1);
				this.state = 344;
				this.join_collection_valued_path_expression();
				this.state = 345;
				this.match(JpqlParser.AS);
				this.state = 346;
				this.subtype();
				this.state = 347;
				this.match(JpqlParser.T__2);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 349;
				this.match(JpqlParser.TREAT);
				this.state = 350;
				this.match(JpqlParser.T__1);
				this.state = 351;
				this.join_single_valued_path_expression();
				this.state = 352;
				this.match(JpqlParser.AS);
				this.state = 353;
				this.subtype();
				this.state = 354;
				this.match(JpqlParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_collection_valued_path_expression(): Join_collection_valued_path_expressionContext {
		let localctx: Join_collection_valued_path_expressionContext = new Join_collection_valued_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, JpqlParser.RULE_join_collection_valued_path_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.identification_variable();
			this.state = 359;
			this.match(JpqlParser.T__3);
			this.state = 365;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 360;
					this.single_valued_embeddable_object_field();
					this.state = 361;
					this.match(JpqlParser.T__3);
					}
					}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			this.state = 368;
			this.collection_valued_field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public join_single_valued_path_expression(): Join_single_valued_path_expressionContext {
		let localctx: Join_single_valued_path_expressionContext = new Join_single_valued_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, JpqlParser.RULE_join_single_valued_path_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			this.identification_variable();
			this.state = 371;
			this.match(JpqlParser.T__3);
			this.state = 377;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 372;
					this.single_valued_embeddable_object_field();
					this.state = 373;
					this.match(JpqlParser.T__3);
					}
					}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 380;
			this.single_valued_object_field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection_member_declaration(): Collection_member_declarationContext {
		let localctx: Collection_member_declarationContext = new Collection_member_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, JpqlParser.RULE_collection_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 382;
			this.match(JpqlParser.IN);
			this.state = 383;
			this.match(JpqlParser.T__1);
			this.state = 384;
			this.collection_valued_path_expression();
			this.state = 385;
			this.match(JpqlParser.T__2);
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 386;
				this.match(JpqlParser.AS);
				}
			}

			this.state = 389;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public qualified_identification_variable(): Qualified_identification_variableContext {
		let localctx: Qualified_identification_variableContext = new Qualified_identification_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, JpqlParser.RULE_qualified_identification_variable);
		try {
			this.state = 397;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
			case 101:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 391;
				this.map_field_identification_variable();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 392;
				this.match(JpqlParser.ENTRY);
				this.state = 393;
				this.match(JpqlParser.T__1);
				this.state = 394;
				this.identification_variable();
				this.state = 395;
				this.match(JpqlParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public map_field_identification_variable(): Map_field_identification_variableContext {
		let localctx: Map_field_identification_variableContext = new Map_field_identification_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, JpqlParser.RULE_map_field_identification_variable);
		try {
			this.state = 409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 59:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 399;
				this.match(JpqlParser.KEY);
				this.state = 400;
				this.match(JpqlParser.T__1);
				this.state = 401;
				this.identification_variable();
				this.state = 402;
				this.match(JpqlParser.T__2);
				}
				break;
			case 101:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 404;
				this.match(JpqlParser.VALUE);
				this.state = 405;
				this.match(JpqlParser.T__1);
				this.state = 406;
				this.identification_variable();
				this.state = 407;
				this.match(JpqlParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public single_valued_path_expression(): Single_valued_path_expressionContext {
		let localctx: Single_valued_path_expressionContext = new Single_valued_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, JpqlParser.RULE_single_valued_path_expression);
		try {
			this.state = 421;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 411;
				this.qualified_identification_variable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 412;
				this.match(JpqlParser.TREAT);
				this.state = 413;
				this.match(JpqlParser.T__1);
				this.state = 414;
				this.qualified_identification_variable();
				this.state = 415;
				this.match(JpqlParser.AS);
				this.state = 416;
				this.subtype();
				this.state = 417;
				this.match(JpqlParser.T__2);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 419;
				this.state_field_path_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 420;
				this.single_valued_object_path_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public general_identification_variable(): General_identification_variableContext {
		let localctx: General_identification_variableContext = new General_identification_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, JpqlParser.RULE_general_identification_variable);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 423;
				this.identification_variable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 424;
				this.map_field_identification_variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public general_subpath(): General_subpathContext {
		let localctx: General_subpathContext = new General_subpathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, JpqlParser.RULE_general_subpath);
		try {
			let _alt: number;
			this.state = 436;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 34:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 98:
			case 101:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 427;
				this.simple_subpath();
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 428;
				this.treated_subpath();
				this.state = 433;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 429;
						this.match(JpqlParser.T__3);
						this.state = 430;
						this.single_valued_object_field();
						}
						}
					}
					this.state = 435;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_subpath(): Simple_subpathContext {
		let localctx: Simple_subpathContext = new Simple_subpathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, JpqlParser.RULE_simple_subpath);
		try {
			let _alt: number;
			this.state = 447;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 438;
				this.general_identification_variable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 439;
				this.general_identification_variable();
				this.state = 444;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 440;
						this.match(JpqlParser.T__3);
						this.state = 441;
						this.single_valued_object_field();
						}
						}
					}
					this.state = 446;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public treated_subpath(): Treated_subpathContext {
		let localctx: Treated_subpathContext = new Treated_subpathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, JpqlParser.RULE_treated_subpath);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 449;
			this.match(JpqlParser.TREAT);
			this.state = 450;
			this.match(JpqlParser.T__1);
			this.state = 451;
			this.general_subpath();
			this.state = 452;
			this.match(JpqlParser.AS);
			this.state = 453;
			this.subtype();
			this.state = 454;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public state_field_path_expression(): State_field_path_expressionContext {
		let localctx: State_field_path_expressionContext = new State_field_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, JpqlParser.RULE_state_field_path_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 456;
			this.general_subpath();
			this.state = 457;
			this.match(JpqlParser.T__3);
			this.state = 458;
			this.state_field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public state_valued_path_expression(): State_valued_path_expressionContext {
		let localctx: State_valued_path_expressionContext = new State_valued_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, JpqlParser.RULE_state_valued_path_expression);
		try {
			this.state = 462;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 460;
				this.state_field_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 461;
				this.general_identification_variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public single_valued_object_path_expression(): Single_valued_object_path_expressionContext {
		let localctx: Single_valued_object_path_expressionContext = new Single_valued_object_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, JpqlParser.RULE_single_valued_object_path_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 464;
			this.general_subpath();
			this.state = 465;
			this.match(JpqlParser.T__3);
			this.state = 466;
			this.single_valued_object_field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection_valued_path_expression(): Collection_valued_path_expressionContext {
		let localctx: Collection_valued_path_expressionContext = new Collection_valued_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, JpqlParser.RULE_collection_valued_path_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 468;
			this.general_subpath();
			this.state = 469;
			this.match(JpqlParser.T__3);
			this.state = 470;
			this.collection_value_field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public update_clause(): Update_clauseContext {
		let localctx: Update_clauseContext = new Update_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, JpqlParser.RULE_update_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 472;
			this.match(JpqlParser.UPDATE);
			this.state = 473;
			this.entity_name();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 1610630145) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1191247913) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 16673) !== 0)) {
				{
				this.state = 475;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 474;
					this.match(JpqlParser.AS);
					}
				}

				this.state = 477;
				this.identification_variable();
				}
			}

			this.state = 480;
			this.match(JpqlParser.SET);
			this.state = 481;
			this.update_item();
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 482;
				this.match(JpqlParser.T__0);
				this.state = 483;
				this.update_item();
				}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public update_item(): Update_itemContext {
		let localctx: Update_itemContext = new Update_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, JpqlParser.RULE_update_item);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 489;
				this.identification_variable();
				this.state = 490;
				this.match(JpqlParser.T__3);
				}
				break;
			}
			this.state = 499;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 494;
					this.single_valued_embeddable_object_field();
					this.state = 495;
					this.match(JpqlParser.T__3);
					}
					}
				}
				this.state = 501;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
			}
			this.state = 504;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 502;
				this.state_field();
				}
				break;
			case 2:
				{
				this.state = 503;
				this.single_valued_object_field();
				}
				break;
			}
			this.state = 506;
			this.match(JpqlParser.EQUAL);
			this.state = 507;
			this.new_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public new_value(): New_valueContext {
		let localctx: New_valueContext = new New_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, JpqlParser.RULE_new_value);
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 509;
				this.scalar_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 510;
				this.simple_entity_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 511;
				this.match(JpqlParser.NULL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public delete_clause(): Delete_clauseContext {
		let localctx: Delete_clauseContext = new Delete_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, JpqlParser.RULE_delete_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 514;
			this.match(JpqlParser.DELETE);
			this.state = 515;
			this.match(JpqlParser.FROM);
			this.state = 516;
			this.entity_name();
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & 1610630145) !== 0) || ((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 1191247913) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 16673) !== 0)) {
				{
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 517;
					this.match(JpqlParser.AS);
					}
				}

				this.state = 520;
				this.identification_variable();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_clause(): Select_clauseContext {
		let localctx: Select_clauseContext = new Select_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, JpqlParser.RULE_select_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 523;
			this.match(JpqlParser.SELECT);
			this.state = 525;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 524;
				this.match(JpqlParser.DISTINCT);
				}
			}

			this.state = 527;
			this.select_item();
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 528;
				this.match(JpqlParser.T__0);
				this.state = 529;
				this.select_item();
				}
				}
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_item(): Select_itemContext {
		let localctx: Select_itemContext = new Select_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, JpqlParser.RULE_select_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 535;
			this.select_expression();
			this.state = 540;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 536;
					this.match(JpqlParser.AS);
					}
				}

				this.state = 539;
				this.result_variable();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public select_expression(): Select_expressionContext {
		let localctx: Select_expressionContext = new Select_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, JpqlParser.RULE_select_expression);
		try {
			this.state = 552;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 542;
				this.single_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 543;
				this.scalar_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 544;
				this.aggregate_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 545;
				this.identification_variable();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 546;
				this.match(JpqlParser.OBJECT);
				this.state = 547;
				this.match(JpqlParser.T__1);
				this.state = 548;
				this.identification_variable();
				this.state = 549;
				this.match(JpqlParser.T__2);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 551;
				this.constructor_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructor_expression(): Constructor_expressionContext {
		let localctx: Constructor_expressionContext = new Constructor_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, JpqlParser.RULE_constructor_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 554;
			this.match(JpqlParser.NEW);
			this.state = 555;
			this.constructor_name();
			this.state = 556;
			this.match(JpqlParser.T__1);
			this.state = 557;
			this.constructor_item();
			this.state = 562;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 558;
				this.match(JpqlParser.T__0);
				this.state = 559;
				this.constructor_item();
				}
				}
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 565;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructor_item(): Constructor_itemContext {
		let localctx: Constructor_itemContext = new Constructor_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, JpqlParser.RULE_constructor_item);
		try {
			this.state = 571;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 567;
				this.single_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 568;
				this.scalar_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 569;
				this.aggregate_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 570;
				this.identification_variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aggregate_expression(): Aggregate_expressionContext {
		let localctx: Aggregate_expressionContext = new Aggregate_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, JpqlParser.RULE_aggregate_expression);
		let _la: number;
		try {
			this.state = 594;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 22:
			case 68:
			case 70:
			case 91:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 573;
				_la = this._input.LA(1);
				if(!(_la===22 || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 8388613) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 574;
				this.match(JpqlParser.T__1);
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===38) {
					{
					this.state = 575;
					this.match(JpqlParser.DISTINCT);
					}
				}

				this.state = 578;
				this.state_valued_path_expression();
				this.state = 579;
				this.match(JpqlParser.T__2);
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 581;
				this.match(JpqlParser.COUNT);
				this.state = 582;
				this.match(JpqlParser.T__1);
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===38) {
					{
					this.state = 583;
					this.match(JpqlParser.DISTINCT);
					}
				}

				this.state = 589;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 586;
					this.identification_variable();
					}
					break;
				case 2:
					{
					this.state = 587;
					this.state_valued_path_expression();
					}
					break;
				case 3:
					{
					this.state = 588;
					this.single_valued_object_path_expression();
					}
					break;
				}
				this.state = 591;
				this.match(JpqlParser.T__2);
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 593;
				this.function_invocation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public where_clause(): Where_clauseContext {
		let localctx: Where_clauseContext = new Where_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, JpqlParser.RULE_where_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 596;
			this.match(JpqlParser.WHERE);
			this.state = 597;
			this.conditional_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupby_clause(): Groupby_clauseContext {
		let localctx: Groupby_clauseContext = new Groupby_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, JpqlParser.RULE_groupby_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 599;
			this.match(JpqlParser.GROUP);
			this.state = 600;
			this.match(JpqlParser.BY);
			this.state = 601;
			this.groupby_item();
			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 602;
				this.match(JpqlParser.T__0);
				this.state = 603;
				this.groupby_item();
				}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public groupby_item(): Groupby_itemContext {
		let localctx: Groupby_itemContext = new Groupby_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, JpqlParser.RULE_groupby_item);
		try {
			this.state = 611;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 609;
				this.single_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 610;
				this.identification_variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public having_clause(): Having_clauseContext {
		let localctx: Having_clauseContext = new Having_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, JpqlParser.RULE_having_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 613;
			this.match(JpqlParser.HAVING);
			this.state = 614;
			this.conditional_expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderby_clause(): Orderby_clauseContext {
		let localctx: Orderby_clauseContext = new Orderby_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, JpqlParser.RULE_orderby_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 616;
			this.match(JpqlParser.ORDER);
			this.state = 617;
			this.match(JpqlParser.BY);
			this.state = 618;
			this.orderby_item();
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 619;
				this.match(JpqlParser.T__0);
				this.state = 620;
				this.orderby_item();
				}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public orderby_item(): Orderby_itemContext {
		let localctx: Orderby_itemContext = new Orderby_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, JpqlParser.RULE_orderby_item);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 629;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 626;
				this.state_field_path_expression();
				}
				break;
			case 2:
				{
				this.state = 627;
				this.general_identification_variable();
				}
				break;
			case 3:
				{
				this.state = 628;
				this.result_variable();
				}
				break;
			}
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21 || _la===37) {
				{
				this.state = 631;
				_la = this._input.LA(1);
				if(!(_la===21 || _la===37)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subquery(): SubqueryContext {
		let localctx: SubqueryContext = new SubqueryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, JpqlParser.RULE_subquery);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 634;
			this.simple_select_clause();
			this.state = 635;
			this.subquery_from_clause();
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===103) {
				{
				this.state = 636;
				this.where_clause();
				}
			}

			this.state = 640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 639;
				this.groupby_clause();
				}
			}

			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 642;
				this.having_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subquery_from_clause(): Subquery_from_clauseContext {
		let localctx: Subquery_from_clauseContext = new Subquery_from_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, JpqlParser.RULE_subquery_from_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 645;
			this.match(JpqlParser.FROM);
			this.state = 646;
			this.subselect_identification_variable_declaration();
			this.state = 654;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 647;
				this.match(JpqlParser.T__0);
				this.state = 650;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 648;
					this.subselect_identification_variable_declaration();
					}
					break;
				case 2:
					{
					this.state = 649;
					this.collection_member_declaration();
					}
					break;
				}
				}
				}
				this.state = 656;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subselect_identification_variable_declaration(): Subselect_identification_variable_declarationContext {
		let localctx: Subselect_identification_variable_declarationContext = new Subselect_identification_variable_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, JpqlParser.RULE_subselect_identification_variable_declaration);
		let _la: number;
		try {
			this.state = 670;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 657;
				this.identification_variable_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 658;
				this.derived_path_expression();
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===20) {
					{
					this.state = 659;
					this.match(JpqlParser.AS);
					}
				}

				this.state = 662;
				this.identification_variable();
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 56)) & ~0x1F) === 0 && ((1 << (_la - 56)) & 37) !== 0)) {
					{
					{
					this.state = 663;
					this.join();
					}
					}
					this.state = 668;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 669;
				this.derived_collection_member_declaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public derived_path_expression(): Derived_path_expressionContext {
		let localctx: Derived_path_expressionContext = new Derived_path_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, JpqlParser.RULE_derived_path_expression);
		try {
			this.state = 680;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 672;
				this.general_derived_path();
				this.state = 673;
				this.match(JpqlParser.T__3);
				this.state = 674;
				this.single_valued_object_field();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 676;
				this.general_derived_path();
				this.state = 677;
				this.match(JpqlParser.T__3);
				this.state = 678;
				this.collection_valued_field();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public general_derived_path(): General_derived_pathContext {
		let localctx: General_derived_pathContext = new General_derived_pathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, JpqlParser.RULE_general_derived_path);
		try {
			let _alt: number;
			this.state = 691;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 34:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 98:
			case 101:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 682;
				this.simple_derived_path();
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 683;
				this.treated_derived_path();
				this.state = 688;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 684;
						this.match(JpqlParser.T__3);
						this.state = 685;
						this.single_valued_object_field();
						}
						}
					}
					this.state = 690;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_derived_path(): Simple_derived_pathContext {
		let localctx: Simple_derived_pathContext = new Simple_derived_pathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, JpqlParser.RULE_simple_derived_path);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 693;
			this.superquery_identification_variable();
			this.state = 698;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 694;
					this.match(JpqlParser.T__3);
					this.state = 695;
					this.single_valued_object_field();
					}
					}
				}
				this.state = 700;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public treated_derived_path(): Treated_derived_pathContext {
		let localctx: Treated_derived_pathContext = new Treated_derived_pathContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, JpqlParser.RULE_treated_derived_path);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 701;
			this.match(JpqlParser.TREAT);
			this.state = 702;
			this.match(JpqlParser.T__1);
			this.state = 703;
			this.general_derived_path();
			this.state = 704;
			this.match(JpqlParser.AS);
			this.state = 705;
			this.subtype();
			this.state = 706;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public derived_collection_member_declaration(): Derived_collection_member_declarationContext {
		let localctx: Derived_collection_member_declarationContext = new Derived_collection_member_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, JpqlParser.RULE_derived_collection_member_declaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 708;
			this.match(JpqlParser.IN);
			this.state = 709;
			this.superquery_identification_variable();
			this.state = 710;
			this.match(JpqlParser.T__3);
			this.state = 716;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 711;
					this.single_valued_object_field();
					this.state = 712;
					this.match(JpqlParser.T__3);
					}
					}
				}
				this.state = 718;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 719;
			this.collection_valued_field();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_select_clause(): Simple_select_clauseContext {
		let localctx: Simple_select_clauseContext = new Simple_select_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, JpqlParser.RULE_simple_select_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 721;
			this.match(JpqlParser.SELECT);
			this.state = 723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 722;
				this.match(JpqlParser.DISTINCT);
				}
			}

			this.state = 725;
			this.simple_select_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_select_expression(): Simple_select_expressionContext {
		let localctx: Simple_select_expressionContext = new Simple_select_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, JpqlParser.RULE_simple_select_expression);
		try {
			this.state = 731;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 727;
				this.single_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 728;
				this.scalar_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 729;
				this.aggregate_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 730;
				this.identification_variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scalar_expression(): Scalar_expressionContext {
		let localctx: Scalar_expressionContext = new Scalar_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, JpqlParser.RULE_scalar_expression);
		try {
			this.state = 740;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 733;
				this.arithmetic_expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 734;
				this.string_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 735;
				this.enum_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 736;
				this.datetime_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 737;
				this.boolean_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 738;
				this.case_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 739;
				this.entity_type_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public conditional_expression(): Conditional_expressionContext;
	public conditional_expression(_p: number): Conditional_expressionContext;
	// @RuleVersion(0)
	public conditional_expression(_p?: number): Conditional_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Conditional_expressionContext = new Conditional_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Conditional_expressionContext = localctx;
		let _startState: number = 110;
		this.enterRecursionRule(localctx, 110, JpqlParser.RULE_conditional_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 743;
			this.conditional_term(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 750;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 70, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Conditional_expressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, JpqlParser.RULE_conditional_expression);
					this.state = 745;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 746;
					this.match(JpqlParser.OR);
					this.state = 747;
					this.conditional_term(0);
					}
					}
				}
				this.state = 752;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 70, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public conditional_term(): Conditional_termContext;
	public conditional_term(_p: number): Conditional_termContext;
	// @RuleVersion(0)
	public conditional_term(_p?: number): Conditional_termContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Conditional_termContext = new Conditional_termContext(this, this._ctx, _parentState);
		let _prevctx: Conditional_termContext = localctx;
		let _startState: number = 112;
		this.enterRecursionRule(localctx, 112, JpqlParser.RULE_conditional_term, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 754;
			this.conditional_factor();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 761;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Conditional_termContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, JpqlParser.RULE_conditional_term);
					this.state = 756;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 757;
					this.match(JpqlParser.AND);
					this.state = 758;
					this.conditional_factor();
					}
					}
				}
				this.state = 763;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditional_factor(): Conditional_factorContext {
		let localctx: Conditional_factorContext = new Conditional_factorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, JpqlParser.RULE_conditional_factor);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 765;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 764;
				this.match(JpqlParser.NOT);
				}
				break;
			}
			this.state = 767;
			this.conditional_primary();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditional_primary(): Conditional_primaryContext {
		let localctx: Conditional_primaryContext = new Conditional_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, JpqlParser.RULE_conditional_primary);
		try {
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 769;
				this.simple_cond_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 770;
				this.match(JpqlParser.T__1);
				this.state = 771;
				this.conditional_expression(0);
				this.state = 772;
				this.match(JpqlParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_cond_expression(): Simple_cond_expressionContext {
		let localctx: Simple_cond_expressionContext = new Simple_cond_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, JpqlParser.RULE_simple_cond_expression);
		try {
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 776;
				this.comparison_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 777;
				this.between_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 778;
				this.in_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 779;
				this.like_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 780;
				this.null_comparison_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 781;
				this.empty_collection_comparison_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 782;
				this.collection_member_expression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 783;
				this.exists_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public between_expression(): Between_expressionContext {
		let localctx: Between_expressionContext = new Between_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, JpqlParser.RULE_between_expression);
		let _la: number;
		try {
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 786;
				this.arithmetic_expression(0);
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 787;
					this.match(JpqlParser.NOT);
					}
				}

				this.state = 790;
				this.match(JpqlParser.BETWEEN);
				this.state = 791;
				this.arithmetic_expression(0);
				this.state = 792;
				this.match(JpqlParser.AND);
				this.state = 793;
				this.arithmetic_expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 795;
				this.string_expression();
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 796;
					this.match(JpqlParser.NOT);
					}
				}

				this.state = 799;
				this.match(JpqlParser.BETWEEN);
				this.state = 800;
				this.string_expression();
				this.state = 801;
				this.match(JpqlParser.AND);
				this.state = 802;
				this.string_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 804;
				this.datetime_expression();
				this.state = 806;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 805;
					this.match(JpqlParser.NOT);
					}
				}

				this.state = 808;
				this.match(JpqlParser.BETWEEN);
				this.state = 809;
				this.datetime_expression();
				this.state = 810;
				this.match(JpqlParser.AND);
				this.state = 811;
				this.datetime_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public in_expression(): In_expressionContext {
		let localctx: In_expressionContext = new In_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, JpqlParser.RULE_in_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 815;
				this.state_valued_path_expression();
				}
				break;
			case 2:
				{
				this.state = 816;
				this.type_discriminator();
				}
				break;
			}
			this.state = 820;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 819;
				this.match(JpqlParser.NOT);
				}
			}

			this.state = 822;
			this.match(JpqlParser.IN);
			this.state = 839;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				{
				this.state = 823;
				this.match(JpqlParser.T__1);
				this.state = 824;
				this.in_item();
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 825;
					this.match(JpqlParser.T__0);
					this.state = 826;
					this.in_item();
					}
					}
					this.state = 831;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 832;
				this.match(JpqlParser.T__2);
				}
				}
				break;
			case 2:
				{
				{
				this.state = 834;
				this.match(JpqlParser.T__1);
				this.state = 835;
				this.subquery();
				this.state = 836;
				this.match(JpqlParser.T__2);
				}
				}
				break;
			case 3:
				{
				this.state = 838;
				this.collection_valued_input_parameter();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public in_item(): In_itemContext {
		let localctx: In_itemContext = new In_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, JpqlParser.RULE_in_item);
		try {
			this.state = 843;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 34:
			case 47:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 97:
			case 98:
			case 101:
			case 107:
			case 108:
			case 109:
			case 110:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 841;
				this.literal();
				}
				break;
			case 13:
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 842;
				this.single_valued_input_parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public like_expression(): Like_expressionContext {
		let localctx: Like_expressionContext = new Like_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, JpqlParser.RULE_like_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 845;
			this.string_expression();
			this.state = 847;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 846;
				this.match(JpqlParser.NOT);
				}
			}

			this.state = 849;
			this.match(JpqlParser.LIKE);
			this.state = 850;
			this.pattern_value();
			this.state = 853;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 851;
				this.match(JpqlParser.ESCAPE);
				this.state = 852;
				this.escape_character();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public null_comparison_expression(): Null_comparison_expressionContext {
		let localctx: Null_comparison_expressionContext = new Null_comparison_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, JpqlParser.RULE_null_comparison_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 34:
			case 42:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 95:
			case 98:
			case 101:
			case 107:
				{
				this.state = 855;
				this.single_valued_path_expression();
				}
				break;
			case 13:
			case 14:
				{
				this.state = 856;
				this.input_parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 859;
			this.match(JpqlParser.IS);
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 860;
				this.match(JpqlParser.NOT);
				}
			}

			this.state = 863;
			this.match(JpqlParser.NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public empty_collection_comparison_expression(): Empty_collection_comparison_expressionContext {
		let localctx: Empty_collection_comparison_expressionContext = new Empty_collection_comparison_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, JpqlParser.RULE_empty_collection_comparison_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 865;
			this.collection_valued_path_expression();
			this.state = 866;
			this.match(JpqlParser.IS);
			this.state = 868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 867;
				this.match(JpqlParser.NOT);
				}
			}

			this.state = 870;
			this.match(JpqlParser.EMPTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection_member_expression(): Collection_member_expressionContext {
		let localctx: Collection_member_expressionContext = new Collection_member_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, JpqlParser.RULE_collection_member_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 872;
			this.entity_or_value_expression();
			this.state = 874;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 873;
				this.match(JpqlParser.NOT);
				}
			}

			this.state = 876;
			this.match(JpqlParser.MEMBER);
			this.state = 878;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===77) {
				{
				this.state = 877;
				this.match(JpqlParser.OF);
				}
			}

			this.state = 880;
			this.collection_valued_path_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entity_or_value_expression(): Entity_or_value_expressionContext {
		let localctx: Entity_or_value_expressionContext = new Entity_or_value_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, JpqlParser.RULE_entity_or_value_expression);
		try {
			this.state = 885;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 882;
				this.single_valued_object_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 883;
				this.state_field_path_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 884;
				this.simple_entity_or_value_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_entity_or_value_expression(): Simple_entity_or_value_expressionContext {
		let localctx: Simple_entity_or_value_expressionContext = new Simple_entity_or_value_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, JpqlParser.RULE_simple_entity_or_value_expression);
		try {
			this.state = 890;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 887;
				this.identification_variable();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 888;
				this.input_parameter();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 889;
				this.literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exists_expression(): Exists_expressionContext {
		let localctx: Exists_expressionContext = new Exists_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, JpqlParser.RULE_exists_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===73) {
				{
				this.state = 892;
				this.match(JpqlParser.NOT);
				}
			}

			this.state = 895;
			this.match(JpqlParser.EXISTS);
			this.state = 896;
			this.match(JpqlParser.T__1);
			this.state = 897;
			this.subquery();
			this.state = 898;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public all_or_any_expression(): All_or_any_expressionContext {
		let localctx: All_or_any_expressionContext = new All_or_any_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, JpqlParser.RULE_all_or_any_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 900;
			_la = this._input.LA(1);
			if(!(_la===17 || _la===19 || _la===88)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 901;
			this.match(JpqlParser.T__1);
			this.state = 902;
			this.subquery();
			this.state = 903;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparison_expression(): Comparison_expressionContext {
		let localctx: Comparison_expressionContext = new Comparison_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, JpqlParser.RULE_comparison_expression);
		let _la: number;
		try {
			this.state = 945;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 905;
				this.string_expression();
				this.state = 906;
				this.comparison_operator();
				this.state = 909;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
				case 13:
				case 14:
				case 22:
				case 26:
				case 28:
				case 29:
				case 30:
				case 34:
				case 49:
				case 50:
				case 51:
				case 56:
				case 59:
				case 61:
				case 67:
				case 68:
				case 70:
				case 72:
				case 75:
				case 80:
				case 81:
				case 82:
				case 86:
				case 90:
				case 91:
				case 93:
				case 95:
				case 96:
				case 98:
				case 100:
				case 101:
				case 106:
				case 107:
				case 108:
					{
					this.state = 907;
					this.string_expression();
					}
					break;
				case 17:
				case 19:
				case 88:
					{
					this.state = 908;
					this.all_or_any_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 911;
				this.boolean_expression();
				this.state = 912;
				localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===104 || _la===105)) {
				    localctx._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 915;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
				case 13:
				case 14:
				case 26:
				case 28:
				case 30:
				case 34:
				case 47:
				case 49:
				case 50:
				case 51:
				case 56:
				case 59:
				case 61:
				case 72:
				case 75:
				case 80:
				case 81:
				case 82:
				case 86:
				case 93:
				case 95:
				case 97:
				case 98:
				case 101:
				case 107:
					{
					this.state = 913;
					this.boolean_expression();
					}
					break;
				case 17:
				case 19:
				case 88:
					{
					this.state = 914;
					this.all_or_any_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 917;
				this.enum_expression();
				this.state = 918;
				localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===104 || _la===105)) {
				    localctx._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 921;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
				case 13:
				case 14:
				case 26:
				case 28:
				case 30:
				case 34:
				case 49:
				case 50:
				case 56:
				case 59:
				case 61:
				case 72:
				case 75:
				case 80:
				case 81:
				case 82:
				case 86:
				case 93:
				case 95:
				case 98:
				case 101:
				case 107:
					{
					this.state = 919;
					this.enum_expression();
					}
					break;
				case 17:
				case 19:
				case 88:
					{
					this.state = 920;
					this.all_or_any_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 923;
				this.datetime_expression();
				this.state = 924;
				this.comparison_operator();
				this.state = 927;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
				case 13:
				case 14:
				case 22:
				case 26:
				case 28:
				case 30:
				case 31:
				case 32:
				case 33:
				case 34:
				case 46:
				case 49:
				case 50:
				case 51:
				case 56:
				case 59:
				case 61:
				case 65:
				case 68:
				case 70:
				case 72:
				case 75:
				case 80:
				case 81:
				case 82:
				case 86:
				case 91:
				case 93:
				case 95:
				case 98:
				case 101:
				case 107:
				case 108:
					{
					this.state = 925;
					this.datetime_expression();
					}
					break;
				case 17:
				case 19:
				case 88:
					{
					this.state = 926;
					this.all_or_any_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 929;
				this.entity_expression();
				this.state = 930;
				localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===104 || _la===105)) {
				    localctx._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 933;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 13:
				case 14:
				case 30:
				case 34:
				case 49:
				case 50:
				case 56:
				case 59:
				case 61:
				case 72:
				case 80:
				case 81:
				case 82:
				case 86:
				case 93:
				case 95:
				case 98:
				case 101:
				case 107:
					{
					this.state = 931;
					this.entity_expression();
					}
					break;
				case 17:
				case 19:
				case 88:
					{
					this.state = 932;
					this.all_or_any_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 935;
				this.arithmetic_expression(0);
				this.state = 936;
				this.comparison_operator();
				this.state = 939;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 2:
				case 9:
				case 10:
				case 13:
				case 14:
				case 16:
				case 22:
				case 26:
				case 27:
				case 28:
				case 30:
				case 34:
				case 45:
				case 46:
				case 49:
				case 50:
				case 51:
				case 55:
				case 56:
				case 59:
				case 61:
				case 62:
				case 64:
				case 66:
				case 68:
				case 70:
				case 71:
				case 72:
				case 75:
				case 80:
				case 81:
				case 82:
				case 83:
				case 86:
				case 87:
				case 89:
				case 91:
				case 93:
				case 95:
				case 98:
				case 101:
				case 107:
				case 109:
				case 110:
					{
					this.state = 937;
					this.arithmetic_expression(0);
					}
					break;
				case 17:
				case 19:
				case 88:
					{
					this.state = 938;
					this.all_or_any_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 941;
				this.entity_type_expression();
				this.state = 942;
				localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===104 || _la===105)) {
				    localctx._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 943;
				this.entity_type_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public comparison_operator(): Comparison_operatorContext {
		let localctx: Comparison_operatorContext = new Comparison_operatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, JpqlParser.RULE_comparison_operator);
		try {
			this.state = 953;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 104:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 947;
				localctx._op = this.match(JpqlParser.EQUAL);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 948;
				localctx._op = this.match(JpqlParser.T__4);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 949;
				localctx._op = this.match(JpqlParser.T__5);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 950;
				localctx._op = this.match(JpqlParser.T__6);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 951;
				localctx._op = this.match(JpqlParser.T__7);
				}
				break;
			case 105:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 952;
				localctx._op = this.match(JpqlParser.NOT_EQUAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public arithmetic_expression(): Arithmetic_expressionContext;
	public arithmetic_expression(_p: number): Arithmetic_expressionContext;
	// @RuleVersion(0)
	public arithmetic_expression(_p?: number): Arithmetic_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Arithmetic_expressionContext = new Arithmetic_expressionContext(this, this._ctx, _parentState);
		let _prevctx: Arithmetic_expressionContext = localctx;
		let _startState: number = 146;
		this.enterRecursionRule(localctx, 146, JpqlParser.RULE_arithmetic_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 956;
			this.arithmetic_term(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 963;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Arithmetic_expressionContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, JpqlParser.RULE_arithmetic_expression);
					this.state = 958;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 959;
					localctx._op = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===9 || _la===10)) {
					    localctx._op = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 960;
					this.arithmetic_term(0);
					}
					}
				}
				this.state = 965;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 102, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public arithmetic_term(): Arithmetic_termContext;
	public arithmetic_term(_p: number): Arithmetic_termContext;
	// @RuleVersion(0)
	public arithmetic_term(_p?: number): Arithmetic_termContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Arithmetic_termContext = new Arithmetic_termContext(this, this._ctx, _parentState);
		let _prevctx: Arithmetic_termContext = localctx;
		let _startState: number = 148;
		this.enterRecursionRule(localctx, 148, JpqlParser.RULE_arithmetic_term, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 967;
			this.arithmetic_factor();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 974;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new Arithmetic_termContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, JpqlParser.RULE_arithmetic_term);
					this.state = 969;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 970;
					localctx._op = this._input.LT(1);
					_la = this._input.LA(1);
					if(!(_la===11 || _la===12)) {
					    localctx._op = this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					this.state = 971;
					this.arithmetic_factor();
					}
					}
				}
				this.state = 976;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 103, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arithmetic_factor(): Arithmetic_factorContext {
		let localctx: Arithmetic_factorContext = new Arithmetic_factorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, JpqlParser.RULE_arithmetic_factor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 978;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===9 || _la===10) {
				{
				this.state = 977;
				localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===9 || _la===10)) {
				    localctx._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 980;
			this.arithmetic_primary();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arithmetic_primary(): Arithmetic_primaryContext {
		let localctx: Arithmetic_primaryContext = new Arithmetic_primaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, JpqlParser.RULE_arithmetic_primary);
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 982;
				this.state_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 983;
				this.numeric_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 984;
				this.match(JpqlParser.T__1);
				this.state = 985;
				this.arithmetic_expression(0);
				this.state = 986;
				this.match(JpqlParser.T__2);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 988;
				this.input_parameter();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 989;
				this.functions_returning_numerics();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 990;
				this.aggregate_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 991;
				this.case_expression();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 992;
				this.function_invocation();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 993;
				this.match(JpqlParser.T__1);
				this.state = 994;
				this.subquery();
				this.state = 995;
				this.match(JpqlParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_expression(): String_expressionContext {
		let localctx: String_expressionContext = new String_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, JpqlParser.RULE_string_expression);
		try {
			this.state = 1010;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 999;
				this.state_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1000;
				this.string_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1001;
				this.input_parameter();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1002;
				this.functions_returning_strings();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1003;
				this.aggregate_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1004;
				this.case_expression();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1005;
				this.function_invocation();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1006;
				this.match(JpqlParser.T__1);
				this.state = 1007;
				this.subquery();
				this.state = 1008;
				this.match(JpqlParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datetime_expression(): Datetime_expressionContext {
		let localctx: Datetime_expressionContext = new Datetime_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, JpqlParser.RULE_datetime_expression);
		try {
			this.state = 1023;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1012;
				this.state_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1013;
				this.input_parameter();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1014;
				this.functions_returning_datetime();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1015;
				this.aggregate_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1016;
				this.case_expression();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1017;
				this.function_invocation();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1018;
				this.date_time_timestamp_literal();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1019;
				this.match(JpqlParser.T__1);
				this.state = 1020;
				this.subquery();
				this.state = 1021;
				this.match(JpqlParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_expression(): Boolean_expressionContext {
		let localctx: Boolean_expressionContext = new Boolean_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, JpqlParser.RULE_boolean_expression);
		try {
			this.state = 1034;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 34:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 95:
			case 98:
			case 101:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1025;
				this.state_valued_path_expression();
				}
				break;
			case 47:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1026;
				this.boolean_literal();
				}
				break;
			case 13:
			case 14:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1027;
				this.input_parameter();
				}
				break;
			case 26:
			case 28:
			case 75:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1028;
				this.case_expression();
				}
				break;
			case 51:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1029;
				this.function_invocation();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1030;
				this.match(JpqlParser.T__1);
				this.state = 1031;
				this.subquery();
				this.state = 1032;
				this.match(JpqlParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enum_expression(): Enum_expressionContext {
		let localctx: Enum_expressionContext = new Enum_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, JpqlParser.RULE_enum_expression);
		try {
			this.state = 1044;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1036;
				this.state_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1037;
				this.enum_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1038;
				this.input_parameter();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1039;
				this.case_expression();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1040;
				this.match(JpqlParser.T__1);
				this.state = 1041;
				this.subquery();
				this.state = 1042;
				this.match(JpqlParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entity_expression(): Entity_expressionContext {
		let localctx: Entity_expressionContext = new Entity_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, JpqlParser.RULE_entity_expression);
		try {
			this.state = 1048;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1046;
				this.single_valued_object_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1047;
				this.simple_entity_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_entity_expression(): Simple_entity_expressionContext {
		let localctx: Simple_entity_expressionContext = new Simple_entity_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, JpqlParser.RULE_simple_entity_expression);
		try {
			this.state = 1052;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
			case 34:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 98:
			case 101:
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1050;
				this.identification_variable();
				}
				break;
			case 13:
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1051;
				this.input_parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entity_type_expression(): Entity_type_expressionContext {
		let localctx: Entity_type_expressionContext = new Entity_type_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, JpqlParser.RULE_entity_type_expression);
		try {
			this.state = 1057;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1054;
				this.type_discriminator();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1055;
				this.entity_type_literal();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1056;
				this.input_parameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_discriminator(): Type_discriminatorContext {
		let localctx: Type_discriminatorContext = new Type_discriminatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, JpqlParser.RULE_type_discriminator);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1059;
			this.match(JpqlParser.TYPE);
			this.state = 1060;
			this.match(JpqlParser.T__1);
			this.state = 1064;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				{
				this.state = 1061;
				this.general_identification_variable();
				}
				break;
			case 2:
				{
				this.state = 1062;
				this.single_valued_object_path_expression();
				}
				break;
			case 3:
				{
				this.state = 1063;
				this.input_parameter();
				}
				break;
			}
			this.state = 1066;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functions_returning_numerics(): Functions_returning_numericsContext {
		let localctx: Functions_returning_numericsContext = new Functions_returning_numericsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, JpqlParser.RULE_functions_returning_numerics);
		let _la: number;
		try {
			this.state = 1151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 62:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1068;
				this.match(JpqlParser.LENGTH);
				this.state = 1069;
				this.match(JpqlParser.T__1);
				this.state = 1070;
				this.string_expression();
				this.state = 1071;
				this.match(JpqlParser.T__2);
				}
				break;
			case 66:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1073;
				this.match(JpqlParser.LOCATE);
				this.state = 1074;
				this.match(JpqlParser.T__1);
				this.state = 1075;
				this.string_expression();
				this.state = 1076;
				this.match(JpqlParser.T__0);
				this.state = 1077;
				this.string_expression();
				this.state = 1080;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 1078;
					this.match(JpqlParser.T__0);
					this.state = 1079;
					this.arithmetic_expression(0);
					}
				}

				this.state = 1082;
				this.match(JpqlParser.T__2);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1084;
				this.match(JpqlParser.ABS);
				this.state = 1085;
				this.match(JpqlParser.T__1);
				this.state = 1086;
				this.arithmetic_expression(0);
				this.state = 1087;
				this.match(JpqlParser.T__2);
				}
				break;
			case 27:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1089;
				this.match(JpqlParser.CEILING);
				this.state = 1090;
				this.match(JpqlParser.T__1);
				this.state = 1091;
				this.arithmetic_expression(0);
				this.state = 1092;
				this.match(JpqlParser.T__2);
				}
				break;
			case 45:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1094;
				this.match(JpqlParser.EXP);
				this.state = 1095;
				this.match(JpqlParser.T__1);
				this.state = 1096;
				this.arithmetic_expression(0);
				this.state = 1097;
				this.match(JpqlParser.T__2);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1099;
				this.match(JpqlParser.FLOOR);
				this.state = 1100;
				this.match(JpqlParser.T__1);
				this.state = 1101;
				this.arithmetic_expression(0);
				this.state = 1102;
				this.match(JpqlParser.T__2);
				}
				break;
			case 64:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1104;
				this.match(JpqlParser.LN);
				this.state = 1105;
				this.match(JpqlParser.T__1);
				this.state = 1106;
				this.arithmetic_expression(0);
				this.state = 1107;
				this.match(JpqlParser.T__2);
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1109;
				this.match(JpqlParser.SIGN);
				this.state = 1110;
				this.match(JpqlParser.T__1);
				this.state = 1111;
				this.arithmetic_expression(0);
				this.state = 1112;
				this.match(JpqlParser.T__2);
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1114;
				this.match(JpqlParser.SQRT);
				this.state = 1115;
				this.match(JpqlParser.T__1);
				this.state = 1116;
				this.arithmetic_expression(0);
				this.state = 1117;
				this.match(JpqlParser.T__2);
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 1119;
				this.match(JpqlParser.MOD);
				this.state = 1120;
				this.match(JpqlParser.T__1);
				this.state = 1121;
				this.arithmetic_expression(0);
				this.state = 1122;
				this.match(JpqlParser.T__0);
				this.state = 1123;
				this.arithmetic_expression(0);
				this.state = 1124;
				this.match(JpqlParser.T__2);
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 1126;
				this.match(JpqlParser.POWER);
				this.state = 1127;
				this.match(JpqlParser.T__1);
				this.state = 1128;
				this.arithmetic_expression(0);
				this.state = 1129;
				this.match(JpqlParser.T__0);
				this.state = 1130;
				this.arithmetic_expression(0);
				this.state = 1131;
				this.match(JpqlParser.T__2);
				}
				break;
			case 83:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 1133;
				this.match(JpqlParser.ROUND);
				this.state = 1134;
				this.match(JpqlParser.T__1);
				this.state = 1135;
				this.arithmetic_expression(0);
				this.state = 1136;
				this.match(JpqlParser.T__0);
				this.state = 1137;
				this.arithmetic_expression(0);
				this.state = 1138;
				this.match(JpqlParser.T__2);
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 1140;
				this.match(JpqlParser.SIZE);
				this.state = 1141;
				this.match(JpqlParser.T__1);
				this.state = 1142;
				this.collection_valued_path_expression();
				this.state = 1143;
				this.match(JpqlParser.T__2);
				}
				break;
			case 55:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 1145;
				this.match(JpqlParser.INDEX);
				this.state = 1146;
				this.match(JpqlParser.T__1);
				this.state = 1147;
				this.identification_variable();
				this.state = 1148;
				this.match(JpqlParser.T__2);
				}
				break;
			case 46:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 1150;
				this.extract_datetime_field();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functions_returning_datetime(): Functions_returning_datetimeContext {
		let localctx: Functions_returning_datetimeContext = new Functions_returning_datetimeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, JpqlParser.RULE_functions_returning_datetime);
		try {
			this.state = 1163;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1153;
				this.match(JpqlParser.CURRENT_DATE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1154;
				this.match(JpqlParser.CURRENT_TIME);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1155;
				this.match(JpqlParser.CURRENT_TIMESTAMP);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1156;
				this.match(JpqlParser.LOCAL);
				this.state = 1157;
				this.match(JpqlParser.DATE);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1158;
				this.match(JpqlParser.LOCAL);
				this.state = 1159;
				this.match(JpqlParser.TIME);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1160;
				this.match(JpqlParser.LOCAL);
				this.state = 1161;
				this.match(JpqlParser.DATETIME);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1162;
				this.extract_datetime_part();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functions_returning_strings(): Functions_returning_stringsContext {
		let localctx: Functions_returning_stringsContext = new Functions_returning_stringsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, JpqlParser.RULE_functions_returning_strings);
		let _la: number;
		try {
			this.state = 1214;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1165;
				this.match(JpqlParser.CONCAT);
				this.state = 1166;
				this.match(JpqlParser.T__1);
				this.state = 1167;
				this.string_expression();
				this.state = 1168;
				this.match(JpqlParser.T__0);
				this.state = 1169;
				this.string_expression();
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1) {
					{
					{
					this.state = 1170;
					this.match(JpqlParser.T__0);
					this.state = 1171;
					this.string_expression();
					}
					}
					this.state = 1176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1177;
				this.match(JpqlParser.T__2);
				}
				break;
			case 90:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1179;
				this.match(JpqlParser.SUBSTRING);
				this.state = 1180;
				this.match(JpqlParser.T__1);
				this.state = 1181;
				this.string_expression();
				this.state = 1182;
				this.match(JpqlParser.T__0);
				this.state = 1183;
				this.arithmetic_expression(0);
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===1) {
					{
					this.state = 1184;
					this.match(JpqlParser.T__0);
					this.state = 1185;
					this.arithmetic_expression(0);
					}
				}

				this.state = 1188;
				this.match(JpqlParser.T__2);
				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1190;
				this.match(JpqlParser.TRIM);
				this.state = 1191;
				this.match(JpqlParser.T__1);
				this.state = 1199;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===24 || _la===60 || _la===94) {
						{
						this.state = 1192;
						this.trim_specification();
						}
					}

					this.state = 1196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===13 || _la===14 || _la===106) {
						{
						this.state = 1195;
						this.trim_character();
						}
					}

					this.state = 1198;
					this.match(JpqlParser.FROM);
					}
					break;
				}
				this.state = 1201;
				this.string_expression();
				this.state = 1202;
				this.match(JpqlParser.T__2);
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1204;
				this.match(JpqlParser.LOWER);
				this.state = 1205;
				this.match(JpqlParser.T__1);
				this.state = 1206;
				this.string_expression();
				this.state = 1207;
				this.match(JpqlParser.T__2);
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1209;
				this.match(JpqlParser.UPPER);
				this.state = 1210;
				this.match(JpqlParser.T__1);
				this.state = 1211;
				this.string_expression();
				this.state = 1212;
				this.match(JpqlParser.T__2);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trim_specification(): Trim_specificationContext {
		let localctx: Trim_specificationContext = new Trim_specificationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 176, JpqlParser.RULE_trim_specification);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1216;
			_la = this._input.LA(1);
			if(!(_la===24 || _la===60 || _la===94)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_invocation(): Function_invocationContext {
		let localctx: Function_invocationContext = new Function_invocationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 178, JpqlParser.RULE_function_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1218;
			this.match(JpqlParser.FUNCTION);
			this.state = 1219;
			this.match(JpqlParser.T__1);
			this.state = 1220;
			this.function_name();
			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 1221;
				this.match(JpqlParser.T__0);
				this.state = 1222;
				this.function_arg();
				}
				}
				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1228;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extract_datetime_field(): Extract_datetime_fieldContext {
		let localctx: Extract_datetime_fieldContext = new Extract_datetime_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 180, JpqlParser.RULE_extract_datetime_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1230;
			this.match(JpqlParser.EXTRACT);
			this.state = 1231;
			this.match(JpqlParser.T__1);
			this.state = 1232;
			this.datetime_field();
			this.state = 1233;
			this.match(JpqlParser.FROM);
			this.state = 1234;
			this.datetime_expression();
			this.state = 1235;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datetime_field(): Datetime_fieldContext {
		let localctx: Datetime_fieldContext = new Datetime_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 182, JpqlParser.RULE_datetime_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1237;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public extract_datetime_part(): Extract_datetime_partContext {
		let localctx: Extract_datetime_partContext = new Extract_datetime_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 184, JpqlParser.RULE_extract_datetime_part);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1239;
			this.match(JpqlParser.EXTRACT);
			this.state = 1240;
			this.match(JpqlParser.T__1);
			this.state = 1241;
			this.datetime_part();
			this.state = 1242;
			this.match(JpqlParser.FROM);
			this.state = 1243;
			this.datetime_expression();
			this.state = 1244;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public datetime_part(): Datetime_partContext {
		let localctx: Datetime_partContext = new Datetime_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 186, JpqlParser.RULE_datetime_part);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1246;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_arg(): Function_argContext {
		let localctx: Function_argContext = new Function_argContext(this, this._ctx, this.state);
		this.enterRule(localctx, 188, JpqlParser.RULE_function_arg);
		try {
			this.state = 1252;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1248;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1249;
				this.state_valued_path_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1250;
				this.input_parameter();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1251;
				this.scalar_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public case_expression(): Case_expressionContext {
		let localctx: Case_expressionContext = new Case_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 190, JpqlParser.RULE_case_expression);
		try {
			this.state = 1258;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 125, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1254;
				this.general_case_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1255;
				this.simple_case_expression();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1256;
				this.coalesce_expression();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1257;
				this.nullif_expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public general_case_expression(): General_case_expressionContext {
		let localctx: General_case_expressionContext = new General_case_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 192, JpqlParser.RULE_general_case_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1260;
			this.match(JpqlParser.CASE);
			this.state = 1261;
			this.when_clause();
			this.state = 1265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===102) {
				{
				{
				this.state = 1262;
				this.when_clause();
				}
				}
				this.state = 1267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1268;
			this.match(JpqlParser.ELSE);
			this.state = 1269;
			this.scalar_expression();
			this.state = 1270;
			this.match(JpqlParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public when_clause(): When_clauseContext {
		let localctx: When_clauseContext = new When_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 194, JpqlParser.RULE_when_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1272;
			this.match(JpqlParser.WHEN);
			this.state = 1273;
			this.conditional_expression(0);
			this.state = 1274;
			this.match(JpqlParser.THEN);
			this.state = 1275;
			this.scalar_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_case_expression(): Simple_case_expressionContext {
		let localctx: Simple_case_expressionContext = new Simple_case_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 196, JpqlParser.RULE_simple_case_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1277;
			this.match(JpqlParser.CASE);
			this.state = 1278;
			this.case_operand();
			this.state = 1279;
			this.simple_when_clause();
			this.state = 1283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===102) {
				{
				{
				this.state = 1280;
				this.simple_when_clause();
				}
				}
				this.state = 1285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1286;
			this.match(JpqlParser.ELSE);
			this.state = 1287;
			this.scalar_expression();
			this.state = 1288;
			this.match(JpqlParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public case_operand(): Case_operandContext {
		let localctx: Case_operandContext = new Case_operandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 198, JpqlParser.RULE_case_operand);
		try {
			this.state = 1292;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1290;
				this.state_valued_path_expression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1291;
				this.type_discriminator();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public simple_when_clause(): Simple_when_clauseContext {
		let localctx: Simple_when_clauseContext = new Simple_when_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 200, JpqlParser.RULE_simple_when_clause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1294;
			this.match(JpqlParser.WHEN);
			this.state = 1295;
			this.scalar_expression();
			this.state = 1296;
			this.match(JpqlParser.THEN);
			this.state = 1297;
			this.scalar_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public coalesce_expression(): Coalesce_expressionContext {
		let localctx: Coalesce_expressionContext = new Coalesce_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 202, JpqlParser.RULE_coalesce_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1299;
			this.match(JpqlParser.COALESCE);
			this.state = 1300;
			this.match(JpqlParser.T__1);
			this.state = 1301;
			this.scalar_expression();
			this.state = 1304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1302;
				this.match(JpqlParser.T__0);
				this.state = 1303;
				this.scalar_expression();
				}
				}
				this.state = 1306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===1);
			this.state = 1308;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public nullif_expression(): Nullif_expressionContext {
		let localctx: Nullif_expressionContext = new Nullif_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 204, JpqlParser.RULE_nullif_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1310;
			this.match(JpqlParser.NULLIF);
			this.state = 1311;
			this.match(JpqlParser.T__1);
			this.state = 1312;
			this.scalar_expression();
			this.state = 1313;
			this.match(JpqlParser.T__0);
			this.state = 1314;
			this.scalar_expression();
			this.state = 1315;
			this.match(JpqlParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public trim_character(): Trim_characterContext {
		let localctx: Trim_characterContext = new Trim_characterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 206, JpqlParser.RULE_trim_character);
		try {
			this.state = 1319;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1317;
				this.match(JpqlParser.CHARACTER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1318;
				this.character_valued_input_parameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identification_variable(): Identification_variableContext {
		let localctx: Identification_variableContext = new Identification_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 208, JpqlParser.RULE_identification_variable);
		let _la: number;
		try {
			this.state = 1323;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 107:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1321;
				this.match(JpqlParser.IDENTIFICATION_VARIABLE);
				}
				break;
			case 30:
			case 34:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 98:
			case 101:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1322;
				localctx._f = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 2753036305) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 606095105) !== 0))) {
				    localctx._f = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constructor_name(): Constructor_nameContext {
		let localctx: Constructor_nameContext = new Constructor_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 210, JpqlParser.RULE_constructor_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1325;
			this.state_field_path_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 212, JpqlParser.RULE_literal);
		try {
			this.state = 1332;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 108:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1327;
				this.match(JpqlParser.STRINGLITERAL);
				}
				break;
			case 110:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1328;
				this.match(JpqlParser.INTLITERAL);
				}
				break;
			case 109:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1329;
				this.match(JpqlParser.FLOATLITERAL);
				}
				break;
			case 47:
			case 97:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1330;
				this.boolean_literal();
				}
				break;
			case 30:
			case 34:
			case 49:
			case 50:
			case 56:
			case 59:
			case 61:
			case 72:
			case 80:
			case 81:
			case 82:
			case 86:
			case 93:
			case 98:
			case 101:
			case 107:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1331;
				this.entity_type_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public input_parameter(): Input_parameterContext {
		let localctx: Input_parameterContext = new Input_parameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 214, JpqlParser.RULE_input_parameter);
		try {
			this.state = 1338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1334;
				this.match(JpqlParser.T__12);
				this.state = 1335;
				this.match(JpqlParser.INTLITERAL);
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1336;
				this.match(JpqlParser.T__13);
				this.state = 1337;
				this.identification_variable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pattern_value(): Pattern_valueContext {
		let localctx: Pattern_valueContext = new Pattern_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 216, JpqlParser.RULE_pattern_value);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1340;
			this.string_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public date_time_timestamp_literal(): Date_time_timestamp_literalContext {
		let localctx: Date_time_timestamp_literalContext = new Date_time_timestamp_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 218, JpqlParser.RULE_date_time_timestamp_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1342;
			this.match(JpqlParser.STRINGLITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entity_type_literal(): Entity_type_literalContext {
		let localctx: Entity_type_literalContext = new Entity_type_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 220, JpqlParser.RULE_entity_type_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1344;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public escape_character(): Escape_characterContext {
		let localctx: Escape_characterContext = new Escape_characterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 222, JpqlParser.RULE_escape_character);
		try {
			this.state = 1348;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1346;
				this.match(JpqlParser.CHARACTER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1347;
				this.character_valued_input_parameter();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numeric_literal(): Numeric_literalContext {
		let localctx: Numeric_literalContext = new Numeric_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 224, JpqlParser.RULE_numeric_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1350;
			_la = this._input.LA(1);
			if(!(_la===109 || _la===110)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_literal(): Boolean_literalContext {
		let localctx: Boolean_literalContext = new Boolean_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 226, JpqlParser.RULE_boolean_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1352;
			_la = this._input.LA(1);
			if(!(_la===47 || _la===97)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enum_literal(): Enum_literalContext {
		let localctx: Enum_literalContext = new Enum_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 228, JpqlParser.RULE_enum_literal);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1354;
			this.state_field_path_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_literal(): String_literalContext {
		let localctx: String_literalContext = new String_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 230, JpqlParser.RULE_string_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1356;
			_la = this._input.LA(1);
			if(!(_la===106 || _la===108)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public single_valued_embeddable_object_field(): Single_valued_embeddable_object_fieldContext {
		let localctx: Single_valued_embeddable_object_fieldContext = new Single_valued_embeddable_object_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 232, JpqlParser.RULE_single_valued_embeddable_object_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1358;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public subtype(): SubtypeContext {
		let localctx: SubtypeContext = new SubtypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 234, JpqlParser.RULE_subtype);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1360;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection_valued_field(): Collection_valued_fieldContext {
		let localctx: Collection_valued_fieldContext = new Collection_valued_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 236, JpqlParser.RULE_collection_valued_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1362;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public single_valued_object_field(): Single_valued_object_fieldContext {
		let localctx: Single_valued_object_fieldContext = new Single_valued_object_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 238, JpqlParser.RULE_single_valued_object_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1364;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public state_field(): State_fieldContext {
		let localctx: State_fieldContext = new State_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 240, JpqlParser.RULE_state_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1366;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection_value_field(): Collection_value_fieldContext {
		let localctx: Collection_value_fieldContext = new Collection_value_fieldContext(this, this._ctx, this.state);
		this.enterRule(localctx, 242, JpqlParser.RULE_collection_value_field);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1368;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public entity_name(): Entity_nameContext {
		let localctx: Entity_nameContext = new Entity_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 244, JpqlParser.RULE_entity_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1370;
			this.identification_variable();
			this.state = 1375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===4) {
				{
				{
				this.state = 1371;
				this.match(JpqlParser.T__3);
				this.state = 1372;
				this.identification_variable();
				}
				}
				this.state = 1377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public result_variable(): Result_variableContext {
		let localctx: Result_variableContext = new Result_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 246, JpqlParser.RULE_result_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1378;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public superquery_identification_variable(): Superquery_identification_variableContext {
		let localctx: Superquery_identification_variableContext = new Superquery_identification_variableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 248, JpqlParser.RULE_superquery_identification_variable);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1380;
			this.identification_variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public collection_valued_input_parameter(): Collection_valued_input_parameterContext {
		let localctx: Collection_valued_input_parameterContext = new Collection_valued_input_parameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 250, JpqlParser.RULE_collection_valued_input_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1382;
			this.input_parameter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public single_valued_input_parameter(): Single_valued_input_parameterContext {
		let localctx: Single_valued_input_parameterContext = new Single_valued_input_parameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 252, JpqlParser.RULE_single_valued_input_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1384;
			this.input_parameter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_name(): Function_nameContext {
		let localctx: Function_nameContext = new Function_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 254, JpqlParser.RULE_function_name);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1386;
			this.string_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public character_valued_input_parameter(): Character_valued_input_parameterContext {
		let localctx: Character_valued_input_parameterContext = new Character_valued_input_parameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 256, JpqlParser.RULE_character_valued_input_parameter);
		try {
			this.state = 1390;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 106:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1388;
				this.match(JpqlParser.CHARACTER);
				}
				break;
			case 13:
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1389;
				this.input_parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 55:
			return this.conditional_expression_sempred(localctx as Conditional_expressionContext, predIndex);
		case 56:
			return this.conditional_term_sempred(localctx as Conditional_termContext, predIndex);
		case 73:
			return this.arithmetic_expression_sempred(localctx as Arithmetic_expressionContext, predIndex);
		case 74:
			return this.arithmetic_term_sempred(localctx as Arithmetic_termContext, predIndex);
		}
		return true;
	}
	private conditional_expression_sempred(localctx: Conditional_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private conditional_term_sempred(localctx: Conditional_termContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private arithmetic_expression_sempred(localctx: Arithmetic_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private arithmetic_term_sempred(localctx: Arithmetic_termContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,110,1393,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,
	89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,
	2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,2,102,7,102,2,103,
	7,103,2,104,7,104,2,105,7,105,2,106,7,106,2,107,7,107,2,108,7,108,2,109,
	7,109,2,110,7,110,2,111,7,111,2,112,7,112,2,113,7,113,2,114,7,114,2,115,
	7,115,2,116,7,116,2,117,7,117,2,118,7,118,2,119,7,119,2,120,7,120,2,121,
	7,121,2,122,7,122,2,123,7,123,2,124,7,124,2,125,7,125,2,126,7,126,2,127,
	7,127,2,128,7,128,1,0,1,0,1,0,1,1,1,1,1,1,3,1,265,8,1,1,2,1,2,1,2,3,2,270,
	8,2,1,2,3,2,273,8,2,1,2,3,2,276,8,2,1,2,3,2,279,8,2,1,3,1,3,3,3,283,8,3,
	1,4,1,4,3,4,287,8,4,1,5,1,5,1,5,1,5,5,5,293,8,5,10,5,12,5,296,9,5,1,6,1,
	6,3,6,300,8,6,1,7,1,7,1,7,5,7,305,8,7,10,7,12,7,308,9,7,1,8,1,8,3,8,312,
	8,8,1,8,1,8,1,9,1,9,1,9,3,9,319,8,9,1,9,1,9,3,9,323,8,9,1,10,1,10,1,10,
	1,10,1,11,1,11,3,11,331,8,11,1,11,3,11,334,8,11,1,11,1,11,1,12,1,12,1,12,
	1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
	13,1,13,3,13,357,8,13,1,14,1,14,1,14,1,14,1,14,5,14,364,8,14,10,14,12,14,
	367,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,5,15,376,8,15,10,15,12,15,379,
	9,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,3,16,388,8,16,1,16,1,16,1,17,1,
	17,1,17,1,17,1,17,1,17,3,17,398,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
	1,18,1,18,1,18,3,18,410,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,3,19,422,8,19,1,20,1,20,3,20,426,8,20,1,21,1,21,1,21,1,21,5,21,
	432,8,21,10,21,12,21,435,9,21,3,21,437,8,21,1,22,1,22,1,22,1,22,5,22,443,
	8,22,10,22,12,22,446,9,22,3,22,448,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,
	23,1,24,1,24,1,24,1,24,1,25,1,25,3,25,463,8,25,1,26,1,26,1,26,1,26,1,27,
	1,27,1,27,1,27,1,28,1,28,1,28,3,28,476,8,28,1,28,3,28,479,8,28,1,28,1,28,
	1,28,1,28,5,28,485,8,28,10,28,12,28,488,9,28,1,29,1,29,1,29,3,29,493,8,
	29,1,29,1,29,1,29,5,29,498,8,29,10,29,12,29,501,9,29,1,29,1,29,3,29,505,
	8,29,1,29,1,29,1,29,1,30,1,30,1,30,3,30,513,8,30,1,31,1,31,1,31,1,31,3,
	31,519,8,31,1,31,3,31,522,8,31,1,32,1,32,3,32,526,8,32,1,32,1,32,1,32,5,
	32,531,8,32,10,32,12,32,534,9,32,1,33,1,33,3,33,538,8,33,1,33,3,33,541,
	8,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,553,8,34,1,
	35,1,35,1,35,1,35,1,35,1,35,5,35,561,8,35,10,35,12,35,564,9,35,1,35,1,35,
	1,36,1,36,1,36,1,36,3,36,572,8,36,1,37,1,37,1,37,3,37,577,8,37,1,37,1,37,
	1,37,1,37,1,37,1,37,3,37,585,8,37,1,37,1,37,1,37,3,37,590,8,37,1,37,1,37,
	1,37,3,37,595,8,37,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,5,39,605,8,39,
	10,39,12,39,608,9,39,1,40,1,40,3,40,612,8,40,1,41,1,41,1,41,1,42,1,42,1,
	42,1,42,1,42,5,42,622,8,42,10,42,12,42,625,9,42,1,43,1,43,1,43,3,43,630,
	8,43,1,43,3,43,633,8,43,1,44,1,44,1,44,3,44,638,8,44,1,44,3,44,641,8,44,
	1,44,3,44,644,8,44,1,45,1,45,1,45,1,45,1,45,3,45,651,8,45,5,45,653,8,45,
	10,45,12,45,656,9,45,1,46,1,46,1,46,3,46,661,8,46,1,46,1,46,5,46,665,8,
	46,10,46,12,46,668,9,46,1,46,3,46,671,8,46,1,47,1,47,1,47,1,47,1,47,1,47,
	1,47,1,47,3,47,681,8,47,1,48,1,48,1,48,1,48,5,48,687,8,48,10,48,12,48,690,
	9,48,3,48,692,8,48,1,49,1,49,1,49,5,49,697,8,49,10,49,12,49,700,9,49,1,
	50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,1,51,1,51,1,51,5,51,715,
	8,51,10,51,12,51,718,9,51,1,51,1,51,1,52,1,52,3,52,724,8,52,1,52,1,52,1,
	53,1,53,1,53,1,53,3,53,732,8,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,3,54,
	741,8,54,1,55,1,55,1,55,1,55,1,55,1,55,5,55,749,8,55,10,55,12,55,752,9,
	55,1,56,1,56,1,56,1,56,1,56,1,56,5,56,760,8,56,10,56,12,56,763,9,56,1,57,
	3,57,766,8,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,3,58,775,8,58,1,59,1,59,
	1,59,1,59,1,59,1,59,1,59,1,59,3,59,785,8,59,1,60,1,60,3,60,789,8,60,1,60,
	1,60,1,60,1,60,1,60,1,60,1,60,3,60,798,8,60,1,60,1,60,1,60,1,60,1,60,1,
	60,1,60,3,60,807,8,60,1,60,1,60,1,60,1,60,1,60,3,60,814,8,60,1,61,1,61,
	3,61,818,8,61,1,61,3,61,821,8,61,1,61,1,61,1,61,1,61,1,61,5,61,828,8,61,
	10,61,12,61,831,9,61,1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,840,8,61,1,
	62,1,62,3,62,844,8,62,1,63,1,63,3,63,848,8,63,1,63,1,63,1,63,1,63,3,63,
	854,8,63,1,64,1,64,3,64,858,8,64,1,64,1,64,3,64,862,8,64,1,64,1,64,1,65,
	1,65,1,65,3,65,869,8,65,1,65,1,65,1,66,1,66,3,66,875,8,66,1,66,1,66,3,66,
	879,8,66,1,66,1,66,1,67,1,67,1,67,3,67,886,8,67,1,68,1,68,1,68,3,68,891,
	8,68,1,69,3,69,894,8,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,
	70,1,71,1,71,1,71,1,71,3,71,910,8,71,1,71,1,71,1,71,1,71,3,71,916,8,71,
	1,71,1,71,1,71,1,71,3,71,922,8,71,1,71,1,71,1,71,1,71,3,71,928,8,71,1,71,
	1,71,1,71,1,71,3,71,934,8,71,1,71,1,71,1,71,1,71,3,71,940,8,71,1,71,1,71,
	1,71,1,71,3,71,946,8,71,1,72,1,72,1,72,1,72,1,72,1,72,3,72,954,8,72,1,73,
	1,73,1,73,1,73,1,73,1,73,5,73,962,8,73,10,73,12,73,965,9,73,1,74,1,74,1,
	74,1,74,1,74,1,74,5,74,973,8,74,10,74,12,74,976,9,74,1,75,3,75,979,8,75,
	1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,3,76,998,8,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,
	1,77,1,77,3,77,1011,8,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,
	78,1,78,3,78,1024,8,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,3,79,
	1035,8,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,3,80,1045,8,80,1,81,1,
	81,3,81,1049,8,81,1,82,1,82,3,82,1053,8,82,1,83,1,83,1,83,3,83,1058,8,83,
	1,84,1,84,1,84,1,84,1,84,3,84,1065,8,84,1,84,1,84,1,85,1,85,1,85,1,85,1,
	85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,3,85,1081,8,85,1,85,1,85,1,85,1,85,
	1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,
	85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,
	1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,
	85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,1,85,
	1,85,1,85,1,85,1,85,1,85,1,85,1,85,3,85,1152,8,85,1,86,1,86,1,86,1,86,1,
	86,1,86,1,86,1,86,1,86,1,86,3,86,1164,8,86,1,87,1,87,1,87,1,87,1,87,1,87,
	1,87,5,87,1173,8,87,10,87,12,87,1176,9,87,1,87,1,87,1,87,1,87,1,87,1,87,
	1,87,1,87,1,87,3,87,1187,8,87,1,87,1,87,1,87,1,87,1,87,3,87,1194,8,87,1,
	87,3,87,1197,8,87,1,87,3,87,1200,8,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
	1,87,1,87,1,87,1,87,1,87,1,87,3,87,1215,8,87,1,88,1,88,1,89,1,89,1,89,1,
	89,1,89,5,89,1224,8,89,10,89,12,89,1227,9,89,1,89,1,89,1,90,1,90,1,90,1,
	90,1,90,1,90,1,90,1,91,1,91,1,92,1,92,1,92,1,92,1,92,1,92,1,92,1,93,1,93,
	1,94,1,94,1,94,1,94,3,94,1253,8,94,1,95,1,95,1,95,1,95,3,95,1259,8,95,1,
	96,1,96,1,96,5,96,1264,8,96,10,96,12,96,1267,9,96,1,96,1,96,1,96,1,96,1,
	97,1,97,1,97,1,97,1,97,1,98,1,98,1,98,1,98,5,98,1282,8,98,10,98,12,98,1285,
	9,98,1,98,1,98,1,98,1,98,1,99,1,99,3,99,1293,8,99,1,100,1,100,1,100,1,100,
	1,100,1,101,1,101,1,101,1,101,1,101,4,101,1305,8,101,11,101,12,101,1306,
	1,101,1,101,1,102,1,102,1,102,1,102,1,102,1,102,1,102,1,103,1,103,3,103,
	1320,8,103,1,104,1,104,3,104,1324,8,104,1,105,1,105,1,106,1,106,1,106,1,
	106,1,106,3,106,1333,8,106,1,107,1,107,1,107,1,107,3,107,1339,8,107,1,108,
	1,108,1,109,1,109,1,110,1,110,1,111,1,111,3,111,1349,8,111,1,112,1,112,
	1,113,1,113,1,114,1,114,1,115,1,115,1,116,1,116,1,117,1,117,1,118,1,118,
	1,119,1,119,1,120,1,120,1,121,1,121,1,122,1,122,1,122,5,122,1374,8,122,
	10,122,12,122,1377,9,122,1,123,1,123,1,124,1,124,1,125,1,125,1,126,1,126,
	1,127,1,127,1,128,1,128,3,128,1391,8,128,1,128,0,4,110,112,146,148,129,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
	52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
	100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,
	136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,
	172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,
	208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,
	244,246,248,250,252,254,256,0,11,4,0,22,22,68,68,70,70,91,91,2,0,21,21,
	37,37,3,0,17,17,19,19,88,88,1,0,104,105,1,0,9,10,1,0,11,12,3,0,24,24,60,
	60,94,94,12,0,30,30,34,34,49,50,56,56,59,59,61,61,72,72,80,82,86,86,93,
	93,98,98,101,101,1,0,109,110,2,0,47,47,97,97,2,0,106,106,108,108,1499,0,
	258,1,0,0,0,2,264,1,0,0,0,4,266,1,0,0,0,6,280,1,0,0,0,8,284,1,0,0,0,10,
	288,1,0,0,0,12,299,1,0,0,0,14,301,1,0,0,0,16,309,1,0,0,0,18,315,1,0,0,0,
	20,324,1,0,0,0,22,333,1,0,0,0,24,337,1,0,0,0,26,356,1,0,0,0,28,358,1,0,
	0,0,30,370,1,0,0,0,32,382,1,0,0,0,34,397,1,0,0,0,36,409,1,0,0,0,38,421,
	1,0,0,0,40,425,1,0,0,0,42,436,1,0,0,0,44,447,1,0,0,0,46,449,1,0,0,0,48,
	456,1,0,0,0,50,462,1,0,0,0,52,464,1,0,0,0,54,468,1,0,0,0,56,472,1,0,0,0,
	58,492,1,0,0,0,60,512,1,0,0,0,62,514,1,0,0,0,64,523,1,0,0,0,66,535,1,0,
	0,0,68,552,1,0,0,0,70,554,1,0,0,0,72,571,1,0,0,0,74,594,1,0,0,0,76,596,
	1,0,0,0,78,599,1,0,0,0,80,611,1,0,0,0,82,613,1,0,0,0,84,616,1,0,0,0,86,
	629,1,0,0,0,88,634,1,0,0,0,90,645,1,0,0,0,92,670,1,0,0,0,94,680,1,0,0,0,
	96,691,1,0,0,0,98,693,1,0,0,0,100,701,1,0,0,0,102,708,1,0,0,0,104,721,1,
	0,0,0,106,731,1,0,0,0,108,740,1,0,0,0,110,742,1,0,0,0,112,753,1,0,0,0,114,
	765,1,0,0,0,116,774,1,0,0,0,118,784,1,0,0,0,120,813,1,0,0,0,122,817,1,0,
	0,0,124,843,1,0,0,0,126,845,1,0,0,0,128,857,1,0,0,0,130,865,1,0,0,0,132,
	872,1,0,0,0,134,885,1,0,0,0,136,890,1,0,0,0,138,893,1,0,0,0,140,900,1,0,
	0,0,142,945,1,0,0,0,144,953,1,0,0,0,146,955,1,0,0,0,148,966,1,0,0,0,150,
	978,1,0,0,0,152,997,1,0,0,0,154,1010,1,0,0,0,156,1023,1,0,0,0,158,1034,
	1,0,0,0,160,1044,1,0,0,0,162,1048,1,0,0,0,164,1052,1,0,0,0,166,1057,1,0,
	0,0,168,1059,1,0,0,0,170,1151,1,0,0,0,172,1163,1,0,0,0,174,1214,1,0,0,0,
	176,1216,1,0,0,0,178,1218,1,0,0,0,180,1230,1,0,0,0,182,1237,1,0,0,0,184,
	1239,1,0,0,0,186,1246,1,0,0,0,188,1252,1,0,0,0,190,1258,1,0,0,0,192,1260,
	1,0,0,0,194,1272,1,0,0,0,196,1277,1,0,0,0,198,1292,1,0,0,0,200,1294,1,0,
	0,0,202,1299,1,0,0,0,204,1310,1,0,0,0,206,1319,1,0,0,0,208,1323,1,0,0,0,
	210,1325,1,0,0,0,212,1332,1,0,0,0,214,1338,1,0,0,0,216,1340,1,0,0,0,218,
	1342,1,0,0,0,220,1344,1,0,0,0,222,1348,1,0,0,0,224,1350,1,0,0,0,226,1352,
	1,0,0,0,228,1354,1,0,0,0,230,1356,1,0,0,0,232,1358,1,0,0,0,234,1360,1,0,
	0,0,236,1362,1,0,0,0,238,1364,1,0,0,0,240,1366,1,0,0,0,242,1368,1,0,0,0,
	244,1370,1,0,0,0,246,1378,1,0,0,0,248,1380,1,0,0,0,250,1382,1,0,0,0,252,
	1384,1,0,0,0,254,1386,1,0,0,0,256,1390,1,0,0,0,258,259,3,2,1,0,259,260,
	5,0,0,1,260,1,1,0,0,0,261,265,3,4,2,0,262,265,3,6,3,0,263,265,3,8,4,0,264,
	261,1,0,0,0,264,262,1,0,0,0,264,263,1,0,0,0,265,3,1,0,0,0,266,267,3,64,
	32,0,267,269,3,10,5,0,268,270,3,76,38,0,269,268,1,0,0,0,269,270,1,0,0,0,
	270,272,1,0,0,0,271,273,3,78,39,0,272,271,1,0,0,0,272,273,1,0,0,0,273,275,
	1,0,0,0,274,276,3,82,41,0,275,274,1,0,0,0,275,276,1,0,0,0,276,278,1,0,0,
	0,277,279,3,84,42,0,278,277,1,0,0,0,278,279,1,0,0,0,279,5,1,0,0,0,280,282,
	3,56,28,0,281,283,3,76,38,0,282,281,1,0,0,0,282,283,1,0,0,0,283,7,1,0,0,
	0,284,286,3,62,31,0,285,287,3,76,38,0,286,285,1,0,0,0,286,287,1,0,0,0,287,
	9,1,0,0,0,288,289,5,50,0,0,289,294,3,14,7,0,290,291,5,1,0,0,291,293,3,12,
	6,0,292,290,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,
	11,1,0,0,0,296,294,1,0,0,0,297,300,3,14,7,0,298,300,3,32,16,0,299,297,1,
	0,0,0,299,298,1,0,0,0,300,13,1,0,0,0,301,306,3,16,8,0,302,305,3,18,9,0,
	303,305,3,20,10,0,304,302,1,0,0,0,304,303,1,0,0,0,305,308,1,0,0,0,306,304,
	1,0,0,0,306,307,1,0,0,0,307,15,1,0,0,0,308,306,1,0,0,0,309,311,3,244,122,
	0,310,312,5,20,0,0,311,310,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,
	314,3,208,104,0,314,17,1,0,0,0,315,316,3,22,11,0,316,318,3,26,13,0,317,
	319,5,20,0,0,318,317,1,0,0,0,318,319,1,0,0,0,319,320,1,0,0,0,320,322,3,
	208,104,0,321,323,3,24,12,0,322,321,1,0,0,0,322,323,1,0,0,0,323,19,1,0,
	0,0,324,325,3,22,11,0,325,326,5,48,0,0,326,327,3,26,13,0,327,21,1,0,0,0,
	328,330,5,61,0,0,329,331,5,81,0,0,330,329,1,0,0,0,330,331,1,0,0,0,331,334,
	1,0,0,0,332,334,5,56,0,0,333,328,1,0,0,0,333,332,1,0,0,0,333,334,1,0,0,
	0,334,335,1,0,0,0,335,336,5,58,0,0,336,23,1,0,0,0,337,338,5,78,0,0,338,
	339,3,110,55,0,339,25,1,0,0,0,340,357,3,28,14,0,341,357,3,30,15,0,342,343,
	5,95,0,0,343,344,5,2,0,0,344,345,3,28,14,0,345,346,5,20,0,0,346,347,3,234,
	117,0,347,348,5,3,0,0,348,357,1,0,0,0,349,350,5,95,0,0,350,351,5,2,0,0,
	351,352,3,30,15,0,352,353,5,20,0,0,353,354,3,234,117,0,354,355,5,3,0,0,
	355,357,1,0,0,0,356,340,1,0,0,0,356,341,1,0,0,0,356,342,1,0,0,0,356,349,
	1,0,0,0,357,27,1,0,0,0,358,359,3,208,104,0,359,365,5,4,0,0,360,361,3,232,
	116,0,361,362,5,4,0,0,362,364,1,0,0,0,363,360,1,0,0,0,364,367,1,0,0,0,365,
	363,1,0,0,0,365,366,1,0,0,0,366,368,1,0,0,0,367,365,1,0,0,0,368,369,3,236,
	118,0,369,29,1,0,0,0,370,371,3,208,104,0,371,377,5,4,0,0,372,373,3,232,
	116,0,373,374,5,4,0,0,374,376,1,0,0,0,375,372,1,0,0,0,376,379,1,0,0,0,377,
	375,1,0,0,0,377,378,1,0,0,0,378,380,1,0,0,0,379,377,1,0,0,0,380,381,3,238,
	119,0,381,31,1,0,0,0,382,383,5,54,0,0,383,384,5,2,0,0,384,385,3,54,27,0,
	385,387,5,3,0,0,386,388,5,20,0,0,387,386,1,0,0,0,387,388,1,0,0,0,388,389,
	1,0,0,0,389,390,3,208,104,0,390,33,1,0,0,0,391,398,3,36,18,0,392,393,5,
	42,0,0,393,394,5,2,0,0,394,395,3,208,104,0,395,396,5,3,0,0,396,398,1,0,
	0,0,397,391,1,0,0,0,397,392,1,0,0,0,398,35,1,0,0,0,399,400,5,59,0,0,400,
	401,5,2,0,0,401,402,3,208,104,0,402,403,5,3,0,0,403,410,1,0,0,0,404,405,
	5,101,0,0,405,406,5,2,0,0,406,407,3,208,104,0,407,408,5,3,0,0,408,410,1,
	0,0,0,409,399,1,0,0,0,409,404,1,0,0,0,410,37,1,0,0,0,411,422,3,34,17,0,
	412,413,5,95,0,0,413,414,5,2,0,0,414,415,3,34,17,0,415,416,5,20,0,0,416,
	417,3,234,117,0,417,418,5,3,0,0,418,422,1,0,0,0,419,422,3,48,24,0,420,422,
	3,52,26,0,421,411,1,0,0,0,421,412,1,0,0,0,421,419,1,0,0,0,421,420,1,0,0,
	0,422,39,1,0,0,0,423,426,3,208,104,0,424,426,3,36,18,0,425,423,1,0,0,0,
	425,424,1,0,0,0,426,41,1,0,0,0,427,437,3,44,22,0,428,433,3,46,23,0,429,
	430,5,4,0,0,430,432,3,238,119,0,431,429,1,0,0,0,432,435,1,0,0,0,433,431,
	1,0,0,0,433,434,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,436,427,1,0,0,0,
	436,428,1,0,0,0,437,43,1,0,0,0,438,448,3,40,20,0,439,444,3,40,20,0,440,
	441,5,4,0,0,441,443,3,238,119,0,442,440,1,0,0,0,443,446,1,0,0,0,444,442,
	1,0,0,0,444,445,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,447,438,1,0,0,0,
	447,439,1,0,0,0,448,45,1,0,0,0,449,450,5,95,0,0,450,451,5,2,0,0,451,452,
	3,42,21,0,452,453,5,20,0,0,453,454,3,234,117,0,454,455,5,3,0,0,455,47,1,
	0,0,0,456,457,3,42,21,0,457,458,5,4,0,0,458,459,3,240,120,0,459,49,1,0,
	0,0,460,463,3,48,24,0,461,463,3,40,20,0,462,460,1,0,0,0,462,461,1,0,0,0,
	463,51,1,0,0,0,464,465,3,42,21,0,465,466,5,4,0,0,466,467,3,238,119,0,467,
	53,1,0,0,0,468,469,3,42,21,0,469,470,5,4,0,0,470,471,3,242,121,0,471,55,
	1,0,0,0,472,473,5,99,0,0,473,478,3,244,122,0,474,476,5,20,0,0,475,474,1,
	0,0,0,475,476,1,0,0,0,476,477,1,0,0,0,477,479,3,208,104,0,478,475,1,0,0,
	0,478,479,1,0,0,0,479,480,1,0,0,0,480,481,5,85,0,0,481,486,3,58,29,0,482,
	483,5,1,0,0,483,485,3,58,29,0,484,482,1,0,0,0,485,488,1,0,0,0,486,484,1,
	0,0,0,486,487,1,0,0,0,487,57,1,0,0,0,488,486,1,0,0,0,489,490,3,208,104,
	0,490,491,5,4,0,0,491,493,1,0,0,0,492,489,1,0,0,0,492,493,1,0,0,0,493,499,
	1,0,0,0,494,495,3,232,116,0,495,496,5,4,0,0,496,498,1,0,0,0,497,494,1,0,
	0,0,498,501,1,0,0,0,499,497,1,0,0,0,499,500,1,0,0,0,500,504,1,0,0,0,501,
	499,1,0,0,0,502,505,3,240,120,0,503,505,3,238,119,0,504,502,1,0,0,0,504,
	503,1,0,0,0,505,506,1,0,0,0,506,507,5,104,0,0,507,508,3,60,30,0,508,59,
	1,0,0,0,509,513,3,108,54,0,510,513,3,164,82,0,511,513,5,74,0,0,512,509,
	1,0,0,0,512,510,1,0,0,0,512,511,1,0,0,0,513,61,1,0,0,0,514,515,5,36,0,0,
	515,516,5,50,0,0,516,521,3,244,122,0,517,519,5,20,0,0,518,517,1,0,0,0,518,
	519,1,0,0,0,519,520,1,0,0,0,520,522,3,208,104,0,521,518,1,0,0,0,521,522,
	1,0,0,0,522,63,1,0,0,0,523,525,5,84,0,0,524,526,5,38,0,0,525,524,1,0,0,
	0,525,526,1,0,0,0,526,527,1,0,0,0,527,532,3,66,33,0,528,529,5,1,0,0,529,
	531,3,66,33,0,530,528,1,0,0,0,531,534,1,0,0,0,532,530,1,0,0,0,532,533,1,
	0,0,0,533,65,1,0,0,0,534,532,1,0,0,0,535,540,3,68,34,0,536,538,5,20,0,0,
	537,536,1,0,0,0,537,538,1,0,0,0,538,539,1,0,0,0,539,541,3,246,123,0,540,
	537,1,0,0,0,540,541,1,0,0,0,541,67,1,0,0,0,542,553,3,38,19,0,543,553,3,
	108,54,0,544,553,3,74,37,0,545,553,3,208,104,0,546,547,5,76,0,0,547,548,
	5,2,0,0,548,549,3,208,104,0,549,550,5,3,0,0,550,553,1,0,0,0,551,553,3,70,
	35,0,552,542,1,0,0,0,552,543,1,0,0,0,552,544,1,0,0,0,552,545,1,0,0,0,552,
	546,1,0,0,0,552,551,1,0,0,0,553,69,1,0,0,0,554,555,5,72,0,0,555,556,3,210,
	105,0,556,557,5,2,0,0,557,562,3,72,36,0,558,559,5,1,0,0,559,561,3,72,36,
	0,560,558,1,0,0,0,561,564,1,0,0,0,562,560,1,0,0,0,562,563,1,0,0,0,563,565,
	1,0,0,0,564,562,1,0,0,0,565,566,5,3,0,0,566,71,1,0,0,0,567,572,3,38,19,
	0,568,572,3,108,54,0,569,572,3,74,37,0,570,572,3,208,104,0,571,567,1,0,
	0,0,571,568,1,0,0,0,571,569,1,0,0,0,571,570,1,0,0,0,572,73,1,0,0,0,573,
	574,7,0,0,0,574,576,5,2,0,0,575,577,5,38,0,0,576,575,1,0,0,0,576,577,1,
	0,0,0,577,578,1,0,0,0,578,579,3,50,25,0,579,580,5,3,0,0,580,595,1,0,0,0,
	581,582,5,30,0,0,582,584,5,2,0,0,583,585,5,38,0,0,584,583,1,0,0,0,584,585,
	1,0,0,0,585,589,1,0,0,0,586,590,3,208,104,0,587,590,3,50,25,0,588,590,3,
	52,26,0,589,586,1,0,0,0,589,587,1,0,0,0,589,588,1,0,0,0,590,591,1,0,0,0,
	591,592,5,3,0,0,592,595,1,0,0,0,593,595,3,178,89,0,594,573,1,0,0,0,594,
	581,1,0,0,0,594,593,1,0,0,0,595,75,1,0,0,0,596,597,5,103,0,0,597,598,3,
	110,55,0,598,77,1,0,0,0,599,600,5,52,0,0,600,601,5,25,0,0,601,606,3,80,
	40,0,602,603,5,1,0,0,603,605,3,80,40,0,604,602,1,0,0,0,605,608,1,0,0,0,
	606,604,1,0,0,0,606,607,1,0,0,0,607,79,1,0,0,0,608,606,1,0,0,0,609,612,
	3,38,19,0,610,612,3,208,104,0,611,609,1,0,0,0,611,610,1,0,0,0,612,81,1,
	0,0,0,613,614,5,53,0,0,614,615,3,110,55,0,615,83,1,0,0,0,616,617,5,80,0,
	0,617,618,5,25,0,0,618,623,3,86,43,0,619,620,5,1,0,0,620,622,3,86,43,0,
	621,619,1,0,0,0,622,625,1,0,0,0,623,621,1,0,0,0,623,624,1,0,0,0,624,85,
	1,0,0,0,625,623,1,0,0,0,626,630,3,48,24,0,627,630,3,40,20,0,628,630,3,246,
	123,0,629,626,1,0,0,0,629,627,1,0,0,0,629,628,1,0,0,0,630,632,1,0,0,0,631,
	633,7,1,0,0,632,631,1,0,0,0,632,633,1,0,0,0,633,87,1,0,0,0,634,635,3,104,
	52,0,635,637,3,90,45,0,636,638,3,76,38,0,637,636,1,0,0,0,637,638,1,0,0,
	0,638,640,1,0,0,0,639,641,3,78,39,0,640,639,1,0,0,0,640,641,1,0,0,0,641,
	643,1,0,0,0,642,644,3,82,41,0,643,642,1,0,0,0,643,644,1,0,0,0,644,89,1,
	0,0,0,645,646,5,50,0,0,646,654,3,92,46,0,647,650,5,1,0,0,648,651,3,92,46,
	0,649,651,3,32,16,0,650,648,1,0,0,0,650,649,1,0,0,0,651,653,1,0,0,0,652,
	647,1,0,0,0,653,656,1,0,0,0,654,652,1,0,0,0,654,655,1,0,0,0,655,91,1,0,
	0,0,656,654,1,0,0,0,657,671,3,14,7,0,658,660,3,94,47,0,659,661,5,20,0,0,
	660,659,1,0,0,0,660,661,1,0,0,0,661,662,1,0,0,0,662,666,3,208,104,0,663,
	665,3,18,9,0,664,663,1,0,0,0,665,668,1,0,0,0,666,664,1,0,0,0,666,667,1,
	0,0,0,667,671,1,0,0,0,668,666,1,0,0,0,669,671,3,102,51,0,670,657,1,0,0,
	0,670,658,1,0,0,0,670,669,1,0,0,0,671,93,1,0,0,0,672,673,3,96,48,0,673,
	674,5,4,0,0,674,675,3,238,119,0,675,681,1,0,0,0,676,677,3,96,48,0,677,678,
	5,4,0,0,678,679,3,236,118,0,679,681,1,0,0,0,680,672,1,0,0,0,680,676,1,0,
	0,0,681,95,1,0,0,0,682,692,3,98,49,0,683,688,3,100,50,0,684,685,5,4,0,0,
	685,687,3,238,119,0,686,684,1,0,0,0,687,690,1,0,0,0,688,686,1,0,0,0,688,
	689,1,0,0,0,689,692,1,0,0,0,690,688,1,0,0,0,691,682,1,0,0,0,691,683,1,0,
	0,0,692,97,1,0,0,0,693,698,3,248,124,0,694,695,5,4,0,0,695,697,3,238,119,
	0,696,694,1,0,0,0,697,700,1,0,0,0,698,696,1,0,0,0,698,699,1,0,0,0,699,99,
	1,0,0,0,700,698,1,0,0,0,701,702,5,95,0,0,702,703,5,2,0,0,703,704,3,96,48,
	0,704,705,5,20,0,0,705,706,3,234,117,0,706,707,5,3,0,0,707,101,1,0,0,0,
	708,709,5,54,0,0,709,710,3,248,124,0,710,716,5,4,0,0,711,712,3,238,119,
	0,712,713,5,4,0,0,713,715,1,0,0,0,714,711,1,0,0,0,715,718,1,0,0,0,716,714,
	1,0,0,0,716,717,1,0,0,0,717,719,1,0,0,0,718,716,1,0,0,0,719,720,3,236,118,
	0,720,103,1,0,0,0,721,723,5,84,0,0,722,724,5,38,0,0,723,722,1,0,0,0,723,
	724,1,0,0,0,724,725,1,0,0,0,725,726,3,106,53,0,726,105,1,0,0,0,727,732,
	3,38,19,0,728,732,3,108,54,0,729,732,3,74,37,0,730,732,3,208,104,0,731,
	727,1,0,0,0,731,728,1,0,0,0,731,729,1,0,0,0,731,730,1,0,0,0,732,107,1,0,
	0,0,733,741,3,146,73,0,734,741,3,154,77,0,735,741,3,160,80,0,736,741,3,
	156,78,0,737,741,3,158,79,0,738,741,3,190,95,0,739,741,3,166,83,0,740,733,
	1,0,0,0,740,734,1,0,0,0,740,735,1,0,0,0,740,736,1,0,0,0,740,737,1,0,0,0,
	740,738,1,0,0,0,740,739,1,0,0,0,741,109,1,0,0,0,742,743,6,55,-1,0,743,744,
	3,112,56,0,744,750,1,0,0,0,745,746,10,1,0,0,746,747,5,79,0,0,747,749,3,
	112,56,0,748,745,1,0,0,0,749,752,1,0,0,0,750,748,1,0,0,0,750,751,1,0,0,
	0,751,111,1,0,0,0,752,750,1,0,0,0,753,754,6,56,-1,0,754,755,3,114,57,0,
	755,761,1,0,0,0,756,757,10,1,0,0,757,758,5,18,0,0,758,760,3,114,57,0,759,
	756,1,0,0,0,760,763,1,0,0,0,761,759,1,0,0,0,761,762,1,0,0,0,762,113,1,0,
	0,0,763,761,1,0,0,0,764,766,5,73,0,0,765,764,1,0,0,0,765,766,1,0,0,0,766,
	767,1,0,0,0,767,768,3,116,58,0,768,115,1,0,0,0,769,775,3,118,59,0,770,771,
	5,2,0,0,771,772,3,110,55,0,772,773,5,3,0,0,773,775,1,0,0,0,774,769,1,0,
	0,0,774,770,1,0,0,0,775,117,1,0,0,0,776,785,3,142,71,0,777,785,3,120,60,
	0,778,785,3,122,61,0,779,785,3,126,63,0,780,785,3,128,64,0,781,785,3,130,
	65,0,782,785,3,132,66,0,783,785,3,138,69,0,784,776,1,0,0,0,784,777,1,0,
	0,0,784,778,1,0,0,0,784,779,1,0,0,0,784,780,1,0,0,0,784,781,1,0,0,0,784,
	782,1,0,0,0,784,783,1,0,0,0,785,119,1,0,0,0,786,788,3,146,73,0,787,789,
	5,73,0,0,788,787,1,0,0,0,788,789,1,0,0,0,789,790,1,0,0,0,790,791,5,23,0,
	0,791,792,3,146,73,0,792,793,5,18,0,0,793,794,3,146,73,0,794,814,1,0,0,
	0,795,797,3,154,77,0,796,798,5,73,0,0,797,796,1,0,0,0,797,798,1,0,0,0,798,
	799,1,0,0,0,799,800,5,23,0,0,800,801,3,154,77,0,801,802,5,18,0,0,802,803,
	3,154,77,0,803,814,1,0,0,0,804,806,3,156,78,0,805,807,5,73,0,0,806,805,
	1,0,0,0,806,807,1,0,0,0,807,808,1,0,0,0,808,809,5,23,0,0,809,810,3,156,
	78,0,810,811,5,18,0,0,811,812,3,156,78,0,812,814,1,0,0,0,813,786,1,0,0,
	0,813,795,1,0,0,0,813,804,1,0,0,0,814,121,1,0,0,0,815,818,3,50,25,0,816,
	818,3,168,84,0,817,815,1,0,0,0,817,816,1,0,0,0,818,820,1,0,0,0,819,821,
	5,73,0,0,820,819,1,0,0,0,820,821,1,0,0,0,821,822,1,0,0,0,822,839,5,54,0,
	0,823,824,5,2,0,0,824,829,3,124,62,0,825,826,5,1,0,0,826,828,3,124,62,0,
	827,825,1,0,0,0,828,831,1,0,0,0,829,827,1,0,0,0,829,830,1,0,0,0,830,832,
	1,0,0,0,831,829,1,0,0,0,832,833,5,3,0,0,833,840,1,0,0,0,834,835,5,2,0,0,
	835,836,3,88,44,0,836,837,5,3,0,0,837,840,1,0,0,0,838,840,3,250,125,0,839,
	823,1,0,0,0,839,834,1,0,0,0,839,838,1,0,0,0,840,123,1,0,0,0,841,844,3,212,
	106,0,842,844,3,252,126,0,843,841,1,0,0,0,843,842,1,0,0,0,844,125,1,0,0,
	0,845,847,3,154,77,0,846,848,5,73,0,0,847,846,1,0,0,0,847,848,1,0,0,0,848,
	849,1,0,0,0,849,850,5,63,0,0,850,853,3,216,108,0,851,852,5,43,0,0,852,854,
	3,222,111,0,853,851,1,0,0,0,853,854,1,0,0,0,854,127,1,0,0,0,855,858,3,38,
	19,0,856,858,3,214,107,0,857,855,1,0,0,0,857,856,1,0,0,0,858,859,1,0,0,
	0,859,861,5,57,0,0,860,862,5,73,0,0,861,860,1,0,0,0,861,862,1,0,0,0,862,
	863,1,0,0,0,863,864,5,74,0,0,864,129,1,0,0,0,865,866,3,54,27,0,866,868,
	5,57,0,0,867,869,5,73,0,0,868,867,1,0,0,0,868,869,1,0,0,0,869,870,1,0,0,
	0,870,871,5,41,0,0,871,131,1,0,0,0,872,874,3,134,67,0,873,875,5,73,0,0,
	874,873,1,0,0,0,874,875,1,0,0,0,875,876,1,0,0,0,876,878,5,69,0,0,877,879,
	5,77,0,0,878,877,1,0,0,0,878,879,1,0,0,0,879,880,1,0,0,0,880,881,3,54,27,
	0,881,133,1,0,0,0,882,886,3,52,26,0,883,886,3,48,24,0,884,886,3,136,68,
	0,885,882,1,0,0,0,885,883,1,0,0,0,885,884,1,0,0,0,886,135,1,0,0,0,887,891,
	3,208,104,0,888,891,3,214,107,0,889,891,3,212,106,0,890,887,1,0,0,0,890,
	888,1,0,0,0,890,889,1,0,0,0,891,137,1,0,0,0,892,894,5,73,0,0,893,892,1,
	0,0,0,893,894,1,0,0,0,894,895,1,0,0,0,895,896,5,44,0,0,896,897,5,2,0,0,
	897,898,3,88,44,0,898,899,5,3,0,0,899,139,1,0,0,0,900,901,7,2,0,0,901,902,
	5,2,0,0,902,903,3,88,44,0,903,904,5,3,0,0,904,141,1,0,0,0,905,906,3,154,
	77,0,906,909,3,144,72,0,907,910,3,154,77,0,908,910,3,140,70,0,909,907,1,
	0,0,0,909,908,1,0,0,0,910,946,1,0,0,0,911,912,3,158,79,0,912,915,7,3,0,
	0,913,916,3,158,79,0,914,916,3,140,70,0,915,913,1,0,0,0,915,914,1,0,0,0,
	916,946,1,0,0,0,917,918,3,160,80,0,918,921,7,3,0,0,919,922,3,160,80,0,920,
	922,3,140,70,0,921,919,1,0,0,0,921,920,1,0,0,0,922,946,1,0,0,0,923,924,
	3,156,78,0,924,927,3,144,72,0,925,928,3,156,78,0,926,928,3,140,70,0,927,
	925,1,0,0,0,927,926,1,0,0,0,928,946,1,0,0,0,929,930,3,162,81,0,930,933,
	7,3,0,0,931,934,3,162,81,0,932,934,3,140,70,0,933,931,1,0,0,0,933,932,1,
	0,0,0,934,946,1,0,0,0,935,936,3,146,73,0,936,939,3,144,72,0,937,940,3,146,
	73,0,938,940,3,140,70,0,939,937,1,0,0,0,939,938,1,0,0,0,940,946,1,0,0,0,
	941,942,3,166,83,0,942,943,7,3,0,0,943,944,3,166,83,0,944,946,1,0,0,0,945,
	905,1,0,0,0,945,911,1,0,0,0,945,917,1,0,0,0,945,923,1,0,0,0,945,929,1,0,
	0,0,945,935,1,0,0,0,945,941,1,0,0,0,946,143,1,0,0,0,947,954,5,104,0,0,948,
	954,5,5,0,0,949,954,5,6,0,0,950,954,5,7,0,0,951,954,5,8,0,0,952,954,5,105,
	0,0,953,947,1,0,0,0,953,948,1,0,0,0,953,949,1,0,0,0,953,950,1,0,0,0,953,
	951,1,0,0,0,953,952,1,0,0,0,954,145,1,0,0,0,955,956,6,73,-1,0,956,957,3,
	148,74,0,957,963,1,0,0,0,958,959,10,1,0,0,959,960,7,4,0,0,960,962,3,148,
	74,0,961,958,1,0,0,0,962,965,1,0,0,0,963,961,1,0,0,0,963,964,1,0,0,0,964,
	147,1,0,0,0,965,963,1,0,0,0,966,967,6,74,-1,0,967,968,3,150,75,0,968,974,
	1,0,0,0,969,970,10,1,0,0,970,971,7,5,0,0,971,973,3,150,75,0,972,969,1,0,
	0,0,973,976,1,0,0,0,974,972,1,0,0,0,974,975,1,0,0,0,975,149,1,0,0,0,976,
	974,1,0,0,0,977,979,7,4,0,0,978,977,1,0,0,0,978,979,1,0,0,0,979,980,1,0,
	0,0,980,981,3,152,76,0,981,151,1,0,0,0,982,998,3,50,25,0,983,998,3,224,
	112,0,984,985,5,2,0,0,985,986,3,146,73,0,986,987,5,3,0,0,987,998,1,0,0,
	0,988,998,3,214,107,0,989,998,3,170,85,0,990,998,3,74,37,0,991,998,3,190,
	95,0,992,998,3,178,89,0,993,994,5,2,0,0,994,995,3,88,44,0,995,996,5,3,0,
	0,996,998,1,0,0,0,997,982,1,0,0,0,997,983,1,0,0,0,997,984,1,0,0,0,997,988,
	1,0,0,0,997,989,1,0,0,0,997,990,1,0,0,0,997,991,1,0,0,0,997,992,1,0,0,0,
	997,993,1,0,0,0,998,153,1,0,0,0,999,1011,3,50,25,0,1000,1011,3,230,115,
	0,1001,1011,3,214,107,0,1002,1011,3,174,87,0,1003,1011,3,74,37,0,1004,1011,
	3,190,95,0,1005,1011,3,178,89,0,1006,1007,5,2,0,0,1007,1008,3,88,44,0,1008,
	1009,5,3,0,0,1009,1011,1,0,0,0,1010,999,1,0,0,0,1010,1000,1,0,0,0,1010,
	1001,1,0,0,0,1010,1002,1,0,0,0,1010,1003,1,0,0,0,1010,1004,1,0,0,0,1010,
	1005,1,0,0,0,1010,1006,1,0,0,0,1011,155,1,0,0,0,1012,1024,3,50,25,0,1013,
	1024,3,214,107,0,1014,1024,3,172,86,0,1015,1024,3,74,37,0,1016,1024,3,190,
	95,0,1017,1024,3,178,89,0,1018,1024,3,218,109,0,1019,1020,5,2,0,0,1020,
	1021,3,88,44,0,1021,1022,5,3,0,0,1022,1024,1,0,0,0,1023,1012,1,0,0,0,1023,
	1013,1,0,0,0,1023,1014,1,0,0,0,1023,1015,1,0,0,0,1023,1016,1,0,0,0,1023,
	1017,1,0,0,0,1023,1018,1,0,0,0,1023,1019,1,0,0,0,1024,157,1,0,0,0,1025,
	1035,3,50,25,0,1026,1035,3,226,113,0,1027,1035,3,214,107,0,1028,1035,3,
	190,95,0,1029,1035,3,178,89,0,1030,1031,5,2,0,0,1031,1032,3,88,44,0,1032,
	1033,5,3,0,0,1033,1035,1,0,0,0,1034,1025,1,0,0,0,1034,1026,1,0,0,0,1034,
	1027,1,0,0,0,1034,1028,1,0,0,0,1034,1029,1,0,0,0,1034,1030,1,0,0,0,1035,
	159,1,0,0,0,1036,1045,3,50,25,0,1037,1045,3,228,114,0,1038,1045,3,214,107,
	0,1039,1045,3,190,95,0,1040,1041,5,2,0,0,1041,1042,3,88,44,0,1042,1043,
	5,3,0,0,1043,1045,1,0,0,0,1044,1036,1,0,0,0,1044,1037,1,0,0,0,1044,1038,
	1,0,0,0,1044,1039,1,0,0,0,1044,1040,1,0,0,0,1045,161,1,0,0,0,1046,1049,
	3,52,26,0,1047,1049,3,164,82,0,1048,1046,1,0,0,0,1048,1047,1,0,0,0,1049,
	163,1,0,0,0,1050,1053,3,208,104,0,1051,1053,3,214,107,0,1052,1050,1,0,0,
	0,1052,1051,1,0,0,0,1053,165,1,0,0,0,1054,1058,3,168,84,0,1055,1058,3,220,
	110,0,1056,1058,3,214,107,0,1057,1054,1,0,0,0,1057,1055,1,0,0,0,1057,1056,
	1,0,0,0,1058,167,1,0,0,0,1059,1060,5,98,0,0,1060,1064,5,2,0,0,1061,1065,
	3,40,20,0,1062,1065,3,52,26,0,1063,1065,3,214,107,0,1064,1061,1,0,0,0,1064,
	1062,1,0,0,0,1064,1063,1,0,0,0,1065,1066,1,0,0,0,1066,1067,5,3,0,0,1067,
	169,1,0,0,0,1068,1069,5,62,0,0,1069,1070,5,2,0,0,1070,1071,3,154,77,0,1071,
	1072,5,3,0,0,1072,1152,1,0,0,0,1073,1074,5,66,0,0,1074,1075,5,2,0,0,1075,
	1076,3,154,77,0,1076,1077,5,1,0,0,1077,1080,3,154,77,0,1078,1079,5,1,0,
	0,1079,1081,3,146,73,0,1080,1078,1,0,0,0,1080,1081,1,0,0,0,1081,1082,1,
	0,0,0,1082,1083,5,3,0,0,1083,1152,1,0,0,0,1084,1085,5,16,0,0,1085,1086,
	5,2,0,0,1086,1087,3,146,73,0,1087,1088,5,3,0,0,1088,1152,1,0,0,0,1089,1090,
	5,27,0,0,1090,1091,5,2,0,0,1091,1092,3,146,73,0,1092,1093,5,3,0,0,1093,
	1152,1,0,0,0,1094,1095,5,45,0,0,1095,1096,5,2,0,0,1096,1097,3,146,73,0,
	1097,1098,5,3,0,0,1098,1152,1,0,0,0,1099,1100,5,49,0,0,1100,1101,5,2,0,
	0,1101,1102,3,146,73,0,1102,1103,5,3,0,0,1103,1152,1,0,0,0,1104,1105,5,
	64,0,0,1105,1106,5,2,0,0,1106,1107,3,146,73,0,1107,1108,5,3,0,0,1108,1152,
	1,0,0,0,1109,1110,5,86,0,0,1110,1111,5,2,0,0,1111,1112,3,146,73,0,1112,
	1113,5,3,0,0,1113,1152,1,0,0,0,1114,1115,5,89,0,0,1115,1116,5,2,0,0,1116,
	1117,3,146,73,0,1117,1118,5,3,0,0,1118,1152,1,0,0,0,1119,1120,5,71,0,0,
	1120,1121,5,2,0,0,1121,1122,3,146,73,0,1122,1123,5,1,0,0,1123,1124,3,146,
	73,0,1124,1125,5,3,0,0,1125,1152,1,0,0,0,1126,1127,5,82,0,0,1127,1128,5,
	2,0,0,1128,1129,3,146,73,0,1129,1130,5,1,0,0,1130,1131,3,146,73,0,1131,
	1132,5,3,0,0,1132,1152,1,0,0,0,1133,1134,5,83,0,0,1134,1135,5,2,0,0,1135,
	1136,3,146,73,0,1136,1137,5,1,0,0,1137,1138,3,146,73,0,1138,1139,5,3,0,
	0,1139,1152,1,0,0,0,1140,1141,5,87,0,0,1141,1142,5,2,0,0,1142,1143,3,54,
	27,0,1143,1144,5,3,0,0,1144,1152,1,0,0,0,1145,1146,5,55,0,0,1146,1147,5,
	2,0,0,1147,1148,3,208,104,0,1148,1149,5,3,0,0,1149,1152,1,0,0,0,1150,1152,
	3,180,90,0,1151,1068,1,0,0,0,1151,1073,1,0,0,0,1151,1084,1,0,0,0,1151,1089,
	1,0,0,0,1151,1094,1,0,0,0,1151,1099,1,0,0,0,1151,1104,1,0,0,0,1151,1109,
	1,0,0,0,1151,1114,1,0,0,0,1151,1119,1,0,0,0,1151,1126,1,0,0,0,1151,1133,
	1,0,0,0,1151,1140,1,0,0,0,1151,1145,1,0,0,0,1151,1150,1,0,0,0,1152,171,
	1,0,0,0,1153,1164,5,31,0,0,1154,1164,5,32,0,0,1155,1164,5,33,0,0,1156,1157,
	5,65,0,0,1157,1164,5,34,0,0,1158,1159,5,65,0,0,1159,1164,5,93,0,0,1160,
	1161,5,65,0,0,1161,1164,5,35,0,0,1162,1164,3,184,92,0,1163,1153,1,0,0,0,
	1163,1154,1,0,0,0,1163,1155,1,0,0,0,1163,1156,1,0,0,0,1163,1158,1,0,0,0,
	1163,1160,1,0,0,0,1163,1162,1,0,0,0,1164,173,1,0,0,0,1165,1166,5,29,0,0,
	1166,1167,5,2,0,0,1167,1168,3,154,77,0,1168,1169,5,1,0,0,1169,1174,3,154,
	77,0,1170,1171,5,1,0,0,1171,1173,3,154,77,0,1172,1170,1,0,0,0,1173,1176,
	1,0,0,0,1174,1172,1,0,0,0,1174,1175,1,0,0,0,1175,1177,1,0,0,0,1176,1174,
	1,0,0,0,1177,1178,5,3,0,0,1178,1215,1,0,0,0,1179,1180,5,90,0,0,1180,1181,
	5,2,0,0,1181,1182,3,154,77,0,1182,1183,5,1,0,0,1183,1186,3,146,73,0,1184,
	1185,5,1,0,0,1185,1187,3,146,73,0,1186,1184,1,0,0,0,1186,1187,1,0,0,0,1187,
	1188,1,0,0,0,1188,1189,5,3,0,0,1189,1215,1,0,0,0,1190,1191,5,96,0,0,1191,
	1199,5,2,0,0,1192,1194,3,176,88,0,1193,1192,1,0,0,0,1193,1194,1,0,0,0,1194,
	1196,1,0,0,0,1195,1197,3,206,103,0,1196,1195,1,0,0,0,1196,1197,1,0,0,0,
	1197,1198,1,0,0,0,1198,1200,5,50,0,0,1199,1193,1,0,0,0,1199,1200,1,0,0,
	0,1200,1201,1,0,0,0,1201,1202,3,154,77,0,1202,1203,5,3,0,0,1203,1215,1,
	0,0,0,1204,1205,5,67,0,0,1205,1206,5,2,0,0,1206,1207,3,154,77,0,1207,1208,
	5,3,0,0,1208,1215,1,0,0,0,1209,1210,5,100,0,0,1210,1211,5,2,0,0,1211,1212,
	3,154,77,0,1212,1213,5,3,0,0,1213,1215,1,0,0,0,1214,1165,1,0,0,0,1214,1179,
	1,0,0,0,1214,1190,1,0,0,0,1214,1204,1,0,0,0,1214,1209,1,0,0,0,1215,175,
	1,0,0,0,1216,1217,7,6,0,0,1217,177,1,0,0,0,1218,1219,5,51,0,0,1219,1220,
	5,2,0,0,1220,1225,3,254,127,0,1221,1222,5,1,0,0,1222,1224,3,188,94,0,1223,
	1221,1,0,0,0,1224,1227,1,0,0,0,1225,1223,1,0,0,0,1225,1226,1,0,0,0,1226,
	1228,1,0,0,0,1227,1225,1,0,0,0,1228,1229,5,3,0,0,1229,179,1,0,0,0,1230,
	1231,5,46,0,0,1231,1232,5,2,0,0,1232,1233,3,182,91,0,1233,1234,5,50,0,0,
	1234,1235,3,156,78,0,1235,1236,5,3,0,0,1236,181,1,0,0,0,1237,1238,3,208,
	104,0,1238,183,1,0,0,0,1239,1240,5,46,0,0,1240,1241,5,2,0,0,1241,1242,3,
	186,93,0,1242,1243,5,50,0,0,1243,1244,3,156,78,0,1244,1245,5,3,0,0,1245,
	185,1,0,0,0,1246,1247,3,208,104,0,1247,187,1,0,0,0,1248,1253,3,212,106,
	0,1249,1253,3,50,25,0,1250,1253,3,214,107,0,1251,1253,3,108,54,0,1252,1248,
	1,0,0,0,1252,1249,1,0,0,0,1252,1250,1,0,0,0,1252,1251,1,0,0,0,1253,189,
	1,0,0,0,1254,1259,3,192,96,0,1255,1259,3,196,98,0,1256,1259,3,202,101,0,
	1257,1259,3,204,102,0,1258,1254,1,0,0,0,1258,1255,1,0,0,0,1258,1256,1,0,
	0,0,1258,1257,1,0,0,0,1259,191,1,0,0,0,1260,1261,5,26,0,0,1261,1265,3,194,
	97,0,1262,1264,3,194,97,0,1263,1262,1,0,0,0,1264,1267,1,0,0,0,1265,1263,
	1,0,0,0,1265,1266,1,0,0,0,1266,1268,1,0,0,0,1267,1265,1,0,0,0,1268,1269,
	5,40,0,0,1269,1270,3,108,54,0,1270,1271,5,39,0,0,1271,193,1,0,0,0,1272,
	1273,5,102,0,0,1273,1274,3,110,55,0,1274,1275,5,92,0,0,1275,1276,3,108,
	54,0,1276,195,1,0,0,0,1277,1278,5,26,0,0,1278,1279,3,198,99,0,1279,1283,
	3,200,100,0,1280,1282,3,200,100,0,1281,1280,1,0,0,0,1282,1285,1,0,0,0,1283,
	1281,1,0,0,0,1283,1284,1,0,0,0,1284,1286,1,0,0,0,1285,1283,1,0,0,0,1286,
	1287,5,40,0,0,1287,1288,3,108,54,0,1288,1289,5,39,0,0,1289,197,1,0,0,0,
	1290,1293,3,50,25,0,1291,1293,3,168,84,0,1292,1290,1,0,0,0,1292,1291,1,
	0,0,0,1293,199,1,0,0,0,1294,1295,5,102,0,0,1295,1296,3,108,54,0,1296,1297,
	5,92,0,0,1297,1298,3,108,54,0,1298,201,1,0,0,0,1299,1300,5,28,0,0,1300,
	1301,5,2,0,0,1301,1304,3,108,54,0,1302,1303,5,1,0,0,1303,1305,3,108,54,
	0,1304,1302,1,0,0,0,1305,1306,1,0,0,0,1306,1304,1,0,0,0,1306,1307,1,0,0,
	0,1307,1308,1,0,0,0,1308,1309,5,3,0,0,1309,203,1,0,0,0,1310,1311,5,75,0,
	0,1311,1312,5,2,0,0,1312,1313,3,108,54,0,1313,1314,5,1,0,0,1314,1315,3,
	108,54,0,1315,1316,5,3,0,0,1316,205,1,0,0,0,1317,1320,5,106,0,0,1318,1320,
	3,256,128,0,1319,1317,1,0,0,0,1319,1318,1,0,0,0,1320,207,1,0,0,0,1321,1324,
	5,107,0,0,1322,1324,7,7,0,0,1323,1321,1,0,0,0,1323,1322,1,0,0,0,1324,209,
	1,0,0,0,1325,1326,3,48,24,0,1326,211,1,0,0,0,1327,1333,5,108,0,0,1328,1333,
	5,110,0,0,1329,1333,5,109,0,0,1330,1333,3,226,113,0,1331,1333,3,220,110,
	0,1332,1327,1,0,0,0,1332,1328,1,0,0,0,1332,1329,1,0,0,0,1332,1330,1,0,0,
	0,1332,1331,1,0,0,0,1333,213,1,0,0,0,1334,1335,5,13,0,0,1335,1339,5,110,
	0,0,1336,1337,5,14,0,0,1337,1339,3,208,104,0,1338,1334,1,0,0,0,1338,1336,
	1,0,0,0,1339,215,1,0,0,0,1340,1341,3,154,77,0,1341,217,1,0,0,0,1342,1343,
	5,108,0,0,1343,219,1,0,0,0,1344,1345,3,208,104,0,1345,221,1,0,0,0,1346,
	1349,5,106,0,0,1347,1349,3,256,128,0,1348,1346,1,0,0,0,1348,1347,1,0,0,
	0,1349,223,1,0,0,0,1350,1351,7,8,0,0,1351,225,1,0,0,0,1352,1353,7,9,0,0,
	1353,227,1,0,0,0,1354,1355,3,48,24,0,1355,229,1,0,0,0,1356,1357,7,10,0,
	0,1357,231,1,0,0,0,1358,1359,3,208,104,0,1359,233,1,0,0,0,1360,1361,3,208,
	104,0,1361,235,1,0,0,0,1362,1363,3,208,104,0,1363,237,1,0,0,0,1364,1365,
	3,208,104,0,1365,239,1,0,0,0,1366,1367,3,208,104,0,1367,241,1,0,0,0,1368,
	1369,3,208,104,0,1369,243,1,0,0,0,1370,1375,3,208,104,0,1371,1372,5,4,0,
	0,1372,1374,3,208,104,0,1373,1371,1,0,0,0,1374,1377,1,0,0,0,1375,1373,1,
	0,0,0,1375,1376,1,0,0,0,1376,245,1,0,0,0,1377,1375,1,0,0,0,1378,1379,3,
	208,104,0,1379,247,1,0,0,0,1380,1381,3,208,104,0,1381,249,1,0,0,0,1382,
	1383,3,214,107,0,1383,251,1,0,0,0,1384,1385,3,214,107,0,1385,253,1,0,0,
	0,1386,1387,3,230,115,0,1387,255,1,0,0,0,1388,1391,5,106,0,0,1389,1391,
	3,214,107,0,1390,1388,1,0,0,0,1390,1389,1,0,0,0,1391,257,1,0,0,0,137,264,
	269,272,275,278,282,286,294,299,304,306,311,318,322,330,333,356,365,377,
	387,397,409,421,425,433,436,444,447,462,475,478,486,492,499,504,512,518,
	521,525,532,537,540,552,562,571,576,584,589,594,606,611,623,629,632,637,
	640,643,650,654,660,666,670,680,688,691,698,716,723,731,740,750,761,765,
	774,784,788,797,806,813,817,820,829,839,843,847,853,857,861,868,874,878,
	885,890,893,909,915,921,927,933,939,945,953,963,974,978,997,1010,1023,1034,
	1044,1048,1052,1057,1064,1080,1151,1163,1174,1186,1193,1196,1199,1214,1225,
	1252,1258,1265,1283,1292,1306,1319,1323,1332,1338,1348,1375,1390];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JpqlParser.__ATN) {
			JpqlParser.__ATN = new ATNDeserializer().deserialize(JpqlParser._serializedATN);
		}

		return JpqlParser.__ATN;
	}


	static DecisionsToDFA = JpqlParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class StartContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ql_statement(): Ql_statementContext {
		return this.getTypedRuleContext(Ql_statementContext, 0) as Ql_statementContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(JpqlParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_start;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterStart) {
	 		listener.enterStart(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitStart) {
	 		listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ql_statementContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_statement(): Select_statementContext {
		return this.getTypedRuleContext(Select_statementContext, 0) as Select_statementContext;
	}
	public update_statement(): Update_statementContext {
		return this.getTypedRuleContext(Update_statementContext, 0) as Update_statementContext;
	}
	public delete_statement(): Delete_statementContext {
		return this.getTypedRuleContext(Delete_statementContext, 0) as Delete_statementContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_ql_statement;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterQl_statement) {
	 		listener.enterQl_statement(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitQl_statement) {
	 		listener.exitQl_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitQl_statement) {
			return visitor.visitQl_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_statementContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_clause(): Select_clauseContext {
		return this.getTypedRuleContext(Select_clauseContext, 0) as Select_clauseContext;
	}
	public from_clause(): From_clauseContext {
		return this.getTypedRuleContext(From_clauseContext, 0) as From_clauseContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
	public groupby_clause(): Groupby_clauseContext {
		return this.getTypedRuleContext(Groupby_clauseContext, 0) as Groupby_clauseContext;
	}
	public having_clause(): Having_clauseContext {
		return this.getTypedRuleContext(Having_clauseContext, 0) as Having_clauseContext;
	}
	public orderby_clause(): Orderby_clauseContext {
		return this.getTypedRuleContext(Orderby_clauseContext, 0) as Orderby_clauseContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_select_statement;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSelect_statement) {
	 		listener.enterSelect_statement(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSelect_statement) {
	 		listener.exitSelect_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSelect_statement) {
			return visitor.visitSelect_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_statementContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public update_clause(): Update_clauseContext {
		return this.getTypedRuleContext(Update_clauseContext, 0) as Update_clauseContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_update_statement;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterUpdate_statement) {
	 		listener.enterUpdate_statement(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitUpdate_statement) {
	 		listener.exitUpdate_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitUpdate_statement) {
			return visitor.visitUpdate_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delete_statementContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public delete_clause(): Delete_clauseContext {
		return this.getTypedRuleContext(Delete_clauseContext, 0) as Delete_clauseContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_delete_statement;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDelete_statement) {
	 		listener.enterDelete_statement(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDelete_statement) {
	 		listener.exitDelete_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDelete_statement) {
			return visitor.visitDelete_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(JpqlParser.FROM, 0);
	}
	public identification_variable_declaration(): Identification_variable_declarationContext {
		return this.getTypedRuleContext(Identification_variable_declarationContext, 0) as Identification_variable_declarationContext;
	}
	public identificationVariableDeclarationOrCollectionMemberDeclaration_list(): IdentificationVariableDeclarationOrCollectionMemberDeclarationContext[] {
		return this.getTypedRuleContexts(IdentificationVariableDeclarationOrCollectionMemberDeclarationContext) as IdentificationVariableDeclarationOrCollectionMemberDeclarationContext[];
	}
	public identificationVariableDeclarationOrCollectionMemberDeclaration(i: number): IdentificationVariableDeclarationOrCollectionMemberDeclarationContext {
		return this.getTypedRuleContext(IdentificationVariableDeclarationOrCollectionMemberDeclarationContext, i) as IdentificationVariableDeclarationOrCollectionMemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_from_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFrom_clause) {
	 		listener.enterFrom_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFrom_clause) {
	 		listener.exitFrom_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFrom_clause) {
			return visitor.visitFrom_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentificationVariableDeclarationOrCollectionMemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable_declaration(): Identification_variable_declarationContext {
		return this.getTypedRuleContext(Identification_variable_declarationContext, 0) as Identification_variable_declarationContext;
	}
	public collection_member_declaration(): Collection_member_declarationContext {
		return this.getTypedRuleContext(Collection_member_declarationContext, 0) as Collection_member_declarationContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_identificationVariableDeclarationOrCollectionMemberDeclaration;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterIdentificationVariableDeclarationOrCollectionMemberDeclaration) {
	 		listener.enterIdentificationVariableDeclarationOrCollectionMemberDeclaration(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitIdentificationVariableDeclarationOrCollectionMemberDeclaration) {
	 		listener.exitIdentificationVariableDeclarationOrCollectionMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitIdentificationVariableDeclarationOrCollectionMemberDeclaration) {
			return visitor.visitIdentificationVariableDeclarationOrCollectionMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Identification_variable_declarationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public range_variable_declaration(): Range_variable_declarationContext {
		return this.getTypedRuleContext(Range_variable_declarationContext, 0) as Range_variable_declarationContext;
	}
	public join_list(): JoinContext[] {
		return this.getTypedRuleContexts(JoinContext) as JoinContext[];
	}
	public join(i: number): JoinContext {
		return this.getTypedRuleContext(JoinContext, i) as JoinContext;
	}
	public fetch_join_list(): Fetch_joinContext[] {
		return this.getTypedRuleContexts(Fetch_joinContext) as Fetch_joinContext[];
	}
	public fetch_join(i: number): Fetch_joinContext {
		return this.getTypedRuleContext(Fetch_joinContext, i) as Fetch_joinContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_identification_variable_declaration;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterIdentification_variable_declaration) {
	 		listener.enterIdentification_variable_declaration(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitIdentification_variable_declaration) {
	 		listener.exitIdentification_variable_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitIdentification_variable_declaration) {
			return visitor.visitIdentification_variable_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Range_variable_declarationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public entity_name(): Entity_nameContext {
		return this.getTypedRuleContext(Entity_nameContext, 0) as Entity_nameContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_range_variable_declaration;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterRange_variable_declaration) {
	 		listener.enterRange_variable_declaration(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitRange_variable_declaration) {
	 		listener.exitRange_variable_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitRange_variable_declaration) {
			return visitor.visitRange_variable_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JoinContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public join_spec(): Join_specContext {
		return this.getTypedRuleContext(Join_specContext, 0) as Join_specContext;
	}
	public join_association_path_expression(): Join_association_path_expressionContext {
		return this.getTypedRuleContext(Join_association_path_expressionContext, 0) as Join_association_path_expressionContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
	public join_condition(): Join_conditionContext {
		return this.getTypedRuleContext(Join_conditionContext, 0) as Join_conditionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_join;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterJoin) {
	 		listener.enterJoin(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitJoin) {
	 		listener.exitJoin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitJoin) {
			return visitor.visitJoin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fetch_joinContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public join_spec(): Join_specContext {
		return this.getTypedRuleContext(Join_specContext, 0) as Join_specContext;
	}
	public FETCH(): TerminalNode {
		return this.getToken(JpqlParser.FETCH, 0);
	}
	public join_association_path_expression(): Join_association_path_expressionContext {
		return this.getTypedRuleContext(Join_association_path_expressionContext, 0) as Join_association_path_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_fetch_join;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFetch_join) {
	 		listener.enterFetch_join(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFetch_join) {
	 		listener.exitFetch_join(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFetch_join) {
			return visitor.visitFetch_join(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Join_specContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public JOIN(): TerminalNode {
		return this.getToken(JpqlParser.JOIN, 0);
	}
	public INNER(): TerminalNode {
		return this.getToken(JpqlParser.INNER, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(JpqlParser.LEFT, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(JpqlParser.OUTER, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_join_spec;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterJoin_spec) {
	 		listener.enterJoin_spec(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitJoin_spec) {
	 		listener.exitJoin_spec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitJoin_spec) {
			return visitor.visitJoin_spec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Join_conditionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ON(): TerminalNode {
		return this.getToken(JpqlParser.ON, 0);
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_join_condition;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterJoin_condition) {
	 		listener.enterJoin_condition(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitJoin_condition) {
	 		listener.exitJoin_condition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitJoin_condition) {
			return visitor.visitJoin_condition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Join_association_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public join_collection_valued_path_expression(): Join_collection_valued_path_expressionContext {
		return this.getTypedRuleContext(Join_collection_valued_path_expressionContext, 0) as Join_collection_valued_path_expressionContext;
	}
	public join_single_valued_path_expression(): Join_single_valued_path_expressionContext {
		return this.getTypedRuleContext(Join_single_valued_path_expressionContext, 0) as Join_single_valued_path_expressionContext;
	}
	public TREAT(): TerminalNode {
		return this.getToken(JpqlParser.TREAT, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
	public subtype(): SubtypeContext {
		return this.getTypedRuleContext(SubtypeContext, 0) as SubtypeContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_join_association_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterJoin_association_path_expression) {
	 		listener.enterJoin_association_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitJoin_association_path_expression) {
	 		listener.exitJoin_association_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitJoin_association_path_expression) {
			return visitor.visitJoin_association_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Join_collection_valued_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public collection_valued_field(): Collection_valued_fieldContext {
		return this.getTypedRuleContext(Collection_valued_fieldContext, 0) as Collection_valued_fieldContext;
	}
	public single_valued_embeddable_object_field_list(): Single_valued_embeddable_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_embeddable_object_fieldContext) as Single_valued_embeddable_object_fieldContext[];
	}
	public single_valued_embeddable_object_field(i: number): Single_valued_embeddable_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_embeddable_object_fieldContext, i) as Single_valued_embeddable_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_join_collection_valued_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterJoin_collection_valued_path_expression) {
	 		listener.enterJoin_collection_valued_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitJoin_collection_valued_path_expression) {
	 		listener.exitJoin_collection_valued_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitJoin_collection_valued_path_expression) {
			return visitor.visitJoin_collection_valued_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Join_single_valued_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public single_valued_object_field(): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, 0) as Single_valued_object_fieldContext;
	}
	public single_valued_embeddable_object_field_list(): Single_valued_embeddable_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_embeddable_object_fieldContext) as Single_valued_embeddable_object_fieldContext[];
	}
	public single_valued_embeddable_object_field(i: number): Single_valued_embeddable_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_embeddable_object_fieldContext, i) as Single_valued_embeddable_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_join_single_valued_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterJoin_single_valued_path_expression) {
	 		listener.enterJoin_single_valued_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitJoin_single_valued_path_expression) {
	 		listener.exitJoin_single_valued_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitJoin_single_valued_path_expression) {
			return visitor.visitJoin_single_valued_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_member_declarationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(JpqlParser.IN, 0);
	}
	public collection_valued_path_expression(): Collection_valued_path_expressionContext {
		return this.getTypedRuleContext(Collection_valued_path_expressionContext, 0) as Collection_valued_path_expressionContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_collection_member_declaration;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCollection_member_declaration) {
	 		listener.enterCollection_member_declaration(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCollection_member_declaration) {
	 		listener.exitCollection_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCollection_member_declaration) {
			return visitor.visitCollection_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Qualified_identification_variableContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public map_field_identification_variable(): Map_field_identification_variableContext {
		return this.getTypedRuleContext(Map_field_identification_variableContext, 0) as Map_field_identification_variableContext;
	}
	public ENTRY(): TerminalNode {
		return this.getToken(JpqlParser.ENTRY, 0);
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_qualified_identification_variable;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterQualified_identification_variable) {
	 		listener.enterQualified_identification_variable(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitQualified_identification_variable) {
	 		listener.exitQualified_identification_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitQualified_identification_variable) {
			return visitor.visitQualified_identification_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Map_field_identification_variableContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public KEY(): TerminalNode {
		return this.getToken(JpqlParser.KEY, 0);
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public VALUE(): TerminalNode {
		return this.getToken(JpqlParser.VALUE, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_map_field_identification_variable;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterMap_field_identification_variable) {
	 		listener.enterMap_field_identification_variable(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitMap_field_identification_variable) {
	 		listener.exitMap_field_identification_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitMap_field_identification_variable) {
			return visitor.visitMap_field_identification_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_valued_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public qualified_identification_variable(): Qualified_identification_variableContext {
		return this.getTypedRuleContext(Qualified_identification_variableContext, 0) as Qualified_identification_variableContext;
	}
	public TREAT(): TerminalNode {
		return this.getToken(JpqlParser.TREAT, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
	public subtype(): SubtypeContext {
		return this.getTypedRuleContext(SubtypeContext, 0) as SubtypeContext;
	}
	public state_field_path_expression(): State_field_path_expressionContext {
		return this.getTypedRuleContext(State_field_path_expressionContext, 0) as State_field_path_expressionContext;
	}
	public single_valued_object_path_expression(): Single_valued_object_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_object_path_expressionContext, 0) as Single_valued_object_path_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_single_valued_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSingle_valued_path_expression) {
	 		listener.enterSingle_valued_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSingle_valued_path_expression) {
	 		listener.exitSingle_valued_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSingle_valued_path_expression) {
			return visitor.visitSingle_valued_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class General_identification_variableContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public map_field_identification_variable(): Map_field_identification_variableContext {
		return this.getTypedRuleContext(Map_field_identification_variableContext, 0) as Map_field_identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_general_identification_variable;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterGeneral_identification_variable) {
	 		listener.enterGeneral_identification_variable(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitGeneral_identification_variable) {
	 		listener.exitGeneral_identification_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitGeneral_identification_variable) {
			return visitor.visitGeneral_identification_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class General_subpathContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_subpath(): Simple_subpathContext {
		return this.getTypedRuleContext(Simple_subpathContext, 0) as Simple_subpathContext;
	}
	public treated_subpath(): Treated_subpathContext {
		return this.getTypedRuleContext(Treated_subpathContext, 0) as Treated_subpathContext;
	}
	public single_valued_object_field_list(): Single_valued_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_object_fieldContext) as Single_valued_object_fieldContext[];
	}
	public single_valued_object_field(i: number): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, i) as Single_valued_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_general_subpath;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterGeneral_subpath) {
	 		listener.enterGeneral_subpath(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitGeneral_subpath) {
	 		listener.exitGeneral_subpath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitGeneral_subpath) {
			return visitor.visitGeneral_subpath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_subpathContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public general_identification_variable(): General_identification_variableContext {
		return this.getTypedRuleContext(General_identification_variableContext, 0) as General_identification_variableContext;
	}
	public single_valued_object_field_list(): Single_valued_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_object_fieldContext) as Single_valued_object_fieldContext[];
	}
	public single_valued_object_field(i: number): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, i) as Single_valued_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_subpath;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_subpath) {
	 		listener.enterSimple_subpath(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_subpath) {
	 		listener.exitSimple_subpath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_subpath) {
			return visitor.visitSimple_subpath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Treated_subpathContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TREAT(): TerminalNode {
		return this.getToken(JpqlParser.TREAT, 0);
	}
	public general_subpath(): General_subpathContext {
		return this.getTypedRuleContext(General_subpathContext, 0) as General_subpathContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
	public subtype(): SubtypeContext {
		return this.getTypedRuleContext(SubtypeContext, 0) as SubtypeContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_treated_subpath;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterTreated_subpath) {
	 		listener.enterTreated_subpath(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitTreated_subpath) {
	 		listener.exitTreated_subpath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitTreated_subpath) {
			return visitor.visitTreated_subpath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class State_field_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public general_subpath(): General_subpathContext {
		return this.getTypedRuleContext(General_subpathContext, 0) as General_subpathContext;
	}
	public state_field(): State_fieldContext {
		return this.getTypedRuleContext(State_fieldContext, 0) as State_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_state_field_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterState_field_path_expression) {
	 		listener.enterState_field_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitState_field_path_expression) {
	 		listener.exitState_field_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitState_field_path_expression) {
			return visitor.visitState_field_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class State_valued_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_field_path_expression(): State_field_path_expressionContext {
		return this.getTypedRuleContext(State_field_path_expressionContext, 0) as State_field_path_expressionContext;
	}
	public general_identification_variable(): General_identification_variableContext {
		return this.getTypedRuleContext(General_identification_variableContext, 0) as General_identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_state_valued_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterState_valued_path_expression) {
	 		listener.enterState_valued_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitState_valued_path_expression) {
	 		listener.exitState_valued_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitState_valued_path_expression) {
			return visitor.visitState_valued_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_valued_object_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public general_subpath(): General_subpathContext {
		return this.getTypedRuleContext(General_subpathContext, 0) as General_subpathContext;
	}
	public single_valued_object_field(): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, 0) as Single_valued_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_single_valued_object_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSingle_valued_object_path_expression) {
	 		listener.enterSingle_valued_object_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSingle_valued_object_path_expression) {
	 		listener.exitSingle_valued_object_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSingle_valued_object_path_expression) {
			return visitor.visitSingle_valued_object_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_valued_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public general_subpath(): General_subpathContext {
		return this.getTypedRuleContext(General_subpathContext, 0) as General_subpathContext;
	}
	public collection_value_field(): Collection_value_fieldContext {
		return this.getTypedRuleContext(Collection_value_fieldContext, 0) as Collection_value_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_collection_valued_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCollection_valued_path_expression) {
	 		listener.enterCollection_valued_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCollection_valued_path_expression) {
	 		listener.exitCollection_valued_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCollection_valued_path_expression) {
			return visitor.visitCollection_valued_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UPDATE(): TerminalNode {
		return this.getToken(JpqlParser.UPDATE, 0);
	}
	public entity_name(): Entity_nameContext {
		return this.getTypedRuleContext(Entity_nameContext, 0) as Entity_nameContext;
	}
	public SET(): TerminalNode {
		return this.getToken(JpqlParser.SET, 0);
	}
	public update_item_list(): Update_itemContext[] {
		return this.getTypedRuleContexts(Update_itemContext) as Update_itemContext[];
	}
	public update_item(i: number): Update_itemContext {
		return this.getTypedRuleContext(Update_itemContext, i) as Update_itemContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_update_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterUpdate_clause) {
	 		listener.enterUpdate_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitUpdate_clause) {
	 		listener.exitUpdate_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitUpdate_clause) {
			return visitor.visitUpdate_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_itemContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(JpqlParser.EQUAL, 0);
	}
	public new_value(): New_valueContext {
		return this.getTypedRuleContext(New_valueContext, 0) as New_valueContext;
	}
	public state_field(): State_fieldContext {
		return this.getTypedRuleContext(State_fieldContext, 0) as State_fieldContext;
	}
	public single_valued_object_field(): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, 0) as Single_valued_object_fieldContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public single_valued_embeddable_object_field_list(): Single_valued_embeddable_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_embeddable_object_fieldContext) as Single_valued_embeddable_object_fieldContext[];
	}
	public single_valued_embeddable_object_field(i: number): Single_valued_embeddable_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_embeddable_object_fieldContext, i) as Single_valued_embeddable_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_update_item;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterUpdate_item) {
	 		listener.enterUpdate_item(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitUpdate_item) {
	 		listener.exitUpdate_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitUpdate_item) {
			return visitor.visitUpdate_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class New_valueContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
	public simple_entity_expression(): Simple_entity_expressionContext {
		return this.getTypedRuleContext(Simple_entity_expressionContext, 0) as Simple_entity_expressionContext;
	}
	public NULL(): TerminalNode {
		return this.getToken(JpqlParser.NULL, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_new_value;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterNew_value) {
	 		listener.enterNew_value(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitNew_value) {
	 		listener.exitNew_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitNew_value) {
			return visitor.visitNew_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delete_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DELETE(): TerminalNode {
		return this.getToken(JpqlParser.DELETE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(JpqlParser.FROM, 0);
	}
	public entity_name(): Entity_nameContext {
		return this.getTypedRuleContext(Entity_nameContext, 0) as Entity_nameContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_delete_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDelete_clause) {
	 		listener.enterDelete_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDelete_clause) {
	 		listener.exitDelete_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDelete_clause) {
			return visitor.visitDelete_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(JpqlParser.SELECT, 0);
	}
	public select_item_list(): Select_itemContext[] {
		return this.getTypedRuleContexts(Select_itemContext) as Select_itemContext[];
	}
	public select_item(i: number): Select_itemContext {
		return this.getTypedRuleContext(Select_itemContext, i) as Select_itemContext;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(JpqlParser.DISTINCT, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_select_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSelect_clause) {
	 		listener.enterSelect_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSelect_clause) {
	 		listener.exitSelect_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSelect_clause) {
			return visitor.visitSelect_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_itemContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public select_expression(): Select_expressionContext {
		return this.getTypedRuleContext(Select_expressionContext, 0) as Select_expressionContext;
	}
	public result_variable(): Result_variableContext {
		return this.getTypedRuleContext(Result_variableContext, 0) as Result_variableContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_select_item;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSelect_item) {
	 		listener.enterSelect_item(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSelect_item) {
	 		listener.exitSelect_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSelect_item) {
			return visitor.visitSelect_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public single_valued_path_expression(): Single_valued_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_path_expressionContext, 0) as Single_valued_path_expressionContext;
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
	public aggregate_expression(): Aggregate_expressionContext {
		return this.getTypedRuleContext(Aggregate_expressionContext, 0) as Aggregate_expressionContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public OBJECT(): TerminalNode {
		return this.getToken(JpqlParser.OBJECT, 0);
	}
	public constructor_expression(): Constructor_expressionContext {
		return this.getTypedRuleContext(Constructor_expressionContext, 0) as Constructor_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_select_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSelect_expression) {
	 		listener.enterSelect_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSelect_expression) {
	 		listener.exitSelect_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSelect_expression) {
			return visitor.visitSelect_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constructor_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(JpqlParser.NEW, 0);
	}
	public constructor_name(): Constructor_nameContext {
		return this.getTypedRuleContext(Constructor_nameContext, 0) as Constructor_nameContext;
	}
	public constructor_item_list(): Constructor_itemContext[] {
		return this.getTypedRuleContexts(Constructor_itemContext) as Constructor_itemContext[];
	}
	public constructor_item(i: number): Constructor_itemContext {
		return this.getTypedRuleContext(Constructor_itemContext, i) as Constructor_itemContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_constructor_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterConstructor_expression) {
	 		listener.enterConstructor_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitConstructor_expression) {
	 		listener.exitConstructor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitConstructor_expression) {
			return visitor.visitConstructor_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constructor_itemContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public single_valued_path_expression(): Single_valued_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_path_expressionContext, 0) as Single_valued_path_expressionContext;
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
	public aggregate_expression(): Aggregate_expressionContext {
		return this.getTypedRuleContext(Aggregate_expressionContext, 0) as Aggregate_expressionContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_constructor_item;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterConstructor_item) {
	 		listener.enterConstructor_item(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitConstructor_item) {
	 		listener.exitConstructor_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitConstructor_item) {
			return visitor.visitConstructor_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public AVG(): TerminalNode {
		return this.getToken(JpqlParser.AVG, 0);
	}
	public MAX(): TerminalNode {
		return this.getToken(JpqlParser.MAX, 0);
	}
	public MIN(): TerminalNode {
		return this.getToken(JpqlParser.MIN, 0);
	}
	public SUM(): TerminalNode {
		return this.getToken(JpqlParser.SUM, 0);
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(JpqlParser.DISTINCT, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(JpqlParser.COUNT, 0);
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public single_valued_object_path_expression(): Single_valued_object_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_object_path_expressionContext, 0) as Single_valued_object_path_expressionContext;
	}
	public function_invocation(): Function_invocationContext {
		return this.getTypedRuleContext(Function_invocationContext, 0) as Function_invocationContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_aggregate_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterAggregate_expression) {
	 		listener.enterAggregate_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitAggregate_expression) {
	 		listener.exitAggregate_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitAggregate_expression) {
			return visitor.visitAggregate_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Where_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHERE(): TerminalNode {
		return this.getToken(JpqlParser.WHERE, 0);
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_where_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterWhere_clause) {
	 		listener.enterWhere_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitWhere_clause) {
	 		listener.exitWhere_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitWhere_clause) {
			return visitor.visitWhere_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Groupby_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GROUP(): TerminalNode {
		return this.getToken(JpqlParser.GROUP, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(JpqlParser.BY, 0);
	}
	public groupby_item_list(): Groupby_itemContext[] {
		return this.getTypedRuleContexts(Groupby_itemContext) as Groupby_itemContext[];
	}
	public groupby_item(i: number): Groupby_itemContext {
		return this.getTypedRuleContext(Groupby_itemContext, i) as Groupby_itemContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_groupby_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterGroupby_clause) {
	 		listener.enterGroupby_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitGroupby_clause) {
	 		listener.exitGroupby_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitGroupby_clause) {
			return visitor.visitGroupby_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Groupby_itemContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public single_valued_path_expression(): Single_valued_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_path_expressionContext, 0) as Single_valued_path_expressionContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_groupby_item;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterGroupby_item) {
	 		listener.enterGroupby_item(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitGroupby_item) {
	 		listener.exitGroupby_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitGroupby_item) {
			return visitor.visitGroupby_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Having_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public HAVING(): TerminalNode {
		return this.getToken(JpqlParser.HAVING, 0);
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_having_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterHaving_clause) {
	 		listener.enterHaving_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitHaving_clause) {
	 		listener.exitHaving_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitHaving_clause) {
			return visitor.visitHaving_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Orderby_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ORDER(): TerminalNode {
		return this.getToken(JpqlParser.ORDER, 0);
	}
	public BY(): TerminalNode {
		return this.getToken(JpqlParser.BY, 0);
	}
	public orderby_item_list(): Orderby_itemContext[] {
		return this.getTypedRuleContexts(Orderby_itemContext) as Orderby_itemContext[];
	}
	public orderby_item(i: number): Orderby_itemContext {
		return this.getTypedRuleContext(Orderby_itemContext, i) as Orderby_itemContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_orderby_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterOrderby_clause) {
	 		listener.enterOrderby_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitOrderby_clause) {
	 		listener.exitOrderby_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitOrderby_clause) {
			return visitor.visitOrderby_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Orderby_itemContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_field_path_expression(): State_field_path_expressionContext {
		return this.getTypedRuleContext(State_field_path_expressionContext, 0) as State_field_path_expressionContext;
	}
	public general_identification_variable(): General_identification_variableContext {
		return this.getTypedRuleContext(General_identification_variableContext, 0) as General_identification_variableContext;
	}
	public result_variable(): Result_variableContext {
		return this.getTypedRuleContext(Result_variableContext, 0) as Result_variableContext;
	}
	public ASC(): TerminalNode {
		return this.getToken(JpqlParser.ASC, 0);
	}
	public DESC(): TerminalNode {
		return this.getToken(JpqlParser.DESC, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_orderby_item;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterOrderby_item) {
	 		listener.enterOrderby_item(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitOrderby_item) {
	 		listener.exitOrderby_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitOrderby_item) {
			return visitor.visitOrderby_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubqueryContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_select_clause(): Simple_select_clauseContext {
		return this.getTypedRuleContext(Simple_select_clauseContext, 0) as Simple_select_clauseContext;
	}
	public subquery_from_clause(): Subquery_from_clauseContext {
		return this.getTypedRuleContext(Subquery_from_clauseContext, 0) as Subquery_from_clauseContext;
	}
	public where_clause(): Where_clauseContext {
		return this.getTypedRuleContext(Where_clauseContext, 0) as Where_clauseContext;
	}
	public groupby_clause(): Groupby_clauseContext {
		return this.getTypedRuleContext(Groupby_clauseContext, 0) as Groupby_clauseContext;
	}
	public having_clause(): Having_clauseContext {
		return this.getTypedRuleContext(Having_clauseContext, 0) as Having_clauseContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_subquery;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSubquery) {
	 		listener.enterSubquery(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSubquery) {
	 		listener.exitSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSubquery) {
			return visitor.visitSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subquery_from_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FROM(): TerminalNode {
		return this.getToken(JpqlParser.FROM, 0);
	}
	public subselect_identification_variable_declaration_list(): Subselect_identification_variable_declarationContext[] {
		return this.getTypedRuleContexts(Subselect_identification_variable_declarationContext) as Subselect_identification_variable_declarationContext[];
	}
	public subselect_identification_variable_declaration(i: number): Subselect_identification_variable_declarationContext {
		return this.getTypedRuleContext(Subselect_identification_variable_declarationContext, i) as Subselect_identification_variable_declarationContext;
	}
	public collection_member_declaration_list(): Collection_member_declarationContext[] {
		return this.getTypedRuleContexts(Collection_member_declarationContext) as Collection_member_declarationContext[];
	}
	public collection_member_declaration(i: number): Collection_member_declarationContext {
		return this.getTypedRuleContext(Collection_member_declarationContext, i) as Collection_member_declarationContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_subquery_from_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSubquery_from_clause) {
	 		listener.enterSubquery_from_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSubquery_from_clause) {
	 		listener.exitSubquery_from_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSubquery_from_clause) {
			return visitor.visitSubquery_from_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Subselect_identification_variable_declarationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable_declaration(): Identification_variable_declarationContext {
		return this.getTypedRuleContext(Identification_variable_declarationContext, 0) as Identification_variable_declarationContext;
	}
	public derived_path_expression(): Derived_path_expressionContext {
		return this.getTypedRuleContext(Derived_path_expressionContext, 0) as Derived_path_expressionContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
	public join_list(): JoinContext[] {
		return this.getTypedRuleContexts(JoinContext) as JoinContext[];
	}
	public join(i: number): JoinContext {
		return this.getTypedRuleContext(JoinContext, i) as JoinContext;
	}
	public derived_collection_member_declaration(): Derived_collection_member_declarationContext {
		return this.getTypedRuleContext(Derived_collection_member_declarationContext, 0) as Derived_collection_member_declarationContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_subselect_identification_variable_declaration;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSubselect_identification_variable_declaration) {
	 		listener.enterSubselect_identification_variable_declaration(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSubselect_identification_variable_declaration) {
	 		listener.exitSubselect_identification_variable_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSubselect_identification_variable_declaration) {
			return visitor.visitSubselect_identification_variable_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Derived_path_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public general_derived_path(): General_derived_pathContext {
		return this.getTypedRuleContext(General_derived_pathContext, 0) as General_derived_pathContext;
	}
	public single_valued_object_field(): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, 0) as Single_valued_object_fieldContext;
	}
	public collection_valued_field(): Collection_valued_fieldContext {
		return this.getTypedRuleContext(Collection_valued_fieldContext, 0) as Collection_valued_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_derived_path_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDerived_path_expression) {
	 		listener.enterDerived_path_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDerived_path_expression) {
	 		listener.exitDerived_path_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDerived_path_expression) {
			return visitor.visitDerived_path_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class General_derived_pathContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_derived_path(): Simple_derived_pathContext {
		return this.getTypedRuleContext(Simple_derived_pathContext, 0) as Simple_derived_pathContext;
	}
	public treated_derived_path(): Treated_derived_pathContext {
		return this.getTypedRuleContext(Treated_derived_pathContext, 0) as Treated_derived_pathContext;
	}
	public single_valued_object_field_list(): Single_valued_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_object_fieldContext) as Single_valued_object_fieldContext[];
	}
	public single_valued_object_field(i: number): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, i) as Single_valued_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_general_derived_path;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterGeneral_derived_path) {
	 		listener.enterGeneral_derived_path(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitGeneral_derived_path) {
	 		listener.exitGeneral_derived_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitGeneral_derived_path) {
			return visitor.visitGeneral_derived_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_derived_pathContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public superquery_identification_variable(): Superquery_identification_variableContext {
		return this.getTypedRuleContext(Superquery_identification_variableContext, 0) as Superquery_identification_variableContext;
	}
	public single_valued_object_field_list(): Single_valued_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_object_fieldContext) as Single_valued_object_fieldContext[];
	}
	public single_valued_object_field(i: number): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, i) as Single_valued_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_derived_path;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_derived_path) {
	 		listener.enterSimple_derived_path(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_derived_path) {
	 		listener.exitSimple_derived_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_derived_path) {
			return visitor.visitSimple_derived_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Treated_derived_pathContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TREAT(): TerminalNode {
		return this.getToken(JpqlParser.TREAT, 0);
	}
	public general_derived_path(): General_derived_pathContext {
		return this.getTypedRuleContext(General_derived_pathContext, 0) as General_derived_pathContext;
	}
	public AS(): TerminalNode {
		return this.getToken(JpqlParser.AS, 0);
	}
	public subtype(): SubtypeContext {
		return this.getTypedRuleContext(SubtypeContext, 0) as SubtypeContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_treated_derived_path;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterTreated_derived_path) {
	 		listener.enterTreated_derived_path(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitTreated_derived_path) {
	 		listener.exitTreated_derived_path(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitTreated_derived_path) {
			return visitor.visitTreated_derived_path(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Derived_collection_member_declarationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(JpqlParser.IN, 0);
	}
	public superquery_identification_variable(): Superquery_identification_variableContext {
		return this.getTypedRuleContext(Superquery_identification_variableContext, 0) as Superquery_identification_variableContext;
	}
	public collection_valued_field(): Collection_valued_fieldContext {
		return this.getTypedRuleContext(Collection_valued_fieldContext, 0) as Collection_valued_fieldContext;
	}
	public single_valued_object_field_list(): Single_valued_object_fieldContext[] {
		return this.getTypedRuleContexts(Single_valued_object_fieldContext) as Single_valued_object_fieldContext[];
	}
	public single_valued_object_field(i: number): Single_valued_object_fieldContext {
		return this.getTypedRuleContext(Single_valued_object_fieldContext, i) as Single_valued_object_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_derived_collection_member_declaration;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDerived_collection_member_declaration) {
	 		listener.enterDerived_collection_member_declaration(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDerived_collection_member_declaration) {
	 		listener.exitDerived_collection_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDerived_collection_member_declaration) {
			return visitor.visitDerived_collection_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_select_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SELECT(): TerminalNode {
		return this.getToken(JpqlParser.SELECT, 0);
	}
	public simple_select_expression(): Simple_select_expressionContext {
		return this.getTypedRuleContext(Simple_select_expressionContext, 0) as Simple_select_expressionContext;
	}
	public DISTINCT(): TerminalNode {
		return this.getToken(JpqlParser.DISTINCT, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_select_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_select_clause) {
	 		listener.enterSimple_select_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_select_clause) {
	 		listener.exitSimple_select_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_select_clause) {
			return visitor.visitSimple_select_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_select_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public single_valued_path_expression(): Single_valued_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_path_expressionContext, 0) as Single_valued_path_expressionContext;
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
	public aggregate_expression(): Aggregate_expressionContext {
		return this.getTypedRuleContext(Aggregate_expressionContext, 0) as Aggregate_expressionContext;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_select_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_select_expression) {
	 		listener.enterSimple_select_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_select_expression) {
	 		listener.exitSimple_select_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_select_expression) {
			return visitor.visitSimple_select_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Scalar_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic_expression(): Arithmetic_expressionContext {
		return this.getTypedRuleContext(Arithmetic_expressionContext, 0) as Arithmetic_expressionContext;
	}
	public string_expression(): String_expressionContext {
		return this.getTypedRuleContext(String_expressionContext, 0) as String_expressionContext;
	}
	public enum_expression(): Enum_expressionContext {
		return this.getTypedRuleContext(Enum_expressionContext, 0) as Enum_expressionContext;
	}
	public datetime_expression(): Datetime_expressionContext {
		return this.getTypedRuleContext(Datetime_expressionContext, 0) as Datetime_expressionContext;
	}
	public boolean_expression(): Boolean_expressionContext {
		return this.getTypedRuleContext(Boolean_expressionContext, 0) as Boolean_expressionContext;
	}
	public case_expression(): Case_expressionContext {
		return this.getTypedRuleContext(Case_expressionContext, 0) as Case_expressionContext;
	}
	public entity_type_expression(): Entity_type_expressionContext {
		return this.getTypedRuleContext(Entity_type_expressionContext, 0) as Entity_type_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_scalar_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterScalar_expression) {
	 		listener.enterScalar_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitScalar_expression) {
	 		listener.exitScalar_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitScalar_expression) {
			return visitor.visitScalar_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_term(): Conditional_termContext {
		return this.getTypedRuleContext(Conditional_termContext, 0) as Conditional_termContext;
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
	public OR(): TerminalNode {
		return this.getToken(JpqlParser.OR, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_conditional_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterConditional_expression) {
	 		listener.enterConditional_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitConditional_expression) {
	 		listener.exitConditional_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitConditional_expression) {
			return visitor.visitConditional_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_termContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_factor(): Conditional_factorContext {
		return this.getTypedRuleContext(Conditional_factorContext, 0) as Conditional_factorContext;
	}
	public conditional_term(): Conditional_termContext {
		return this.getTypedRuleContext(Conditional_termContext, 0) as Conditional_termContext;
	}
	public AND(): TerminalNode {
		return this.getToken(JpqlParser.AND, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_conditional_term;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterConditional_term) {
	 		listener.enterConditional_term(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitConditional_term) {
	 		listener.exitConditional_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitConditional_term) {
			return visitor.visitConditional_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_factorContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditional_primary(): Conditional_primaryContext {
		return this.getTypedRuleContext(Conditional_primaryContext, 0) as Conditional_primaryContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_conditional_factor;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterConditional_factor) {
	 		listener.enterConditional_factor(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitConditional_factor) {
	 		listener.exitConditional_factor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitConditional_factor) {
			return visitor.visitConditional_factor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_primaryContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public simple_cond_expression(): Simple_cond_expressionContext {
		return this.getTypedRuleContext(Simple_cond_expressionContext, 0) as Simple_cond_expressionContext;
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_conditional_primary;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterConditional_primary) {
	 		listener.enterConditional_primary(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitConditional_primary) {
	 		listener.exitConditional_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitConditional_primary) {
			return visitor.visitConditional_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_cond_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public comparison_expression(): Comparison_expressionContext {
		return this.getTypedRuleContext(Comparison_expressionContext, 0) as Comparison_expressionContext;
	}
	public between_expression(): Between_expressionContext {
		return this.getTypedRuleContext(Between_expressionContext, 0) as Between_expressionContext;
	}
	public in_expression(): In_expressionContext {
		return this.getTypedRuleContext(In_expressionContext, 0) as In_expressionContext;
	}
	public like_expression(): Like_expressionContext {
		return this.getTypedRuleContext(Like_expressionContext, 0) as Like_expressionContext;
	}
	public null_comparison_expression(): Null_comparison_expressionContext {
		return this.getTypedRuleContext(Null_comparison_expressionContext, 0) as Null_comparison_expressionContext;
	}
	public empty_collection_comparison_expression(): Empty_collection_comparison_expressionContext {
		return this.getTypedRuleContext(Empty_collection_comparison_expressionContext, 0) as Empty_collection_comparison_expressionContext;
	}
	public collection_member_expression(): Collection_member_expressionContext {
		return this.getTypedRuleContext(Collection_member_expressionContext, 0) as Collection_member_expressionContext;
	}
	public exists_expression(): Exists_expressionContext {
		return this.getTypedRuleContext(Exists_expressionContext, 0) as Exists_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_cond_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_cond_expression) {
	 		listener.enterSimple_cond_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_cond_expression) {
	 		listener.exitSimple_cond_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_cond_expression) {
			return visitor.visitSimple_cond_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Between_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic_expression_list(): Arithmetic_expressionContext[] {
		return this.getTypedRuleContexts(Arithmetic_expressionContext) as Arithmetic_expressionContext[];
	}
	public arithmetic_expression(i: number): Arithmetic_expressionContext {
		return this.getTypedRuleContext(Arithmetic_expressionContext, i) as Arithmetic_expressionContext;
	}
	public BETWEEN(): TerminalNode {
		return this.getToken(JpqlParser.BETWEEN, 0);
	}
	public AND(): TerminalNode {
		return this.getToken(JpqlParser.AND, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
	public string_expression_list(): String_expressionContext[] {
		return this.getTypedRuleContexts(String_expressionContext) as String_expressionContext[];
	}
	public string_expression(i: number): String_expressionContext {
		return this.getTypedRuleContext(String_expressionContext, i) as String_expressionContext;
	}
	public datetime_expression_list(): Datetime_expressionContext[] {
		return this.getTypedRuleContexts(Datetime_expressionContext) as Datetime_expressionContext[];
	}
	public datetime_expression(i: number): Datetime_expressionContext {
		return this.getTypedRuleContext(Datetime_expressionContext, i) as Datetime_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_between_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterBetween_expression) {
	 		listener.enterBetween_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitBetween_expression) {
	 		listener.exitBetween_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitBetween_expression) {
			return visitor.visitBetween_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class In_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IN(): TerminalNode {
		return this.getToken(JpqlParser.IN, 0);
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public type_discriminator(): Type_discriminatorContext {
		return this.getTypedRuleContext(Type_discriminatorContext, 0) as Type_discriminatorContext;
	}
	public collection_valued_input_parameter(): Collection_valued_input_parameterContext {
		return this.getTypedRuleContext(Collection_valued_input_parameterContext, 0) as Collection_valued_input_parameterContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
	public in_item_list(): In_itemContext[] {
		return this.getTypedRuleContexts(In_itemContext) as In_itemContext[];
	}
	public in_item(i: number): In_itemContext {
		return this.getTypedRuleContext(In_itemContext, i) as In_itemContext;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_in_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterIn_expression) {
	 		listener.enterIn_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitIn_expression) {
	 		listener.exitIn_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitIn_expression) {
			return visitor.visitIn_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class In_itemContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public single_valued_input_parameter(): Single_valued_input_parameterContext {
		return this.getTypedRuleContext(Single_valued_input_parameterContext, 0) as Single_valued_input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_in_item;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterIn_item) {
	 		listener.enterIn_item(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitIn_item) {
	 		listener.exitIn_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitIn_item) {
			return visitor.visitIn_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Like_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_expression(): String_expressionContext {
		return this.getTypedRuleContext(String_expressionContext, 0) as String_expressionContext;
	}
	public LIKE(): TerminalNode {
		return this.getToken(JpqlParser.LIKE, 0);
	}
	public pattern_value(): Pattern_valueContext {
		return this.getTypedRuleContext(Pattern_valueContext, 0) as Pattern_valueContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
	public ESCAPE(): TerminalNode {
		return this.getToken(JpqlParser.ESCAPE, 0);
	}
	public escape_character(): Escape_characterContext {
		return this.getTypedRuleContext(Escape_characterContext, 0) as Escape_characterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_like_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterLike_expression) {
	 		listener.enterLike_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitLike_expression) {
	 		listener.exitLike_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitLike_expression) {
			return visitor.visitLike_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Null_comparison_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IS(): TerminalNode {
		return this.getToken(JpqlParser.IS, 0);
	}
	public NULL(): TerminalNode {
		return this.getToken(JpqlParser.NULL, 0);
	}
	public single_valued_path_expression(): Single_valued_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_path_expressionContext, 0) as Single_valued_path_expressionContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_null_comparison_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterNull_comparison_expression) {
	 		listener.enterNull_comparison_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitNull_comparison_expression) {
	 		listener.exitNull_comparison_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitNull_comparison_expression) {
			return visitor.visitNull_comparison_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_collection_comparison_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public collection_valued_path_expression(): Collection_valued_path_expressionContext {
		return this.getTypedRuleContext(Collection_valued_path_expressionContext, 0) as Collection_valued_path_expressionContext;
	}
	public IS(): TerminalNode {
		return this.getToken(JpqlParser.IS, 0);
	}
	public EMPTY(): TerminalNode {
		return this.getToken(JpqlParser.EMPTY, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_empty_collection_comparison_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEmpty_collection_comparison_expression) {
	 		listener.enterEmpty_collection_comparison_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEmpty_collection_comparison_expression) {
	 		listener.exitEmpty_collection_comparison_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEmpty_collection_comparison_expression) {
			return visitor.visitEmpty_collection_comparison_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_member_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public entity_or_value_expression(): Entity_or_value_expressionContext {
		return this.getTypedRuleContext(Entity_or_value_expressionContext, 0) as Entity_or_value_expressionContext;
	}
	public MEMBER(): TerminalNode {
		return this.getToken(JpqlParser.MEMBER, 0);
	}
	public collection_valued_path_expression(): Collection_valued_path_expressionContext {
		return this.getTypedRuleContext(Collection_valued_path_expressionContext, 0) as Collection_valued_path_expressionContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(JpqlParser.OF, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_collection_member_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCollection_member_expression) {
	 		listener.enterCollection_member_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCollection_member_expression) {
	 		listener.exitCollection_member_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCollection_member_expression) {
			return visitor.visitCollection_member_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Entity_or_value_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public single_valued_object_path_expression(): Single_valued_object_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_object_path_expressionContext, 0) as Single_valued_object_path_expressionContext;
	}
	public state_field_path_expression(): State_field_path_expressionContext {
		return this.getTypedRuleContext(State_field_path_expressionContext, 0) as State_field_path_expressionContext;
	}
	public simple_entity_or_value_expression(): Simple_entity_or_value_expressionContext {
		return this.getTypedRuleContext(Simple_entity_or_value_expressionContext, 0) as Simple_entity_or_value_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_entity_or_value_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEntity_or_value_expression) {
	 		listener.enterEntity_or_value_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEntity_or_value_expression) {
	 		listener.exitEntity_or_value_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEntity_or_value_expression) {
			return visitor.visitEntity_or_value_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_entity_or_value_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_entity_or_value_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_entity_or_value_expression) {
	 		listener.enterSimple_entity_or_value_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_entity_or_value_expression) {
	 		listener.exitSimple_entity_or_value_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_entity_or_value_expression) {
			return visitor.visitSimple_entity_or_value_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exists_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXISTS(): TerminalNode {
		return this.getToken(JpqlParser.EXISTS, 0);
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
	public NOT(): TerminalNode {
		return this.getToken(JpqlParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_exists_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterExists_expression) {
	 		listener.enterExists_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitExists_expression) {
	 		listener.exitExists_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitExists_expression) {
			return visitor.visitExists_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class All_or_any_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
	public ALL(): TerminalNode {
		return this.getToken(JpqlParser.ALL, 0);
	}
	public ANY(): TerminalNode {
		return this.getToken(JpqlParser.ANY, 0);
	}
	public SOME(): TerminalNode {
		return this.getToken(JpqlParser.SOME, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_all_or_any_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterAll_or_any_expression) {
	 		listener.enterAll_or_any_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitAll_or_any_expression) {
	 		listener.exitAll_or_any_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitAll_or_any_expression) {
			return visitor.visitAll_or_any_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comparison_expressionContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_expression_list(): String_expressionContext[] {
		return this.getTypedRuleContexts(String_expressionContext) as String_expressionContext[];
	}
	public string_expression(i: number): String_expressionContext {
		return this.getTypedRuleContext(String_expressionContext, i) as String_expressionContext;
	}
	public comparison_operator(): Comparison_operatorContext {
		return this.getTypedRuleContext(Comparison_operatorContext, 0) as Comparison_operatorContext;
	}
	public all_or_any_expression(): All_or_any_expressionContext {
		return this.getTypedRuleContext(All_or_any_expressionContext, 0) as All_or_any_expressionContext;
	}
	public boolean_expression_list(): Boolean_expressionContext[] {
		return this.getTypedRuleContexts(Boolean_expressionContext) as Boolean_expressionContext[];
	}
	public boolean_expression(i: number): Boolean_expressionContext {
		return this.getTypedRuleContext(Boolean_expressionContext, i) as Boolean_expressionContext;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(JpqlParser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(JpqlParser.NOT_EQUAL, 0);
	}
	public enum_expression_list(): Enum_expressionContext[] {
		return this.getTypedRuleContexts(Enum_expressionContext) as Enum_expressionContext[];
	}
	public enum_expression(i: number): Enum_expressionContext {
		return this.getTypedRuleContext(Enum_expressionContext, i) as Enum_expressionContext;
	}
	public datetime_expression_list(): Datetime_expressionContext[] {
		return this.getTypedRuleContexts(Datetime_expressionContext) as Datetime_expressionContext[];
	}
	public datetime_expression(i: number): Datetime_expressionContext {
		return this.getTypedRuleContext(Datetime_expressionContext, i) as Datetime_expressionContext;
	}
	public entity_expression_list(): Entity_expressionContext[] {
		return this.getTypedRuleContexts(Entity_expressionContext) as Entity_expressionContext[];
	}
	public entity_expression(i: number): Entity_expressionContext {
		return this.getTypedRuleContext(Entity_expressionContext, i) as Entity_expressionContext;
	}
	public arithmetic_expression_list(): Arithmetic_expressionContext[] {
		return this.getTypedRuleContexts(Arithmetic_expressionContext) as Arithmetic_expressionContext[];
	}
	public arithmetic_expression(i: number): Arithmetic_expressionContext {
		return this.getTypedRuleContext(Arithmetic_expressionContext, i) as Arithmetic_expressionContext;
	}
	public entity_type_expression_list(): Entity_type_expressionContext[] {
		return this.getTypedRuleContexts(Entity_type_expressionContext) as Entity_type_expressionContext[];
	}
	public entity_type_expression(i: number): Entity_type_expressionContext {
		return this.getTypedRuleContext(Entity_type_expressionContext, i) as Entity_type_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_comparison_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterComparison_expression) {
	 		listener.enterComparison_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitComparison_expression) {
	 		listener.exitComparison_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitComparison_expression) {
			return visitor.visitComparison_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Comparison_operatorContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EQUAL(): TerminalNode {
		return this.getToken(JpqlParser.EQUAL, 0);
	}
	public NOT_EQUAL(): TerminalNode {
		return this.getToken(JpqlParser.NOT_EQUAL, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_comparison_operator;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterComparison_operator) {
	 		listener.enterComparison_operator(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitComparison_operator) {
	 		listener.exitComparison_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitComparison_operator) {
			return visitor.visitComparison_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithmetic_expressionContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic_term(): Arithmetic_termContext {
		return this.getTypedRuleContext(Arithmetic_termContext, 0) as Arithmetic_termContext;
	}
	public arithmetic_expression(): Arithmetic_expressionContext {
		return this.getTypedRuleContext(Arithmetic_expressionContext, 0) as Arithmetic_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_arithmetic_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterArithmetic_expression) {
	 		listener.enterArithmetic_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitArithmetic_expression) {
	 		listener.exitArithmetic_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitArithmetic_expression) {
			return visitor.visitArithmetic_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithmetic_termContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic_factor(): Arithmetic_factorContext {
		return this.getTypedRuleContext(Arithmetic_factorContext, 0) as Arithmetic_factorContext;
	}
	public arithmetic_term(): Arithmetic_termContext {
		return this.getTypedRuleContext(Arithmetic_termContext, 0) as Arithmetic_termContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_arithmetic_term;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterArithmetic_term) {
	 		listener.enterArithmetic_term(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitArithmetic_term) {
	 		listener.exitArithmetic_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitArithmetic_term) {
			return visitor.visitArithmetic_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithmetic_factorContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmetic_primary(): Arithmetic_primaryContext {
		return this.getTypedRuleContext(Arithmetic_primaryContext, 0) as Arithmetic_primaryContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_arithmetic_factor;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterArithmetic_factor) {
	 		listener.enterArithmetic_factor(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitArithmetic_factor) {
	 		listener.exitArithmetic_factor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitArithmetic_factor) {
			return visitor.visitArithmetic_factor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arithmetic_primaryContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public numeric_literal(): Numeric_literalContext {
		return this.getTypedRuleContext(Numeric_literalContext, 0) as Numeric_literalContext;
	}
	public arithmetic_expression(): Arithmetic_expressionContext {
		return this.getTypedRuleContext(Arithmetic_expressionContext, 0) as Arithmetic_expressionContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public functions_returning_numerics(): Functions_returning_numericsContext {
		return this.getTypedRuleContext(Functions_returning_numericsContext, 0) as Functions_returning_numericsContext;
	}
	public aggregate_expression(): Aggregate_expressionContext {
		return this.getTypedRuleContext(Aggregate_expressionContext, 0) as Aggregate_expressionContext;
	}
	public case_expression(): Case_expressionContext {
		return this.getTypedRuleContext(Case_expressionContext, 0) as Case_expressionContext;
	}
	public function_invocation(): Function_invocationContext {
		return this.getTypedRuleContext(Function_invocationContext, 0) as Function_invocationContext;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_arithmetic_primary;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterArithmetic_primary) {
	 		listener.enterArithmetic_primary(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitArithmetic_primary) {
	 		listener.exitArithmetic_primary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitArithmetic_primary) {
			return visitor.visitArithmetic_primary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public string_literal(): String_literalContext {
		return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public functions_returning_strings(): Functions_returning_stringsContext {
		return this.getTypedRuleContext(Functions_returning_stringsContext, 0) as Functions_returning_stringsContext;
	}
	public aggregate_expression(): Aggregate_expressionContext {
		return this.getTypedRuleContext(Aggregate_expressionContext, 0) as Aggregate_expressionContext;
	}
	public case_expression(): Case_expressionContext {
		return this.getTypedRuleContext(Case_expressionContext, 0) as Case_expressionContext;
	}
	public function_invocation(): Function_invocationContext {
		return this.getTypedRuleContext(Function_invocationContext, 0) as Function_invocationContext;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_string_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterString_expression) {
	 		listener.enterString_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitString_expression) {
	 		listener.exitString_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitString_expression) {
			return visitor.visitString_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Datetime_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public functions_returning_datetime(): Functions_returning_datetimeContext {
		return this.getTypedRuleContext(Functions_returning_datetimeContext, 0) as Functions_returning_datetimeContext;
	}
	public aggregate_expression(): Aggregate_expressionContext {
		return this.getTypedRuleContext(Aggregate_expressionContext, 0) as Aggregate_expressionContext;
	}
	public case_expression(): Case_expressionContext {
		return this.getTypedRuleContext(Case_expressionContext, 0) as Case_expressionContext;
	}
	public function_invocation(): Function_invocationContext {
		return this.getTypedRuleContext(Function_invocationContext, 0) as Function_invocationContext;
	}
	public date_time_timestamp_literal(): Date_time_timestamp_literalContext {
		return this.getTypedRuleContext(Date_time_timestamp_literalContext, 0) as Date_time_timestamp_literalContext;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_datetime_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDatetime_expression) {
	 		listener.enterDatetime_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDatetime_expression) {
	 		listener.exitDatetime_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDatetime_expression) {
			return visitor.visitDatetime_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public boolean_literal(): Boolean_literalContext {
		return this.getTypedRuleContext(Boolean_literalContext, 0) as Boolean_literalContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public case_expression(): Case_expressionContext {
		return this.getTypedRuleContext(Case_expressionContext, 0) as Case_expressionContext;
	}
	public function_invocation(): Function_invocationContext {
		return this.getTypedRuleContext(Function_invocationContext, 0) as Function_invocationContext;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_boolean_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterBoolean_expression) {
	 		listener.enterBoolean_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitBoolean_expression) {
	 		listener.exitBoolean_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitBoolean_expression) {
			return visitor.visitBoolean_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public enum_literal(): Enum_literalContext {
		return this.getTypedRuleContext(Enum_literalContext, 0) as Enum_literalContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public case_expression(): Case_expressionContext {
		return this.getTypedRuleContext(Case_expressionContext, 0) as Case_expressionContext;
	}
	public subquery(): SubqueryContext {
		return this.getTypedRuleContext(SubqueryContext, 0) as SubqueryContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_enum_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEnum_expression) {
	 		listener.enterEnum_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEnum_expression) {
	 		listener.exitEnum_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEnum_expression) {
			return visitor.visitEnum_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Entity_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public single_valued_object_path_expression(): Single_valued_object_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_object_path_expressionContext, 0) as Single_valued_object_path_expressionContext;
	}
	public simple_entity_expression(): Simple_entity_expressionContext {
		return this.getTypedRuleContext(Simple_entity_expressionContext, 0) as Simple_entity_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_entity_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEntity_expression) {
	 		listener.enterEntity_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEntity_expression) {
	 		listener.exitEntity_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEntity_expression) {
			return visitor.visitEntity_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_entity_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_entity_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_entity_expression) {
	 		listener.enterSimple_entity_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_entity_expression) {
	 		listener.exitSimple_entity_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_entity_expression) {
			return visitor.visitSimple_entity_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Entity_type_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_discriminator(): Type_discriminatorContext {
		return this.getTypedRuleContext(Type_discriminatorContext, 0) as Type_discriminatorContext;
	}
	public entity_type_literal(): Entity_type_literalContext {
		return this.getTypedRuleContext(Entity_type_literalContext, 0) as Entity_type_literalContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_entity_type_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEntity_type_expression) {
	 		listener.enterEntity_type_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEntity_type_expression) {
	 		listener.exitEntity_type_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEntity_type_expression) {
			return visitor.visitEntity_type_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_discriminatorContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPE(): TerminalNode {
		return this.getToken(JpqlParser.TYPE, 0);
	}
	public general_identification_variable(): General_identification_variableContext {
		return this.getTypedRuleContext(General_identification_variableContext, 0) as General_identification_variableContext;
	}
	public single_valued_object_path_expression(): Single_valued_object_path_expressionContext {
		return this.getTypedRuleContext(Single_valued_object_path_expressionContext, 0) as Single_valued_object_path_expressionContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_type_discriminator;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterType_discriminator) {
	 		listener.enterType_discriminator(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitType_discriminator) {
	 		listener.exitType_discriminator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitType_discriminator) {
			return visitor.visitType_discriminator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Functions_returning_numericsContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LENGTH(): TerminalNode {
		return this.getToken(JpqlParser.LENGTH, 0);
	}
	public string_expression_list(): String_expressionContext[] {
		return this.getTypedRuleContexts(String_expressionContext) as String_expressionContext[];
	}
	public string_expression(i: number): String_expressionContext {
		return this.getTypedRuleContext(String_expressionContext, i) as String_expressionContext;
	}
	public LOCATE(): TerminalNode {
		return this.getToken(JpqlParser.LOCATE, 0);
	}
	public arithmetic_expression_list(): Arithmetic_expressionContext[] {
		return this.getTypedRuleContexts(Arithmetic_expressionContext) as Arithmetic_expressionContext[];
	}
	public arithmetic_expression(i: number): Arithmetic_expressionContext {
		return this.getTypedRuleContext(Arithmetic_expressionContext, i) as Arithmetic_expressionContext;
	}
	public ABS(): TerminalNode {
		return this.getToken(JpqlParser.ABS, 0);
	}
	public CEILING(): TerminalNode {
		return this.getToken(JpqlParser.CEILING, 0);
	}
	public EXP(): TerminalNode {
		return this.getToken(JpqlParser.EXP, 0);
	}
	public FLOOR(): TerminalNode {
		return this.getToken(JpqlParser.FLOOR, 0);
	}
	public LN(): TerminalNode {
		return this.getToken(JpqlParser.LN, 0);
	}
	public SIGN(): TerminalNode {
		return this.getToken(JpqlParser.SIGN, 0);
	}
	public SQRT(): TerminalNode {
		return this.getToken(JpqlParser.SQRT, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(JpqlParser.MOD, 0);
	}
	public POWER(): TerminalNode {
		return this.getToken(JpqlParser.POWER, 0);
	}
	public ROUND(): TerminalNode {
		return this.getToken(JpqlParser.ROUND, 0);
	}
	public SIZE(): TerminalNode {
		return this.getToken(JpqlParser.SIZE, 0);
	}
	public collection_valued_path_expression(): Collection_valued_path_expressionContext {
		return this.getTypedRuleContext(Collection_valued_path_expressionContext, 0) as Collection_valued_path_expressionContext;
	}
	public INDEX(): TerminalNode {
		return this.getToken(JpqlParser.INDEX, 0);
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
	public extract_datetime_field(): Extract_datetime_fieldContext {
		return this.getTypedRuleContext(Extract_datetime_fieldContext, 0) as Extract_datetime_fieldContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_functions_returning_numerics;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFunctions_returning_numerics) {
	 		listener.enterFunctions_returning_numerics(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFunctions_returning_numerics) {
	 		listener.exitFunctions_returning_numerics(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFunctions_returning_numerics) {
			return visitor.visitFunctions_returning_numerics(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Functions_returning_datetimeContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CURRENT_DATE(): TerminalNode {
		return this.getToken(JpqlParser.CURRENT_DATE, 0);
	}
	public CURRENT_TIME(): TerminalNode {
		return this.getToken(JpqlParser.CURRENT_TIME, 0);
	}
	public CURRENT_TIMESTAMP(): TerminalNode {
		return this.getToken(JpqlParser.CURRENT_TIMESTAMP, 0);
	}
	public LOCAL(): TerminalNode {
		return this.getToken(JpqlParser.LOCAL, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(JpqlParser.DATE, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(JpqlParser.TIME, 0);
	}
	public DATETIME(): TerminalNode {
		return this.getToken(JpqlParser.DATETIME, 0);
	}
	public extract_datetime_part(): Extract_datetime_partContext {
		return this.getTypedRuleContext(Extract_datetime_partContext, 0) as Extract_datetime_partContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_functions_returning_datetime;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFunctions_returning_datetime) {
	 		listener.enterFunctions_returning_datetime(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFunctions_returning_datetime) {
	 		listener.exitFunctions_returning_datetime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFunctions_returning_datetime) {
			return visitor.visitFunctions_returning_datetime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Functions_returning_stringsContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CONCAT(): TerminalNode {
		return this.getToken(JpqlParser.CONCAT, 0);
	}
	public string_expression_list(): String_expressionContext[] {
		return this.getTypedRuleContexts(String_expressionContext) as String_expressionContext[];
	}
	public string_expression(i: number): String_expressionContext {
		return this.getTypedRuleContext(String_expressionContext, i) as String_expressionContext;
	}
	public SUBSTRING(): TerminalNode {
		return this.getToken(JpqlParser.SUBSTRING, 0);
	}
	public arithmetic_expression_list(): Arithmetic_expressionContext[] {
		return this.getTypedRuleContexts(Arithmetic_expressionContext) as Arithmetic_expressionContext[];
	}
	public arithmetic_expression(i: number): Arithmetic_expressionContext {
		return this.getTypedRuleContext(Arithmetic_expressionContext, i) as Arithmetic_expressionContext;
	}
	public TRIM(): TerminalNode {
		return this.getToken(JpqlParser.TRIM, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(JpqlParser.FROM, 0);
	}
	public trim_specification(): Trim_specificationContext {
		return this.getTypedRuleContext(Trim_specificationContext, 0) as Trim_specificationContext;
	}
	public trim_character(): Trim_characterContext {
		return this.getTypedRuleContext(Trim_characterContext, 0) as Trim_characterContext;
	}
	public LOWER(): TerminalNode {
		return this.getToken(JpqlParser.LOWER, 0);
	}
	public UPPER(): TerminalNode {
		return this.getToken(JpqlParser.UPPER, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_functions_returning_strings;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFunctions_returning_strings) {
	 		listener.enterFunctions_returning_strings(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFunctions_returning_strings) {
	 		listener.exitFunctions_returning_strings(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFunctions_returning_strings) {
			return visitor.visitFunctions_returning_strings(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Trim_specificationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LEADING(): TerminalNode {
		return this.getToken(JpqlParser.LEADING, 0);
	}
	public TRAILING(): TerminalNode {
		return this.getToken(JpqlParser.TRAILING, 0);
	}
	public BOTH(): TerminalNode {
		return this.getToken(JpqlParser.BOTH, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_trim_specification;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterTrim_specification) {
	 		listener.enterTrim_specification(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitTrim_specification) {
	 		listener.exitTrim_specification(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitTrim_specification) {
			return visitor.visitTrim_specification(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_invocationContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(JpqlParser.FUNCTION, 0);
	}
	public function_name(): Function_nameContext {
		return this.getTypedRuleContext(Function_nameContext, 0) as Function_nameContext;
	}
	public function_arg_list(): Function_argContext[] {
		return this.getTypedRuleContexts(Function_argContext) as Function_argContext[];
	}
	public function_arg(i: number): Function_argContext {
		return this.getTypedRuleContext(Function_argContext, i) as Function_argContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_function_invocation;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFunction_invocation) {
	 		listener.enterFunction_invocation(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFunction_invocation) {
	 		listener.exitFunction_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFunction_invocation) {
			return visitor.visitFunction_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extract_datetime_fieldContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(JpqlParser.EXTRACT, 0);
	}
	public datetime_field(): Datetime_fieldContext {
		return this.getTypedRuleContext(Datetime_fieldContext, 0) as Datetime_fieldContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(JpqlParser.FROM, 0);
	}
	public datetime_expression(): Datetime_expressionContext {
		return this.getTypedRuleContext(Datetime_expressionContext, 0) as Datetime_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_extract_datetime_field;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterExtract_datetime_field) {
	 		listener.enterExtract_datetime_field(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitExtract_datetime_field) {
	 		listener.exitExtract_datetime_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitExtract_datetime_field) {
			return visitor.visitExtract_datetime_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Datetime_fieldContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_datetime_field;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDatetime_field) {
	 		listener.enterDatetime_field(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDatetime_field) {
	 		listener.exitDatetime_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDatetime_field) {
			return visitor.visitDatetime_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extract_datetime_partContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EXTRACT(): TerminalNode {
		return this.getToken(JpqlParser.EXTRACT, 0);
	}
	public datetime_part(): Datetime_partContext {
		return this.getTypedRuleContext(Datetime_partContext, 0) as Datetime_partContext;
	}
	public FROM(): TerminalNode {
		return this.getToken(JpqlParser.FROM, 0);
	}
	public datetime_expression(): Datetime_expressionContext {
		return this.getTypedRuleContext(Datetime_expressionContext, 0) as Datetime_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_extract_datetime_part;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterExtract_datetime_part) {
	 		listener.enterExtract_datetime_part(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitExtract_datetime_part) {
	 		listener.exitExtract_datetime_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitExtract_datetime_part) {
			return visitor.visitExtract_datetime_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Datetime_partContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_datetime_part;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDatetime_part) {
	 		listener.enterDatetime_part(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDatetime_part) {
	 		listener.exitDatetime_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDatetime_part) {
			return visitor.visitDatetime_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_argContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_function_arg;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFunction_arg) {
	 		listener.enterFunction_arg(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFunction_arg) {
	 		listener.exitFunction_arg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFunction_arg) {
			return visitor.visitFunction_arg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public general_case_expression(): General_case_expressionContext {
		return this.getTypedRuleContext(General_case_expressionContext, 0) as General_case_expressionContext;
	}
	public simple_case_expression(): Simple_case_expressionContext {
		return this.getTypedRuleContext(Simple_case_expressionContext, 0) as Simple_case_expressionContext;
	}
	public coalesce_expression(): Coalesce_expressionContext {
		return this.getTypedRuleContext(Coalesce_expressionContext, 0) as Coalesce_expressionContext;
	}
	public nullif_expression(): Nullif_expressionContext {
		return this.getTypedRuleContext(Nullif_expressionContext, 0) as Nullif_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_case_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCase_expression) {
	 		listener.enterCase_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCase_expression) {
	 		listener.exitCase_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCase_expression) {
			return visitor.visitCase_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class General_case_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(JpqlParser.CASE, 0);
	}
	public when_clause_list(): When_clauseContext[] {
		return this.getTypedRuleContexts(When_clauseContext) as When_clauseContext[];
	}
	public when_clause(i: number): When_clauseContext {
		return this.getTypedRuleContext(When_clauseContext, i) as When_clauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(JpqlParser.ELSE, 0);
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
	public END(): TerminalNode {
		return this.getToken(JpqlParser.END, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_general_case_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterGeneral_case_expression) {
	 		listener.enterGeneral_case_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitGeneral_case_expression) {
	 		listener.exitGeneral_case_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitGeneral_case_expression) {
			return visitor.visitGeneral_case_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class When_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(JpqlParser.WHEN, 0);
	}
	public conditional_expression(): Conditional_expressionContext {
		return this.getTypedRuleContext(Conditional_expressionContext, 0) as Conditional_expressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(JpqlParser.THEN, 0);
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_when_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterWhen_clause) {
	 		listener.enterWhen_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitWhen_clause) {
	 		listener.exitWhen_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitWhen_clause) {
			return visitor.visitWhen_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_case_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CASE(): TerminalNode {
		return this.getToken(JpqlParser.CASE, 0);
	}
	public case_operand(): Case_operandContext {
		return this.getTypedRuleContext(Case_operandContext, 0) as Case_operandContext;
	}
	public simple_when_clause_list(): Simple_when_clauseContext[] {
		return this.getTypedRuleContexts(Simple_when_clauseContext) as Simple_when_clauseContext[];
	}
	public simple_when_clause(i: number): Simple_when_clauseContext {
		return this.getTypedRuleContext(Simple_when_clauseContext, i) as Simple_when_clauseContext;
	}
	public ELSE(): TerminalNode {
		return this.getToken(JpqlParser.ELSE, 0);
	}
	public scalar_expression(): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, 0) as Scalar_expressionContext;
	}
	public END(): TerminalNode {
		return this.getToken(JpqlParser.END, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_case_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_case_expression) {
	 		listener.enterSimple_case_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_case_expression) {
	 		listener.exitSimple_case_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_case_expression) {
			return visitor.visitSimple_case_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_operandContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_valued_path_expression(): State_valued_path_expressionContext {
		return this.getTypedRuleContext(State_valued_path_expressionContext, 0) as State_valued_path_expressionContext;
	}
	public type_discriminator(): Type_discriminatorContext {
		return this.getTypedRuleContext(Type_discriminatorContext, 0) as Type_discriminatorContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_case_operand;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCase_operand) {
	 		listener.enterCase_operand(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCase_operand) {
	 		listener.exitCase_operand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCase_operand) {
			return visitor.visitCase_operand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_when_clauseContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHEN(): TerminalNode {
		return this.getToken(JpqlParser.WHEN, 0);
	}
	public scalar_expression_list(): Scalar_expressionContext[] {
		return this.getTypedRuleContexts(Scalar_expressionContext) as Scalar_expressionContext[];
	}
	public scalar_expression(i: number): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, i) as Scalar_expressionContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(JpqlParser.THEN, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_simple_when_clause;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSimple_when_clause) {
	 		listener.enterSimple_when_clause(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSimple_when_clause) {
	 		listener.exitSimple_when_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSimple_when_clause) {
			return visitor.visitSimple_when_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Coalesce_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COALESCE(): TerminalNode {
		return this.getToken(JpqlParser.COALESCE, 0);
	}
	public scalar_expression_list(): Scalar_expressionContext[] {
		return this.getTypedRuleContexts(Scalar_expressionContext) as Scalar_expressionContext[];
	}
	public scalar_expression(i: number): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, i) as Scalar_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_coalesce_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCoalesce_expression) {
	 		listener.enterCoalesce_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCoalesce_expression) {
	 		listener.exitCoalesce_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCoalesce_expression) {
			return visitor.visitCoalesce_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nullif_expressionContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULLIF(): TerminalNode {
		return this.getToken(JpqlParser.NULLIF, 0);
	}
	public scalar_expression_list(): Scalar_expressionContext[] {
		return this.getTypedRuleContexts(Scalar_expressionContext) as Scalar_expressionContext[];
	}
	public scalar_expression(i: number): Scalar_expressionContext {
		return this.getTypedRuleContext(Scalar_expressionContext, i) as Scalar_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_nullif_expression;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterNullif_expression) {
	 		listener.enterNullif_expression(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitNullif_expression) {
	 		listener.exitNullif_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitNullif_expression) {
			return visitor.visitNullif_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Trim_characterContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(JpqlParser.CHARACTER, 0);
	}
	public character_valued_input_parameter(): Character_valued_input_parameterContext {
		return this.getTypedRuleContext(Character_valued_input_parameterContext, 0) as Character_valued_input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_trim_character;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterTrim_character) {
	 		listener.enterTrim_character(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitTrim_character) {
	 		listener.exitTrim_character(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitTrim_character) {
			return visitor.visitTrim_character(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Identification_variableContext extends ParserRuleContext {
	public _f!: Token;
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFICATION_VARIABLE(): TerminalNode {
		return this.getToken(JpqlParser.IDENTIFICATION_VARIABLE, 0);
	}
	public COUNT(): TerminalNode {
		return this.getToken(JpqlParser.COUNT, 0);
	}
	public DATE(): TerminalNode {
		return this.getToken(JpqlParser.DATE, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(JpqlParser.FROM, 0);
	}
	public INNER(): TerminalNode {
		return this.getToken(JpqlParser.INNER, 0);
	}
	public KEY(): TerminalNode {
		return this.getToken(JpqlParser.KEY, 0);
	}
	public LEFT(): TerminalNode {
		return this.getToken(JpqlParser.LEFT, 0);
	}
	public NEW(): TerminalNode {
		return this.getToken(JpqlParser.NEW, 0);
	}
	public ORDER(): TerminalNode {
		return this.getToken(JpqlParser.ORDER, 0);
	}
	public OUTER(): TerminalNode {
		return this.getToken(JpqlParser.OUTER, 0);
	}
	public POWER(): TerminalNode {
		return this.getToken(JpqlParser.POWER, 0);
	}
	public FLOOR(): TerminalNode {
		return this.getToken(JpqlParser.FLOOR, 0);
	}
	public SIGN(): TerminalNode {
		return this.getToken(JpqlParser.SIGN, 0);
	}
	public TIME(): TerminalNode {
		return this.getToken(JpqlParser.TIME, 0);
	}
	public TYPE(): TerminalNode {
		return this.getToken(JpqlParser.TYPE, 0);
	}
	public VALUE(): TerminalNode {
		return this.getToken(JpqlParser.VALUE, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_identification_variable;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterIdentification_variable) {
	 		listener.enterIdentification_variable(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitIdentification_variable) {
	 		listener.exitIdentification_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitIdentification_variable) {
			return visitor.visitIdentification_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constructor_nameContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_field_path_expression(): State_field_path_expressionContext {
		return this.getTypedRuleContext(State_field_path_expressionContext, 0) as State_field_path_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_constructor_name;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterConstructor_name) {
	 		listener.enterConstructor_name(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitConstructor_name) {
	 		listener.exitConstructor_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitConstructor_name) {
			return visitor.visitConstructor_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRINGLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.STRINGLITERAL, 0);
	}
	public INTLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.INTLITERAL, 0);
	}
	public FLOATLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.FLOATLITERAL, 0);
	}
	public boolean_literal(): Boolean_literalContext {
		return this.getTypedRuleContext(Boolean_literalContext, 0) as Boolean_literalContext;
	}
	public entity_type_literal(): Entity_type_literalContext {
		return this.getTypedRuleContext(Entity_type_literalContext, 0) as Entity_type_literalContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_literal;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Input_parameterContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.INTLITERAL, 0);
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_input_parameter;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterInput_parameter) {
	 		listener.enterInput_parameter(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitInput_parameter) {
	 		listener.exitInput_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitInput_parameter) {
			return visitor.visitInput_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pattern_valueContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_expression(): String_expressionContext {
		return this.getTypedRuleContext(String_expressionContext, 0) as String_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_pattern_value;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterPattern_value) {
	 		listener.enterPattern_value(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitPattern_value) {
	 		listener.exitPattern_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitPattern_value) {
			return visitor.visitPattern_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Date_time_timestamp_literalContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRINGLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.STRINGLITERAL, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_date_time_timestamp_literal;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterDate_time_timestamp_literal) {
	 		listener.enterDate_time_timestamp_literal(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitDate_time_timestamp_literal) {
	 		listener.exitDate_time_timestamp_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitDate_time_timestamp_literal) {
			return visitor.visitDate_time_timestamp_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Entity_type_literalContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_entity_type_literal;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEntity_type_literal) {
	 		listener.enterEntity_type_literal(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEntity_type_literal) {
	 		listener.exitEntity_type_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEntity_type_literal) {
			return visitor.visitEntity_type_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Escape_characterContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(JpqlParser.CHARACTER, 0);
	}
	public character_valued_input_parameter(): Character_valued_input_parameterContext {
		return this.getTypedRuleContext(Character_valued_input_parameterContext, 0) as Character_valued_input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_escape_character;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEscape_character) {
	 		listener.enterEscape_character(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEscape_character) {
	 		listener.exitEscape_character(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEscape_character) {
			return visitor.visitEscape_character(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Numeric_literalContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INTLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.INTLITERAL, 0);
	}
	public FLOATLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.FLOATLITERAL, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_numeric_literal;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterNumeric_literal) {
	 		listener.enterNumeric_literal(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitNumeric_literal) {
	 		listener.exitNumeric_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitNumeric_literal) {
			return visitor.visitNumeric_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_literalContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRUE(): TerminalNode {
		return this.getToken(JpqlParser.TRUE, 0);
	}
	public FALSE(): TerminalNode {
		return this.getToken(JpqlParser.FALSE, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_boolean_literal;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterBoolean_literal) {
	 		listener.enterBoolean_literal(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitBoolean_literal) {
	 		listener.exitBoolean_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitBoolean_literal) {
			return visitor.visitBoolean_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_literalContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public state_field_path_expression(): State_field_path_expressionContext {
		return this.getTypedRuleContext(State_field_path_expressionContext, 0) as State_field_path_expressionContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_enum_literal;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEnum_literal) {
	 		listener.enterEnum_literal(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEnum_literal) {
	 		listener.exitEnum_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEnum_literal) {
			return visitor.visitEnum_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(JpqlParser.CHARACTER, 0);
	}
	public STRINGLITERAL(): TerminalNode {
		return this.getToken(JpqlParser.STRINGLITERAL, 0);
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_string_literal;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterString_literal) {
	 		listener.enterString_literal(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitString_literal) {
	 		listener.exitString_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitString_literal) {
			return visitor.visitString_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_valued_embeddable_object_fieldContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_single_valued_embeddable_object_field;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSingle_valued_embeddable_object_field) {
	 		listener.enterSingle_valued_embeddable_object_field(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSingle_valued_embeddable_object_field) {
	 		listener.exitSingle_valued_embeddable_object_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSingle_valued_embeddable_object_field) {
			return visitor.visitSingle_valued_embeddable_object_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubtypeContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_subtype;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSubtype) {
	 		listener.enterSubtype(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSubtype) {
	 		listener.exitSubtype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSubtype) {
			return visitor.visitSubtype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_valued_fieldContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_collection_valued_field;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCollection_valued_field) {
	 		listener.enterCollection_valued_field(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCollection_valued_field) {
	 		listener.exitCollection_valued_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCollection_valued_field) {
			return visitor.visitCollection_valued_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_valued_object_fieldContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_single_valued_object_field;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSingle_valued_object_field) {
	 		listener.enterSingle_valued_object_field(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSingle_valued_object_field) {
	 		listener.exitSingle_valued_object_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSingle_valued_object_field) {
			return visitor.visitSingle_valued_object_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class State_fieldContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_state_field;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterState_field) {
	 		listener.enterState_field(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitState_field) {
	 		listener.exitState_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitState_field) {
			return visitor.visitState_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_value_fieldContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_collection_value_field;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCollection_value_field) {
	 		listener.enterCollection_value_field(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCollection_value_field) {
	 		listener.exitCollection_value_field(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCollection_value_field) {
			return visitor.visitCollection_value_field(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Entity_nameContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable_list(): Identification_variableContext[] {
		return this.getTypedRuleContexts(Identification_variableContext) as Identification_variableContext[];
	}
	public identification_variable(i: number): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, i) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_entity_name;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterEntity_name) {
	 		listener.enterEntity_name(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitEntity_name) {
	 		listener.exitEntity_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitEntity_name) {
			return visitor.visitEntity_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Result_variableContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_result_variable;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterResult_variable) {
	 		listener.enterResult_variable(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitResult_variable) {
	 		listener.exitResult_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitResult_variable) {
			return visitor.visitResult_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Superquery_identification_variableContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identification_variable(): Identification_variableContext {
		return this.getTypedRuleContext(Identification_variableContext, 0) as Identification_variableContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_superquery_identification_variable;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSuperquery_identification_variable) {
	 		listener.enterSuperquery_identification_variable(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSuperquery_identification_variable) {
	 		listener.exitSuperquery_identification_variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSuperquery_identification_variable) {
			return visitor.visitSuperquery_identification_variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_valued_input_parameterContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_collection_valued_input_parameter;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCollection_valued_input_parameter) {
	 		listener.enterCollection_valued_input_parameter(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCollection_valued_input_parameter) {
	 		listener.exitCollection_valued_input_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCollection_valued_input_parameter) {
			return visitor.visitCollection_valued_input_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Single_valued_input_parameterContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_single_valued_input_parameter;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterSingle_valued_input_parameter) {
	 		listener.enterSingle_valued_input_parameter(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitSingle_valued_input_parameter) {
	 		listener.exitSingle_valued_input_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitSingle_valued_input_parameter) {
			return visitor.visitSingle_valued_input_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_nameContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_literal(): String_literalContext {
		return this.getTypedRuleContext(String_literalContext, 0) as String_literalContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_function_name;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterFunction_name) {
	 		listener.enterFunction_name(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitFunction_name) {
	 		listener.exitFunction_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitFunction_name) {
			return visitor.visitFunction_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Character_valued_input_parameterContext extends ParserRuleContext {
	constructor(parser?: JpqlParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHARACTER(): TerminalNode {
		return this.getToken(JpqlParser.CHARACTER, 0);
	}
	public input_parameter(): Input_parameterContext {
		return this.getTypedRuleContext(Input_parameterContext, 0) as Input_parameterContext;
	}
    public get ruleIndex(): number {
    	return JpqlParser.RULE_character_valued_input_parameter;
	}
	public enterRule(listener: JpqlListener): void {
	    if(listener.enterCharacter_valued_input_parameter) {
	 		listener.enterCharacter_valued_input_parameter(this);
		}
	}
	public exitRule(listener: JpqlListener): void {
	    if(listener.exitCharacter_valued_input_parameter) {
	 		listener.exitCharacter_valued_input_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JpqlVisitor<Result>): Result {
		if (visitor.visitCharacter_valued_input_parameter) {
			return visitor.visitCharacter_valued_input_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
