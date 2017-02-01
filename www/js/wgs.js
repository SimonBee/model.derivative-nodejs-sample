/*!
 * @license
 * Copyright 2016 Autodesk, Inc.
 * All rights reserved.
 * 
 * This computer source code and related instructions and comments are the
 * unpublished confidential and proprietary information of Autodesk, Inc.
 * and are protected under Federal copyright and state trade secret law.
 * They may not be disclosed to, copied or used by any third party without
 * the prior written consent of Autodesk, Inc.
 */
var WGS =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _extend = function _extend(target, source) {
	    for (var prop in source) {
	        if (source.hasOwnProperty(prop)) {
	            target[prop] = source[prop];
	        }
	    }
	};

	module.exports = {
	    VERSION: '0.0.0',
	    BackgroundShader: __webpack_require__(1),
	    BasicShader: __webpack_require__(4),
	    BlendShader: __webpack_require__(35),
	    CelShader: __webpack_require__(38),
	    CopyShader: __webpack_require__(41),
	    FXAAShader: __webpack_require__(44),
	    SAOBlurShader: __webpack_require__(47),
	    SAOShader: __webpack_require__(50),
	    NormalsShader: __webpack_require__(53),
	    LineShader: __webpack_require__(56),
	    ShaderPass: __webpack_require__(59),
	    GaussianPass: __webpack_require__(61),
	    GroundReflection: __webpack_require__(64),
	    WebGLShader: __webpack_require__(69),
	    PhongShader: __webpack_require__(70),
	    VBIntersector: __webpack_require__(73),
	    GeometryList: __webpack_require__(74),
	    RenderBatch: __webpack_require__(76),
	    InstanceBufferBuilder: __webpack_require__(77),
	    WebGLRenderer: __webpack_require__(86),
	    ModelIteratorLinear: __webpack_require__(102),
	    FragmentListConsolidation: __webpack_require__(104),
	    ConsolidationIterator: __webpack_require__(106),
	    ModelIteratorBVH: __webpack_require__(107),
	    BufferGeometry: __webpack_require__(79),
	    Consolidation: __webpack_require__(78),
	    RenderScene: __webpack_require__(108),
	    SortedList: __webpack_require__(110),
	    RenderModel: __webpack_require__(111),
	    MaterialConverter: __webpack_require__(82),
	    MaterialManager: __webpack_require__(80) };


	_extend(module.exports, __webpack_require__(75));
	_extend(module.exports, __webpack_require__(5));
	_extend(module.exports, __webpack_require__(114));
	_extend(module.exports, __webpack_require__(81));
	_extend(module.exports, __webpack_require__(119));
	_extend(module.exports, __webpack_require__(60));
	_extend(module.exports, __webpack_require__(89));
	_extend(module.exports, __webpack_require__(87));
	_extend(module.exports, __webpack_require__(83));
	_extend(module.exports, __webpack_require__(88));
	_extend(module.exports, __webpack_require__(109));
	_extend(module.exports, __webpack_require__(105));
	_extend(module.exports, __webpack_require__(113));
	_extend(module.exports, __webpack_require__(112));
	_extend(module.exports, __webpack_require__(120));
	_extend(module.exports, __webpack_require__(121));
	_extend(module.exports, __webpack_require__(122));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";



	var BackgroundShader = {

	    uniforms: {
	        "color1": { type: "v3", value: new THREE.Vector3(41.0 / 255.0, 76.0 / 255.0, 120.0 / 255.0) },
	        "color2": { type: "v3", value: new THREE.Vector3(1.0 / 255.0, 2.0 / 255.0, 3.0 / 255.0) },
	        //"irradianceMap": {type: "t", value: 1.0},
	        "envMap": { type: "t", value: null },
	        "envRotationSin": { type: "f", value: 0.0 },
	        "envRotationCos": { type: "f", value: 1.0 },
	        "exposureBias": { type: "f", value: 1.0 },
	        "envMapExposure": { type: "f", value: 1.0 },
	        "uCamDir": { type: "v3", value: new THREE.Vector3() },
	        "uCamUp": { type: "v3", value: new THREE.Vector3() },
	        "uResolution": { type: "v2", value: new THREE.Vector2(600, 400) },
	        "uHalfFovTan": { type: "f", value: 0.5 },
	        "envMapBackground": { type: "i", value: 0 } },

	    
	    vertexShader: __webpack_require__(2),
	    fragmentShader: __webpack_require__(3) 


};


	module.exports = BackgroundShader;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "uniform vec3 color1;\r\nuniform vec3 color2;\r\n\r\nvarying vec2 vUv;\r\nvarying vec3 vColor;\r\n\r\nvoid main() {\r\n\r\n    if (uv.y == 0.0)\r\n        vColor = color2;\r\n    else\r\n        vColor = color1;\r\n\r\n    vUv = uv;\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n";

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "varying vec3 vColor;\r\nvarying vec2 vUv;\r\n\r\n\r\nuniform samplerCube envMap;\r\nuniform vec3 uCamDir;\r\nuniform vec3 uCamUp;\r\nuniform vec2 uResolution;\r\nuniform float uHalfFovTan;\r\nuniform bool envMapBackground;\r\n\r\n#include<env_sample>\r\n\r\nconst int bloomRange = 4;\r\n\r\n#include<ordered_dither>\r\n\r\nuniform float envMapExposure;\r\n#if TONEMAP_OUTPUT > 0\r\nuniform float exposureBias;\r\n#include<tonemap>\r\n#endif\r\n\r\nvec3 rayDir(in vec2 vUv) {\r\n    vec3 A = (uResolution.x/uResolution.y)*normalize(cross(uCamDir,uCamUp)) * (uHalfFovTan * 2.0);\r\n    vec3 B = normalize(uCamUp) * (uHalfFovTan * 2.0);\r\n    vec3 C = normalize(uCamDir);\r\n\r\n    vec3 ray = normalize( C + (2.0*vUv.x-1.0)*A + (2.0*vUv.y-1.0)*B );\r\n    return ray;\r\n}\r\n\r\nvec3 getColor(in vec3 rd) {\r\n    return RGBMDecode(textureCube(envMap, adjustLookupVector(rd)), envMapExposure);\r\n}\r\n\r\nvoid main() {\r\n    vec3 rd = rayDir(vUv);\r\n    vec3 outColor;\r\n\r\n    if (envMapBackground) {\r\n        outColor = getColor(rd);\r\n#if TONEMAP_OUTPUT == 1\r\n        outColor = toneMapCanonOGS_WithGamma_WithColorPerserving(exposureBias * outColor);\r\n#elif TONEMAP_OUTPUT == 2\r\n        outColor = toneMapCanonFilmic_WithGamma(exposureBias * outColor);\r\n#endif\r\n    }\r\n    else {\r\n        outColor = vColor;\r\n    }\r\n\r\n    gl_FragColor = vec4(orderedDithering(outColor), 1.0);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');

	var chunks = __webpack_require__(5);

	//Replacement for the THREE BasicMaterial adding
	//cut plane support

	var BasicShader = {

	    uniforms: THREE.UniformsUtils.merge([

	    THREE.UniformsLib["common"],
	    THREE.UniformsLib["fog"],
	    THREE.UniformsLib["shadowmap"],
	    chunks.CutPlanesUniforms,
	    chunks.IdUniforms,
	    chunks.ThemingUniform,
	    chunks.PointSizeUniforms,
	    chunks.WideLinesUniforms]),


	    vertexShader: __webpack_require__(33),
	    fragmentShader: __webpack_require__(34) };



	THREE.ShaderLib['firefly_basic'] = BasicShader;

	module.exports = BasicShader;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var THREE = __webpack_require__(6);

	/*
	                                            * Reusable sets of uniforms that can be merged with other uniforms in specific shaders.
	                                            */

	var CutPlanesUniforms = {
	    "cutplanes": { type: "v4v", value: [] },
	    "hatchParams": { type: "v2", value: new THREE.Vector2(1.0, 10.0) },
	    "hatchTintColor": { type: "c", value: new THREE.Color(0xFFFFFF) },
	    "hatchTintIntensity": { type: "f", value: 1.0 } };


	var IdUniforms = {
	    "dbId": { type: "v3", value: new THREE.Vector3(0, 0, 0) },
	    "modelId": { type: "v3", value: new THREE.Vector3(0, 0, 0) } };


	var ThemingUniform = {
	    "themingColor": { type: "v4", value: new THREE.Vector4(0, 0, 0, 0) } };


	// Uniforms shared by material shader chunks and ShadowMapShader
	// Included by ShadowMapUniforms below.
	var ShadowMapCommonUniforms = {
	    "shadowESMConstant": { type: "f", value: 0.0 } };


	// Uniforms needed by material shaders to apply shadow mapping.
	var ShadowMapUniforms = THREE.UniformsUtils.merge([
	{
	    "shadowMap": { type: "t", value: null },
	    "shadowMapSize": { type: "v2", value: new THREE.Vector2(0, 0) },
	    "shadowBias": { type: "f", value: 0.0 },
	    "shadowDarkness": { type: "f", value: 0.0 },
	    "shadowMatrix": { type: "m4", value: new THREE.Matrix4() },
	    "shadowLightDir": { type: "v3", value: new THREE.Vector3() } },

	ShadowMapCommonUniforms]);


	// Uniform for point-set point size
	var PointSizeUniforms = {
	    "point_size": { type: "f", value: 1.0 } };


	// Uniform for wide lines shader
	var WideLinesUniforms = {
	    "view_size": { type: "v2", value: new THREE.Vector2(640, 480) } };


	/*
	                                                                        * Chunks are code snippets that can be included in specific shaders
	                                                                        * using the three.js-style include directive:
	                                                                        *
	                                                                        *      #include<name_of_chunk>
	                                                                        *
	                                                                        * During runtime this directive can be expanded into the corresponding
	                                                                        * code snippet using the `resolve` method available below.
	                                                                        */
	var chunks = {};

	// We include default three.js chunks, too
	for (var name in THREE.ShaderChunk) {
	    chunks[name] = THREE.ShaderChunk[name];
	}

	chunks['pack_depth'] = __webpack_require__(7);
	chunks['tonemap'] = __webpack_require__(8);
	chunks['ordered_dither'] = __webpack_require__(9);
	chunks['cutplanes'] = __webpack_require__(10);
	chunks['pack_normals'] = __webpack_require__(11);
	chunks['hatch_pattern'] = __webpack_require__(12);
	chunks['env_sample'] = __webpack_require__(13);
	chunks['id_decl_vert'] = __webpack_require__(14);
	chunks['id_vert'] = __webpack_require__(15);
	chunks['id_decl_frag'] = __webpack_require__(16);
	chunks['id_frag'] = __webpack_require__(17);
	chunks['final_frag'] = __webpack_require__(18);
	chunks['theming_decl_frag'] = __webpack_require__(19);
	chunks['theming_frag'] = __webpack_require__(20);
	chunks['instancing_decl_vert'] = __webpack_require__(21);
	chunks['shadowmap_decl_common'] = __webpack_require__(22);
	chunks['shadowmap_decl_vert'] = __webpack_require__(23);
	chunks['shadowmap_vert'] = __webpack_require__(24);
	chunks['shadowmap_decl_frag'] = __webpack_require__(25);
	chunks['float3_average'] = __webpack_require__(26);
	chunks['line_decl_common'] = __webpack_require__(27);
	chunks['prism_wood'] = __webpack_require__(28);
	chunks['decl_point_size'] = __webpack_require__(29);
	chunks['point_size'] = __webpack_require__(30);
	chunks['wide_lines_decl'] = __webpack_require__(31);
	chunks['wide_lines_vert'] = __webpack_require__(32);

	/*
	                                                                       * Macros are simple JavaScript functions that can be evaluated from
	                                                                       * within the shader code using a similar syntax as the include directive:
	                                                                       *
	                                                                       *      #name_of_macro<first_param, second_param, third_param, ...>
	                                                                       *
	                                                                       * All parameters are simply passed to the JavaScript code as strings,
	                                                                       * i.e., they are not parsed in any way.
	                                                                       *
	                                                                       * We use this as a way to call the various Prism helper methods (such as
	                                                                       * GetPrismMapsDefinitionChunk below) without having to compose the shader
	                                                                       * code from lists of strings.
	                                                                       */
	var macros = {};

	// If any map type is defined, then do whatever "content" is;
	// typically it's "#define USE_MAP". In other words, if any map
	// is defined, then USE_MAP will also be defined. This constant
	// is then checked and determines whether a UV variable is defined, etc.
	function GetPrismMapsDefinitionChunk(flag) {
	    var def = ["#if defined( USE_SURFACE_ALBEDO_MAP )" +
	    " || defined( USE_SURFACE_ROUGHNESS_MAP )" +
	    " || defined( USE_SURFACE_CUTOUT_MAP )" +
	    " || defined( USE_SURFACE_ANISOTROPY_MAP )" +
	    " || defined( USE_SURFACE_ROTATION_MAP )" +
	    " || defined( USE_OPAQUE_ALBEDO_MAP )" +
	    " || defined( USE_OPAQUE_F0_MAP )" +
	    " || defined( USE_OPAQUE_LUMINANCE_MODIFIER_MAP )" +
	    " || defined( USE_LAYERED_BOTTOM_F0_MAP )" +
	    " || defined( USE_LAYERED_F0_MAP )" +
	    " || defined( USE_LAYERED_DIFFUSE_MAP )" +
	    " || defined( USE_LAYERED_FRACTION_MAP )" +
	    " || defined( USE_LAYERED_ROUGHNESS_MAP )" +
	    " || defined( USE_LAYERED_ANISOTROPY_MAP )" +
	    " || defined( USE_LAYERED_ROTATION_MAP )" +
	    " || defined( USE_METAL_F0_MAP )" +
	    " || defined( USE_SURFACE_NORMAL_MAP )" +
	    " || defined( USE_LAYERED_NORMAL_MAP )",
	    "#define " + flag,
	    "#endif"].
	    join("\n");
	    return def;
	}

	macros['prism_check'] = GetPrismMapsDefinitionChunk;

	// Set up code for texture access. If USE_SURFACE_ALBEDO_MAP is defined, for example, this texture access code gets executed.
	// If it's not defined, then a simply copy occurs, e.g. "surfaceAlbedo = surface_albedo;" from the variableName and mapType.
	function GetPrismMapSampleChunk(mapType, variableName, isFloat, linearize) {
	    var suffix = isFloat ? "_v3" : "";
	    var declare = isFloat ? "vec3 " : "";
	    var average = isFloat ? variableName + " = averageOfFloat3(" + variableName + suffix + ");" : "";
	    var colorLinearization = linearize ? variableName + suffix + " = SRGBToLinear(" + variableName + suffix + ");" : "";
	    var shader = [
	    "#if defined( USE_" + mapType.toUpperCase() + "_MAP )",
	    "vec2 uv_" + mapType + "_map = (" + mapType + "_map_texMatrix * vec3(vUv, 1.0)).xy;",
	    mapType.toUpperCase() + "_CLAMP_TEST;",
	    declare + variableName + suffix + " = texture2D(" + mapType + "_map, uv_" + mapType + "_map).xyz;",
	    colorLinearization,
	    "if(" + mapType + "_map_invert) " + variableName + suffix + " = vec3(1.0) - " + variableName + suffix + ";",
	    average,
	    "#else",
	    variableName + " = " + mapType + ";",
	    "#endif"].
	    join("\n");

	    return shader;
	}

	macros['prism_sample_texture'] = function (mapType, varName, isFloat, linearize) {
	    return GetPrismMapSampleChunk(mapType, varName, isFloat === 'true', linearize === 'true');
	};

	function GetPrismMapUniformChunk(mapName) {

	    var mtxName = mapName + "_texMatrix";
	    var mapInvt = mapName + "_invert";
	    var macroName = "USE_" + mapName;

	    var uniforms = [
	    "#if defined( " + macroName.toUpperCase() + " )",
	    "uniform sampler2D " + mapName + ";",
	    "uniform mat3 " + mtxName + ";",
	    "uniform bool " + mapInvt + ";",
	    "#endif"].
	    join("\n");

	    return uniforms;
	}

	macros['prism_uniforms'] = GetPrismMapUniformChunk;

	function GetPrismBumpMapUniformChunk(mapName) {

	    var mtxName = mapName + "_texMatrix";
	    var mapScale = mapName + "_bumpScale";
	    var mapType = mapName + "_bumpmapType";
	    var macroName = "USE_" + mapName;

	    var uniforms = [
	    "#if defined( " + macroName.toUpperCase() + " )",
	    "uniform sampler2D " + mapName + ";",
	    "uniform mat3 " + mtxName + ";",
	    "uniform vec2 " + mapScale + ";",
	    "uniform int " + mapType + ";",
	    "#endif"].
	    join("\n");

	    return uniforms;
	}

	macros['prism_bump_uniforms'] = GetPrismBumpMapUniformChunk;

	// Precompile regexes for the macros
	var _regExCache = {};
	for (var name in macros) {
	    _regExCache[name] = new RegExp('#' + name + ' *<([\\w\\d., ]*)>', 'g');
	}

	/**
	   * Recursively resolves include directives and macros.
	   * @param {string} source Original shader code.
	   * @returns {string} Shader code with all includes resolved.
	   */
	var resolve = function resolve(source) {
	    for (var name in macros) {
	        var re = _regExCache[name];
	        source = source.replace(re, function (match, parens) {
	            var params = parens.split(',').map(function (param) {return param.trim();});
	            return macros[name].apply(null, params);
	        });
	    }

	    var pattern = /#include *<([\w\d.]+)>/g;
	    var func = function func(match, include) {
	        if (!chunks[include]) {
	            throw new Error('Cannot resolve #include<' + include + '>');
	        }
	        return resolve(chunks[include]);
	    };
	    return source.replace(pattern, func);
	};

	module.exports = {
	    IdUniforms: IdUniforms,
	    ThemingUniform: ThemingUniform,
	    CutPlanesUniforms: CutPlanesUniforms,
	    ShadowMapCommonUniforms: ShadowMapCommonUniforms,
	    ShadowMapUniforms: ShadowMapUniforms,
	    PointSizeUniforms: PointSizeUniforms,
	    WideLinesUniforms: WideLinesUniforms,

	    // The chunks don't have to be exported anymore, but we keep them
	    // for backwards compatibility (they're still referenced in LegacyNamespace.js)
	    PackDepthShaderChunk: chunks['pack_depth'],
	    TonemapShaderChunk: chunks['tonemap'],
	    OrderedDitheringShaderChunk: chunks['ordered_dither'],
	    CutPlanesShaderChunk: chunks['cutplanes'],
	    PackNormalsShaderChunk: chunks['pack_normals'],
	    HatchPatternShaderChunk: chunks['hatch_pattern'],
	    EnvSamplingShaderChunk: chunks['env_sample'],
	    IdVertexDeclaration: chunks['id_decl_vert'],
	    IdVertexShaderChunk: chunks['id_vert'],
	    IdFragmentDeclaration: chunks['id_decl_frag'],
	    IdOutputShaderChunk: chunks['id_frag'],
	    FinalOutputShaderChunk: chunks['final_frag'],
	    ThemingFragmentDeclaration: chunks['theming_decl_frag'],
	    ThemingFragmentShaderChunk: chunks['theming_frag'],
	    InstancingVertexDeclaration: chunks['instancing_decl_vert'],
	    ShadowMapDeclareCommonUniforms: chunks['shadowmap_decl_common'],
	    ShadowMapVertexDeclaration: chunks['shadowmap_decl_vert'],
	    ShadowMapVertexShaderChunk: chunks['shadowmap_vert'],
	    ShadowMapFragmentDeclaration: chunks['shadowmap_decl_frag'],
	    AverageOfFloat3: chunks['float3_average'],
	    PointSizeDeclaration: chunks['decl_point_size'],
	    PointSizeShaderChunk: chunks['point_size'],

	    GetPrismMapSampleChunk: GetPrismMapSampleChunk,
	    GetPrismMapUniformChunk: GetPrismMapUniformChunk,

	    resolve: resolve };

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = THREE;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\r\nvec4 packDepth( const in float depth ) {\r\n    vec4 enc = vec4(1.0, 255.0, 65025.0, 160581375.0) * depth;\r\n    enc = fract(enc);\r\n    enc -= enc.yzww * vec4(1.0/255.0,1.0/255.0,1.0/255.0,0.0);\r\n    return enc;\r\n}\r\n\r\n\r\nfloat unpackDepth( const in vec4 rgba_depth ) {\r\n    return dot( rgba_depth, vec4(1.0, 1.0/255.0, 1.0/65025.0, 1.0/160581375.0) );\r\n}\r\n";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\r\nfloat luminance_post(vec3 rgb) {\r\n    return dot(rgb, vec3(0.299, 0.587, 0.114));\r\n}\r\n\r\n\r\nfloat luminance_pre(vec3 rgb) {\r\n    return dot(rgb, vec3(0.212671, 0.715160, 0.072169));\r\n}\r\n\r\n\r\nvec3 xyz2rgb(vec3 xyz) {\r\n\r\n    vec3 R = vec3( 3.240479, -1.537150, -0.498535);\r\n    vec3 G = vec3(-0.969256,  1.875992,  0.041556);\r\n    vec3 B = vec3( 0.055648, -0.204043,  1.057311);\r\n\r\n    vec3 rgb;\r\n    rgb.b = dot(xyz, B);\r\n    rgb.g = dot(xyz, G);\r\n    rgb.r = dot(xyz, R);\r\n\r\n    return rgb;\r\n}\r\n\r\nvec3 rgb2xyz(vec3 rgb) {\r\n\r\n    vec3 X = vec3(0.412453, 0.35758, 0.180423);\r\n    vec3 Y = vec3(0.212671, 0.71516, 0.0721688);\r\n    vec3 Z = vec3(0.0193338, 0.119194, 0.950227);\r\n\r\n    vec3 xyz;\r\n    xyz.x = dot(rgb, X);\r\n    xyz.y = dot(rgb, Y);\r\n    xyz.z = dot(rgb, Z);\r\n\r\n    return xyz;\r\n}\r\n\r\nvec3 xyz2xyY(vec3 xyz) {\r\n    float sum = xyz.x + xyz.y + xyz.z;\r\n\r\n\r\n\r\n    sum = 1.0 / sum;\r\n\r\n    vec3 xyY;\r\n    xyY.z = xyz.y;\r\n    xyY.x = xyz.x * sum;\r\n    xyY.y = xyz.y * sum;\r\n\r\n    return xyY;\r\n}\r\n\r\nvec3 xyY2xyz(vec3 xyY) {\r\n\r\n    float x = xyY.x;\r\n    float y = xyY.y;\r\n    float Y = xyY.z;\r\n\r\n    vec3 xyz;\r\n    xyz.y = Y;\r\n    xyz.x = x * (Y / y);\r\n    xyz.z = (1.0 - x - y) * (Y / y);\r\n\r\n    return xyz;\r\n}\r\n\r\n\r\n\r\n\r\nfloat toneMapCanon_T(float x)\r\n{\r\n\r\n    float xpow = pow(x, 1.60525727);\r\n    float tmp = ((1.05542877*4.68037409)*xpow) / (4.68037409*xpow + 1.0);\r\n    return clamp(tmp, 0.0, 1.0);\r\n}\r\n\r\n\r\nconst float Shift = 1.0 / 0.18;\r\n\r\n\r\n\r\n\r\n\r\nfloat toneMapCanonFilmic_NoGamma(float x) {\r\n\r\n\r\n\r\n    x *= Shift;\r\n\r\n    const float A = 0.2;\r\n    const float B = 0.34;\r\n    const float C = 0.002;\r\n    const float D = 1.68;\r\n    const float E = 0.0005;\r\n    const float F = 0.252;\r\n    const float scale = 1.0/0.833837;\r\n\r\n    return (((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F) * scale;\r\n}\r\n\r\n\r\n\r\n\r\nvec3 toneMapCanonFilmic_WithGamma(vec3 x) {\r\n\r\n\r\n\r\n    x *= Shift;\r\n\r\n\r\n\r\n\r\n\r\n    const float A = 0.27;\r\n    const float B = 0.29;\r\n    const float C = 0.052;\r\n    const float D = 0.2;\r\n\r\n    const float F = 0.18;\r\n    const float scale = 1.0/0.897105;\r\n\r\n    return (((x*(A*x+C*B))/(x*(A*x+B)+D*F))) * scale;\r\n}\r\n\r\n\r\nvec3 toneMapCanonOGS_WithGamma_WithColorPerserving(vec3 x) {\r\n    vec3 outColor = x.rgb;\r\n    outColor = min(outColor, vec3(3.0));\r\n    float inLum = luminance_pre(outColor);\r\n    if (inLum > 0.0) {\r\n        float outLum = toneMapCanon_T(inLum);\r\n        outColor = outColor * (outLum / inLum);\r\n        outColor = clamp(outColor, vec3(0.0), vec3(1.0));\r\n    }\r\n    float gamma = 1.0/2.2;\r\n    outColor = pow(outColor, vec3(gamma));\r\n    return outColor;\r\n}\r\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "vec3 orderedDithering(vec3 col) {\r\n\r\n    const vec4 m0 = vec4( 1.0, 13.0,  4.0, 16.0);\r\n    const vec4 m1 = vec4( 9.0,  5.0, 12.0,  8.0);\r\n    const vec4 m2 = vec4( 3.0, 15.0,  2.0, 14.0);\r\n    const vec4 m3 = vec4(11.0,  7.0, 10.0,  6.0);\r\n\r\n\r\n    int i = int(mod(float(gl_FragCoord.x), 4.0));\r\n    int j = int(mod(float(gl_FragCoord.y), 4.0));\r\n\r\n\r\n\r\n    vec4 biasRow;\r\n    if      (i==0) biasRow = m0;\r\n    else if (i==1) biasRow = m1;\r\n    else if (i==2) biasRow = m2;\r\n    else           biasRow = m3;\r\n    float bias;\r\n    if      (j==0) bias = biasRow.x;\r\n    else if (j==1) bias = biasRow.y;\r\n    else if (j==2) bias = biasRow.z;\r\n    else           bias = biasRow.w;\r\n\r\n    return col + bias / 17.0 / 256.0;\r\n}\r\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "#if NUM_CUTPLANES > 0\r\nuniform vec4 cutplanes[NUM_CUTPLANES];\r\n\r\nvoid checkCutPlanes(vec3 worldPosition) {\r\n    for (int i=0; i<NUM_CUTPLANES; i++) {\r\n\r\n        if (dot(vec4(worldPosition, 1.0), cutplanes[i]) > 0.0) {\r\n            discard;\r\n        }\r\n    }\r\n}\r\n#endif\r\n";

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n\r\n\r\n#define kPI 3.14159265358979\r\n\r\nvec2 encodeNormal (vec3 n) {\r\n    return (vec2(atan(n.y,n.x)/kPI, n.z)+1.0)*0.5;\r\n}\r\n\r\nvec3 decodeNormal (vec2 enc) {\r\n    vec2 ang = enc * 2.0 - 1.0;\r\n    vec2 scth = vec2(sin(ang.x * kPI), cos(ang.x * kPI));\r\n\r\n    vec2 scphi = vec2(sqrt(1.0 - ang.y * ang.y), ang.y);\r\n    return vec3(scth.y * scphi.x, scth.x * scphi.x, scphi.y);\r\n}\r\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "#ifdef HATCH_PATTERN\r\nuniform vec2 hatchParams;\r\nuniform vec3 hatchTintColor;\r\nuniform float hatchTintIntensity;\r\n\r\n\r\nfloat curveGaussian(float r, float invWidth) {\r\n    float amt = clamp(r * invWidth, 0.0, 1.0);\r\n    float exponent = amt * 3.5;\r\n    return exp(-exponent*exponent);\r\n}\r\n\r\nvec4 calculateHatchPattern(vec2 hatchParams, vec2 coord, vec4 fragColor, vec3 hatchTintColor, float hatchTintIntensity ) {\r\n    float hatchSlope = hatchParams.x;\r\n    float hatchPeriod = hatchParams.y;\r\n    if (abs(hatchSlope) <= 1.0) {\r\n        float hatchPhase = coord.y - hatchSlope * coord.x;\r\n        float dist = abs(mod((hatchPhase), (hatchPeriod)));\r\n        if (dist < 1.0) {\r\n            fragColor = vec4(0.0,0.0,0.0,1.0);\r\n        } else {\r\n            fragColor.xyz = mix(fragColor.xyz, hatchTintColor, hatchTintIntensity);\r\n        }\r\n    } else {\r\n        float hatchPhase = - coord.y / hatchSlope + coord.x;\r\n        float dist = abs(mod((hatchPhase), (hatchPeriod)));\r\n        if (dist < 1.0) {\r\n            fragColor = vec4(0.0,0.0,0.0,1.0);\r\n        } else {\r\n            fragColor.xyz = mix(fragColor.xyz, hatchTintColor, hatchTintIntensity);\r\n        }\r\n    }\r\n    return fragColor;\r\n}\r\n\r\n#endif\r\n";

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\r\nuniform float envRotationSin;\r\nuniform float envRotationCos;\r\nvec3 adjustLookupVector(in vec3 lookup) {\r\n    return vec3(\r\n            envRotationCos * lookup.x - envRotationSin * lookup.z,\r\n            lookup.y,\r\n            envRotationSin * lookup.x + envRotationCos * lookup.z);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nvec3 RGBMDecode(in vec4 vRGBM, in float exposure) {\r\n    vec3 ret = vRGBM.rgb * (vRGBM.a * 16.0);\r\n    ret *= ret;\r\n    ret *= exposure;\r\n    return ret;\r\n}\r\n\r\n\r\nvec3 GammaDecode(in vec4 vRGBA, in float exposure) {\r\n    return vRGBA.xyz * vRGBA.xyz * exposure;\r\n}\r\n\r\nvec3 sampleIrradianceMap(vec3 dirWorld, samplerCube irrMap, float exposure) {\r\n\r\n    vec4 cubeColor4 = textureCube(irrMap, adjustLookupVector(dirWorld));\r\n\r\n#ifdef IRR_GAMMA\r\n    vec3 indirectDiffuse = GammaDecode(cubeColor4, exposure);\r\n#elif defined(IRR_RGBM)\r\n    vec3 indirectDiffuse = RGBMDecode(cubeColor4, exposure);\r\n#else\r\n    vec3 indirectDiffuse = cubeColor4.xyz;\r\n\r\n#ifdef GAMMA_INPUT\r\n    indirectDiffuse.xyz *= indirectDiffuse.xyz;\r\n#endif\r\n#endif\r\n\r\n    return indirectDiffuse;\r\n}\r\n";

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "#ifdef USE_VERTEX_ID\r\nattribute vec3 id;\r\nvarying   vec3 vId;\r\n#endif\r\n";

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\r\n#ifdef USE_VERTEX_ID\r\nvId = id;\r\n#endif\r\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "#if defined(MRT_NORMALS) || defined(MRT_ID_BUFFER)\r\nvarying highp float depth;\r\n#define gl_FragColor gl_FragData[0]\r\n#endif\r\n#if defined(MRT_ID_BUFFER) || defined(ID_COLOR)\r\n#ifdef USE_VERTEX_ID\r\nvarying vec3 vId;\r\n#else\r\nuniform vec3 dbId;\r\n#endif\r\n#endif\r\n#if defined(MRT_ID_BUFFER) || defined(MODEL_COLOR)\r\nuniform vec3 modelId;\r\n#endif\r\n";

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n#if defined(USE_VERTEX_ID) && (defined(MRT_ID_BUFFER) || defined(ID_COLOR))\r\n\r\nvec3 dbId = vId;\r\n#endif\r\n\r\n#ifdef MRT_ID_BUFFER\r\n\r\n\r\n\r\n#ifdef MRT_NORMALS\r\nconst int index = 2;\r\n#else\r\nconst int index = 1;\r\n#endif\r\n\r\n\r\n\r\n#ifndef ENABLE_ID_DISCARD\r\nconst float writeId = 1.0;\r\n#endif\r\n\r\ngl_FragData[index] = vec4(dbId.rgb, writeId);\r\n#ifdef MODEL_COLOR\r\ngl_FragData[index+1] = vec4(modelId.rgb, writeId);\r\n#endif\r\n#elif defined(ID_COLOR)\r\n\r\n\r\n\r\n\r\n#ifdef ENABLE_ID_DISCARD\r\nif (writeId==0.0) {\r\n    discard;\r\n}\r\n#endif\r\n\r\ngl_FragColor = vec4(dbId.rgb, 1.0);\r\n#elif defined(MODEL_COLOR)\r\n\r\n\r\n#ifdef ENABLE_ID_DISCARD\r\nif (writeId==0.0) {\r\n    discard;\r\n}\r\n#endif\r\n\r\n\r\n\r\n\r\ngl_FragColor = vec4(modelId.rgb, 1.0);\r\n#endif\r\n";

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "#ifdef HATCH_PATTERN\r\ngl_FragColor = calculateHatchPattern(hatchParams, gl_FragCoord.xy, gl_FragColor, hatchTintColor, hatchTintIntensity);\r\n#endif\r\n\r\n#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\r\ngl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\r\n#endif\r\n\r\n#ifdef MRT_NORMALS\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ngl_FragData[1] = vec4(geomNormal.x, geomNormal.y, depth, gl_FragColor.a < 1.0 ? 0.0 : 1.0);\r\n#endif\r\n#include<id_frag>\r\n";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "uniform vec4 themingColor;\r\n";

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "gl_FragColor.rgb = mix(gl_FragColor.rgb, themingColor.rgb, themingColor.a);\r\n";

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#ifdef USE_INSTANCING\r\nattribute vec3 instOffset;\r\nattribute vec4 instRotation;\r\nattribute vec3 instScaling;\r\n\r\n\r\n\r\nvec3 applyQuaternion(vec3 p, vec4 q) {\r\n    return p + 2.0 * cross(q.xyz, cross(q.xyz, p) + q.w * p);\r\n}\r\n\r\nvec3 getInstancePos(vec3 pos) {\r\n\r\n\r\n\r\n    return instOffset + applyQuaternion(instScaling * pos, instRotation);\r\n}\r\n\r\n\r\n\r\nvec3 getInstanceNormal(vec3 normal) {\r\n\r\n\r\n    return applyQuaternion(normal/instScaling, instRotation);\r\n}\r\n#else\r\n\r\nvec3 getInstancePos(vec3 pos)       { return pos;    }\r\nvec3 getInstanceNormal(vec3 normal) { return normal; }\r\n#endif\r\n";

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\nuniform float shadowESMConstant;\r\nuniform float shadowMapRangeMin;\r\nuniform float shadowMapRangeSize;\r\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\r\n#ifdef USE_SHADOWMAP\r\nvarying vec4 vShadowCoord;\r\nuniform mat4 shadowMatrix;\r\n#endif\r\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n\r\n\r\n\r\n#ifdef USE_SHADOWMAP\r\n{\r\n    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n    vShadowCoord = shadowMatrix * worldPosition;\r\n}\r\n#endif\r\n";

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n#ifdef USE_SHADOWMAP\r\nuniform sampler2D shadowMap;\r\nuniform vec2      shadowMapSize;\r\nuniform float     shadowDarkness;\r\nuniform float     shadowBias;\r\nuniform vec3      shadowLightDir;\r\n\r\nvarying vec4 vShadowCoord;\r\n#include<shadowmap_decl_common>\r\n\r\n\r\n\r\n\r\n\r\nfloat getShadowValue() {\r\n\r\n    float fDepth;\r\n    vec3 shadowColor = vec3( 1.0 );\r\n\r\n\r\n    vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w;\r\n\r\n\r\n\r\n\r\n    shadowCoord.xyz = 0.5 * (shadowCoord.xyz + vec3(1.0, 1.0, 1.0));\r\n\r\n\r\n\r\n    bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\r\n    bool inFrustum = all( inFrustumVec );\r\n\r\n\r\n    float shadowValue = 1.0;\r\n\r\n\r\n    if (inFrustum) {\r\n\r\n\r\n\r\n\r\n        shadowCoord.z = min(0.999, shadowCoord.z);\r\n\r\n\r\n        shadowCoord.z -= shadowBias;\r\n\r\n\r\n#ifdef USE_HARD_SHADOWS\r\n\r\n        vec4 rgbaDepth = texture2D( shadowMap, shadowCoord.xy );\r\n        float fDepth = rgbaDepth.r;\r\n\r\n        if ( fDepth < shadowCoord.z ) {\r\n            shadowValue = 1.0 - shadowDarkness;\r\n        }\r\n#else\r\n\r\n\r\n\r\n        vec4 rgbaDepth = texture2D( shadowMap, shadowCoord.xy );\r\n        float shadowMapValue = rgbaDepth.r;\r\n\r\n\r\n\r\n        shadowValue = exp(-shadowESMConstant * shadowCoord.z) * shadowMapValue;\r\n\r\n\r\n\r\n\r\n        shadowValue = min(shadowValue, 1.0);\r\n\r\n\r\n        shadowValue = mix(1.0 - shadowDarkness, 1.0, shadowValue);\r\n#endif\r\n    }\r\n    return shadowValue;\r\n}\r\n#else\r\nfloat getShadowValue() { return 1.0; }\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvec3 applyEnvShadow(vec3 colorWithoutShadow, vec3 worldNormal) {\r\n\r\n\r\n#if defined(USE_SHADOWMAP)\r\n\r\n\r\n    float dp  = dot(shadowLightDir, worldNormal);\r\n\r\n\r\n    float dpValue = (dp + 1.0) / 2.0;\r\n    dpValue = min(1.0, dpValue * 1.5);\r\n\r\n\r\n\r\n    float sv = getShadowValue();\r\n\r\n\r\n\r\n\r\n\r\n    vec3 result = colorWithoutShadow * min(sv, dpValue);\r\n\r\n    return result;\r\n\r\n#else\r\n\r\n    return colorWithoutShadow;\r\n#endif\r\n}\r\n";

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "float averageOfFloat3(in vec3 value) { \r\n    const float oneThird = 1.0 / 3.0; \r\n    return dot(value, vec3(oneThird, oneThird, oneThird)); \r\n} \r\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\r\n#define TAU     6.28318530718\r\n#define PI      3.14159265358979\r\n#define HALF_PI 1.57079632679\r\n#define PI_0_5  HALF_PI\r\n#define PI_1_5  4.71238898038\r\n\r\n#define ENABLE_ID_DISCARD\r\n\r\n\r\n#define VBB_GT_TRIANGLE_INDEXED  0.0\r\n#define VBB_GT_LINE_SEGMENT      1.0\r\n#define VBB_GT_ARC_CIRCULAR      2.0\r\n#define VBB_GT_ARC_ELLIPTICAL    3.0\r\n#define VBB_GT_TEX_QUAD          4.0\r\n#define VBB_GT_ONE_TRIANGLE      5.0\r\n\r\n\r\n#define VBB_INSTANCED_FLAG   0.0\r\n#define VBB_SEG_START_RIGHT  0.0\r\n#define VBB_SEG_START_LEFT   1.0\r\n#define VBB_SEG_END_RIGHT    2.0\r\n#define VBB_SEG_END_LEFT     3.0\r\n\r\n\r\nvarying vec4 fsColor;\r\nvarying vec4 dbId;\r\nvarying vec2 fsOffsetDirection;\r\nvarying vec4 fsMultipurpose;\r\n\r\nvarying float fsHalfWidth;\r\nvarying vec2 fsVpTC;\r\nvarying float fsGhosting;\r\n";

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n#if defined( PRISMWOOD )\n\n#if defined( USE_WOOD_CURLY_DISTORTION_MAP )\n\nfloat SampleCurlyPattern(vec2 _0) {\n  vec2 _1 = (wood_curly_distortion_map_texMatrix * vec3(_0, 1.0)).xy;\n  WOOD_CURLY_DISTORTION_CLAMP_TEST;\n  vec3 _2 = texture2D(wood_curly_distortion_map, _1).xyz;\n  if(wood_curly_distortion_map_invert)\n    _2 = vec3(1.0) - _2;\n  return _2.r;\n}\nvec3 DistortCurly(vec3 _3) {\n  if(!wood_curly_distortion_enable)\n    return _3;\n  float _4 = length(_3.xy);\n  if(_4 < 0.00001)\n    return _3;\n  const float _5 = 1.27323954;\n  const float _6 = 8.0;\n  const float _7 = 6.283185308;\n  float _8 = atan(_3.y, _3.x);\n  if(_8 < 0.0)\n    _8 += _7;\n  float _9 = _8 * _5;\n  int _a = int(mod(floor(_9), _6));\n  int _b = int(mod(ceil(_9), _6));\n  const vec4 _c = vec4(0.450572, 0.114598, 0.886043, 0.315119);\n  const vec4 _d = vec4(0.216133, 0.306264, 0.685616, 0.317907);\n  float _e = _a < 4 ? GetIndexedValue(_c, _a) : GetIndexedValue(_d, _a - 4);\n  float _f = _b < 4 ? GetIndexedValue(_c, _b) : GetIndexedValue(_d, _b - 4);\n  const float _g = 100.0;\n  _e = (_e - 0.5) * _g;\n  _f = (_f - 0.5) * _g;\n  vec2 _h = vec2(_3.z + _e, _4);\n  float _i = SampleCurlyPattern(_h);\n  vec2 _j = vec2(_3.z + _f, _4);\n  float _k = SampleCurlyPattern(_j);\n  float _l = fract(_9);\n  float _m = mix(_i, _k, _l);\n  const float _n = 2.0;\n  float _o = smoothstep(0.0, 1.0, _4 * _n);\n  _4 -= wood_curly_distortion_scale * (_m * _o);\n  float _p = atan(_3.y, _3.x);\n  vec3 _q = _3;\n  _q.x = _4 * cos(_p);\n  _q.y = _4 * sin(_p);\n  return _q;\n}\n#endif\n\nfloat GetIndexedValue(vec4 _r, int _s) {\n  if(_s == 0)\n    return _r[0];\n  else if(_s == 1)\n    return _r[1];\n  else if(_s == 2)\n    return _r[2];\n  else if(_s == 3)\n    return _r[3];\n  else\n    return 0.0;\n  \n  \n  \n  \n}\nint GetIndexedValue(ivec2 _r, int _s) {\n  if(_s == 0)\n    return _r[0];\n  else if(_s == 1)\n    return _r[1];\n  else\n    return 0;\n  \n  \n}\nvec3 un2sn(vec3 _t) {\n  return _t * 2.0 - 1.0;\n}\nfloat inoise(vec3 _3) {\n  vec3 _u = mod(floor(_3), 256.0);\n  _u.xy = _u.xy * ONE;\n  vec4 _v = texture2D(perm2DMap, vec2(_u.x, _u.y), 0.0) * 255.0;\n  _v = _v + _u.z;\n  _v = mod(floor(_v), 256.0);\n  _v *= ONE;\n  vec3 _10 = un2sn(texture2D(permGradMap, vec2(_v.x, 0.0), 0.0).xyz);\n  vec3 _11 = un2sn(texture2D(permGradMap, vec2(_v.y, 0.0), 0.0).xyz);\n  vec3 _12 = un2sn(texture2D(permGradMap, vec2(_v.z, 0.0), 0.0).xyz);\n  vec3 _13 = un2sn(texture2D(permGradMap, vec2(_v.w, 0.0), 0.0).xyz);\n  vec3 _14 = un2sn(texture2D(permGradMap, vec2(_v.x + ONE, 0.0), 0.0).xyz);\n  vec3 _15 = un2sn(texture2D(permGradMap, vec2(_v.y + ONE, 0.0), 0.0).xyz);\n  vec3 _16 = un2sn(texture2D(permGradMap, vec2(_v.z + ONE, 0.0), 0.0).xyz);\n  vec3 _17 = un2sn(texture2D(permGradMap, vec2(_v.w + ONE, 0.0), 0.0).xyz);\n  _3 -= floor(_3);\n  vec3 _18 = _3 * _3 * _3 * (_3 * (_3 * 6.0 - 15.0) + 10.0);\n  return mix(mix(mix(dot(_10, _3), dot(_12, _3 + vec3(-1.0, 0.0, 0.0)), _18.x), mix(dot(_11, _3 + vec3(0.0, -1.0, 0.0)), dot(_13, _3 + vec3(-1.0, -1.0, 0.0)), _18.x), _18.y), mix(mix(dot(_14, _3 + vec3(0.0, 0.0, -1.0)), dot(_16, _3 + vec3(-1.0, 0.0, -1.0)), _18.x), mix(dot(_15, _3 + vec3(0.0, -1.0, -1.0)), dot(_17, _3 + vec3(-1.0, -1.0, -1.0)), _18.x), _18.y), _18.z);\n}\nfloat inoise(float _3) {\n  float _u = mod(floor(_3), 256.0);\n  _u = (_u + 256.0) * ONE;\n  float _19 = texture2D(permutationMap, vec2(_u, 0.0), 0.0).r;\n  float _1a = texture2D(gradientMap, vec2(_19, 0.0), 0.0).r * 2.0 - 1.0;\n  float _1b = texture2D(permutationMap, vec2(_u + ONE, 0.0), 0.0).r;\n  float _1c = texture2D(gradientMap, vec2(_1b, 0.0), 0.0).r * 2.0 - 1.0;\n  _3 -= floor(_3);\n  float _18 = _3 * _3 * _3 * (_3 * (_3 * 6.0 - 15.0) + 10.0);\n  return mix(_1a * _3, _1c * (_3 - 1.0), _18);\n}\nfloat multiband_inoise(vec3 _3, int _1d, vec4 _1e, vec4 _1f) {\n  float _1g = 0.0;\n  for(int _1h = 0; _1h < 4; ++_1h) {\n    if(_1h >= _1d)\n      break;\n    _1g += GetIndexedValue(_1e, _1h) * inoise(_3 * GetIndexedValue(_1f, _1h));\n  }\n  return _1g;\n}\nfloat multiband_inoise(float _3, int _1d, vec4 _1e, vec4 _1f) {\n  float _1g = 0.0;\n  for(int _1h = 0; _1h < 4; ++_1h) {\n    if(_1h >= _1d)\n      break;\n    _1g += GetIndexedValue(_1e, _1h) * inoise(_3 * GetIndexedValue(_1f, _1h));\n  }\n  return _1g;\n}\nvec3 Distort3DCosineRadialDir(vec3 _3) {\n  float _1i = length(_3.xy);\n  if(_1i < 0.00001)\n    return _3;\n  vec2 _8 = _3.xy / _1i;\n  float _1j = 0.0;\n  for(int _1h = 0; _1h < 4; ++_1h) {\n    if(_1h >= wood_fiber_cosine_bands)\n      break;\n    _1j += GetIndexedValue(wood_fiber_cosine_weights, _1h) * cos(_3.z * RECIPROCAL_2PI * GetIndexedValue(wood_fiber_cosine_frequencies, _1h));\n  }\n  const float _1k = 1.5;\n  float _1l = clamp(_1i / _1k, 0.0, 1.0);\n  if(_1l >= 0.5)\n    _1l = _1l * _1l * (3.0 - (_1l + _1l));\n  _3.xy += _8 * _1j * _1l;\n  return _3;\n}\nvec3 Distort3DPerlin(vec3 _3) {\n  vec3 _1m = vec3(_3.xy, _3.z * wood_fiber_perlin_scale_z);\n  _3.xy += multiband_inoise(_1m, wood_fiber_perlin_bands, wood_fiber_perlin_weights, wood_fiber_perlin_frequencies);\n  return _3;\n}\nvec3 Distort(vec3 _3) {\n  if(wood_fiber_cosine_enable)\n    _3 = Distort3DCosineRadialDir(_3);\n  if(wood_fiber_perlin_enable)\n    _3 = Distort3DPerlin(_3);\n  return _3;\n}\nfloat DistortRadiusLength(float _1n) {\n  _1n += multiband_inoise(_1n, wood_growth_perlin_bands, wood_growth_perlin_weights, wood_growth_perlin_frequencies);\n  if(_1n < 0.0)\n    _1n = 0.0;\n  return _1n;\n}\nfloat ComputeEarlyWoodRatio(float _1n) {\n  float _1o = mod(_1n, wood_ring_thickness) / wood_ring_thickness;\n  if(_1o <= wood_ring_fraction.y)\n    return 1.0;\n  else if(_1o <= wood_ring_fraction.x)\n    return (1.0 - (_1o - wood_ring_fraction.y) / wood_fall_rise.x);\n  else if(_1o <= wood_ring_fraction.w)\n    return 0.0;\n  else\n    return ((_1o - wood_ring_fraction.w) / wood_fall_rise.y);\n  \n  \n  \n}\nvec3 DistortEarlyColor(vec3 _1p, float _1n) {\n  float _1q = 1.0 + multiband_inoise(_1n, wood_earlycolor_perlin_bands, wood_earlycolor_perlin_weights, wood_earlycolor_perlin_frequencies);\n  _1p = pow(abs(_1p), vec3(_1q));\n  return _1p;\n}\nvec3 DistortLateColor(vec3 _1r, float _1n) {\n  float _1q = 1.0 + multiband_inoise(_1n, wood_latecolor_perlin_bands, wood_latecolor_perlin_weights, wood_latecolor_perlin_frequencies);\n  _1r = pow(abs(_1r), vec3(_1q));\n  return _1r;\n}\nvec3 DistortDiffuseColor(vec3 _1s, vec3 _3) {\n  _3.z *= wood_diffuse_perlin_scale_z;\n  float _1q = 1.0 + multiband_inoise(_3, wood_diffuse_perlin_bands, wood_diffuse_perlin_weights, wood_diffuse_perlin_frequencies);\n  _1s = pow(abs(_1s), vec3(_1q));\n  return _1s;\n}\nfloat LayerRoughnessVar(float _1t, float _1u) {\n  return _1u * wood_groove_roughness + (1.0 - _1u) * _1t;\n}\nfloat hashword(vec2 _1v) {\n  _1v = mod(_1v, vec2(256.0)) * ONE;\n  float _20 = texture2D(permutationMap, vec2(_1v.x, 0.0)).x + _1v.y;\n  _20 = texture2D(permutationMap, vec2(_20, 0.0)).x;\n  return _20 * 255.0;\n}\nfloat wyvillsq(float _21) {\n  if(_21 >= 1.0)\n    return 0.0;\n  float _22 = 1.0 - _21;\n  return _22 * _22 * _22;\n}\nfloat Weight2DNeighborImpulses(vec3 _3, float _23) {\n  if(_23 <= 0.0)\n    return 0.0;\n  float _24 = wood_pore_radius * _23;\n  vec2 _25 = floor((_3.xy - _24) / wood_pore_cell_dim);\n  vec2 _26 = floor((_3.xy + _24) / wood_pore_cell_dim);\n  float _1l = 0.0;\n  float _27 = 1.0 / (_24 * _24);\n  const float _28 = 1.0 / 15.0;\n  for(int _29 = 0; _29 <= 4; _29++) {\n    if(_29 > int(_26.y - _25.y))\n      continue;\n    for(int _1h = 0; _1h <= 4; _1h++) {\n      if(_1h > int(_26.x - _25.x))\n        continue;\n      vec2 _2a = vec2(float(_1h) + _25.x, float(_29) + _25.y);\n      float _2b = hashword(_2a);\n      float _2c = mod(_2b, 16.0) * _28;\n      float _2d = floor(_2b / 16.0) * _28;\n      _2c = (_2a.x + _2c) * wood_pore_cell_dim;\n      _2d = (_2a.y + _2d) * wood_pore_cell_dim;\n      float _2e = (_3.x - _2c) * (_3.x - _2c) + (_3.y - _2d) * (_3.y - _2d);\n      _1l += wyvillsq(_2e * _27);\n    }\n  }\n  return _1l;\n}\nfloat Weight3DRayImpulses(vec3 _3) {\n  int _2f = int(floor(_3.z / wood_ray_seg_length_z));\n  float _2g = _3.z / wood_ray_seg_length_z - float(_2f);\n  int _2h = _2f - 1;\n  if(_2g > 0.5)\n    _2h = _2f + 1;\n  float _8 = atan(_3.y, _3.x);\n  float _2i = floor(((_8 + PI) * RECIPROCAL_2PI) * wood_ray_num_slices);\n  if(_2i == wood_ray_num_slices)\n    _2i -= 1.0;\n  ivec2 _2j = ivec2(_2f, _2h);\n  float _1l = 0.0;\n  const float _28 = 1.0 / 15.0;\n  float _2k = 5.0;\n  float _2l = length(_3.xy);\n  for(int _2m = 0; _2m < 2; _2m++) {\n    float _2b = hashword(vec2(_2i, GetIndexedValue(_2j, _2m)));\n    float _2n = mod(_2b, 16.0) * _28;\n    if(_2l < _2k * _2n)\n      continue;\n    float _2o = _2n;\n    _2o = ((_2i + _2o) / wood_ray_num_slices) * (2.0 * PI) - PI;\n    float _2p = (_2b / 16.0) * _28;\n    _2p = (float(GetIndexedValue(_2j, _2m)) + _2p) * wood_ray_seg_length_z;\n    vec3 _2q = vec3(0.0);\n    vec3 _2r = vec3(cos(_2o), sin(_2o), 0.0);\n    vec3 _2s = _3;\n    _2s.z -= _2p;\n    _2s.z /= wood_ray_ellipse_z2x;\n    vec3 _2t = _2r - _2q;\n    vec3 _2u = _2q - _2s;\n    _2u = cross(_2t, _2u);\n    float _2v = length(_2u) / length(_2t);\n    float _27 = 1.0 / (wood_ray_ellipse_radius_x * wood_ray_ellipse_radius_x);\n    _1l += wyvillsq((_2v * _2v) * _27);\n  }\n  return _1l;\n}\nvec3 DarkenColorWithPores(vec3 _3, vec3 _30, float _23) {\n  float _31 = Weight2DNeighborImpulses(_3, _23);\n  float _20 = wood_pore_color_power - 1.0;\n  float _32 = 1.0;\n  float _33 = _20 * _31 + _32;\n  return pow(abs(_30), vec3(_33));\n}\nvec3 DarkenColorWithRays(vec3 _3, vec3 _30) {\n  float _34 = Weight3DRayImpulses(_3);\n  float _20 = wood_ray_color_power - 1.0;\n  float _32 = 1.0;\n  float _33 = _20 * _34 + _32;\n  return pow(abs(_30), vec3(_33));\n}\nfloat ComputeWoodWeight(float _1u) {\n  float _23 = 0.0;\n  if(wood_pore_type == 0)\n    _23 = 1.0;\n  else if(wood_pore_type == 1)\n    _23 = _1u;\n  else if(wood_pore_type == 2)\n    _23 = 1.0 - _1u;\n  else\n    _23 = -1.0;\n  \n  \n  return _23;\n}\n#if defined( PRISMWOODBUMP )\n\nfloat ComputeEarlyWoodRatioAA(float _1n, float _35) {\n  float _36 = min(wood_fall_rise.x, wood_fall_rise.y) * wood_ring_thickness * _35;\n  float _37 = clamp(4.0 / _36, 1.0, 4.0);\n  int _38 = int(_37);\n  float _39 = 1.0 / float(_38);\n  vec2 _3a = vec2(dFdx(_1n), dFdy(_1n)) * _39;\n  float _3b = 0.0;\n  for(int _1h = 0; _1h < 4; ++_1h) {\n    if(_1h >= _38)\n      break;\n    for(int _29 = 0; _29 < 4; ++_29) {\n      if(_29 >= _38)\n        break;\n      float _4 = _1n + dot(vec2(_1h, _29), _3a);\n      _3b += ComputeEarlyWoodRatio(_4);\n    }\n  }\n  return _3b * (_39 * _39);\n}\nfloat LatewoodDepthVariation(float _35) {\n  float _36 = min(wood_fall_rise.x, wood_fall_rise.y) * wood_ring_thickness * _35;\n  return clamp(_36 * 0.5, 0.0, 1.0);\n}\nfloat LatewoodHeightVariation(float _1u, float _3c, float _3d) {\n  return (1.0 - _1u) * _3c * _3d;\n}\nfloat PoreDepthVariation(float _23, float _35) {\n  float _3e = _23 * wood_pore_radius * _35;\n  return clamp(_3e, 0.0, 1.0);\n}\nfloat PoreHeightVariation(float _1u, float _31, float _3f, float _3d) {\n  return _31 * (-1.0 * _3f) * _3d;\n}\nvoid ComputeTangents(vec3 _3g, out vec3 _3h, out vec3 _3i) {\n  float _3j = _3g.z < 0.0 ? -1.0 : 1.0;\n  vec3 _3k = _3j * _3g;\n  float _3l = _3k.z;\n  float _3m = 1.0 / (1.0 + _3l);\n  float _3n = _3m * _3k.y;\n  float _3o = _3n * -_3k.x;\n  _3h = vec3(_3l + _3n * _3k.y, _3o, -_3k.x);\n  _3i = vec3(_3o, _3l + _3m * _3k.x * _3k.x, -_3k.y);\n  _3h *= _3j;\n  _3i *= _3j;\n}\nvec3 WoodBumpHeight(float _3p, float _3q, float _3r, float _3s) {\n  const float _3t = 0.001;\n  float _3u = _3q - _3p;\n  vec3 _3v = vec3(2.0 * _3t, 0.0, _3u);\n  float _40 = _3s - _3r;\n  vec3 _41 = vec3(0.0, 2.0 * _3t, _40);\n  return cross(_3v, _41);\n}\nvec3 SelectNormal(vec3 _42, vec3 _43, vec3 _44) {\n  float _45 = dot(_43, _44);\n  if(_45 > 0.0)\n    return _43;\n  else\n    return _42;\n  \n}\nfloat MinInverseUnitExtent(vec3 _3) {\n  return 1.0 / max(max(length(dFdx(_3.xy)), length(dFdy(_3.xy))), 0.000001);\n}\nfloat HeightVariation(vec3 _46) {\n  vec3 _3 = Distort(_46);\n  float _1n = length(_3.xy);\n  if(wood_growth_perlin_enable)\n    _1n = DistortRadiusLength(_1n);\n  float _35 = MinInverseUnitExtent(_3);\n  float _1u = ComputeEarlyWoodRatioAA(_1n, _35);\n  float _23 = ComputeWoodWeight(_1u);\n  float _31 = Weight2DNeighborImpulses(_3, _23);\n  float _3d = PoreDepthVariation(_23, _35);\n  float _47 = -1.0 * _31 * wood_pore_depth * _3d;\n  float _48 = 0.0;\n  if(wood_use_latewood_bump) {\n    float _49 = LatewoodDepthVariation(_35);\n    _48 = (1.0 - _1u) * wood_latewood_bump_depth * _49;\n  }\n  float _4a = _47 + _48;\n  return _4a;\n}\n#endif\n\nvec3 NoiseWood(vec3 _3, inout float _1t) {\n  _3 = Distort(_3);\n  float _1n = length(_3.xy);\n  if(wood_growth_perlin_enable)\n    _1n = DistortRadiusLength(_1n);\n  \n#if defined( PRISMWOODBUMP )\nfloat _35 = MinInverseUnitExtent(_3);\n  float _1u = ComputeEarlyWoodRatioAA(_1n, _35);\n#else\nfloat _1u = ComputeEarlyWoodRatio(_1n);\n#endif\nvec3 _1p = wood_early_color;\n  if(wood_earlycolor_perlin_enable)\n    _1p = DistortEarlyColor(_1p, _1n);\n  vec3 _1r;\n  if(wood_use_manual_late_color)\n    _1r = wood_manual_late_color;\n  else\n    _1r = pow(abs(_1p), vec3(wood_late_color_power));\n  if(wood_latecolor_perlin_enable)\n    _1r = DistortLateColor(_1r, _1n);\n  vec3 _1s = _1u * _1p + (1.0 - _1u) * _1r;\n  if(wood_diffuse_perlin_enable)\n    _1s = DistortDiffuseColor(_1s, _3);\n  if(wood_use_pores) {\n    float _23 = ComputeWoodWeight(_1u);\n    _1s = DarkenColorWithPores(_3, _1s, _23);\n  }\n  if(wood_use_rays)\n    _1s = DarkenColorWithRays(_3, _1s);\n  if(wood_use_groove_roughness)\n    _1t = LayerRoughnessVar(_1t, _1u);\n  return clamp(_1s, vec3(0.0), vec3(1.0));\n}\n#endif\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "uniform float point_size;";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "gl_PointSize = point_size;";

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n#ifdef WIDE_LINES\r\n\r\n\r\nattribute vec3 prev;\r\nattribute vec3 next;\r\nattribute float side;\r\n\r\n\r\nuniform vec2 view_size;\r\n\r\n\r\nvec2 to2d(vec4 i) {\r\n  return i.xy / i.w;\r\n}\r\n\r\n#endif\r\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n#ifdef WIDE_LINES\r\n\r\n\r\nvec4 mvpPosition = projectionMatrix * mvPosition; \r\n\r\n\r\nmat4 mmm = projectionMatrix * modelViewMatrix;\r\nvec2 _pos = to2d(mvpPosition);\r\nvec2 _prev = to2d(mmm * vec4(prev, 1.0));\r\nvec2 _next = to2d(mmm * vec4(next, 1.0));\r\n\r\n\r\nvec2 dir1 = normalize(_pos - _next);\r\nvec2 dir2 = normalize(_prev - _pos);\r\nvec2 dir = normalize(dir1 + dir2);\r\n\r\n\r\nvec2 offset = vec2(-dir.y, dir.x);\r\n\r\nfloat len = 1.0 / cross(vec3(offset, 0), vec3(dir1, 0)).z;\r\n\r\n\r\nlen = clamp(len, -5.0, 5.0);\r\n\r\n\r\noffset *= len;\r\n\r\noffset /= view_size;\r\n\r\noffset *= side;\r\n\r\n\r\nmvpPosition.xy += offset;\r\n\r\ngl_Position = mvpPosition;\r\n\r\n#endif\r\n";

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "#include<id_decl_vert>\r\n#include<decl_point_size>\r\n\r\n#include<common>\r\n#include<map_pars_vertex>\r\n#include<lightmap_pars_vertex>\r\n#include<envmap_pars_vertex>\r\n#include<color_pars_vertex>\r\n#include<morphtarget_pars_vertex>\r\n#include<skinning_pars_vertex>\r\n#include<logdepthbuf_pars_vertex>\r\n#include<wide_lines_decl>\r\n\r\n#if NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n\r\nvoid main() {\r\n\r\n#include<map_vertex>\r\n#include<lightmap_vertex>\r\n#include<color_vertex>\r\n#include<skinbase_vertex>\r\n\r\n#ifdef USE_ENVMAP\r\n\r\n#include<morphnormal_vertex>\r\n#include<skinnormal_vertex>\r\n#include<defaultnormal_vertex>\r\n\r\n#endif\r\n\r\n#include<morphtarget_vertex>\r\n#include<skinning_vertex>\r\n#include<default_vertex>\r\n#include<wide_lines_vert>\r\n#include<logdepthbuf_vertex>\r\n\r\n#include<worldpos_vertex>\r\n\r\n#if NUM_CUTPLANES > 0\r\n    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n    vWorldPosition = worldPosition.xyz;\r\n#endif\r\n\r\n#include<envmap_vertex>\r\n\r\n#include<id_vert>\r\n#include<point_size>\r\n}\r\n";

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\n#include<common>\r\n#include<color_pars_fragment>\r\n#include<map_pars_fragment>\r\n#include<alphamap_pars_fragment>\r\n#include<lightmap_pars_fragment>\r\n#include<envmap_pars_fragment>\r\n#include<fog_pars_fragment>\r\n#include<specularmap_pars_fragment>\r\n#include<logdepthbuf_pars_fragment>\r\n\r\n#if NUM_CUTPLANES > 0\r\nvarying highp vec3 vWorldPosition;\r\n#endif\r\n\r\n#include<cutplanes>\r\n#include<id_decl_frag>\r\n#include<theming_decl_frag>\r\n\r\nvoid main() {\r\n\r\n#if NUM_CUTPLANES > 0\r\n    checkCutPlanes(vWorldPosition);\r\n#endif\r\n\r\n    vec3 outgoingLight = vec3( 0.0 );\r\n    vec4 diffuseColor = vec4( diffuse, opacity );\r\n\r\n#include<logdepthbuf_fragment>\r\n#include<map_fragment>\r\n#include<color_fragment>\r\n#include<alphamap_fragment>\r\n#include<alphatest_fragment>\r\n#include<specularmap_fragment>\r\n\r\n    outgoingLight = diffuseColor.rgb;\r\n\r\n#include<lightmap_fragment>\r\n#include<envmap_fragment>\r\n\r\n#include<linear_to_gamma_fragment>\r\n\r\n#include<fog_fragment>\r\n\r\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n#include<theming_frag>\r\n\r\n#include<final_frag>\r\n}\r\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');


	var BlendShader = {

	        uniforms: {
	                "tDiffuse": { type: "t", value: null }, //Color buffer containing the rendered 3d model

	                "tAO": { type: "t", value: null }, //Ambient occlusion + depth buffer
	                "useAO": { type: "i", value: 0 }, //Whether to blend in the AO buffer

	                "tOverlay": { type: "t", value: null }, //The selection/overlays buffer
	                "useOverlay": { type: "i", value: 0 }, //Whether to blend in the overlays

	                "tID": { type: "t", value: null }, //The ID buffer
	                "objID": { type: "i", value: 0 }, //The currently highlighted object ID (0 means no highlight)
	                "objIDv3": { type: "v3", value: new THREE.Vector3(0, 0, 0) }, //The currently highlighted object ID as RGB triplet
	                "highlightIntensity": { type: "f", value: 1.0 },

	                "resolution": { type: "v2", value: new THREE.Vector2(1 / 1024, 1 / 512) }, // 1/size

	                //Enable these if the forward pass renders in HDR-linear target and the Blend shader is doing the tone mapping
	                //"exposureBias" : { type:"f", value: 1.0 },
	                //"toneMapMethod" : { type:"i", value: 0 }

	                "highlightRange": { type: "i", value: 0 },
	                "objIDStart": { type: "i", value: 0 },
	                "objIDEnd": { type: "i", value: 0 } },


	        vertexShader: __webpack_require__(36),
	        fragmentShader: __webpack_require__(37) };



	module.exports = BlendShader;

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n    vUv = uv;\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDiffuse;\r\nuniform sampler2D tAO;\r\nuniform int useAO;\r\nuniform sampler2D tOverlay;\r\nuniform int useOverlay;\r\nuniform vec2 resolution;\r\n\r\n\r\nuniform int objID;\r\nuniform vec3 objIDv3;\r\nuniform sampler2D tID;\r\nuniform float highlightIntensity;\r\n\r\nuniform int highlightRange;\r\nuniform int objIDStart;\r\nuniform int objIDEnd;\r\n\r\nvarying vec2 vUv;\r\n\r\n#include<tonemap>\r\n\r\n\r\n\r\n\r\nvec4 overlayEdgeDetect(vec2 vUv) {\r\n#define IS_SELECTION(C) ( (C).b > (C).r && (C).b > (C).g )\r\n#define CHECK_EDGE_ALPHA(I, J)     { vec4 c = texture2D( tOverlay, vUv+resolution*vec2((I),(J)) ); maxAlpha = max(maxAlpha, c.a); if (c.a > 0.0 && IS_SELECTION(c)) { hasEdge++; selectionPixel = c; } }\r\n#define CHECK_EDGE_SELECTION(I, J) { vec4 c = texture2D( tOverlay, vUv+resolution*vec2((I),(J)) ); maxAlpha = max(maxAlpha, c.a); if (c.a <= 0.0) hasEdge++; }\r\n\r\n    int hasEdge = 0;\r\n    vec4 center = texture2D(tOverlay, vUv);\r\n    vec4 selectionPixel = vec4(0.0);\r\n    float maxAlpha = 0.0;\r\n    bool paintOutline = false;\r\n\r\n    if (center.a <= 0.0) {\r\n        CHECK_EDGE_ALPHA(-1.0,-1.0);\r\n        CHECK_EDGE_ALPHA( 0.0,-1.0);\r\n        CHECK_EDGE_ALPHA( 1.0,-1.0);\r\n        CHECK_EDGE_ALPHA(-1.0, 0.0);\r\n        CHECK_EDGE_ALPHA( 1.0, 0.0);\r\n        CHECK_EDGE_ALPHA(-1.0, 1.0);\r\n        CHECK_EDGE_ALPHA( 0.0, 1.0);\r\n        CHECK_EDGE_ALPHA( 1.0, 1.0);\r\n        if (hasEdge != 0) {\r\n            center = selectionPixel;\r\n            paintOutline = true;\r\n        }\r\n    }\r\n    else if (center.a > 0.0 && IS_SELECTION(center)) {\r\n        CHECK_EDGE_SELECTION(-1.0,-1.0);\r\n        CHECK_EDGE_SELECTION( 0.0,-1.0);\r\n        CHECK_EDGE_SELECTION( 1.0,-1.0);\r\n        CHECK_EDGE_SELECTION(-1.0, 0.0);\r\n        CHECK_EDGE_SELECTION( 1.0, 0.0);\r\n        CHECK_EDGE_SELECTION(-1.0, 1.0);\r\n        CHECK_EDGE_SELECTION( 0.0, 1.0);\r\n        CHECK_EDGE_SELECTION( 1.0, 1.0);\r\n        if (hasEdge != 0)\r\n            paintOutline = true;\r\n        else\r\n            center.a = -center.a;\r\n    }\r\n\r\n\r\n    if (paintOutline) {\r\n        float maxComponent = max(center.r, max(center.g, center.b));\r\n        center.rgb /= maxComponent;\r\n        center.rgb = sqrt(center.rgb);\r\n        center.a = 0.5 + 0.5 * maxAlpha * 0.125 * float(hasEdge);\r\n    }\r\n\r\n    return center;\r\n}\r\n\r\nvec4 sampleColor() {\r\n    return texture2D( tDiffuse, vUv );\r\n}\r\n\r\nfloat sampleAO() {\r\n\r\n    return (useAO != 0) ? sqrt(texture2D(tAO, vUv).r) : 1.0;\r\n}\r\n\r\nvoid main() {\r\n\r\n    vec4 texel = sampleColor();\r\n\r\n\r\n\r\n\r\n\r\n    texel.rgb *= sampleAO();\r\n\r\n\r\n    if (useOverlay != 0) {\r\n        vec4 overlay = overlayEdgeDetect(vUv);\r\n\r\n        if (overlay.a < 0.0) {\r\n            overlay.a = -overlay.a;\r\n\r\n            if (overlay.a >= 0.99) {\r\n\r\n\r\n                overlay.a = 0.75;\r\n                texel.rgb = vec3(luminance_post(texel.rgb));\r\n            }\r\n        }\r\n\r\n        texel.rgb = mix(texel.rgb, sqrt(overlay.rgb), overlay.a);\r\n    }\r\n\r\n    if (highlightRange == 0) {\r\n        if (objID != 0) {\r\n\r\n            vec4 idAtPixel = texture2D(tID, vUv);\r\n\r\n            vec3 idDelta = abs(idAtPixel.rgb - objIDv3.rgb);\r\n            if (max(max(idDelta.r, idDelta.g), idDelta.b) < 1e-3) {\r\n#ifdef IS_2D\r\n                texel.rgb = mix(texel.rgb, vec3(1.0,1.0,0.0), highlightIntensity * 0.25);\r\n#else\r\n                texel.rgb += highlightIntensity * 0.2;\r\n#endif\r\n            }\r\n\r\n        }\r\n    } else {\r\n        vec4 idAtPixel = texture2D(tID, vUv);\r\n        int dbId = int(idAtPixel.r * 255.0 + idAtPixel.g * 255.0 * 256.0 + idAtPixel.b * 255.0 * 256.0 * 256.0);\r\n        if (dbId >= objIDStart && dbId <= objIDEnd) {\r\n#ifdef IS_2D\r\n            texel.rgb = mix(texel.rgb, vec3(1.0,1.0,0.0), highlightIntensity * 0.25);\r\n#else\r\n            texel.rgb += highlightIntensity * 0.2;\r\n#endif\r\n        }\r\n    }\r\n\r\n    gl_FragColor = texel;\r\n}\r\n";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";



	var CelShader = {

	  uniforms: {

	    "tDiffuse": { type: "t", value: null },
	    "tDepth": { type: "t", value: null },
	    "tID": { type: "t", value: null },
	    "resolution": { type: "v2", value: new THREE.Vector2(1 / 1024, 1 / 512) },
	    "cameraNear": { type: "f", value: 1 },
	    "cameraFar": { type: "f", value: 100 },
	    "projInfo": { type: "v4", value: new THREE.Vector4(0, 0, 0, 0) },
	    "isOrtho": { type: "f", value: 1.0 } },


	  vertexShader: __webpack_require__(39),
	  fragmentShader: __webpack_require__(40) };



	module.exports = CelShader;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n    vUv = uv;\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n";

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tDepth;\r\nuniform sampler2D tID;\r\nuniform vec2 resolution;\r\nuniform float cameraNear;\r\nuniform float cameraFar;\r\n\r\n\r\nuniform float isOrtho;\r\nuniform vec4 projInfo;\r\n\r\nvarying vec2 vUv;\r\n\r\nvec4 recoverNZ(vec4 nrmz) {\r\n    float z = sqrt(1.0 - dot(nrmz.xy, nrmz.xy));\r\n    nrmz.w = -(nrmz.z +cameraNear) / (cameraFar - cameraNear);\r\n    nrmz.z = z;\r\n    return nrmz;\r\n}\r\n\r\n#include<tonemap>\r\n\r\nvec4 quantize(vec4 c) {\r\n    c *= c;\r\n\r\n    float L = max(c.x, max(c.y, c.z));\r\n    c.xyz *= floor(L * 8.0 + 0.5) / (8.0 * L);\r\n    c.w = 1.0;\r\n    return sqrt(c);\r\n}\r\n\r\nvec4 quantizeRGB(vec4 c) {\r\n    c *= c;\r\n    c.xyz *= floor(c.xyz * 8.0 + 0.5) / 8.0;\r\n    c.w = 1.0;\r\n    return sqrt(c);\r\n}\r\n\r\nvec3 reconstructCSPosition(vec2 S, float z) {\r\n    return vec3((S.xy * projInfo.xy + projInfo.zw) * mix(z, -1.0, isOrtho), z);\r\n}\r\n\r\n\r\nvec3 reconstructCSFaceNormal(vec3 C) {\r\n    return normalize(cross(dFdy(C), dFdx(C)));\r\n}\r\n\r\nvec3 getPosition(ivec2 ssP, float depth) {\r\n    vec3 P;\r\n\r\n\r\n    P = reconstructCSPosition(vec2(ssP) + vec2(0.5), depth);\r\n    return P;\r\n}\r\n\r\nint isObjectEdge() {\r\n\r\n    vec4 MM = texture2D(tID, vUv + vec2( 0.0,  0.0));\r\n\r\n    vec4 LL = texture2D(tID, vUv + vec2(-1.0, -1.0) * resolution);\r\n    if (MM != LL) return 1;\r\n\r\n    vec4 LM = texture2D(tID, vUv + vec2( 0.0, -1.0) * resolution);\r\n    if (MM != LM) return 1;\r\n\r\n    vec4 LR = texture2D(tID, vUv + vec2( 1.0, -1.0) * resolution);\r\n    if (MM != LR) return 1;\r\n\r\n    vec4 ML = texture2D(tID, vUv + vec2(-1.0,  0.0) * resolution);\r\n    if (MM != ML) return 1;\r\n\r\n    vec4 MR = texture2D(tID, vUv + vec2( 1.0,  0.0) * resolution);\r\n    if (MM != MR) return 1;\r\n\r\n    vec4 UL = texture2D(tID, vUv + vec2(-1.0,  1.0) * resolution);\r\n    if (MM != UL) return 1;\r\n\r\n    vec4 UM = texture2D(tID, vUv + vec2( 0.0,  1.0) * resolution);\r\n    if (MM != UM) return 1;\r\n\r\n    vec4 UR = texture2D(tID, vUv + vec2( 1.0,  1.0) * resolution);\r\n    if (MM != UR) return 1;\r\n\r\n    return 0;\r\n\r\n}\r\n\r\nfloat normalDiff(vec3 n1, vec3 n2) {\r\n    float d = dot(n1.xyz, n2.xyz);\r\n    return acos(clamp(d, -1.0, 1.0));\r\n}\r\n\r\nconst float r = 1.0;\r\n\r\nvoid main() {\r\n\r\n    vec4 color = texture2D(tDiffuse, vUv);\r\n\r\n    ivec2 ssC = ivec2(gl_FragCoord.xy);\r\n\r\n    if (isObjectEdge() == 1) {\r\n        gl_FragColor = vec4(0,0,0,1);\r\n        return;\r\n    }\r\n\r\n\r\n    vec4 MM = texture2D(tDepth, vUv + vec2( 0.0,  0.0));\r\n\r\n\r\n\r\n    if (MM.z == 0.0) {\r\n        gl_FragColor = quantize(color);\r\n        return;\r\n    }\r\n\r\n    vec4 LL = texture2D(tDepth, vUv + vec2(-r, -r) * resolution);\r\n    vec4 LM = texture2D(tDepth, vUv + vec2( 0.0, -r) * resolution);\r\n    vec4 LR = texture2D(tDepth, vUv + vec2( r, -r) * resolution);\r\n\r\n    vec4 ML = texture2D(tDepth, vUv + vec2(-r,  0.0) * resolution);\r\n    vec4 MR = texture2D(tDepth, vUv + vec2( r,  0.0) * resolution);\r\n\r\n    vec4 UL = texture2D(tDepth, vUv + vec2(-r, r) * resolution);\r\n    vec4 UM = texture2D(tDepth, vUv + vec2( 0.0,  r) * resolution);\r\n    vec4 UR = texture2D(tDepth, vUv + vec2( r,  r) * resolution);\r\n\r\n    vec3 C = getPosition(ssC + ivec2(-1, -1), LL.z);\r\n    vec3 LLz = reconstructCSFaceNormal(C);\r\n    C = getPosition(ssC + ivec2( 0, -1), LM.z);\r\n    vec3 LMz = reconstructCSFaceNormal(C);\r\n    C = getPosition(ssC + ivec2( 1, -1), LR.z);\r\n    vec3 LRz = reconstructCSFaceNormal(C);\r\n\r\n    C = getPosition(ssC + ivec2(-1, 0), ML.z);\r\n    vec3 MLz = reconstructCSFaceNormal(C);\r\n    C = getPosition(ssC + ivec2( 0, 0), MM.z);\r\n    vec3 MMz = reconstructCSFaceNormal(C);\r\n    C = getPosition(ssC + ivec2( 1, 0), MR.z);\r\n    vec3 MRz = reconstructCSFaceNormal(C);\r\n\r\n    C = getPosition(ssC + ivec2(-1, 1), UL.z);\r\n    vec3 ULz = reconstructCSFaceNormal(C);\r\n    C = getPosition(ssC + ivec2(0, 1), UM.z);\r\n    vec3 UMz = reconstructCSFaceNormal(C);\r\n    C = getPosition(ssC + ivec2(1, 1), UR.z);\r\n    vec3 URz = reconstructCSFaceNormal(C);\r\n\r\n\r\n    LL = recoverNZ(LL);\r\n    LM = recoverNZ(LM);\r\n    LR = recoverNZ(LR);\r\n\r\n    ML = recoverNZ(ML);\r\n    MM = recoverNZ(MM);\r\n    MR = recoverNZ(MR);\r\n\r\n    UL = recoverNZ(UL);\r\n    UM = recoverNZ(UM);\r\n    UR = recoverNZ(UR);\r\n\r\n\r\n    float pLL = normalDiff(LL.xyz, MM.xyz);\r\n    float pLM = normalDiff(LM.xyz, MM.xyz);\r\n    float pLR = normalDiff(LR.xyz, MM.xyz);\r\n\r\n    float pML = normalDiff(ML.xyz, MM.xyz);\r\n    float pMM = normalDiff(MM.xyz, MM.xyz);\r\n    float pMR = normalDiff(MR.xyz, MM.xyz);\r\n\r\n    float pUL = normalDiff(UL.xyz, MM.xyz);\r\n    float pUM = normalDiff(UM.xyz, MM.xyz);\r\n    float pUR = normalDiff(UR.xyz, MM.xyz);\r\n\r\n\r\n\r\n\r\n    float pLLz = normalDiff(LLz.xyz, MMz.xyz);\r\n    float pLMz = normalDiff(LMz.xyz, MMz.xyz);\r\n    float pLRz = normalDiff(LRz.xyz, MMz.xyz);\r\n\r\n    float pMLz = normalDiff(MLz.xyz, MMz.xyz);\r\n    float pMMz = normalDiff(MMz.xyz, MMz.xyz);\r\n    float pMRz = normalDiff(MRz.xyz, MMz.xyz);\r\n\r\n    float pULz = normalDiff(ULz.xyz, MMz.xyz);\r\n    float pUMz = normalDiff(UMz.xyz, MMz.xyz);\r\n    float pURz = normalDiff(URz.xyz, MMz.xyz);\r\n\r\n\r\n\r\n\r\n\r\n    float dGx = (dFdx(UL.w) + 2.0 * dFdx(UM.w) + dFdx(UR.w)) - (dFdx(LL.w) + 2.0 * dFdx(LM.w) + dFdx(LR.w)) + (dFdx(UR.w) + 2.0 * dFdx(MR.w) - dFdx(LR.w)) - (dFdx(UL.w) + 2.0 * dFdx(ML.w) - dFdx(LL.w));\r\n    float dGy = (dFdy(UL.w) + 2.0 * dFdy(UM.w) + dFdy(UR.w)) - (dFdy(LL.w) + 2.0 * dFdy(LM.w) + dFdy(LR.w)) + (dFdy(UR.w) + 2.0 * dFdy(MR.w) - dFdy(LR.w)) - (dFdy(UL.w) + 2.0 * dFdy(ML.w) - dFdy(LL.w));\r\n\r\n\r\n    float Gn = (abs(pUL - pMM) + 2.0 * abs(pUM - pMM) + abs(pUR - pMM) + 2.0 * abs(pML - pMM) + 2.0 * abs(pMR - pMM) + abs(pLL - pMM) + 2.0 * abs(pLM - pMM) + abs(pLR - pMM));\r\n    float Gnz = (abs(pULz - pMMz) + 2.0 * abs(pUMz - pMMz) + abs(pURz - pMMz) + 2.0 * abs(pMLz - pMMz) + 2.0 * abs(pMRz - pMMz) + abs(pLLz - pMMz) + 2.0 * abs(pLMz - pMMz) + abs(pLRz - pMMz));\r\n    float G = (abs(UL.w - MM.w) + 2.0 * abs(UM.w - MM.w) + abs(UR.w - MM.w) + 2.0 * abs(ML.w - MM.w) + 2.0 * abs(MR.w - MM.w) + abs(LL.w - MM.w) + 2.0 * abs(LM.w - MM.w) + abs(LR.w - MM.w));\r\n\r\n    float dd = abs(dFdx(G)) + abs(dFdy(G));\r\n\r\n\r\n    if (dd > 0.004 || abs(Gnz) > 2.2 || abs(Gn) > 2.0)\r\n        gl_FragColor = vec4(0.0,0.0,0.0,1.0);\r\n    else\r\n        gl_FragColor =quantize(color);\r\n\r\n}\r\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";


	var CopyShader = {

	    uniforms: {
	        "tDiffuse": { type: "t", value: null } },


	    vertexShader: __webpack_require__(42),
	    fragmentShader: __webpack_require__(43) };



	module.exports = CopyShader;

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n    vUv = uv;\r\n\r\n}\r\n";

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDiffuse;\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n    gl_FragColor = texture2D(tDiffuse, vUv);\r\n\r\n}\r\n";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');






	var FXAAShader = {

	  uniforms: {

	    "tDiffuse": { type: "t", value: null },
	    "uResolution": { type: "v2", value: new THREE.Vector2(1 / 1024, 1 / 512) } },


	  vertexShader: __webpack_require__(45),
	  fragmentShader: __webpack_require__(46) };



	module.exports = FXAAShader;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "uniform vec2 uResolution;\r\nvarying vec2 vPos;\r\nvarying vec4 vPosPos;\r\n\r\nvoid main() {\r\n    vPos = uv;\r\n    vPosPos.xy = uv + vec2(-0.5, -0.5) * uResolution;\r\n    vPosPos.zw = uv + vec2( 0.5,  0.5) * uResolution;\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n}\r\n";

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "#define FXAA_EDGE_SHARPNESS (8.0)\r\n#define FXAA_EDGE_THRESHOLD (0.125)\r\n#define FXAA_EDGE_THRESHOLD_MIN (0.05)\r\n#define FXAA_RCP_FRAME_OPT (0.50)\r\n#define FXAA_RCP_FRAME_OPT2 (2.0)\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform highp vec2 uResolution;\r\nvarying vec2 vPos;\r\nvarying vec4 vPosPos;\r\n\r\nfloat FxaaLuma(vec3 rgb) {\r\n    return dot(rgb, vec3(0.299, 0.587, 0.114));\r\n}\r\n\r\nvoid main() {\r\n    float lumaNw = FxaaLuma(texture2D(tDiffuse, vPosPos.xy).rgb);\r\n    float lumaSw = FxaaLuma(texture2D(tDiffuse, vPosPos.xw).rgb);\r\n    float lumaNe = FxaaLuma(texture2D(tDiffuse, vPosPos.zy).rgb) + 1.0/384.0;\r\n    float lumaSe = FxaaLuma(texture2D(tDiffuse, vPosPos.zw).rgb);\r\n\r\n    vec3 rgbM = texture2D(tDiffuse, vPos.xy).rgb;\r\n    float lumaM = FxaaLuma(rgbM.rgb);\r\n\r\n    float lumaMax = max(max(lumaNe, lumaSe), max(lumaNw, lumaSw));\r\n    float lumaMin = min(min(lumaNe, lumaSe), min(lumaNw, lumaSw));\r\n\r\n    float lumaMaxSubMinM = max(lumaMax, lumaM) - min(lumaMin, lumaM);\r\n    float lumaMaxScaledClamped = max(FXAA_EDGE_THRESHOLD_MIN, lumaMax * FXAA_EDGE_THRESHOLD);\r\n    if (lumaMaxSubMinM < lumaMaxScaledClamped) {\r\n        gl_FragColor = vec4(rgbM, 1.0);\r\n        return;\r\n    }\r\n\r\n    float dirSwMinusNe = lumaSw - lumaNe;\r\n    float dirSeMinusNw = lumaSe - lumaNw;\r\n    vec2 dir1 = normalize(vec2(dirSwMinusNe + dirSeMinusNw, dirSwMinusNe - dirSeMinusNw));\r\n    vec3 rgbN1 = texture2D(tDiffuse, vPos.xy - dir1 * FXAA_RCP_FRAME_OPT*uResolution).rgb;\r\n    vec3 rgbP1 = texture2D(tDiffuse, vPos.xy + dir1 * FXAA_RCP_FRAME_OPT*uResolution).rgb;\r\n\r\n    float dirAbsMinTimesC = min(abs(dir1.x), abs(dir1.y)) * FXAA_EDGE_SHARPNESS;\r\n    vec2 dir2 = clamp(dir1.xy / dirAbsMinTimesC, -2.0, 2.0);\r\n    vec3 rgbN2 = texture2D(tDiffuse, vPos.xy - dir2 * FXAA_RCP_FRAME_OPT2*uResolution).rgb;\r\n    vec3 rgbP2 = texture2D(tDiffuse, vPos.xy + dir2 * FXAA_RCP_FRAME_OPT2*uResolution).rgb;\r\n\r\n    vec3 rgbA = rgbN1 + rgbP1;\r\n    vec3 rgbB = ((rgbN2 + rgbP2) * 0.25) + (rgbA * 0.25);\r\n\r\n    float lumaB = FxaaLuma(rgbB);\r\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\r\n        gl_FragColor = vec4(rgbA * 0.5, 1.0);\r\n    else\r\n        gl_FragColor = vec4(rgbB, 1.0);\r\n}\r\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');

	//Bilateral separable blur pass for SAO shader.
	// Derived from http://g3d.cs.williams.edu/websvn/filedetails.php?repname=g3d&path=%2FG3D10%2Fdata-files%2Fshader%2FAmbientOcclusion%2FAmbientOcclusion_blur.pix

	var SAOBlurShader = {

	    uniforms: {

	        "tDiffuse": { type: "t", value: null },
	        "size": { type: "v2", value: new THREE.Vector2(512, 512) },
	        "resolution": { type: "v2", value: new THREE.Vector2(1.0 / 512, 1.0 / 512) },
	        "axis": { type: "v2", value: new THREE.Vector2(1, 0) },
	        // Width of AO effect in native geometry units (meters or whatever).
	        // Same value as passed into SAOShader.js
	        "radius": { type: "f", value: 50.0 } },


	    vertexShader: __webpack_require__(48),
	    fragmentShader: __webpack_require__(49) };



	module.exports = SAOBlurShader;

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n    vUv = uv;\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n";

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\r\n#define EDGE_SHARPNESS     (3.0)\r\n\r\n\r\n#define SCALE               (2)\r\n\r\n\r\n\r\n#define R                   (4)\r\n\r\n\r\n\r\n\r\n\r\n#define VALUE_TYPE        float\r\n\r\n\r\n#define VALUE_COMPONENTS   r\r\n\r\n#define VALUE_IS_KEY       0\r\n\r\n\r\n#define KEY_COMPONENTS     gb\r\n\r\n\r\n#if __VERSION__ >= 330\r\n\r\nconst float gaussian[R + 1] =\r\n\r\n\r\nfloat[](0.153170, 0.144893, 0.122649, 0.092902, 0.062970);\r\n\r\n#endif\r\n\r\nuniform sampler2D   tDiffuse;\r\nuniform vec2 size;\r\nuniform vec2 resolution;\r\n\r\n\r\nuniform vec2       axis;\r\n\r\nuniform float radius;\r\n\r\n#define  result         gl_FragColor.VALUE_COMPONENTS\r\n#define  keyPassThrough gl_FragColor.KEY_COMPONENTS\r\n\r\n\r\nfloat unpackKey(vec2 p) {\r\n    return p.x * (256.0 / 257.0) + p.y * (1.0 / 257.0);\r\n}\r\n\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n#   if __VERSION__ < 330\r\n    float gaussian[R + 1];\r\n#       if R == 3\r\n    gaussian[0] = 0.153170; gaussian[1] = 0.144893; gaussian[2] = 0.122649; gaussian[3] = 0.092902;\r\n#       elif R == 4\r\n    gaussian[0] = 0.153170; gaussian[1] = 0.144893; gaussian[2] = 0.122649; gaussian[3] = 0.092902; gaussian[4] = 0.062970;\r\n#       elif R == 6\r\n    gaussian[0] = 0.111220; gaussian[1] = 0.107798; gaussian[2] = 0.098151; gaussian[3] = 0.083953; gaussian[4] = 0.067458; gaussian[5] = 0.050920; gaussian[6] = 0.036108;\r\n#       endif\r\n#   endif\r\n\r\n    ivec2 axisi = ivec2(axis);\r\n\r\n    ivec2 ssC = ivec2(gl_FragCoord.xy);\r\n\r\n    vec4 temp = texture2D(tDiffuse, vUv);\r\n\r\n    gl_FragColor.gb = temp.KEY_COMPONENTS;\r\n    gl_FragColor.a = temp.a;\r\n\r\n    VALUE_TYPE sum = temp.VALUE_COMPONENTS;\r\n\r\n    if (temp.a == 0.0) {\r\n\r\n        result = sum;\r\n        return;\r\n    }\r\n\r\n    float key = unpackKey(keyPassThrough);\r\n\r\n\r\n\r\n    float BASE = gaussian[0];\r\n    float totalWeight = BASE;\r\n    sum *= totalWeight;\r\n\r\n    float scale = 1.5 / radius;\r\n\r\n\r\n\r\n\r\n\r\n\r\n    int r = -4; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[4];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n    r = -3; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[3];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n    r = -2; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[2];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n    r=-1; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[1];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n    r = 1; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[1];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n    r = 2; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[2];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n    r = 3; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[3];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n    r = 4; {\r\n\r\n        vec2 ssUV = vec2(ssC + axisi * (r * SCALE))*resolution;\r\n        temp = texture2D(tDiffuse, ssUV);\r\n        float      tapKey = unpackKey(temp.KEY_COMPONENTS);\r\n        VALUE_TYPE value  = temp.VALUE_COMPONENTS;\r\n\r\n\r\n\r\n        float weight = 0.3 + gaussian[4];\r\n\r\n\r\n        float dz = tapKey - key;\r\n        weight *= max(0.0, 1.0 - (EDGE_SHARPNESS * 2000.0) * abs(dz) * scale);\r\n\r\n        sum += value * weight;\r\n        totalWeight += weight;\r\n    }\r\n\r\n    const float epsilon = 0.0001;\r\n    result = sum / (totalWeight + epsilon);\r\n\r\n}\r\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');

	/* Scalable Ambient Obscurance implementation based on: {http://graphics.cs.williams.edu/papers/SAOHPG12/} */

	var SAOShader = {

	    uniforms: {

	        "tDepth": { type: "t", value: null },
	        "size": { type: "v2", value: new THREE.Vector2(512, 512) },
	        "resolution": { type: "v2", value: new THREE.Vector2(1 / 512, 1 / 512) },
	        "cameraNear": { type: "f", value: 1 },
	        "cameraFar": { type: "f", value: 100 },
	        "radius": { type: "f", value: 10.0 }, // width of AO effect in native geometry units (meters or whatever)
	        "bias": { type: "f", value: 0.1 }, // set to be 0.01 * radius for non-mobile devices, 0.1 * radius for mobile, see setAOOptions
	        "projScale": { type: "f", value: 500 },
	        //"clipInfo":     { type: "v3", value: new THREE.Vector3(100, 99, -100) }, /* zf*zn, zn-zf, zf */
	        "projInfo": { type: "v4", value: new THREE.Vector4(0, 0, 0, 0) },
	        "intensity": { type: "f", value: 0.4 }, // darkness (higher is darker)
	        "isOrtho": { type: "f", value: 1.0 },

	        "tDepth_mip1": { type: "t", value: null },
	        "tDepth_mip2": { type: "t", value: null },
	        "tDepth_mip3": { type: "t", value: null },
	        "tDepth_mip4": { type: "t", value: null },
	        "tDepth_mip5": { type: "t", value: null } },


	    vertexShader: __webpack_require__(51),
	    fragmentShader: __webpack_require__(52) };



	module.exports = SAOShader;

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n    vUv = uv;\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "#define USE_MIPMAP 1\r\n\r\nuniform float cameraNear;\r\nuniform float cameraFar;\r\n\r\n\r\nuniform vec2 size;\r\nuniform vec2 resolution;\r\n\r\nuniform float lumInfluence;\r\n\r\nvarying vec2 vUv;\r\n\r\n\r\n#define NUM_SAMPLES (17)\r\n\r\n\r\n\r\n\r\n\r\n#define LOG_MAX_OFFSET (3)\r\n\r\n\r\n#define MAX_MIP_LEVEL (5)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#define NUM_SPIRAL_TURNS (5)\r\n\r\n#define MIN_RADIUS (3.0)\r\n\r\n\r\n\r\n\r\nuniform float           projScale;\r\n\r\n\r\nuniform sampler2D tDepth;\r\n\r\n\r\n\r\n\r\n#ifdef USE_MIPMAP\r\nuniform sampler2D tDepth_mip1;\r\nuniform sampler2D tDepth_mip2;\r\nuniform sampler2D tDepth_mip3;\r\nuniform sampler2D tDepth_mip4;\r\nuniform sampler2D tDepth_mip5;\r\n#endif\r\n\r\n\r\nuniform float radius;\r\n\r\n\r\nuniform float bias;\r\n\r\nuniform float intensity;\r\n\r\nuniform float isOrtho;\r\n\r\n\r\n\r\n\r\n\r\n\r\nvec2 tapLocation(int sampleNumber, float spinAngle, out float ssR){\r\n\r\n    float alpha = float(float(sampleNumber) + 0.5) * (1.0 / float(NUM_SAMPLES));\r\n    float angle = alpha * (float(NUM_SPIRAL_TURNS) * 6.28) + spinAngle;\r\n\r\n    ssR = alpha;\r\n    return vec2(cos(angle), sin(angle));\r\n}\r\n\r\n\r\n\r\nfloat CSZToKey(float z) {\r\n\r\n\r\n\r\n    return clamp( (z+cameraNear) / (cameraNear-cameraFar), 0.0, 1.0);\r\n}\r\n\r\n\r\n\r\nvoid packKey(float key, out vec2 p) {\r\n\r\n    float temp = floor(key * 256.0);\r\n\r\n\r\n    p.x = temp * (1.0 / 256.0);\r\n\r\n\r\n    p.y = key * 256.0 - temp;\r\n}\r\n\r\n#include<pack_depth>\r\n\r\n\r\nfloat unpackDepthNearFar( const in vec4 rgba_depth ) {\r\n    float depth = unpackDepth( rgba_depth );\r\n    if (depth == 0.0)\r\n        return -cameraFar * 1.0e10;\r\n    return depth * (cameraNear - cameraFar) - cameraNear;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nuniform vec4 projInfo;\r\n\r\n\r\nvec3 reconstructCSPosition(vec2 S, float z) {\r\n    return vec3((S.xy * projInfo.xy + projInfo.zw) * mix(z, -1.0, isOrtho), z);\r\n}\r\n\r\n\r\nvec3 reconstructCSFaceNormal(vec3 C) {\r\n    return normalize(cross(dFdy(C), dFdx(C)));\r\n}\r\n\r\nvec3 reconstructNonUnitCSFaceNormal(vec3 C) {\r\n    return cross(dFdy(C), dFdx(C));\r\n}\r\n\r\n\r\nvec3 getPosition(ivec2 ssP, float depth) {\r\n    vec3 P;\r\n\r\n\r\n    P = reconstructCSPosition(vec2(ssP) + vec2(0.5), depth);\r\n    return P;\r\n}\r\n\r\n\r\nvec3 getOffsetPosition(ivec2 ssC, vec2 unitOffset, float ssR) {\r\n\r\n    ivec2 ssP = ivec2(ssR * unitOffset) + ssC;\r\n\r\n    vec3 P;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec2 screenUV = (vec2(ssP) + vec2(0.5)) * resolution;\r\n\r\n#ifdef USE_MIPMAP\r\n\r\n    int mipLevel = int(max(0.0, min(floor(log2(ssR)) - float(LOG_MAX_OFFSET), float(MAX_MIP_LEVEL))));\r\n\r\n    if (mipLevel == 0) {\r\n        P.z = texture2D(tDepth, screenUV).z;\r\n        if (P.z == 0.0) P.z = -cameraFar * 1.0e10;\r\n    }\r\n    else if (mipLevel == 1)\r\n        P.z = unpackDepthNearFar(texture2D(tDepth_mip1, screenUV));\r\n    else if (mipLevel == 2)\r\n        P.z = unpackDepthNearFar(texture2D(tDepth_mip2, screenUV));\r\n    else if (mipLevel == 3)\r\n        P.z = unpackDepthNearFar(texture2D(tDepth_mip3, screenUV));\r\n    else if (mipLevel == 4)\r\n        P.z = unpackDepthNearFar(texture2D(tDepth_mip4, screenUV));\r\n    else if (mipLevel == 5)\r\n        P.z = unpackDepthNearFar(texture2D(tDepth_mip5, screenUV));\r\n#else\r\n    P.z = texture2D(tDepth, screenUV).z;\r\n    if (P.z == 0.0) P.z = -cameraFar * 1.0e10;\r\n#endif\r\n\r\n\r\n    P = reconstructCSPosition(vec2(ssP) + vec2(0.5), P.z);\r\n\r\n    return P;\r\n}\r\n\r\n\r\nfloat sampleAO(in ivec2 ssC, in vec3 C, in vec3 n_C, in float ssDiskRadius, in int tapIndex, in float randomPatternRotationAngle) {\r\n\r\n    float ssR;\r\n    vec2 unitOffset = tapLocation(tapIndex, randomPatternRotationAngle, ssR);\r\n\r\n\r\n    ssR = max(0.75, ssR * ssDiskRadius);\r\n\r\n\r\n    vec3 Q = getOffsetPosition(ssC, unitOffset, ssR);\r\n\r\n\r\n    vec3 v = Q - C;\r\n\r\n    float vv = dot(v, v);\r\n    float vn = dot(v, n_C);\r\n\r\n    const float epsilon = 0.001;\r\n\r\n\r\n    float angAdjust = mix(1.0, max(0.0, 1.5 * n_C.z), 0.35);\r\n\r\n\r\n\r\n#define HIGH_QUALITY\r\n\r\n\r\n\r\n\r\n\r\n#ifdef HIGH_QUALITY\r\n\r\n\r\n\r\n    float f = max(1.0 - vv / (radius * radius), 0.0); return angAdjust * f * max((vn - bias) / sqrt(epsilon + vv), 0.0);\r\n#else\r\n\r\n\r\n    float f = max(radius * radius - vv, 0.0); return angAdjust * f * f * f * max((vn - bias) / (epsilon + vv), 0.0);\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\nconst bool useNoise = true;\r\n\r\n\r\n\r\nfloat getRandomAngle(vec2 pos) {\r\n\r\n    float dt= dot(pos ,vec2(12.9898,78.233));\r\n    return 6.28318 * fract(sin(mod(dt,3.14)) * 43758.5453);\r\n}\r\n\r\n\r\nvoid main() {\r\n\r\n\r\n    ivec2 ssC = ivec2(gl_FragCoord.xy);\r\n\r\n\r\n    vec4 nrmz = texture2D(tDepth, vUv);\r\n\r\n\r\n    if (nrmz.z == 0.0) {\r\n\r\n        gl_FragColor.r = 1.0;\r\n        gl_FragColor.a = 0.0;\r\n        packKey(1.0, gl_FragColor.gb);\r\n        return;\r\n    }\r\n\r\n\r\n    vec3 C = getPosition(ssC, nrmz.z);\r\n\r\n    packKey(CSZToKey(C.z), gl_FragColor.gb);\r\n\r\n\r\n\r\n\r\n    float ssDiskRadius = -projScale * radius / mix(C.z, -1.0, isOrtho);\r\n\r\n    float A;\r\n    if (ssDiskRadius <= MIN_RADIUS) {\r\n\r\n        A = 1.0;\r\n    } else {\r\n\r\n        float sum = 0.0;\r\n\r\n\r\n\r\n\r\n\r\n\r\n        float randomPatternRotationAngle = getRandomAngle(vUv);\r\n\r\n\r\n\r\n\r\n\r\n        vec3 n_C = vec3(nrmz.x, nrmz.y, sqrt(1.0 - dot(nrmz.xy, nrmz.xy)));\r\n\r\n\r\n\r\n\r\n\r\n\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 0, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 1, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 2, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 3, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 4, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 5, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 6, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 7, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 8, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 9, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 10, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 11, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 12, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 13, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 14, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 15, randomPatternRotationAngle);\r\n        sum += sampleAO(ssC, C, n_C, ssDiskRadius, 16, randomPatternRotationAngle);\r\n\r\n        float intensityDivR6 = intensity / pow(radius, 6.0);\r\n\r\n#ifdef HIGH_QUALITY\r\n        A = pow(max(0.0, 1.0 - sqrt(sum * (3.0 / float(NUM_SAMPLES)))), intensity);\r\n\r\n#else\r\n\r\n        A = max(0.0, 1.0 - sum * intensityDivR6 * (5.0 / float(NUM_SAMPLES)));\r\n\r\n\r\n\r\n        A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        if (abs(dFdx(C.z)) < 0.02) {\r\n            A -= dFdx(A) * (mod(float(ssC.x), 2.0) - 0.5);\r\n        }\r\n        if (abs(dFdy(C.z)) < 0.02) {\r\n            A -= dFdy(A) * (mod(float(ssC.y), 2.0) - 0.5);\r\n        }\r\n\r\n\r\n        A = mix(1.0, A, clamp(ssDiskRadius - MIN_RADIUS,0.0,1.0));\r\n    }\r\n\r\n    gl_FragColor.r = A;\r\n    gl_FragColor.a = 1.0;\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');

	// Also known as the depthShader, this shader computes and stores the x and y camera-space normal components and the depth.
	//
	// The z component of the normal can be derived, since we know it is a positive number and x^2 + y^2 + z^2 = 1.
	// The depth is returned in camera space (before projection), so is relative to the world's space. It will need to be
	// multiplied by the projection matrix to get the z-depth. For a perspective camera, visible values will be negative

	var NormalsShader = {

	        uniforms: {

	                //"opacity" : { type: "f", value: 1.0 }
	                "cutplanes": { type: "v4v", value: [] } },


	        vertexShader: __webpack_require__(54),
	        fragmentShader: __webpack_require__(55) };



	module.exports = NormalsShader;

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "varying vec3 vNormal;\r\nvarying float depth;\r\n\r\n#if NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n\r\n#include<pack_normals>\r\n#include<instancing_decl_vert>\r\n\r\nvoid main() {\r\n\r\n#ifdef UNPACK_NORMALS\r\n    vec3 objectNormal = decodeNormal(normal);\r\n#else\r\n    vec3 objectNormal = normal;\r\n#endif\r\n\r\n#ifdef FLIP_SIDED\r\n    objectNormal = -objectNormal;\r\n#endif\r\n\r\n\r\n    objectNormal = getInstanceNormal(objectNormal);\r\n    vec3 instPos = getInstancePos(position);\r\n\r\n    vec3 transformedNormal = normalMatrix * objectNormal;\r\n\r\n    vNormal = normalize( transformedNormal );\r\n\r\n#if NUM_CUTPLANES > 0\r\n    vec4 worldPosition = modelMatrix * vec4( instPos, 1.0 );\r\n    vWorldPosition = worldPosition.xyz;\r\n\r\n#endif\r\n\r\n    vec4 mvPosition = modelViewMatrix * vec4( instPos, 1.0 );\r\n    depth = mvPosition.z;\r\n\r\n    vec4 p_Position = projectionMatrix * mvPosition;\r\n    gl_Position = p_Position;\r\n}\r\n";

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "varying highp vec3 vNormal;\r\nvarying highp float depth;\r\n\r\n#if NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n#include<cutplanes>\r\n\r\nvoid main() {\r\n#if NUM_CUTPLANES > 0\r\n    checkCutPlanes(vWorldPosition);\r\n#endif\r\n\r\n    vec3 n = vNormal;\r\n\r\n\r\n    n = n * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    n = normalize( n );\r\n\r\n\r\n\r\n\r\n\r\n\r\n    gl_FragColor = vec4(n.x, n.y, depth, 1.0);\r\n}\r\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";



	var LineShader = {

	        uniforms: {

	                "pixelsPerUnit": { type: "f", value: 1.0 },
	                "aaRange": { type: "f", value: 0.5 }, //aaRange = 0.5/pixelsPerUnit
	                "tLayerMask": { type: "t", value: null },
	                "tLineStyle": { type: "t", value: null },
	                "vLineStyleTexSize": { type: "v2", value: new THREE.Vector2(13, 70) },
	                "tRaster": { type: "t", value: null },
	                "tSelectionTexture": { type: "t", value: null },
	                "vSelTexSize": { type: "v2", value: new THREE.Vector2(4096, 1) },
	                "displayPixelRatio": { type: "f", value: 1.0 },
	                "opacity": { type: "f", value: 1.0 },
	                "selectionColor": { type: "v4", value: new THREE.Vector4(0, 0, 1, 1) },
	                "modelId": { type: "v3", value: new THREE.Vector3(0, 0, 0) },
	                "viewportId": { type: "f", value: 0.0 }, // the viewport id of the first selection in measure
	                "swap": { type: "f", value: 0.0 } },









	        attributes: {
	                "fields1": 0,
	                "fields2": 0,
	                "color4b": 0,
	                "dbId4b": 0,
	                "flags4b": 0,
	                "layerVp4b": 0,
	                "extraParams": 0,
	                "instFlags4b": 0 },


	        defines: {
	                //"MRT_ID_BUFFER":      1,
	                //"ID_COLOR":           1,
	                //"SELECTION_RENDERER": 1,
	                //"HAS_RASTER_QUADS":   1,
	                //"HAS_ELLIPTICALS":    1,
	                //"HAS_CIRCLES":        1,
	                //"HAS_TRIANGLE_GEOMS": 1,
	                //"USE_INSTANCING":     1
	        },

	        vertexShader: __webpack_require__(57),
	        fragmentShader: __webpack_require__(58) };



	module.exports = LineShader;

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n#include<line_decl_common>\r\n\r\nattribute vec3 fields1;\r\nattribute vec3 fields2;\r\nattribute vec4 color4b;\r\nattribute vec4 dbId4b;\r\nattribute vec4 flags4b;\r\nattribute vec4 layerVp4b;\r\n\r\n#ifdef HAS_ELLIPTICALS\r\nattribute vec3 extraParams;\r\n#endif\r\n\r\n#ifdef USE_INSTANCING\r\nattribute vec4 instFlags4b;\r\n#endif\r\n\r\nuniform mat4 mvpMatrix;\r\n\r\nuniform float pixelsPerUnit;\r\nuniform float aaRange;\r\nuniform float viewportId;\r\nuniform float swap;\r\n\r\n\r\n\r\n\r\n\r\n#ifdef HAS_LAYERS\r\nuniform sampler2D tLayerMask;\r\n#endif\r\n\r\n#ifdef SELECTION_RENDERER\r\nuniform sampler2D tSelectionTexture;\r\nuniform vec2 vSelTexSize;\r\n#endif\r\n\r\n#ifdef SELECTION_RENDERER\r\nuniform vec4 selectionColor;\r\n#endif\r\n\r\n\r\nvec2 centralVertex;\r\nvec2 offsetPosition;\r\n\r\nvec2 cos_sin(const float angle) { return vec2(cos(angle), sin(angle)); }\r\n\r\nvoid min_max(inout vec2 minPt, inout vec2 maxPt, const vec2 p) {\r\n    minPt = min(minPt, p);\r\n    maxPt = max(maxPt, p);\r\n}\r\n\r\n#if defined(USE_INSTANCING)\r\nfloat getVertexId() { return instFlags4b.x; }\r\n#else\r\nfloat getVertexId() { return flags4b.x; }\r\n#endif\r\n\r\nbool isStartVertex() { return (getVertexId() < VBB_SEG_END_RIGHT); }\r\nbool isLeftVertex()  { float id = getVertexId(); return ((id == VBB_SEG_END_LEFT || id == VBB_SEG_START_LEFT)); }\r\n\r\nstruct SegmentData { float angle, distAlong, distTotal, lineWidthHalf, lineType; };\r\nvoid decodeSegmentData(out SegmentData seg) {\r\n    seg.angle         = fields1.z;\r\n    seg.distAlong     = fields2.x;\r\n    seg.distTotal     = fields2.z;\r\n    seg.lineWidthHalf = fields2.y;\r\n    seg.lineType      = flags4b.z;\r\n}\r\n\r\nvoid strokeLineSegment() {\r\n    SegmentData seg; decodeSegmentData(seg);\r\n\r\n    float isStartCapVertex = isStartVertex() ? -1.0 :  1.0;\r\n    float isLeftSide       = isLeftVertex( ) ?  1.0 : -1.0;\r\n\r\n\r\n    float angleTransverse = seg.angle + isLeftSide * HALF_PI;\r\n    float lwAdjustment = fsHalfWidth + aaRange;\r\n    vec2 transverseOffset = cos_sin(angleTransverse) * lwAdjustment;\r\n    offsetPosition.xy += transverseOffset;\r\n\r\n\r\n\r\n\r\n    float distanceFromStart = max(isStartCapVertex, 0.0) * seg.distAlong;\r\n    vec2 along = distanceFromStart * cos_sin(seg.angle);\r\n    offsetPosition.xy += along;\r\n    centralVertex.xy  += along;\r\n\r\n\r\n    vec2 moveOffset = isStartCapVertex * isLeftSide * vec2(-transverseOffset.y, transverseOffset.x);\r\n    offsetPosition.xy -= moveOffset;\r\n    centralVertex.xy  -= moveOffset;\r\n\r\n\r\n\r\n\r\n    fsMultipurpose.x = (isStartCapVertex * lwAdjustment) + distanceFromStart;\r\n    fsMultipurpose.y = seg.distAlong;\r\n    fsMultipurpose.z = seg.distTotal;\r\n    fsMultipurpose.w = seg.lineType;\r\n\r\n    if (seg.lineWidthHalf < 0.0)\r\n        fsHalfWidth = -fsHalfWidth;\r\n}\r\n\r\n\r\n#ifdef HAS_TRIANGLE_GEOMS\r\nstruct TriangleData { vec2 p0, p1, p2; };\r\nvoid decodeTriangleData(out TriangleData tri) {\r\n\r\n    tri.p1 = vec2(fields1.z, fields2.x);\r\n    tri.p2 = fields2.yz;\r\n}\r\n\r\nvoid strokeOneTriangle() {\r\n    TriangleData tri; decodeTriangleData(tri);\r\n\r\n\r\n\r\n\r\n\r\n\r\n    fsHalfWidth = 0.0;\r\n    fsMultipurpose.z = 0.0;\r\n\r\n\r\n\r\n\r\n\r\n    float vertexId = getVertexId();\r\n    if (vertexId == VBB_SEG_END_RIGHT)\r\n        offsetPosition.xy = tri.p1;\r\n    else if (vertexId == VBB_SEG_END_LEFT)\r\n        offsetPosition.xy = tri.p2;\r\n}\r\n#endif\r\n\r\n\r\n\r\n\r\n#ifdef HAS_RASTER_QUADS\r\nstruct TexQuadData { float angle; vec2 size; };\r\nvoid decodeTexQuadData(out TexQuadData quad) {\r\n    quad.angle     = fields1.z;\r\n    quad.size   = fields2.xy;\r\n}\r\n\r\nvoid strokeTexQuad() {\r\n    TexQuadData quad; decodeTexQuadData(quad);\r\n\r\n    vec2 corner = vec2(isLeftVertex() ? -1.0 : 1.0, isStartVertex() ? -1.0 : 1.0);\r\n\r\n    vec2 p      = 0.5 * corner * quad.size;\r\n    vec2 rot    = cos_sin(quad.angle);\r\n    vec2 offset = vec2(p.x * rot.x - p.y * rot.y, p.x * rot.y + p.y * rot.x);\r\n\r\n    offsetPosition.xy += offset;\r\n\r\n    fsMultipurpose.xy = max(vec2(0.0), corner);\r\n\r\n\r\n    fsMultipurpose.z = 1.0;\r\n    fsHalfWidth = 0.0;\r\n}\r\n#endif\r\n\r\n#if defined(HAS_CIRCLES) || defined(HAS_ELLIPTICALS)\r\nstruct ArcData { vec2 c; float start, end, major, minor, tilt; };\r\nvoid decodeArcData(out ArcData arc) {\r\n    arc.c     = fields1.xy;\r\n    arc.start = fields1.z;\r\n    arc.end   = fields2.x;\r\n    arc.major = fields2.z;\r\n#if defined(HAS_ELLIPTICALS)\r\n    arc.minor = extraParams.x;\r\n    arc.tilt  = extraParams.y;\r\n#endif\r\n}\r\n\r\nvoid strokeArc(const ArcData arc) {\r\n\r\n\r\n    float isStart = isStartVertex() ? -1.0 : 1.0;\r\n    float isLeft  = isLeftVertex()  ? -1.0 : 1.0;\r\n\r\n\r\n\r\n\r\n    vec2 minPt;\r\n    vec2 maxPt;\r\n\r\n    vec2 angles = vec2(arc.start, arc.end);\r\n    vec2 endsX = vec2(arc.c.x) + arc.major * cos(angles);\r\n    vec2 endsY = vec2(arc.c.y) + arc.minor * sin(angles);\r\n    minPt = maxPt = vec2(endsX.x, endsY.x);\r\n    min_max(minPt, maxPt, vec2(endsX.y, endsY.y));\r\n\r\n    if (arc.end > arc.start) {\r\n        if (arc.start < PI_0_5 && arc.end > PI_0_5) {\r\n            min_max(minPt, maxPt, vec2(arc.c.x, arc.c.y + arc.minor));\r\n        }\r\n        if (arc.start < PI && arc.end > PI) {\r\n            min_max(minPt, maxPt, vec2(arc.c.x - arc.major, arc.c.y));\r\n        }\r\n        if (arc.start < PI_1_5 && arc.end > PI_1_5) {\r\n            min_max(minPt, maxPt, vec2(arc.c.x, arc.c.y - arc.minor));\r\n        }\r\n    } else {\r\n\r\n        min_max(minPt, maxPt, vec2(arc.c.x + arc.major, arc.c.y));\r\n\r\n\r\n\r\n        if (arc.start < PI_0_5 || arc.end > PI_0_5) {\r\n            min_max(minPt, maxPt, vec2(arc.c.x, arc.c.y + arc.minor));\r\n        }\r\n        if (arc.start < PI || arc.end > PI) {\r\n            min_max(minPt, maxPt, vec2(arc.c.x - arc.major, arc.c.y));\r\n        }\r\n        if (arc.start < PI_1_5 || arc.end > PI_1_5) {\r\n            min_max(minPt, maxPt, vec2(arc.c.x, arc.c.y - arc.minor));\r\n        }\r\n    }\r\n\r\n    minPt -= fsHalfWidth + aaRange;\r\n    maxPt += fsHalfWidth + aaRange;\r\n\r\n    offsetPosition.x = (isStart < 0.0) ? minPt.x : maxPt.x;\r\n    offsetPosition.y = (isLeft < 0.0)  ? minPt.y : maxPt.y;\r\n\r\n\r\n\r\n\r\n\r\n    fsMultipurpose.x = arc.start;\r\n    fsMultipurpose.y = -arc.major;\r\n    fsMultipurpose.z = arc.end;\r\n    fsMultipurpose.w = arc.minor;\r\n}\r\n#endif\r\n\r\n#if defined(HAS_CIRCLES)\r\n\r\nvoid strokeCircularArc() {\r\n    ArcData arc; decodeArcData(arc);\r\n\r\n    float r = arc.major;\r\n    if (r * pixelsPerUnit < 0.125)\r\n        r = 0.25 * aaRange;\r\n    arc.major = arc.minor = r;\r\n\r\n    strokeArc(arc);\r\n}\r\n\r\n#endif\r\n\r\n#if defined(HAS_ELLIPTICALS)\r\nvoid strokeEllipticalArc() {\r\n    ArcData arc; decodeArcData(arc);\r\n    strokeArc(arc);\r\n}\r\n#endif\r\n\r\nstruct CommonAttribs { vec2 pos; vec4 color; vec2 layerTC, vpTC; float lineWidthHalf, geomType, ghosting; };\r\nvoid decodeCommonAttribs(out CommonAttribs attribs) {\r\n    attribs.pos           = fields1.xy;\r\n    attribs.color         = color4b;\r\n    attribs.geomType      = flags4b.y;\r\n    attribs.layerTC       = layerVp4b.xy / 255.0;\r\n    attribs.vpTC          = layerVp4b.zw / 255.0;\r\n    attribs.lineWidthHalf = fields2.y;\r\n    attribs.ghosting      = flags4b.w;\r\n}\r\n\r\nvoid strokeIndexedTriangle() {\r\n\r\n    fsHalfWidth = 0.0;\r\n    fsMultipurpose.z = 0.0;\r\n}\r\n\r\n#ifdef SELECTION_RENDERER\r\nbool isSelected(const CommonAttribs attribs) {\r\n\r\n\r\n    vec3 oid = dbId4b.rgb;\r\n\r\n\r\n    float id01 = oid.r + oid.g * 256.0;\r\n    float t = (id01 + 0.5) * (1.0 / 4096.0);\r\n    float flrt = floor(t);\r\n    float texU = t - flrt;\r\n\r\n\r\n    float id23 = oid.b * (65536.0 / 4096.0) + flrt;\r\n    t = (id23 + 0.5) / vSelTexSize.y;\r\n    float texV = fract(t);\r\n\r\n    vec4 selBit = texture2D(tSelectionTexture, vec2(texU, texV));\r\n    return selBit.r == 1.0;\r\n}\r\n#endif\r\n\r\nbool isLayerOff(const CommonAttribs attribs) {\r\n#ifdef HAS_LAYERS\r\n    vec4 layerBit = texture2D(tLayerMask, attribs.layerTC);\r\n    return (layerBit.r == 0.0);\r\n#else\r\n    return false;\r\n#endif\r\n}\r\n\r\nvec4 getColor(const CommonAttribs attribs) {\r\n\r\n    if (isLayerOff(attribs)) { return vec4(0.0); }\r\n\r\n#ifdef SELECTION_RENDERER\r\n    if (isSelected(attribs)) { return selectionColor; }\r\n    return vec4(0.0);\r\n#else\r\n    return attribs.color;\r\n#endif\r\n}\r\n\r\nvoid main() {\r\n    CommonAttribs attribs; decodeCommonAttribs(attribs);\r\n\r\n    fsColor = getColor(attribs);\r\n\r\n    if (swap != 0.0 ) {\r\n\r\n        if ( fsColor.r == 0.0 && fsColor.g == 0.0 && fsColor.b == 0.0 )\r\n            fsColor.rgb = vec3(1.0,1.0,1.0);\r\n\r\n        else if ( fsColor.r == 1.0 && fsColor.g == 1.0 && fsColor.b == 1.0 )\r\n            fsColor.rgb = vec3(0.0,0.0,0.0);\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    centralVertex = offsetPosition = attribs.pos;\r\n\r\n    float lineWeight = attribs.lineWidthHalf;\r\n    if (lineWeight > 0.0) {\r\n\r\n\r\n        if(lineWeight < 0.5 / pixelsPerUnit) {\r\n            lineWeight = 0.5 / pixelsPerUnit;\r\n        }\r\n    }\r\n    else {\r\n\r\n\r\n        lineWeight = abs(lineWeight) / pixelsPerUnit;\r\n    }\r\n\r\n    fsHalfWidth = lineWeight;\r\n\r\n    dbId = dbId4b / 255.0;\r\n\r\n    fsVpTC     = attribs.vpTC;\r\n    fsGhosting = attribs.ghosting;\r\n\r\n    if      (attribs.geomType == VBB_GT_LINE_SEGMENT)     strokeLineSegment();\r\n#ifdef HAS_CIRCLES\r\n    else if (attribs.geomType == VBB_GT_ARC_CIRCULAR)     strokeCircularArc();\r\n#endif\r\n#ifdef HAS_ELLIPTICALS\r\n    else if (attribs.geomType == VBB_GT_ARC_ELLIPTICAL)   strokeEllipticalArc();\r\n#endif\r\n#ifdef HAS_RASTER_QUADS\r\n    else if (attribs.geomType == VBB_GT_TEX_QUAD)         strokeTexQuad();\r\n#endif\r\n#ifdef HAS_TRIANGLE_GEOMS\r\n    else if (attribs.geomType == VBB_GT_ONE_TRIANGLE)     strokeOneTriangle();\r\n#endif\r\n    else if (attribs.geomType == VBB_GT_TRIANGLE_INDEXED) strokeIndexedTriangle();\r\n\r\n\r\n\r\n    fsOffsetDirection = offsetPosition - centralVertex;\r\n\r\n\r\n    gl_Position = mvpMatrix * modelMatrix * vec4( offsetPosition.xy, 0.0, 1.0 );\r\n}\r\n";

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n\r\n#include<line_decl_common>\r\n\r\nuniform highp float pixelsPerUnit;\r\nuniform highp float aaRange;\r\n\r\nuniform float opacity;\r\nuniform highp float viewportId;\r\nuniform highp float swap;\r\n\r\n#ifdef HAS_RASTER_QUADS\r\nuniform sampler2D tRaster;\r\n#endif\r\n\r\n#ifdef HAS_LINESTYLES\r\nuniform sampler2D tLineStyle;\r\nuniform vec2 vLineStyleTexSize;\r\n#endif\r\n\r\n#if defined(MRT_ID_BUFFER) || defined(MODEL_COLOR)\r\nuniform vec3 modelId;\r\n#endif\r\n\r\n\r\nfloat curveGaussian(float r, float invWidth) {\r\n    float amt = clamp(r * invWidth, 0.0, 1.0);\r\n\r\n    float exponent = amt * 2.0;\r\n\r\n    return exp(-exponent*exponent);\r\n\r\n\r\n\r\n}\r\n\r\n#ifdef HAS_LINESTYLES\r\nfloat getLinePatternPixel(int i, int j) {\r\n\r\n    return texture2D(tLineStyle, (vec2(i, j) + 0.5) / vLineStyleTexSize).x * 255.0;\r\n}\r\n\r\nfloat getPatternLength(int whichPattern) {\r\n    float p1 = getLinePatternPixel(0, whichPattern);\r\n    float p2 = getLinePatternPixel(1, whichPattern);\r\n    return (p2 * 256.0 + p1);\r\n}\r\n#endif\r\n\r\n\r\nvoid fillLineSegment() {\r\n\r\n    float radius = abs(fsHalfWidth);\r\n    float parametricDistance = fsMultipurpose.x;\r\n    float segmentLength      = fsMultipurpose.y;\r\n    float totalDistance      = fsMultipurpose.z;\r\n\r\n\r\n#ifdef HAS_LINESTYLES\r\n    int whichPattern         = int(fsMultipurpose.w);\r\n\r\n    if (whichPattern > 0) {\r\n        const float TEX_TO_UNIT = 1.0 / 96.0;\r\n\r\n\r\n\r\n\r\n        float LTSCALE = 1.0;\r\n        float patternScale;\r\n\r\n\r\n\r\n        if (fsHalfWidth < 0.0) {\r\n            patternScale = LTSCALE;\r\n        } else {\r\n            patternScale = LTSCALE * TEX_TO_UNIT * pixelsPerUnit;\r\n        }\r\n\r\n        float patLen = patternScale * getPatternLength(whichPattern);\r\n        float phase = mod((totalDistance + parametricDistance) * pixelsPerUnit, patLen);\r\n\r\n        bool onPixel = true;\r\n        float radiusPixels = radius * pixelsPerUnit;\r\n\r\n        for (int i=2; i<MAX_LINESTYLE_LENGTH; i+=2) {\r\n\r\n            float on = getLinePatternPixel(i, whichPattern);\r\n            if (on == 1.0) on = 0.0;\r\n            on *= patternScale;\r\n\r\n            onPixel = true;\r\n            phase -= on;\r\n            if (phase < 0.0) {\r\n                break;\r\n            }\r\n            else if (phase <= radiusPixels) {\r\n                onPixel = false;\r\n                break;\r\n            }\r\n\r\n            float off = getLinePatternPixel(i+1, whichPattern);\r\n            if (off <= 1.0) off = 0.0;\r\n            off *= patternScale;\r\n\r\n            onPixel = false;\r\n            phase -= off;\r\n            if (phase < -radiusPixels)\r\n                discard;\r\n            if (phase <= 0.0)\r\n                break;\r\n        }\r\n\r\n\r\n\r\n\r\n        if (!onPixel && (abs(phase) <= radiusPixels)) {\r\n            segmentLength = 0.0;\r\n            parametricDistance = phase / pixelsPerUnit;\r\n        }\r\n    }\r\n#endif\r\n\r\n\r\n\r\n\r\n    float dist;\r\n    float offsetLength2 = dot(fsOffsetDirection, fsOffsetDirection);\r\n\r\n\r\n\r\n\r\n    float ltz = max(0.0, sign(-parametricDistance));\r\n    float gtsl = max(0.0, sign(parametricDistance - segmentLength));\r\n    float d = (ltz + gtsl) * (parametricDistance - gtsl * segmentLength);\r\n    dist = sqrt(max(0.0, offsetLength2 + d*d));\r\n\r\n\r\n\r\n\r\n    float range =  dist - radius;\r\n\r\n    if (range > aaRange) {\r\n        discard;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n    gl_FragColor = fsColor;\r\n    gl_FragColor.a *= curveGaussian(range+aaRange, pixelsPerUnit);\r\n}\r\n\r\n#ifdef HAS_CIRCLES\r\nvoid fillCircularArc() {\r\n\r\n    float dist   = length(fsOffsetDirection);\r\n    vec2 angles  = fsMultipurpose.xz;\r\n    float radius = abs(fsMultipurpose.y);\r\n    float range  =  abs(dist - radius);\r\n    range -= fsHalfWidth;\r\n\r\n\r\n\r\n    if (range > aaRange) {\r\n        discard;\r\n    }\r\n\r\n    vec2 direction = fsOffsetDirection;\r\n    float angle = atan(direction.y, direction.x);\r\n\r\n\r\n\r\n\r\n    if (angles.x > angles.y) {\r\n\r\n        if (angle > angles.x && angle < PI) {\r\n            angle -= TAU;\r\n        }\r\n        angles.x -= TAU;\r\n    }\r\n    else if (angle < 0.0)\r\n        angle += TAU;\r\n\r\n\r\n    if (angle > angles.x && angle < angles.y) {\r\n        gl_FragColor = fsColor;\r\n        gl_FragColor.a *= curveGaussian(range+aaRange, pixelsPerUnit);\r\n    }\r\n\r\n    else {\r\n        discard;\r\n    }\r\n\r\n}\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#ifdef HAS_ELLIPTICALS\r\n\r\n\r\n\r\n\r\n\r\n\r\nfloat EllipticalApprox(\r\n        const int iters,\r\n        inout float t0, inout float t1,\r\n        const vec2 y,   out   vec2 x,\r\n        const vec2 e,   const vec2 ey, const vec2 esqr\r\n        ) {\r\n    vec2 r;\r\n    for (int i = 0; i < 10; ++i) {\r\n        if(i >= iters) break;\r\n\r\n        float t = mix(t0, t1, 0.5);\r\n        r = ey / (vec2(t) + esqr);\r\n\r\n        vec2 rsq = r * r;\r\n        float f = rsq.x + rsq.y - 1.0;\r\n\r\n        if(f > 0.0) { t0 = t; } else { t1 = t; }\r\n    }\r\n\r\n    x = e * r;\r\n    return distance(x, y);\r\n}\r\n\r\nfloat DistancePointEllipseSpecial (vec2 e, vec2 y, out vec2 x, float width, float aaRange) {\r\n    float dist;\r\n\r\n\r\n    vec2 esqr = e * e;\r\n    vec2 ey   = e * y;\r\n    float t0 = -esqr[1] + ey[1];\r\n    float t1 = -esqr[1] + length(ey);\r\n\r\n\r\n\r\n    dist = EllipticalApprox(6, t0, t1, y, x, e, ey, esqr);\r\n\r\n\r\n    if (dist > max(2.0 * (width + aaRange), e[0] * 0.05))\r\n        return dist;\r\n\r\n\r\n    dist = EllipticalApprox(6, t0, t1, y, x, e, ey, esqr);\r\n\r\n\r\n\r\n\r\n    float ecc = 1.0 +  0.1 * e[0] / e[1];\r\n\r\n    if (dist > max(ecc * (width + aaRange), e[0] * 0.001))\r\n        return dist;\r\n    if (dist < (width - aaRange) / ecc)\r\n        return dist;\r\n\r\n\r\n\r\n\r\n    dist = EllipticalApprox(10, t0, t1, y, x, e, ey, esqr);\r\n    return dist;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nfloat DistancePointEllipse(vec2 e, vec2 y, out vec2 locX, float width, float aaRange) {\r\n    vec2 locE, locY;\r\n\r\n\r\n\r\n\r\n    float diff = sign(e[0] - e[1]);\r\n    vec2 swizzle = vec2(max(diff, 0.0), -min(diff, 0.0));\r\n    locE.x = dot(e, swizzle.xy);\r\n    locE.y = dot(e, swizzle.yx);\r\n    locY.x = dot(y, swizzle.xy);\r\n    locY.y = dot(y, swizzle.yx);\r\n\r\n\r\n    vec2 refl = sign(locY);\r\n    locY *= refl;\r\n\r\n    vec2 x;\r\n    float distance = DistancePointEllipseSpecial(locE, locY, x, width, aaRange);\r\n\r\n    x *= refl;\r\n\r\n    locX.x = dot(x, swizzle.xy);\r\n    locX.y = dot(x, swizzle.yx);\r\n\r\n    return distance;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nvoid fillEllipticalArc() {\r\n    vec2 angles = fsMultipurpose.xz;\r\n    vec2 radii  = abs(fsMultipurpose.yw);\r\n    vec2 dir    = fsOffsetDirection;\r\n\r\n\r\n\r\n\r\n    vec2 pos;\r\n    float range = DistancePointEllipse(radii, dir, pos, fsHalfWidth, aaRange);\r\n    range -= fsHalfWidth;\r\n\r\n    if (range > aaRange)\r\n        discard;\r\n\r\n    float ar = radii[0] / radii[1];\r\n\r\n\r\n\r\n\r\n    float angle = atan(ar * pos.y, pos.x);\r\n\r\n\r\n\r\n\r\n    if (angles.x > angles.y) {\r\n\r\n        if (angle > angles.x && angle < PI) {\r\n            angle -= TAU;\r\n        }\r\n        angles.x -= TAU;\r\n    }\r\n    else if (angle < 0.0)\r\n        angle += TAU;\r\n\r\n\r\n    if (angle > angles.x && angle < angles.y) {\r\n        gl_FragColor = fsColor;\r\n        gl_FragColor.a *= curveGaussian(range+aaRange, pixelsPerUnit);\r\n    }\r\n    else {\r\n        discard;\r\n    }\r\n}\r\n#endif\r\n\r\n#ifdef HAS_RASTER_QUADS\r\nvoid fillTexQuad() { gl_FragColor = texture2D(tRaster, fsMultipurpose.xy); }\r\n#endif\r\n\r\nvoid fillTriangle() { gl_FragColor = fsColor; }\r\n\r\nvoid main() {\r\n\r\n\r\n\r\n\r\n\r\n    if (fsColor == vec4(0.0)) {\r\n        discard;\r\n    }\r\n\r\n\r\n    if (fsHalfWidth == 0.0) {\r\n#ifdef HAS_RASTER_QUADS\r\n        if (fsMultipurpose.z != 0.0)\r\n            fillTexQuad();\r\n        else\r\n#endif\r\n            fillTriangle();\r\n    }\r\n    else if (fsMultipurpose.y < 0.0) {\r\n#ifdef HAS_CIRCLES\r\n#ifdef HAS_ELLIPTICALS\r\n        if (abs(fsMultipurpose.y) == fsMultipurpose.w)\r\n#endif\r\n            fillCircularArc();\r\n#endif\r\n#ifdef HAS_ELLIPTICALS\r\n#ifdef HAS_CIRCLES\r\n        else\r\n#endif\r\n            fillEllipticalArc();\r\n#endif\r\n    }\r\n    else\r\n        fillLineSegment();\r\n\r\n\r\n#ifdef MRT_NORMALS\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    gl_FragData[1] = vec4(0.0);\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n    float writeId = 1.0;\r\n\r\n\r\n\r\n\r\n    if (fsGhosting != 0.0 || \r\n            ((viewportId != 0.0) && (abs(fsVpTC.x * 255.0 + fsVpTC.y) >= 0.5 && abs(fsVpTC.x * 255.0 + fsVpTC.y - viewportId) >= 0.5))) {\r\n\r\n        writeId = 0.0;\r\n\r\n\r\n\r\n        gl_FragColor.a *= opacity * ((swap == 1.0) ? 0.21 : 0.1);\r\n    } else {\r\n\r\n        gl_FragColor.a *= opacity;\r\n    }\r\n\r\n#include<id_frag>\r\n}\r\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"; //var THREE = require('THREE');
	var utils = __webpack_require__(60);

	var ShaderPass = function ShaderPass(shader, textureID) {

	    this.textureID = textureID !== undefined ? textureID : "tDiffuse";

	    this.material = utils.createShaderMaterial(shader);

	    // share uniforms with material
	    this.uniforms = this.material.uniforms;

	    this.renderToScreen = false;

	    this.enabled = true;
	    this.clear = false;

	    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

	    //this.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), this.material );

	    //Instead of using a screen quad we use a large triangle -- this is slightly
	    //faster (~6% measured in our specific case), due to better cache coherency. See this article:
	    //http://michaldrobot.com/2014/04/01/gcn-execution-patterns-in-full-screen-passes/
	    var triangle = new THREE.BufferGeometry();
	    var p = new Float32Array(9);
	    p[0] = -1;p[1] = -1;p[2] = 0;
	    p[3] = 3;p[4] = -1;p[5] = 0;
	    p[6] = -1;p[7] = 3;p[8] = 0;

	    var uv = new Float32Array(6);
	    uv[0] = 0;uv[1] = 0;
	    uv[2] = 2;uv[3] = 0;
	    uv[4] = 0;uv[5] = 2;

	    var n = new Float32Array(9);
	    n[0] = 0;n[1] = 0;n[2] = 1;
	    n[3] = 0;n[4] = 0;n[5] = 1;
	    n[6] = 0;n[7] = 0;n[8] = 1;


	    triangle.addAttribute("position", new THREE.BufferAttribute(p, 3));
	    triangle.addAttribute("normal", new THREE.BufferAttribute(n, 3));
	    triangle.addAttribute("uv", new THREE.BufferAttribute(uv, 2));

	    this.quad = new THREE.Mesh(triangle, this.material);


	    this.scene = new THREE.Scene();
	    this.scene.add(this.quad);
	};

	ShaderPass.prototype = {

	    // note: delta is not used
	    render: function render(renderer, writeBuffer, readBuffer, delta) {

	        if (this.uniforms[this.textureID]) {

	            this.uniforms[this.textureID].value = readBuffer;

	        }

	        if (this.renderToScreen || !writeBuffer) {

	            renderer.render(this.scene, this.camera);

	        } else {

	            renderer.render(this.scene, this.camera, writeBuffer, this.clear);

	        }

	    } };



	module.exports = ShaderPass;

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict"; //var THREE = require('THREE');

	/** Create ShaderMaterial instance using a given shader specification
	 *
	 *   @param {Object} shader - Shader specification E.g., CopyShader. Must provide vertexShader and fragmentShader.
	 *                            May provide uniforms, defines, and attributes. See CopyShader for example.
	 *   @returns {THREE.ShaderMaterial}
	 */
	var createShaderMaterial = function createShaderMaterial(shader) {
	    var params = {
	        vertexShader: shader.vertexShader,
	        fragmentShader: shader.fragmentShader };


	    // only add these fields if the shader actually needs them, because keys with undefined values
	    // would cause errors in THREE.Material
	    if (shader.uniforms) params.uniforms = THREE.UniformsUtils.clone(shader.uniforms);
	    if (shader.defines) params.defines = THREE.UniformsUtils.clone(shader.defines);

	    // Note that these are shared, because they are usually not modified afterwards
	    if (shader.attributes) params.attributes = shader.attributes;

	    return new THREE.ShaderMaterial(params);
	};

	/** Add custom macro to given material. Note that macro modification requires expensive shader recompile.
	    *   @param {THREE.Material} material
	    *   @param {string}         macroName
	    *   @param {string}         [macroValue=""]
	    **/
	var setMacro = function setMacro(material, macroName, macroValue) {

	    // default to "" (for simple toggles)
	    macroValue = macroValue || "";

	    // create defines object if needed
	    if (!material.defines) {
	        material.defines = {};
	    }

	    // change macro and trigger update if needed
	    if (material.defines[macroName] != macroValue) {
	        material.defines[macroName] = macroValue;
	        material.needsUpdate = true;
	    }
	};

	/** Remove custom macro to given material. Note that macro modification requires expensive shader recompile.
	    *   @param {THREE.Material} material
	    *   @param {string}         macroName
	    **/
	var removeMacro = function removeMacro(material, macroName) {

	    // skip material update if nothing changed
	    if (material.defines || material.defines[macroName]) {

	        // Note that we cannot just assign undefined here, because this would
	        // produce a "#define <MACRONAME> undefined" string in the shader (see FireFlyWebGlProgram.js)
	        // Fortunately, removing macros doesn't happen per-frame, and it requires shader-recompile anyway.
	        delete material.defines[macroName];

	        material.needsUpdate = true;
	    }
	};

	module.exports = {
	    createShaderMaterial: createShaderMaterial,
	    setMacro: setMacro,
	    removeMacro: removeMacro };

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"; //var THREE = require('THREE');
	var ShaderPass = __webpack_require__(59);

	var GaussianShader = {
	    uniforms: {
	        tDiffuse: { type: "t", value: null },
	        uColor: { type: "v4", value: new THREE.Vector4(1.0, 1.0, 1.0, 1.0) } },


	    // defines: {
	    //     KERNEL_SCALE_H:  1.0 / 64.0,
	    //     KERNEL_SCALE_V:  1.0 / 64.0,
	    //     KERNEL_RADIUS: 7.0
	    // },

	    vertexShader: __webpack_require__(62),
	    fragmentShader: __webpack_require__(63) };


	var GaussianPass = function GaussianPass(width, height, radius, scale, params) {

	    var _width = width;
	    var _height = height;
	    var _blurRadius = radius || 3.0;
	    var _pixelScale = scale || 1.0;
	    var _blurPassH, _blurPassV;
	    var _tmptarget;

	    var _params = {
	        hasAlpha: params.hasAlpha || false,
	        blending: params.blending || false,
	        flipUV: params.flipUV || false };


	    // PUBLIC FUNCTIONS

	    this.render = function (renderer, writeBuffer, readBuffer) {
	        _blurPassH.render(renderer, _tmptarget, readBuffer); // from readBuffer to intermediary tmp
	        _blurPassV.render(renderer, writeBuffer, _tmptarget); // tmp out to write
	    };

	    this.setSize = function (width, height) {
	        this.cleanup();

	        _width = width;
	        _height = height;

	        _tmptarget = new THREE.WebGLRenderTarget(width, height, {
	            minFilter: THREE.LinearFilter,
	            magFilter: THREE.LinearFilter,
	            format: params.format !== undefined ? params.format : THREE.RGBAFormat, // use RGBA by default
	            type: params.type !== undefined ? params.type : THREE.UnsignedByteType, // use Uint8 by default
	            stencilBuffer: false });

	        _tmptarget.generateMipmaps = false;

	        _blurPassH.material.defines.KERNEL_SCALE_H = _blurPassV.material.defines.KERNEL_SCALE_H = (_pixelScale / _width).toFixed(4);
	        _blurPassH.material.defines.KERNEL_SCALE_V = _blurPassV.material.defines.KERNEL_SCALE_V = (_pixelScale / _height).toFixed(4);
	        _blurPassH.material.needsUpdate = _blurPassV.material.needsUpdate = true;
	    };

	    this.cleanup = function () {
	        if (_tmptarget)
	        _tmptarget.dispose();
	    };

	    this.setColor = function (color) {
	        _blurPassV.material.uniforms.uColor.value.x = color.r;
	        _blurPassV.material.uniforms.uColor.value.y = color.g;
	        _blurPassV.material.uniforms.uColor.value.z = color.b;
	    };

	    this.setAlpha = function (alpha) {
	        _blurPassV.material.uniforms.uColor.value.w = alpha;
	    };

	    // INITIALIZATION

	    // init shader passes
	    _blurPassH = new ShaderPass(GaussianShader);
	    _blurPassV = new ShaderPass(GaussianShader);

	    // init target
	    this.setSize(width, height);

	    _blurPassH.material.blending = _blurPassV.material.blending = THREE.NoBlending;
	    _blurPassH.material.depthWrite = _blurPassV.material.depthWrite = false;
	    _blurPassH.material.depthTest = _blurPassV.material.depthTest = false;
	    _blurPassH.material.defines.HORIZONTAL = 1;

	    _blurPassH.material.defines.KERNEL_RADIUS = _blurPassV.material.defines.KERNEL_RADIUS = _blurRadius.toFixed(1);

	    if (_params.blending) {
	        _blurPassV.material.transparent = true;
	        _blurPassV.material.blending = THREE.NormalBlending;
	    }

	    if (_params.hasAlpha)
	    _blurPassH.material.defines.HAS_ALPHA = _blurPassV.material.defines.HAS_ALPHA = "";

	    if (_params.flipUV)
	    _blurPassH.material.defines.FLIP_UV = "";

	};

	module.exports = GaussianPass;

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n#if defined(HORIZONTAL) && defined(FLIP_UV)\r\n    vUv = vec2(uv.x, 1.0-uv.y);\r\n#else\r\n    vUv = vec2(uv.x, uv.y);\r\n#endif\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}\r\n";

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDiffuse;\r\nuniform vec4 uColor;\r\nvarying vec2 vUv;\r\n#ifdef HORIZONTAL\r\n#define GET_UV(X) vec2(vUv.x + KERNEL_SCALE_H*(X), vUv.y)\r\n#else\r\n#define GET_UV(Y) vec2(vUv.x, vUv.y + KERNEL_SCALE_V*(Y))\r\n#endif\r\n#define PI 3.14159265358979\r\n#define SIGMA ((KERNEL_RADIUS+KERNEL_RADIUS+1.0) / 6.0)\r\n#define SIGMASQ2 (2.0 * SIGMA * SIGMA)\r\n#define GAUSSIAN(X) ( (1.0 / sqrt(PI * SIGMASQ2)) * exp(-(X)*(X)/SIGMASQ2) )\r\nvoid main() {\r\n    vec4 texColSum = vec4(0.0);\r\n    float gaussSum = 0.0;\r\n    for (float x=-KERNEL_RADIUS; x<=KERNEL_RADIUS; x+=1.0) {\r\n        float gauss = GAUSSIAN(x);\r\n        vec4 texCol = texture2D(tDiffuse, GET_UV(x));\r\n#ifdef HAS_ALPHA\r\n        texCol.rgb *= texCol.a;\r\n#endif\r\n        texColSum += texCol * gauss;\r\n        gaussSum += gauss;\r\n    }\r\n#ifdef HAS_ALPHA\r\n    texColSum.rgb /= (texColSum.a == 0.0 ? 0.0001 : texColSum.a);\r\n#endif\r\n#ifdef HORIZONTAL\r\n    gl_FragColor = texColSum/gaussSum;\r\n#else\r\n    gl_FragColor = texColSum/gaussSum * uColor;\r\n#endif\r\n}\r\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var ShaderPass = __webpack_require__(59);
	var GaussianPass = __webpack_require__(61);
	var BackgroundShader = __webpack_require__(1);

	var GroundReflectionCompShader = {
	    uniforms: {
	        tDiffuse: { type: "t", value: null },
	        tBackground: { type: "t", value: null },
	        uColor: { type: "v4", value: new THREE.Vector4(1.0, 1.0, 1.0, 1.0) } },


	    vertexShader: __webpack_require__(65),
	    fragmentShader: __webpack_require__(66) };


	var GroundReflectionDrawShader = {
	    uniforms: {
	        tDiffuse: { type: "t", value: null } },


	    vertexShader: __webpack_require__(67),
	    fragmentShader: __webpack_require__(68) };



	var GroundReflection = function GroundReflection(renderer, width, height, params) {

	    var _renderer = renderer;
	    var _gl = _renderer.getContext();
	    var _width = width || 512;
	    var _height = height || 512;
	    var _gaussianPass, _drawPass;
	    var _groundPlane, _groundCenter;
	    var _reflCamera;
	    var _isGroundCulled = false;
	    var _clearColor = new THREE.Color(0, 0, 0);
	    var _clearPass,_useClearPass = false;
	    var _envMapBg = false;

	    this.inTarget = undefined;
	    this.outTarget = undefined;

	    // param defaults
	    var _params = {
	        color: new THREE.Color(1.0, 1.0, 1.0),
	        alpha: 0.3,
	        texScale: 0.5,
	        blurRadius: 2,
	        blurTexScale: 0.5,
	        fadeAngle: Math.PI / 18 };


	    // PRIVATE FUNCTIONS

	    var getReflectionMatrix = function getReflectionMatrix(plane) {
	        var N = plane.normal;
	        var C = plane.constant;
	        return new THREE.Matrix4().set(
	        1 - 2 * N.x * N.x, -2 * N.y * N.x, -2 * N.x * N.z, -2 * C * N.x,
	        -2 * N.x * N.y, 1 - 2 * N.y * N.y, -2 * N.y * N.z, -2 * C * N.y,
	        -2 * N.x * N.z, -2 * N.y * N.z, 1 - 2 * N.z * N.z, -2 * C * N.z,
	        0, 0, 0, 1);

	    };

	    // PUBLIC FUNCTIONS
	    // note: currently scale is not used
	    this.setTransform = function (center, upDir, scale) {
	        _groundCenter = center;
	        _groundPlane.normal = upDir;
	        _groundPlane.constant = -center.dot(upDir);
	    };

	    this.cleanup = function () {
	        if (_gaussianPass) _gaussianPass.cleanup();
	        if (this.inTarget) this.inTarget.dispose();
	        if (this.outTarget) this.outTarget.dispose();
	    };

	    this.setSize = function (width, height) {
	        _width = width;
	        _height = height;

	        this.cleanup();

	        // init targets

	        this.inTarget = new THREE.WebGLRenderTarget(
	        _width * _params.texScale,
	        _height * _params.texScale,
	        {
	            magFilter: THREE.LinearFilter,
	            minFilter: THREE.LinearFilter,
	            format: THREE.RGBAFormat,
	            stencilBuffer: false });


	        this.inTarget.generateMipmaps = false;

	        // outTarget is where we're rendering the ground reflection image (without anything else)
	        // and that we will merge with the regular rendering by putting it on a quad.
	        this.outTarget = new THREE.WebGLRenderTarget(
	        _width * _params.texScale,
	        _height * _params.texScale,
	        {
	            magFilter: THREE.LinearFilter,
	            minFilter: THREE.LinearFilter,
	            format: THREE.RGBAFormat,
	            stencilBuffer: false });


	        this.outTarget.generateMipmaps = false;

	        // init gaussian pass

	        if (!_gaussianPass)
	        _gaussianPass = new GaussianPass(
	        _width * _params.texScale * _params.blurTexScale,
	        _height * _params.texScale * _params.blurTexScale,
	        _params.blurRadius,
	        1.0, {
	            hasAlpha: true,
	            blending: true,
	            flipUV: true });else


	        _gaussianPass.setSize(
	        _width * _params.texScale * _params.blurTexScale,
	        _height * _params.texScale * _params.blurTexScale);
	    };

	    this.updateCamera = function (camera) {
	        // do not render if camera cannot see top of plane
	        var camTarget;
	        if (camera.isPerspective) {
	            // For perspective camera, see if camera location -> point on plane
	            // dotted with the plane's normal is positive. If so, camera is below
	            // plane and ground can be culled.
	            camTarget = _groundCenter.clone();
	        } else {
	            // For orthographic camera, see if camera direction (target - position) 
	            // dotted with the plane's normal is positive. If so, camera is below
	            // plane and ground can be culled.
	            camTarget = camera.target.clone();
	        }
	        var camDir = camera.position.clone().sub(camTarget).normalize();
	        var camAngle = Math.PI / 2 - camDir.angleTo(_groundPlane.normal);
	        _isGroundCulled = camAngle < 0;

	        if (_isGroundCulled) return;

	        // fade out
	        if (_params.fadeAngle > 0) {
	            var fadeAmount = Math.min(_params.fadeAngle, camAngle) / _params.fadeAngle;
	            _gaussianPass.setAlpha(fadeAmount * _params.alpha);
	        }

	        // construct reflected camera
	        var reflMatrix = getReflectionMatrix(_groundPlane);
	        _reflCamera = camera.clone();
	        _reflCamera.applyMatrix(reflMatrix);
	        // MAGIC: scale negative Y and flip UV gives us correct result without messing with face winding
	        _reflCamera.projectionMatrix.elements[5] *= -1;
	        _reflCamera.matrixWorldNeedsUpdate = true;

	        // copy worldUpTransform
	        if (camera.worldUpTransform)
	        _reflCamera.worldUpTransform = camera.worldUpTransform.clone();else

	        _reflCamera.worldUpTransform = new THREE.Matrix4();
	    };

	    this.renderIntoReflection = function (scene) {
	        if (_isGroundCulled) return;
	        _renderer.render(scene, _reflCamera, this.inTarget);

	        // THREE.log("GR render in");
	    };


	    this.prepareGroundReflection = function () {
	        var MAX_PROCESS_FRAMES = 100;
	        var MIN_SCENES_PER_FRAME = 10;

	        var qScenes;
	        var qSceneCount = 0;
	        var qSceneIdx = 0;
	        var maxScenesPerFrame = 0;

	        return function (viewerImpl, groundShadow, needClear) {

	            var modelQueue = viewerImpl.modelQueue();

	            if (this.finished && !needClear ||
	            modelQueue.isEmpty())
	            return false;

	            // reset
	            if (needClear) {
	                this.clear();
	                this.updateCamera(viewerImpl.camera);
	                this.rendered = false;
	                this.finished = false;

	                if (this.isGroundCulled()) {
	                    this.finished = true;
	                    return false;
	                }

	                qScenes = modelQueue.getGeomScenes();
	                qSceneCount = qScenes.length;
	                qSceneIdx = 0;
	                maxScenesPerFrame = Math.max(Math.ceil(qSceneCount / MAX_PROCESS_FRAMES), MIN_SCENES_PER_FRAME);
	            }

	            if (this.isGroundCulled()) {
	                this.finished = true;
	                return false;
	            }

	            // progressive draw into reflection
	            var i = 0;
	            // if progressive rendering is off, or it's on and i < maxScenesPerFrame, then render
	            // the ground reflection; also check that the scene index is less than the scene count
	            // for the loop itself.
	            while ((!viewerImpl.progressiveRender || i < maxScenesPerFrame) &&
	            qSceneIdx < qSceneCount) {
	                var qScene = qScenes[qSceneIdx];

	                if (qScene) {
	                    // passing forceVisible to WebGLRenderer.projectObject()
	                    qScene.forceVisible = true;
	                    this.renderIntoReflection(qScene);
	                    qScene.forceVisible = false;
	                    i++;
	                }

	                qSceneIdx++;
	            }

	            // reflection was dirtied (rendered into)
	            if (qSceneIdx < qSceneCount)
	            this.rendered = false;else

	            this.finished = true;

	            // draw out reflection
	            //
	            // if not rendered
	            // if not below ground
	            //   if finished or
	            //   if progressive reflections, color pass has to be processing
	            //   i.e., if color pass done then only draw the finished reflections
	            if (!this.rendered &&
	            !this.isGroundCulled() && (
	            this.finished ||
	            !modelQueue.isDone()))
	            {

	                this.postprocess(viewerImpl.camera, viewerImpl.matman());

	                if (groundShadow && groundShadow.enabled) {
	                    viewerImpl.renderGroundShadow(this.outTarget);
	                }

	                this.renderReflection(viewerImpl.camera, viewerImpl.renderer().getColorTarget());
	                // Reflections are rendered now, but only when things are really finished should we not re-render;
	                // otherwise what happens is that ".finished" gets set above to true later, when we're done, but
	                // ".rendered" is already true, so this area right here of the code doe not execute, and the
	                // "_phase" variable will never get set to avp.RENDER_HIDDEN, so causing the
	                // ghosted objects to not get rendered in tick() about 200 lines later, see the "if"
	                // "if (_phase === avp.RENDER_NORMAL" for the logic that tests for RENDER_NORMAL; we want to
	                // get into the "else" code there or the final rendering is not done. It's just that simple.
	                this.rendered = this.finished;

	                return true;
	            }

	            return false;
	        };
	    }();


	    // The way the reflection pass works is that we render the reflection
	    // and blur it, etc. and the result is in outTarget. This method then
	    // merges the color buffer and the reflection image by rendering the
	    // reflection image on a screen-fillinq quad (well, a triangle) and
	    // setting depth range so that the depth value is 0.999999+, i.e., at
	    // the back of the scene.
	    // This sort of merge draw means the color target can be left as-is,
	    // no ping-ponging need occur, the reflection is put right into it.
	    this.renderReflection = function (camera, target) {
	        if (_isGroundCulled) return;

	        // Shove the quad with the reflection image to the back of the color buffer.
	        // NOTE: depthRange does not appear to work on Chrome on Windows. See
	        // _drawPass.scene.position.z for further corrective measure.
	        // Also see https://jira.autodesk.com/browse/LMV-1262
	        _gl.depthRange(0.999999, 1);
	        _drawPass.render(_renderer, target, this.outTarget);
	        // restore default range
	        _gl.depthRange(0, 1);

	        // THREE.log("GR render out");
	    };

	    this.toggleEnvMapBackground = function (value) {

	        _envMapBg = value;
	        _clearPass.uniforms.envMapBackground.value = value;
	    };

	    this.postprocess = function (camera) {
	        if (_isGroundCulled) return;

	        // clear outTarget with bg color
	        if (_useClearPass || _envMapBg) {

	            _clearPass.uniforms['uCamDir'].value = camera.getWorldDirection();
	            _clearPass.uniforms['uCamUp'].value = camera.up;
	            _clearPass.uniforms['uResolution'].value.set(_width, _height);
	            _clearPass.uniforms['uHalfFovTan'].value = Math.tan(THREE.Math.degToRad(camera.fov * 0.5));

	            _clearPass.render(_renderer, this.outTarget);
	            _renderer.clearTarget(this.outTarget, false, true, false);
	        } else
	        {
	            _renderer.setClearColor(_clearColor, 1.0);
	            _renderer.clearTarget(this.outTarget, true, true, false);
	        }

	        // blur inTarget with alpha blending over bg in outTarget
	        _gaussianPass.render(_renderer, this.outTarget, this.inTarget);

	        // THREE.log("GR postprocess");
	    };

	    this.clear = function () {
	        // clear with bgColor otherwise there'll be outline problem
	        // using the cheaper flat clear color in this case
	        _renderer.setClearColor(_clearColor, 0);
	        _renderer.clearTarget(this.inTarget, true, true, false);

	        // THREE.log("GR clear");
	    };

	    // params are normalized clamped THREE.Vector3
	    this.setClearColors = function (colorTop, colorBot, skipClearPass) {
	        if (!colorBot) {
	            _clearColor.copy(colorTop);
	            _useClearPass = false;
	        } else
	        {
	            _clearColor.setRGB(
	            0.5 * (colorTop.x + colorBot.x),
	            0.5 * (colorTop.y + colorBot.y),
	            0.5 * (colorTop.z + colorBot.z));

	            // same logic as RenderContext.setClearColors
	            _useClearPass =
	            !colorTop.equals(colorBot) && !skipClearPass;
	            //!av.isAndroidDevice() &&
	            //!av.isIOSDevice();
	        }

	        if (_useClearPass) {
	            _clearPass.uniforms.color1.value.copy(colorTop);
	            _clearPass.uniforms.color2.value.copy(colorBot);
	        }
	    };

	    this.setEnvRotation = function (rotation) {
	        _clearPass.material.envRotationSin = Math.sin(rotation);
	        _clearPass.material.envRotationCos = Math.cos(rotation);
	    };

	    this.isGroundCulled = function () {
	        return _isGroundCulled;
	    };

	    this.setColor = function (color) {
	        _gaussianPass.setColor(_params.color);
	        _params.color.set(color);
	    };

	    this.setAlpha = function (alpha) {
	        _gaussianPass.setAlpha(_params.alpha);
	        _params.alpha = alpha;
	    };

	    // INITIALIZATION

	    if (params) {
	        for (var i in _params) {
	            _params[i] = params[i] !== undefined ? params[i] : _params[i];
	        }
	    }

	    // init passes

	    _drawPass = new ShaderPass(GroundReflectionDrawShader);
	    _drawPass.material.blending = THREE.NoBlending;
	    _drawPass.material.depthTest = true;
	    _drawPass.material.depthWrite = false;
	    // Put the screen-filling quad at the back of the view volume.
	    // This is slightly dangerous, it could go "too far", so we put it at
	    // -0.999999 to keep it from being on the razor's edge.
	    // See https://jira.autodesk.com/browse/LMV-1262
	    _drawPass.scene.position.z = -0.999999;

	    if (params.clearPass) {
	        _clearPass = params.clearPass;
	    } else {
	        _clearPass = new ShaderPass(BackgroundShader);
	        _clearPass.material.blending = THREE.NoBlending;
	        _clearPass.material.depthWrite = false;
	        _clearPass.material.depthTest = false;
	    }

	    // init targets
	    this.setSize(_width, _height);

	    _gaussianPass.setAlpha(_params.color);
	    _gaussianPass.setAlpha(_params.alpha);

	    // init plane

	    _groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
	    _groundCenter = new THREE.Vector3(0, 0, 0);

	};

	GroundReflection.prototype.constructor = GroundReflection;

	module.exports = GroundReflection;

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n}\r\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDiffuse;\r\nuniform sampler2D tBackground;\r\nuniform vec4 uColor;\r\nvarying vec2 vUv;\r\nvoid main() {\r\n    vec4 bgCol = texture2D( tBackground, vUv );\r\n    vec4 diffCol = uColor * texture2D( tDiffuse, vUv );\r\n    gl_FragColor = mix(bgCol, diffCol, diffCol.a);\r\n}\r\n";

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\nvoid main() {\r\n    vUv = uv;\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n}\r\n";

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDiffuse;\r\nvarying vec2 vUv;\r\nvoid main() {\r\n    vec4 texel = texture2D( tDiffuse, vUv );\r\n    gl_FragColor = texel;\r\n}\r\n";

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	//var THREE = require('THREE');

	var addLineNumbers = function addLineNumbers(code) {
	    var lines = code.split('\n');
	    for (var i = 0; i < lines.length; i++) {
	        lines[i] = i + 1 + ': ' + lines[i];
	    }
	    return lines.join('\n');
	};

	var WebGLShader = function WebGLShader(gl, type, code) {
	    var shader = gl.createShader(type);
	    gl.shaderSource(shader, code);
	    gl.compileShader(shader);
	    if (false /*avp.DEBUG_SHADERS*/) {
	            if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false) {
	                THREE.error('THREE.WebGLShader: Shader couldn\'t compile.');
	            }

	            if (gl.getShaderInfoLog(shader) !== '') {
	                THREE.warn('THREE.WebGLShader: gl.getShaderInfoLog()', gl.getShaderInfoLog(shader), addLineNumbers(code));
	            }
	        }

	    // --enable-privileged-webgl-extension
	    // THREE.log( type, gl.getExtension( 'WEBGL_debug_shaders' ).getTranslatedShaderSource( shader ) );
	    return shader;
	};

	module.exports = WebGLShader;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');
	var chunks = __webpack_require__(5);

	var PhongShader = {

	        uniforms: THREE.UniformsUtils.merge([

	        THREE.UniformsLib["common"],
	        THREE.UniformsLib["bump"],
	        THREE.UniformsLib["normalmap"],
	        THREE.UniformsLib["lights"],
	        THREE.UniformsLib["fog"],
	        chunks.CutPlanesUniforms,
	        chunks.IdUniforms,
	        chunks.ThemingUniform,
	        chunks.ShadowMapUniforms,
	        chunks.WideLinesUniforms,

	        {
	                "emissive": { type: "c", value: new THREE.Color(0x000000) },
	                "specular": { type: "c", value: new THREE.Color(0x111111) },
	                "shininess": { type: "f", value: 30 },
	                "reflMipIndex": { type: "f", value: 0 },

	                "texMatrix": { type: "m3", value: new THREE.Matrix3() },
	                "texMatrixBump": { type: "m3", value: new THREE.Matrix3() },
	                "texMatrixAlpha": { type: "m3", value: new THREE.Matrix3() },

	                "irradianceMap": { type: "t", value: null },
	                "exposureBias": { type: "f", value: 1.0 },
	                "envMapExposure": { type: "f", value: 1.0 },
	                "envRotationSin": { type: "f", value: 0.0 },
	                "envRotationCos": { type: "f", value: 1.0 } }]),




	        vertexShader: __webpack_require__(71),
	        fragmentShader: __webpack_require__(72) };


	THREE.ShaderLib['firefly_phong'] = PhongShader;

	module.exports = PhongShader;

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "varying vec3 vViewPosition;\r\n#ifndef FLAT_SHADED\r\nvarying vec3 vNormal;\r\n#endif\r\n\r\n#if defined( USE_MAP ) || defined( USE_SPECULARMAP )\r\nvarying vec2 vUv;\r\nuniform mat3 texMatrix;\r\n#endif\r\n\r\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\r\nvarying vec2 vUvBump;\r\nuniform mat3 texMatrixBump;\r\n#endif\r\n\r\n#if defined( USE_ALPHAMAP )\r\nvarying vec2 vUvAlpha;\r\nuniform mat3 texMatrixAlpha;\r\n#endif\r\n\r\n#if defined( USE_ENVMAP )\r\n#if ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\r\nuniform float refractionRatio;\r\n#endif\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0 || NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n\r\n#ifdef USE_COLOR\r\nvarying vec3 vColor;\r\n#endif\r\n\r\n\r\n#ifdef USE_LOGDEPTHBUF\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\nvarying float vFragDepth;\r\n#endif\r\nuniform float logDepthBufFC;\r\n#endif\r\n\r\n#ifdef MRT_NORMALS\r\nvarying float depth;\r\n#endif\r\n\r\n#include<pack_normals>\r\n#include<instancing_decl_vert>\r\n#include<id_decl_vert>\r\n#include<wide_lines_decl>\r\n\r\n#include<shadowmap_decl_vert>\r\n\r\nvoid main() {\r\n\r\n#if defined( USE_MAP ) || defined( USE_SPECULARMAP )\r\n    vUv = (texMatrix * vec3(uv, 1.0)).xy;\r\n#endif\r\n\r\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\r\n    vUvBump = (texMatrixBump * vec3(uv, 1.0)).xy;\r\n#endif\r\n\r\n#if defined( USE_ALPHAMAP )\r\n    vUvAlpha = (texMatrixAlpha * vec3(uv, 1.0)).xy;\r\n#endif\r\n\r\n\r\n#ifdef USE_COLOR\r\n#ifdef GAMMA_INPUT\r\n    vColor = color * color;\r\n#else\r\n    vColor = color;\r\n#endif\r\n#endif\r\n\r\n#ifdef UNPACK_NORMALS\r\n    vec3 objectNormal = decodeNormal(normal);\r\n#else\r\n    vec3 objectNormal = normal;\r\n#endif\r\n\r\n#ifdef FLIP_SIDED\r\n    objectNormal = -objectNormal;\r\n#endif\r\n\r\n\r\n    objectNormal = getInstanceNormal(objectNormal);\r\n    vec3 instPos = getInstancePos(position);\r\n\r\n    vec3 transformedNormal = normalMatrix * objectNormal;\r\n\r\n#ifndef FLAT_SHADED\r\n    vNormal = normalize( transformedNormal );\r\n#endif\r\n\r\n    vec4 mvPosition = modelViewMatrix * vec4( instPos, 1.0 );\r\n\r\n    gl_Position = projectionMatrix * mvPosition;\r\n\r\n#include<wide_lines_vert>\r\n\r\n    vViewPosition = -mvPosition.xyz;\r\n\r\n#if MAX_SPOT_LIGHTS > 0 || NUM_CUTPLANES > 0\r\n    vec4 worldPosition = modelMatrix * vec4( instPos, 1.0 );\r\n    vWorldPosition = worldPosition.xyz;\r\n#endif\r\n\r\n\r\n#ifdef USE_LOGDEPTHBUF\r\n    if (projectionMatrix[3][3] == 0.0) {\r\n        gl_Position.z = log2(max(1.0e-6, gl_Position.w + 1.0)) * logDepthBufFC;\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n        vFragDepth = 1.0 + gl_Position.w;\r\n#else\r\n        gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\r\n#endif\r\n    } else {\r\n\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n        vFragDepth = 1.0 + vViewPosition.z;\r\n#else\r\n\r\n#endif\r\n    }\r\n#endif\r\n\r\n#ifdef MRT_NORMALS\r\n    depth = mvPosition.z;\r\n#endif\r\n\r\n#include<shadowmap_vert>\r\n#include<id_vert>\r\n}\r\n";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\nuniform vec3 emissive;\r\nuniform vec3 specular;\r\nuniform float shininess;\r\n\r\n#include<env_sample>\r\n\r\n#ifdef USE_COLOR\r\nvarying vec3 vColor;\r\n#endif\r\n\r\n#ifdef GAMMA_INPUT\r\nvec3 InputToLinear(vec3 c) {\r\n    return c * c;\r\n}\r\nfloat InputToLinear(float c) {\r\n    return c * c;\r\n}\r\n#else\r\nvec3 InputToLinear(vec3 c) {\r\n    return c;\r\n}\r\nfloat InputToLinear(float c) {\r\n    return c;\r\n}\r\n#endif\r\n\r\n#if defined( USE_MAP ) || defined( USE_SPECULARMAP )\r\nvarying vec2 vUv;\r\n#endif\r\n\r\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\r\nvarying vec2 vUvBump;\r\n#endif\r\n\r\n#if defined( USE_ALPHAMAP )\r\nvarying vec2 vUvAlpha;\r\n#endif\r\n\r\n#ifdef USE_MAP\r\nuniform sampler2D map;\r\n#endif\r\n\r\n#if TONEMAP_OUTPUT > 0\r\nuniform float exposureBias;\r\n#include<tonemap>\r\n#endif\r\n\r\n#if defined(IRR_RGBM) || defined(ENV_RGBM) || defined(ENV_GAMMA) || defined(IRR_GAMMA)\r\nuniform float envMapExposure;\r\n#endif\r\n\r\n#ifdef USE_FOG\r\nuniform vec3 fogColor;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\n#endif\r\n#include<id_decl_frag>\r\n#include<theming_decl_frag>\r\n#include<shadowmap_decl_frag>\r\n\r\n#ifdef USE_ENVMAP\r\n\r\nuniform float reflMipIndex;\r\n\r\nuniform float reflectivity;\r\nuniform samplerCube envMap;\r\n\r\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\r\n\r\nuniform float refractionRatio;\r\n\r\n#endif\r\n\r\nvec3 sampleReflection(vec3 dir, float mipIndex) {\r\n\r\n    vec3 adjDir = adjustLookupVector(dir);\r\n\r\n#ifdef ENV_GAMMA\r\n\r\n#ifdef HAVE_TEXTURE_LOD\r\n    vec4 envTexColor = textureCubeLodEXT( envMap, adjDir, mipIndex );\r\n#else\r\n\r\n\r\n    vec4 envTexColor = textureCube( envMap, adjDir, mipIndex );\r\n#endif\r\n\r\n    return GammaDecode(envTexColor, envMapExposure);\r\n\r\n#elif defined(ENV_RGBM)\r\n\r\n#ifdef HAVE_TEXTURE_LOD\r\n    vec4 envTexColor = textureCubeLodEXT( envMap, adjDir, mipIndex );\r\n#else\r\n\r\n\r\n    vec4 envTexColor = textureCube( envMap, adjDir, mipIndex );\r\n#endif\r\n\r\n    return RGBMDecode(envTexColor, envMapExposure);\r\n\r\n#else\r\n\r\n\r\n\r\n    vec4 envTexColor = textureCube( envMap, adjDir );\r\n    vec3 cubeColor = envTexColor.xyz;\r\n\r\n#ifdef GAMMA_INPUT\r\n    cubeColor *= cubeColor;\r\n#endif\r\n\r\n    return cubeColor;\r\n\r\n#endif\r\n\r\n}\r\n\r\n#endif\r\n\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\r\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\r\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\r\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\r\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#ifdef USE_IRRADIANCEMAP\r\nuniform samplerCube irradianceMap;\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0 || NUM_CUTPLANES > 0\r\nvarying highp vec3 vWorldPosition;\r\n#endif\r\n\r\nvarying highp vec3 vViewPosition;\r\n#ifndef FLAT_SHADED\r\nvarying highp vec3 vNormal;\r\n#endif\r\n\r\n#ifdef USE_BUMPMAP\r\n\r\nuniform sampler2D bumpMap;\r\nuniform float bumpScale;\r\n\r\n\r\n\r\n\r\n\r\n\r\nvec2 dHdxy_fwd() {\r\n\r\n    vec2 dSTdx = dFdx( vUvBump );\r\n    vec2 dSTdy = dFdy( vUvBump );\r\n\r\n    float Hll = bumpScale * GET_BUMPMAP(vUvBump).x;\r\n    float dBx = bumpScale * GET_BUMPMAP(vUvBump + dSTdx).x - Hll;\r\n    float dBy = bumpScale * GET_BUMPMAP(vUvBump + dSTdy).x - Hll;\r\n\r\n    return vec2( dBx, dBy );\r\n\r\n}\r\n\r\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\r\n\r\n    vec3 vSigmaX = dFdx( surf_pos );\r\n    vec3 vSigmaY = dFdy( surf_pos );\r\n    vec3 vN = surf_norm;\r\n\r\n    vec3 R1 = cross( vSigmaY, vN );\r\n    vec3 R2 = cross( vN, vSigmaX );\r\n\r\n    float fDet = dot( vSigmaX, R1 );\r\n\r\n    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\r\n    return normalize( abs( fDet ) * surf_norm - vGrad );\r\n\r\n}\r\n\r\n#endif\r\n\r\n\r\n#ifdef USE_NORMALMAP\r\n\r\nuniform sampler2D normalMap;\r\nuniform vec2 normalScale;\r\n\r\n\r\n\r\n\r\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\r\n\r\n    vec3 q0 = dFdx( eye_pos.xyz );\r\n    vec3 q1 = dFdy( eye_pos.xyz );\r\n    vec2 st0 = dFdx( vUvBump.st );\r\n    vec2 st1 = dFdy( vUvBump.st );\r\n\r\n    vec3 S = normalize(  q0 * st1.t - q1 * st0.t );\r\n    vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\r\n    vec3 N = normalize( surf_norm );\r\n\r\n    vec3 mapN = GET_NORMALMAP(vUvBump).xyz * 2.0 - 1.0;\r\n    mapN.xy = normalScale * mapN.xy;\r\n    mat3 tsn = mat3( S, T, N );\r\n    return normalize( tsn * mapN );\r\n\r\n}\r\n\r\n#endif\r\n\r\n\r\n#ifdef USE_SPECULARMAP\r\nuniform sampler2D specularMap;\r\n#endif\r\n\r\n#ifdef USE_ALPHAMAP\r\nuniform sampler2D alphaMap;\r\n#endif\r\n\r\n#include<hatch_pattern>\r\n\r\n#ifdef USE_LOGDEPTHBUF\r\nuniform float logDepthBufFC;\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n#extension GL_EXT_frag_depth : enable\r\nvarying highp float vFragDepth;\r\n#endif\r\n#endif\r\n\r\nvec3 Schlick_v3(vec3 v, float cosHV) {\r\n    float facing = max(1.0 - cosHV, 0.0);\r\n    float facing2 = facing * facing;\r\n    return v + (1.0 - v) * facing * facing2 * facing2;\r\n}\r\n\r\nfloat Schlick_f(float v, float cosHV) {\r\n    float facing = max(1.0 - cosHV, 0.0);\r\n    float facing2 = facing * facing;\r\n    return v + ( 1.0 - v ) * facing2 * facing2 * facing;\r\n}\r\n\r\n#include<cutplanes>\r\n\r\nvoid main() {\r\n\r\n#if NUM_CUTPLANES > 0\r\n    checkCutPlanes(vWorldPosition);\r\n#endif\r\n\r\n    gl_FragColor = vec4( vec3 ( 1.0 ), opacity );\r\n\r\n#ifdef USE_MAP\r\n    vec4 texelColor = GET_MAP(vUv);\r\n#ifdef MAP_INVERT\r\n    texelColor.xyz = 1.0-texelColor.xyz;\r\n#endif\r\n#ifdef GAMMA_INPUT\r\n    texelColor.xyz *= texelColor.xyz;\r\n#endif\r\n    gl_FragColor = gl_FragColor * texelColor;\r\n#endif\r\n\r\n#ifdef USE_ALPHAMAP\r\n    vec4 texelAlpha = GET_ALPHAMAP(vUvAlpha);\r\n    gl_FragColor.a *= texelAlpha.r;\r\n#endif\r\n\r\n#ifdef ALPHATEST\r\n    if ( gl_FragColor.a < ALPHATEST ) discard;\r\n#endif\r\n\r\n    float specularStrength;\r\n\r\n#ifdef USE_SPECULARMAP\r\n    vec4 texelSpecular = GET_SPECULARMAP(vUv);\r\n    specularStrength = texelSpecular.r;\r\n#else\r\n    specularStrength = 1.0;\r\n#endif\r\n\r\n#ifndef FLAT_SHADED\r\n    vec3 normal = normalize( vNormal );\r\n#ifdef DOUBLE_SIDED\r\n    normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\r\n#endif\r\n#else\r\n    vec3 fdx = dFdx( vViewPosition );\r\n    vec3 fdy = dFdy( vViewPosition );\r\n    vec3 normal = normalize( cross( fdx, fdy ) );\r\n#endif\r\n\r\n    vec3 geomNormal = normal;\r\n\r\n#ifdef USE_NORMALMAP\r\n    normal = perturbNormal2Arb( -vViewPosition, normal );\r\n#elif defined( USE_BUMPMAP )\r\n    normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec3 viewDirection;\r\n    if (projectionMatrix[3][3] == 0.0) {\r\n        viewDirection = normalize( vViewPosition );\r\n    } else {\r\n        viewDirection = vec3(0.0, 0.0, 1.0);\r\n    }\r\n\r\n    vec3 totalDiffuse = vec3( 0.0 );\r\n    vec3 totalSpecular = vec3( 0.0 );\r\n\r\n\r\n\r\n    float shininessB = shininess * 4.0;\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n    vec3 pointDiffuse  = vec3( 0.0 );\r\n    vec3 pointSpecular = vec3( 0.0 );\r\n\r\n    for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n        vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n        vec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n        float lDistance = 1.0;\r\n        if ( pointLightDistance[ i ] > 0.0 )\r\n            lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n        lVector = normalize( lVector );\r\n\r\n\r\n\r\n        float dotProduct = dot( normal, lVector );\r\n\r\n        float pointDiffuseWeight = max( dotProduct, 0.0 );\r\n\r\n\r\n        pointDiffuse  += InputToLinear(diffuse) * InputToLinear(pointLightColor[ i ]) * pointDiffuseWeight * lDistance;\r\n\r\n\r\n\r\n        vec3 pointHalfVector = normalize( lVector + viewDirection );\r\n        float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\r\n        float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininessB ), 0.0 );\r\n        float specularNormalization = shininessB * 0.125 + 0.25;\r\n        vec3 schlick = Schlick_v3(InputToLinear(specular), dot( lVector, pointHalfVector ) );\r\n        pointSpecular += schlick * InputToLinear(pointLightColor[ i ]) * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization ;\r\n\r\n    }\r\n\r\n    totalDiffuse += pointDiffuse;\r\n    totalSpecular += pointSpecular;\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\r\n    vec3 spotDiffuse  = vec3( 0.0 );\r\n    vec3 spotSpecular = vec3( 0.0 );\r\n\r\n    for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\r\n        vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n        vec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n        float lDistance = 1.0;\r\n        if ( spotLightDistance[ i ] > 0.0 )\r\n            lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n        lVector = normalize( lVector );\r\n\r\n        float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n        if ( spotEffect > spotLightAngleCos[ i ] ) {\r\n\r\n            spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\r\n\r\n\r\n\r\n            float dotProduct = dot( normal, lVector );\r\n\r\n            float spotDiffuseWeight = max( dotProduct, 0.0 );\r\n\r\n            spotDiffuse += InputToLinear(diffuse) * InputToLinear(spotLightColor[ i ]) * spotDiffuseWeight * lDistance * spotEffect;\r\n\r\n\r\n\r\n            vec3 spotHalfVector = normalize( lVector + viewDirection );\r\n            float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n            float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininessB ), 0.0 );\r\n\r\n            float specularNormalization = shininessB * 0.125 + 0.25;\r\n            vec3 schlick = Schlick_v3(InputToLinear(specular), dot( lVector, spotHalfVector ) );\r\n            spotSpecular += schlick * InputToLinear(spotLightColor[ i ]) * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\r\n        }\r\n\r\n    }\r\n\r\n    totalDiffuse += spotDiffuse;\r\n    totalSpecular += spotSpecular;\r\n\r\n#endif\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n    vec3 dirDiffuse  = vec3( 0.0 );\r\n    vec3 dirSpecular = vec3( 0.0 );\r\n\r\n    for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\r\n\r\n        vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n        vec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\r\n\r\n        float dotProduct = dot( normal, dirVector );\r\n\r\n        float dirDiffuseWeight = max( dotProduct, 0.0 );\r\n\r\n        dirDiffuse  += InputToLinear(diffuse) * InputToLinear(directionalLightColor[ i ]) * dirDiffuseWeight;\r\n\r\n\r\n\r\n        vec3 dirHalfVector = normalize( dirVector + viewDirection );\r\n        float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n        float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininessB ), 0.0 );\r\n\r\n        float specularNormalization = shininessB * 0.125 + 0.25;\r\n        vec3 schlick = Schlick_v3(InputToLinear(specular), dot( dirVector, dirHalfVector ));\r\n\r\n        dirSpecular += schlick * InputToLinear(directionalLightColor[ i ]) * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\r\n    }\r\n\r\n    totalDiffuse += dirDiffuse;\r\n    totalSpecular += dirSpecular;\r\n\r\n#endif\r\n\r\n\r\n\r\n#ifdef USE_IRRADIANCEMAP\r\n    vec3 worldNormal = mat3(viewMatrixInverse) * normal;\r\n    vec3 indirectDiffuse = sampleIrradianceMap(worldNormal, irradianceMap, envMapExposure);\r\n\r\n    indirectDiffuse = applyEnvShadow(indirectDiffuse, worldNormal);\r\n\r\n    totalDiffuse += InputToLinear(diffuse) * indirectDiffuse;\r\n#endif\r\n\r\n\r\n#ifdef METAL\r\n    gl_FragColor.xyz = gl_FragColor.xyz * ( InputToLinear(emissive) + totalDiffuse + ambientLightColor * InputToLinear(diffuse) + totalSpecular );\r\n#else\r\n    gl_FragColor.xyz = gl_FragColor.xyz * ( InputToLinear(emissive) + totalDiffuse + ambientLightColor * InputToLinear(diffuse) ) + totalSpecular;\r\n#endif\r\n\r\n\r\n\r\n#ifdef USE_COLOR\r\n    gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\r\n#endif\r\n\r\n\r\n#if defined(USE_ENVMAP)\r\n\r\n    vec3 reflectVec;\r\n\r\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\r\n\r\n#ifdef ENVMAP_MODE_REFLECTION\r\n    reflectVec = reflect( -viewDirection, normal );\r\n#else \r\n    reflectVec = refract( -viewDirection, normal, refractionRatio );\r\n#endif\r\n\r\n#else\r\n\r\n    reflectVec = reflect( -viewDirection, normal );\r\n\r\n#endif\r\n\r\n    reflectVec = mat3(viewMatrixInverse) * reflectVec;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    float reflectScale = 1.0;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec3 cubeColor = sampleReflection(reflectVec, reflMipIndex);\r\n\r\n    cubeColor *= reflectScale;\r\n\r\n    float facing = dot( viewDirection, geomNormal );\r\n\r\n\r\n\r\n\r\n\r\n    if (facing < -1e-2)\r\n        facing = 1.0;\r\n    else\r\n        facing = max(1e-6, facing);\r\n\r\n    vec3 schlickRefl;\r\n\r\n#ifdef METAL\r\n\r\n\r\n    schlickRefl = InputToLinear(specular);\r\n\r\n#else\r\n\r\n\r\n    schlickRefl = Schlick_v3(InputToLinear(specular), facing);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    gl_FragColor.a = mix(gl_FragColor.a, Schlick_f(gl_FragColor.a, facing), reflectivity);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    float invSchlick = (1.0 - facing * 0.5);\r\n    float invSchlick2 = invSchlick * invSchlick;\r\n    float norm_factor = 1.0 - invSchlick * invSchlick2 * invSchlick2;\r\n\r\n\r\n    norm_factor = (28.0 / 23.0) * norm_factor;\r\n\r\n    gl_FragColor.xyz *= norm_factor * (1.0 - InputToLinear(specular));\r\n\r\n#endif\r\n\r\n\r\n    gl_FragColor.xyz += cubeColor.xyz * specularStrength * schlickRefl.xyz;\r\n\r\n#ifdef CLEARCOAT\r\n\r\n    vec3 reflectVecClearcoat = reflect( -viewDirection, geomNormal );\r\n    reflectVecClearcoat = mat3(viewMatrixInverse) * reflectVecClearcoat;\r\n\r\n    vec3 cubeColorClearcoat = sampleReflection(reflectVecClearcoat, 0.0);\r\n\r\n\r\n    float schlickClearcoat = Schlick_f(InputToLinear(reflectivity), facing);\r\n\r\n\r\n\r\n    gl_FragColor.xyz = mix(gl_FragColor.xyz, cubeColorClearcoat * schlickClearcoat, 0.5);\r\n\r\n#endif\r\n\r\n\r\n\r\n\r\n#endif\r\n\r\n#if TONEMAP_OUTPUT == 1\r\n    gl_FragColor.xyz = toneMapCanonOGS_WithGamma_WithColorPerserving(exposureBias * gl_FragColor.xyz);\r\n#elif TONEMAP_OUTPUT == 2\r\n    gl_FragColor.xyz = toneMapCanonFilmic_WithGamma( exposureBias * gl_FragColor.xyz );\r\n#endif\r\n\r\n\r\n\r\n#ifdef USE_FOG\r\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\r\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\r\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n#endif\r\n#include<theming_frag>\r\n#include<final_frag>\r\n\r\n}\r\n";

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";var inverseMatrix;
	var ray;

	var vA;
	var vB;
	var vC;

	function init_three() {

	    if (!inverseMatrix) {
	        inverseMatrix = new THREE.Matrix4();
	        ray = new THREE.Ray();

	        vA = new THREE.Vector3();
	        vB = new THREE.Vector3();
	        vC = new THREE.Vector3();
	    }
	}

	function meshRayCast(mesh, raycaster, intersects) {

	    init_three();

	    var geometry = mesh.geometry;

	    if (!geometry)
	    return;

	    var material = mesh.material;

	    var side = material ? material.side : THREE.FrontSide;

	    var attributes = geometry.attributes;

	    inverseMatrix.getInverse(mesh.matrixWorld);
	    ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);

	    var a, b, c, i, j, il;
	    var precision = raycaster.precision;
	    var positions, stride, intersectionPoint, distance;

	    if (attributes.index !== undefined) {

	        var indices = attributes.index.array || geometry.ib;
	        positions = geometry.vb ? geometry.vb : attributes.position.array;
	        stride = geometry.vb ? geometry.vbstride : 3;
	        var offsets = geometry.offsets;

	        if (!offsets || offsets.length === 0) {

	            offsets = [{ start: 0, count: indices.length, index: 0 }];

	        }

	        for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

	            var start = offsets[oi].start;
	            var count = offsets[oi].count;
	            var index = offsets[oi].index;

	            for (i = start, il = start + count; i < il; i += 3) {

	                a = index + indices[i];
	                b = index + indices[i + 1];
	                c = index + indices[i + 2];

	                vA.fromArray(positions, a * stride);
	                vB.fromArray(positions, b * stride);
	                vC.fromArray(positions, c * stride);

	                if (side === THREE.BackSide) {

	                    intersectionPoint = ray.intersectTriangle(vC, vB, vA, true);

	                } else {

	                    intersectionPoint = ray.intersectTriangle(vA, vB, vC, side !== THREE.DoubleSide);

	                }

	                if (intersectionPoint === null) continue;

	                intersectionPoint.applyMatrix4(mesh.matrixWorld);

	                distance = raycaster.ray.origin.distanceTo(intersectionPoint);

	                if (distance < precision || distance < raycaster.near || distance > raycaster.far) continue;

	                intersects.push({

	                    distance: distance,
	                    point: intersectionPoint,
	                    face: new THREE.Face3(a, b, c, THREE.Triangle.normal(vA, vB, vC)),
	                    faceIndex: null,
	                    fragId: mesh.fragId,
	                    dbId: mesh.dbId });



	            }

	        }

	    } else {

	        positions = geometry.vb ? geometry.vb : attributes.position.array;
	        stride = geometry.vb ? geometry.vbstride : 3;

	        for (i = 0, j = 0, il = positions.length; i < il; i += 3, j += 9) {

	            a = i;
	            b = i + 1;
	            c = i + 2;

	            vA.fromArray(positions, a * stride);
	            vB.fromArray(positions, b * stride);
	            vC.fromArray(positions, c * stride);

	            if (material.side === THREE.BackSide) {

	                intersectionPoint = ray.intersectTriangle(vC, vB, vA, true);

	            } else {

	                intersectionPoint = ray.intersectTriangle(vA, vB, vC, material.side !== THREE.DoubleSide);

	            }

	            if (intersectionPoint === null) continue;

	            intersectionPoint.applyMatrix4(mesh.matrixWorld);

	            distance = raycaster.ray.origin.distanceTo(intersectionPoint);

	            if (distance < precision || distance < raycaster.near || distance > raycaster.far) continue;

	            intersects.push({

	                distance: distance,
	                point: intersectionPoint,
	                face: new THREE.Face3(a, b, c, THREE.Triangle.normal(vA, vB, vC)),
	                faceIndex: null,
	                fragId: mesh.fragId,
	                dbId: mesh.dbId });



	        }

	    }

	}


	function lineRayCast(mesh, raycaster, intersects) {

	    init_three();

	    var geometry = mesh.geometry;

	    if (!geometry)
	    return;

	    var precision = raycaster.linePrecision;
	    var wide_lines = false;
	    if (mesh.isWideLine && mesh.geometry.lineWidth) {
	        precision = mesh.geometry.lineWidth;
	        wide_lines = true;
	    }
	    var precisionSq = precision * precision;

	    inverseMatrix.getInverse(mesh.matrixWorld);
	    ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);

	    var vStart = new THREE.Vector3();
	    var vEnd = new THREE.Vector3();
	    var interSegment = new THREE.Vector3();
	    var interRay = new THREE.Vector3();
	    var step = 2;
	    if (mesh.mode === THREE.LineStrip)
	    step = 1;
	    if (wide_lines)
	    step = 6;

	    var positions, stride, distance, distSq;
	    var i;

	    if (geometry instanceof THREE.BufferGeometry) {

	        var attributes = geometry.attributes;

	        if (attributes.index !== undefined) {

	            var indices = geometry.ib ? geometry.ib : attributes.index.array;
	            positions = geometry.vb ? geometry.vb : attributes.position.array;
	            stride = geometry.vb ? geometry.vbstride : 3;
	            var offsets = geometry.offsets;

	            if (!offsets || offsets.length === 0) {

	                offsets = [{ start: 0, count: indices.length, index: 0 }];

	            }

	            for (var oi = 0; oi < offsets.length; oi++) {

	                var start = offsets[oi].start;
	                var count = offsets[oi].count;
	                var index = offsets[oi].index;

	                for (i = start; i < start + count - 1; i += step) {

	                    var a = index + indices[i];
	                    var b = index + indices[i + 1];

	                    vStart.fromArray(positions, a * stride);
	                    vEnd.fromArray(positions, b * stride);

	                    distSq = ray.distanceSqToSegment(vStart, vEnd, interRay, interSegment);

	                    if (distSq > precisionSq) continue;

	                    var intersectionPoint = interSegment.clone().applyMatrix4(mesh.matrixWorld);

	                    distance = raycaster.ray.origin.distanceTo(intersectionPoint);

	                    if (distance < raycaster.near || distance > raycaster.far) continue;

	                    intersects.push({

	                        distance: distance,
	                        // What do we want? intersection point on the ray or on the segment??
	                        // point: raycaster.ray.at( distance ),
	                        point: intersectionPoint,
	                        face: null,
	                        faceIndex: null,
	                        fragId: mesh.fragId,
	                        dbId: mesh.dbId });



	                }

	            }

	        } else {

	            positions = geometry.vb ? geometry.vb : attributes.position.array;
	            stride = geometry.vb ? geometry.vbstride : 3;

	            for (i = 0; i < positions.length / stride - 1; i += step) {

	                vStart.fromArray(positions, stride * i);
	                vEnd.fromArray(positions, stride * i + stride);

	                distSq = ray.distanceSqToSegment(vStart, vEnd, interRay, interSegment);

	                if (distSq > precisionSq) continue;

	                var intersectionPoint = interSegment.clone().applyMatrix4(mesh.matrixWorld);

	                distance = raycaster.ray.origin.distanceTo(intersectionPoint);

	                if (distance < raycaster.near || distance > raycaster.far) continue;

	                intersects.push({

	                    distance: distance,
	                    // What do we want? intersection point on the ray or on the segment??
	                    // point: raycaster.ray.at( distance ),
	                    point: intersectionPoint,
	                    face: null,
	                    faceIndex: null,
	                    fragId: mesh.fragId,
	                    dbId: mesh.dbId });


	            }

	        }

	    }
	}

	/// c.f. THREE.PointCloud.prototype.raycast()
	function pointRayCast(mesh, raycaster, intersects) {

	    init_three();

	    var geometry = mesh.geometry;
	    if (!geometry)
	    return;

	    inverseMatrix.getInverse(mesh.matrixWorld);
	    ray.copy(raycaster.ray).applyMatrix4(inverseMatrix);

	    var precision = raycaster.precision;
	    var point = new THREE.Vector3();

	    var pickRadius = raycaster.params.PointCloud.threshold;
	    if (!pickRadius) pickRadius = 1;
	    pickRadius *= Math.max(3, geometry.pointSize); // small point sizes are too hard to pick!
	    pickRadius /= 4;

	    if (geometry instanceof THREE.BufferGeometry) {

	        var attributes = geometry.attributes;

	        if (attributes.index) {

	            var indices = geometry.ib;
	            var vertexBuffer = geometry.vb;
	            var stride = geometry.vbstride;
	            var offsets = geometry.offsets;
	            if (!offsets || offsets.length === 0) {
	                offsets = [{ start: 0, count: indices.length, index: 0 }];
	            }

	            for (var oi = 0, ol = offsets.length; oi < ol; ++oi) {

	                var start = offsets[oi].start;
	                var count = offsets[oi].count;
	                var index = offsets[oi].index;

	                for (var i = start, il = start + count; i < il; ++i) {

	                    var currentIndex = index + indices[i];
	                    point.fromArray(vertexBuffer, currentIndex * stride);

	                    // points are drawn as squares, but treat them as circles
	                    // to save having to calculate the orientation
	                    var distanceToRay = ray.distanceToPoint(point);
	                    if (distanceToRay > pickRadius) {
	                        continue;
	                    }

	                    var intersectionPoint = ray.closestPointToPoint(point);
	                    if (intersectionPoint === null) continue;
	                    intersectionPoint.applyMatrix4(mesh.matrixWorld);

	                    var distance = raycaster.ray.origin.distanceTo(intersectionPoint);
	                    if (distance < precision || distance < raycaster.near || distance > raycaster.far) {
	                        continue;
	                    }

	                    intersects.push({

	                        distance: distance,
	                        point: point,
	                        face: null,
	                        faceIndex: null,
	                        fragId: mesh.fragId,
	                        dbId: mesh.dbId });



	                }
	            }

	        } else {
	            // not implemented - non-indexed
	        }

	    } else {
	            // not implemented - other geometry types
	        }

	}


	function rayCast(mesh, raycaster, intersects) {

	    if (mesh.isLine || mesh.isWideLine)
	    lineRayCast(mesh, raycaster, intersects);else
	    if (mesh.isPoint)
	    pointRayCast(mesh, raycaster, intersects);else

	    meshRayCast(mesh, raycaster, intersects);

	}


	function intersectObjectRec(object, raycaster, intersects, recursive) {

	    if (object instanceof THREE.Mesh)
	    rayCast(object, raycaster, intersects); //use our extended impl in case of Mesh.
	    else
	        object.raycast(raycaster, intersects); //fall back to normal THREE.js impl

	    if (recursive === true) {

	        var children = object.children;

	        for (var i = 0, l = children.length; i < l; i++) {

	            intersectObjectRec(children[i], raycaster, intersects, true);

	        }

	    }

	}

	var descSort = function descSort(a, b) {
	    return a.distance - b.distance;
	};

	function intersectObject(object, raycaster, intersects, recursive) {
	    intersectObjectRec(object, raycaster, intersects, recursive);
	    intersects.sort(descSort);
	}


	module.exports = {
	    meshRayCast: meshRayCast,
	    lineRayCast: lineRayCast,
	    rayCast: rayCast,
	    intersectObject: intersectObject };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);

	/**
	                                         * Maintains a list of buffer geometries and running totals of their memory usage, etc.
	                                         * Each geometry gets an integer ID to be used as reference in packed fragment lists.
	                                         * @param {number} numObjects Number of objects (may be 0 if not known in advance).
	                                         * @param {boolean} is2d True for 2D datasets.
	                                         * @param {boolean} [disableStreaming] Set to true for small models to enforce full GPU upload.
	                                         * @constructor
	                                         */
	function GeometryList(numObjects, is2d, disableStreaming) {
	    // array of BufferGeometry instances. Indexed by svfid.
	    this.geoms = [null]; //keep index 0 reserved for invalid id

	    this.numGeomsInMemory = 0; // total number of geoms added via addGeometry(..) (may be <this.geoms.length)
	    this.geomMemory = 0; // total memory in bytes of all geoms
	    this.gpuMeshMemory = 0; // total memory in bytes of all geoms, exluding those that we draw from system memory
	    this.gpuNumMeshes = 0; // total number of geoms etries that we fully upload to GPU for drawing
	    this.geomPolyCount = 0; // summed number of polygons, where geometries with mulitple instances are counted only once.
	    this.instancePolyCount = 0; // summed number of polygons, counted per instance
	    this.is2d = is2d;

	    // 6 floats per geometry
	    this.geomBoxes = new Float32Array(Math.max(1, numObjects) * 6);

	    // If false, we use a heuristic to determine which shapes are uploaded to GPU and which
	    // ones we draw from CPU memory using (slower) streaming draw.
	    this.disableStreaming = !!disableStreaming;
	};

	GeometryList.prototype.getGeometry = function (svfid) {
	    return this.geoms[svfid];
	};

	/**
	    * Determines for a geometry whether to store it on CPU or GPU.
	    * @param {THREE.BufferGeometry} geometry
	    * @param {number}               numInstances
	    * @param {number}               gpuNumMeshes
	    * @param {number}               gpuMeshMemory
	    */
	GeometryList.prototype.chooseMemoryType = function (geometry, numInstances, gpuNumMeshes, gpuMeshMemory) {
	    // Define GPU memory limits for heuristics below
	    var GPU_MEMORY_LOW = globals.GPU_MEMORY_LIMIT;
	    var GPU_MEMORY_HIGH = 2 * GPU_MEMORY_LOW;
	    var GPU_MESH_MAX = globals.GPU_OBJECT_LIMIT;
	    if (this.isf2d)
	    GPU_MEMORY_HIGH *= 2; //there isn't much in terms of textures in 2d drawings, so we can afford to more room for geometry

	    //this.disableStreaming = true;

	    //Heuristically determine if we want to load this mesh onto the GPU
	    //or use streaming draw from system memory
	    if (this.disableStreaming ||
	    gpuMeshMemory < GPU_MEMORY_LOW && gpuNumMeshes < GPU_MESH_MAX) {
	        //We are below the lower limits, so the mesh automatically is
	        //assigned to retained mode
	        geometry.streamingDraw = false;
	        geometry.streamingIndex = false;
	    } else if (gpuMeshMemory >= GPU_MEMORY_HIGH) {
	        //We are above the upper limit, so mesh is automatically
	        //assigned to streaming draw
	        geometry.streamingDraw = true;
	        geometry.streamingIndex = true;
	    } else {
	        //Between the lower and upper limits,
	        //Score mesh importance based on its size
	        //and number of instances it has. If the score
	        //is high, we will prefer to put the mesh on the GPU
	        //so that we don't schlep it across the bus all the time.
	        var weightScore;

	        if (!this.is2d) {
	            weightScore = geometry.byteSize * (numInstances || 1);
	        } else {
	            //In the case of 2D, there are no instances, so we just keep
	            //piling into the GPU until we reach the "high" mark.
	            weightScore = 100001;
	        }

	        if (weightScore < 100000) {
	            geometry.streamingDraw = true;
	            geometry.streamingIndex = true;
	        }
	    }
	};

	/**
	    * Stores geometry in this.geoms, updates overall GPU/CPU statistics (this.geometry etc.),
	    * changes the geometry object:
	    *      - Sets geometry.streamingDraw/streamingIndex (to control whether to draw the mesh from system mem or GPU)
	    *      - Sets geometry.svfid, so that each geom knows its index.
	    *      - Deletes the bbox and bsphere to safe memory
	    * Assumptions:
	    *      - It is not expected to be called multiple times for the same svfid. This would mess up some statistics.
	    * @param {LmvBufferGeometry} geometry - Must not be null. A geometry cannot be added
	    *      to more than one GeometryList. (see below why)
	    * @param {number} numInstances - default 1 if undef.
	    * @param {number} svfid - Geometry will be stored in this.geoms[svfid].
	    *      If undef or <=0, geometry is appended at the end of this.geoms.
	    */
	GeometryList.prototype.addGeometry = function (geometry, numInstances, svfid) {
	    this.chooseMemoryType(geometry, numInstances, this.gpuNumMeshes, this.gpuMeshMemory);

	    // track overall GPU workload
	    if (!geometry.streamingDraw) {
	        this.gpuMeshMemory += geometry.byteSize;
	        this.gpuNumMeshes += 1;
	    }

	    this.numGeomsInMemory++;

	    // if no svfid is defined
	    if (svfid === undefined || svfid <= 0)
	    svfid = this.geoms.length;

	    // store geometry (may increase array length)
	    this.geoms[svfid] = geometry;

	    // resize this.geombboxes if necessary
	    var fill = this.geomBoxes.length / 6 | 0;
	    if (fill < this.geoms.length) {
	        var end = this.geoms.length * 3 / 2 | 0;
	        var nb = new Float32Array(6 * end);
	        nb.set(this.geomBoxes);
	        // Make all of the new bounds empty
	        var empty = new THREE.Box3();
	        empty.makeEmpty();
	        while (fill < end) {
	            nb[fill * 6] = empty.min.x;
	            nb[fill * 6 + 1] = empty.min.y;
	            nb[fill * 6 + 2] = empty.min.z;
	            nb[fill * 6 + 3] = empty.max.x;
	            nb[fill * 6 + 4] = empty.max.y;
	            nb[fill++ * 6 + 5] = empty.max.z;
	        }
	        this.geomBoxes = nb;
	    }

	    // copy geometry bbox to this.geomBoxes
	    var bb = geometry.boundingBox;
	    this.geomBoxes[svfid * 6] = bb.min.x;
	    this.geomBoxes[svfid * 6 + 1] = bb.min.y;
	    this.geomBoxes[svfid * 6 + 2] = bb.min.z;
	    this.geomBoxes[svfid * 6 + 3] = bb.max.x;
	    this.geomBoxes[svfid * 6 + 4] = bb.max.y;
	    this.geomBoxes[svfid * 6 + 5] = bb.max.z;

	    //Free the bbx objects if we don't want them.
	    if (globals.memoryOptimizedLoading && !this.is2d) {
	        geometry.boundingBox = null;
	        geometry.boundingSphere = null;
	    }

	    // track system-side memory
	    this.geomMemory += geometry.byteSize;

	    // track polygon count
	    //TODO: Asssignment into the svf is temporary until the dependencies
	    //are unentangled
	    var ib = geometry.attributes['index'].array || geometry.ib;
	    var polyCount = ib.length / 3;
	    this.geomPolyCount += polyCount;
	    this.instancePolyCount += polyCount * (numInstances || 1);

	    // Record the count that can be decrease properly when geometry removed.
	    geometry.polyCount = polyCount;
	    geometry.instanceCount = numInstances || 1;

	    geometry.svfid = svfid;
	    geometry.lockCount = 0;

	    return svfid;
	};

	/**
	    * Removes the geometry with svfid 'idx' from the list.
	    * Note: Unlike addGeometry, this method only updates this.numGeomsInMemory. All other statistics keep the same.
	    * @param {int} idx - Geometry ID.
	    * @returns {int} Size of the removed geometry, or 0.
	    */
	GeometryList.prototype.removeGeometry = function (idx) {
	    // if there is no geom assigned, just return 0
	    var geometry = this.getGeometry(idx);
	    if (!geometry || geometry.lockCount > 0) {
	        return 0;
	    }
	    var size = geometry.byteSize;
	    geometry.dispose && geometry.dispose();

	    // remove geometry from the list
	    this.geoms[idx] = null;

	    // decrease its related counts
	    this.geomMemory -= geometry.byteSize;
	    this.numGeomsInMemory--;
	    this.geomPolyCount -= geometry.polyCount;
	    this.instancePolyCount -= geometry.instanceCount * geometry.polyCount;

	    return size;
	};

	/**
	    * Locks the geometry with svfid 'idx'.
	    * Locked geometry will not be removed when paging out.
	    * Use sparingly if on demand loading is enabled.
	    * @param {int} idx - Geometry ID.
	    * @returns {boolean} True if the geometry was in memory and was locked.
	    */
	GeometryList.prototype.lockGeometry = function (idx) {
	    var geometry = this.getGeometry(idx);
	    if (!geometry) {
	        return false;
	    }
	    ++geometry.lockCount;
	    return true;
	};

	/**
	    * Unlocks the geometry with svfid 'idx'.
	    * Locked geometry will not be removed when paging out.
	    * Call once for each time you call lockGeometry.
	    * @param {int} idx - Geometry ID.
	    * @returns {boolean} True if the geometry was in memory and was locked.
	    */
	GeometryList.prototype.unlockGeometry = function (idx) {
	    var geometry = this.getGeometry(idx);
	    if (!geometry || geometry.lockCount <= 0) {
	        return false;
	    }
	    --geometry.lockCount;
	    return true;
	};

	/**
	    * Gets the lock count for the geometry with svfid 'idx'.
	    * Geometry is locked if the lock count is > 0.
	    * Locked geometry will not be removed when paging out.
	    * @param {int} idx - Geometry ID.
	    * @returns {int} The lock count of the geometry, or -1 if the geometry is not in memory.
	    */
	GeometryList.prototype.getLockCount = function (idx) {
	    var geometry = this.getGeometry(idx);
	    if (!geometry) {
	        return -1;
	    }
	    return geometry.lockCount;
	};

	/**
	    * Returns bounding box of a geometry.
	    * @param {number} geomid - Geometry ID.
	    * @param {THREE.Box3|LmvBox3} dst - Set to empty is there is no geometry of this id.
	    */
	GeometryList.prototype.getModelBox = function (geomid, dst) {
	    // return empty box if geomid is out of bounds. If the id is in bounds
	    // then the stored bbox is empty if the geometry hasn't been loaded 
	    if (this.geomBoxes.length / 6 <= geomid) {
	        dst.makeEmpty();
	        return;
	    }

	    // extract bbox values from Float32Array this.geomboxes
	    var off = geomid * 6;
	    var bb = this.geomBoxes;
	    dst.min.x = bb[off];
	    dst.min.y = bb[off + 1];
	    dst.min.z = bb[off + 2];
	    dst.max.x = bb[off + 3];
	    dst.max.y = bb[off + 4];
	    dst.max.z = bb[off + 5];
	};

	// Tell renderer to release all GPU buffers. 
	// renderer: instaneof FireFlyWebGLRenderer
	GeometryList.prototype.dispose = function (renderer) {
	    if (!renderer)
	    return;

	    for (var i = 0, iEnd = this.geoms.length; i < iEnd; i++) {
	        if (this.geoms[i])
	        renderer.deallocateGeometry(this.geoms[i]);
	    }
	};

	GeometryList.prototype.printStats = function () {
	    THREE.log("Total geometry size: " + this.geomMemory / (1024 * 1024) + " MB");
	    THREE.log("Number of meshes: " + this.geoms.length);
	    THREE.log("Num Meshes on GPU: " + this.gpuNumMeshes);
	    THREE.log("Net GPU geom memory used: " + this.gpuMeshMemory);
	};

	module.exports = GeometryList;

/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';var globals = {};

	var userAgent = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
	globals.isIOSDevice = function () {return userAgent.match(/ip(ad|hone|od)/);};
	globals.isAndroidDevice = function () {return userAgent.indexOf('android') !== -1;};
	globals.isMobileDevice = function () {return globals.isIOSDevice() || globals.isAndroidDevice();};
	globals.isSafari = function () {return userAgent.indexOf('safari') !== -1 && userAgent.indexOf('chrome') === -1;};
	globals.isFirefox = function () {return userAgent.indexOf('firefox') !== -1;};
	globals.isMac = function () {return userAgent.indexOf('mac os') !== -1;};
	globals.isWindows = function () {return userAgent.indexOf('win32') !== -1 || userAgent.indexOf('windows') !== -1;};
	globals.isNodeJS = function () {return typeof navigator === 'undefined';};

	globals.rescueFromPolymer = function () {
	    if (globals.isSafari()) {
	        return function (object) {
	            if (!window.Polymer)
	            return object;
	            for (var p in object) {
	                if (p.indexOf("__impl") !== -1) {
	                    return object[p];
	                }
	            }
	            return object;
	        };
	    } else {
	        return function (o) {return o;};
	    }
	}();

	// If true, will use a different code path where data structures are
	// optimized for using less memory.
	globals.memoryOptimizedLoading = true;
	globals.GPU_MEMORY_LIMIT = 256 * 1024 * 1024;
	globals.GPU_OBJECT_LIMIT = 10000;

	var isWeakDevice = globals.isMobileDevice();
	if (!isWeakDevice) {
	    // This is the number of fragments that will persist in memory all the time,
	    // even when memory is low and some of geometry will be deleted.
	    globals.FRAGS_PERSISTENT_COUNT = 10000;
	    // This is roughly the max number of fragments that can be handled in one go.
	    // In other words, exceeding this count will trigger on demand loading.
	    // TODO: I guess on a mobile device this needs to change to a smaller value.
	    globals.FRAGS_PERSISTENT_MAX_COUNT = 800000;
	    // This is roughly the max number of 2D buffers that can be handled in one go.
	    // In other words, exceeding this count will trigger on demand loading.
	    // TODO: I guess on mobile device this need to change to a smaller value.
	    globals.MAX_2D_PERSISTENT_BUFFER_COUNT = 2000;
	    // This the number of buffers in memory that initiates a page out.
	    globals.PAGE_OUT_COUNT_2D = 1800;
	    // This is the number of buffers we want in memory after a page out
	    globals.PAGE_OUT_GOAL_2D = 1600;
	    // ??? Approximately use a max geometry count as a hint for
	    // ??? when start to remove geometry to release memory.
	    // ??? This needs experiments and dynamically change due to differnt browsers.
	    globals.GEOMS_COUNT_LIMIT = 300000;

	    // This is the value to limit the max queued geom pack files for loading.
	    // This will throttle the geom loading that make more room for the loaded
	    // ones to complete rendering first so that can have more candidates to paging.
	    globals.MAX_QUEUED_GEOM_PF_FOR_LOADING = 50;

	    // This is the threshold of the projected screen pixel for culling.
	    globals.PIXEL_CULLING_THRESHOLD = 1;

	    globals.MAX_PACK_FILES = 100;
	    globals.MIN_PACK_FILES = 10;
	} else {
	    // The following value are adjusted for weak device.
	    // ??? This should be configurable for different type of devices.
	    globals.FRAGS_PERSISTENT_COUNT = 2000;
	    globals.FRAGS_PERSISTENT_MAX_COUNT = 150000;
	    globals.MAX_2D_PERSISTENT_BUFFER_COUNT = 100;
	    globals.PAGE_OUT_COUNT_2D = 80;
	    globals.PAGE_OUT_GOAL_2D = 60;
	    globals.GEOMS_COUNT_LIMIT = 8000;
	    globals.MAX_QUEUED_GEOM_PF_FOR_LOADING = 10;
	    globals.PIXEL_CULLING_THRESHOLD = 1;


	    globals.MAX_PACK_FILES = 50;
	    globals.MIN_PACK_FILES = 8;
	}

	// Options for limit memory usage.
	// 1. On demand loading will delay geometry pack file loading,
	//    until rendering need it.
	// 2. As one geometry pack file can contain many meshes that will
	//    be used by a lot of fragments, so can even dismiss those meshes
	//    that are culled by current rendering.
	// 3. Page out geometry acutally will remove some geometry out of core,
	//    so as to free more memory for further rendering.
	// ??? These options will impact rendering performance.
	globals.pixelCullingEnable = false && globals.memoryOptimizedLoading;
	globals.onDemandLoading = false && globals.memoryOptimizedLoading;
	globals.pageOutGeometryEnabled = false && globals.onDemandLoading;

	globals.cullGeometryOnLoading = false && globals.onDemandLoading;
	globals.PAGEOUT_SUCCESS = 0;
	globals.PAGEOUT_FAIL = 1;
	globals.PAGEOUT_NONE = 2;
	globals.PAGEOUT_PERCENTAGE = 0.20;
	globals.GEOMS_PAGEOUT_COUNT = globals.GEOMS_COUNT_LIMIT * globals.PAGEOUT_PERCENTAGE;

	// This will force ondemand loading start (if onDemandLoading is true) for testing only.
	globals.forceOnDemandLoading = false;

	globals.RENDER_NORMAL = 0; //=== RenderQueue.NORMAL !!!
	globals.RENDER_HIGHLIGHTED = 1; //=== RenderQueue.HIGHLIGHTED !!!
	globals.RENDER_HIDDEN = 2; //=== RenderQueue.HIDDEN !!!
	globals.RENDER_SHADOWMAP = 3;
	globals.RENDER_FINISHED = 4;

	// FrustumIntersector
	globals.OUTSIDE = 0;
	globals.INTERSECTS = 1;
	globals.CONTAINS = 2;
	globals.CONTAINMENT_UNKNOWN = -1;

	// FragmentList flags
	//visibility/highlight bitmask flags
	//NOTE: This is confusing and it should be fixed, but when the MESH_VISIBLE bit is off, the mesh
	//will draw in ghosted mode. To completely skip drawing a mesh, set the HIDE flag.
	globals.MESH_VISIBLE = 1;
	globals.MESH_HIGHLIGHTED = 2;
	globals.MESH_HIDE = 4;
	globals.MESH_ISLINE = 8;
	globals.MESH_MOVED = 16; // indicates if an animation matrix is set
	globals.MESH_TRAVERSED = 0x20; // only used for paging: drawn fragments are tagged and then skipped by forEach() until the flag is being reset (e.g. on scene/camera changes)
	globals.MESH_DRAWN = 0x40; // only used for paging: drawn fragments are tagged. At the end of all render passes flag is copied to MESH_TRAVERSED.
	globals.MESH_RENDERFLAG = 0x80;
	globals.MESH_ISPOINT = 0x100; // indicates that the mesh is vertex-only
	globals.MESH_ISWIDELINE = 0x200; // indicates that the mesh is wide line

	module.exports = globals;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var VBIntersector = __webpack_require__(73);

	var _tmpBox;

	function init_three() {

	    if (!_tmpBox)
	    _tmpBox = new THREE.Box3();

	}

	/**
	   * Represents a subset of objects from a larger list, for e.g. a draw call batch
	   * to send to the renderer. It's like a small view into an ordered FragmentList.
	   *
	   * frags     -- FragmentList of all available meshes (1:1 correspondance with LMV fragments)
	   * fragOrder -- Array of indices, pointing into the array of fragments
	   * start     -- start index in the array of indices
	   * count     -- how many mesh indices (after start index) are contained in the subset.
	   * @constructor
	   */
	function RenderBatch(frags, fragOrder, start, count) {

	    this.frags = frags;
	    this.indices = fragOrder; // may be a typed array (usually, Int32Array) or generic Array containing 
	    // the actual typed array in index 0, see getIndices(). May be null, which means indices[i]==i.
	    this.start = start;
	    this.count = count;
	    this.lastItem = start; // Defines the (exclusive) range end used in this.forEach(). If a batch is complete, i.e. all fragments are added, 
	    // we usually have this.lastItem = this.start + this.count. But it may be smaller if dynamic adding is being used.
	    // The final value of this.lastItem is set from outside by the creator (see e.g., ModelIteratorLinear or ModelIteratorBVH)
	    // NOTE: this.lastItem must be set before this.forEach() has any effect.

	    //Compatibility with THREE.Scene. Optional override material (instanceof THREE.ShaderMaterial) temporarily used by renderers.
	    this.overrideMaterial = null;

	    //Whether sort by material ID has been done
	    this.sortDone = false;
	    this.numAdded = 0; // number of added batches since last material sort

	    this.avgFrameTime = undefined; // Average time spent for rendering this batch. Maintained externally by RenderScene.renderSome()

	    this.nodeIndex = undefined; // Optional: Unique index of this RenderBatch (used by modelIteratorBVH/ConsolidationIterator)

	    // Summed worldBoxes 
	    this.boundingBox = new THREE.Box3();
	    this.boundingBoxHidden = new THREE.Box3(); //bbox counting hidden/ghosted


	    //Tells the renderer whether to sort by Z before drawing.
	    //We only set this for RenderBatches containing transparent objects.
	    this.sortObjects = false;

	    this.sortDone = false;
	    this.sortByShaderDone = false;

	    // Only internally (re)used by this.sortByDepth() to avoid reallocation.
	    this.depths = null; // Float32Array, depths[i] stores the last computed depth for the framgent with fragId==this.indices[this.startIndex + i]. see this.sortByDepth().
	    this.indicesView = null; // array view into this.indices, reduced to the range [this.start, this.start+this.count]

	    //Tells the renderer whether to do per-mesh frustum culling.
	    //In some cases when we know the whole batch is completely
	    //contained in the viewing frustum, we turn this off.
	    this.frustumCulled = true;

	    //Used by ground shadow code path
	    this.forceVisible = false;

	    // FragmentList do not always contain THREE.Meshes for each shape. They may also just contain plain BufferGeometry 
	    // and THREE.ShaderMaterial. In this case, the renderer must handle the this batch using immediate mode rendering.
	    // (see FragmentList.getVizmesh() and WebGLRenderer.render() for details)
	    this.renderImmediate = !frags.useThreeMesh;

	    //Set per frame during scene traversal
	    this.renderImportance = 0.0;

	    // make sure that static temp-variable _tmpBox exists (used to reduce new Box allocations in several methods below)
	    init_three();
	}

	RenderBatch.prototype.getIndices = function () {
	    // Note that isArray returns false for typed arrays like Int32Array. 
	    // isArray() is used to here to check whether indices is
	    //  a) a typed array itself or
	    //  b) a generic array containing the actual typed array in index 0.
	    return Array.isArray(this.indices) ? this.indices[0] : this.indices;
	};

	// Sorts 
	RenderBatch.prototype.sortByMaterial = function () {

	    //Render batch must be complete before we can sort it
	    if (this.numAdded < this.count)
	    return;

	    var frags = this.frags;
	    var indices = this.getIndices();

	    if (!indices) {
	        THREE.warn("Only indexed RenderSubsets can be sorted.");
	        return;
	    }

	    // apply sort only to the range used by this batch
	    var tmp = indices.subarray(this.start, this.start + this.count);
	    Array.prototype.sort.call(tmp, function (a, b) {
	        var ma = frags.getMaterialId(a);
	        var mb = frags.getMaterialId(b);

	        if (ma === undefined)
	        return mb ? 1 : 0;
	        if (mb === undefined)
	        return -1;

	        return ma - mb;
	    });

	    //indices.set(tmp, this.start); // not needed because tmp already points to the same buffer

	    // indicate that indices are sorted by material and no batches have beend added since then.
	    this.numAdded = 0;
	    this.sortDone = true;
	};

	//Sorts meshes in the render batch by shader ID, to avoid
	//unnecessary shader switching in the renderer when looping over a batch.
	//This can only be performed once the RenderBatch is full/complete and
	//all shaders are known.
	RenderBatch.prototype.sortByShader = function () {

	    //Render batch must be complete before we can sort it
	    if (!this.sortDone || this.sortByShaderDone)
	    return;

	    var frags = this.frags;
	    var indices = this.getIndices();

	    var tmp = indices.subarray(this.start, this.start + this.count);

	    Array.prototype.sort.call(tmp, function (a, b) {
	        var ma = frags.getMaterial(a);
	        var mb = frags.getMaterial(b);

	        var pd = ma.program.id - mb.program.id;
	        if (pd)
	        return pd;

	        return ma.id - mb.id;
	    });

	    //indices.set(tmp, this.start);

	    this.numAdded = 0;
	    this.sortByShaderDone = true;
	};


	// Sorts this.indices by increasing depth for the current view.
	// Input: frustumIn instanceof FrustumIntersector
	RenderBatch.prototype.sortByDepth = function () {

	    var frags;
	    var indices;
	    var frustum;
	    var bbox;
	    var depths; // just a pointer to this.depths 

	    // use frustum to calculate depth per fragment
	    function calDepth(fragId, i) {
	        if (!frags.getGeometry(fragId))
	        depths[i] = -Infinity;else
	        {
	            frags.getWorldBounds(fragId, bbox);
	            depths[i] = frustum.estimateDepth(bbox);
	        }
	    }

	    //function sortCB(a, b) {
	    //    return depths[b] - depths[a];
	    //}

	    return function (frustumIn) {

	        frags = this.frags;
	        indices = this.getIndices();
	        frustum = frustumIn;
	        bbox = _tmpBox;

	        if (!indices) {
	            THREE.warn("Only indexed RenderSubsets can be sorted.");
	            return;
	        }

	        // init indicesView as a view to the relevant range in this.indices, i.e., the range [start, start+count)
	        if (!this.indicesView || this.indicesView.length < this.count)
	        this.indicesView = indices.subarray(this.start, this.start + this.count);

	        // allocate this.depth to store a depth value for each fragment index in indicesView
	        if (!this.depths || this.depths.length < this.count)
	        this.depths = new Float32Array(this.count);

	        depths = this.depths;

	        // For each fragId indicesView[i], compute the depth and store it in depth[i]
	        this.forEachNoMesh(calDepth);

	        // Does not work, this call sorts on depths[indicesViews[i]], not depths[i],
	        // where 'i' is an index into both the depths and indicesViews lists.
	        //Array.prototype.sort.call(this.indicesView, sortCB);

	        // Insertion sort appears to be about 7x or more faster
	        // for lists of 64 or less objects vs. defining a sort() function.
	        // Asking if there's a faster way. Traian mentioned quicksort > 8
	        // objects; I might give this a try.
	        var tempDepth, tempIndex;
	        for (var j = 1; j < depths.length; j++) {
	            var k = j;
	            while (k > 0 && depths[k - 1] < depths[k]) {
	                // swap elem at position k one position backwards (for indicesView and depths)
	                tempDepth = depths[k - 1];
	                depths[k - 1] = depths[k];
	                depths[k] = tempDepth;
	                tempIndex = this.indicesView[k - 1];
	                this.indicesView[k - 1] = this.indicesView[k];
	                this.indicesView[k] = tempIndex;
	                k--;
	            }
	        }

	        //indices.set(this.indicesView, this.start); // Not needed because indicesView is already a view into this range
	    };
	}();

	//Use only for incremental adding to linearly ordered (non-BVH) scenes!
	RenderBatch.prototype.onFragmentAdded = function () {

	    return function (fragId) {

	        // update bbox
	        this.frags.getWorldBounds(fragId, _tmpBox);
	        this.boundingBox.union(_tmpBox);

	        // mark 
	        this.sortDone = false;

	        //NOTE: This only works with trivial fragment ordering (linear render queues).
	        //Otherwise the item index does not necessarily match the fragId due to the 
	        //reordering jump table (this.indices).
	        if (this.lastItem <= fragId) {
	            this.lastItem = fragId + 1;
	            if (this.visibleStats !== undefined)
	            this.visibleStats = -1; // reset visibility, since a new fragment might change it
	            this.numAdded++;
	        }
	    };
	}();


	/**
	      * Iterates over fragments.
	      * @param {function} callback - function(mesh, id) called for each fragment geometry.
	      *      - mesh: instanceof THREE.Mesh (as obtained from FragmentList.getVizmesh)
	      *      - id:   fragment id
	      * @param {number} drawMode - Optional flag (see FragmentList.js), e.g., globals.MESH_VISIBLE. If specified, we only traverse fragments for which this flag is set.
	      * @param {bool} includeEmpty - Default: false, i.e. fragments are skipped if they have no mesh available via getVizmesh().
	      */
	RenderBatch.prototype.forEach = function (callback, drawMode, includeEmpty) {

	    var indices = this.getIndices();

	    var frags = this.frags;
	    var sortByShaderPossible = !this.sortByShaderDone;

	    //If the most likely rendering flags are true, use a shortened version of the for-loop.
	    if (!drawMode && !includeEmpty && !sortByShaderPossible) {
	        for (var i = this.start, iEnd = this.lastItem; i < iEnd; i++) {
	            var idx = indices ? indices[i] : i;

	            var m = frags.getVizmesh(idx);

	            if (m && m.geometry) {
	                callback(m, idx);
	            }
	        }
	    } else {
	        for (var i = drawMode == globals.MESH_RENDERFLAG && this.hasOwnProperty("drawStart") ? this.drawStart : this.start, iEnd = this.lastItem; i < iEnd; i++) {
	            var idx = indices ? indices[i] : i;

	            var m = frags.getVizmesh(idx);

	            if (sortByShaderPossible && (!m || !m.material || !m.material.program))
	            sortByShaderPossible = false;

	            // if drawMode is given, iterate vizflags that match
	            if ((includeEmpty || m && m.geometry) && (
	            !drawMode || frags.isFlagSet(idx, drawMode))) {

	                callback(m, idx);
	            }
	        }
	    }

	    //If all materials shaders are already available, we can sort by shader
	    //to minimize shader switches during rendering.  This sort will only
	    //execute once and changing materials later will break the sorted order again.
	    if (sortByShaderPossible)
	    this.sortByShader();
	};

	/**
	    * Iterates over fragments. Like forEach(), but takes a different callback.
	    * @param {function} callback - function(fragId, idx) called for each fragment geometry.
	    *      - fragId:   fragment id
	    *      - idx:      running index from 0 .. (lastItem-start)
	    * @param {number} drawMode - Optional flag (see FragmentList.js), e.g., globals.MESH_VISIBLE. If specified, we only traverse fragments for which this flag is set.
	    * @param {bool} includeEmpty - Default: false, i.e. fragments are skipped if they have no mesh available via getVizmesh().
	    */
	RenderBatch.prototype.forEachNoMesh = function (callback, drawMode, includeEmpty) {

	    var indices = this.getIndices();
	    var frags = this.frags;

	    for (var i = this.start, iEnd = this.lastItem; i < iEnd; i++) {
	        var fragId = indices ? indices[i] : i;

	        // get geometry - in this case just to check if it is available
	        var geometry;
	        if (frags.useThreeMesh) {
	            var m = frags.getVizmesh(fragId);
	            if (m)
	            geometry = m.geometry;
	        } else
	        {
	            geometry = frags.getGeometry(fragId);
	        }

	        // if drawMode is given, iterate vizflags that match
	        if ((includeEmpty || geometry) && (
	        !drawMode || frags.isFlagSet(fragId, drawMode))) {

	            callback(fragId, i - this.start);
	        }
	    }
	};

	/**
	    * Checks if given ray hits a bounding box of any of the fragments.
	    * @param {THREE.RayCaster} raycaster
	    * @param {Object[]}        intersects - An object array that contains intersection result objects.
	    *                                       Each result r stores properties like r.point, r.fragId, r.dbId. (see VBIntersector.js for details)
	    * @param {number[]}       [dbIdFilter] - Array of dbIds. If specieed, only fragments with dbIds inside the filter are checked.
	    */
	RenderBatch.prototype.raycast = function () {

	    return function (raycaster, intersects, dbIdFilter) {

	        //Assumes bounding box is up to date.
	        if (raycaster.ray.isIntersectionBox(this.boundingBox) === false)
	        return;

	        var self = this;
	        var tmpBox = _tmpBox;

	        // traverse all visible meshes
	        this.forEach(function (m, fragId) {

	            //Check the dbIds filter if given
	            if (dbIdFilter && dbIdFilter.length) {
	                //Theoretically this can return a list of IDs (for 2D meshes)
	                //but this code will not be used for 2D geometry intersection.
	                var dbId = 0 | self.frags.getDbIds(fragId);

	                //dbIDs will almost always have just one integer in it, so
	                //indexOf should be fast enough.
	                if (dbIdFilter.indexOf(dbId) === -1)
	                return;
	            }

	            // raycast worldBox first.
	            self.frags.getWorldBounds(fragId, tmpBox);

	            // Expand bounding box a bit, to take into account axis aligned lines
	            tmpBox.expandByScalar(0.5);

	            if (raycaster.ray.isIntersectionBox(tmpBox)) {
	                // worldbox was hit. do raycast with actucal geometry.
	                VBIntersector.rayCast(m, raycaster, intersects);
	            }
	        }, globals.MESH_VISIBLE);
	    };
	}();

	/**
	      * Computes/updates the members:
	      *      - this.boundingBox 
	      *      - this.boundingBoxHidden (bbox of ghosted fragments)
	      */
	RenderBatch.prototype.calculateBounds = function () {

	    // pointers to make some objects available for the callback below.
	    var vizflags;
	    var bounds;
	    var boundsH;
	    var frags;
	    var tmpBox;

	    // adds box of a fragment to bounds or bounds, depennding on its vizflags.
	    function cb(fragId) {

	        frags.getWorldBounds(fragId, tmpBox);

	        var f = vizflags[fragId];
	        if (f & 1 /*MESH_VISIBLE*/)
	            bounds.union(tmpBox);else

	        boundsH.union(tmpBox); //mesh is "ghosted"
	    }

	    return function () {
	        // init boxes for visible and ghosted meshes
	        this.boundingBox.makeEmpty();
	        this.boundingBoxHidden.makeEmpty();

	        // make members and tempBox accessible for cb
	        vizflags = this.frags.vizflags;
	        bounds = this.boundingBox;
	        boundsH = this.boundingBoxHidden;
	        frags = this.frags;
	        tmpBox = _tmpBox;

	        this.forEachNoMesh(cb, 0, this.frags.onDemandLoadingEnabled());
	    };
	}();

	/**
	      * Sets the globals.MESH_RENDERFLAG for a single fragment, depeneding on the drawMode and the other flags of the fragment.
	      * @param {number} drawMode - One of the modes defined in Viewer3DImpl.js, e.g. globals.RENDER_NORMAL
	      * @param {number} vizflags - vizflags bitmask. 
	      * @param {number} idx - index into vizflags, for which we want to determine the MESH_RENDERFLAG.
	      * @returns {bool} Final, evaluated visibility.
	      */
	RenderBatch.prototype.evalVisbility = function (drawMode, vizflags, idx) {

	    var v;
	    var vfin = vizflags[idx] & ~globals.MESH_RENDERFLAG;
	    switch (drawMode) {

	        case globals.RENDER_HIDDEN:
	            v = !(vfin & globals.MESH_VISIBLE); //visible (bit 0 on)
	            break;
	        case globals.RENDER_HIGHLIGHTED:
	            v = vfin & globals.MESH_HIGHLIGHTED; //highlighted (bit 1 on)
	            break;
	        default:
	            v = (vfin & (globals.MESH_VISIBLE | globals.MESH_HIGHLIGHTED | globals.MESH_HIDE)) == 1; //visible but not highlighted, and not a hidden line (bit 0 on, bit 1 off, bit 2 off)
	            break;}


	    //Store evaluated visibility into bit 7 of the vizflags
	    //to use for immediate rendering
	    vizflags[idx] = vfin | (v ? globals.MESH_RENDERFLAG : 0);

	    return v;
	};


	/**
	    * Checks if fragment is outside the frustum.
	    * @param {bool} checkCull - indicates if culling is enabled. If false, return value is always false. 
	    * @param {FrustumIntersector} frustum
	    * @param {FragmentList} frags
	    * @param {number} idx - index into frags.
	    * @returns {bool} True if the given fragment is outside the frustum and culling is enabled.
	    */
	function evalCulling(checkCull, frustum, frags, idx) {

	    var culled = false;

	    frags.getWorldBounds(idx, _tmpBox);
	    if (checkCull && !frustum.intersectsBox(_tmpBox)) {
	        culled = true;
	    }
	    //This code path disabled because it was found to slow things down overall.
	    /*
	    else {
	        // Check whether the projected area is smaller than a threshold,
	        // if yes, do not render it.
	        var area = frustum.projectedArea(_tmpBox);
	        area *= frustum.areaConv;
	        if (area < frustum.areaCullThreshold) {
	            culled = true;
	        }
	    }
	    */

	    return culled;
	}


	/**
	   * Updates visibility for all fragments of this RenderBatch. 
	   * This means:
	   *  1. It returns true if all meshes are hidden (false otherwise)
	   *
	   *  2. If the whole batch box is outside the frustum, nothing else is done.
	   *     (using this.boundingBox or this.boundingBoxHidden, depending on drawMode)
	   *
	   *  3. For all each checked fragment with fragId fid and mesh m, the final visibility is stored...
	   *      a) In the m.visible flag.
	   *      b) In the MESH_RENDERFLAG of the vizflags[fid]
	   *     This is only done for fragments with geometry.   
	   *  
	   *  4. If a custom callback is specified (fragIdCb), this callback is triggered for all fragments
	   *     for which mesh or mesh.geometry is missing.
	   * @param {number} drawMode - One of the modes defined in Viewer3DImpl.js, e.g. globals.RENDER_NORMAL
	   * @param {FrustumIntersector} frustum
	   * @param {function=} fragIdCb - callback that is called for all empty fragments. It is used for on-demand-loading.
	   * @returns {bool} True if all meshes are hidden (false otherwise).
	   */
	RenderBatch.prototype.applyVisibility = function () {

	    var frags, vizflags, frustum, drawMode, fragIdCb, checkCull, allHidden;

	    // Callback to apply visibility for a single fragment
	    //
	    // Input: Geometry and index of a fragment, i.e.
	    //  m:   instanceof THREE.Mesh (see FragmentList.getVizmesh). May be null.
	    //  idx: index of the fragment in the fragment list. 
	    //
	    // What is does:
	    //  1. bool m.visible is updated based on flags and frustum check (if m!=null)
	    //  2. The MESH_RENDERFLAG flag is updated for this fragment, i.e., is true for meshes with m.visible==true
	    //  3. If there is no geometry and there is a custom callback (checkCull) 
	    //  4. Set allHidden to false if any mesh passes as visible.
	    function applyVisCB(m, idx) {

	        // if there's no mesh or no geometry, just call the custom callback.
	        // [HB:] I think it would be clearer to remove the frags.useThreeMesh condition here.
	        //       It's not really intuitive that for (m==0) the callback is only called for frags.useThreeMesh.
	        //       Probably the reason is just that this code section has just been implemented for the useThreeMesh
	        //       case and the other one was irrelevant.
	        if (!m && frags.useThreeMesh || !m.geometry) {
	            // if a custom callback is specified, call it with the fragId
	            if (fragIdCb)
	            fragIdCb(idx);
	            return;
	        }

	        // apply frustum check for this fragment
	        var culled = evalCulling(checkCull, frustum, frags, idx);

	        // if outside, set m.visbile and the MESH_RENDERFLAG of the fragment to false
	        if (culled) {
	            if (m) {
	                m.visible = false;
	            } else {
	                THREE.warn("Unexpected null mesh");
	            }
	            // unset MESH_RENDERFLAG
	            vizflags[idx] = vizflags[idx] & ~globals.MESH_RENDERFLAG;

	            return;
	        }

	        // frustum check passed. But it might still be invisible due to vizflags and/or drawMode. 
	        // Note that evalVisbility also updates the MESH_RENDERFLAG already.
	        var v = this.evalVisbility(drawMode, vizflags, idx);

	        if (m)
	        m.visible = !!v;

	        // Set to false if any mesh passes as visible
	        allHidden = allHidden && !v;
	    }

	    // Similar to applyVisCB above, but without geometry param, so that we don't set any m.visible property.
	    function applyVisCBNoMesh(idx) {

	        // if no geometry is assigned, just call custom cb (if specified) and stop here.
	        if (!frags.getGeometryId(idx)) {
	            // [HB:] Actually, this callback is only used if fragIdCb is not set. So, the check below will
	            //       always be false.
	            if (fragIdCb)
	            fragIdCb(idx);
	            return;
	        }

	        // apply frustum check for this fragment
	        var culled = evalCulling(checkCull, frustum, frags, idx);

	        // if culled, set visflags MESH_RENDERFLAG to false 
	        if (culled) {
	            vizflags[idx] = vizflags[idx] & ~globals.MESH_RENDERFLAG;
	            return;
	        }

	        // frustum check passed. But it might still be invisible due to vizflags and/or drawMode. 
	        // Note that evalVisbility also updates the MESH_RENDERFLAG already.
	        var v = this.evalVisbility(drawMode, vizflags, idx);

	        // Set to false if any mesh passes as visible
	        allHidden = allHidden && !v;
	    }

	    return function (drawModeIn, frustumIn, fragIdCbIn) {

	        //Used when parts of the same scene
	        //have to draw in separate passes (e.g. during isolate).
	        //Consider maintaining two render queues instead if the
	        //use cases get too complex, because this approach
	        //is not very scalable as currently done (it traverses
	        //the entire scene twice, plus the flag flipping for each item).

	        allHidden = true;
	        frustum = frustumIn;
	        drawMode = drawModeIn;
	        fragIdCb = fragIdCbIn;

	        //Check if the entire render batch is contained inside
	        //the frustum. This will save per-object checks.
	        var containment = frustum.intersectsBox(drawMode === globals.RENDER_HIDDEN ? this.boundingBoxHidden : this.boundingBox);
	        if (containment === globals.OUTSIDE)
	        return allHidden; //nothing to draw

	        vizflags = this.frags.vizflags;
	        frags = this.frags;
	        checkCull = containment !== globals.CONTAINS;

	        // The main difference between applyVisCB and applyVisCBNoMesh is that applyVisCB also updates mesh.visible for each mesh.
	        // This does only make sense when using THREE.Mesh. Otherwise, the mesh containers are volatile anyway (see FragmentList.getVizmesh)
	        //
	        // [HB:] If frags.useThreeMesh is false, it does never make sense to use the cb version with mesh. So, it's not really clear
	        //       here why the check condition is not just (!frags.useThreeMesh).
	        if (!fragIdCbIn && !frags.useThreeMesh) {
	            // Use callback that does not set mesh.visible
	            this.forEachNoMesh(applyVisCBNoMesh.bind(this), null);
	        } else {
	            // Use callback that also sets mesh.visible.
	            // Skip fragments without geometry unless a custom callback is defined (fragIdCB)
	            this.forEach(applyVisCB.bind(this), null, fragIdCb);
	        }

	        return allHidden;
	    };
	}();

	module.exports = RenderBatch;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var copyVertexFormat = __webpack_require__(78).copyVertexFormat;
	var writeIdToBuffer = __webpack_require__(78).writeIdToBuffer;
	var createBufferGeometry = __webpack_require__(79).createBufferGeometry;


	/**
	                                                                                 * @class Combines multiple instances of a GeometryBuffer into a single GeometryBuffer that uses hardware instancing.
	                                                                                 *        Input is a single geometry and a sequence of matrix/dbId pairs. Result is a single THREE.Mesh that contains
	                                                                                 *        transforms and dbIds as instance buffer.
	                                                                                 * @constructor
	                                                                                 *  @param {BufferGeometr} srcGeom - Geometry shared by all instances. vb and ib of this buffer will be shared.
	                                                                                 *                                   (unfortunately not on GPU though, because WebGLRenderer doesn't detect support
	                                                                                 *                                   sharing among different GeometryBuffers.)
	                                                                                 *  @param {number} capacity       - Number of instances to be added. It should match the number of instances
	                                                                                 *                                   to avoid wasting memory.
	                                                                                 */
	function InstanceBufferBuilder(srcGeom, capacity) {

	    // create new geometry that shares vb, ib, and per-vertex attributes
	    var _result = createBufferGeometry();
	    _result.ib = srcGeom.ib;
	    _result.vb = srcGeom.vb;
	    copyVertexFormat(srcGeom, _result);

	    // Currently, we actually write 3 bytes per id. It might be better to use an additional byte for aligment,
	    // but non-interleaved BufferAttributes do currently not support that.
	    var IDItemSize = 3; // IDs are vec3 in the shader
	    var IDBytesPerInstance = 3;

	    // buffers that are incrementally filled with addInstance calls
	    this.offsets = new Float32Array(3 * capacity); // Vector3
	    this.rotations = new Float32Array(4 * capacity); // Quaternion
	    this.scalings = new Float32Array(3 * capacity); // Vector3
	    this.ids = new Uint8Array(IDBytesPerInstance * capacity); // Vec3<Uint8>

	    // temp objects for reuse
	    var _offset = new THREE.Vector3();
	    var _quat = new THREE.Quaternion();
	    var _scale = new THREE.Vector3();

	    var _tempMatrix = new THREE.Matrix4();

	    // number of added instance transforms so far
	    var _counter = 0;

	    var _capacity = capacity;

	    /**
	                               *  Decomposition of a matrix into translation, rotation, and scale is mostly possible
	                               *  but not always. If a matrix decomposition is wrong, THREE.Matrix4.decompose() will just
	                               *  return a wrong result. Therefore, we have to compose it back and compare to see if it
	                               *  was valid.
	                               */
	    function decompositionValid(srcMatrix, offset, quat, scale) {

	        // compose matrix
	        _tempMatrix.compose(offset, quat, scale);

	        // compare with source matrix
	        var Tolerance = 0.00001;
	        var ma = srcMatrix.elements;
	        var mb = _tempMatrix.elements;
	        for (var i = 0; i < 16; i++) {
	            var a = ma[i];
	            var b = mb[i];
	            if (Math.abs(b - a) > Tolerance) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	       *  Add next instance. Make sure that you don't exceed the initially given capacity.
	       *
	       * @param {THREE.Matrix4} transform
	       * @param {number}        dbId
	       * @returns {boolean}     True:  Instance was successfully added.
	       *                        False: Instance could not be added, because the matrix could not be decomposed.
	       */
	    // Must be called 'numInstances' times to fill the instance buffer.
	    this.addInstance = function (transform, dbId) {

	        if (_counter >= _capacity) {
	            THREE.warn("Instance buffer is already full.");
	            return false;
	        }

	        // decompose transform
	        transform.decompose(_offset, _quat, _scale);

	        // We can only add instances for which the instance matrix can be decomposed.
	        // Otherwise, the transform of the instancing version would be wrong.
	        if (!decompositionValid(transform, _offset, _quat, _scale)) {
	            return false;
	        }

	        // write offset
	        this.offsets[3 * _counter] = _offset.x;
	        this.offsets[3 * _counter + 1] = _offset.y;
	        this.offsets[3 * _counter + 2] = _offset.z;

	        // write rotation
	        this.rotations[4 * _counter] = _quat.x;
	        this.rotations[4 * _counter + 1] = _quat.y;
	        this.rotations[4 * _counter + 2] = _quat.z;
	        this.rotations[4 * _counter + 3] = _quat.w;

	        // write scale
	        this.scalings[IDBytesPerInstance * _counter] = _scale.x;
	        this.scalings[IDBytesPerInstance * _counter + 1] = _scale.y;
	        this.scalings[IDBytesPerInstance * _counter + 2] = _scale.z;

	        // write dbId
	        writeIdToBuffer(dbId, this.ids, IDBytesPerInstance * _counter);

	        _counter++;

	        return true;
	    };

	    /**
	        * Call this after adding all transforms to get instanced geometry.
	        *  @returns {null|THREE.Mesh} Returns instanced GeometryBuffer if >=1 instances have been added successfully.
	        */
	    // note that addInstance() must be called for each instance transform first.
	    this.finish = function () {

	        // no instances
	        if (_counter == 0) {
	            return null;
	        }

	        // In special cases, we had to reject some addInstance() calls, so that the
	        // instance buffer is not fully used. In this case, we create smaller views
	        // to the same buffers that ignore the unused elements at the end.
	        if (_counter < _capacity) {
	            this.offsets = new Float32Array(this.offsets.buffer, 0, 3 * _counter); // Vector3
	            this.rotations = new Float32Array(this.rotations.buffer, 0, 4 * _counter); // Quaternion
	            this.scalings = new Float32Array(this.scalings.buffer, 0, 3 * _counter); // Vector3
	            this.ids = new Uint8Array(this.ids.buffer, 0, IDBytesPerInstance * _counter); // Vec3<Uint8>
	        }

	        // add attributes for transforms
	        var offsetAttrib = new THREE.BufferAttribute(this.offsets, 3);
	        var rotationAttrib = new THREE.BufferAttribute(this.rotations, 4);
	        var scalingAttrib = new THREE.BufferAttribute(this.scalings, 3);
	        var idAttrib = new THREE.BufferAttribute(this.ids, IDItemSize);

	        idAttrib.normalize = true;
	        idAttrib.bytesPerItem = 1;

	        // mark attributes as "per-instance" (instead of per-vertex as default)
	        offsetAttrib.divisor = 1;
	        rotationAttrib.divisor = 1;
	        scalingAttrib.divisor = 1;
	        idAttrib.divisor = 1;

	        _result.addAttribute('instOffset', offsetAttrib);
	        _result.addAttribute('instRotation', rotationAttrib);
	        _result.addAttribute('instScaling', scalingAttrib);
	        _result.addAttribute('id', idAttrib);

	        _result.numInstances = _counter;

	        return _result;
	    };
	};

	module.exports = InstanceBufferBuilder;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var getVertexCount = __webpack_require__(79).getVertexCount;
	var createBufferGeometry = __webpack_require__(79).createBufferGeometry;

	// Maximum vertex count that we allow for a consolidated mesh. For simplicity, we keep it within 16 bit scope, so that
	// we can always use Uint16 indices. Allowing too large containers may backfire in several ways, e.g.,
	// it would reduce granularity for progressive rendering and frustum culling too much.
	var MaxVertexCountPerMesh = 0xFFFF;

	var MATERIAL_VARIANT = __webpack_require__(80).MATERIAL_VARIANT;

	/**
	                                                                                   *  Helper class to collect shapes with identical materials and merge them into a single large shape.
	                                                                                   *
	                                                                                   *  @constructor
	                                                                                   *    @param {THREE.Material} material - Material must be the same for all added geometries.
	                                                                                   */
	function MergeBucket(material) {
	    this.geoms = [];
	    this.matrices = [];
	    this.vertexCount = 0;
	    this.material = material;
	    this.fragIds = [];
	    this.worldBox = new THREE.Box3();
	};

	MergeBucket.prototype = {
	    constructor: MergeBucket,

	    /**
	                               * @param {THREE.BufferGeometry} geom
	                               * @param {THREE.Box3}           worldBox
	                               * @param {Number}               fragId
	                               * @returns {Number}             costs - memory cost increase caused by the new geometry
	                               */
	    addGeom: function addGeom(geom, worldBox, fragId) {

	        this.geoms.push(geom);
	        this.fragIds.push(fragId);

	        this.worldBox.union(worldBox);
	        this.vertexCount += getVertexCount(geom);

	        // Track memory costs. As long as the bucket has only a single shape,
	        // we have no costs at all.
	        var numGeoms = this.geoms.length;
	        if (numGeoms == 1) {
	            return 0;
	        }

	        // Fragment geometries are usually BufferGeometry, which provide a byteSize for the
	        // interleaved buffer. Anything else is currently unexpected and needs code change.
	        if (geom.byteSize === undefined) {
	            THREE.warn("Error in consolidation: Geometry must contain byteSize.");
	        }

	        // For any bucket with >=2 geoms, all geometries must be considered for the costs.
	        return geom.byteSize + (numGeoms == 2 ? this.geoms[0].byteSize : 0);
	    } };


	/**
	          *  Packs a Vector3 normal vector into 2 components. This is a CPU-side implementation of PackNormalsShaderChunk
	          *  (see ShaderChunks.js)
	          *
	          *   @param {THREE.Vector3} normal - InOut normal vector.
	          *
	          *  Note that 'normal' must be normalized!
	          */
	function encodeNormal(normal) {
	    normal.x = 0.5 * (1.0 + Math.atan2(normal.y, normal.x) / Math.PI);
	    normal.y = 0.5 * (1.0 + normal.z);
	    normal.z = 0.0; // not used for result
	};

	/**
	    * @param {THREE.Vector3} normal - InOut normal vector. Input z is ignored.
	    */
	function decodeNormal(normal) {
	    var angX = 2.0 * normal.x - 1.0;
	    var angY = 2.0 * normal.y - 1.0;
	    var scthX = Math.sin(angX * Math.PI);
	    var scthY = Math.cos(angX * Math.PI);
	    var scphiX = Math.sqrt(1.0 - angY * angY);
	    var scphiY = angY;
	    normal.x = scthY * scphiX;
	    normal.y = scthX * scphiX;
	    normal.z = scphiY;
	};

	/**
	    *  Writes a dbId into 4 subsequent bytes of an Uint8Array. (4th is only for alignment and always 0)
	    *   @param {Number}     dbId
	    *   @param {Uint8Array} bufferUint8 - view into the vertex buffer that we write to.
	    *   @param {Number}     writeIndex  - Index into the uint8 array where we write the first byte.
	    */
	function writeIdToBuffer(dbId, bufferUint8, writeIndex) {
	    bufferUint8[writeIndex++] = dbId & 0xff;
	    bufferUint8[writeIndex++] = dbId >> 8 & 0xff;
	    bufferUint8[writeIndex++] = dbId >> 16 & 0xff;
	    bufferUint8[writeIndex] = 0; // dbIds are only vec3 in the shader
	}

	/**
	   *  Transforms positions and normals of a vertex buffer. Optionally,
	   *  the transform can be restricted to a given vertex range.
	   *
	   *  NOTE: Only interleaved buffers with packed normals are supported.
	   *
	   *   @param {THREE.BufferGeometry} geom
	   *   @param {THREE.Matrix4}        matrix
	   *   @param {Number}               [rangeStart] - First vertex to transform. (default: 0)
	   *   @param {Number}               [rangeEnd]   - End of vertex range.       (default: #vertices)
	   */
	var transformVertices = function () {

	    var _tmpVec;
	    var _tmpMatrix3;

	    return function (geom, matrix, rangeStart, rangeEnd) {
	        if (!_tmpVec) {
	            _tmpVec = new THREE.Vector3();
	            _tmpMatrix3 = new THREE.Matrix3();
	        }

	        // Check if interleaved vertex buffer is available
	        if (!geom.vb) {
	            // buffer is either empty or has unexpected format
	            if (geom.attributes.position.count > 0) {
	                THREE.warn("Unexpected vertex buffer format: Interleaved vertex buffer expected.");
	            }
	            return;
	        }

	        // default range is the whole buffer
	        rangeStart = rangeStart || 0;
	        rangeEnd = rangeEnd || getVertexCount(geom);

	        // transform positions
	        var posOffset = geom.attributes.position.itemOffset;
	        for (var i = rangeStart; i < rangeEnd; i++) {

	            // read vertex position i
	            var offset = i * geom.vbstride + posOffset;
	            _tmpVec.set(geom.vb[offset], geom.vb[offset + 1], geom.vb[offset + 2]);

	            _tmpVec.applyMatrix4(matrix);

	            // write vertex position i
	            geom.vb[offset] = _tmpVec.x;
	            geom.vb[offset + 1] = _tmpVec.y;
	            geom.vb[offset + 2] = _tmpVec.z;
	        }

	        // transform normals (if available)
	        var normalAttrib = geom.attributes.normal;
	        if (normalAttrib) {

	            // we only support packed normals
	            var packedNormals = normalAttrib.bytesPerItem == 2 && normalAttrib.itemSize == 2;
	            if (!packedNormals) {
	                THREE.warn("Unexpected normal vector storage. Normals will not be transformed correctly.");
	                return;
	            }

	            // To transform normals, we need an Uint16-view to the data.
	            // Packed normals are 2-component Uint16-vectors.
	            var vbUint16 = new Uint16Array(geom.vb.buffer, geom.vb.byteOffset, geom.vb.length * 2);
	            var uint16PerVertex = geom.vbstride * 2; // Multiply by 2, because vbstride and itemOffset
	            var uint16NormalOffset = normalAttrib.itemOffset * 2; // are counting 32Bit floats.
	            var maxUint16 = 0xFFFF;

	            // compute normal transform
	            var normalMatrix = _tmpMatrix3.getNormalMatrix(matrix);

	            // transform normal vectors
	            for (var i = rangeStart; i < rangeEnd; i++) {
	                // read byte-normal of vertex i
	                var normalIndex = i * uint16PerVertex + uint16NormalOffset;
	                _tmpVec.set(vbUint16[normalIndex], vbUint16[normalIndex + 1], 0.0);

	                // decode to vec3 with components in [0,1]
	                _tmpVec.divideScalar(maxUint16);
	                decodeNormal(_tmpVec);

	                _tmpVec.applyMatrix3(normalMatrix);

	                // Note that encodeNormal requires normalized values. Although a decodedNormal is
	                // always normalized, the normalMatrix may involve a scaling.
	                _tmpVec.normalize();

	                // encode back to 2-component uint16
	                encodeNormal(_tmpVec);
	                _tmpVec.multiplyScalar(maxUint16);

	                // write back to vertex buffer
	                vbUint16[normalIndex] = _tmpVec.x;
	                vbUint16[normalIndex + 1] = _tmpVec.y;
	            }
	        }
	    };
	}();

	/**
	      *  Set vertex attributes and vbstride of dstGeom to the same vertex format as srcGeom.
	      *  Note that this can only be used for interleaved vertex buffers.
	      *   @param {LmvBufferGeometry} srcGeom
	      *   @param {LmvBufferGeometry} dstGeom
	      */
	function copyVertexFormat(srcGeom, dstGeom) {

	    if (!srcGeom.vb || !srcGeom.vbstride) {
	        THREE.warn("copyVertexFormat() supports only interleaved buffers");
	    }

	    // VertexAttribute objects of WGS BufferGeometry do not contain actual vertex data.
	    // Therfore, identical BufferAttribute objects are shared among different
	    // BufferGeometries. (see findBufferAttribute in BufferGeometry.js)
	    for (var attrib in srcGeom.attributes) {
	        dstGeom.attributes[attrib] = srcGeom.attributes[attrib];
	    }

	    // copy attribute keys
	    dstGeom.attributesKeys = srcGeom.attributesKeys.slice(0);
	    dstGeom.vbstride = srcGeom.vbstride;
	};

	// read matrix i from Float32 array to target THREE.Matrix4
	function getMatrix(index, array, target) {
	    // TypedArray.set does not support a srcOffset parameter. So we have to use manual copy here.
	    var offset = 16 * index;
	    for (var i = 0; i < 16; i++) {
	        target.elements[i] = array[i + offset];
	    }
	};

	/**
	    * Create a single BufferGeometry that contains all geometries.
	    * Requirements:
	    *  - All geoms must have identical vertex format.
	    *  - Geometries must have interleaved vertex buffers
	    *  - Geometries must not have instance buffers. But the same geometry may be added with different matrices.
	    *
	    *  @param {THREE.BufferGeometry[]} geoms
	    *  @param {Float32Array}           matrices - array of matrices per geometry. Each matrix is a range of 16 floats.
	    *  @param {Int32Array}             dbIds    - db per input geometry. Used to create per-vertex ids.
	    *  @param {THREE.Box3}             worldBox - summed worldBox of all transformed geometries
	    *  @returns {LmvBufferGeometry}
	    */
	function mergeGeometries(geoms, matrices, dbIds, worldBox) {

	    // floats per vertex
	    var stride = geoms[0].vbstride; // same for src and dst, because we add per-vertex ids as separate attribute

	    // compute summed vertex and index count (and summed box if needed)
	    var indexCount = 0;
	    var vertexCount = 0;
	    for (var i = 0; i < geoms.length; i++) {
	        var geom = geoms[i];
	        indexCount += geoms[i].ib.length;
	        vertexCount += getVertexCount(geom);
	    }

	    var mergedGeom = createBufferGeometry();

	    mergedGeom.boundingBox = worldBox.clone();

	    // allocate new geometry with vertex and index buffer
	    mergedGeom.vb = new Float32Array(vertexCount * stride);
	    mergedGeom.ib = new Uint16Array(indexCount);

	    // copy common properties from geom[0]
	    copyVertexFormat(geoms[0], mergedGeom);

	    // Allocate array to store per-vertex ids
	    var IDItemSize = 3; // IDs are vec3 in the shader
	    var IDBytesPerVertex = 3;
	    var dstIds = new Uint8Array(IDBytesPerVertex * vertexCount);

	    // create additional per-vertex id attribute
	    // In the shader, an id is a vec3 with components in [0,1].
	    // In memory, each component has 8 Bits of the dbId.
	    var idAttrib = new THREE.BufferAttribute(dstIds, IDItemSize);
	    idAttrib.bytesPerItem = 1;
	    idAttrib.normalize = true; // shader needs normalized components
	    mergedGeom.addAttribute('id', idAttrib);

	    // change vbstride to consider per-vertex ids
	    mergedGeom.vbstride = stride;

	    var vertices = mergedGeom.vb;
	    var indices = mergedGeom.ib;

	    // write-offset in vertices (in floats)
	    var dstOffset = 0;

	    // write-offset in dstIds
	    var dstIdsByteOffset = 0;

	    // reused for each src geometry
	    var matrix = new THREE.Matrix4();

	    // create combined vertex and index buffer - including transforms
	    var vertexOffset = 0;
	    var indexOffset = 0;
	    for (var i = 0; i < geoms.length; i++) {
	        var geom = geoms[i];
	        var dbId = dbIds[i];
	        var geomVertexCount = getVertexCount(geom);

	        // copy indices (+ offset)
	        for (var j = 0; j < geom.ib.length; j++) {
	            indices[indexOffset + j] = geom.ib[j] + vertexOffset;
	        }

	        // copy vertex buffer
	        vertices.set(geom.vb, dstOffset);
	        dstOffset += geom.vb.length;

	        // get matrix for geom i
	        getMatrix(i, matrices, matrix);

	        // bake mesh matrix
	        transformVertices(mergedGeom, matrix, vertexOffset, vertexOffset + geomVertexCount);

	        // write ids
	        for (var j = 0; j < geomVertexCount; j++) {
	            writeIdToBuffer(dbId, dstIds, dstIdsByteOffset);
	            dstIdsByteOffset += IDBytesPerVertex;
	        }

	        // set offsets for next geom
	        vertexOffset += geomVertexCount;
	        indexOffset += geom.ib.length;
	    }

	    return mergedGeom;
	};

	/**
	    *  Returns true if geom1 and geom2 have compatible vertex format to allow merging.
	    *  For this, vbstride and all vertex attributes must be equal.
	    *
	    * Requirement: This function is only called for geoms that...
	    *  1. use interleaved vertex buffers
	    *  2. do not use instancing
	    *
	    * @param {THREE.BufferGeometry} geom1
	    * @param {THREE.BufferGeometry} geom2
	    * @returns {boolean}
	    */
	function canBeMerged(geom1, geom2) {

	    if (geom1.vbstride != geom2.vbstride) {
	        return false;
	    }

	    if (geom1.attributesKeys.length != geom2.attributesKeys.length) {
	        return false;
	    }

	    // compare each attribute
	    for (var i = 0, iEnd = geom1.attributesKeys.length; i < iEnd; i++) {
	        var key = geom1.attributesKeys[i];

	        // get BufferAttributes of both geoms
	        var attrib1 = geom1.attributes[key];
	        var attrib2 = geom2.attributes[key];

	        // if geom2 does not have this, we are done
	        if (!attrib2) {
	            return false;
	        }

	        // Since attributes are cached in WGS BufferGeometry, we will mostly detect equality here already.
	        if (attrib1 === attrib2) {
	            return true;
	        }

	        // Compare values. Note that it's not enough to compare the THREE.BufferAttribute properties itemSize and normalize, but
	        // also some WGS-specific values (see BufferGeometry.js).
	        if (
	        attrib1.itemOffset !== attrib2.itemOffset ||
	        attrib1.normalize !== attrib2.normalize ||
	        attrib1.itemSize !== attrib2.itemSize ||
	        attrib1.bytesPerItem !== attrib2.bytesPerItem ||
	        attrib1.isPattern !== attrib2.isPattern)
	        {
	            return false;
	        }
	    }
	    return true;
	};

	/**
	    *  @class ConsolidationBuilder is a utility to merge several (usually small) objects into larger ones to
	    *  improve rendering performance.
	    */
	function ConsolidationBuilder() {
	    this.buckets = []; // {MergeBuchet[]}
	    this.costs = 0; // Consolidation costs in bytes (=costs of merged Geometries for each bucket with >=2 geoms)
	};

	/** @class Helper class to collect results of ConsolidationBuilder. */
	function Consolidation(fragCount) {

	    // all consolidated meshes (+ some original geometries if they could not be merged)
	    this.meshes = []; // {THREE.Mesh[]}

	    // for each initially added source geometry, this array provides the position
	    // in this.meshes where we can find the corresponding output mesh. The output mesh
	    // is either
	    //  a) a consolidated mesh that includes the input geometry or
	    //  b) a mesh that shares the original material and geometry (if it couldn't be merged)
	    this.fragId2MeshIndex = new Int32Array(fragCount);

	    // init with -1
	    for (var i = 0; i < this.fragId2MeshIndex.length; i++) {
	        this.fragId2MeshIndex[i] = -1;
	    }

	    // keep intermediate result to make reruns faster
	    this.consolidationMap = null;
	};

	Consolidation.prototype = {

	    constructor: Consolidation,

	    /** Add a consolidation mesh that combines several source geometries.
	                                 *   @param {THREE.BufferGeometry} geom
	                                 *   @param {THREE.Material}       material
	                                 *   @param {number[]}             fragIds      - array of fragment ids associated with this container
	                                 *   @param {number}               [firstFrag]  - Optional: Use (firstFrag, fragCount) to specify
	                                 *   @param {number}               [fragCount]    a range within the fragIds array.
	                                 */
	    addContainerMesh: function addContainerMesh(geom, material, fragIds, firstFrag, fragCount) {

	        // add new mesh
	        var newMesh = new THREE.Mesh(geom, material);
	        this.meshes.push(newMesh);

	        // default range: full array
	        var rangeStart = firstFrag || 0;
	        var rangeLength = fragCount || fragIds.length;
	        var rangeEnd = rangeStart + rangeLength;

	        // Disable THREE frustum culling for all shapes.
	        //
	        // Reason:
	        // Default frustum culling of THREE.js does not work and would let the mesh disappear.
	        // This happens because newMesh.computeBoundingSphere() fails for interleaved vertex buffers.
	        // (see Frustum.intersectsObject used in FireFlyWebGLRenderer.projectObject)
	        //
	        // Instead, we apply culling before passing a mesh to the Renderer. (see ConsolidationIterator.js)
	        newMesh.frustumCulled = false;

	        // For each source fragment, remember in which container we find it
	        var meshIndex = this.meshes.length - 1;
	        for (var i = rangeStart; i < rangeEnd; i++) {
	            var fragId = fragIds[i];
	            this.fragId2MeshIndex[fragId] = meshIndex;
	        }
	    },

	    /**
	        *  Add a single mesh that has unique matrix, fragId, and dbId. This is used to add meshes
	        *  that share original geometry that could not be merged with anything else.
	        *
	        *   @param {THREE.BufferGeometry} geom
	        *   @param {THREE.Material}      material
	        *   @param {number}               fragId
	        *   @param {THREE.Matrix4}        matrix
	        *   @param {number}               dbId
	        */
	    addSingleMesh: function addSingleMesh(geom, material, fragId, matrix, dbId) {

	        // create new mesh
	        var newMesh = new THREE.Mesh(geom, material);
	        newMesh.matrix.copy(matrix);
	        newMesh.matrixAutoUpdate = false;
	        newMesh.dbId = dbId;
	        newMesh.fragId = fragId;

	        // add it to mesh array
	        this.meshes.push(newMesh);

	        // Disable frustum culling (see comment in addContainerMesh)
	        newMesh.frustumCulled = false;

	        // make it possible to find it later
	        this.fragId2MeshIndex[fragId] = this.meshes.length - 1;
	    },

	    /**
	        *  Shortcut to add geometry, material etc. of a single fragment to the consolidation.
	        *  This is used for all fragments that could not be combined with others.
	        *   @param {FragmentList}  fragList
	        *   @param {number}        fragId
	        */
	    addSingleFragment: function addSingleFragment(fragList, fragId) {
	        var mesh = fragList.getVizmesh(fragId);
	        this.addSingleMesh(mesh.geometry, mesh.material, fragId, mesh.matrixWorld, mesh.dbId);
	    } };


	ConsolidationBuilder.prototype = {

	    /**
	                                    *  Add a new Geometry for consolidation. Note that some geometries cannot be merged (e.g., if their material
	                                    *  is different from all others.). In this case, the output mesh just shares input geometry and material.
	                                    *
	                                    *   @param {THREE.BufferGeometry} geom
	                                    *   @param {THREE.Material}       material
	                                    *   @param {THREE.Box3}           worldBox - worldBox (including matrix transform!)
	                                    *   @param {Number}               fragId   - used to find out later in which output mesh you find this fragment
	                                    */
	    addGeom: function addGeom(geom, material, worldBox, fragId) {

	        // find bucket of meshes that can be merged with the new one
	        var bucket = null;
	        for (var i = 0; i < this.buckets.length; i++) {

	            // get next bucket
	            var nextBucket = this.buckets[i];

	            // same material?
	            if (nextBucket.material.id !== material.id) {
	                continue;
	            }

	            // compatible vertex format?
	            var bucketGeom = nextBucket.geoms[0];
	            if (!canBeMerged(bucketGeom, geom)) {
	                continue;
	            }

	            // this bucket would allow merging, but only if the vertex count doesn't grow too much
	            var vertexCount = getVertexCount(geom);
	            if (vertexCount + nextBucket.vertexCount > MaxVertexCountPerMesh) {
	                continue;
	            }

	            // we found a bucket to merge with
	            bucket = nextBucket;
	            break;
	        }

	        // create a new bucket to collect this mesh
	        if (!bucket) {
	            bucket = new MergeBucket(material);
	            this.buckets.push(bucket);
	        }

	        // add geometry to bucket
	        this.costs += bucket.addGeom(geom, worldBox, fragId);
	    },

	    /**
	        * When all geometries have been added to buckets using addGeom() calls, this function converts the buckets into a
	        * more compact representation called ConsolidationMap. This map summarizes all information that we need to build
	        * the FragmentList consolidation.
	        *
	        * @param {Uint32Array}    allFragIds      - all fragIds, sorted by consolidation costs.
	        * @param {numConsolidate} numConsolidated - number of ids in allFragIds that have been added to consolidation buckets
	        *                                           all remaining ones are processed separately by instancing.
	        * @returns {ConsolidationMap}
	        */
	    createConsolidationMap: function createConsolidationMap(allFragIds, numConsolidated) {

	        // init result object
	        var fragCount = allFragIds.length;
	        var bucketCount = this.buckets.length;
	        var result = new ConsolidationMap(fragCount, bucketCount);

	        // fill fragOrder and ranges. Each range contains all fragIds of a single bucket
	        var nextIndex = 0;
	        for (var b = 0; b < bucketCount; b++) {

	            var bucket = this.buckets[b];

	            // store start index of the range in fragOrder that corresponds to this bucket
	            result.ranges[b] = nextIndex;

	            // store bucket box (no need to copy)
	            result.boxes[b] = bucket.worldBox;

	            // append all fragIds in this bucket
	            result.fragOrder.set(bucket.fragIds, nextIndex);

	            // move nextIndex to the next range start
	            nextIndex += bucket.fragIds.length;
	        }

	        // remember which fragIds remain and must be processed by instancing
	        result.numConsolidated = numConsolidated;
	        for (var i = numConsolidated; i < allFragIds.length; i++) {
	            result.fragOrder[i] = allFragIds[i];
	        }
	        return result;
	    } };


	/**
	          * A ConsolidationMap is an intermediate result of a FragmentList consolidation. It describes which
	          * fragments are to be merged into consolidated meshes and which ones have to be processed by instancing.
	          */
	function ConsolidationMap(fragCount, bucketCount) {

	    // Ordered array of fragIds. Each range of the array defines a merge bucket.
	    this.fragOrder = new Uint32Array(fragCount);

	    // Offsets into fragOrder. ranges[i] is the startIndex of the range corresponding to merge bucket i.
	    this.ranges = new Uint32Array(bucketCount);

	    // Cached bboxes of consolidated meshes
	    this.boxes = new Array(bucketCount);

	    // Store how many fragIds in fragOrder have been added to merge buckets.
	    // (fragIds[0], ..., fragIds[numConsolidated-1].
	    this.numConsolidated = -1; // will be set in createConsolidationMap
	}

	ConsolidationMap.prototype = {

	    /**
	                                * Create consolidated meshes.
	                                *  @param {FragmentList}   fragList
	                                *  @param {MaterialManage} matman
	                                *  @param {RenderModel}    model
	                                *  @returns {Consolidation}
	                                */
	    buildConsolidation: function buildConsolidation(fragList, matman, model) {

	        // some shortcuts
	        var fragIds = this.fragOrder;
	        var fragCount = fragList.getCount();
	        var rangeCount = this.ranges.length;

	        var result = new Consolidation(fragCount);

	        // tmp objects
	        var geoms = [];
	        var matrix = new THREE.Matrix4();

	        // each range of fragIds is merged into a consolidated mesh
	        for (var c = 0; c < rangeCount; c++) {

	            // get range of fragIds in this.fragOrder from which we build the next consolidated mesh.
	            // Note that this.ranges only contains the range begins and the last range ends at this.numConsolidated.
	            var rangeBegin = this.ranges[c];
	            var rangeEnd = c === rangeCount - 1 ? this.numConsolidated : this.ranges[c + 1];
	            var rangeLength = rangeEnd - rangeBegin;

	            // just 1 shape? => just share original geometry and material
	            if (rangeLength === 1) {
	                var fragId = fragIds[rangeBegin];
	                result.addSingleFragment(fragList, fragId, result);
	            }

	            // create array of BufferGeometry pointers
	            geoms.length = rangeLength;

	            // create Float32Array containing the matrix per src fragment
	            var matrices = new Float32Array(16 * rangeLength);

	            // create Int32Array of dbIds
	            var dbIds = new Uint32Array(rangeLength);

	            for (var i = 0; i < rangeLength; i++) {
	                var fragId = fragIds[rangeBegin + i];

	                // fill geoms
	                geoms[i] = fragList.getGeometry(fragId);

	                // store matrix as 16 floats
	                fragList.getOriginalWorldMatrix(fragId, matrix);
	                matrices.set(matrix.elements, 16 * i);

	                // store dbId in Int32Array
	                dbIds[i] = fragList.getDbIds(fragId);
	            }

	            // get box of consolidated mesh
	            var box = this.boxes[c];

	            // use material of first frag in the bucket
	            var firstFrag = fragIds[rangeBegin];
	            var material = fragList.getMaterial(firstFrag);

	            // get geom and material for consolidated mesh
	            var mergedGeom = mergeGeometries(geoms, matrices, dbIds, box);
	            var newMaterial = matman.getMaterialVariant(material, MATERIAL_VARIANT.VERTEX_IDS, model);

	            // add result
	            result.addContainerMesh(mergedGeom, newMaterial, fragIds, rangeBegin, rangeLength);
	        }

	        // store this consolidation map with the consolidation, so that we can rebuild it faster.
	        result.consolidationMap = this;

	        return result;
	    } };


	module.exports = {
	    Consolidation: Consolidation,
	    ConsolidationBuilder: ConsolidationBuilder,

	    // needed by InstanceBufferBuilder
	    writeIdToBuffer: writeIdToBuffer,
	    copyVertexFormat: copyVertexFormat,

	    // needed by ConsolidationIterator
	    mergeGeometries: mergeGeometries };

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"; //var THREE = require('THREE');
	var globals = __webpack_require__(75);

	//Finds a precanned BufferAttribute corresponding to the given
	//attribute data, so that we don't have to allocate the same exact
	//one over and over and over.
	var bufattrs = {};

	function findBufferAttribute(attributeName, attributeData, numInstances) {

	    //Note .array could be undefined in case we are using
	    //an interleaved buffer.
	    var attr;
	    if (attributeData.array) {
	        attr = new THREE.BufferAttribute(attributeData.array, attributeData.itemSize);
	    } else
	    {
	        var id = attributeName + "|" +
	        attributeData.bytesPerItem + "|" +
	        attributeData.normalize + "|" +
	        attributeData.isPattern + "|" +
	        attributeData.divisor + "|" +
	        attributeData.offset;

	        attr = bufattrs[id];
	        if (attr)
	        return attr;

	        attr = new THREE.BufferAttribute(undefined, attributeData.itemSize);
	        bufattrs[id] = attr;
	    }

	    attr.bytesPerItem = attributeData.bytesPerItem;
	    attr.normalize = attributeData.normalize;
	    attr.isPattern = attributeData.isPattern;

	    if (numInstances) {
	        attr.divisor = attributeData.divisor;
	    }

	    if (attributeData.array) {
	        //Is the data for the attribute specified separately
	        //from the interleaved VB?
	    } else
	    if (attributeData.hasOwnProperty("offset")) {
	        //If the attribute is in the interleaved VB, it has
	        //an offset into it.
	        attr.itemOffset = attributeData.offset;
	    } else
	    {
	        THREE.warn("VB attribute is neither interleaved nor separate. Something is wrong with the buffer specificaiton.");
	    }

	    return attr;
	}

	var attrKeys = {};

	function findAttributesKeys(geometry) {
	    var key = "";

	    for (var p in geometry.attributes) {
	        key += p + "|";}

	    var res = attrKeys[key];
	    if (res)
	    return res;

	    res = Object.keys(geometry.attributes);
	    attrKeys[key] = res;

	    return res;
	}


	var indexAttr;
	var BufferGeometry;
	var idcounter = 1;

	function initBufferGeometry() {

	    indexAttr = new THREE.BufferAttribute(undefined, 1);

	    BufferGeometry = function BufferGeometry() {

	        //Avoid calling the superclass constructor for performance reasons.
	        //Skips the creation of a uuid and defining an accessor for the .id property.
	        //THREE.BufferGeometry.call(this);

	        //Null those out since we don't need them.
	        this.uuid = null;
	        this.name = null;
	        this.id = idcounter++;

	        this.attributes = {};
	        this.attributesKeys = [];

	        this.drawcalls = [];
	        this.offsets = this.drawcalls; // backwards compatibility

	        this.boundingBox = null;
	        this.boundingSphere = null;

	        this.numInstances = undefined;
	        this.streamingDraw = false;
	        this.streamingIndex = false;
	        this.svfid = undefined;

	        this.vb = null;
	        this.vbbuffer = undefined;
	        this.ib = null;
	        this.ibbuffer = undefined;
	        this.vaos = undefined;

	        this.vbNeedsUpdate = false;
	        this.vbstride = 0;
	        this.byteSize = 0;

	        this.attributesKeys = undefined;

	        // Note:
	        //  1. Although __webglInit would also be undefined without this assignment, it is still essential
	        //     for performance reasons, because it makes this property known to the JIT compiler. Otherwise,
	        //     it would be attached to each buffer later in WebGLRenderer - which would waste performance.
	        //  2. It is essential to use "undefined" and not "false" here. The reason is that WebGLRenderer
	        //     only checks in the form "__webglInit === undefined", i.e., setting it to "false" here would have
	        //     the same effect like setting it to "true" and would finally cause a memory leak.
	        this.__webglInit = undefined;
	    };

	    BufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype);
	    BufferGeometry.prototype.constructor = BufferGeometry;

	}

	function createBufferGeometry() {
	    if (!BufferGeometry)
	    initBufferGeometry();

	    return new BufferGeometry();
	}


	//Converts a mesh description passed back from worker threads into a renderable three.js
	//compatible BufferGeometry.
	//Sets various extra flags we need.
	function meshToGeometry(mdata) {

	    var mesh = mdata.mesh;
	    var geometry = createBufferGeometry();

	    if (globals.isNodeJS()) {
	        //Used by SVF post-processing tools
	        geometry.packId = mdata.packId;
	        geometry.meshIndex = mdata.meshIndex;
	    }

	    geometry.byteSize = 0;

	    geometry.vb = mesh.vb;
	    geometry.vbbuffer = undefined;
	    geometry.vbNeedsUpdate = true;
	    geometry.byteSize += mesh.vb.byteLength;

	    geometry.vbstride = mesh.vbstride;
	    if (mesh.isLines) /* mesh is SVF lines */
	        geometry.isLines = mesh.isLines;
	    if (mesh.isWideLines) {/* mesh is SVF wide lines */
	        geometry.isWideLines = true;
	        geometry.lineWidth = mesh.lineWidth;
	    }
	    if (mesh.isPoints) {/* mesh is SVF points */
	        geometry.isPoints = mesh.isPoints;
	        geometry.pointSize = mesh.pointSize;
	    }
	    if (mdata.is2d) /* mesh is from F2D */
	        geometry.is2d = true;

	    geometry.numInstances = mesh.numInstances;

	    for (var attributeName in mesh.vblayout) {
	        var attributeData = mesh.vblayout[attributeName];

	        //geometry.addAttribute(attributeName, findBufferAttribute(attributeData, geometry.numInstances));
	        geometry.attributes[attributeName] = findBufferAttribute(attributeName, attributeData, geometry.numInstances);
	    }

	    //Index buffer setup
	    if (!globals.memoryOptimizedLoading) {
	        geometry.addAttribute("index", new THREE.BufferAttribute(mesh.indices, 1));
	    } else {

	        geometry.attributes.index = indexAttr;
	        geometry.ib = mesh.indices;
	        geometry.ibbuffer = undefined;
	    }

	    geometry.attributesKeys = findAttributesKeys(geometry);

	    geometry.byteSize += mesh.indices.byteLength;

	    //TODO: Not sure chunking into list of smaller offset/counts
	    //is required for LMV data since it's already broken up.
	    //if (mesh.indices.length > 65535)
	    if (mesh.vb.length / mesh.vbstride > 65535)
	    THREE.warn("Mesh with >65535 vertices. It will fail to draw.");

	    //TODO: This is a transient object that gets freed once the geometry
	    //is added to the GeometryList. We can save on the object creation
	    //eventually when we do micro optimizations.
	    geometry.boundingBox = new THREE.Box3().copy(mesh.boundingBox);
	    geometry.boundingSphere = new THREE.Sphere().copy(mesh.boundingSphere);

	    //MEM
	    geometry.drawcalls = null;
	    geometry.offsets = null;

	    mdata.geometry = geometry;

	    mdata.mesh = null;
	}

	/** Works for BufferGeometry as well as THREE.BufferGeometry. Supports interleaved and non-interleaved buffers.
	   *   @param {BufferGeometry|THREE.BufferGeometry} geom
	   *   @returns {number}
	   */
	function getVertexCount(geom) {
	    if (geom.vb) {
	        // interleaved
	        return geom.vb.length / geom.vbstride;
	    };
	    // no interleaved buffer. Return count from position attribute or 0
	    return geom.attributes.positions ? geom.attributes.positions.count : 0;
	}

	module.exports = {
	    meshToGeometry: meshToGeometry,
	    createBufferGeometry: createBufferGeometry,
	    getVertexCount: getVertexCount };

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var globals = __webpack_require__(75);
	var createLinePatternTexture = __webpack_require__(81).CreateLinePatternTexture;
	var convertTexture = __webpack_require__(82).convertTexture;
	var clonePrismMaterial = __webpack_require__(83).clonePrismMaterial;

	/**
	                                                                          * Helper class that can optionally be used to manage surface/line materials.
	                                                                          *
	                                                                          * It has several responsibilities:
	                                                                          * 1. Keeps track of materials
	                                                                          * 2. Extends materials with wgs.js specific properties and keeps
	                                                                          *    materials in sync whenever the properties change
	                                                                          *
	                                                                          * @constructor
	                                                                          */
	var MaterialManager = function MaterialManager(renderer) {
	    this._renderer = renderer;
	    this._textures = {};
	    this._texturesToUpdate = [];

	    // TODO: use better naming for HDR, non-HDR, override, and line materials
	    this._materials = {};
	    this._materialsNonHDR = {};

	    // Surface material properties
	    this._exposureBias = 0.0;
	    this._tonemapMethod = 0;
	    this._envMapExposure = 1;
	    this._envRotationSin = 0.0;
	    this._envRotationCos = 1.0;
	    this._reflectionMap = null;
	    this._irradianceMap = null;
	    this._cutplanes = [];
	    this._mrtNormals = false;
	    this._mrtIdBuffer = undefined;

	    // Line material properties
	    this._pixelsPerUnit = 1.0;
	    this._layerMaskTex = null;
	    this._layersMap = null;
	    this._lineStyleTex = null;
	    this._selectionTex = null;
	    this._swapBlackAndWhite = 0.0;
	};

	/**
	    * @enum {number}
	    * @readonly
	    */
	MaterialManager.MATERIAL_VARIANT = {
	    INSTANCED: 0,
	    VERTEX_IDS: 1 };


	// Material and texture management

	MaterialManager.prototype._getModelHash = function (model) {
	    return 'model:' + (model ? model.id : '') + '|';
	};

	MaterialManager.prototype._getMaterialHash = function (model, name) {
	    return this._getModelHash(model) + 'mat:' + name;
	};

	MaterialManager.prototype._getTextureHash = function (model, imageUri, mapName) {
	    //TODO : It's possible that a texture is used as bitmap and bumpmap. In this situation,
	    //if the bitmap is loaded first, the bumpscale won't be updated. To fix this, I added the
	    //definition as part of the key. This is a easy fix but will make the texture loaded twice.
	    //Ideally, we need to improve the current cache to save the texture properties like matrix,
	    //invert flag, separately, because a texture can be used in many places and each of them can
	    //have different properties.
	    return this._getModelHash(model) + 'tex:' + imageUri + '|map:' + mapName;
	};

	/**
	    * Adds surface material without HDR properties.
	    * @param {string} name Unique material name.
	    * @param {THREE.ShaderMaterial} mat Surface material.
	    */
	MaterialManager.prototype.addNonHDRMaterial = function (name, mat) {
	    if (!mat.doNotCut)
	    mat.cutplanes = this._cutplanes;

	    this._materialsNonHDR[name] = mat;
	};

	/**
	    * Adds surface material with HDR properties.
	    * @param {string} name Unique material name.
	    * @param {THREE.ShaderMaterial} mat Surface material.
	    */
	MaterialManager.prototype.addHDRMaterial = function (name, mat) {
	    if (this._reflectionMap && !mat.disableEnvMap)
	    mat.envMap = this._reflectionMap;
	    if (this._irradianceMap)
	    mat.irradianceMap = this._irradianceMap;
	    mat.exposureBias = Math.pow(2.0, this._exposureBias);
	    mat.tonemapOutput = this._tonemapMethod;
	    mat.envMapExposure = this._envMapExposure;
	    mat.envRotationSin = this._envRotationSin;
	    mat.envRotationCos = this._envRotationCos;
	    if (!mat.doNotCut)
	    mat.cutplanes = this._cutplanes;

	    this._applyMRTFlags(mat);

	    this._materials[name] = mat;
	};

	/**
	    * Adds line material for use in 2D drawings.
	    * @param {string} name Unique material name.
	    * @param {THREE.ShaderMaterial} lineMaterial Line material.
	    */
	MaterialManager.prototype.addLineMaterial = function (name, lineMaterial) {
	    if (this._layerMaskTex) {
	        lineMaterial.defines["HAS_LAYERS"] = 1;
	        lineMaterial.uniforms["tLayerMask"].value = this._layerMaskTex;
	    }

	    if (this._lineStyleTex) {
	        lineMaterial.defines["HAS_LINESTYLES"] = 1;
	        lineMaterial.defines["MAX_LINESTYLE_LENGTH"] = this._lineStyleTex.image.width;
	        lineMaterial.uniforms["tLineStyle"].value = this._lineStyleTex;
	        lineMaterial.uniforms["vLineStyleTexSize"].value.set(this._lineStyleTex.image.width, this._lineStyleTex.image.height);
	    }

	    lineMaterial.uniforms["aaRange"].value = 0.5 / (this._pixelsPerUnit * lineMaterial.modelScale);
	    lineMaterial.uniforms["pixelsPerUnit"].value = this._pixelsPerUnit * lineMaterial.modelScale;
	    lineMaterial.uniforms["swap"].value = this._swapBlackAndWhite;

	    this._materials[name] = lineMaterial;
	};

	/**
	    * Override materials may contain multiple variants (e.g. with/without instancing).
	    *
	    * This method is like addMaterialNonHDR, but allows custom variants of
	    * this material - which are added as well.
	    *
	    * Requirement:
	    *  Custom variants of an override material m must be available in array property
	    *  called m.variants. If there is no such array, the behavior is identical with addMaterialNonHDR.
	    *
	    * @param {string}         name
	    * @param {THREE.Material} material
	    */
	MaterialManager.prototype.addOverrideMaterial = function (name, mat) {
	    // Add the main (default) override material
	    this.addNonHDRMaterial(name, mat);

	    // If there is just one variant of the override material, we are done.
	    if (!mat.variants) {
	        return;
	    }

	    // For each alternative variant of this material...
	    for (var i = 0; i < mat.variants.length; i++) {
	        var variant = mat.variants[i];
	        if (!variant) {
	            continue;
	        }
	        // Add custom variant with varied name
	        var variantName = name + "_variant_" + i;
	        this.addNonHDRMaterial(variantName, variant);
	    }
	};

	/**
	    * Returns a cloned version of the given material that has support for instancing or per-vertex ids.
	    *
	    *  The returned material is owned and cached by MaterialManager. It must be associated with a RenderModel
	    *  (specified via svfPath) to make sure that it is disposed later with the other materials of this RenderModel.
	    *
	    *    @param {THREE.Material}   srcMaterial
	    *    @param {MATERIAL_VARIANT} variant     - see MATERIAL_VARIANT enum
	    *    @param {RenderModel}      model       - determines to which RenderModel the material belongs.
	    *                                            this is important to control when the material is disposed.
	    */
	MaterialManager.prototype.getMaterialVariant = function (srcMaterial, variant, model) {
	    // create unique name and use model ID as prefix, so that the material will be disposed when the
	    // RenderModel is removed. Note that srcMaterials are unique for all THREE.Materials.
	    var matName = this._getModelHash(model) + srcMaterial.id + '|' + variant;
	    var result = this._materials[matName];
	    if (!result) {
	        // Create cloned material
	        result = this.cloneMaterial(srcMaterial, model);

	        // Apply variation
	        if (variant === MaterialManager.MATERIAL_VARIANT.INSTANCED) {
	            result.useInstancing = true;
	            // IDs are actually provided per instance, but for the shader, it makes no difference.
	            result.vertexIds = true;
	        } else if (variant === MaterialManager.MATERIAL_VARIANT.VERTEX_IDS) {
	            result.vertexIds = true;
	        }

	        this.addHDRMaterial(matName, result);
	    }

	    return result;
	};

	/**
	    * Removes material from the manager.
	    * @param {string} name Unique material name.
	    */
	MaterialManager.prototype.removeMaterial = function (name) {
	    delete this._materials[name];
	};

	/**
	    * Finds material by name.
	    * @param {string} name Unique material name.
	    * @returns {THREE.ShaderMaterial} Material if found, otherwise undefined.
	    */
	MaterialManager.prototype.findMaterial = function (name) {
	    return this._materials[name];
	};

	/**
	    * Executes callback function for each material.
	    * @param {function} callback Callback function with material as the single parameter.
	    */
	MaterialManager.prototype.forEach = function (callback) {
	    var materials = this._materials;
	    for (var name in materials) {
	        callback(materials[name]);
	    }
	};

	MaterialManager.prototype.loadMaterialTextures = function (model, material, units, loader) {
	    if (!material.textureMaps)
	    return;

	    if (material.texturesLoaded)
	    return;

	    material.texturesLoaded = true;

	    // TODO: Node.js
	    if (globals.isNodeJS())
	    return;

	    // Iterate and parse textures from ugly JSON for each texture type in material.
	    // If has URI and valid mapName load and initialize that texture.
	    var textures = material.textureMaps;
	    for (var mapName in textures) {
	        var map = textures[mapName];
	        var texName = this._getTextureHash(model, map.uri, map.mapName);
	        var texEntry = this._textures[texName];
	        if (texEntry) {
	            // Is texture already loaded, then update the material immediately?
	            if (texEntry.tex) {
	                material[map.mapName] = texEntry.tex;
	                material.needsUpdate = true;
	            } else {
	                this._textures[texName].mats.push(material);
	                this._textures[texName].slots.push(map.mapName);
	            }
	        } else {
	            this._textures[texName] = { mats: [material], slots: [map.mapName], tex: null };
	            var self = this;
	            var texture = loader(material, map, function (map, tex) {
	                // Texture loaded successfully
	                var texName = self._getTextureHash(model, map.uri, map.mapName);
	                var def = self._textures[texName];

	                // If the model was unloaded before the texture loaded, the texture def will no longer exist
	                if (!def)
	                return;

	                if (!def.tex)
	                def.tex = tex;

	                // Set it on all materials that use it
	                for (var i = 0; i < def.mats.length; i++) {
	                    def.mats[i][def.slots[i]] = tex;}

	                // Keep track of materials that need updating on the
	                // next frame. We can use this to throttle texture GPU upload
	                self._texturesToUpdate.push(def);
	            });

	            if (map.mapName == "bumpMap" || map.mapName == "normalMap") {
	                texture.anisotropy = 0;
	            } else {
	                texture.anisotropy = this._renderer ? this._renderer.getMaxAnisotropy() : 0;
	            }

	            // Default params
	            texture.flipY = map.flipY !== undefined ? map.flipY : true;
	            texture.invert = false;
	            texture.wrapS = THREE.RepeatWrapping;
	            texture.wrapT = THREE.RepeatWrapping;

	            // Extract / construct texture params from JSON
	            convertTexture(map.textureObj, texture, units, map.isPrism);
	        }
	    }
	};

	//Called at the beginning of every frame, to perform pending
	//operations like texture updates. This function also
	//has a chance to request full repaint at that time.
	MaterialManager.prototype.updateMaterials = function () {
	    var result = { needsClear: false, needsRender: false, overlayDirty: false };
	    while (this._texturesToUpdate.length)
	    {
	        var def = this._texturesToUpdate.pop();
	        for (var j = 0; j < def.mats.length; j++) {
	            def.mats[j][def.slot] = def.tex;
	            def.mats[j].needsUpdate = true;

	            //If we knew that there are no transparent materials in the scene,
	            //we could just do a needsRender here instead of needsClear, to avoid flashing the model
	            //while loading textures.
	            result.needsClear = true;
	        }
	    }
	    return result;
	};

	/** Removes all materials of the given RenderModel from this manager and collects them in
	    *  a container object. This object can be used to import these materials into another MaterialManager.
	    *   @param {RenderModel} model
	    */
	MaterialManager.prototype.exportModelMaterials = function (model, targetManager) {
	    var hash = this._getModelHash(model);

	    // Remember all materials and materials keys for this model
	    var modelMaterials = {};
	    for (var m in this._materials) {
	        if (m.indexOf(hash) !== -1) {
	            var mat = this._materials[m];

	            // The selection material is not referenced by any shape and uses MaterialManager's own
	            // selectionTexture. We don't transfer it, because the receiving MaterialManager will
	            // create its own one in init2DSelectionMaterial(). Note that skipping it is essential:
	            // Without it, the receiving MaterialManager would skip the initialization of its own
	            // selection material, assuming that it already happened.
	            var isSelectionMaterial = mat.defines && mat.defines.hasOwnProperty("SELECTION_RENDERER");
	            if (!isSelectionMaterial) {
	                modelMaterials[m] = mat;
	            }
	        }
	    }

	    // Remember non-hdr materials
	    var modelMaterialsNonHDR = {};
	    for (var m in this._materialsNonHDR) {
	        if (m.indexOf(hash) !== -1) {
	            modelMaterialsNonHDR[m] = this._materialsNonHDR[m];
	        }
	    }

	    // Remember cached textures for this model
	    var modelTextures = {};
	    for (var t in this._textures) {
	        if (t.indexOf(hash) !== -1) {
	            modelTextures[t] = this._textures[t];
	        }
	    }

	    // dispose all GPU resources for this model
	    this.cleanup(model);

	    return {
	        mats: modelMaterials,
	        matsNonHDR: modelMaterialsNonHDR,
	        textures: modelTextures };

	};

	/** Adds all materials of a RenderModel to this MaterialManager. Note that Materials cannot
	    *  be owned by multiple MaterialManagers at once.
	    *   @param {Object} modelMaterials - must be obtained by a prior exportModelMaterials() call
	    *                                    to this or another MaterialManager.
	    */
	MaterialManager.prototype.importModelMaterials = function (modelMaterials) {
	    // Add materials to the new MaterialManager.
	    // Note that we exploit here that material names are unique across different MaterialManagers.
	    for (var m in modelMaterials.mats) {
	        var mat = modelMaterials.mats[m];
	        if (mat.is2d) {
	            this.addLineMaterial(m, mat);
	        } else {
	            this.addHDRMaterial(m, mat);
	        }
	    }

	    // Add all non-hdr materials
	    for (var m in modelMaterials.matsNonHDR) {
	        this.addMaterialNonHDR(m, modelMaterials.matsNonHDR[m]);
	    }

	    // Add all textures
	    for (var t in modelMaterials.textures) {
	        this._textures[t] = modelMaterials.textures[t];
	    }
	};

	/**
	    * Returns a copy of the given material. Note that textures are shared, not copied.
	    * If not all textures of mat are loaded yet, the owning RenderModel is required
	    * to enure that the cloned material receives the textures as well.
	    *
	    * @param {THREE.Material}    mat
	    * @param {RenderModel}       Required if some textures might not be loaded yet.
	    * @returns {THREE.Material}
	    */
	MaterialManager.prototype.cloneMaterial = function (mat, model) {
	    var material = mat.isPrismMaterial ? clonePrismMaterial(mat) : mat.clone();

	    // clone additional properties
	    if (material instanceof THREE.MeshPhongMaterial || material.isPrismMaterial) {
	        material.packedNormals = mat.packedNormals;
	        material.exposureBias = mat.exposureBias;
	        material.irradianceMap = mat.irradianceMap;
	        material.envMapExposure = mat.envMapExposure;
	        material.envRotationSin = mat.envRotationSin;
	        material.envRotationCos = mat.envRotationCos;
	        material.proteinType = mat.proteinType;
	        material.proteinMat = mat.proteinMat;
	        material.tonemapOutput = mat.tonemapOutput;
	        material.cutplanes = mat.cutplanes;
	        material.textureMaps = mat.textureMaps;
	        material.texturesLoaded = mat.texturesLoaded;
	    }

	    if (mat.is2d) {
	        material.is2d = true;
	    }

	    if (mat.textureMaps) {
	        for (var mapName in mat.textureMaps) {
	            if (mat[mapName]) {
	                // texture is already loaded - we can share it right now
	                material[mapName] = mat[mapName];
	            } else if (model) {
	                // texture loading is in progress. Make sure that the cloned
	                // material receives it as well.

	                // get texture name
	                var texUri = material.textureMaps[mapName].uri;
	                var texName = this._getTextureHash(model, texUri, mapName);

	                // add new material to receiver list
	                var texReceiverObj = this._textures[texName];
	                texReceiverObj.mats.push(material);
	                texReceiverObj.slots.push(mapName);
	            }
	        }
	    }

	    this._applyMRTFlags(material);

	    return material;
	};

	/**
	    * Deallocates any material related GL objects associated with the given model.
	    */
	MaterialManager.prototype.cleanup = function (model) {
	    var hash = this._getModelHash(model);

	    //Dispose all textures that were loaded as part of the given SVF
	    var newTex = {};

	    for (var t in this._textures) {
	        var tdef = this._textures[t];
	        if (t.indexOf(hash) === -1)
	        newTex[t] = tdef;else
	        if (tdef.tex) {
	            tdef.tex.dispose();
	            tdef.tex.needsUpdate = true;
	        }
	    }
	    this._textures = newTex;

	    //Remove all materials that were used by the given SVF
	    var newMats = {};
	    var DISPOSE_EVENT = { type: 'dispose' };

	    for (var m in this._materials) {
	        if (model && m.indexOf(hash) === -1) {
	            newMats[m] = this._materials[m];
	        } else {
	            var mat = this._materials[m];
	            mat.dispatchEvent(DISPOSE_EVENT);
	            mat.needsUpdate = true; //in case it gets used again
	            mat.envMap = null;
	            if (mat.is2d) {
	                // decouple from textures owned by MaterialManager
	                mat.uniforms["tLayerMask"].value = null;
	                mat.uniforms["tLineStyle"].value = null;

	                // dispose raster texture
	                var rasterTex = mat.uniforms["tRaster"];
	                if (rasterTex && rasterTex.value instanceof THREE.Texture) {
	                    rasterTex.value.dispose();
	                    rasterTex.value.needsUpdate = true;
	                }
	            }
	        }
	    }

	    this._materials = newMats;

	    // cleanup non-HDR materials
	    var newMatsNonHDR = {};
	    for (var m in this._materialsNonHDR) {
	        if (model && m.indexOf(hash) === -1) {
	            newMatsNonHDR[m] = this._materialsNonHDR[m];
	        } else {
	            var mat = this._materialsNonHDR[m];
	            mat.dispatchEvent(DISPOSE_EVENT);
	            mat.needsUpdate = true; //in case it gets used again
	        }
	    }
	    this._materialsNonHDR = newMatsNonHDR;
	};

	// Surface material properties

	/**
	 * Sets exposure bias for all surface materials.
	 *
	 * Exposure correction of 2^exposureBias applied to rendered output color
	 * before passing into the tone mapper.
	 *
	 * @param {number} exposureBias Exposure bias input.
	 */
	MaterialManager.prototype.setTonemapExposureBias = function (exposureBias) {
	    this._exposureBias = exposureBias;
	    var bias = Math.pow(2.0, exposureBias);
	    this.forEach(function (m) {
	        m.exposureBias = bias;
	        m.needsUpdate = true;
	    });
	};

	/**
	    * Sets tone mapping method for all surface materials.
	    * @param {number} method Tone mapping method (0: none, 1: Canon lum., 2: Canon RGB)
	    */
	MaterialManager.prototype.setTonemapMethod = function (method) {
	    this._tonemapMethod = method;
	    this.forEach(function (m) {
	        m.tonemapOutput = method;
	        m.needsUpdate = true;
	    });
	};

	/**
	    * Sets env. exposure for all surface materials.
	    *
	    * An additional multiplier of 2^envExposure will be applied
	    * to the env. map intensities, in case RGBM environment map is used.
	    *
	    * @param {number} envExposure Environment exposure input.
	    */
	MaterialManager.prototype.setEnvExposure = function (envExposure) {
	    var scale = Math.pow(2.0, envExposure);
	    this._envMapExposure = scale;
	    this.forEach(function (m) {
	        m.envMapExposure = scale;
	        m.needsUpdate = true;
	    });
	};

	/**
	    * Sets env. rotation for all surface materials.
	    * @param {number} rotation Relative angle in radians (-Pi..Pi).
	    */
	MaterialManager.prototype.setEnvRotation = function (rotation) {
	    var s = this._envRotationSin = Math.sin(rotation);
	    var c = this._envRotationCos = Math.cos(rotation);
	    this.forEach(function (m) {
	        m.envRotationSin = s;
	        m.envRotationCos = c;
	        m.needsUpdate = true;
	    });
	};

	/**
	    * Sets reflection map (env. map) for all surface materials.
	    * @param {THREE.Texture} map Reflection map.
	    */
	MaterialManager.prototype.setReflectionMap = function (map) {
	    this._reflectionMap = map;
	    this.forEach(function (m) {
	        if (!m.disableEnvMap) {
	            m.envMap = map;
	            m.needsUpdate = true;
	        }
	    });
	};

	/**
	    * Sets irradiance map for all surface materials.
	    * @param {THREE.Texture} map Irradiance map.
	    */
	MaterialManager.prototype.setIrradianceMap = function (map) {
	    this._irradianceMap = map;
	    this.forEach(function (m) {
	        if (!m.disableEnvMap) {
	            m.irradianceMap = map;
	            m.needsUpdate = true;
	        }
	    });
	};

	/**
	    * Sets cut planes for all materials
	    * Clears any existing cutplanes and populates with the new ones
	    * If empty array or undefined, cut planes will be turned off (cleared)
	    */
	MaterialManager.prototype.setCutPlanes = function (cutplanes) {
	    // Update shaders if num of planes changed
	    if (this._cutplanes.length !== (cutplanes ? cutplanes.length || 0 : 0)) {
	        this.forEach(function (mat) {
	            if (!mat.doNotCut) {
	                mat.needsUpdate = true;
	                if (cutplanes && cutplanes.length > 0)
	                mat.side = THREE.DoubleSide;
	            }
	        });
	        for (var p in this._materialsNonHDR) {
	            if (!this._materialsNonHDR[p].doNotCut)
	            this._materialsNonHDR[p].needsUpdate = true;
	        }
	    }

	    // Empty array (http://jsperf.com/empty-javascript-array)
	    while (this._cutplanes.length > 0) {this._cutplanes.pop();}

	    // Copy cutplanes
	    if (cutplanes) {
	        for (var i = 0; i < cutplanes.length; i++) {
	            this._cutplanes.push(cutplanes[i].clone());
	        }
	    }
	};

	MaterialManager.prototype._applyMRTFlags = function (mat) {

	    // Activating MRTNormals requires the existence of a variable geomNormals in the shader. (see final_frag.glsl)
	    // E.g., for MeshBasicMaterials, setting MRTNormals would cause a compile error. Therefore,
	    // we whitelist materials here that support MRT normals.
	    var matSupportsMrtNormals = mat instanceof THREE.MeshPhongMaterial || mat.isPrismMaterial;

	    var oldN = mat.mrtNormals;
	    var oldI = mat.mrtIdBuffer;
	    var hasMRT = this._renderer && this._renderer.supportsMRT();
	    mat.mrtNormals = matSupportsMrtNormals && hasMRT && this._mrtNormals;
	    mat.mrtIdBuffer = hasMRT ? this._mrtIdBuffer : undefined;
	    if (mat.mrtNormals !== oldN || mat.mrtIdBuffer !== oldI)
	    mat.needsUpdate = true;
	};

	MaterialManager.prototype.toggleMRTSetting = function (flags) {
	    this._mrtNormals = flags.mrtNormals;
	    this._mrtIdBuffer = flags.mrtIdBuffer;
	    var self = this;
	    this.forEach(function (m) {
	        if (!m.is2d) {
	            self._applyMRTFlags(m);
	        }
	    });
	};

	// Line material properties

	MaterialManager.prototype.initLineStyleTexture = function () {
	    this._lineStyleTex = createLinePatternTexture();
	};

	/**
	    * Creates a texture where each pixel corresponds to the visibility of a 2D layer.
	    * The LineShader samples the texture to determine if a geometry is visible
	    * based on its layer visibility.
	    */
	MaterialManager.prototype.initLayersTexture = function (count, layersMap) {
	    // TODO: Once arbitrary layer texture size works
	    // we can base the allocation size on the layerCount
	    var tw = 256;

	    // TODO: Currently the shader math is limited to
	    // a square 256x256 layers mask, since it just does a
	    // scale of the two layer bytes by 1/255. We would need to
	    // send the height of the layer texture to do something smarter,
	    // or wait for texture size query in WebGL 2.
	    // var th = 0 | Math.ceil((layersList.length) / 256.0);
	    var th = 256;

	    var layerMask = new Uint8Array(tw * th);
	    for (var l = 0, lEnd = count; l < lEnd; l++) {
	        layerMask[l] = 0xff;
	    }

	    var layerMaskTex = new THREE.DataTexture(layerMask, tw, th,
	    THREE.LuminanceFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);
	    layerMaskTex.generateMipmaps = false;
	    layerMaskTex.flipY = false;
	    layerMaskTex.needsUpdate = true;

	    // TODO: These are per-model, so we will need
	    // to remember multiple sets in case we support
	    // multi-drawing views.
	    this._layerMaskTex = layerMaskTex;
	    this._layersMap = layersMap;
	};

	/**
	    * Toggles 2D layer visibility by setting the corresponding pixel in the layers texture.
	    */
	MaterialManager.prototype.setLayerVisible = function (layerIndexes, visible) {
	    var layerMaskTex = this._layerMaskTex,
	    layerMaskData = layerMaskTex.image.data,
	    layersMap = this._layersMap,
	    mask = visible ? 0xff : 0;

	    for (var i = 0; i < layerIndexes.length; ++i) {
	        var layerIndex = layerIndexes[i];
	        layerMaskData[layersMap[layerIndex]] = mask;
	    }

	    layerMaskTex.needsUpdate = true;

	    this.forEach(function (m) {
	        if (m.is2d) {
	            m.needsUpdate = true;
	        }
	    });
	};

	MaterialManager.prototype.isLayerVisible = function (layerIndex) {
	    return !!this._layerMaskTex.image.data[this._layersMap[layerIndex]];
	};

	/**
	    * @param {number} maxObjectCount Upper boundary of all ids we can expect. Used to determine required size.
	    */
	MaterialManager.prototype.initSelectionTexture = function (maxObjectCount) {
	    var numObj = maxObjectCount || 1;

	    // determine texture extents
	    var tw = 4096; //NOTE: This size is assumed in the shader, so update the shader if this changes!
	    var th = 0 | Math.ceil(numObj / tw);
	    var p2 = 1;
	    while (p2 < th) {
	        p2 *= 2;}
	    th = p2;

	    // init all pixels with 0
	    var selectionMask = new Uint8Array(tw * th);
	    for (var i = 0; i < numObj; i++) {
	        selectionMask[i] = 0;
	    }

	    // create texture
	    var selectionTex = new THREE.DataTexture(selectionMask, tw, th,
	    THREE.LuminanceFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);
	    selectionTex.generateMipmaps = false;
	    selectionTex.flipY = false;
	    selectionTex.needsUpdate = true;

	    this._selectionTex = selectionTex;
	};

	/**
	    * Set shader params to make the selection texture available for a given 2D material shader.
	    * Used for ghosting and highlighting.
	    * @param {THREE.Material} material - A 2D material (see LineShader.js)
	    */
	MaterialManager.prototype.setSelectionTexture = function (material) {
	    // If selection texture is not initialized yet, the texture will be assigned later (see initSelectionTexture)
	    if (!this._selectionTex) {
	        return;
	    }

	    // Note that selectionTex is a THREE.DataTexture, so that selectionTex.image is not really an image object.
	    // But width and height properties exist for the data object as well.
	    var data = this._selectionTex.image;

	    material.uniforms["tSelectionTexture"].value = this._selectionTex;
	    material.uniforms["vSelTexSize"].value.set(data.width, data.height);
	    material.needsUpdate = true;
	};

	MaterialManager.prototype.updatePixelScale = function (pixelsPerUnit) {
	    var val = this._pixelsPerUnit = pixelsPerUnit;
	    this.forEach(function (m) {
	        if (m.is2d) {
	            m.uniforms["aaRange"].value = 0.5 / (val * m.modelScale);
	            m.uniforms["pixelsPerUnit"].value = val * m.modelScale;
	        }
	    });
	};

	MaterialManager.prototype.updateSwapBlackAndWhite = function (reverse) {
	    var val = this._swapBlackAndWhite = reverse ? 1.0 : 0.0;
	    this.forEach(function (m) {
	        if (m.is2d) {
	            m.uniforms["swap"].value = val;
	        }
	    });
	};

	MaterialManager.prototype.updateViewportId = function (vpId) {
	    this.forEach(function (m) {
	        if (m.is2d) {
	            m.uniforms["viewportId"].value = vpId;
	            m.needsUpdate = true;
	        }
	    });
	};

	module.exports = MaterialManager;

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";var LineStyleDefs = [

	{
	    id: "SOLID",
	    name: "Solid",
	    ascii_art: "_______________________________________",
	    def: [1] },


	//Line types from acad.lin below. Definitions are kept the same
	//as the original except the format is JSON-ified to avoid parsing .LIN

	//
	//  AutoCAD Linetype Definition file
	//  Version 2.0
	//  Copyright 1991, 1992, 1993, 1994, 1996 by Autodesk, Inc.
	//

	//List of line type definitions from ACAD.lin.

	//[TS] The units for these items seem to be inches or drawing units with dot
	// being represented by 0, i.e. pen width = 0. (see note about ISO patterns below)

	{
	    id: "BORDER",
	    name: "Border",
	    ascii_art: "__ __ . __ __ . __ __ . __ __ . __ __ .",
	    def: [.5, -.25, .5, -.25, 0, -.25] },

	{
	    id: "BORDER2",
	    name: "Border (.5x)",
	    ascii_art: "__ __ . __ __ . __ __ . __ __ . __ __ .",
	    def: [.25, -.125, .25, -.125, 0, -.125] },

	{
	    id: "BORDERX2",
	    name: "Border (2x)",
	    ascii_art: "____  ____  .  ____  ____  .  ___",
	    def: [1.0, -.5, 1.0, -.5, 0, -.5] },



	{
	    id: "CENTER",
	    name: "Center",
	    ascii_art: "____ _ ____ _ ____ _ ____ _ ____ _ ____",
	    def: [1.25, -.25, .25, -.25] },

	{
	    id: "CENTER2",
	    name: "Center (.5x)",
	    ascii_art: "___ _ ___ _ ___ _ ___ _ ___ _ ___",
	    def: [.75, -.125, .125, -.125] },

	{
	    id: "CENTERX2",
	    name: "Center (2x)",
	    ascii_art: "________  __  ________  __  _____",
	    def: [2.5, -.5, .5, -.5] },


	{
	    id: "DASHDOT",
	    name: "Dash dot",
	    ascii_art: "__ . __ . __ . __ . __ . __ . __ . __",
	    def: [.5, -.25, 0, -.25] },

	{
	    id: "DASHDOT2",
	    name: "Dash dot (.5x)",
	    ascii_art: "_._._._._._._._._._._._._._._.",
	    def: [.25, -.125, 0, -.125] },

	{
	    id: "DASHDOTX2",
	    name: "Dash dot (2x)",
	    ascii_art: "____  .  ____  .  ____  .  ___",
	    def: [1.0, -.5, 0, -.5] },


	{
	    id: "DASHED",
	    name: "Dashed",
	    ascii_art: "__ __ __ __ __ __ __ __ __ __ __ __ __ _",
	    def: [.5, -.25] },

	{
	    id: "DASHED2",
	    name: "Dashed (.5x)",
	    ascii_art: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
	    def: [.25, -.125] },

	{
	    id: "DASHEDX2",
	    name: "Dashed (2x)",
	    ascii_art: "____  ____  ____  ____  ____  ___",
	    def: [1.0, -.5] },


	{
	    id: "DIVIDE",
	    name: "Divide",
	    ascii_art: "____ . . ____ . . ____ . . ____ . . ____",
	    def: [.5, -.25, 0, -.25, 0, -.25] },

	{
	    id: "DIVIDE2",
	    name: "Divide (.5x)",
	    ascii_art: "__..__..__..__..__..__..__..__.._",
	    def: [.25, -.125, 0, -.125, 0, -.125] },

	{
	    id: "DIVIDEX2",
	    name: "Divide (2x)",
	    ascii_art: "________  .  .  ________  .  .  _",
	    def: [1.0, -.5, 0, -.5, 0, -.5] },


	{
	    id: "DOT",
	    name: "Dot",
	    ascii_art: ". . . . . . . . . . . . . . . . . . . . . . . .",
	    def: [0, -.25] },

	{
	    id: "DOT2",
	    name: "Dot (.5x)",
	    ascii_art: "........................................",
	    def: [0, -.125] },

	{
	    id: "DOTX2",
	    name: "Dot (2x)",
	    ascii_art: ".  .  .  .  .  .  .  .  .  .  .  .  .  .",
	    def: [0, -.5] },


	{
	    id: "HIDDEN",
	    name: "Hidden",
	    ascii_art: "__ __ __ __ __ __ __ __ __ __ __ __ __ __",
	    def: [.25, -.125] },

	{
	    id: "HIDDEN2",
	    name: "Hidden (.5x)",
	    ascii_art: "_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _",
	    def: [.125, -.0625] },

	{
	    id: "HIDDENX2",
	    name: "Hidden (2x)",
	    ascii_art: "____ ____ ____ ____ ____ ____ ____",
	    def: [.5, -.25] },


	{
	    id: "PHANTOM",
	    name: "Phantom",
	    ascii_art: "______  __  __  ______  __  __  ______",
	    def: [1.25, -.25, .25, -.25, .25, -.25] },


	{
	    id: "PHANTOM2",
	    name: "Phantom (.5x)",
	    ascii_art: "___ _ _ ___ _ _ ___ _ _ ___ _ _",
	    def: [.625, -.125, .125, -.125, .125, -.125] },


	{
	    id: "PHANTOMX2",
	    name: "Phantom (2x)",
	    ascii_art: "____________    ____    ____   _",
	    def: [2.5, -.5, .5, -.5, .5, -.5] },


	//
	//  ISO 128 (ISO/DIS 12011) linetypes
	//
	//  The size of the line segments for each defined ISO line, is
	//  defined for an usage with a pen width of 1 mm. To use them with
	//  the other ISO predefined pen widths, the line has to be scaled
	//  with the appropriate value (e.g. pen width 0,5 mm -> ltscale 0.5).
	//

	//[TS] Added pen_width and unit properties to make this explicit

	{
	    id: "ACAD_ISO02W100",
	    name: "ISO dash",
	    ascii_art: "__ __ __ __ __ __ __ __ __ __ __ __ __",
	    def: [12, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO03W100",
	    name: "ISO dash space",
	    ascii_art: "__    __    __    __    __    __",
	    def: [12, -18],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO04W100",
	    name: "ISO long-dash dot",
	    ascii_art: "____ . ____ . ____ . ____ . _",
	    def: [24, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO05W100",
	    name: "ISO long-dash double-dot",
	    ascii_art: "____ .. ____ .. ____ .",
	    def: [24, -3, .5, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO06W100",
	    name: "ISO long-dash triple-dot",
	    ascii_art: "____ ... ____ ... ____",
	    def: [24, -3, .5, -3, .5, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO07W100",
	    name: "ISO dot",
	    ascii_art: ". . . . . . . . . . . . . . . . . . . .",
	    def: [.5, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO08W100",
	    name: "ISO long-dash short-dash",
	    ascii_art: "____ __ ____ __ ____ _",
	    def: [24, -3, 6, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO09W100",
	    name: "ISO long-dash double-short-dash",
	    ascii_art: "____ __ __ ____",
	    def: [24, -3, 6, -3, 6, -3],

	    pen_width: 1,
	    unit: "mm" },

	{
	    id: "ACAD_ISO10W100",
	    name: "ISO dash dot",
	    ascii_art: "__ . __ . __ . __ . __ . __ . __ . ",
	    def: [12, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO11W100",
	    name: "ISO double-dash dot",
	    ascii_art: "__ __ . __ __ . __ __ . __ _",
	    def: [12, -3, 12, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },

	{
	    id: "ACAD_ISO12W100",
	    name: "ISO dash double-dot",
	    ascii_art: "__ . . __ . . __ . . __ . .",
	    def: [12, -3, .5, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },

	{
	    id: "ACAD_ISO13W100",
	    name: "ISO double-dash double-dot",
	    ascii_art: "__ __ . . __ __ . . _",
	    def: [12, -3, 12, -3, .5, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO14W100",
	    name: "ISO dash triple-dot",
	    ascii_art: "__ . . . __ . . . __ . . . _",
	    def: [12, -3, .5, -3, .5, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },


	{
	    id: "ACAD_ISO15W100",
	    name: "ISO double-dash triple-dot",
	    ascii_art: "__ __ . . . __ __ . .",
	    def: [12, -3, 12, -3, .5, -3, .5, -3, .5, -3],

	    pen_width: 1,
	    unit: "mm" },


	//  Complex linetypes
	//
	//  Complex linetypes have been added to this file.
	//  These linetypes were defined in LTYPESHP.LIN in
	//  Release 13, and are incorporated in ACAD.LIN in
	//  Release 14.
	//  
	//  These linetype definitions use LTYPESHP.SHX.
	//

	//[TS] These do not work, we can only render linear types.

	{
	    id: "FENCELINE1",
	    name: "Fenceline circle",
	    ascii_art: "----0-----0----0-----0----0-----0--",
	    def: [.25, -.1, ["CIRC1", "ltypeshp.shx", "x=-.1", "s=.1"], -.1, 1] //TODO: Does not work
	},

	{
	    id: "FENCELINE2",
	    name: "Fenceline square",
	    ascii_art: "----[]-----[]----[]-----[]----[]---",
	    def: [.25, -.1, ["BOX", "ltypeshp.shx", "x=-.1", "s=.1"], -.1, 1] //TODO: Does not work
	},

	{
	    id: "TRACKS",
	    name: "Tracks",
	    ascii_art: "-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-",
	    def: [.15, ["TRACK1", "ltypeshp.shx", "s=.25"], .15] //TODO: Does not work
	},

	{
	    id: "BATTING",
	    name: "Batting",
	    ascii_art: "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
	    def: [.0001, -.1, ["BAT", "ltypeshp.shx", "x=-.1", "s=.1"], -.2, ["BAT", "ltypeshp.shx", "r=180", "x=.1", "s=.1"], -.1] //TODO: Does not work
	},

	{
	    id: "HOT_WATER_SUPPLY",
	    name: "Hot water supply",
	    ascii_art: "---- HW ---- HW ---- HW ----",
	    def: [.5, -.2, ["HW", "STANDARD", "S=.1", "R=0.0", "X=-0.1", "Y=-.05"], -.2] //TODO: Does not work
	},

	{
	    id: "GAS_LINE",
	    name: "Gas line",
	    ascii_art: "----GAS----GAS----GAS----GAS----GAS----GAS--",
	    def: [.5, -.2, ["GAS", "STANDARD", "S=.1", "R=0.0", "X=-0.1", "Y=-.05"], -.25] //TODO: Does not work
	},


	{
	    id: "ZIGZAG",
	    name: "Zig zag",
	    ascii_art: "/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/",
	    def: [.0001, -.2, ["ZIG", "ltypeshp.shx", "x=-.2", "s=.2"], -.4, ["ZIG", "ltypeshp.shx", "r=180", "x=.2", "s=.2"], -.2] //TODO: Does not work
	}];





	var CreateLinePatternTexture = function CreateLinePatternTexture() {

	    var h = LineStyleDefs.length;
	    var w = 0;

	    for (var i = 0; i < h; i++) {
	        var ls = LineStyleDefs[i];

	        if (ls.def.length > w)
	        w = ls.def.length;
	    }

	    var pw = w + 3;
	    var ph = h;

	    var pot = 1;
	    while (pot < pw) {
	        pot *= 2;}
	    pw = pot;

	    pot = 1;
	    while (pot < ph) {
	        pot *= 2;}
	    ph = pot;

	    var tex = new Uint8Array(pw * ph);

	    for (var j = 0; j < h; j++) {
	        var off = j * pw;

	        var ls = LineStyleDefs[j];

	        //NOTE: The pattern scaling here just makes
	        //the definitions in the texture consistent throughout in units of logical pixels (96 pixels per inch).
	        //It does not apply scaling based on pen width or LTSCALE which should be done in shader.
	        //Because we use a Byte texture, the maximum dash length at 96 dpi is about 2.5 inches, which
	        //is enough for the patterns we have today. This can be easily fixed by changing to e.g. rgba8

	        var dpi = 96;
	        var unitScale = ls.unit && ls.unit == "mm" ? 1.0 / 25.4 : 1.0;
	        var penWidth = ls.pen_width || 0;

	        var segs = ls.def;
	        var patLen = 0;
	        for (var i = 0; i < segs.length; i++) {

	            var len = Math.abs(segs[i]);

	            var isDot = len <= penWidth * 0.5;
	            //Is it a dot? (the ISO patterns define dot as segment with half a pen width)
	            if (isDot)
	            len = 0;

	            var ilen = 0 | len * dpi * unitScale;

	            patLen += ilen;

	            //dot handling, set to 1 logical pixel in texture, since we need the 0 to indicate pattern end
	            //the shader will interpret 1 as dot.
	            tex[off + i + 2] = ilen ? ilen : 1;
	        }

	        //Two bytes to store total pattern length in the first two bytes of the texture row
	        tex[off] = patLen % 256;
	        tex[off + 1] = patLen / 256;

	        //null terminate the pattern def in the texture so we know when to stop in the shader
	        tex[off + segs.length + 2] = 0;
	    }

	    var lineStyleTex = new THREE.DataTexture(tex, pw, ph,
	    THREE.LuminanceFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);

	    lineStyleTex.generateMipmaps = false;
	    lineStyleTex.flipY = false;
	    lineStyleTex.needsUpdate = true;

	    return lineStyleTex;
	};

	module.exports = {
	    LineStyleDefs: LineStyleDefs,
	    CreateLinePatternTexture: CreateLinePatternTexture };

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"; //var THREE = require('THREE');
	var prism = __webpack_require__(83);

	// Helper functions to parse ugly Protein JSON
	function parseMaterialColor(props, name) {
	    if (!props || !props["colors"])
	    return new THREE.Color(1, 0, 0); //error -- return red

	    var cobj = props["colors"][name];
	    if (!cobj)
	    return new THREE.Color(0, 0, 0); //ok -- color is not defined
	    //which in the C++ LMVTK is equal to DEFAULT_COLOR, which is black

	    var vals = cobj["values"];
	    if (!vals || !vals.length)
	    return new THREE.Color(1, 0, 0); //error

	    var rgb = vals[0];
	    return new THREE.Color(rgb["r"], rgb["g"], rgb["b"]);
	}

	function parseMaterialScalar(props, name, undefVal) {
	    if (!props || !props["scalars"])
	    return undefVal;

	    var vobj = props["scalars"][name];
	    if (!vobj)
	    return undefVal;

	    return vobj["values"][0];
	}

	function parseMaterialBoolean(props, name, undefVal) {
	    if (!props || !props["booleans"])
	    return undefVal;

	    var vobj = props["booleans"];
	    if (!vobj)
	    return undefVal;

	    return vobj[name];
	}

	function parseMaterialGeneric(props, category, name, undefVal) {
	    if (!props || !props[category])
	    return undefVal;

	    var vobj = props[category][name];
	    if (!vobj)
	    return undefVal;

	    return vobj["values"][0];
	}

	function parseWoodProfile(props, category, name) {
	    //Init a default object.
	    var ret = {
	        bands: 0,
	        weights: new THREE.Vector4(1, 1, 1, 1),
	        frequencies: new THREE.Vector4(1, 1, 1, 1) };


	    if (!props || !props[category])
	    return ret;

	    var vobj = props[category][name];
	    if (!vobj || !vobj.values || !(vobj.values instanceof Array))
	    return ret;

	    var values = vobj.values;
	    ret.bands = values.length / 2;
	    for (var i = 0; i < ret.bands; ++i) {
	        // Note that the frequencies stored in the material are actually used in the shader as 1/frequency.
	        // We perform this computation once here and store these reciprocals, for efficiency.
	        ret.frequencies.setComponent(i, 1 / values[2 * i]);
	        ret.weights.setComponent(i, values[2 * i + 1]);
	    }

	    return ret;
	}

	function parseMaterialScalarWithSceneUnit(props, name, sceneUnit, undefVal) {
	    if (!props || !props["scalars"])
	    return undefVal;

	    var vobj = props["scalars"][name];
	    if (!vobj)
	    return undefVal;

	    return ConvertDistance(vobj["values"][0], vobj["units"], sceneUnit);
	}

	function parseMaterialGenericConnection(props, category, name, undefVal) {
	    if (!props || !props[category])
	    return undefVal;

	    var vobj = props[category][name];
	    if (!vobj)
	    return undefVal;

	    var connections = vobj["connections"];
	    if (!connections)
	    return undefVal;

	    return vobj["connections"][0];
	}

	function SRGBToLinearFloat(component) {
	    var result = component;

	    if (result <= 0.04045)
	    result /= 12.92;else

	    result = Math.pow((result + 0.055) / 1.055, 2.4);

	    return result;
	}

	function SRGBToLinear(color) {
	    var r, g, b;

	    r = SRGBToLinearFloat(color.r);
	    g = SRGBToLinearFloat(color.g);
	    b = SRGBToLinearFloat(color.b);

	    return new THREE.Color(r, g, b);
	}

	// TODO, since web doesn't use AdCoreUnits dependencies, only 9 units are supported in web now.
	var UnitPerMeter = {
	    MilliMeter: 1000, mm: 1000, 8206: 1000,
	    DeciMeter: 10, dm: 10, 8204: 10,
	    CentiMeter: 100, cm: 100, 8205: 100,
	    Meter: 1, m: 1, 8193: 1,
	    KiloMeter: 0.001, km: 0.001, 8201: 0.001,
	    Inch: 39.37008, in: 39.37008, 8214: 39.37008,
	    Foot: 3.28084, ft: 3.28084, 8215: 3.28084,
	    Mile: 0.00062137, mi: 0.00062137, 8225: 0.00062137,
	    Yard: 1.09361, yard: 1.09361, 8221: 1.09361 };


	// Convert meter to the new unit.
	function ConvertDistance(distance, currentUnit, newUnit) {

	    var factor = UnitPerMeter[newUnit];
	    if (!factor) {
	        factor = 1;
	        THREE.warn('Unsupported unit: ' + newUnit);
	    }

	    var divisor = UnitPerMeter[currentUnit];
	    if (!divisor) {
	        divisor = 1;
	        THREE.warn('Unsupported unit: ' + currentUnit);
	    }

	    return distance * factor / divisor;
	}

	function GetBumpScale(props, type, sceneUnit) {
	    if (type === 0) {
	        var depth = parseMaterialScalarWithSceneUnit(props, "bumpmap_Depth", sceneUnit, 0);

	        var scale_x = 1;
	        var scale_y = 1;
	        if (parseMaterialGeneric(props, "scalars", "texture_RealWorldScale") != null) {
	            scale_x = scale_y = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldScale", sceneUnit, 1);
	        } else
	        {
	            scale_x = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldScaleX", sceneUnit, 1);
	            scale_y = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldScaleY", sceneUnit, 1);
	        }
	        scale_x = scale_x === 0 ? 1 : 1 / scale_x;
	        scale_y = scale_y === 0 ? 1 : 1 / scale_y;

	        return new THREE.Vector2(scale_x * depth, scale_y * depth);
	    } else
	    {
	        var normalScale = parseMaterialGeneric(props, "scalars", "bumpmap_NormalScale", 1);
	        return new THREE.Vector2(normalScale, normalScale);
	    }
	}

	function Get2DMapTransform(props, sceneUnit) {

	    var offset_x = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldOffsetX", sceneUnit, 0);
	    var offset_y = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldOffsetY", sceneUnit, 0);
	    var uoffset = parseMaterialGeneric(props, "scalars", "texture_UOffset", 0);
	    var voffset = parseMaterialGeneric(props, "scalars", "texture_VOffset", 0);

	    // include the additional U and V Offsets
	    offset_x += uoffset;
	    offset_y += voffset;

	    // Get the real-world size, i.e. the size of the map in a real unit, and use the reciprocal as
	    // the scale.  If the scale is zero, use one instead.
	    var scale_x = 1;
	    var scale_y = 1;
	    if (parseMaterialGeneric(props, "scalars", "texture_RealWorldScale") != null) {
	        scale_x = scale_y = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldScale", sceneUnit, 1);
	    } else
	    {
	        scale_x = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldScaleX", sceneUnit, 1);
	        scale_y = parseMaterialScalarWithSceneUnit(props, "texture_RealWorldScaleY", sceneUnit, 1);
	    }
	    scale_x = scale_x === 0 ? 1 : 1 / scale_x;
	    scale_y = scale_y === 0 ? 1 : 1 / scale_y;

	    // include the additional U and V scales
	    var uscale = parseMaterialGeneric(props, "scalars", "texture_UScale", 1);
	    var vscale = parseMaterialGeneric(props, "scalars", "texture_VScale", 1);
	    scale_x *= uscale;
	    scale_y *= vscale;

	    // Get the rotation angle and convert it from degrees to radians.
	    var angle = parseMaterialGeneric(props, "scalars", "texture_WAngle", 1);
	    angle *= Math.PI / 180.0;

	    var matrix = {
	        elements: [
	        Math.cos(angle) * scale_x, Math.sin(angle) * scale_y, 0,
	        -Math.sin(angle) * scale_x, Math.cos(angle) * scale_y, 0,
	        offset_x, offset_y, 1] };



	    return matrix;
	}

	var PrismImportantSamplingTexture;
	function InitPrismImportantSamplingTextures() {
	    //random number texture for prism important sampling.
	    //We can reuse 3d wood noise texture, but to align with Fusion,
	    //use the same random number texture.
	    var randomNum = [
	    0, 128, 64, 191, 32, 160, 96, 223,
	    16, 143, 80, 207, 48, 175, 112, 239,
	    8, 135, 72, 199, 40, 167, 103, 231,
	    25, 151, 88, 215, 56, 183, 120, 250];


	    var randomNumBuffer = new Uint8Array(randomNum);
	    var randomNumTex = new THREE.DataTexture(randomNumBuffer, 32, 1,
	    THREE.LuminanceFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.RepeatWrapping, THREE.RepeatWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);
	    randomNumTex.generateMipmaps = false;
	    randomNumTex.flipY = false;
	    randomNumTex.needsUpdate = true;

	    var areaElement = function areaElement(x, y) {
	        return Math.atan2(x * y, Math.sqrt(x * x + y * y + 1.0));
	    };

	    //Calculate the solid angle, so we don't need to do this in the shader.
	    /// http://www.mpia-hd.mpg.de/~mathar/public/mathar20051002.pdf
	    /// http://www.rorydriscoll.com/2012/01/15/cubemap-texel-solid-angle/
	    var solidAngleBuffer = new Uint8Array(128 * 128);
	    var u, v;
	    var invFaceSize = 1.0 / 128.0;
	    for (var i = 0; i < 128; ++i) {
	        for (var j = 0; j < 128; ++j) {
	            u = i / 128.0 * 2.0 - 1.0;
	            v = j / 128.0 * 2.0 - 1.0;
	            u = Math.min(Math.max(-1.0 + invFaceSize, u), 1.0 - invFaceSize);
	            v = Math.min(Math.max(-1.0 + invFaceSize, v), 1.0 - invFaceSize);

	            var x0 = u - invFaceSize;
	            var x1 = u + invFaceSize;
	            var y0 = v - invFaceSize;
	            var y1 = v + invFaceSize;

	            // Compute solid angle of texel area.
	            var solidAngle = areaElement(x1, y1) -
	            areaElement(x0, y1) -
	            areaElement(x1, y0) +
	            areaElement(x0, y0);
	            //The max result is 0.000244125724. Map to [0, 255]
	            solidAngleBuffer[i * 128 + j] = solidAngle * 1000000;
	        }
	    }

	    var solidAngleTex = new THREE.DataTexture(solidAngleBuffer, 128, 128,
	    THREE.LuminanceFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.RepeatWrapping, THREE.RepeatWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);
	    solidAngleTex.generateMipmaps = false;
	    solidAngleTex.flipY = false;
	    solidAngleTex.needsUpdate = true;

	    PrismImportantSamplingTexture = {
	        randomNum: randomNumTex,
	        solidAngle: solidAngleTex };

	}

	var PrismWoodTexture;
	//Init the prism wood textures. They are used in all prism 3d wood materials, so keep them
	//in the material manager.
	function InitPrism3DWoodTextures() {
	    var permutation = [
	    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
	    140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148,
	    247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32,
	    57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,
	    74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122,
	    60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54,
	    65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169,
	    200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64,
	    52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212,
	    207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213,
	    119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
	    129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104,
	    218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
	    81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
	    184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
	    222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];

	    var permutationBuffer = new Uint8Array(permutation);
	    var permutationTex = new THREE.DataTexture(permutationBuffer, 256, 1,
	    THREE.LuminanceFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.RepeatWrapping, THREE.RepeatWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);
	    permutationTex.generateMipmaps = false;
	    permutationTex.flipY = false;
	    permutationTex.needsUpdate = true;
	    //This is different with OGS desktop. OGS uses a float texture. I map these number to
	    //unsight byte, since some platform may not support float texture. Test result shows that
	    //the pixel diffrence is very small.
	    var gradientData = [
	    225, 39, 122, 231, 29, 173, 15, 159, 75, 88, 233, 19, 179, 79, 72, 94,
	    54, 73, 151, 161, 171, 113, 221, 144, 127, 83, 168, 19, 88, 122, 62, 225,
	    109, 128, 246, 247, 172, 101, 61, 139, 211, 168, 64, 210, 224, 82, 87, 97,
	    119, 250, 201, 44, 242, 239, 154, 99, 126, 13, 44, 70, 246, 170, 100, 52,
	    135, 28, 187, 22, 207, 119, 199, 1, 235, 187, 55, 131, 190, 124, 222, 249,
	    236, 53, 225, 231, 71, 30, 173, 185, 153, 47, 79, 133, 225, 10, 140, 62,
	    17, 99, 100, 29, 137, 95, 142, 244, 76, 5, 83, 124, 38, 216, 253, 195,
	    44, 210, 148, 185, 188, 39, 78, 195, 132, 30, 60, 73, 92, 223, 133, 80,
	    230, 56, 118, 207, 79, 15, 251, 211, 111, 21, 79, 23, 240, 146, 150, 207,
	    3, 61, 103, 27, 148, 6, 31, 127, 235, 58, 173, 244, 116, 81, 34, 120,
	    192, 213, 188, 226, 97, 23, 16, 161, 106, 80, 242, 148, 35, 37, 91, 117,
	    51, 216, 97, 193, 126, 222, 39, 38, 133, 217, 215, 23, 237, 57, 205, 42,
	    222, 165, 126, 133, 33, 8, 227, 154, 27, 18, 56, 11, 192, 120, 80, 92,
	    236, 38, 210, 207, 128, 31, 135, 39, 123, 5, 49, 127, 107, 200, 34, 14,
	    153, 239, 134, 19, 248, 162, 58, 201, 159, 198, 243, 158, 72, 5, 138, 184,
	    222, 200, 34, 141, 233, 40, 195, 238, 191, 122, 171, 32, 66, 254, 229, 197];

	    var gradientBuffer = new Uint8Array(gradientData);
	    var gradientTex = new THREE.DataTexture(gradientBuffer, 256, 1,
	    THREE.LuminanceFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.RepeatWrapping, THREE.RepeatWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);

	    gradientTex.generateMipmaps = false;
	    gradientTex.flipY = false;
	    gradientTex.needsUpdate = true;

	    var perm = function perm(x) {
	        return permutation[x % 256];
	    };

	    var perm2D = new Array(256 * 256 * 4);
	    var A, AA, AB, B, BA, BB, index, x;
	    for (var y = 0; y < 256; ++y) {
	        for (x = 0; x < 256; ++x) {
	            A = perm(x) + y;
	            AA = perm(A);
	            AB = perm(A + 1);
	            B = perm(x + 1) + y;
	            BA = perm(B);
	            BB = perm(B + 1);

	            // Store (AA, AB, BA, BB) in pixel (x,y)
	            index = 4 * (y * 256 + x);
	            perm2D[index] = AA;
	            perm2D[index + 1] = AB;
	            perm2D[index + 2] = BA;
	            perm2D[index + 3] = BB;
	        }}
	    var perm2DBuffer = new Uint8Array(perm2D);
	    var perm2DTex = new THREE.DataTexture(perm2DBuffer, 256, 256,
	    THREE.RGBAFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.RepeatWrapping, THREE.RepeatWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);
	    perm2DTex.generateMipmaps = false;
	    perm2DTex.flipY = false;
	    perm2DTex.needsUpdate = true;

	    var gradients3D = [
	    1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0,
	    1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1,
	    0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
	    1, 1, 0, 0, -1, 1, -1, 1, 0, 0, -1, -1];

	    var permGrad = new Array(1024);
	    for (x = 0; x < 256; ++x) {
	        var i = permutation[x] % 16;
	        // Convert the gradient to signed-normalized int.
	        permGrad[x * 4] = gradients3D[i * 3] * 127 + 128;
	        permGrad[x * 4 + 1] = gradients3D[i * 3 + 1] * 127 + 128;
	        permGrad[x * 4 + 2] = gradients3D[i * 3 + 2] * 127 + 128;
	        permGrad[x * 4 + 3] = 0;
	    }
	    var permGradBuffer = new Uint8Array(permGrad);
	    var permGradTex = new THREE.DataTexture(permGradBuffer, 256, 1,
	    THREE.RGBAFormat,
	    THREE.UnsignedByteType,
	    THREE.UVMapping,
	    THREE.RepeatWrapping, THREE.RepeatWrapping,
	    THREE.NearestFilter, THREE.NearestFilter, 0);
	    permGradTex.generateMipmaps = false;
	    permGradTex.flipY = false;
	    permGradTex.needsUpdate = true;

	    PrismWoodTexture = {
	        permutation: permutationTex,
	        gradient: gradientTex,
	        perm2D: perm2DTex,
	        permGrad: permGradTex };

	}

	function parseWoodMap(tm, props, name) {
	    tm[name + "_enable"] = parseMaterialGeneric(props, "booleans", name + "_enable", 0);
	    var prof = parseWoodProfile(props, "scalars", name + "_prof");
	    tm[name + "_bands"] = prof.bands;
	    tm[name + "_weights"] = prof.weights;
	    tm[name + "_frequencies"] = prof.frequencies;
	}



	function convertMaterial(matObj, isPrism) {

	    var innerMats = matObj["materials"];
	    var innerMat = innerMats[matObj["userassets"][0]];
	    var props = innerMat["properties"];

	    var tm = isPrism ? prism.createPrismMaterial() : new THREE.MeshPhongMaterial();
	    var map, texProps;
	    tm.proteinMat = matObj;
	    tm.packedNormals = true;

	    if (innerMat && isPrism) {
	        tm.tag = innerMat["tag"];
	        tm.prismType = innerMat["definition"];
	        if (tm.prismType === undefined)
	        tm.prismType = "";

	        // check for the new IsSingleSided tag from ATF. Note that we assume all objects are
	        // single-sided (tm.side == THREE.FrontSide) unless tagged otherwise.
	        if (matObj.IsSingleSided !== undefined && matObj.IsSingleSided === false)
	        tm.side = THREE.DoubleSide;
	        // else, by default, tm.side is FrontSide

	        var mapList = tm.mapList;

	        tm.transparent = false;
	        tm.envExponentMin = 1.0;
	        tm.envExponentMax = 512.0;
	        tm.envExponentCount = 10.0;

	        // among other things, set up mapList and note what map, if any, is attached to each property such as "surface_albedo".
	        tm.surface_albedo = SRGBToLinear(parseMaterialColor(props, "surface_albedo", new THREE.Color(1, 0, 0)));
	        mapList.surface_albedo_map = parseMaterialGenericConnection(props, "colors", "surface_albedo", null);

	        tm.surface_anisotropy = parseMaterialGeneric(props, "scalars", "surface_anisotropy", 0);
	        mapList.surface_anisotropy_map = parseMaterialGenericConnection(props, "scalars", "surface_anisotropy", null);

	        tm.surface_rotation = parseMaterialGeneric(props, "scalars", "surface_rotation", 0);
	        mapList.surface_rotation_map = parseMaterialGenericConnection(props, "scalars", "surface_rotation", null);

	        tm.surface_roughness = parseMaterialGeneric(props, "scalars", "surface_roughness", 0);
	        mapList.surface_roughness_map = parseMaterialGenericConnection(props, "scalars", "surface_roughness", null);

	        mapList.surface_cutout_map = parseMaterialGenericConnection(props, "textures", "surface_cutout", null);
	        mapList.surface_normal_map = parseMaterialGenericConnection(props, "textures", "surface_normal", null);

	        switch (tm.prismType) {
	            case 'PrismOpaque':
	                tm.opaque_albedo = SRGBToLinear(parseMaterialColor(props, "opaque_albedo", new THREE.Color(1, 0, 0)));
	                mapList.opaque_albedo_map = parseMaterialGenericConnection(props, "colors", "opaque_albedo", null);

	                tm.opaque_luminance_modifier = SRGBToLinear(parseMaterialColor(props, "opaque_luminance_modifier", new THREE.Color(0, 0, 0)));
	                mapList.opaque_luminance_modifier_map = parseMaterialGenericConnection(props, "colors", "opaque_luminance_modifier", null);

	                tm.opaque_f0 = parseMaterialGeneric(props, "scalars", "opaque_f0", 0);
	                mapList.opaque_f0_map = parseMaterialGenericConnection(props, "scalars", "opaque_f0", null);

	                tm.opaque_luminance = parseMaterialGeneric(props, "scalars", "opaque_luminance", 0);

	                break;
	            case 'PrismMetal':
	                tm.metal_f0 = SRGBToLinear(parseMaterialColor(props, "metal_f0", new THREE.Color(1, 0, 0)));
	                mapList.metal_f0_map = parseMaterialGenericConnection(props, "colors", "metal_f0", null);

	                break;
	            case 'PrismLayered':
	                tm.layered_bottom_f0 = SRGBToLinear(parseMaterialColor(props, "layered_bottom_f0", new THREE.Color(1, 1, 1)));
	                mapList.layered_bottom_f0_map = parseMaterialGenericConnection(props, "colors", "layered_bottom_f0", null);

	                tm.layered_diffuse = SRGBToLinear(parseMaterialColor(props, "layered_diffuse", new THREE.Color(1, 0, 0)));
	                mapList.layered_diffuse_map = parseMaterialGenericConnection(props, "colors", "layered_diffuse", null);

	                tm.layered_anisotropy = parseMaterialGeneric(props, "scalars", "layered_anisotropy", 0);
	                mapList.layered_anisotropy_map = parseMaterialGenericConnection(props, "scalars", "layered_anisotropy", null);

	                tm.layered_f0 = parseMaterialGeneric(props, "scalars", "layered_f0", 0);
	                mapList.layered_f0_map = parseMaterialGenericConnection(props, "scalars", "layered_f0", null);

	                tm.layered_fraction = parseMaterialGeneric(props, "scalars", "layered_fraction", 0);
	                mapList.layered_fraction_map = parseMaterialGenericConnection(props, "scalars", "layered_fraction", null);

	                tm.layered_rotation = parseMaterialGeneric(props, "scalars", "layered_rotation", 0);
	                mapList.layered_rotation_map = parseMaterialGenericConnection(props, "scalars", "layered_rotation", null);

	                tm.layered_roughness = parseMaterialGeneric(props, "scalars", "layered_roughness", 0);
	                mapList.layered_roughness_map = parseMaterialGenericConnection(props, "scalars", "layered_roughness", null);

	                mapList.layered_normal_map = parseMaterialGenericConnection(props, "textures", "layered_normal", null);

	                break;
	            case 'PrismTransparent':
	                tm.transparent_color = SRGBToLinear(parseMaterialColor(props, "transparent_color", new THREE.Color(1, 0, 0)));

	                tm.transparent_distance = parseMaterialGeneric(props, "scalars", "transparent_distance", 0);

	                tm.transparent_ior = parseMaterialGeneric(props, "scalars", "transparent_ior", 0);

	                tm.transparent = true;

	                break;

	            case 'PrismWood':
	                parseWoodMap(tm, props, "wood_fiber_cosine");

	                parseWoodMap(tm, props, "wood_fiber_perlin");
	                tm.wood_fiber_perlin_scale_z = parseMaterialGeneric(props, "scalars", "wood_fiber_perlin_scale_z", 0);

	                parseWoodMap(tm, props, "wood_growth_perlin");

	                tm.wood_latewood_ratio = parseMaterialGeneric(props, "scalars", "wood_latewood_ratio", 0);
	                tm.wood_earlywood_sharpness = parseMaterialGeneric(props, "scalars", "wood_earlywood_sharpness", 0);
	                tm.wood_latewood_sharpness = parseMaterialGeneric(props, "scalars", "wood_latewood_sharpness", 0);
	                tm.wood_ring_thickness = parseMaterialGeneric(props, "scalars", "wood_ring_thickness", 0);

	                parseWoodMap(tm, props, "wood_earlycolor_perlin");
	                tm.wood_early_color = SRGBToLinear(parseMaterialColor(props, "wood_early_color", new THREE.Color(1, 0, 0)));

	                tm.wood_use_manual_late_color = parseMaterialGeneric(props, "booleans", "wood_use_manual_late_color", 0);
	                tm.wood_manual_late_color = SRGBToLinear(parseMaterialColor(props, "wood_manual_late_color", new THREE.Color(1, 0, 0)));

	                parseWoodMap(tm, props, "wood_latecolor_perlin");
	                tm.wood_late_color_power = parseMaterialGeneric(props, "scalars", "wood_late_color_power", 0);

	                parseWoodMap(tm, props, "wood_diffuse_perlin");
	                tm.wood_diffuse_perlin_scale_z = parseMaterialGeneric(props, "scalars", "wood_diffuse_perlin_scale_z", 0);

	                tm.wood_use_pores = parseMaterialGeneric(props, "booleans", "wood_use_pores", 0);
	                tm.wood_pore_type = parseMaterialGeneric(props, "choicelists", "wood_pore_type", 0);
	                tm.wood_pore_radius = parseMaterialGeneric(props, "scalars", "wood_pore_radius", 0);
	                tm.wood_pore_cell_dim = parseMaterialGeneric(props, "scalars", "wood_pore_cell_dim", 0);
	                tm.wood_pore_color_power = parseMaterialGeneric(props, "scalars", "wood_pore_color_power", 0);
	                tm.wood_pore_depth = parseMaterialGeneric(props, "scalars", "wood_pore_depth", 0);

	                tm.wood_use_rays = parseMaterialGeneric(props, "booleans", "wood_use_rays", 0);
	                tm.wood_ray_color_power = parseMaterialGeneric(props, "scalars", "wood_ray_color_power", 0);
	                tm.wood_ray_seg_length_z = parseMaterialGeneric(props, "scalars", "wood_ray_seg_length_z", 0);
	                tm.wood_ray_num_slices = parseMaterialGeneric(props, "integers", "wood_ray_num_slices", 0);
	                tm.wood_ray_ellipse_z2x = parseMaterialGeneric(props, "scalars", "wood_ray_ellipse_z2x", 0);
	                tm.wood_ray_ellipse_radius_x = parseMaterialGeneric(props, "scalars", "wood_ray_ellipse_radius_x", 0);

	                tm.wood_use_latewood_bump = parseMaterialGeneric(props, "booleans", "wood_use_latewood_bump", 0);
	                tm.wood_latewood_bump_depth = parseMaterialGeneric(props, "scalars", "wood_latewood_bump_depth", 0);

	                tm.wood_use_groove_roughness = parseMaterialGeneric(props, "booleans", "wood_use_groove_roughness", 0);
	                tm.wood_groove_roughness = parseMaterialGeneric(props, "scalars", "wood_groove_roughness", 0);
	                tm.wood_diffuse_lobe_weight = parseMaterialGeneric(props, "scalars", "wood_diffuse_lobe_weight", 0);

	                tm.wood_curly_distortion_enable = parseMaterialGeneric(props, "booleans", "wood_curly_distortion_enable", 0);
	                tm.wood_curly_distortion_scale = parseMaterialGeneric(props, "scalars", "wood_curly_distortion_scale", 0);
	                mapList.wood_curly_distortion_map = parseMaterialGenericConnection(props, "scalars", "wood_curly_distortion_map", null);

	                tm.transparent = false;

	                //Create the wood noise textures. They are used for all wood materials.
	                if (!PrismWoodTexture)
	                InitPrism3DWoodTextures();

	                tm.uniforms.permutationMap.value = PrismWoodTexture['permutation'];
	                tm.uniforms.gradientMap.value = PrismWoodTexture['gradient'];
	                tm.uniforms.perm2DMap.value = PrismWoodTexture['perm2D'];
	                tm.uniforms.permGradMap.value = PrismWoodTexture['permGrad'];

	                break;

	            default:
	                THREE.warn('Unknown prism type: ' + tm.prismType);}


	        if (tm.enableImportantSampling && (tm.surface_anisotropy || tm.surface_rotation || tm.layered_anisotropy || tm.layered_rotation)) {
	            if (!PrismImportantSamplingTexture)
	            InitPrismImportantSamplingTextures();
	            tm.uniforms.importantSamplingRandomMap.value = PrismImportantSamplingTexture.randomNum;
	            tm.uniforms.importantSamplingSolidAngleMap.value = PrismImportantSamplingTexture.solidAngle;
	        }

	        // now that the mapList is set up, populate it
	        tm.defines = {};
	        tm.textureMaps = {};
	        for (var p in mapList) {
	            // does the map exist? If not, continue on.
	            if (!mapList[p])
	            continue;

	            // the map exists for this property, so set the various values.
	            var textureObj = innerMats[mapList[p]];
	            texProps = textureObj["properties"];

	            var uriType = textureObj["definition"] == "BumpMap" ?
	            "bumpmap_Bitmap" :
	            "unifiedbitmap_Bitmap";

	            var uri = texProps["uris"][uriType]["values"][0];
	            if (!uri)
	            continue;

	            map = {
	                mapName: p,
	                uri: uri,
	                textureObj: textureObj,
	                isPrism: true };

	            tm.textureMaps[map.mapName] = map;

	            // This array gives the various #defines that are associated with this instance of
	            // the PRISM material.
	            tm.defines["USE_" + p.toUpperCase()] = "";
	        }

	        tm.defines[tm.prismType.toUpperCase()] = "";
	        if (tm.prismType == 'PrismWood' && tm.enable3DWoodBump)
	        tm.defines['PRISMWOODBUMP'] = "";
	        if (tm.enableImportantSampling)
	        tm.defines['ENABLEIMPORTANTSAMPLING'] = "";

	        return tm;
	    } else
	    if (innerMat && !isPrism && innerMat["definition"] == "SimplePhong") {

	        tm.tag = innerMat["tag"];
	        tm.proteinType = innerMat["proteinType"];
	        if (tm.proteinType === undefined)
	        tm.proteinType = null;

	        var a = tm.ambient = parseMaterialColor(props, "generic_ambient");
	        var d = tm.color = parseMaterialColor(props, "generic_diffuse");
	        var s = tm.specular = parseMaterialColor(props, "generic_specular");
	        var e = tm.emissive = parseMaterialColor(props, "generic_emissive");

	        //If the material is completely black, use a default material.
	        if (d.r === 0 && d.g === 0 && d.b === 0 &&
	        s.r === 0 && s.g === 0 && s.b === 0 &&
	        a.r === 0 && a.g === 0 && a.b === 0 &&
	        e.r === 0 && e.g === 0 && e.b === 0)
	        d.r = d.g = d.b = 0.4;

	        tm.shininess = parseMaterialScalar(props, "generic_glossiness", 30);
	        tm.opacity = 1.0 - parseMaterialScalar(props, "generic_transparency", 0);
	        tm.reflectivity = parseMaterialScalar(props, "generic_reflectivity_at_0deg", 0);

	        var isNormal = parseMaterialBoolean(props, "generic_bump_is_normal");
	        var scale = parseMaterialScalar(props, "generic_bump_amount", 0);

	        // If cannot read the scale, set the scale to 1 which is the default value for prism and protein.
	        if (scale == null)
	        scale = 1;

	        if (isNormal) {
	            if (scale > 1)
	            scale = 1;
	            tm.normalScale = new THREE.Vector2(scale, scale);
	        } else
	        {
	            if (scale >= 1.0)
	            scale = 0.03;
	            tm.bumpScale = scale;
	        }

	        var isMetal = parseMaterialBoolean(props, "generic_is_metal");
	        if (isMetal !== undefined)
	        tm.metal = isMetal;

	        var backfaceCulling = parseMaterialBoolean(props, "generic_backface_cull");
	        if (backfaceCulling !== undefined && !backfaceCulling)
	        tm.side = THREE.DoubleSide;

	        tm.transparent = innerMat["transparent"];

	        tm.textureMaps = {};
	        var textures = innerMat["textures"];
	        for (var texType in textures) {

	            map = {};

	            map.textureObj = innerMats[textures[texType]["connections"][0]];
	            texProps = map.textureObj["properties"];

	            // Grab URI
	            map.uri = texProps["uris"]["unifiedbitmap_Bitmap"]["values"][0];
	            if (!map.uri)
	            continue;

	            // Figure out map name

	            if (texType == "generic_diffuse") {
	                map.mapName = "map";

	                if (!tm.color || tm.color.r === 0 && tm.color.g === 0 && tm.color.b === 0)
	                tm.color.setRGB(1, 1, 1);
	            } else
	            if (texType == "generic_bump") {
	                if (isNormal)
	                map.mapName = "normalMap";else

	                map.mapName = "bumpMap";
	            } else
	            if (texType == "generic_specular") {
	                map.mapName = "specularMap";
	            } else
	            if (texType == "generic_alpha") {
	                map.mapName = "alphaMap";
	                tm.transparent = true;
	            }
	            // Environment maps from SVF turned off since we have better defaults
	            // else if (texType == "generic_reflection") {
	            //     mapName = "envMap";
	            // }
	            else {
	                    // no map name recognized, skip
	                    continue;
	                }

	            tm.textureMaps[map.mapName] = map;
	        }

	        // Apply extra polygon offset to material if applicable
	        // larger value means further away
	        tm.extraDepthOffset = parseMaterialScalar(props, "generic_depth_offset");
	        if (tm.extraDepthOffset) {
	            // these values are overridden after the initial render by MaterialManager.prototype.togglePolygonOffset()
	            tm.polygonOffset = true;
	            tm.polygonOffsetFactor = tm.extraDepthOffset;
	            tm.polygonOffsetUnits = 0;
	        }

	    } else
	    {
	        // unknown material, use default colors
	        tm.ambient = 0x030303;
	        tm.color = 0x777777;
	        tm.specular = 0x333333;
	        tm.shininess = 30;
	        tm.shading = THREE.SmoothShading;
	    }

	    return tm;
	}



	function convertPrismTexture(textureObj, texture, sceneUnit) {

	    var texProps = textureObj["properties"];

	    // Note that the format of these booleans is different for Protein than for regular materials:
	    // Prism: "texture_URepeat": { "values": [ false ] },
	    // simple texture: "texture_URepeat":    false,
	    texture.clampS = !parseMaterialGeneric(texProps, "booleans", "texture_URepeat", false);
	    texture.clampT = !parseMaterialGeneric(texProps, "booleans", "texture_VRepeat", false);
	    texture.wrapS = !texture.clampS ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
	    texture.wrapT = !texture.clampT ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

	    texture.matrix = Get2DMapTransform(texProps, sceneUnit);

	    if (textureObj["definition"] == "UnifiedBitmap") {
	        texture.invert = parseMaterialGeneric(texProps, "booleans", "unifiedbitmap_Invert", false);
	    }

	    if (textureObj["definition"] == "BumpMap") {
	        texture.bumpmapType = parseMaterialGeneric(texProps, "choicelists", "bumpmap_Type", 0);
	        texture.bumpScale = GetBumpScale(texProps, texture.bumpmapType, sceneUnit);
	    }

	}

	function convertSimpleTexture(textureObj, texture) {

	    if (!textureObj)
	    return;

	    var texProps = textureObj["properties"];

	    // Note that the format of these booleans is different for Protein than for regular materials:
	    // Prism: "texture_URepeat": { "values": [ false ] },
	    // simple texture: "texture_URepeat":    false,
	    texture.invert = parseMaterialBoolean(texProps, "unifiedbitmap_Invert");
	    texture.clampS = !parseMaterialBoolean(texProps, "texture_URepeat", true); // defaults to wrap
	    texture.clampT = !parseMaterialBoolean(texProps, "texture_VRepeat", true);
	    texture.wrapS = !texture.clampS ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
	    texture.wrapT = !texture.clampT ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

	    var uscale = parseMaterialScalar(texProps, "texture_UScale", 1);
	    var vscale = parseMaterialScalar(texProps, "texture_VScale", 1);
	    var uoffset = parseMaterialScalar(texProps, "texture_UOffset", 0);
	    var voffset = parseMaterialScalar(texProps, "texture_VOffset", 0);
	    var wangle = parseMaterialScalar(texProps, "texture_WAngle", 0);

	    texture.matrix = { elements: [
	        Math.cos(wangle) * uscale, Math.sin(wangle) * vscale, 0,
	        -Math.sin(wangle) * uscale, Math.cos(wangle) * vscale, 0,
	        uoffset, voffset, 1] };

	}

	function convertTexture(textureObj, texture, sceneUnit, isPrism) {
	    if (isPrism)
	    convertPrismTexture(textureObj, texture, sceneUnit);else

	    convertSimpleTexture(textureObj, texture);
	}


	function isPrismMaterial(material) {
	    var innerMats = material['materials'];
	    var innerMat = innerMats[material['userassets'][0]];
	    if (innerMat) {
	        var definition = innerMat['definition'];
	        return definition == 'PrismLayered' ||
	        definition == 'PrismMetal' ||
	        definition == 'PrismOpaque' ||
	        definition == 'PrismTransparent' ||
	        definition == 'PrismWood';
	    }
	    return false;
	}


	function convertMaterialGltf(matObj, svf) {

	    var tm = new THREE.MeshPhongMaterial();
	    tm.packedNormals = true;
	    tm.textureMaps = {};

	    var values = matObj.values;

	    var diffuse = values.diffuse;
	    if (diffuse) {
	        if (Array.isArray(diffuse)) {
	            tm.color = new THREE.Color(diffuse[0], diffuse[1], diffuse[2]);
	        } else if (typeof diffuse === "string") {
	            //texture
	            tm.color = new THREE.Color(1, 1, 1);
	            var map = {};
	            map.mapName = "map";

	            var texture = svf.gltf.textures[diffuse];

	            //Use the ID of the texture, because in MaterialManager.loadTexture, the ID
	            //is mapped to the path from the asset list. The logic matches what is done
	            //with SVF materials.
	            map.uri = texture.source; //svf.manifest.assetMap[texture.source].URI;
	            map.flipY = false; //For GLTF, texture flip is OpenGL style by default, unlike Protein/Prism which is DX

	            tm.textureMaps[map.mapName] = map;
	        }
	    }

	    var specular = values.specular;
	    if (specular) {
	        tm.specular = new THREE.Color(specular[0], specular[1], specular[2]);
	    }

	    if (values.shininess)
	    tm.shininess = values.shininess;

	    tm.reflectivity = 0;

	    //TODO: Where to get this for glTF materials?
	    tm.transparent = false;

	    return tm;

	}

	module.exports = {
	    convertMaterial: convertMaterial,
	    convertTexture: convertTexture,
	    isPrismMaterial: isPrismMaterial,
	    convertMaterialGltf: convertMaterialGltf };

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	//var THREE = require('THREE');
	var chunks = __webpack_require__(5);
	var utils = __webpack_require__(60);

	// This method sets up various uniforms for a given map, putting them
	// in an array called "uniforms" which are accessed by the name, such
	// as "uniforms[surface_albedo_map_texMatrix]".
	function GetPrismMapUniforms(mapName) {
	    var mtxName = mapName + "_texMatrix";
	    var mapInvt = mapName + "_invert";

	    var uniforms = {};
	    uniforms[mapName] = { type: "t", value: null };
	    uniforms[mtxName] = { type: "m3", value: new THREE.Matrix3() };
	    uniforms[mapInvt] = { type: "i", value: 0 };

	    return uniforms;
	}

	function GetPrismBumpMapUniforms(mapName) {
	    var mtxName = mapName + "_texMatrix";
	    var mapScale = mapName + "_bumpScale";
	    var mapType = mapName + "_bumpmapType";

	    var uniforms = {};
	    uniforms[mapName] = { type: "t", value: null };
	    uniforms[mtxName] = { type: "m3", value: new THREE.Matrix3() };
	    uniforms[mapScale] = { type: "v2", value: new THREE.Vector2(1, 1) };
	    uniforms[mapType] = { type: "i", value: 0 };

	    return uniforms;
	}

	var PrismShader = {

	    uniforms: THREE.UniformsUtils.merge([

	    THREE.UniformsLib["common"],
	    THREE.UniformsLib["lights"],
	    THREE.UniformsLib["fog"],
	    chunks.CutPlanesUniforms,
	    chunks.IdUniforms,
	    chunks.ThemingUniform,
	    chunks.ShadowMapUniforms,

	    GetPrismMapUniforms("surface_albedo_map"),
	    GetPrismMapUniforms("surface_roughness_map"),
	    GetPrismMapUniforms("surface_cutout_map"),
	    GetPrismMapUniforms("surface_anisotropy_map"),
	    GetPrismMapUniforms("surface_rotation_map"),
	    GetPrismMapUniforms("opaque_albedo_map"),
	    GetPrismMapUniforms("opaque_f0_map"),
	    GetPrismMapUniforms("opaque_luminance_modifier_map"),
	    GetPrismMapUniforms("layered_bottom_f0_map"),
	    GetPrismMapUniforms("layered_f0_map"),
	    GetPrismMapUniforms("layered_diffuse_map"),
	    GetPrismMapUniforms("layered_fraction_map"),
	    GetPrismMapUniforms("layered_roughness_map"),
	    GetPrismMapUniforms("layered_anisotropy_map"),
	    GetPrismMapUniforms("layered_rotation_map"),
	    GetPrismMapUniforms("metal_f0_map"),
	    GetPrismMapUniforms("wood_curly_distortion_map"),

	    GetPrismBumpMapUniforms("surface_normal_map"),
	    GetPrismBumpMapUniforms("layered_normal_map"),

	    {
	        //Surface
	        "surface_albedo": { type: "c", value: new THREE.Color(0x111111) },
	        "surface_roughness": { type: "f", value: 1.0 },
	        "surface_anisotropy": { type: "f", value: 1.0 },
	        "surface_rotation": { type: "f", value: 1.0 },

	        //Opaque
	        "opaque_albedo": { type: "c", value: new THREE.Color(0x111111) },
	        "opaque_f0": { type: "f", value: 1.0 },
	        "opaque_luminance_modifier": { type: "c", value: new THREE.Color(0x111111) },
	        "opaque_luminance": { type: "f", value: 1.0 },

	        //Metal
	        "metal_f0": { type: "c", value: new THREE.Color(0x111111) },

	        //Layered
	        "layered_f0": { type: "f", value: 1.0 },
	        "layered_diffuse": { type: "c", value: new THREE.Color(0x000000) },
	        "layered_fraction": { type: "f", value: 1.0 },
	        "layered_bottom_f0": { type: "c", value: new THREE.Color(0x111111) },
	        "layered_roughness": { type: "f", value: 1.0 },
	        "layered_anisotropy": { type: "f", value: 1.0 },
	        "layered_rotation": { type: "f", value: 1.0 },

	        //Transparent
	        "transparent_ior": { type: "f", value: 2.0 },
	        "transparent_color": { type: "c", value: new THREE.Color(0x111111) },
	        "transparent_distance": { type: "f", value: 1.0 },

	        //Wood
	        "wood_fiber_cosine_enable": { type: "i", value: 1 },
	        "wood_fiber_cosine_bands": { type: "i", value: 2 },
	        "wood_fiber_cosine_weights": { type: "v4", value: new THREE.Vector4(2.5, 0.5, 1, 1) },
	        "wood_fiber_cosine_frequencies": { type: "v4", value: new THREE.Vector4(15, 4, 1, 1) },

	        "wood_fiber_perlin_enable": { type: "i", value: 1 },
	        "wood_fiber_perlin_bands": { type: "i", value: 3 },
	        "wood_fiber_perlin_weights": { type: "v4", value: new THREE.Vector4(3.0, 1.0, 0.2, 1) },
	        "wood_fiber_perlin_frequencies": { type: "v4", value: new THREE.Vector4(40, 20, 3.5, 1) },
	        "wood_fiber_perlin_scale_z": { type: "f", value: 0.3 },

	        "wood_growth_perlin_enable": { type: "i", value: 1 },
	        "wood_growth_perlin_bands": { type: "i", value: 3 },
	        "wood_growth_perlin_weights": { type: "v4", value: new THREE.Vector4(1.0, 2, 1, 1) },
	        "wood_growth_perlin_frequencies": { type: "v4", value: new THREE.Vector4(1, 5, 13, 1) },

	        "wood_latewood_ratio": { type: "f", value: 0.238 },
	        "wood_earlywood_sharpness": { type: "f", value: 0.395 },
	        "wood_latewood_sharpness": { type: "f", value: 0.109 },
	        "wood_ring_thickness": { type: "f", value: 0.75 },

	        "wood_earlycolor_perlin_enable": { type: "i", value: 1 },
	        "wood_earlycolor_perlin_bands": { type: "i", value: 2 },
	        "wood_earlycolor_perlin_weights": { type: "v4", value: new THREE.Vector4(0.3, 0.5, 0.15, 1) },
	        "wood_earlycolor_perlin_frequencies": { type: "v4", value: new THREE.Vector4(8, 3, 0.35, 1) },
	        "wood_early_color": { type: "c", value: new THREE.Color(0.286, 0.157, 0.076) },

	        "wood_use_manual_late_color": { type: "i", value: 0 },
	        "wood_manual_late_color": { type: "c", value: new THREE.Color(0.62, 0.35, 0.127) },

	        "wood_latecolor_perlin_enable": { type: "i", value: 1 },
	        "wood_latecolor_perlin_bands": { type: "i", value: 1 },
	        "wood_latecolor_perlin_weights": { type: "v4", value: new THREE.Vector4(0.75, 0.55, 1, 1) },
	        "wood_latecolor_perlin_frequencies": { type: "v4", value: new THREE.Vector4(4.5, 0.05, 1, 1) },
	        "wood_late_color_power": { type: "f", value: 1.25 },

	        "wood_diffuse_perlin_enable": { type: "i", value: 1 },
	        "wood_diffuse_perlin_bands": { type: "i", value: 3 },
	        "wood_diffuse_perlin_weights": { type: "v4", value: new THREE.Vector4(0.15, 0.2, 0.05, 1) },
	        "wood_diffuse_perlin_frequencies": { type: "v4", value: new THREE.Vector4(0.05, 0.1, 3, 1) },
	        "wood_diffuse_perlin_scale_z": { type: "f", value: 0.2 },

	        "wood_use_pores": { type: "i", value: 1 },
	        "wood_pore_type": { type: "i", value: 0 },
	        "wood_pore_radius": { type: "f", value: 0.04 },
	        "wood_pore_cell_dim": { type: "f", value: 0.15 },
	        "wood_pore_color_power": { type: "f", value: 1.45 },
	        "wood_pore_depth": { type: "f", value: 0.02 },

	        "wood_use_rays": { type: "i", value: 1 },
	        "wood_ray_color_power": { type: "f", value: 1.1 },
	        "wood_ray_seg_length_z": { type: "f", value: 5.0 },
	        "wood_ray_num_slices": { type: "f", value: 160 },
	        "wood_ray_ellipse_z2x": { type: "f", value: 10 },
	        "wood_ray_ellipse_radius_x": { type: "f", value: 0.2 },

	        "wood_use_latewood_bump": { type: "i", value: 1 },
	        "wood_latewood_bump_depth": { type: "f", value: 0.01 },

	        "wood_use_groove_roughness": { type: "i", value: 1 },
	        "wood_groove_roughness": { type: "f", value: 0.85 },
	        "wood_diffuse_lobe_weight": { type: "f", value: 0.9 },

	        "wood_curly_distortion_enable": { type: "i", value: 0 },
	        "wood_curly_distortion_scale": { type: "f", value: 0.25 },

	        "wood_ring_fraction": { type: "v4", value: new THREE.Vector4(0.0, 0.0, 0.0, 0.0) },
	        "wood_fall_rise": { type: "v2", value: new THREE.Vector2(0.0, 0.0) },

	        "permutationMap": { type: "t", value: null },
	        "gradientMap": { type: "t", value: null },
	        "perm2DMap": { type: "t", value: null },
	        "permGradMap": { type: "t", value: null },

	        "importantSamplingRandomMap": { type: "t", value: null },
	        "importantSamplingSolidAngleMap": { type: "t", value: null },

	        "irradianceMap": { type: "t", value: null },
	        "envMap": { type: "t", value: null },
	        "exposureBias": { type: "f", value: 1.0 },
	        "envMapExposure": { type: "f", value: 1.0 },
	        "envRotationSin": { type: "f", value: 0.0 },
	        "envRotationCos": { type: "f", value: 1.0 },

	        "envExponentMin": { type: "f", value: 1.0 },
	        "envExponentMax": { type: "f", value: 512.0 },
	        "envExponentCount": { type: "f", value: 10.0 } }]),





	    vertexShader: __webpack_require__(84),
	    fragmentShader: __webpack_require__(85) };



	THREE.ShaderLib['prism'] = PrismShader;

	var createPrismMaterial = function createPrismMaterial() {
	    var prismMat = utils.createShaderMaterial(PrismShader);
	    prismMat.defaultAttributeValues['uvw'] = [0, 0, 0];
	    prismMat.enable3DWoodBump = false;
	    prismMat.enableImportantSampling = false;
	    prismMat.mapList = {};
	    prismMat.isPrismMaterial = true;

	    return prismMat;
	};

	var clonePrismMaterial = function clonePrismMaterial(mat) {

	    var prismMat = createPrismMaterial();

	    // this is a dumb way to do what THREE.Material.prototype.clone.call( this, prismMat );
	    // would do to create a clone and copy the basic properties. What's the non-stupid way?
	    // And why does this material not have its own prototype.clone method?

	    prismMat.name = mat.name;

	    prismMat.side = mat.side;

	    prismMat.opacity = mat.opacity;
	    prismMat.transparent = mat.transparent;

	    prismMat.blending = mat.blending;

	    prismMat.blendSrc = mat.blendSrc;
	    prismMat.blendDst = mat.blendDst;
	    prismMat.blendEquation = mat.blendEquation;
	    prismMat.blendSrcAlpha = mat.blendSrcAlpha;
	    prismMat.blendDstAlpha = mat.blendDstAlpha;
	    prismMat.blendEquationAlpha = mat.blendEquationAlpha;

	    prismMat.depthTest = mat.depthTest;
	    prismMat.depthWrite = mat.depthWrite;

	    prismMat.polygonOffset = mat.polygonOffset;
	    prismMat.polygonOffsetFactor = mat.polygonOffsetFactor;
	    prismMat.polygonOffsetUnits = mat.polygonOffsetUnits;

	    prismMat.alphaTest = mat.alphaTest;

	    prismMat.overdraw = mat.overdraw;

	    prismMat.visible = mat.visible;

	    // end of the basics shared by all shaders


	    prismMat.mapList = mat.mapList;

	    prismMat.prismType = mat.prismType;

	    //Prism common properties.
	    prismMat.surface_albedo = mat.surface_albedo;
	    if (mat.surface_albedo_map !== undefined)
	    prismMat.surface_albedo_map = mat.surface_albedo_map;
	    prismMat.surface_roughness = mat.surface_roughness;
	    if (mat.surface_roughness_map !== undefined)
	    prismMat.surface_roughness_map = mat.surface_roughness_map;
	    prismMat.surface_anisotropy = mat.surface_anisotropy;
	    if (mat.surface_anisotropy_map !== undefined)
	    prismMat.surface_anisotropy_map = mat.surface_anisotropy_map;
	    prismMat.surface_rotation = mat.surface_rotation;
	    if (mat.surface_rotation_map !== undefined)
	    prismMat.surface_rotation_map = mat.surface_rotation_map;
	    if (mat.surface_cutout_map !== undefined)
	    prismMat.surface_cutout_map = mat.surface_cutout_map;
	    if (mat.surface_normal_map !== undefined)
	    prismMat.surface_normal_map = mat.surface_normal_map;

	    prismMat.uniforms.importantSamplingRandomMap.value = mat.uniforms.importantSamplingRandomMap.value;
	    prismMat.uniforms.importantSamplingSolidAngleMap.value = mat.uniforms.importantSamplingSolidAngleMap.value;

	    //Set Prism properties according to the material type.
	    switch (prismMat.prismType) {
	        case 'PrismOpaque':
	            prismMat.opaque_albedo = new THREE.Color().copy(mat.opaque_albedo);
	            prismMat.opaque_luminance_modifier = new THREE.Color().copy(mat.opaque_luminance_modifier);
	            prismMat.opaque_f0 = mat.opaque_f0;
	            prismMat.opaque_luminance = mat.opaque_luminance;

	            if (mat.opaque_albedo_map !== undefined)
	            prismMat.opaque_albedo_map = mat.opaque_albedo_map;
	            if (mat.opaque_luminance_modifier_map !== undefined)
	            prismMat.opaque_luminance_modifier_map = mat.opaque_luminance_modifier_map;
	            if (mat.opaque_f0_map !== undefined)
	            prismMat.opaque_f0_map = mat.opaque_f0_map;

	            break;

	        case 'PrismMetal':
	            prismMat.metal_f0 = new THREE.Color().copy(mat.metal_f0);
	            if (mat.metal_f0_map !== undefined)
	            prismMat.metal_f0_map = mat.metal_f0_map;

	            break;

	        case 'PrismLayered':
	            prismMat.layered_f0 = mat.layered_f0;
	            prismMat.layered_diffuse = new THREE.Color().copy(mat.layered_diffuse);
	            prismMat.layered_fraction = mat.layered_fraction;
	            prismMat.layered_bottom_f0 = new THREE.Color().copy(mat.layered_bottom_f0);
	            prismMat.layered_roughness = mat.layered_roughness;
	            prismMat.layered_anisotropy = mat.layered_anisotropy;
	            prismMat.layered_rotation = mat.layered_rotation;

	            if (mat.layered_bottom_f0_map !== undefined)
	            prismMat.layered_bottom_f0_map = mat.layered_bottom_f0_map;
	            if (mat.layered_f0_map !== undefined)
	            prismMat.layered_f0_map = mat.layered_f0_map;
	            if (mat.layered_diffuse_map !== undefined)
	            prismMat.layered_diffuse_map = mat.layered_diffuse_map;
	            if (mat.layered_fraction_map !== undefined)
	            prismMat.layered_fraction_map = mat.layered_fraction_map;
	            if (mat.layered_rotationlayered_roughness_map !== undefined)
	            prismMat.layered_rotationlayered_roughness_map = mat.layered_rotationlayered_roughness_map;
	            if (mat.layered_anisotropy_map !== undefined)
	            prismMat.layered_anisotropy_map = mat.layered_anisotropy_map;
	            if (mat.layered_rotation_map !== undefined)
	            prismMat.layered_rotation_map = mat.layered_rotation_map;
	            if (mat.layered_normal_map !== undefined)
	            prismMat.layered_normal_map = mat.layered_normal_map;

	            break;

	        case 'PrismTransparent':
	            prismMat.transparent_color = new THREE.Color().copy(mat.transparent_color);
	            prismMat.transparent_distance = mat.transparent_distance;
	            prismMat.transparent_ior = mat.transparent_ior;

	            prismMat.transparent = mat.transparent;
	            prismMat.twoPassTransparency = mat.twoPassTransparency;
	            break;

	        case 'PrismWood':
	            prismMat.wood_fiber_cosine_enable = mat.wood_fiber_cosine_enable;
	            prismMat.wood_fiber_cosine_bands = mat.wood_fiber_cosine_bands;
	            prismMat.wood_fiber_cosine_weights = new THREE.Vector4().copy(mat.wood_fiber_cosine_weights);
	            prismMat.wood_fiber_cosine_frequencies = new THREE.Vector4().copy(mat.wood_fiber_cosine_frequencies);

	            prismMat.wood_fiber_perlin_enable = mat.wood_fiber_perlin_enable;
	            prismMat.wood_fiber_perlin_bands = mat.wood_fiber_perlin_bands;
	            prismMat.wood_fiber_perlin_weights = new THREE.Vector4().copy(mat.wood_fiber_perlin_weights);
	            prismMat.wood_fiber_perlin_frequencies = new THREE.Vector4().copy(mat.wood_fiber_perlin_frequencies);
	            prismMat.wood_fiber_perlin_scale_z = mat.wood_fiber_perlin_scale_z;

	            prismMat.wood_growth_perlin_enable = mat.wood_growth_perlin_enable;
	            prismMat.wood_growth_perlin_bands = mat.wood_growth_perlin_bands;
	            prismMat.wood_growth_perlin_weights = new THREE.Vector4().copy(mat.wood_growth_perlin_weights);
	            prismMat.wood_growth_perlin_frequencies = new THREE.Vector4().copy(mat.wood_growth_perlin_frequencies);

	            prismMat.wood_latewood_ratio = mat.wood_latewood_ratio;
	            prismMat.wood_earlywood_sharpness = mat.wood_earlywood_sharpness;
	            prismMat.wood_latewood_sharpness = mat.wood_latewood_sharpness;
	            prismMat.wood_ring_thickness = mat.wood_ring_thickness;

	            prismMat.wood_earlycolor_perlin_enable = mat.wood_earlycolor_perlin_enable;
	            prismMat.wood_earlycolor_perlin_bands = mat.wood_earlycolor_perlin_bands;
	            prismMat.wood_earlycolor_perlin_weights = new THREE.Vector4().copy(mat.wood_earlycolor_perlin_weights);
	            prismMat.wood_earlycolor_perlin_frequencies = new THREE.Vector4().copy(mat.wood_earlycolor_perlin_frequencies);
	            prismMat.wood_early_color = new THREE.Color().copy(mat.wood_early_color);

	            prismMat.wood_use_manual_late_color = mat.wood_use_manual_late_color;
	            prismMat.wood_manual_late_color = new THREE.Color().copy(mat.wood_manual_late_color);

	            prismMat.wood_latecolor_perlin_enable = mat.wood_latecolor_perlin_enable;
	            prismMat.wood_latecolor_perlin_bands = mat.wood_latecolor_perlin_bands;
	            prismMat.wood_latecolor_perlin_weights = new THREE.Vector4().copy(mat.wood_latecolor_perlin_weights);
	            prismMat.wood_latecolor_perlin_frequencies = new THREE.Vector4().copy(mat.wood_latecolor_perlin_frequencies);
	            prismMat.wood_late_color_power = mat.wood_late_color_power;

	            prismMat.wood_diffuse_perlin_enable = mat.wood_diffuse_perlin_enable;
	            prismMat.wood_diffuse_perlin_bands = mat.wood_diffuse_perlin_bands;
	            prismMat.wood_diffuse_perlin_weights = new THREE.Vector4().copy(mat.wood_diffuse_perlin_weights);
	            prismMat.wood_diffuse_perlin_frequencies = new THREE.Vector4().copy(mat.wood_diffuse_perlin_frequencies);
	            prismMat.wood_diffuse_perlin_scale_z = mat.wood_diffuse_perlin_scale_z;

	            prismMat.wood_use_pores = mat.wood_use_pores;
	            prismMat.wood_pore_type = mat.wood_pore_type;
	            prismMat.wood_pore_radius = mat.wood_pore_radius;
	            prismMat.wood_pore_cell_dim = mat.wood_pore_cell_dim;
	            prismMat.wood_pore_color_power = mat.wood_pore_color_power;
	            prismMat.wood_pore_depth = mat.wood_pore_depth;

	            prismMat.wood_use_rays = mat.wood_use_rays;
	            prismMat.wood_ray_color_power = mat.wood_ray_color_power;
	            prismMat.wood_ray_seg_length_z = mat.wood_ray_seg_length_z;
	            prismMat.wood_ray_num_slices = mat.wood_ray_num_slices;
	            prismMat.wood_ray_ellipse_z2x = mat.wood_ray_ellipse_z2x;
	            prismMat.wood_ray_ellipse_radius_x = mat.wood_ray_ellipse_radius_x;

	            prismMat.wood_use_latewood_bump = mat.wood_use_latewood_bump;
	            prismMat.wood_latewood_bump_depth = mat.wood_latewood_bump_depth;

	            prismMat.wood_use_groove_roughness = mat.wood_use_groove_roughness;
	            prismMat.wood_groove_roughness = mat.wood_groove_roughness;
	            prismMat.wood_diffuse_lobe_weight = mat.wood_diffuse_lobe_weight;

	            // share common prism DataTextures
	            // Note that these are directly stored in the uniforms (see MaterialConverter.convertMaterial)
	            prismMat.uniforms.permutationMap.value = mat.uniforms.permutationMap.value;
	            prismMat.uniforms.gradientMap.value = mat.uniforms.gradientMap.value;
	            prismMat.uniforms.perm2DMap.value = mat.uniforms.perm2DMap.value;
	            prismMat.uniforms.permGradMap.value = mat.uniforms.permGradMap.value;

	            if (mat.wood_curly_distortion_map !== undefined)
	            {
	                prismMat.wood_curly_distortion_map = mat.wood_curly_distortion_map;
	                prismMat.wood_curly_distortion_enable = mat.wood_curly_distortion_enable;
	                prismMat.wood_curly_distortion_scale = mat.wood_curly_distortion_scale;
	            }

	            prismMat.wood_ring_fraction = mat.wood_ring_fraction;
	            prismMat.wood_fall_rise = mat.wood_fall_rise;

	            break;

	        default:
	            THREE.warn('Unknown prism type: ' + mat.prismType);}


	    prismMat.envExponentMin = mat.envExponentMin;
	    prismMat.envExponentMax = mat.envExponentMax;
	    prismMat.envExponentCount = mat.envExponentCount;
	    prismMat.envMap = mat.envMap;

	    prismMat.defines = mat.defines;
	    return prismMat;
	};

	module.exports = {
	    PrismShader: PrismShader,
	    GetPrismMapUniforms: GetPrismMapUniforms,
	    createPrismMaterial: createPrismMaterial,
	    clonePrismMaterial: clonePrismMaterial };

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "varying vec3 vViewPosition;\r\nvarying vec3 vNormal;\r\n\r\n#if defined(PRISMWOOD) && !defined(NO_UVW)\r\nvarying vec3 vUvw;\r\n#if defined(PRISMWOODBUMP)\r\nvarying vec3 vtNormal;\r\nvarying mat3 mNormalMatrix;\r\n#endif\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0 || NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n#prism_check<USE_MAP>\r\n#ifdef USE_MAP\r\nvarying vec2 vUv;\r\n#endif\r\n\r\n#ifdef USE_LOGDEPTHBUF\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\nvarying float vFragDepth;\r\n#endif\r\nuniform float logDepthBufFC;\r\n#endif\r\n\r\n#ifdef MRT_NORMALS\r\nvarying float depth;\r\n#endif\r\n\r\n#include<pack_normals>\r\n#include<instancing_decl_vert>\r\n#include<id_decl_vert>\r\n#include<shadowmap_decl_vert>\r\n\r\n\r\n\r\n#if !defined(USE_MAP) && (MAX_DIR_LIGHTS > 0 || MAX_POINT_LIGHTS > 0 || MAX_SPOT_LIGHTS > 0) || defined( PRISMWOODBUMP )\r\nvarying vec3 vTangent;\r\nvarying vec3 vBitangent;\r\n\r\nvoid ComputeTangents(vec3 normal, out vec3 u, out vec3 v)\r\n{\r\n    float scale = normal.z < 0.0 ? -1.0 : 1.0;\r\n    vec3 temp = scale * normal;\r\n    float e    = temp.z;\r\n    float h    = 1.0/(1.0 + e);\r\n    float hvx  = h   *  temp.y;\r\n    float hvxy = hvx * -temp.x;\r\n    u = vec3(e + hvx * temp.y, hvxy,                -temp.x);\r\n    v = vec3(hvxy,             e + h * temp.x * temp.x, -temp.y);\r\n\r\n    u *= scale;\r\n    v *= scale;\r\n}\r\n#endif\r\n\r\nvoid main() {\r\n#ifdef USE_MAP\r\n    vUv = uv;\r\n#endif\r\n\r\n#ifdef UNPACK_NORMALS\r\n    vec3 objectNormal = decodeNormal(normal);\r\n#else\r\n    vec3 objectNormal = normal;\r\n#endif\r\n\r\n#ifdef FLIP_SIDED\r\n    objectNormal = -objectNormal;\r\n#endif\r\n\r\n\r\n    objectNormal = getInstanceNormal(objectNormal);\r\n    vec3 instPos = getInstancePos(position);\r\n\r\n#if defined(PRISMWOOD) && !defined(NO_UVW)\r\n#if defined(PRISMWOODBUMP)\r\n\r\n\r\n\r\n\r\n    vUvw = instPos;\r\n    vtNormal = normalize(objectNormal);\r\n    mNormalMatrix = normalMatrix;\r\n#else\r\n    vUvw = uvw;\r\n#endif\r\n#endif\r\n\r\n    vec3 transformedNormal = normalMatrix * objectNormal;\r\n\r\n    vNormal = normalize( transformedNormal );\r\n\r\n    vec4 mvPosition = modelViewMatrix * vec4( instPos, 1.0 );\r\n\r\n    gl_Position = projectionMatrix * mvPosition;\r\n\r\n    vViewPosition = -mvPosition.xyz;\r\n\r\n#if MAX_SPOT_LIGHTS > 0 || NUM_CUTPLANES > 0\r\n    vec4 worldPosition = modelMatrix * vec4( instPos, 1.0 );\r\n    vWorldPosition = worldPosition.xyz;\r\n#endif\r\n\r\n#if !defined(USE_MAP) && (MAX_DIR_LIGHTS > 0 || MAX_POINT_LIGHTS > 0 || MAX_SPOT_LIGHTS > 0) || defined ( PRISMWOODBUMP )\r\n    vec3 Tu, Tv;\r\n#if defined(PRISMWOODBUMP)\r\n    ComputeTangents(vtNormal, Tu, Tv);\r\n#else\r\n    ComputeTangents(vNormal, Tu, Tv);\r\n#endif\r\n    vTangent = Tu;\r\n    vBitangent = Tv;\r\n#endif\r\n\r\n#ifdef USE_LOGDEPTHBUF\r\n    if (projectionMatrix[3][3] == 0.0) {\r\n        gl_Position.z = log2(max(1.0e-6, gl_Position.w + 1.0)) * logDepthBufFC;\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n        vFragDepth = 1.0 + gl_Position.w;\r\n#else\r\n        gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\r\n#endif\r\n    } else {\r\n\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n        vFragDepth = 1.0 + vViewPosition.z;\r\n#else\r\n\r\n#endif\r\n    }\r\n#endif\r\n\r\n#ifdef MRT_NORMALS\r\n    depth = mvPosition.z;\r\n#endif\r\n\r\n#include<id_vert>\r\n\r\n#include<shadowmap_vert>\r\n}\r\n";

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n#define PI 3.141592654\r\n#define RECIPROCAL_PI 0.318309886\r\n#define RECIPROCAL_2PI 0.159154943\r\n#define ONE 0.00390625\r\n\r\nuniform vec3 surface_albedo;\r\nuniform float surface_roughness;\r\nuniform float surface_anisotropy;\r\nuniform float surface_rotation;\r\nuniform sampler2D importantSamplingRandomMap;\r\nuniform sampler2D importantSamplingSolidAngleMap;\r\n\r\n#if defined( PRISMOPAQUE )\r\n\r\nuniform vec3 opaque_albedo;\r\nuniform float opaque_f0;\r\nuniform vec3 opaque_luminance_modifier;\r\nuniform float opaque_luminance;\r\n\r\n#elif defined( PRISMMETAL )\r\n\r\nuniform vec3 metal_f0;\r\n\r\n#elif defined( PRISMLAYERED )\r\n\r\nuniform float layered_f0;\r\nuniform vec3 layered_diffuse;\r\nuniform float layered_fraction;\r\nuniform vec3 layered_bottom_f0;\r\nuniform float layered_roughness;\r\nuniform float layered_anisotropy;\r\nuniform float layered_rotation;\r\n\r\n#elif defined( PRISMTRANSPARENT )\r\n\r\nuniform float transparent_ior;\r\nuniform vec3 transparent_color;\r\nuniform float transparent_distance;\r\n\r\n#elif defined( PRISMWOOD )\r\n\r\nuniform bool wood_fiber_cosine_enable;\r\nuniform int wood_fiber_cosine_bands;\r\nuniform vec4 wood_fiber_cosine_weights;\r\nuniform vec4 wood_fiber_cosine_frequencies;\r\nuniform bool wood_fiber_perlin_enable;\r\nuniform int wood_fiber_perlin_bands;\r\nuniform vec4 wood_fiber_perlin_weights;\r\nuniform vec4 wood_fiber_perlin_frequencies;\r\nuniform float wood_fiber_perlin_scale_z;\r\nuniform bool wood_growth_perlin_enable;\r\nuniform int wood_growth_perlin_bands;\r\nuniform vec4 wood_growth_perlin_weights;\r\nuniform vec4 wood_growth_perlin_frequencies;\r\nuniform float wood_latewood_ratio;\r\nuniform float wood_earlywood_sharpness;\r\nuniform float wood_latewood_sharpness;\r\nuniform float wood_ring_thickness;\r\nuniform bool wood_earlycolor_perlin_enable;\r\nuniform int wood_earlycolor_perlin_bands;\r\nuniform vec4 wood_earlycolor_perlin_weights;\r\nuniform vec4 wood_earlycolor_perlin_frequencies;\r\nuniform vec3 wood_early_color;\r\nuniform bool wood_use_manual_late_color;\r\nuniform vec3 wood_manual_late_color;\r\nuniform bool wood_latecolor_perlin_enable;\r\nuniform int wood_latecolor_perlin_bands;\r\nuniform vec4 wood_latecolor_perlin_weights;\r\nuniform vec4 wood_latecolor_perlin_frequencies;\r\nuniform float wood_late_color_power;\r\nuniform bool wood_diffuse_perlin_enable;\r\nuniform int wood_diffuse_perlin_bands;\r\nuniform vec4 wood_diffuse_perlin_weights;\r\nuniform vec4 wood_diffuse_perlin_frequencies;\r\nuniform float wood_diffuse_perlin_scale_z;\r\nuniform bool wood_use_pores;\r\nuniform int wood_pore_type;\r\nuniform float wood_pore_radius;\r\nuniform float wood_pore_cell_dim;\r\nuniform float wood_pore_color_power;\r\nuniform float wood_pore_depth;\r\nuniform bool wood_use_rays;\r\nuniform float wood_ray_color_power;\r\nuniform float wood_ray_seg_length_z;\r\nuniform float wood_ray_num_slices;\r\nuniform float wood_ray_ellipse_z2x;\r\nuniform float wood_ray_ellipse_radius_x;\r\nuniform bool wood_use_latewood_bump;\r\nuniform float wood_latewood_bump_depth;\r\nuniform bool wood_use_groove_roughness;\r\nuniform float wood_groove_roughness;\r\nuniform float wood_diffuse_lobe_weight;\r\nuniform sampler2D permutationMap;\r\nuniform sampler2D gradientMap;\r\nuniform sampler2D perm2DMap;\r\nuniform sampler2D permGradMap;\r\nuniform vec4 wood_ring_fraction;\r\nuniform vec2 wood_fall_rise;\r\n#endif\r\n\r\n\r\nuniform float envExponentMin;\r\nuniform float envExponentMax;\r\nuniform float envExponentCount;\r\n#include<env_sample>\r\n\r\n#if TONEMAP_OUTPUT > 0\r\nuniform float exposureBias;\r\n#include<tonemap>\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0 || NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n\r\n#ifdef USE_LOGDEPTHBUF\r\nuniform float logDepthBufFC;\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n#extension GL_EXT_frag_depth : enable\r\nvarying highp float vFragDepth;\r\n#endif\r\n#endif\r\n\r\n#include<id_decl_frag>\r\n#include<theming_decl_frag>\r\n#include<shadowmap_decl_frag>\r\n#ifdef USE_FOG\r\nuniform vec3 fogColor;\r\nuniform float fogNear;\r\nuniform float fogFar;\r\n#endif\r\n#prism_check<USE_MAP>\r\n#ifdef USE_MAP\r\nvarying vec2 vUv;\r\n#endif\r\n\r\n#if defined(PRISMWOOD) && !defined(NO_UVW)\r\nvarying vec3 vUvw;\r\n#endif\r\n\r\n#prism_uniforms<surface_albedo_map>\r\n#prism_uniforms<surface_roughness_map>\r\n#prism_uniforms<surface_cutout_map>\r\n#prism_uniforms<surface_anisotropy_map>\r\n#prism_uniforms<surface_rotation_map>\r\n\r\n#prism_uniforms<opaque_albedo_map>\r\n#prism_uniforms<opaque_f0_map>\r\n#prism_uniforms<opaque_luminance_modifier_map>\r\n#prism_uniforms<layered_bottom_f0_map>\r\n#prism_uniforms<layered_f0_map>\r\n#prism_uniforms<layered_diffuse_map>\r\n#prism_uniforms<layered_fraction_map>\r\n#prism_uniforms<layered_roughness_map>\r\n#prism_uniforms<layered_anisotropy_map>\r\n#prism_uniforms<layered_rotation_map>\r\n#prism_uniforms<metal_f0_map>\r\n#prism_uniforms<wood_curly_distortion_map>\r\n#if defined( USE_WOOD_CURLY_DISTORTION_MAP )\r\nuniform bool wood_curly_distortion_enable;\r\nuniform float wood_curly_distortion_scale;\r\n#endif\r\n\r\n#prism_bump_uniforms<surface_normal_map>\r\n#prism_bump_uniforms<layered_normal_map>\r\n\r\nfloat SRGBToLinearComponent(float color) {\r\n    float result = color;\r\n\r\n    if (result<=0.04045)\r\n        result *= 0.07739938;\r\n    else\r\n        result = pow(abs((result+0.055)*0.947867298), 2.4);\r\n    return result;\r\n}\r\n\r\nvec3 SRGBToLinear(vec3 color) {\r\n    vec3 result = color;\r\n    result.x = SRGBToLinearComponent(result.x);\r\n    result.y = SRGBToLinearComponent(result.y);\r\n    result.z = SRGBToLinearComponent(result.z);\r\n    return result;\r\n}\r\n\r\n#if defined( USE_ENVMAP )\r\nuniform float envMapExposure;\r\nuniform samplerCube envMap;\r\n#endif\r\n\r\n#include<float3_average>\r\n\r\n#if defined( USE_SURFACE_NORMAL_MAP ) || defined( USE_LAYERED_NORMAL_MAP )\r\nvec3 heightMapTransform(sampler2D bumpTexture, vec2 uv, mat3 transform, vec2 bumpScale, vec3 T, vec3 B, vec3 N) {\r\n    vec2 st = (transform * vec3(uv, 1.0)).xy; \r\n    mat3 mtxTangent = mat3(T, B, N); \r\n    T = normalize(mtxTangent * (transform * vec3(1.0, 0.0, 0.0)));\r\n    B = normalize(mtxTangent * (transform * vec3(0.0, 1.0, 0.0)));\r\n    const float oneThird = 1.0 / 3.0;\r\n    vec3 avg = vec3(oneThird, oneThird, oneThird);\r\n    vec2 offset = fwidth(st);\r\n    float h0 = dot(texture2D(bumpTexture, st).xyz, avg);\r\n    float hx = dot(texture2D(bumpTexture, st + vec2(offset.x, 0.0)).xyz, avg);\r\n    float hy = dot(texture2D(bumpTexture, st + vec2(0.0, offset.y)).xyz, avg);\r\n    vec2 diff = vec2(h0 - hx, h0 - hy) / offset;\r\n    return normalize(N + (diff.x * T * bumpScale.x + diff.y * B * bumpScale.y));\r\n}\r\n\r\nvec3 normalMapTransform(sampler2D bumpTexture, vec2 uv, mat3 transform, vec2 bumpScale, vec3 T, vec3 B, vec3 N) {\r\n    vec2 st = (transform * vec3(uv, 1.0)).xy; \r\n    vec3 NMap =  2.0 * texture2D( bumpTexture, st ).xyz - 1.0;  \r\n    return normalize(bumpScale.x * (NMap.x * T + NMap.y * B) + NMap.z * N);\r\n}\r\n#endif\r\n\r\n#if !defined(USE_MAP) && (MAX_DIR_LIGHTS > 0 || MAX_POINT_LIGHTS > 0 || MAX_SPOT_LIGHTS > 0) || defined ( PRISMWOODBUMP )\r\nvarying vec3 vTangent;\r\nvarying vec3 vBitangent;\r\n#if defined( PRISMWOODBUMP )\r\n\r\n\r\n\r\n\r\nvarying vec3 vtNormal;\r\nvarying mat3 mNormalMatrix;\r\n#endif\r\n#endif\r\n\r\n#if defined( USE_ENVMAP )\r\nvec3 sampleReflection(vec3 N, vec3 V, float mipIndex) {\r\n\r\n    vec3 dir = (2.0 * dot(V, N)) * N - V;\r\n    dir = adjustLookupVector(mat3(viewMatrixInverse) * dir);\r\n\r\n#ifdef ENV_GAMMA\r\n\r\n#ifdef HAVE_TEXTURE_LOD\r\n    vec4 envTexColor = textureCubeLodEXT( envMap, dir, mipIndex );\r\n#else\r\n\r\n\r\n    vec4 envTexColor = textureCube( envMap, dir, mipIndex );\r\n#endif\r\n\r\n    return GammaDecode(envTexColor, envMapExposure);\r\n\r\n#elif defined(ENV_RGBM)\r\n#ifdef HAVE_TEXTURE_LOD\r\n    vec4 envTexColor = textureCubeLodEXT( envMap, dir, mipIndex );\r\n#else\r\n\r\n\r\n    vec4 envTexColor = textureCube( envMap, dir, mipIndex );\r\n#endif\r\n\r\n    return RGBMDecode(envTexColor, envMapExposure);\r\n\r\n#else\r\n\r\n\r\n\r\n    vec4 envTexColor = textureCube( envMap, dir );\r\n    vec3 cubeColor = envTexColor.xyz;\r\n\r\n#ifdef GAMMA_INPUT\r\n    cubeColor *= cubeColor;\r\n#endif\r\n\r\n    return cubeColor;\r\n\r\n#endif\r\n\r\n}\r\n#endif\r\n\r\n#include<hatch_pattern>\r\n\r\n#if defined( USE_ENVMAP ) && defined( USE_IRRADIANCEMAP )\r\nuniform samplerCube irradianceMap;\r\n\r\nvec3 sampleNormal(vec3 normal) {\r\n    vec3 worldNormal = mat3(viewMatrixInverse) * normal;\r\n    vec3 irradiance = sampleIrradianceMap(worldNormal, irradianceMap, envMapExposure);\r\n\r\n    irradiance = applyEnvShadow(irradiance, worldNormal);\r\n\r\n    return irradiance;\r\n}\r\n#endif\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\r\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\r\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n#endif\r\n\r\nfloat sqr(float x) {return x*x;}\r\n\r\nfloat aSqrd(float maxAlphaSqr, float cosTheta)\r\n{\r\n    if (abs(cosTheta) < 1e-10)\r\n    {\r\n        return 1e10;\r\n    }\r\n\r\n    float tan2 = 1.0/sqr(cosTheta) - 1.0;\r\n    return maxAlphaSqr * tan2;\r\n}\r\n\r\n\r\n\r\nvec3 Fresnel_Schlick(vec3 f0, float cosAngle)\r\n{\r\n    float x = 1.0 - cosAngle;\r\n    float x2 = x * x;\r\n    float x5 = x * x2 * x2;\r\n    return f0 + (1.0 - f0) * x5;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nvec3 Fresnel_Rough(vec3 f0, float cosAngle, float alpha)\r\n{\r\n    float x = 1.0 - cosAngle;\r\n    float x2 = x * x;\r\n    float x5 = x * x2 * x2;\r\n    vec3 maxReflectance = mix(vec3(1.0), f0, vec3(min(0.7, alpha)) / 0.7);\r\n    return f0 + (maxReflectance - f0) * x5;\r\n}\r\n\r\n\r\nfloat IORToReflectance(float ior)\r\n{\r\n    return sqr((1.0 - ior)/(1.0 + ior));\r\n}\r\n\r\n\r\n\r\nvec2 RoughnessToAlpha(float roughness, float anisotropy)\r\n{\r\n\r\n\r\n    vec2 alpha = roughness * vec2(1.0, 1.0 - anisotropy);\r\n    alpha = alpha * alpha;\r\n\r\n\r\n\r\n    alpha = clamp(alpha, 0.001, 1.0);\r\n\r\n    return alpha;\r\n}\r\n\r\n\r\nfloat AlphaToPhong(float alpha)\r\n{\r\n    return max(0.0, 2.56/alpha - 7.0);\r\n}\r\n\r\n\r\nfloat ExponentToReflMipIndex(float exponent)\r\n{\r\n    float targetLog = log2(exponent);\r\n    float minLog = log2(envExponentMin); \r\n    float maxLog = log2(envExponentMax); \r\n    float deltaLog = clamp(targetLog - minLog, 0.0, maxLog - minLog);  \r\n    float level = clamp((1.0-(deltaLog + 0.5) / envExponentCount), 0.0, 1.0) * 6.0; \r\n    return level; \r\n}\r\n\r\n#include<prism_wood>\r\n\r\n#if defined( ENABLEIMPORTANTSAMPLING ) && (defined( USE_SURFACE_ROTATION_MAP ) || defined( USE_SURFACE_ANISOTROPY_MAP ) || defined( USE_LAYERED_ROTATION_MAP ) || defined( USE_LAYERED_ANISOTROPY_MAP ))\r\n#define IMPORTANTSAMPLING\r\n#endif\r\n\r\n#if defined( IMPORTANTSAMPLING )\r\n\r\n\r\n#define SAMPLECOUNT 32\r\nvec2 Hammersley(int index)\r\n{\r\n    float u = (float(index) + 0.5) / 32.0;\r\n    float v = 0.5;\r\n    float noise = texture2D(importantSamplingRandomMap, vec2(u, v), 0.0).r;\r\n   return vec2(2.0 * PI * float(index/SAMPLECOUNT), noise);\r\n}\r\n\r\nvec3 ImportanceSampleAnisotropicGGX(int index, vec2 alpha, vec3 N, vec3 Tu, vec3 Tv)\r\n{\r\n    vec2 uniformSample2D = Hammersley(index);\r\n    float coef = sqrt(uniformSample2D.y / (1.0 - uniformSample2D.y));\r\n    float sinSigma, cosSigma;\r\n    sinSigma = sin(uniformSample2D.x);\r\n    cosSigma = cos(uniformSample2D.x);\r\n    vec3 H = coef * ((alpha.x * cosSigma) * Tu + (alpha.y * sinSigma) * Tv) + N;\r\n    H = normalize(H);\r\n    return H;\r\n}\r\n\r\nfloat ComputePDF(vec2 alpha, float NdotH, float HdotTu, float HdotTv, float VdotH)\r\n{\r\n    float factor1 = HdotTu / alpha.x;\r\n    float factor2 = HdotTv / alpha.y;\r\n    float factor3 = factor1 * factor1 + factor2 * factor2 + NdotH * NdotH;\r\n    float factor = factor3 * factor3 * alpha.x * alpha.y * VdotH * 4.0 * PI;\r\n    if (factor > 0.0)\r\n    {\r\n        return (NdotH / factor);\r\n    }\r\n    else\r\n    {\r\n        return 0.0;\r\n    }\r\n}\r\n\r\n#define INVFACESIZE 0.0078125\r\nfloat DirectionToSolidAngle(vec3 dir)\r\n{\r\n    dir = abs(dir);\r\n    float first = min(dir.x, dir.y);\r\n    float temp = max(dir.x, dir.y);\r\n    float second = min(temp, dir.z);\r\n    float third = max(temp, dir.z);\r\n    first /= third;\r\n    second /= third;\r\n    float u = (first+1.0)/2.0;\r\n    float v = (second + 1.0) / 2.0;\r\n\r\n    float solidAngle = texture2D(importantSamplingSolidAngleMap, vec2(u, v), 0.0).r * 0.000255;\r\n\r\n    return solidAngle;\r\n}\r\n\r\nfloat Smith_GGX(float value)\r\n{\r\n    return 2.0 / (1.0 + sqrt(1.0 + value));\r\n}\r\n\r\nvec2 RoughnessAnisotropyToAlpha(float roughness, float anisotropy)\r\n{\r\n    float aspect = sqrt(1.0 - 0.9 * anisotropy);\r\n    vec2 alpha = vec2(roughness * roughness / aspect, roughness * roughness * aspect);\r\n    return alpha;\r\n}\r\n\r\nvec3 ImportanceSamplingSpecular(float angle, vec3 reflectance, float roughness, float anisotropy, vec3 V, vec3 N, vec3 Tu, vec3 Tv)\r\n{\r\n    vec3 specular = vec3(0.0);\r\n    float radAngle;\r\n    if (anisotropy < 1e-10)\r\n    {\r\n        radAngle = 0.0;\r\n    }\r\n    else\r\n    {\r\n        radAngle = -PI * angle;\r\n    }\r\n    vec2 alpha = RoughnessAnisotropyToAlpha(roughness, anisotropy);\r\n    float alpha2 = max(alpha.x * alpha.x, alpha.y * alpha.y);\r\n    float NdotV = dot(N, V);\r\n    float alpha2NV = aSqrd(alpha2, NdotV);\r\n    vec2 sincosTheta;\r\n    sincosTheta.x = sin(radAngle);\r\n    sincosTheta.y = cos(radAngle);\r\n    vec3 Tu1, Tv1;\r\n    Tu1 = sincosTheta.y * Tu - sincosTheta.x * Tv;\r\n    Tv1 = sincosTheta.x * Tu + sincosTheta.y * Tv;\r\n    vec3 H;\r\n    vec3 sampleLightIntensity;\r\n    vec3 L;\r\n    float effectiveSample = 0.0;\r\n    for (int i = 0; i < SAMPLECOUNT; i++)\r\n    {\r\n        H = ImportanceSampleAnisotropicGGX(i, alpha, N, Tu1, Tv1);\r\n        float VdotH = dot(V, H);\r\n        L = 2.0 * VdotH * H - V;\r\n        float NdotH = dot(N, H);\r\n        float NdotL = dot(N, L);\r\n        if (NdotL >= 0.0 && NdotV > 0.0 && NdotH > 0.0)\r\n        {\r\n            float alpha2NL = aSqrd(alpha2, NdotL);\r\n            float HdotTu = dot(H, Tu1);\r\n            float HdotTv = dot(H, Tv1);\r\n            float pdf = ComputePDF(alpha, NdotH, HdotTu, HdotTv, VdotH);\r\n            float mipmapLevel = 0.0;\r\n            if (pdf > 0.0)\r\n            {\r\n                mipmapLevel = 0.3 * log2(1.0 / (float(SAMPLECOUNT) * pdf * DirectionToSolidAngle(L)));\r\n            }\r\n            mipmapLevel = clamp(mipmapLevel, 0.0, 4.0);\r\n            L = normalize(L);\r\n            sampleLightIntensity = sampleReflection(L, L, mipmapLevel).rgb;\r\n            float G = Smith_GGX(alpha2NL) * Smith_GGX(alpha2NV);\r\n            vec3 F = Fresnel_Schlick(reflectance, VdotH);\r\n            float factor = G * VdotH / (NdotH * NdotV);\r\n            if (factor >= 0.0)\r\n            {\r\n                specular += abs(sampleLightIntensity * F * factor);\r\n                effectiveSample += 1.0;\r\n            }\r\n        }\r\n    }\r\n    if (effectiveSample > 0.0)\r\n    {\r\n        specular /= effectiveSample;\r\n    }\r\n    return specular;\r\n}\r\n#endif\r\n\r\n#if MAX_DIR_LIGHTS > 0 || MAX_POINT_LIGHTS > 0 || MAX_SPOT_LIGHTS > 0\r\nvec3 DiffuseLobe(vec3 diffuseColor)\r\n{\r\n    return diffuseColor * RECIPROCAL_PI;\r\n}\r\n\r\nvec3 Rotate(vec3 vec, float angle)\r\n{\r\n    float s = sin(angle);\r\n    float c = cos(angle);\r\n    return vec3(vec.x * c - vec.y * s, vec.x * s + vec.y * c, vec.z);\r\n}\r\n\r\n\r\n\r\nfloat NDF_GGX(float alphaU, float alphaV, vec3 normal)\r\n{\r\n    float nx2 = sqr(normal.x);\r\n    float ny2 = sqr(normal.y);\r\n    float nz2 = sqr(normal.z);\r\n    float scale = 1.0/(alphaU * alphaV * PI);\r\n    return scale/sqr(nx2/sqr(alphaU) + ny2/sqr(alphaV) + nz2);\r\n}\r\n\r\n\r\n\r\nfloat G1_GGX(float aSqrd)\r\n{\r\n    return 2.0 / (1.0 + sqrt(1.0 + aSqrd));\r\n}\r\n\r\nvec3 MicrofacetLobe(\r\n        vec3 Hlocal, float NdotL, float NdotH, float NdotV, float VdotH,\r\n        float roughness, float anisotropy, float rotation, vec3 reflectance)\r\n{\r\n\r\n    vec2 alpha = RoughnessToAlpha(roughness, anisotropy);\r\n\r\n\r\n    Hlocal = Rotate(Hlocal, rotation);\r\n\r\n\r\n    vec3 F = Fresnel_Schlick(reflectance, VdotH);\r\n\r\n\r\n    float D = NDF_GGX(alpha.x, alpha.y, Hlocal);\r\n\r\n\r\n\r\n    float alpha2 = max(sqr(alpha.x), sqr(alpha.y));\r\n    float alpha2NL = aSqrd(alpha2, NdotL);\r\n    float alpha2NV = aSqrd(alpha2, NdotV);\r\n    float G = G1_GGX(alpha2NL) * G1_GGX(alpha2NV);\r\n\r\n\r\n    return max(F * D * G / (4.0 * NdotL * NdotV), vec3(0.0));\r\n}\r\n\r\n#if defined( PRISMOPAQUE )\r\n\r\n\r\n\r\n\r\n\r\nvec3 BRDF_Opaque(vec3 Hlocal, float NdotL, float NdotH, float NdotV, float VdotH, \r\n        vec3 surfaceAlbedo, float surfaceRoughness, float surfaceAnisotropy, float surfaceRotation, \r\n        float opaqueF0, vec3 opaqueAlbedo)\r\n{\r\n\r\n    vec3 diffuse = DiffuseLobe(opaqueAlbedo);\r\n\r\n    vec3 specular = surfaceAlbedo * MicrofacetLobe(\r\n            Hlocal, NdotL, NdotH, NdotV, VdotH,\r\n            surfaceRoughness, surfaceAnisotropy, surfaceRotation, vec3(opaqueF0));\r\n\r\n\r\n    return (specular+diffuse)*NdotL;\r\n}\r\n#elif defined( PRISMMETAL )\r\n\r\n\r\n\r\n\r\n\r\nvec3 BRDF_Metal(vec3 Hlocal, float NdotL, float NdotH, float NdotV, float VdotH, \r\n        vec3 surfaceAlbedo, float surfaceRoughness, float surfaceAnisotropy, float surfaceRotation, \r\n        vec3 metalF0)\r\n{\r\n\r\n    vec3 specular = surfaceAlbedo * MicrofacetLobe(\r\n            Hlocal, NdotL, NdotH, NdotV, VdotH,\r\n            surfaceRoughness, surfaceAnisotropy, surfaceRotation, metalF0);\r\n\r\n\r\n\r\n    return specular*NdotL;\r\n}\r\n#elif defined( PRISMLAYERED )\r\n\r\n\r\n\r\n\r\n\r\nvec3 BRDF_Layered(vec3 Hlocal, float NdotL, float NdotH, float NdotV, float VdotH, \r\n        vec3 Hlocal2, float N2dotL, float N2dotH, float N2dotV, \r\n        vec3 surfaceAlbedo, float surfaceRoughness, float surfaceAnisotropy, float surfaceRotation,\r\n        float layeredF0, vec3 layeredDiffuse, float layeredRoughness, float layeredAnisotropy,\r\n        float layeredRotation, vec3 bottom_f0, float layeredFraction)\r\n{\r\n\r\n\r\n\r\n    vec3 Fl = Fresnel_Schlick(vec3(layeredF0), NdotL);\r\n    vec3 Fv = Fresnel_Schlick(vec3(layeredF0), NdotV);\r\n    vec3 amount = (1.0 - Fl) * (1.0 - Fv);\r\n\r\n\r\n    vec3 topSpecular = surfaceAlbedo * MicrofacetLobe(\r\n            Hlocal, NdotL, NdotH, NdotV, VdotH,\r\n            surfaceRoughness, surfaceAnisotropy, surfaceRotation,\r\n            vec3(layeredF0));\r\n\r\n\r\n    vec3 topDiffuse = DiffuseLobe(layeredDiffuse);\r\n\r\n\r\n    vec3 botSpecular = MicrofacetLobe(\r\n            Hlocal2, N2dotL, N2dotH, N2dotV, VdotH,\r\n            layeredRoughness, layeredAnisotropy, layeredRotation,\r\n            bottom_f0);\r\n\r\n\r\n\r\n    return topSpecular*NdotL + amount * mix(topDiffuse*NdotL, botSpecular*N2dotL, layeredFraction);\r\n}\r\n\r\n#elif defined( PRISMTRANSPARENT )\r\nvec3 BRDF_Transparent(vec3 Hlocal, float NdotL, float NdotH, float NdotV, float VdotH, \r\n        vec3 surfaceAlbedo, float surfaceRoughness, float surfaceAnisotropy, float surfaceRotation)\r\n{\r\n\r\n    vec3 reflectance = vec3(IORToReflectance(transparent_ior));\r\n\r\n\r\n    vec3 specular = surfaceAlbedo * MicrofacetLobe(\r\n            Hlocal, NdotL, NdotH, NdotV, VdotH,\r\n            surfaceRoughness, surfaceAnisotropy, surfaceRotation, reflectance);\r\n\r\n\r\n\r\n    return specular*NdotL;\r\n}\r\n\r\n#elif defined( PRISMWOOD )\r\n\r\n\r\n\r\n\r\n\r\nvec3 BRDF_Wood(vec3 Hlocal, float NdotL, float NdotH, float NdotV, float VdotH, \r\n        vec3 surfaceAlbedo, float surfaceRoughness, vec3 woodDiffuse)\r\n{\r\n\r\n    vec3 diffuse = DiffuseLobe(woodDiffuse);\r\n\r\n    vec3 specular = surfaceAlbedo * MicrofacetLobe(\r\n            Hlocal, NdotL, NdotH, NdotV, VdotH,\r\n            surfaceRoughness, 0.0, 0.0, vec3(0.04));\r\n\r\n\r\n    return (specular+diffuse)*NdotL;\r\n}\r\n#endif\r\n#endif\r\n\r\n#if defined( USE_ENVMAP )\r\n#if defined( PRISMOPAQUE )\r\n\r\n\r\n\r\n\r\nvec3 Environment_Opaque(vec3 N, vec3 V, float NdotV, vec3 surfaceAlbedo, float surfaceRoughness,\r\n        float opaqueF0, vec3 opaqueAlbedo, float surfaceAnisotropy, float surfaceRotation, vec3 Tu, vec3 T)\r\n{\r\n\r\n    float alpha = RoughnessToAlpha(surfaceRoughness, 0.0).x;\r\n\r\n    vec3 F = Fresnel_Rough(vec3(opaqueF0), NdotV, alpha);\r\n\r\n#if defined( IMPORTANTSAMPLING )\r\n    vec3 specular = surfaceAlbedo * ImportanceSamplingSpecular(surfaceRotation, vec3(opaqueF0), surfaceRoughness, surfaceAnisotropy, V, N, Tu, Tv);\r\n#else\r\n    float exponent = AlphaToPhong(alpha);\r\n    float reflMipIndex = ExponentToReflMipIndex(exponent);\r\n\r\n\r\n\r\n    vec3 envSpecular = sampleReflection(N, V, reflMipIndex);\r\n    vec3 specular = F* surfaceAlbedo * envSpecular;\r\n#endif\r\n\r\n    \r\n\r\n#if defined( USE_IRRADIANCEMAP )\r\n\r\n\r\n    vec3 envIrradiance = sampleNormal(N);\r\n#else\r\n    vec3 envIrradiance = vec3(1.0);\r\n#endif\r\n    vec3 diffuse = (1.0 - F) * opaqueAlbedo * envIrradiance;\r\n\r\n    vec3 luminanceModifier;\r\n#prism_sample_texture<opaque_luminance_modifier, luminanceModifier, false, true>\r\n    vec3 emission = luminanceModifier * opaque_luminance;\r\n\r\n\r\n    return diffuse + specular + emission;\r\n}\r\n\r\n#elif defined( PRISMMETAL )\r\n\r\n\r\n\r\n\r\n\r\nvec3 Environment_Metal(vec3 N, vec3 V, float NdotV, vec3 surfaceAlbedo, float surfaceRoughness, vec3 metalF0, float surfaceAnisotropy, float surfaceRotation, vec3 Tu, vec3 Tv)\r\n{\r\n#if defined( IMPORTANTSAMPLING )\r\n    vec3 specular = surfaceAlbedo * ImportanceSamplingSpecular(surfaceRotation, metalF0, surfaceRoughness, surfaceAnisotropy, V, N, Tu, Tv);\r\n#else\r\n\r\n    float alpha = RoughnessToAlpha(surfaceRoughness, 0.0).x;\r\n    float exponent = AlphaToPhong(alpha);\r\n    float reflMipIndex = ExponentToReflMipIndex(exponent);\r\n\r\n\r\n    vec3 F = Fresnel_Rough(metalF0, NdotV, alpha);\r\n\r\n\r\n\r\n    vec3 envSpecular = sampleReflection(N, V, reflMipIndex);\r\n    vec3 specular = F * surfaceAlbedo * envSpecular;\r\n#endif\r\n\r\n    return specular;\r\n}\r\n\r\n#elif defined( PRISMLAYERED )\r\n\r\n\r\n\r\n\r\n\r\nvec3 Environment_Layered(vec3 N, vec3 V, float NdotV, vec3 N2, float N2dotV, vec3 surfaceAlbedo, float surfaceRoughness,\r\n        float layeredF0, float surfaceAnisotropy, float surfaceRotation, vec3 Tu, vec3 Tv, vec3 layeredDiffuse, float layeredRoughness, \r\n        float layeredAnisotropy, float layeredRotation, vec3 bottom_f0, float layeredFraction)\r\n{\r\n\r\n\r\n\r\n    vec3 F = Fresnel_Schlick(vec3(layeredF0), NdotV);\r\n    float alpha = RoughnessToAlpha(surfaceRoughness, 0.0).x;\r\n#if defined( IMPORTANTSAMPLING )\r\n    vec3 topSpecular = surfaceAlbedo * ImportanceSamplingSpecular(surfaceRotation, vec3(layeredF0), surfaceRoughness, surfaceAnisotropy, V, N, Tu, Tv);\r\n#else\r\n    float exponent = AlphaToPhong(alpha);\r\n    float reflMipIndex = ExponentToReflMipIndex(exponent);\r\n    vec3 envSpecular = sampleReflection(N, V, reflMipIndex);\r\n    vec3 topSpecular = F * surfaceAlbedo * envSpecular;\r\n#endif\r\n\r\n    vec3 amount = (1.0 - F);\r\n\r\n\r\n\r\n#if defined( USE_IRRADIANCEMAP )\r\n\r\n    vec3 envIrradiance = sampleNormal(N);\r\n#else\r\n    vec3 envIrradiance = vec3(1.0);\r\n#endif\r\n    vec3 topDiffuse = layeredDiffuse * envIrradiance;\r\n\r\n#if defined( IMPORTANTSAMPLING )\r\n    vec3 botSpecular = ImportanceSamplingSpecular(layeredRotation, bottom_f0, layeredRoughness, layeredAnisotropy, V, N2, Tu, Tv);\r\n#else\r\n\r\n\r\n    alpha = RoughnessToAlpha(layeredRoughness, 0.0).x;\r\n    exponent = AlphaToPhong(alpha);\r\n    reflMipIndex = ExponentToReflMipIndex(exponent);\r\n    envSpecular = sampleReflection(N2, V, reflMipIndex);\r\n    F = Fresnel_Rough(bottom_f0, N2dotV, alpha);\r\n    vec3 botSpecular = F * envSpecular;\r\n#endif\r\n\r\n\r\n\r\n    return topSpecular + amount * mix(topDiffuse, botSpecular, layeredFraction);\r\n}\r\n\r\n#elif defined( PRISMTRANSPARENT )\r\n\r\n\r\n\r\n\r\nvec3 Environment_Transparent(vec3 N, vec3 V, float NdotV, vec3 surfaceAlbedo, float surfaceRoughness, float surfaceAnisotropy, float surfaceRotation, vec3 Tu, vec3 Tv)\r\n{\r\n\r\n    vec3 reflectance = vec3(IORToReflectance(transparent_ior));\r\n\r\n    float alpha = RoughnessToAlpha(surfaceRoughness, 0.0).x;\r\n    vec3 F = Fresnel_Rough(reflectance, NdotV, alpha);\r\n#if defined( IMPORTANTSAMPLING )\r\n    vec3 specular = surfaceAlbedo * ImportanceSamplingSpecular(surfaceRotation, reflectance, surfaceRoughness, surfaceAnisotropy, V, N, Tu, Tv);\r\n#else\r\n    float exponent = AlphaToPhong(alpha);\r\n    float reflMipIndex = ExponentToReflMipIndex(exponent);\r\n\r\n\r\n\r\n    vec3 envSpecular = sampleReflection(N, V, reflMipIndex);\r\n    vec3 specular = F * surfaceAlbedo * envSpecular;\r\n#endif\r\n\r\n#if defined( USE_IRRADIANCEMAP )\r\n\r\n    vec3 envIrradiance = sampleNormal(N);\r\n#else\r\n    vec3 envIrradiance = vec3(1.0);\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec3 color = F * surfaceRoughness * transparent_color * envIrradiance;\r\n\r\n\r\n    return specular + color;\r\n}\r\n\r\n#elif defined( PRISMWOOD )\r\n\r\n\r\n\r\nvec3 Environment_Wood(vec3 N, vec3 V, float NdotV, vec3 surfaceAlbedo, float surfaceRoughness, vec3 woodDiffuse, float surfaceAnisotropy, float surfaceRotation, vec3 Tu, vec3 Tv)\r\n{\r\n\r\n    float alpha = RoughnessToAlpha(surfaceRoughness, 0.0).x;\r\n\r\n    vec3 F = Fresnel_Rough(vec3(0.04), NdotV, alpha);\r\n#if defined( IMPORTANTSAMPLING )\r\n    vec3 specular = surfaceAlbedo * ImportanceSamplingSpecular(surfaceRotation, vec3(0.04), surfaceRoughness, surfaceAnisotropy, V, N, Tu, Tv);\r\n#else\r\n    float exponent = AlphaToPhong(alpha);\r\n    float reflMipIndex = ExponentToReflMipIndex(exponent);\r\n\r\n\r\n\r\n    vec3 envSpecular = sampleReflection(N, V, reflMipIndex);\r\n    vec3 specular = F * surfaceAlbedo * envSpecular;\r\n#endif\r\n\r\n#if defined( USE_IRRADIANCEMAP )\r\n\r\n\r\n    vec3 envIrradiance = sampleNormal(N);\r\n#else\r\n    vec3 envIrradiance = vec3(1.0);\r\n#endif\r\n    vec3 diffuse = (1.0 - F) * woodDiffuse * envIrradiance;\r\n\r\n\r\n    return diffuse + specular;\r\n}\r\n#endif\r\n#endif\r\n\r\nvarying vec3 vNormal;\r\nvarying vec3 vViewPosition;\r\n#include<cutplanes>\r\n\r\nvoid main() {\r\n#if NUM_CUTPLANES > 0\r\n    checkCutPlanes(vWorldPosition);\r\n#endif\r\n    vec3 N = normalize(vNormal);\r\n    vec3 Tu = vec3(0.0);\r\n    vec3 Tv = vec3(0.0);\r\n#if defined( USE_SURFACE_NORMAL_MAP ) || defined( USE_LAYERED_NORMAL_MAP ) || MAX_DIR_LIGHTS > 0 || MAX_POINT_LIGHTS > 0 || MAX_SPOT_LIGHTS > 0 || defined( PRISMWOODBUMP ) || defined( IMPORTANTSAMPLING )\r\n#if !defined(USE_MAP) || defined( PRISMWOODBUMP )\r\n    Tu = normalize(vTangent);\r\n    Tv = normalize(vBitangent);\r\n#else\r\n\r\n\r\n    vec3 q0 = dFdx( -vViewPosition );\r\n    vec3 q1 = dFdy( -vViewPosition );\r\n    vec2 st0 = dFdx( vUv );\r\n    vec2 st1 = dFdy( vUv );\r\n\r\n    Tu = normalize(  q0 * st1.t - q1 * st0.t );\r\n    Tv = normalize( -q0 * st1.s + q1 * st0.s );\r\n#endif\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec3 V;\r\n    if (projectionMatrix[3][3] == 0.0) {\r\n        V = normalize( vViewPosition );\r\n    } else {\r\n        V = vec3(0.0, 0.0, 1.0);\r\n    }\r\n    N = faceforward(N, -V, N);\r\n\r\n#if defined(PRISMLAYERED)\r\n    vec3 N2 = N;\r\n#endif\r\n\r\n#ifndef FLAT_SHADED\r\n    vec3 normal = normalize( vNormal );\r\n#ifdef DOUBLE_SIDED\r\n    normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\r\n#endif\r\n#else\r\n    vec3 fdx = dFdx( vViewPosition );\r\n    vec3 fdy = dFdy( vViewPosition );\r\n    vec3 normal = normalize( cross( fdx, fdy ) );\r\n#endif\r\n\r\n    vec3 geomNormal = normal;\r\n\r\n#if defined( USE_SURFACE_NORMAL_MAP )\r\n    if (surface_normal_map_bumpmapType == 0)\r\n        N = heightMapTransform(surface_normal_map, vUv, surface_normal_map_texMatrix, surface_normal_map_bumpScale, Tu, Tv, N);\r\n    else\r\n        N = normalMapTransform(surface_normal_map, vUv, surface_normal_map_texMatrix, surface_normal_map_bumpScale, Tu, Tv, N);\r\n#endif\r\n\r\n#if defined( USE_LAYERED_NORMAL_MAP )\r\n    if (layered_normal_map_bumpmapType == 0)\r\n        N2 = heightMapTransform(layered_normal_map, vUv, layered_normal_map_texMatrix, layered_normal_map_bumpScale, Tu, Tv, N2);\r\n    else\r\n        N2 = normalMapTransform(layered_normal_map, vUv, layered_normal_map_texMatrix, layered_normal_map_bumpScale, Tu, Tv, N2);\r\n#endif\r\n\r\n#if defined( PRISMWOOD )\r\n#ifdef NO_UVW\r\n    vec3 p = vec3(0.0);\r\n#elif defined( USE_WOOD_CURLY_DISTORTION_MAP )\r\n    vec3 p = DistortCurly(vUvw);\r\n#else\r\n    vec3 p = vUvw;\r\n#endif\r\n\r\n#if !defined( NO_UVW ) && defined( PRISMWOODBUMP )\r\n\r\n    vec3 offsetTuLeft = p - 0.001 * Tu;\r\n    vec3 offsetTuRight = p + 0.001 * Tu;\r\n    vec3 offsetTvLeft = p - 0.001 * Tv;\r\n    vec3 offsetTvRight = p + 0.001 * Tv;\r\n    float heightVariationTuLeft = HeightVariation(offsetTuLeft);\r\n    float heightVariationTuRight = HeightVariation(offsetTuRight);\r\n    float heightVariationTvLeft = HeightVariation(offsetTvLeft);\r\n    float heightVariationTvRight = HeightVariation(offsetTvRight);\r\n    vec3 bumpHeight = WoodBumpHeight(heightVariationTuLeft, heightVariationTuRight, heightVariationTvLeft, heightVariationTvRight);\r\n    vec3 newNormal = normalize(bumpHeight.x * Tu + bumpHeight.y * Tv + bumpHeight.z * vtNormal);\r\n    vec3 newNormalView = normalize(mNormalMatrix * newNormal);\r\n    vec3 selectedNormal = SelectNormal(geomNormal, newNormalView, V);\r\n    ComputeTangents(selectedNormal, Tu, Tv);\r\n    Tu = normalize(Tu);\r\n    Tv = normalize(Tv);\r\n    N = faceforward(selectedNormal, -V, selectedNormal);\r\n#endif\r\n#endif\r\n\r\n\r\n\r\n\r\n\r\n    float NdotV = dot(N, V);\r\n#if defined(PRISMLAYERED)\r\n    float N2dotV = dot(N2, V);\r\n#endif\r\n\r\n    vec3 surfaceAlbedo;\r\n#prism_sample_texture<surface_albedo, surfaceAlbedo, false, true>\r\n    float surfaceRoughness;\r\n#prism_sample_texture<surface_roughness, surfaceRoughness, true, false>\r\n    float surfaceAnisotropy;\r\n#prism_sample_texture<surface_anisotropy, surfaceAnisotropy, true, false>\r\n    float surfaceRotation;\r\n#prism_sample_texture<surface_rotation, surfaceRotation, true, false>\r\n\r\n#if defined(PRISMOPAQUE)\r\n    float opaqueF0;\r\n#prism_sample_texture<opaque_f0, opaqueF0, true, false>\r\n    vec3 opaqueAlbedo;\r\n#prism_sample_texture<opaque_albedo, opaqueAlbedo, false, true>\r\n\r\n#elif defined(PRISMMETAL)\r\n    vec3 metalF0;\r\n#prism_sample_texture<metal_f0, metalF0, false, true>\r\n\r\n#elif defined(PRISMLAYERED)\r\n    float layeredF0;\r\n#prism_sample_texture<layered_f0, layeredF0, true, false>\r\n    vec3 layeredDiffuse;\r\n#prism_sample_texture<layered_diffuse, layeredDiffuse, false, true>\r\n    float layeredRoughness;\r\n#prism_sample_texture<layered_roughness, layeredRoughness, true, false>\r\n    float layeredAnisotropy;\r\n#prism_sample_texture<layered_anisotropy, layeredAnisotropy, true, false>\r\n    float layeredRotation;\r\n#prism_sample_texture<layered_rotation, layeredRotation, true, false>\r\n    vec3 bottom_f0;\r\n#prism_sample_texture<layered_bottom_f0, bottom_f0, false, true>\r\n    float layeredFraction;\r\n#prism_sample_texture<layered_fraction, layeredFraction, true, false>\r\n#elif defined(PRISMWOOD)\r\n    vec3 woodDiffuse = NoiseWood(p, surfaceRoughness);\r\n#endif\r\n\r\n    vec3 outRadianceLight = vec3(0.0);\r\n#if MAX_DIR_LIGHTS > 0 || MAX_POINT_LIGHTS > 0 || MAX_SPOT_LIGHTS > 0\r\n    vec3 lightDirection[ MAX_DIR_LIGHTS + MAX_POINT_LIGHTS + MAX_SPOT_LIGHTS ];\r\n    vec3 lightColor[ MAX_DIR_LIGHTS + MAX_POINT_LIGHTS + MAX_SPOT_LIGHTS ];\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n    for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\r\n\r\n        vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n        lightDirection[i] = normalize( lDirection.xyz );\r\n        lightColor[i] = SRGBToLinear(directionalLightColor[ i ]);\r\n    }\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n    for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n        vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n        vec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n        lightDirection[MAX_DIR_LIGHTS + i] = normalize( lVector );\r\n        float lDistance = 1.0;\r\n        if ( pointLightDistance[ i ] > 0.0 )\r\n            lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n        lightColor[MAX_DIR_LIGHTS + i] = SRGBToLinear(pointLightColor[ i ]) * lDistance;\r\n    }\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n    for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n        vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n        vec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n        lightDirection[MAX_DIR_LIGHTS + MAX_POINT_LIGHTS + i] = normalize( lVector );\r\n        float lDistance = 1.0;\r\n        if ( spotLightDistance[ i ] > 0.0 )\r\n            lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n        float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n        if ( spotEffect > spotLightAngleCos[ i ] )\r\n            spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\r\n        lightColor[MAX_DIR_LIGHTS + MAX_POINT_LIGHTS + i] = SRGBToLinear(spotLightColor[ i ]) * lDistance * spotEffect;\r\n    }\r\n#endif\r\n\r\n    for( int i = 0; i < MAX_DIR_LIGHTS + MAX_POINT_LIGHTS + MAX_SPOT_LIGHTS; i ++ ) {\r\n        vec3 L = lightDirection[i];\r\n\r\n\r\n\r\n\r\n        float NdotL = max(0.0, dot(N, L));\r\n        vec3 H = normalize(L + V);\r\n        float NdotH = dot(N, H);\r\n        float VdotH = dot(V, H);\r\n        float Hu = dot(H, Tu);\r\n        float Hv = dot(H, Tv);\r\n        vec3 Hlocal = vec3(Hu, Hv, NdotH);\r\n#if defined(PRISMLAYERED)\r\n        float N2dotL = dot(N2, L);\r\n        float N2dotH = dot(N2, H);\r\n        vec3 Hlocal2 = vec3(Hu, Hv, N2dotH);\r\n#endif\r\n        vec3 brdf = lightColor[i] * \r\n#if defined(PRISMOPAQUE)\r\n            BRDF_Opaque(Hlocal, NdotL, NdotH, NdotV, VdotH,\r\n                    surfaceAlbedo, surfaceRoughness, surfaceAnisotropy, surfaceRotation,\r\n                    opaqueF0, opaqueAlbedo);\r\n#elif defined(PRISMMETAL)\r\n        BRDF_Metal(Hlocal, NdotL, NdotH, NdotV, VdotH, \r\n                surfaceAlbedo, surfaceRoughness, surfaceAnisotropy, surfaceRotation, \r\n                metalF0);\r\n#elif defined(PRISMLAYERED)\r\n        BRDF_Layered(Hlocal, NdotL, NdotH, NdotV, VdotH, Hlocal2, N2dotL, N2dotH, N2dotV,\r\n                surfaceAlbedo, surfaceRoughness, surfaceAnisotropy, surfaceRotation,\r\n                layeredF0, layeredDiffuse, layeredRoughness, layeredAnisotropy,\r\n                layeredRotation, bottom_f0, layeredFraction);\r\n#elif defined(PRISMTRANSPARENT)\r\n        BRDF_Transparent(Hlocal, NdotL, NdotH, NdotV, VdotH, surfaceAlbedo, surfaceRoughness, surfaceAnisotropy, surfaceRotation);\r\n#elif defined(PRISMWOOD)\r\n        BRDF_Wood(Hlocal, NdotL, NdotH, NdotV, VdotH, surfaceAlbedo, surfaceRoughness, woodDiffuse);\r\n#endif\r\n        outRadianceLight += max(vec3(0.0), brdf);\r\n    }\r\n#endif\r\n\r\n\r\n    float opacity = 1.0;\r\n\r\n    vec3 outRadianceEnv = vec3(0.0);\r\n#if defined( USE_ENVMAP )\r\n\r\n    outRadianceEnv =\r\n#if defined(PRISMOPAQUE)\r\n        Environment_Opaque(N, V, clamp(NdotV, 0.0, 1.0), surfaceAlbedo, surfaceRoughness,\r\n                opaqueF0, opaqueAlbedo, surfaceAnisotropy, surfaceRotation, Tu, Tv);\r\n#elif defined(PRISMMETAL)\r\n    Environment_Metal(N, V, clamp(NdotV, 0.0, 1.0), surfaceAlbedo, surfaceRoughness, metalF0, surfaceAnisotropy, surfaceRotation, Tu, Tv);\r\n#elif defined(PRISMLAYERED)\r\n    Environment_Layered(N, V, clamp(NdotV, 0.0, 1.0), N2, clamp(N2dotV, 0.0, 1.0), surfaceAlbedo, surfaceRoughness,\r\n            layeredF0, surfaceAnisotropy, surfaceRotation, Tu, Tv, layeredDiffuse, layeredRoughness, layeredAnisotropy,\r\n            layeredRotation, bottom_f0, layeredFraction);\r\n#elif defined(PRISMTRANSPARENT)\r\n    Environment_Transparent(N, V, clamp(NdotV, 0.0, 1.0), surfaceAlbedo, surfaceRoughness, surfaceAnisotropy, surfaceRotation, Tu, Tv);\r\n#elif defined(PRISMWOOD)\r\n    Environment_Wood(N, V, clamp(NdotV, 0.0, 1.0), surfaceAlbedo, surfaceRoughness, woodDiffuse, surfaceAnisotropy, surfaceRotation, Tu, Tv);\r\n#endif\r\n#endif\r\n\r\n    float surface_cutout = 1.0;\r\n#prism_sample_texture<surface_cutout, surface_cutout, true, false>\r\n#if defined( USE_SURFACE_CUTOUT_MAP )\r\n    if(surface_cutout < 0.01) discard;\r\n#endif\r\n\r\n    gl_FragColor = vec4( outRadianceLight + outRadianceEnv, opacity*surface_cutout );\r\n\r\n#if TONEMAP_OUTPUT == 1\r\n    gl_FragColor.xyz = toneMapCanonOGS_WithGamma_WithColorPerserving(exposureBias * gl_FragColor.xyz);\r\n#elif TONEMAP_OUTPUT == 2\r\n    gl_FragColor.xyz = toneMapCanonFilmic_WithGamma(exposureBias * gl_FragColor.xyz);\r\n#endif\r\n\r\n\r\n#ifdef USE_FOG\r\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\r\n    float fogFactor = smoothstep( fogNear, fogFar, depth );\r\n    gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\r\n#endif\r\n\r\n#if defined(PRISMTRANSPARENT)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    float fsLevel = max( gl_FragColor.r, gl_FragColor.g );\r\n    fsLevel = max( gl_FragColor.b, fsLevel );\r\n    gl_FragColor = vec4( gl_FragColor.r/fsLevel, gl_FragColor.g/fsLevel, gl_FragColor.b/fsLevel, fsLevel );\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    float transLevel = min( transparent_color.r, transparent_color.g );\r\n    transLevel = min( transparent_color.b, transLevel );\r\n\r\n\r\n\r\n    transLevel = min( (1.0-surface_roughness), transLevel );\r\n\r\n\r\n\r\n\r\n    float transAlpha = (1.0-transLevel)*0.4 + surface_roughness*0.55;\r\n\r\n\r\n\r\n\r\n\r\n    vec3 tr_g_color = sqrt(transparent_color);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec4 transColor = vec4( 0.5 * vec3(tr_g_color), transAlpha );\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    float strength = 1.0 - (1.0-fsLevel)*(1.0-fsLevel);\r\n\r\n\r\n\r\n\r\n\r\n    gl_FragColor = mix( transColor, gl_FragColor, strength );\r\n\r\n\r\n\r\n\r\n    if ( gl_FragColor.a < 0.05 ) {\r\n        gl_FragColor.a = 0.05;\r\n    }\r\n\r\n\r\n    gl_FragColor.a *= surface_cutout;\r\n    \r\n\r\n    if (transparent_ior == 1.0 && tr_g_color == vec3(1.0,1.0,1.0)) {\r\n\r\n\r\n        gl_FragColor.a = 0.0;\r\n    }\r\n#endif\r\n\r\n\r\n#include<theming_frag>\r\n#include<final_frag>\r\n}\r\n";

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var webglprogram = __webpack_require__(87);
	var shadowmap = __webpack_require__(88);
	var RenderBatch = __webpack_require__(76);

	/**
	                                                       * @author supereggbert / http://www.paulbrunt.co.uk/
	                                                       * @author mrdoob / http://mrdoob.com/
	                                                       * @author alteredq / http://alteredqualia.com/
	                                                       * @author szimek / https://github.com/szimek/
	                                                       * @author stanevt -- Modified for Autodesk LMV web viewer
	                                                       * @constructor
	                                                       */
	var WebGLRenderer = function WebGLRenderer(parameters) {
			THREE.log('THREE.WebGLRenderer', THREE.REVISION);

			parameters = parameters || {};

			var _canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElement('canvas'),

			pixelRatio = window.devicePixelRatio || 1,

			_precisionVertex = parameters.precision !== undefined ? parameters.precision : 'highp',
			_precisionFragment = _precisionVertex,

			_alpha = parameters.alpha !== undefined ? parameters.alpha : false,
			_premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true,
			_antialias = parameters.antialias !== undefined ? parameters.antialias : false,
			_stencil = parameters.stencil !== undefined ? parameters.stencil : true,
			_preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : true, //change it to true for the screen capture api
			_logarithmicDepthBuffer = parameters.logarithmicDepthBuffer !== undefined ? parameters.logarithmicDepthBuffer : false,


			_clearColor = new THREE.Color(0x000000),
			_clearAlpha = 0;

			// Firefox on Mac OSX reports it can do MRT, but it actually does not work in our case,
			// so we have to detect this case manually.
			var _blockMRT = window.navigator.userAgent.indexOf("Firefox") != -1 &&
			window.navigator.userAgent.indexOf("Mac OS") != -1;

			var lights = [];
			var _webglObjects = {};
			var _webglObjectsImmediate = [];
			var _objectModelViewMatrix = new THREE.Matrix4();
			var _objectNormalMatrix = new THREE.Matrix3();


			var opaqueObjects = [];
			var transparentObjects = [];


			// public properties

			this.domElement = _canvas;
			this.context = null;

			// clearing

			this.autoClear = true;
			this.autoClearColor = true;
			this.autoClearDepth = true;
			this.autoClearStencil = true;

			// scene graph

			this.sortObjects = true;

			// physically based shading

			this.gammaInput = false;
			this.gammaOutput = false;

			// morphs

			this.maxMorphTargets = 8;
			this.maxMorphNormals = 4;

			// flags

			this.autoScaleCubemaps = true;

			// info

			this.info = {

					memory: {

							programs: 0,
							geometries: 0,
							textures: 0 },



					render: {

							calls: 0,
							vertices: 0,
							faces: 0,
							points: 0 } };





			// internal properties

			var _this = this,

			_programs = [],

			// internal state cache

			_currentProgram = null,
			_currentFramebuffer = null,
			_currentMaterialId = -1,
			_currentCamera = null,

			_currentGeometryProgram = '',

			_usedTextureUnits = 0,

			// GL state cache

			_viewportX = 0,
			_viewportY = 0,
			_viewportWidth = _canvas.width,
			_viewportHeight = _canvas.height,
			_currentWidth = 0,
			_currentHeight = 0,

			_dynamicBuffers = {}, //gl buffers used for streaming draw

			// frustum

			_frustum = new THREE.Frustum(),

			// camera matrices cache

			_projScreenMatrix = new THREE.Matrix4(),
			_viewInverseEnv = new THREE.Matrix4(),

			_vector3 = new THREE.Vector3(),

			// light arrays cache

			_direction = new THREE.Vector3(),

			_lightsNeedUpdate = true,

			_lights = {

					ambient: [0, 0, 0],
					directional: { length: 0, colors: [], positions: [] },
					point: { length: 0, colors: [], positions: [], distances: [] },
					spot: { length: 0, colors: [], positions: [], distances: [], directions: [], anglesCos: [], exponents: [] },
					hemi: { length: 0, skyColors: [], groundColors: [], positions: [] } };



			// initialize

			var _gl;

			var _glExtensionDrawBuffers;
			var _glExtensionInstancedArrays;
			var _glExtensionVAO;

			try {

					var attributes = {
							alpha: _alpha,
							premultipliedAlpha: _premultipliedAlpha,
							antialias: _antialias,
							stencil: _stencil,
							preserveDrawingBuffer: _preserveDrawingBuffer };


					_gl = _canvas.getContext('webgl', attributes) || _canvas.getContext('experimental-webgl', attributes);

					if (_gl === null) {

							if (_canvas.getContext('webgl') !== null) {

									throw 'Error creating WebGL context with your selected attributes.';

							} else {

									throw 'Error creating WebGL context.';

							}

					}

					//LMV-1914: lower fragment precision for low-end mobile devices (Android)
					var highp = _gl.getShaderPrecisionFormat(_gl.FRAGMENT_SHADER, _gl.HIGH_FLOAT);
					if (highp.precision == 0) _precisionFragment = 'mediump';

					_gl = globals.rescueFromPolymer(_gl);

					_canvas.addEventListener('webglcontextlost', function (event) {

							event.preventDefault();

							resetGLState();
							setDefaultGLState();

							_webglObjects = {};

					}, false);

			} catch (error) {

					THREE.error(error);
					return;

			}

			var state = new THREE.WebGLState(_gl, paramThreeToGL);

			if (_gl.getShaderPrecisionFormat === undefined) {

					_gl.getShaderPrecisionFormat = function () {

							return {
									"rangeMin": 1,
									"rangeMax": 1,
									"precision": 1 };


					};
			}

			var extensions = new THREE.WebGLExtensions(_gl);

			//We know we are going to be using some extensions for sure
			extensions.get('OES_texture_float');
			extensions.get('OES_texture_float_linear');
			extensions.get('OES_texture_half_float');
			extensions.get('OES_texture_half_float_linear');
			extensions.get('OES_standard_derivatives');
			extensions.get('EXT_shader_texture_lod');
			extensions.get('EXT_texture_filter_anisotropic');
			extensions.get('WEBGL_compressed_texture_s3tc');

			_glExtensionDrawBuffers = extensions.get('WEBGL_draw_buffers');
			_glExtensionInstancedArrays = extensions.get('ANGLE_instanced_arrays');
			_glExtensionVAO = extensions.get('OES_vertex_array_object');


			if (_logarithmicDepthBuffer) {

					extensions.get('EXT_frag_depth');

			}

			var glClearColor = function glClearColor(r, g, b, a) {

					if (_premultipliedAlpha === true) {

							r *= a;g *= a;b *= a;

					}

					_gl.clearColor(r, g, b, a);

			};

			var setDefaultGLState = function setDefaultGLState() {

					_gl.clearColor(0, 0, 0, 1);
					_gl.clearDepth(1);
					_gl.clearStencil(0);

					_gl.enable(_gl.DEPTH_TEST);
					_gl.depthFunc(_gl.LEQUAL);

					_gl.frontFace(_gl.CCW);
					_gl.cullFace(_gl.BACK);
					_gl.enable(_gl.CULL_FACE);

					_gl.enable(_gl.BLEND);
					_gl.blendEquation(_gl.FUNC_ADD);
					_gl.blendFunc(_gl.SRC_ALPHA, _gl.ONE_MINUS_SRC_ALPHA);

					_gl.viewport(_viewportX, _viewportY, _viewportWidth, _viewportHeight);

					glClearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);

			};

			var resetGLState = function resetGLState() {

					_currentProgram = null;
					_currentCamera = null;

					_currentGeometryProgram = '';
					_currentMaterialId = -1;

					_lightsNeedUpdate = true;

					state.reset();
					state.disableUnusedAttributes();

			};


			setDefaultGLState();

			this.context = _gl;
			this.state = state;

			// GPU capabilities

			var _maxTextures = _gl.getParameter(_gl.MAX_TEXTURE_IMAGE_UNITS);
			var _maxVertexTextures = _gl.getParameter(_gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
			var _maxTextureSize = _gl.getParameter(_gl.MAX_TEXTURE_SIZE);
			var _maxCubemapSize = _gl.getParameter(_gl.MAX_CUBE_MAP_TEXTURE_SIZE);

			var _supportsVertexTextures = _maxVertexTextures > 0;
			// not used, though used in three.js's version:
			//var _supportsBoneTextures = _supportsVertexTextures && extensions.get( 'OES_texture_float' );


			var _vertexShaderPrecisionHighpFloat = _gl.getShaderPrecisionFormat(_gl.VERTEX_SHADER, _gl.HIGH_FLOAT);
			var _vertexShaderPrecisionMediumpFloat = _gl.getShaderPrecisionFormat(_gl.VERTEX_SHADER, _gl.MEDIUM_FLOAT);
			//var _vertexShaderPrecisionLowpFloat = _gl.getShaderPrecisionFormat( _gl.VERTEX_SHADER, _gl.LOW_FLOAT );

			var _fragmentShaderPrecisionHighpFloat = _gl.getShaderPrecisionFormat(_gl.FRAGMENT_SHADER, _gl.HIGH_FLOAT);
			var _fragmentShaderPrecisionMediumpFloat = _gl.getShaderPrecisionFormat(_gl.FRAGMENT_SHADER, _gl.MEDIUM_FLOAT);
			//var _fragmentShaderPrecisionLowpFloat = _gl.getShaderPrecisionFormat( _gl.FRAGMENT_SHADER, _gl.LOW_FLOAT );


			var getCompressedTextureFormats = function () {

					var array;

					return function () {

							if (array !== undefined) {

									return array;

							}

							array = [];

							if (extensions.get('WEBGL_compressed_texture_pvrtc') || extensions.get('WEBGL_compressed_texture_s3tc')) {

									var formats = _gl.getParameter(_gl.COMPRESSED_TEXTURE_FORMATS);

									for (var i = 0; i < formats.length; i++) {

											array.push(formats[i]);

									}

							}

							return array;

					};

			}();


			// clamp precision to maximum available

			var highpAvailable = _vertexShaderPrecisionHighpFloat.precision > 0;
			var mediumpAvailable = _vertexShaderPrecisionMediumpFloat.precision > 0;

			if (_precisionVertex === "highp" && !highpAvailable) {

					if (mediumpAvailable) {

							_precisionVertex = "mediump";
							THREE.warn("WebGLRenderer: highp not supported, using mediump");

					} else {

							_precisionVertex = "lowp";
							THREE.warn("WebGLRenderer: highp and mediump not supported, using lowp");

					}

			}

			if (_precisionVertex === "mediump" && !mediumpAvailable) {

					_precisionVertex = "lowp";
					THREE.warn("WebGLRenderer: mediump not supported, using lowp");

			}

			highpAvailable = _fragmentShaderPrecisionHighpFloat.precision > 0;
			mediumpAvailable = _fragmentShaderPrecisionMediumpFloat.precision > 0;

			if (_precisionFragment === "highp" && !highpAvailable) {

					if (mediumpAvailable) {

							_precisionFragment = "mediump";
							THREE.warn("WebGLRenderer: highp not supported, using mediump");

					} else {

							_precisionFragment = "lowp";
							THREE.warn("WebGLRenderer: highp and mediump not supported, using lowp");

					}

			}

			if (_precisionFragment === "mediump" && !mediumpAvailable) {

					_precisionFragment = "lowp";
					THREE.warn("WebGLRenderer: mediump not supported, using lowp");

			}



			// API

			this.getContext = function () {

					return _gl;

			};

			this.forceContextLoss = function () {

					extensions.get('WEBGL_lose_context').loseContext();

			};

			this.supportsVertexTextures = function () {

					return _supportsVertexTextures;

			};

			this.supportsFloatTextures = function () {

					return extensions.get('OES_texture_float');

			};

			this.supportsHalfFloatTextures = function () {

					return extensions.get('OES_texture_half_float_linear');

			};

			this.supportsStandardDerivatives = function () {

					return extensions.get('OES_standard_derivatives');

			};

			this.supportsCompressedTextureS3TC = function () {

					return extensions.get('WEBGL_compressed_texture_s3tc');

			};

			this.supportsMRT = function () {
					return !_blockMRT && _glExtensionDrawBuffers;
			};

			this.supportsInstancedArrays = function () {
					return !!_glExtensionInstancedArrays;
			};

			this.supportsBlendMinMax = function () {

					return extensions.get('EXT_blend_minmax');

			};

			this.getMaxAnisotropy = function () {

					var value;

					return function () {

							if (value !== undefined) {

									return value;

							}

							var extension = extensions.get('EXT_texture_filter_anisotropic');

							value = extension !== null ? _gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;

							return value;

					};

			}();

			this.getPixelRatio = function () {

					return pixelRatio;

			};

			this.setPixelRatio = function (value) {

					pixelRatio = value;

			};

			this.setSize = function (width, height, updateStyle) {

					_canvas.width = width * pixelRatio;
					_canvas.height = height * pixelRatio;

					if (updateStyle !== false) {

							_canvas.style.width = width + 'px';
							_canvas.style.height = height + 'px';

					}

					this.setViewport(0, 0, width, height);

			};

			this.setViewport = function (x, y, width, height) {

					_viewportX = x * pixelRatio;
					_viewportY = y * pixelRatio;

					_viewportWidth = width * pixelRatio;
					_viewportHeight = height * pixelRatio;

					_gl.viewport(_viewportX, _viewportY, _viewportWidth, _viewportHeight);

			};

			var _viewportStack = [];

			/** Push current viewport to viewport stack, so that it can be recovered by popViewport later. */
			this.pushViewport = function () {
					_viewportStack.push(_viewportX);
					_viewportStack.push(_viewportY);
					_viewportStack.push(_viewportWidth);
					_viewportStack.push(_viewportHeight);
			};

			/** Recover previously pushed viewport.*/
			this.popViewport = function () {
					var index = _viewportStack.length - 4;
					_viewportX = _viewportStack[index];
					_viewportY = _viewportStack[index + 1];
					_viewportWidth = _viewportStack[index + 2];
					_viewportHeight = _viewportStack[index + 3];
					_gl.viewport(_viewportX, _viewportY, _viewportWidth, _viewportHeight);

					_viewportStack.length = index;
			};

			this.setScissor = function (x, y, width, height) {

					_gl.scissor(
					x * pixelRatio,
					y * pixelRatio,
					width * pixelRatio,
					height * pixelRatio);


			};

			this.enableScissorTest = function (enable) {

					if (enable) {
							_gl.enable(_gl.SCISSOR_TEST);
					} else {
							_gl.disable(_gl.SCISSOR_TEST);
					}

			};

			// Clearing

			this.getClearColor = function () {

					return _clearColor;

			};

			this.setClearColor = function (color, alpha) {

					_clearColor.set(color);
					_clearAlpha = alpha !== undefined ? alpha : 1;

					glClearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);

			};

			this.getClearAlpha = function () {

					return _clearAlpha;

			};

			this.setClearAlpha = function (alpha) {

					_clearAlpha = alpha;

					glClearColor(_clearColor.r, _clearColor.g, _clearColor.b, _clearAlpha);

			};

			this.clear = function (color, depth, stencil) {

					var bits = 0;

					if (color === undefined || color) bits |= _gl.COLOR_BUFFER_BIT;
					if (depth === undefined || depth) bits |= _gl.DEPTH_BUFFER_BIT;
					if (stencil === undefined || stencil) bits |= _gl.STENCIL_BUFFER_BIT;

					_gl.clear(bits);

			};

			this.clearColor = function () {

					_gl.clear(_gl.COLOR_BUFFER_BIT);

			};

			this.clearDepth = function () {

					_gl.clear(_gl.DEPTH_BUFFER_BIT);

			};

			this.clearStencil = function () {

					_gl.clear(_gl.STENCIL_BUFFER_BIT);

			};

			this.clearTarget = function (renderTarget, color, depth, stencil) {

					this.setRenderTarget(renderTarget);
					this.clear(color, depth, stencil);

			};


			// Reset

			this.resetGLState = resetGLState;

			// Internal functions

			// Buffer allocation

			function createLineBuffers(geometry) {

					geometry.__webglVertexBuffer = _gl.createBuffer();
					geometry.__webglColorBuffer = _gl.createBuffer();
					geometry.__webglLineDistanceBuffer = _gl.createBuffer();

					_this.info.memory.geometries++;
			}

			function createPointCloudBuffers(geometry) {

					geometry.__webglVertexBuffer = _gl.createBuffer();
					geometry.__webglColorBuffer = _gl.createBuffer();

					_this.info.memory.geometries++;
			}

			function createMeshBuffers(geometryGroup) {

					geometryGroup.__webglVertexBuffer = _gl.createBuffer();
					geometryGroup.__webglNormalBuffer = _gl.createBuffer();
					geometryGroup.__webglTangentBuffer = _gl.createBuffer();
					geometryGroup.__webglColorBuffer = _gl.createBuffer();
					geometryGroup.__webglUVBuffer = _gl.createBuffer();
					geometryGroup.__webglUV2Buffer = _gl.createBuffer();

					geometryGroup.__webglSkinIndicesBuffer = _gl.createBuffer();
					geometryGroup.__webglSkinWeightsBuffer = _gl.createBuffer();

					geometryGroup.__webglFaceBuffer = _gl.createBuffer();
					geometryGroup.__webglLineBuffer = _gl.createBuffer();

					_this.info.memory.geometries++;

			}

			// Events

			var onObjectRemoved = function onObjectRemoved(event) {

					var object = event.target;

					object.traverse(function (child) {

							child.removeEventListener('remove', onObjectRemoved);

							removeObject(child);

					});

			};

			var onGeometryDispose = function onGeometryDispose(event) {

					var geometry = event.target;

					geometry.removeEventListener('dispose', onGeometryDispose);

					deallocateGeometry(geometry);

			};

			var onTextureDispose = function onTextureDispose(event) {

					var texture = event.target;

					texture.removeEventListener('dispose', onTextureDispose);

					deallocateTexture(texture);

					_this.info.memory.textures--;


			};

			var onRenderTargetDispose = function onRenderTargetDispose(event) {

					var renderTarget = event.target;

					renderTarget.removeEventListener('dispose', onRenderTargetDispose);

					deallocateRenderTarget(renderTarget);

					_this.info.memory.textures--;

			};

			var onMaterialDispose = function onMaterialDispose(event) {

					var material = event.target;

					material.removeEventListener('dispose', onMaterialDispose);

					deallocateMaterial(material);

			};

			// Buffer deallocation

			var deleteBuffers = function deleteBuffers(geometry) {

					if (geometry.__webglVertexBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglVertexBuffer);geometry.__webglVertexBuffer = undefined;}
					if (geometry.__webglNormalBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglNormalBuffer);geometry.__webglNormalBuffer = undefined;}
					if (geometry.__webglTangentBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglTangentBuffer);geometry.__webglTangentBuffer = undefined;}
					if (geometry.__webglColorBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglColorBuffer);geometry.__webglColorBuffer = undefined;}
					if (geometry.__webglUVBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglUVBuffer);geometry.__webglUVBuffer = undefined;}
					if (geometry.__webglUV2Buffer !== undefined) {_gl.deleteBuffer(geometry.__webglUV2Buffer);geometry.__webglUV2Buffer = undefined;}

					if (geometry.__webglSkinIndicesBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglSkinIndicesBuffer);geometry.__webglSkinIndicesBuffer = undefined;}
					if (geometry.__webglSkinWeightsBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglSkinWeightsBuffer);geometry.__webglSkinWeightsBuffer = undefined;}

					if (geometry.__webglFaceBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglFaceBuffer);geometry.__webglFaceBuffer = undefined;}
					if (geometry.__webglLineBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglLineBuffer);geometry.__webglLineBuffer = undefined;}

					if (geometry.__webglLineDistanceBuffer !== undefined) {_gl.deleteBuffer(geometry.__webglLineDistanceBuffer);geometry.__webglLineDistanceBuffer = undefined;}
					// custom attributes

					if (geometry.__webglCustomAttributesList !== undefined) {

							for (var name in geometry.__webglCustomAttributesList) {

									_gl.deleteBuffer(geometry.__webglCustomAttributesList[name].buffer);

							}
							geometry.__webglCustomAttributesList = undefined;
					}

					_this.info.memory.geometries--;

			};


			var deallocateGeometry = function deallocateGeometry(geometry) {

					geometry.__webglInit = undefined;

					var i, len, m, ml;

					if (geometry instanceof THREE.BufferGeometry) {

							//[Firefly] Delete interleaved buffer
							if (geometry.vbbuffer !== undefined) {
									_gl.deleteBuffer(geometry.vbbuffer);
									geometry.vbbuffer = undefined;
							}

							//[Firefly] Delete index buffer (if not stored in vertex attribute object)
							if (geometry.ibbuffer !== undefined) {
									_gl.deleteBuffer(geometry.ibbuffer);
									geometry.ibbuffer = undefined;
							}

							//[Firefly] Delete vertex array objects.
							if (geometry.vaos) {
									for (i = 0; i < geometry.vaos.length; i++) {
											_glExtensionVAO.deleteVertexArrayOES(geometry.vaos[i].vao);
									}
									geometry.vaos = undefined;
							}

							var attributes = geometry.attributes;

							for (var key in attributes) {

									if (attributes[key].buffer !== undefined) {

											_gl.deleteBuffer(attributes[key].buffer);
											attributes[key].buffer = undefined;
									}

							}

							_this.info.memory.geometries--;

					} else {

							var geometryGroupsList = geometryGroups[geometry.id];

							if (geometryGroupsList !== undefined) {

									for (i = 0, len = geometryGroupsList.length; i < len; i++) {

											var geometryGroup = geometryGroupsList[i];

											if (geometryGroup.numMorphTargets !== undefined) {

													for (m = 0, ml = geometryGroup.numMorphTargets; m < ml; m++) {

															_gl.deleteBuffer(geometryGroup.__webglMorphTargetsBuffers[m]);

													}

													delete geometryGroup.__webglMorphTargetsBuffers;

											}

											if (geometryGroup.numMorphNormals !== undefined) {

													for (m = 0, ml = geometryGroup.numMorphNormals; m < ml; m++) {

															_gl.deleteBuffer(geometryGroup.__webglMorphNormalsBuffers[m]);

													}

													delete geometryGroup.__webglMorphNormalsBuffers;

											}

											deleteBuffers(geometryGroup);

									}

									delete geometryGroups[geometry.id];

							} else {

									deleteBuffers(geometry);

							}

					}

			};

			this.deallocateGeometry = deallocateGeometry;

			var deallocateTexture = function deallocateTexture(texture) {

					if (texture.__webglTextureCube) {

							// cube texture

							_gl.deleteTexture(texture.__webglTextureCube);
							texture.__webglTextureCube = undefined;

					} else {

							// 2D texture

							if (!texture.__webglInit) return;

							_gl.deleteTexture(texture.__webglTexture);
							texture.__webglInit = undefined;
							texture.__webglTexture = undefined;
					}

			};

			var deallocateRenderTarget = function deallocateRenderTarget(renderTarget) {

					if (!renderTarget || !renderTarget.__webglTexture) return;

					_gl.deleteTexture(renderTarget.__webglTexture);

					_gl.deleteFramebuffer(renderTarget.__webglFramebuffer);
					_gl.deleteRenderbuffer(renderTarget.__webglRenderbuffer);

			};

			var deallocateMaterial = function deallocateMaterial(material) {

					var program = material.program.program;

					if (program === undefined) return;

					material.program = undefined;

					// only deallocate GL program if this was the last use of shared program
					// assumed there is only single copy of any program in the _programs list
					// (that's how it's constructed)

					var i, il, programInfo;
					var deleteProgram = false;

					for (i = 0, il = _programs.length; i < il; i++) {

							programInfo = _programs[i];

							if (programInfo.program === program) {

									programInfo.usedTimes--;

									if (programInfo.usedTimes === 0) {

											deleteProgram = true;

									}

									break;

							}

					}

					if (deleteProgram === true) {

							// avoid using array.splice, this is costlier than creating new array from scratch

							var newPrograms = [];

							for (i = 0, il = _programs.length; i < il; i++) {

									programInfo = _programs[i];

									if (programInfo.program !== program) {

											newPrograms.push(programInfo);

									}

							}

							_programs = newPrograms;

							_gl.deleteProgram(program);

							_this.info.memory.programs--;

					}

			};

			// Buffer initialization

			function initCustomAttributes(geometry, object) {

					var nvertices = geometry.vertices.length;

					var material = object.material;

					if (material.attributes) {

							if (geometry.__webglCustomAttributesList === undefined) {

									geometry.__webglCustomAttributesList = [];

							}

							for (var a in material.attributes) {

									var attribute = material.attributes[a];

									if (!attribute.__webglInitialized || attribute.createUniqueBuffers) {

											attribute.__webglInitialized = true;

											var size = 1; // "f" and "i"

											if (attribute.type === "v2") size = 2;else
											if (attribute.type === "v3") size = 3;else
											if (attribute.type === "v4") size = 4;else
											if (attribute.type === "c") size = 3;

											attribute.size = size;

											attribute.array = new Float32Array(nvertices * size);

											attribute.buffer = _gl.createBuffer();
											attribute.buffer.belongsToAttribute = a;

											attribute.needsUpdate = true;

									}

									geometry.__webglCustomAttributesList.push(attribute);

							}

					}

			}

			function initLineBuffers(geometry, object) {

					var nvertices = geometry.vertices.length;

					geometry.__vertexArray = new Float32Array(nvertices * 3);
					geometry.__colorArray = new Float32Array(nvertices * 3);
					geometry.__lineDistanceArray = new Float32Array(nvertices * 1);

					geometry.__webglLineCount = nvertices;

					initCustomAttributes(geometry, object);
			}

			function initPointCloudBuffers(geometry, object) {

					var nvertices = geometry.vertices.length;

					geometry.__vertexArray = new Float32Array(nvertices * 3);
					geometry.__colorArray = new Float32Array(nvertices * 3);

					geometry.__webglPointCount = nvertices;

					initCustomAttributes(geometry, object);
			}

			function initMeshBuffers(geometryGroup, object) {

					var geometry = object.geometry,
					faces3 = geometryGroup.faces3,

					nvertices = faces3.length * 3,
					ntris = faces3.length * 1,
					nlines = faces3.length * 3,

					material = getBufferMaterial(object, geometryGroup),

					uvType = bufferGuessUVType(material),
					normalType = bufferGuessNormalType(material),
					vertexColorType = bufferGuessVertexColorType(material);

					// THREE.log( "uvType", uvType, "normalType", normalType, "vertexColorType", vertexColorType, object, geometryGroup, material );

					geometryGroup.__vertexArray = new Float32Array(nvertices * 3);

					if (normalType) {

							geometryGroup.__normalArray = new Float32Array(nvertices * 3);

					}

					if (geometry.hasTangents) {

							geometryGroup.__tangentArray = new Float32Array(nvertices * 4);

					}

					if (vertexColorType) {

							geometryGroup.__colorArray = new Float32Array(nvertices * 3);

					}

					if (uvType) {

							if (geometry.faceVertexUvs.length > 0) {

									geometryGroup.__uvArray = new Float32Array(nvertices * 2);

							}

							if (geometry.faceVertexUvs.length > 1) {

									geometryGroup.__uv2Array = new Float32Array(nvertices * 2);

							}

					}

					if (object.geometry.skinWeights.length && object.geometry.skinIndices.length) {

							geometryGroup.__skinIndexArray = new Float32Array(nvertices * 4);
							geometryGroup.__skinWeightArray = new Float32Array(nvertices * 4);

					}

					var UintArray = extensions.get('OES_element_index_uint') !== null && ntris > 21845 ? Uint32Array : Uint16Array; // 65535 / 3

					geometryGroup.__typeArray = UintArray;
					geometryGroup.__faceArray = new UintArray(ntris * 3);
					geometryGroup.__lineArray = new UintArray(nlines * 2);

					geometryGroup.__webglFaceCount = ntris * 3;
					geometryGroup.__webglLineCount = nlines * 2;


					// custom attributes

					if (material.attributes) {

							if (geometryGroup.__webglCustomAttributesList === undefined) {

									geometryGroup.__webglCustomAttributesList = [];

							}

							for (var a in material.attributes) {

									// Do a shallow copy of the attribute object so different geometryGroup chunks use different
									// attribute buffers which are correctly indexed in the setMeshBuffers function

									var originalAttribute = material.attributes[a];

									var attribute = {};

									for (var property in originalAttribute) {

											attribute[property] = originalAttribute[property];

									}

									if (!attribute.__webglInitialized || attribute.createUniqueBuffers) {

											attribute.__webglInitialized = true;

											var size = 1; // "f" and "i"

											if (attribute.type === "v2") size = 2;else
											if (attribute.type === "v3") size = 3;else
											if (attribute.type === "v4") size = 4;else
											if (attribute.type === "c") size = 3;

											attribute.size = size;

											attribute.array = new Float32Array(nvertices * size);

											attribute.buffer = _gl.createBuffer();
											attribute.buffer.belongsToAttribute = a;

											originalAttribute.needsUpdate = true;
											attribute.__original = originalAttribute;

									}

									geometryGroup.__webglCustomAttributesList.push(attribute);

							}

					}

					geometryGroup.__inittedArrays = true;

			}

			function getBufferMaterial(object, geometryGroup) {

					return object.material instanceof THREE.MeshFaceMaterial ?
					object.material.materials[geometryGroup.materialIndex] : object.material;

			}

			function materialNeedsSmoothNormals(material) {

					return material && material.shading !== undefined && material.shading === THREE.SmoothShading;

			}

			function bufferGuessNormalType(material) {

					// only MeshBasicMaterial and MeshDepthMaterial don't need normals

					if (material instanceof THREE.MeshBasicMaterial && !material.envMap || material instanceof THREE.MeshDepthMaterial) {

							return false;

					}

					if (materialNeedsSmoothNormals(material)) {

							return THREE.SmoothShading;

					} else {

							return THREE.FlatShading;

					}

			}

			function bufferGuessVertexColorType(material) {

					if (material.vertexColors) {

							return material.vertexColors;

					}

					return false;

			}

			function bufferGuessUVType(material) {

					// material must use some texture to require uvs

					if (material.map ||
					material.lightMap ||
					material.bumpMap ||
					material.normalMap ||
					material.specularMap ||
					material.alphaMap ||
					material instanceof THREE.ShaderMaterial) {

							return true;

					}

					return false;

			}


			// Buffer setting


			function setLineBuffers(geometry, hint) {

					var v,c,d,vertex,offset,color,

					vertices = geometry.vertices,
					colors = geometry.colors,
					lineDistances = geometry.lineDistances,

					vl = vertices.length,
					cl = colors.length,
					dl = lineDistances.length,

					vertexArray = geometry.__vertexArray,
					colorArray = geometry.__colorArray,
					lineDistanceArray = geometry.__lineDistanceArray,

					dirtyVertices = geometry.verticesNeedUpdate,
					dirtyColors = geometry.colorsNeedUpdate,
					dirtyLineDistances = geometry.lineDistancesNeedUpdate,

					customAttributes = geometry.__webglCustomAttributesList,

					i,il,
					ca,cal,value,
					customAttribute;

					if (dirtyVertices) {

							for (v = 0; v < vl; v++) {

									vertex = vertices[v];

									offset = v * 3;

									vertexArray[offset] = vertex.x;
									vertexArray[offset + 1] = vertex.y;
									vertexArray[offset + 2] = vertex.z;

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometry.__webglVertexBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, vertexArray, hint);

					}

					if (dirtyColors) {

							for (c = 0; c < cl; c++) {

									color = colors[c];

									offset = c * 3;

									colorArray[offset] = color.r;
									colorArray[offset + 1] = color.g;
									colorArray[offset + 2] = color.b;

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometry.__webglColorBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, colorArray, hint);

					}

					if (dirtyLineDistances) {

							for (d = 0; d < dl; d++) {

									lineDistanceArray[d] = lineDistances[d];

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometry.__webglLineDistanceBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, lineDistanceArray, hint);

					}

					if (customAttributes) {

							for (i = 0, il = customAttributes.length; i < il; i++) {

									customAttribute = customAttributes[i];

									if (customAttribute.needsUpdate && (
									customAttribute.boundTo === undefined ||
									customAttribute.boundTo === "vertices")) {

											offset = 0;

											cal = customAttribute.value.length;

											if (customAttribute.size === 1) {

													for (ca = 0; ca < cal; ca++) {

															customAttribute.array[ca] = customAttribute.value[ca];

													}

											} else if (customAttribute.size === 2) {

													for (ca = 0; ca < cal; ca++) {

															value = customAttribute.value[ca];

															customAttribute.array[offset] = value.x;
															customAttribute.array[offset + 1] = value.y;

															offset += 2;

													}

											} else if (customAttribute.size === 3) {

													if (customAttribute.type === "c") {

															for (ca = 0; ca < cal; ca++) {

																	value = customAttribute.value[ca];

																	customAttribute.array[offset] = value.r;
																	customAttribute.array[offset + 1] = value.g;
																	customAttribute.array[offset + 2] = value.b;

																	offset += 3;

															}

													} else {

															for (ca = 0; ca < cal; ca++) {

																	value = customAttribute.value[ca];

																	customAttribute.array[offset] = value.x;
																	customAttribute.array[offset + 1] = value.y;
																	customAttribute.array[offset + 2] = value.z;

																	offset += 3;

															}

													}

											} else if (customAttribute.size === 4) {

													for (ca = 0; ca < cal; ca++) {

															value = customAttribute.value[ca];

															customAttribute.array[offset] = value.x;
															customAttribute.array[offset + 1] = value.y;
															customAttribute.array[offset + 2] = value.z;
															customAttribute.array[offset + 3] = value.w;

															offset += 4;

													}

											}

											_gl.bindBuffer(_gl.ARRAY_BUFFER, customAttribute.buffer);
											_gl.bufferData(_gl.ARRAY_BUFFER, customAttribute.array, hint);

									}

							}

					}

			}

			function setPointCloudBuffers(geometry, hint) {

					var v,c,d,vertex,offset,color,

					vertices = geometry.vertices,
					colors = geometry.colors,

					vl = vertices.length,
					cl = colors.length,

					vertexArray = geometry.__vertexArray,
					colorArray = geometry.__colorArray,

					dirtyVertices = geometry.verticesNeedUpdate,
					dirtyColors = geometry.colorsNeedUpdate,

					customAttributes = geometry.__webglCustomAttributesList,

					i,il,
					ca,cal,value,
					customAttribute;

					if (dirtyVertices) {

							for (v = 0; v < vl; v++) {

									vertex = vertices[v];

									offset = v * 3;

									vertexArray[offset] = vertex.x;
									vertexArray[offset + 1] = vertex.y;
									vertexArray[offset + 2] = vertex.z;

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometry.__webglVertexBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, vertexArray, hint);

					}

					if (dirtyColors) {

							for (c = 0; c < cl; c++) {

									color = colors[c];

									offset = c * 3;

									colorArray[offset] = color.r;
									colorArray[offset + 1] = color.g;
									colorArray[offset + 2] = color.b;

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometry.__webglColorBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, colorArray, hint);

					}

					if (customAttributes) {

							for (i = 0, il = customAttributes.length; i < il; i++) {

									customAttribute = customAttributes[i];

									if (customAttribute.needsUpdate && (
									customAttribute.boundTo === undefined ||
									customAttribute.boundTo === "vertices")) {

											offset = 0;

											cal = customAttribute.value.length;

											if (customAttribute.size === 1) {

													for (ca = 0; ca < cal; ca++) {

															customAttribute.array[ca] = customAttribute.value[ca];

													}

											} else if (customAttribute.size === 2) {

													for (ca = 0; ca < cal; ca++) {

															value = customAttribute.value[ca];

															customAttribute.array[offset] = value.x;
															customAttribute.array[offset + 1] = value.y;

															offset += 2;

													}

											} else if (customAttribute.size === 3) {

													if (customAttribute.type === "c") {

															for (ca = 0; ca < cal; ca++) {

																	value = customAttribute.value[ca];

																	customAttribute.array[offset] = value.r;
																	customAttribute.array[offset + 1] = value.g;
																	customAttribute.array[offset + 2] = value.b;

																	offset += 3;

															}

													} else {

															for (ca = 0; ca < cal; ca++) {

																	value = customAttribute.value[ca];

																	customAttribute.array[offset] = value.x;
																	customAttribute.array[offset + 1] = value.y;
																	customAttribute.array[offset + 2] = value.z;

																	offset += 3;

															}

													}

											} else if (customAttribute.size === 4) {

													for (ca = 0; ca < cal; ca++) {

															value = customAttribute.value[ca];

															customAttribute.array[offset] = value.x;
															customAttribute.array[offset + 1] = value.y;
															customAttribute.array[offset + 2] = value.z;
															customAttribute.array[offset + 3] = value.w;

															offset += 4;

													}

											}

											_gl.bindBuffer(_gl.ARRAY_BUFFER, customAttribute.buffer);
											_gl.bufferData(_gl.ARRAY_BUFFER, customAttribute.array, hint);

									}

							}

					}

			}

			function setMeshBuffers(geometryGroup, object, hint, dispose, material) {

					if (!geometryGroup.__inittedArrays) {

							return;

					}

					var normalType = bufferGuessNormalType(material),
					vertexColorType = bufferGuessVertexColorType(material),
					uvType = bufferGuessUVType(material),

					needsSmoothNormals = normalType === THREE.SmoothShading;

					var f,fl,fi,face,
					vertexNormals,faceNormal,
					vertexColors,faceColor,
					vertexTangents,
					uv,uv2,v1,v2,v3,t1,t2,t3,
					c1,c2,c3,
					i,il,
					vn,uvi,uv2i,

					vertexIndex = 0,

					offset = 0,
					offset_uv = 0,
					offset_uv2 = 0,
					offset_face = 0,
					offset_normal = 0,
					offset_tangent = 0,
					offset_line = 0,
					offset_color = 0,
					offset_custom = 0,
					offset_customSrc = 0,

					value,

					vertexArray = geometryGroup.__vertexArray,
					uvArray = geometryGroup.__uvArray,
					uv2Array = geometryGroup.__uv2Array,
					normalArray = geometryGroup.__normalArray,
					tangentArray = geometryGroup.__tangentArray,
					colorArray = geometryGroup.__colorArray,

					customAttributes = geometryGroup.__webglCustomAttributesList,
					customAttribute,

					faceArray = geometryGroup.__faceArray,
					lineArray = geometryGroup.__lineArray,

					geometry = object.geometry, // this is shared for all chunks

					dirtyVertices = geometry.verticesNeedUpdate,
					dirtyElements = geometry.elementsNeedUpdate,
					dirtyUvs = geometry.uvsNeedUpdate,
					dirtyNormals = geometry.normalsNeedUpdate,
					dirtyTangents = geometry.tangentsNeedUpdate,
					dirtyColors = geometry.colorsNeedUpdate,

					vertices = geometry.vertices,
					chunk_faces3 = geometryGroup.faces3,
					obj_faces = geometry.faces,

					obj_uvs = geometry.faceVertexUvs[0],
					obj_uvs2 = geometry.faceVertexUvs[1];

					if (dirtyVertices) {

							for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

									face = obj_faces[chunk_faces3[f]];

									v1 = vertices[face.a];
									v2 = vertices[face.b];
									v3 = vertices[face.c];

									vertexArray[offset] = v1.x;
									vertexArray[offset + 1] = v1.y;
									vertexArray[offset + 2] = v1.z;

									vertexArray[offset + 3] = v2.x;
									vertexArray[offset + 4] = v2.y;
									vertexArray[offset + 5] = v2.z;

									vertexArray[offset + 6] = v3.x;
									vertexArray[offset + 7] = v3.y;
									vertexArray[offset + 8] = v3.z;

									offset += 9;

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglVertexBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, vertexArray, hint);

					}


					if (dirtyColors && vertexColorType) {

							for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

									face = obj_faces[chunk_faces3[f]];

									vertexColors = face.vertexColors;
									faceColor = face.color;

									if (vertexColors.length === 3 && vertexColorType === THREE.VertexColors) {

											c1 = vertexColors[0];
											c2 = vertexColors[1];
											c3 = vertexColors[2];

									} else {

											c1 = faceColor;
											c2 = faceColor;
											c3 = faceColor;

									}

									colorArray[offset_color] = c1.r;
									colorArray[offset_color + 1] = c1.g;
									colorArray[offset_color + 2] = c1.b;

									colorArray[offset_color + 3] = c2.r;
									colorArray[offset_color + 4] = c2.g;
									colorArray[offset_color + 5] = c2.b;

									colorArray[offset_color + 6] = c3.r;
									colorArray[offset_color + 7] = c3.g;
									colorArray[offset_color + 8] = c3.b;

									offset_color += 9;

							}

							if (offset_color > 0) {

									_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglColorBuffer);
									_gl.bufferData(_gl.ARRAY_BUFFER, colorArray, hint);

							}

					}

					if (dirtyTangents && geometry.hasTangents) {

							for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

									face = obj_faces[chunk_faces3[f]];

									vertexTangents = face.vertexTangents;

									t1 = vertexTangents[0];
									t2 = vertexTangents[1];
									t3 = vertexTangents[2];

									tangentArray[offset_tangent] = t1.x;
									tangentArray[offset_tangent + 1] = t1.y;
									tangentArray[offset_tangent + 2] = t1.z;
									tangentArray[offset_tangent + 3] = t1.w;

									tangentArray[offset_tangent + 4] = t2.x;
									tangentArray[offset_tangent + 5] = t2.y;
									tangentArray[offset_tangent + 6] = t2.z;
									tangentArray[offset_tangent + 7] = t2.w;

									tangentArray[offset_tangent + 8] = t3.x;
									tangentArray[offset_tangent + 9] = t3.y;
									tangentArray[offset_tangent + 10] = t3.z;
									tangentArray[offset_tangent + 11] = t3.w;

									offset_tangent += 12;

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglTangentBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, tangentArray, hint);

					}

					if (dirtyNormals && normalType) {

							for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

									face = obj_faces[chunk_faces3[f]];

									vertexNormals = face.vertexNormals;
									faceNormal = face.normal;

									if (vertexNormals.length === 3 && needsSmoothNormals) {

											for (i = 0; i < 3; i++) {

													vn = vertexNormals[i];

													normalArray[offset_normal] = vn.x;
													normalArray[offset_normal + 1] = vn.y;
													normalArray[offset_normal + 2] = vn.z;

													offset_normal += 3;

											}

									} else {

											for (i = 0; i < 3; i++) {

													normalArray[offset_normal] = faceNormal.x;
													normalArray[offset_normal + 1] = faceNormal.y;
													normalArray[offset_normal + 2] = faceNormal.z;

													offset_normal += 3;

											}

									}

							}

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglNormalBuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, normalArray, hint);

					}

					if (dirtyUvs && obj_uvs && uvType) {

							for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

									fi = chunk_faces3[f];

									uv = obj_uvs[fi];

									if (uv === undefined) continue;

									for (i = 0; i < 3; i++) {

											uvi = uv[i];

											uvArray[offset_uv] = uvi.x;
											uvArray[offset_uv + 1] = uvi.y;

											offset_uv += 2;

									}

							}

							if (offset_uv > 0) {

									_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglUVBuffer);
									_gl.bufferData(_gl.ARRAY_BUFFER, uvArray, hint);

							}

					}

					if (dirtyUvs && obj_uvs2 && uvType) {

							for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

									fi = chunk_faces3[f];

									uv2 = obj_uvs2[fi];

									if (uv2 === undefined) continue;

									for (i = 0; i < 3; i++) {

											uv2i = uv2[i];

											uv2Array[offset_uv2] = uv2i.x;
											uv2Array[offset_uv2 + 1] = uv2i.y;

											offset_uv2 += 2;

									}

							}

							if (offset_uv2 > 0) {

									_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglUV2Buffer);
									_gl.bufferData(_gl.ARRAY_BUFFER, uv2Array, hint);

							}

					}

					if (dirtyElements) {

							for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

									faceArray[offset_face] = vertexIndex;
									faceArray[offset_face + 1] = vertexIndex + 1;
									faceArray[offset_face + 2] = vertexIndex + 2;

									offset_face += 3;

									lineArray[offset_line] = vertexIndex;
									lineArray[offset_line + 1] = vertexIndex + 1;

									lineArray[offset_line + 2] = vertexIndex;
									lineArray[offset_line + 3] = vertexIndex + 2;

									lineArray[offset_line + 4] = vertexIndex + 1;
									lineArray[offset_line + 5] = vertexIndex + 2;

									offset_line += 6;

									vertexIndex += 3;

							}

							_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglFaceBuffer);
							_gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, faceArray, hint);

							_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglLineBuffer);
							_gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, lineArray, hint);

					}

					if (customAttributes) {

							for (i = 0, il = customAttributes.length; i < il; i++) {

									customAttribute = customAttributes[i];

									if (!customAttribute.__original.needsUpdate) continue;

									offset_custom = 0;
									offset_customSrc = 0;

									if (customAttribute.size === 1) {

											if (customAttribute.boundTo === undefined || customAttribute.boundTo === "vertices") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															face = obj_faces[chunk_faces3[f]];

															customAttribute.array[offset_custom] = customAttribute.value[face.a];
															customAttribute.array[offset_custom + 1] = customAttribute.value[face.b];
															customAttribute.array[offset_custom + 2] = customAttribute.value[face.c];

															offset_custom += 3;

													}

											} else if (customAttribute.boundTo === "faces") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															value = customAttribute.value[chunk_faces3[f]];

															customAttribute.array[offset_custom] = value;
															customAttribute.array[offset_custom + 1] = value;
															customAttribute.array[offset_custom + 2] = value;

															offset_custom += 3;

													}

											}

									} else if (customAttribute.size === 2) {

											if (customAttribute.boundTo === undefined || customAttribute.boundTo === "vertices") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															face = obj_faces[chunk_faces3[f]];

															v1 = customAttribute.value[face.a];
															v2 = customAttribute.value[face.b];
															v3 = customAttribute.value[face.c];

															customAttribute.array[offset_custom] = v1.x;
															customAttribute.array[offset_custom + 1] = v1.y;

															customAttribute.array[offset_custom + 2] = v2.x;
															customAttribute.array[offset_custom + 3] = v2.y;

															customAttribute.array[offset_custom + 4] = v3.x;
															customAttribute.array[offset_custom + 5] = v3.y;

															offset_custom += 6;

													}

											} else if (customAttribute.boundTo === "faces") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															value = customAttribute.value[chunk_faces3[f]];

															v1 = value;
															v2 = value;
															v3 = value;

															customAttribute.array[offset_custom] = v1.x;
															customAttribute.array[offset_custom + 1] = v1.y;

															customAttribute.array[offset_custom + 2] = v2.x;
															customAttribute.array[offset_custom + 3] = v2.y;

															customAttribute.array[offset_custom + 4] = v3.x;
															customAttribute.array[offset_custom + 5] = v3.y;

															offset_custom += 6;

													}

											}

									} else if (customAttribute.size === 3) {

											var pp;

											if (customAttribute.type === "c") {

													pp = ["r", "g", "b"];

											} else {

													pp = ["x", "y", "z"];

											}

											if (customAttribute.boundTo === undefined || customAttribute.boundTo === "vertices") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															face = obj_faces[chunk_faces3[f]];

															v1 = customAttribute.value[face.a];
															v2 = customAttribute.value[face.b];
															v3 = customAttribute.value[face.c];

															customAttribute.array[offset_custom] = v1[pp[0]];
															customAttribute.array[offset_custom + 1] = v1[pp[1]];
															customAttribute.array[offset_custom + 2] = v1[pp[2]];

															customAttribute.array[offset_custom + 3] = v2[pp[0]];
															customAttribute.array[offset_custom + 4] = v2[pp[1]];
															customAttribute.array[offset_custom + 5] = v2[pp[2]];

															customAttribute.array[offset_custom + 6] = v3[pp[0]];
															customAttribute.array[offset_custom + 7] = v3[pp[1]];
															customAttribute.array[offset_custom + 8] = v3[pp[2]];

															offset_custom += 9;

													}

											} else if (customAttribute.boundTo === "faces") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															value = customAttribute.value[chunk_faces3[f]];

															v1 = value;
															v2 = value;
															v3 = value;

															customAttribute.array[offset_custom] = v1[pp[0]];
															customAttribute.array[offset_custom + 1] = v1[pp[1]];
															customAttribute.array[offset_custom + 2] = v1[pp[2]];

															customAttribute.array[offset_custom + 3] = v2[pp[0]];
															customAttribute.array[offset_custom + 4] = v2[pp[1]];
															customAttribute.array[offset_custom + 5] = v2[pp[2]];

															customAttribute.array[offset_custom + 6] = v3[pp[0]];
															customAttribute.array[offset_custom + 7] = v3[pp[1]];
															customAttribute.array[offset_custom + 8] = v3[pp[2]];

															offset_custom += 9;

													}

											} else if (customAttribute.boundTo === "faceVertices") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															value = customAttribute.value[chunk_faces3[f]];

															v1 = value[0];
															v2 = value[1];
															v3 = value[2];

															customAttribute.array[offset_custom] = v1[pp[0]];
															customAttribute.array[offset_custom + 1] = v1[pp[1]];
															customAttribute.array[offset_custom + 2] = v1[pp[2]];

															customAttribute.array[offset_custom + 3] = v2[pp[0]];
															customAttribute.array[offset_custom + 4] = v2[pp[1]];
															customAttribute.array[offset_custom + 5] = v2[pp[2]];

															customAttribute.array[offset_custom + 6] = v3[pp[0]];
															customAttribute.array[offset_custom + 7] = v3[pp[1]];
															customAttribute.array[offset_custom + 8] = v3[pp[2]];

															offset_custom += 9;

													}

											}

									} else if (customAttribute.size === 4) {

											if (customAttribute.boundTo === undefined || customAttribute.boundTo === "vertices") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															face = obj_faces[chunk_faces3[f]];

															v1 = customAttribute.value[face.a];
															v2 = customAttribute.value[face.b];
															v3 = customAttribute.value[face.c];

															customAttribute.array[offset_custom] = v1.x;
															customAttribute.array[offset_custom + 1] = v1.y;
															customAttribute.array[offset_custom + 2] = v1.z;
															customAttribute.array[offset_custom + 3] = v1.w;

															customAttribute.array[offset_custom + 4] = v2.x;
															customAttribute.array[offset_custom + 5] = v2.y;
															customAttribute.array[offset_custom + 6] = v2.z;
															customAttribute.array[offset_custom + 7] = v2.w;

															customAttribute.array[offset_custom + 8] = v3.x;
															customAttribute.array[offset_custom + 9] = v3.y;
															customAttribute.array[offset_custom + 10] = v3.z;
															customAttribute.array[offset_custom + 11] = v3.w;

															offset_custom += 12;

													}

											} else if (customAttribute.boundTo === "faces") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															value = customAttribute.value[chunk_faces3[f]];

															v1 = value;
															v2 = value;
															v3 = value;

															customAttribute.array[offset_custom] = v1.x;
															customAttribute.array[offset_custom + 1] = v1.y;
															customAttribute.array[offset_custom + 2] = v1.z;
															customAttribute.array[offset_custom + 3] = v1.w;

															customAttribute.array[offset_custom + 4] = v2.x;
															customAttribute.array[offset_custom + 5] = v2.y;
															customAttribute.array[offset_custom + 6] = v2.z;
															customAttribute.array[offset_custom + 7] = v2.w;

															customAttribute.array[offset_custom + 8] = v3.x;
															customAttribute.array[offset_custom + 9] = v3.y;
															customAttribute.array[offset_custom + 10] = v3.z;
															customAttribute.array[offset_custom + 11] = v3.w;

															offset_custom += 12;

													}

											} else if (customAttribute.boundTo === "faceVertices") {

													for (f = 0, fl = chunk_faces3.length; f < fl; f++) {

															value = customAttribute.value[chunk_faces3[f]];

															v1 = value[0];
															v2 = value[1];
															v3 = value[2];

															customAttribute.array[offset_custom] = v1.x;
															customAttribute.array[offset_custom + 1] = v1.y;
															customAttribute.array[offset_custom + 2] = v1.z;
															customAttribute.array[offset_custom + 3] = v1.w;

															customAttribute.array[offset_custom + 4] = v2.x;
															customAttribute.array[offset_custom + 5] = v2.y;
															customAttribute.array[offset_custom + 6] = v2.z;
															customAttribute.array[offset_custom + 7] = v2.w;

															customAttribute.array[offset_custom + 8] = v3.x;
															customAttribute.array[offset_custom + 9] = v3.y;
															customAttribute.array[offset_custom + 10] = v3.z;
															customAttribute.array[offset_custom + 11] = v3.w;

															offset_custom += 12;

													}

											}

									}

									_gl.bindBuffer(_gl.ARRAY_BUFFER, customAttribute.buffer);
									_gl.bufferData(_gl.ARRAY_BUFFER, customAttribute.array, hint);

							}

					}

					if (dispose) {

							delete geometryGroup.__inittedArrays;
							delete geometryGroup.__colorArray;
							delete geometryGroup.__normalArray;
							delete geometryGroup.__tangentArray;
							delete geometryGroup.__uvArray;
							delete geometryGroup.__uv2Array;
							delete geometryGroup.__faceArray;
							delete geometryGroup.__vertexArray;
							delete geometryGroup.__lineArray;
							delete geometryGroup.__skinIndexArray;
							delete geometryGroup.__skinWeightArray;

					}

			}


			//[Firefly] This function is different from Three.js -- it adds
			//support for interleaved buffers and drawing from system memory
			//using a shared dynamic buffer.
			function setDirectBuffers(geometry) {

					//[Firefly]
					//Geometries that will draw directly
					//from system memory skip alocations of
					//GPU side GL buffers.
					if (geometry.streamingDraw) {

							//Do we want just the index buffer on the GPU?
							if (!geometry.streamingIndex) {
									var index = geometry.attributes.index;
									if (index) {
											index.buffer = _gl.createBuffer();
											_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, index.buffer);
											_gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, index.array || geometry.ib, _gl.STATIC_DRAW);
									}
							}

							return;
					}


					//[Firefly]
					//Does the geometry have an interleaved
					//vertex buffer?
					if (geometry.vb && geometry.vbbuffer === undefined) {

							geometry.vbbuffer = _gl.createBuffer();
							geometry.vbNeedsUpdate = true;
					}
					//[Firefly] Is there an .ib property outside the index attribute (since we use globally shared attributes)?
					if (geometry.ib && geometry.ibbuffer === undefined) {
							geometry.ibbuffer = _gl.createBuffer();
							_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometry.ibbuffer);
							_gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, geometry.ib, _gl.STATIC_DRAW);
					}

					var attributes = geometry.attributes;
					var attributesKeys = geometry.attributesKeys;

					for (var i = 0, len = attributesKeys.length; i < len; i++) {

							var attributeName = attributesKeys[i];
							var attributeItem = attributes[attributeName];
							var isIndex = attributeName === 'index';

							if (attributeItem.array &&
							attributeItem.buffer === undefined) {

									attributeItem.buffer = _gl.createBuffer();
									attributeItem.needsUpdate = true;

							}

							if (attributeItem.needsUpdate === true) {

									var bufferType = isIndex ? _gl.ELEMENT_ARRAY_BUFFER : _gl.ARRAY_BUFFER;

									_gl.bindBuffer(bufferType, attributeItem.buffer);
									_gl.bufferData(bufferType, attributeItem.array, _gl.STATIC_DRAW);

									attributeItem.needsUpdate = false;

							}

					}

					//Update the common interleaved vb if needed
					if (geometry.vbNeedsUpdate) {

							_gl.bindBuffer(_gl.ARRAY_BUFFER, geometry.vbbuffer);
							_gl.bufferData(_gl.ARRAY_BUFFER, geometry.vb, _gl.STATIC_DRAW);
							geometry.vbNeedsUpdate = false;

							// free cpu-side copy (if wanted)
							if (geometry.discardAfterUpload) {
									geometry.vb = null;
							}
					}

			}

			// Buffer rendering

			//[Firefly] Setup rendering of static model data using Vertex Array Objects
			//Currently we only do this for buffer geometry that is on GPU memory and has no
			//default material attributes and has a single draw batch (offsets array has length 1).
			//Other geometry passes through setupVertexAttributes instead, to set up
			//the vertex layout on every draw.
			function setupVAO(material, program, geometry, uvChannel) {

					var vao;

					if (geometry.streamingDraw) {
							geometry.vaos = null;
							return false;
					}

					if (geometry.offsets && geometry.offsets.length > 1) {
							geometry.vaos = null;
							return false;
					}

					if (!_glExtensionVAO) {
							geometry.vaos = null;
							return false;
					}

					if (geometry.vaos === undefined)
					geometry.vaos = [];

					//Set up a VAO for this object
					vao = _glExtensionVAO.createVertexArrayOES();
					geometry.vaos.push({ geomhash: program.id, uv: uvChannel, vao: vao });
					_glExtensionVAO.bindVertexArrayOES(vao);

					//bind the index buffer
					var index = geometry.attributes.index;
					if (index)
					_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometry.ibbuffer || index.buffer);


					//Bind the vertex attributes used by the current program
					var boundBuffer = null;
					var programAttributes = program.attributes;
					var programAttributesKeys = program.attributesKeys;

					var stride = geometry.vbstride;
					var startIndex = geometry.offsets && geometry.offsets.length ? geometry.offsets[0].index : 0;

					//Set up vertex attributes
					for (var i = 0, len = programAttributesKeys.length; i < len; i++) {

							var key = programAttributesKeys[i];
							var programAttribute = programAttributes[key];

							if (programAttribute >= 0) {

									var geometryAttribute = geometry.attributes[key];

									// Override 'uv' attribute mapping if uvChannel is specified
									// (account for the 1-based indexing used for the additional UV channel attributes)
									if (key === 'uv' && uvChannel) {
											geometryAttribute = geometry.attributes['uv' + (uvChannel + 1)];
									}

									if (geometryAttribute) {

											var type = _gl.FLOAT;
											var itemWidth = geometryAttribute.bytesPerItem || 4;
											if (itemWidth === 1) {
													type = _gl.UNSIGNED_BYTE;
											} else if (itemWidth === 2) {
													type = _gl.UNSIGNED_SHORT;
											}

											_gl.enableVertexAttribArray(programAttribute);

											if (geometryAttribute.itemOffset !== undefined) //it's part of the interleaved VB, so process it here
													{
															if (boundBuffer != geometry.vbbuffer) {
																	_gl.bindBuffer(_gl.ARRAY_BUFFER, geometry.vbbuffer);
																	boundBuffer = geometry.vbbuffer;
															}

															_gl.vertexAttribPointer(programAttribute, geometryAttribute.itemSize, type, !!geometryAttribute.normalize, stride * 4, (geometryAttribute.itemOffset + startIndex * stride) * 4);
													} else
											{
													_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryAttribute.buffer);
													boundBuffer = geometryAttribute.buffer;

													_gl.vertexAttribPointer(programAttribute, geometryAttribute.itemSize, type, !!geometryAttribute.normalize, 0, startIndex * geometryAttribute.itemSize * itemWidth); // 4 bytes per Float32
											}

											if (_glExtensionInstancedArrays && geometry.numInstances)
											_glExtensionInstancedArrays.vertexAttribDivisorANGLE(programAttribute, geometryAttribute.divisor || 0);

									} else {

											//Default material attributes cannot be set in VAO, so we have to abort the VAO setup
											//and fall back to the regular setupVertexAttributes in draw loop way.
											//This is hopefully very rare.
											_glExtensionVAO.bindVertexArrayOES(null);

											for (var j = 0; j < geometry.vaos.length; j++) {
													_glExtensionVAO.deleteVertexArrayOES(geometry.vaos[j].vao);}

											geometry.vaos = null; //Flag it so we don't pass through here again.

											return false;
									}

							}
					}

					return true;
			}

			function activateVAO(material, program, geometry, uvChannel) {
					var vaos = geometry.vaos;

					if (vaos) {
							//The assumption is that this array is rarely bigger than one or two items,
							//so it's faster to do a search than use object hashmap based on geomhash.
							for (var i = 0, len = vaos.length; i < len; i++) {
									var cache = vaos[i];
									if (cache.geomhash === program.id && cache.uv === uvChannel) {
											_glExtensionVAO.bindVertexArrayOES(cache.vao);
											return true;
									}
							}
					} else if (vaos === null) {
							return false;
					}

					return setupVAO(material, program, geometry, uvChannel);
			}


			function bindDynamic(dynBufName, srcData) {
					var boundBuffer = _dynamicBuffers[dynBufName];
					if (!boundBuffer) {
							boundBuffer = _gl.createBuffer();
							_dynamicBuffers[dynBufName] = boundBuffer;
					}

					_gl.bindBuffer(_gl.ARRAY_BUFFER, boundBuffer);
					_gl.bufferData(_gl.ARRAY_BUFFER, srcData, _gl.DYNAMIC_DRAW);

					return boundBuffer;
			}


			//[Firefly] This function is different from Three.js -- it adds
			//support for interleaved buffers and drawing from system memory
			//using a shared dynamic buffer.
			function setupVertexAttributes(material, program, geometry, startIndex, indices) {

					var programAttributes = program.attributes;
					var programAttributesKeys = program.attributesKeys;

					//Those two need to be unequal to begin with...
					var boundBuffer = 0;
					var interleavedBuffer;


					if (indices) {
							// indices (they can have a VBO even if the geometry part is streamed)
							if (!indices.buffer && geometry.streamingDraw) {
									var buffer = _dynamicBuffers.index;
									if (!buffer) {
											buffer = _gl.createBuffer();
											_dynamicBuffers.index = buffer;
									}

									//_gl.bindBuffer( _gl.ELEMENT_ARRAY_BUFFER, null);
									_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, buffer);
									_gl.bufferData(_gl.ELEMENT_ARRAY_BUFFER, indices.array || geometry.ib, _gl.DYNAMIC_DRAW);
							} else

							_gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometry.ibbuffer || indices.buffer);
					}


					//Set attributes
					for (var i = 0, len = programAttributesKeys.length; i < len; i++) {

							var key = programAttributesKeys[i];
							var programAttribute = programAttributes[key];

							if (programAttribute >= 0) {

									var geometryAttribute = geometry.attributes[key];

									if (geometryAttribute) {

											var isInterleaved = geometryAttribute.itemOffset !== undefined;

											var stride, itemOffset;

											if (isInterleaved) {

													stride = geometry.vbstride;
													itemOffset = geometryAttribute.itemOffset;

													if (boundBuffer !== interleavedBuffer) {
															if (geometry.streamingDraw) {

																	boundBuffer = bindDynamic('interleavedVB', geometry.vb);

															} else {

																	boundBuffer = geometry.vbbuffer;
																	_gl.bindBuffer(_gl.ARRAY_BUFFER, boundBuffer);

															}

															interleavedBuffer = boundBuffer;
													}

											} else {

													stride = geometryAttribute.itemSize;
													itemOffset = 0;

													if (geometry.streamingDraw) {

															boundBuffer = bindDynamic(key, geometryAttribute.array);

													} else {

															boundBuffer = geometryAttribute.buffer;
															_gl.bindBuffer(_gl.ARRAY_BUFFER, boundBuffer);

													}
											}

											var type = _gl.FLOAT;
											var itemWidth = geometryAttribute.bytesPerItem || 4;
											if (itemWidth === 1) {
													type = _gl.UNSIGNED_BYTE;
											} else if (itemWidth === 2) {
													type = _gl.UNSIGNED_SHORT;
											}

											if (isInterleaved)
											itemWidth = 4; //our interleaved buffers define stride in multiples of 4 bytes

											state.enableAttribute(programAttribute);
											_gl.vertexAttribPointer(programAttribute, geometryAttribute.itemSize, type, geometryAttribute.normalize, stride * itemWidth, (itemOffset + startIndex * stride) * itemWidth);

											if (_glExtensionInstancedArrays && geometry.numInstances)
											_glExtensionInstancedArrays.vertexAttribDivisorANGLE(programAttribute, geometryAttribute.divisor || 0);


									} else if (material.defaultAttributeValues) {

											var attr = material.defaultAttributeValues[key];

											if (attr && attr.length === 2) {

													_gl.vertexAttrib2fv(programAttribute, material.defaultAttributeValues[key]);

											} else if (attr && attr.length === 3) {

													_gl.vertexAttrib3fv(programAttribute, material.defaultAttributeValues[key]);

											}

									}
							}
					}

					state.disableUnusedAttributes();

			}


			// Buffer rendering

			this.renderBufferDirect = function (camera, lights, fog, material, geometry, object, uvChannel) {

					if (material.visible === false) return;

					//updateObject(object);
					setDirectBuffers(object.geometry);

					var program = setProgram(camera, lights, fog, material, object);

					var geometryAttributes = geometry.attributes;

					var updateBuffers = false,
					wireframeBit = material.wireframe ? 1 : 0,
					geometryHash = 'direct_' + geometry.id + (uvChannel ? '/' + uvChannel : '') + '_' + program.id + '_' + wireframeBit;

					if (geometryHash !== _currentGeometryProgram) {

							_currentGeometryProgram = geometryHash;
							updateBuffers = true;

					}

					var vao = activateVAO(material, program, geometry, uvChannel || 0);
					updateBuffers = updateBuffers && !vao;

					if (updateBuffers) {

							state.initAttributes();

					}

					// render mesh

					if (object instanceof THREE.Mesh) {

							var index = geometryAttributes.index;

							// indexed triangles

							if (index) {

									var type, size;
									var ib = index.array ? index.array : geometry.ib;

									if (ib instanceof Uint32Array && extensions.get('OES_element_index_uint')) {

											type = _gl.UNSIGNED_INT;
											size = 4;

									} else {

											type = _gl.UNSIGNED_SHORT;
											size = 2;

									}


									var offsets = geometry.offsets;

									// if there is more than 1 chunk
									// must set attribute pointers to use new offsets for each chunk
									// even if geometry and materials didn't change

									if (offsets && offsets.length > 1) updateBuffers = true;

									var i = 0;
									do
									{
											var startIndex, startOffset, count;
											if (offsets && offsets.length)
											{
													startIndex = offsets[i].index;
													startOffset = offsets[i].start;
													count = offsets[i].count;
											} else

											{
													startIndex = 0;
													startOffset = 0;
													count = ib.length;
											}

											if (updateBuffers) {

													setupVertexAttributes(material, program, geometry, startIndex, index);

											}

											// render indexed triangles
											var geomType = _gl.TRIANGLES;
											if (geometry.isPoints) geomType = _gl.POINTS;else
											if (geometry.isLines) geomType = _gl.LINES;
											if (geometry.numInstances)
											_glExtensionInstancedArrays.drawElementsInstancedANGLE(geomType, count, type, startOffset * size, geometry.numInstances); // 2 bytes per Uint16
											else {
															_gl.drawElements(geomType, count, type, startOffset * size); // 2 bytes per Uint16

													}

									} while (offsets && ++i < offsets.length);

									// non-indexed triangles

							} else {

									if (updateBuffers) {

											setupVertexAttributes(material, program, geometry, 0);
									}

									var position = geometry.attributes.position;

									// render non-indexed triangles
									var geomType = _gl.TRIANGLES;
									if (geometry.isPoints) geomType = _gl.POINTS;else
									if (geometry.isLines) geomType = _gl.LINES;
									if (geometry.numInstances)
									_glExtensionInstancedArrays.drawArraysInstancedANGLE(geomType, 0, position.array.length / 3, geometry.numInstances);else
									{
											_gl.drawArrays(geomType, 0, position.array.length / position.itemSize);
									}

							}
					} else

					{
							THREE.log("Only THREE.Mesh can be rendered by the Firefly renderer. Use THREE.Mesh to draw lines.");
					}

					if (vao)
					_glExtensionVAO.bindVertexArrayOES(null);
			};

			this.renderBuffer = function (camera, lights, fog, material, geometryGroup, object) {

					if (material.visible === false) return;

					updateObject(object);

					var program = setProgram(camera, lights, fog, material, object);

					var attributes = program.attributes;

					var updateBuffers = false,
					wireframeBit = material.wireframe ? 1 : 0,
					geometryGroupHash = geometryGroup.id + '_' + program.id + '_' + wireframeBit;

					if (geometryGroupHash !== _currentGeometryProgram) {

							_currentGeometryProgram = geometryGroupHash;
							updateBuffers = true;

					}

					if (updateBuffers) {

							state.initAttributes();

					}

					// vertices

					if (!material.morphTargets && attributes.position >= 0) {

							if (updateBuffers) {

									_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglVertexBuffer);
									state.enableAttribute(attributes.position);
									_gl.vertexAttribPointer(attributes.position, 3, _gl.FLOAT, false, 0, 0);

							}

					}


					if (updateBuffers) {

							// custom attributes

							// Use the per-geometryGroup custom attribute arrays which are setup in initMeshBuffers

							if (geometryGroup.__webglCustomAttributesList) {

									for (var i = 0, il = geometryGroup.__webglCustomAttributesList.length; i < il; i++) {

											var attribute = geometryGroup.__webglCustomAttributesList[i];

											if (attributes[attribute.buffer.belongsToAttribute] >= 0) {

													_gl.bindBuffer(_gl.ARRAY_BUFFER, attribute.buffer);
													state.enableAttribute(attributes[attribute.buffer.belongsToAttribute]);
													_gl.vertexAttribPointer(attributes[attribute.buffer.belongsToAttribute], attribute.size, _gl.FLOAT, false, 0, 0);

											}

									}

							}


							// colors

							if (attributes.color >= 0) {

									if (object.geometry.colors.length > 0 || object.geometry.faces.length > 0) {

											_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglColorBuffer);
											state.enableAttribute(attributes.color);
											_gl.vertexAttribPointer(attributes.color, 3, _gl.FLOAT, false, 0, 0);

									} else if (material.defaultAttributeValues) {


											_gl.vertexAttrib3fv(attributes.color, material.defaultAttributeValues.color);

									}

							}

							// normals

							if (attributes.normal >= 0) {

									_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglNormalBuffer);
									state.enableAttribute(attributes.normal);
									_gl.vertexAttribPointer(attributes.normal, 3, _gl.FLOAT, false, 0, 0);

							}

							// tangents

							if (attributes.tangent >= 0) {

									_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglTangentBuffer);
									state.enableAttribute(attributes.tangent);
									_gl.vertexAttribPointer(attributes.tangent, 4, _gl.FLOAT, false, 0, 0);

							}

							// uvs

							if (attributes.uv >= 0) {

									if (object.geometry.faceVertexUvs[0]) {

											_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglUVBuffer);
											state.enableAttribute(attributes.uv);
											_gl.vertexAttribPointer(attributes.uv, 2, _gl.FLOAT, false, 0, 0);

									} else if (material.defaultAttributeValues) {


											_gl.vertexAttrib2fv(attributes.uv, material.defaultAttributeValues.uv);

									}

							}

							if (attributes.uv2 >= 0) {

									if (object.geometry.faceVertexUvs[1]) {

											_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglUV2Buffer);
											state.enableAttribute(attributes.uv2);
											_gl.vertexAttribPointer(attributes.uv2, 2, _gl.FLOAT, false, 0, 0);

									} else if (material.defaultAttributeValues) {


											_gl.vertexAttrib2fv(attributes.uv2, material.defaultAttributeValues.uv2);

									}

							}

							// line distances

							if (attributes.lineDistance >= 0) {

									_gl.bindBuffer(_gl.ARRAY_BUFFER, geometryGroup.__webglLineDistanceBuffer);
									state.enableAttribute(attributes.lineDistance);
									_gl.vertexAttribPointer(attributes.lineDistance, 1, _gl.FLOAT, false, 0, 0);

							}

					}

					state.disableUnusedAttributes();


					// render mesh

					if (object instanceof THREE.Mesh) {

							var type = geometryGroup.__typeArray === Uint32Array ? _gl.UNSIGNED_INT : _gl.UNSIGNED_SHORT;

							// wireframe

							if (material.wireframe) {

									state.setLineWidth(material.wireframeLinewidth * pixelRatio);
									if (updateBuffers) _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglLineBuffer);
									_gl.drawElements(_gl.LINES, geometryGroup.__webglLineCount, type, 0);

									// triangles

							} else {

									if (updateBuffers) _gl.bindBuffer(_gl.ELEMENT_ARRAY_BUFFER, geometryGroup.__webglFaceBuffer);
									_gl.drawElements(_gl.TRIANGLES, geometryGroup.__webglFaceCount, type, 0);

							}

							// render lines

					} else if (object instanceof THREE.Line) {

							var mode = object.mode === THREE.LineStrip ? _gl.LINE_STRIP : _gl.LINES;

							state.setLineWidth(material.linewidth * pixelRatio);

							_gl.drawArrays(mode, 0, geometryGroup.__webglLineCount);

							// render particles

					} else if (object instanceof THREE.PointCloud) {

							_gl.drawArrays(_gl.POINTS, 0, geometryGroup.__webglPointCount);

					}
			};


			// Sorting

			// This method is for transparency
			function painterSortStable(a, b) {

					// first see if there's a render order set - if so, this takes precedence
					if (a.object.renderOrder !== b.object.renderOrder) {

							return a.object.renderOrder - b.object.renderOrder;

							// If render order are the same, then use z distance.
							// We want to render from farthest to nearest.
					} else if (a.z !== b.z) {

							return a.z - b.z;

							// if z distances match, then use id, for a consistent result
					} else {

							return a.id - b.id;

					}

			}

			// This method is for opaque objects
			function reversePainterSortStable(a, b) {

					// first see if there's a render order set - if so, this takes precedence
					if (a.object.renderOrder !== b.object.renderOrder) {

							return a.object.renderOrder - b.object.renderOrder;

							// Next, sort by material, for efficiency, to avoid state changes.
							// (Note this is not done for transparency, as back to front order is more significant.)
					} else if (a.material.id !== b.material.id) {

							return a.material.id - b.material.id;

							// If render order and material are the same, then use z distance.
							// To minimize processing fragments, we render roughly from nearest to farthest.
							// In this way, the closer objects cover pixels and so hide more distance objects.
					}if (a.z !== b.z) {

							return b.z - a.z;

							// if z distances match, then use id, for a consistent sorted result
					} else {

							return a.id - b.id;

					}

			}

			/* currently not used
	    function numericalSort ( a, b ) {
	    
	    	return b[ 0 ] - a[ 0 ];
	    
	    }
	    */


			// Rendering

			this.render = function (scene, camera, renderTarget, forceClear, customLights) {

					if (camera instanceof THREE.Camera === false) {

							THREE.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
							return;

					}

					// reset caching for this frame

					_currentGeometryProgram = '';
					_currentMaterialId = -1;
					_currentCamera = null;

					if (customLights !== undefined) {
							lights.length = 0;
							_lightsNeedUpdate = true;
					}

					var fog = scene.fog;

					// update scene graph

					if (scene.autoUpdate === true) scene.updateMatrixWorld();

					// update camera matrices and frustum

					if (camera.parent === undefined) camera.updateMatrixWorld();

					camera.matrixWorldInverse.getInverse(camera.matrixWorld);

					if (camera.worldUpTransform)
					_viewInverseEnv.multiplyMatrices(camera.worldUpTransform, camera.matrixWorld);else

					_viewInverseEnv.copy(camera.matrixWorld);

					_projScreenMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
					_frustum.setFromMatrix(_projScreenMatrix);

					// update WebGL objects
					var renderImmediate = scene instanceof RenderBatch && scene.renderImmediate;

					if (!renderImmediate) {
							opaqueObjects.length = 0;
							transparentObjects.length = 0;

							projectObject(scene, _this.sortObjects === true, scene.forceVisible === true);

							// note: the following flag is never set in WebGLRenderer; this may change in the future
							if (_this.sortObjects === true) {
									opaqueObjects.sort(reversePainterSortStable);
									transparentObjects.sort(painterSortStable);
							}
					}

					if (_lightsNeedUpdate) {
							if (customLights && customLights.length)
							lights = customLights.slice();
							setupLights(lights);
					}

					//
					this.setRenderTarget(renderTarget);

					this.resetGLState();

					if (this.autoClear || forceClear) {

							this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil);

					}

					if (scene.overrideMaterial) {

							var overrideMaterial = scene.overrideMaterial;

							setMaterial(overrideMaterial);

							if (!renderImmediate) {
									renderObjects(opaqueObjects, camera, lights, fog, overrideMaterial);
									renderObjects(transparentObjects, camera, lights, fog, overrideMaterial);
							} else {
									renderObjectsImmediate(scene, "", camera, lights, fog, overrideMaterial);
							}

					} else {

							if (!renderImmediate) {
									// opaque pass (front-to-back order)
									state.setBlending(THREE.NoBlending);

									renderObjects(opaqueObjects, camera, lights, fog, null);

									// transparent pass (back-to-front order)

									renderObjects(transparentObjects, camera, lights, fog, null);
							} else {
									renderObjectsImmediate(scene, "", camera, lights, fog, null);
							}

					}


					// Generate mipmap if we're using any kind of mipmap filtering
					if (renderTarget && renderTarget.generateMipmaps && renderTarget.minFilter !== THREE.NearestFilter && renderTarget.minFilter !== THREE.LinearFilter) {

							updateRenderTargetMipmap(renderTarget);

					}

					this.resetGLState();

					// Ensure depth buffer writing is enabled so it can be cleared on next render

					state.setDepthTest(true);
					state.setDepthWrite(true);

					// _gl.finish();

			};

			function renderBatchIterSort(m) {
					projectObject(m, true);
			}

			function renderBatchIterNoSort(m) {
					projectObject(m, false);
			}

			function projectObject(object, sortObjects, forceVisible) {

					var i, len;

					if (!forceVisible && object.visible === false)
					return;

					if (object instanceof THREE.Scene || object instanceof THREE.Group) {

							// skip

					} else if (object instanceof RenderBatch) {

							object.forEach(sortObjects ? renderBatchIterSort : renderBatchIterNoSort);

					} else {

							initObject(object);

							if (object instanceof THREE.Light) {

									lights.push(object);

							} else {

									var webglObjects = _webglObjects[object.id];

									if (webglObjects && (object.frustumCulled === false || _frustum.intersectsObject(object) === true)) {

											for (i = 0, len = webglObjects.length; i < len; i++) {

													var webglObject = webglObjects[i];

													unrollBufferMaterial(webglObject);

													webglObject.render = true;

													if (sortObjects === true) {

															_vector3.setFromMatrixPosition(object.matrixWorld);
															_vector3.applyProjection(_projScreenMatrix);
															webglObject.z = _vector3.z;

													}

											}

									}

							}

					}

					if (object.children) {

							for (i = 0, len = object.children.length; i < len; i++) {

									projectObject(object.children[i], sortObjects, forceVisible);

							}

					}

			}

			// depending on the original material of a shape, we use either the main
			// override directly or a custom variant (if needed).
			function chooseOverrideMaterial(shapeMaterial, overrideMaterial) {

					// if override material does not define custom variants, there is nothing to do
					if (!overrideMaterial.getCustomOverrideMaterial) {
							return overrideMaterial;
					}

					// check if a custom override material should be used
					var customOverride = overrideMaterial.getCustomOverrideMaterial(shapeMaterial);
					if (!customOverride) {
							return overrideMaterial;
					}

					// use alternative variant
					return customOverride;
			}

			function renderObjects(renderList, camera, lights, fog, overrideMaterial) {

					var material;

					//TODO: we have to iterate upwards in order to preserve draw order for 2d
					//without having to sort the scene. Figure out how to keep the reverse iteration so that
					//we are consistent with three.js
					for (var i = 0, iEnd = renderList.length; i < iEnd; i++) {
							//for ( var i = renderList.length - 1; i !== - 1; i -- ) {

							var webglObject = renderList[i];

							var object = webglObject.object;
							var buffer = webglObject.buffer;

							if (overrideMaterial) {
									// either use overrideMaterial or a custom variant if needed for this render item
									material = chooseOverrideMaterial(webglObject.material, overrideMaterial);
							} else {

									material = webglObject.material;

									if (!material) continue;

									setMaterial(material);
							}

							// If the object is transparent, render it in two passes:
							// backfaces, then frontfaces. This helps avoid out-of-order sorting
							// transparency blending artifacts (these still can occur for pixels where
							// four or more triangles in a single mesh overlap the same pixel).
							// Also, check that depth testing is on; if not, we're in 2D mode and draw
							// order matters so we should not use this mode.
							// Else render normally.
							// See https://jira.autodesk.com/browse/LMV-1121
							if (material.twoPassTransparency)
							{
									var originalSide = material.side;
									// note we do NOT set material.needsUpdate to true, as the double-sided shader
									// works fine for back and front faces.
									material.side = THREE.BackSide;
									renderObjectsFace(material, camera, lights, fog, buffer, overrideMaterial, object);
									material.side = THREE.FrontSide;
									renderObjectsFace(material, camera, lights, fog, buffer, overrideMaterial, object);
									material.side = originalSide;
							} else

							{
									renderObjectsFace(material, camera, lights, fog, buffer, overrideMaterial, object);
							}
					}
			}

			function renderObjectsFace(material, camera, lights, fog, buffer, overrideMaterial, object)
			{
					_this.setMaterialFaces(material);

					if (buffer instanceof THREE.BufferGeometry) {
							_this.renderBufferDirect(camera, lights, fog, material, buffer, object);
					} else {
							_this.renderBuffer(camera, lights, fog, material, buffer, object);
					}

					if (material.decals) {
							var decals = material.decals;
							for (var di = 0, dlen = decals.length; di < dlen; di++) {
									var decal = decals[di];
									material = decal.material;
									setMaterial(material);
									_this.setMaterialFaces(material);
									if (buffer instanceof THREE.BufferGeometry) {
											_this.renderBufferDirect(camera, lights, fog, material, buffer, object, decal.uv);
									}
							}
					}
			}

			var roi_materialType, roi_camera, roi_lights, roi_fog, roi_overrideMaterial;

			function renderImmediateCallback(m, idx) {

					if (m.visible && !m.hide) {
							var material;

							if (roi_overrideMaterial) {
									// either use overrideMaterial or a custom variant if needed for this render item
									material = chooseOverrideMaterial(m.material, roi_overrideMaterial);
							} else {

									material = m.material;

									if (!material) return;

									setMaterial(material);
							}

							// If the object is transparent, render it in two passes:
							// backfaces, then frontfaces. This helps avoid out-of-order sorting
							// transparency blending artifacts (these still can occur for pixels where
							// four or more triangles in a single mesh overlap the same pixel).
							// Also, check that depth testing is on; if not, we're in 2D mode and draw
							// order matters so we should not use this mode.
							// Else render normally.
							// See https://jira.autodesk.com/browse/LMV-1121
							if (material.twoPassTransparency)
							{
									var originalSide = material.side;
									// note we do NOT set material.needsUpdate to true, as the double-sided shader
									// works fine for back and front faces.
									material.side = THREE.BackSide;
									renderImmediateFace(m, material);
									material.side = THREE.FrontSide;
									renderImmediateFace(m, material);
									material.side = originalSide;
							} else

							{
									renderImmediateFace(m, material);
							}
					}
			}

			function renderImmediateFace(m, material)
			{
					_this.setMaterialFaces(material);
					_this.renderBufferDirect(roi_camera, roi_lights, roi_fog, material, m.geometry, m);

					if (material.decals) {
							var decals = material.decals;
							for (var di = 0, dlen = decals.length; di < dlen; di++) {
									var decal = decals[di];
									material = decal.material;
									setMaterial(material);
									_this.setMaterialFaces(material);
									_this.renderBufferDirect(roi_camera, roi_lights, roi_fog, material, m.geometry, m, decal.uv);
							}
					}
			}

			function renderObjectsImmediate(renderList, materialType, camera, lights, fog, overrideMaterial) {

					roi_materialType = materialType;
					roi_camera = camera;
					roi_lights = lights;
					roi_fog = fog;
					roi_overrideMaterial = overrideMaterial || null;

					// not really "forceVisible"
					// it's really only for ground shadows, or custom modelQueue iteration passes
					// In such cases we use the MESH_VISIBLE bit instead of the actual current visibility of the mesh (which is dependent on the render pass being done)
					renderList.forEach(renderImmediateCallback, renderList.forceVisible ? 1 : 0x80, false);

			}


			function unrollBufferMaterial(globject) {

					var object = globject.object;
					var buffer = globject.buffer;

					var geometry = object.geometry;
					var material = object.material;

					if (material instanceof THREE.MeshFaceMaterial) {

							var materialIndex = geometry instanceof THREE.BufferGeometry ? 0 : buffer.materialIndex;

							material = material.materials[materialIndex];

							globject.material = material;

							if (material.transparent) {

									transparentObjects.push(globject);

							} else {

									opaqueObjects.push(globject);

							}

					} else if (material) {

							globject.material = material;

							if (material.transparent) {

									transparentObjects.push(globject);

							} else {

									opaqueObjects.push(globject);

							}

					}

			}



			// Objects adding

			function initObject(object) {

					if (object.__webglInit === undefined) {

							object.__webglInit = true;

							object.addEventListener('removed', onObjectRemoved);

					}

					var geometry = object.geometry;

					if (geometry === undefined) {

							// ImmediateRenderObject

					} else if (geometry.__webglInit === undefined) {

							geometry.__webglInit = true;
							geometry.addEventListener('dispose', onGeometryDispose);

							if (geometry instanceof THREE.BufferGeometry) {

									//

							} else if (object instanceof THREE.Mesh) {

									initGeometryGroups(object, geometry);

							} else if (object instanceof THREE.Line) {

									if (geometry.__webglVertexBuffer === undefined) {

											createLineBuffers(geometry);
											initLineBuffers(geometry, object);

											geometry.verticesNeedUpdate = true;
											geometry.colorsNeedUpdate = true;
											geometry.lineDistancesNeedUpdate = true;

									}
							} else if (object instanceof THREE.PointCloud) {

									if (geometry.__webglVertexBuffer === undefined) {

											createPointCloudBuffers(geometry);
											initPointCloudBuffers(geometry, object);

											geometry.verticesNeedUpdate = true;
											geometry.colorsNeedUpdate = true;
									}

							}

					}

					if (object.__webglActive === undefined) {

							object.__webglActive = true;

							if (object instanceof THREE.Mesh) {

									if (geometry instanceof THREE.BufferGeometry) {

											addBuffer(_webglObjects, geometry, object);

									} else if (geometry instanceof THREE.Geometry) {

											var geometryGroupsList = geometryGroups[geometry.id];

											for (var i = 0, len = geometryGroupsList.length; i < len; i++) {

													addBuffer(_webglObjects, geometryGroupsList[i], object);

											}

									}

							} else if (object instanceof THREE.Line || object instanceof THREE.PointCloud) {

									addBuffer(_webglObjects, geometry, object);

							} else if (object instanceof THREE.ImmediateRenderObject || object.immediateRenderCallback) {

									addBufferImmediate(_webglObjectsImmediate, object);

							}

					}

			}


			// Geometry splitting

			var geometryGroups = {};
			var geometryGroupCounter = 0;

			function makeGroups(geometry, usesFaceMaterial) {

					var maxVerticesInGroup = extensions.get('OES_element_index_uint') ? 4294967296 : 65535;

					var groupHash,hash_map = {};

					var numMorphTargets = geometry.morphTargets ? geometry.morphTargets.length : 0;
					var numMorphNormals = geometry.morphNormals ? geometry.morphNormals.length : 0;

					var group;
					var groups = {};
					var groupsList = [];

					for (var f = 0, fl = geometry.faces.length; f < fl; f++) {

							var face = geometry.faces[f];
							var materialIndex = usesFaceMaterial ? face.materialIndex : 0;

							if (!(materialIndex in hash_map)) {

									hash_map[materialIndex] = { hash: materialIndex, counter: 0 };

							}

							groupHash = hash_map[materialIndex].hash + '_' + hash_map[materialIndex].counter;

							if (!(groupHash in groups)) {

									group = {
											id: geometryGroupCounter++,
											faces3: [],
											materialIndex: materialIndex,
											vertices: 0,
											numMorphTargets: numMorphTargets,
											numMorphNormals: numMorphNormals };


									groups[groupHash] = group;
									groupsList.push(group);

							}

							if (groups[groupHash].vertices + 3 > maxVerticesInGroup) {

									hash_map[materialIndex].counter += 1;
									groupHash = hash_map[materialIndex].hash + '_' + hash_map[materialIndex].counter;

									if (!(groupHash in groups)) {

											group = {
													id: geometryGroupCounter++,
													faces3: [],
													materialIndex: materialIndex,
													vertices: 0,
													numMorphTargets: numMorphTargets,
													numMorphNormals: numMorphNormals };


											groups[groupHash] = group;
											groupsList.push(group);

									}

							}

							groups[groupHash].faces3.push(f);
							groups[groupHash].vertices += 3;

					}

					return groupsList;

			}

			function initGeometryGroups(object, geometry) {

					var material = object.material,addBuffers = false;

					if (geometryGroups[geometry.id] === undefined || geometry.groupsNeedUpdate === true) {

							delete _webglObjects[object.id];

							geometryGroups[geometry.id] = makeGroups(geometry, material instanceof THREE.MeshFaceMaterial);

							geometry.groupsNeedUpdate = false;

					}

					var geometryGroupsList = geometryGroups[geometry.id];

					// create separate VBOs per geometry chunk

					for (var i = 0, il = geometryGroupsList.length; i < il; i++) {

							var geometryGroup = geometryGroupsList[i];

							// initialise VBO on the first access

							if (geometryGroup.__webglVertexBuffer === undefined) {

									createMeshBuffers(geometryGroup);
									initMeshBuffers(geometryGroup, object);

									geometry.verticesNeedUpdate = true;
									geometry.morphTargetsNeedUpdate = true;
									geometry.elementsNeedUpdate = true;
									geometry.uvsNeedUpdate = true;
									geometry.normalsNeedUpdate = true;
									geometry.tangentsNeedUpdate = true;
									geometry.colorsNeedUpdate = true;

									addBuffers = true;

							} else {

									addBuffers = false;

							}

							if (addBuffers || object.__webglActive === undefined) {

									addBuffer(_webglObjects, geometryGroup, object);

							}

					}

					object.__webglActive = true;

			}


			function addBuffer(objlist, buffer, object) {

					var id = object.id;
					objlist[id] = objlist[id] || [];
					objlist[id].push(
					{
							id: id,
							buffer: buffer,
							object: object,
							material: null,
							z: 0 });



			}

			function addBufferImmediate(objlist, object) {

					objlist.push(
					{
							id: null,
							object: object,
							opaque: null,
							transparent: null,
							z: 0 });



			}

			// Objects updates

			// Objects updates

			function updateObject(object) {

					var geometry = object.geometry,customAttributesDirty,material;

					if (geometry instanceof THREE.BufferGeometry) {

							setDirectBuffers(geometry);

					} else if (object instanceof THREE.Mesh) {

							// check all geometry groups

							if (geometry.groupsNeedUpdate === true) {

									initGeometryGroups(object, geometry);

							}

							var geometryGroupsList = geometryGroups[geometry.id];

							for (var i = 0, il = geometryGroupsList.length; i < il; i++) {

									var geometryGroup = geometryGroupsList[i];

									material = getBufferMaterial(object, geometryGroup);

									customAttributesDirty = material.attributes && areCustomAttributesDirty(material);

									if (geometry.verticesNeedUpdate || geometry.morphTargetsNeedUpdate || geometry.elementsNeedUpdate ||
									geometry.uvsNeedUpdate || geometry.normalsNeedUpdate ||
									geometry.colorsNeedUpdate || geometry.tangentsNeedUpdate || customAttributesDirty) {

											setMeshBuffers(geometryGroup, object, _gl.DYNAMIC_DRAW, !geometry.dynamic, material);

									}

							}

							geometry.verticesNeedUpdate = false;
							geometry.morphTargetsNeedUpdate = false;
							geometry.elementsNeedUpdate = false;
							geometry.uvsNeedUpdate = false;
							geometry.normalsNeedUpdate = false;
							geometry.colorsNeedUpdate = false;
							geometry.tangentsNeedUpdate = false;

							material.attributes && clearCustomAttributes(material);

					} else if (object instanceof THREE.Line) {

							material = getBufferMaterial(object, geometry);

							customAttributesDirty = material.attributes && areCustomAttributesDirty(material);

							if (geometry.verticesNeedUpdate || geometry.colorsNeedUpdate || geometry.lineDistancesNeedUpdate || customAttributesDirty) {

									setLineBuffers(geometry, _gl.DYNAMIC_DRAW);

							}

							geometry.verticesNeedUpdate = false;
							geometry.colorsNeedUpdate = false;
							geometry.lineDistancesNeedUpdate = false;

							material.attributes && clearCustomAttributes(material);

					} else if (object instanceof THREE.PointCloud) {

							material = getBufferMaterial(object, geometry);

							customAttributesDirty = material.attributes && areCustomAttributesDirty(material);

							if (geometry.verticesNeedUpdate || geometry.colorsNeedUpdate || customAttributesDirty) {

									setPointCloudBuffers(geometry, _gl.DYNAMIC_DRAW);

							}

							geometry.verticesNeedUpdate = false;
							geometry.colorsNeedUpdate = false;

							material.attributes && clearCustomAttributes(material);
					}

			}

			// Objects updates - custom attributes check

			function areCustomAttributesDirty(material) {

					for (var name in material.attributes) {

							if (material.attributes[name].needsUpdate) return true;

					}

					return false;

			}

			function clearCustomAttributes(material) {

					for (var name in material.attributes) {

							material.attributes[name].needsUpdate = false;

					}

			}

			// Objects removal

			function removeObject(object) {

					if (object instanceof THREE.Mesh ||
					object instanceof THREE.PointCloud ||
					object instanceof THREE.Line) {

							delete _webglObjects[object.id];

					} else if (object instanceof THREE.ImmediateRenderObject || object.immediateRenderCallback) {

							removeInstances(_webglObjectsImmediate, object);

					}

					delete object.__webglInit;
					delete object.__webglActive;

			}

			function removeInstances(objlist, object) {

					for (var o = objlist.length - 1; o >= 0; o--) {

							if (objlist[o].object === object) {

									objlist.splice(o, 1);

							}

					}

			}

			// Materials

			function getPrismClampFlags(parameters, material) {

					if (!material.textureMaps)
					return;

					for (var i = 0; i < webglprogram.PrismMaps.length; i++) {

							var name = webglprogram.PrismMaps[i];
							// note this code keys off the fact that textures end with "_map";
							// any new PRISM map materials should end with this suffix.
							var map = material.textureMaps[name + "_map"];

							if (!map)
							continue;

							var bools = map.textureObj.properties.booleans;

							parameters[name] = {
									S: !bools.texture_URepeat.values[0],
									T: !bools.texture_VRepeat.values[0] };

					}
			}

			var shaderIDs = {
					MeshDepthMaterial: 'depth',
					MeshNormalMaterial: 'normal',
					MeshBasicMaterial: 'firefly_basic',
					MeshLambertMaterial: 'lambert',
					MeshPhongMaterial: 'firefly_phong',
					LineBasicMaterial: 'firefly_basic',
					LineDashedMaterial: 'dashed',
					PointCloudMaterial: 'firefly_basic' };


			function initMaterial(material, lights, fog, object) {

					material.addEventListener('dispose', onMaterialDispose);

					var shaderID = shaderIDs[material.type];

					if (shaderID) {

							var shader = THREE.ShaderLib[shaderID];

							material.__webglShader = {
									uniforms: THREE.UniformsUtils.clone(shader.uniforms),
									vertexShader: shader.vertexShader,
									fragmentShader: shader.fragmentShader };


					} else {

							material.__webglShader = {
									uniforms: material.uniforms,
									vertexShader: material.vertexShader,
									fragmentShader: material.fragmentShader };

					}

					// heuristics to create shader parameters according to lights in the scene
					// (not to blow over maxLights budget)

					var maxLightCount = allocateLights(lights);

					//var maxBones = 0;//allocateBones( object );

					var parameters = {

							precision: _precisionVertex,
							precisionFragment: _precisionFragment,
							supportsVertexTextures: _supportsVertexTextures,
							haveTextureLod: !!extensions.get("EXT_shader_texture_lod"),

							map: !!material.map,
							envMap: !!material.envMap,
							irradianceMap: !!material.irradianceMap,
							envIsSpherical: material.envMap && material.envMap.mapping == THREE.SphericalReflectionMapping,
							envGammaEncoded: material.envMap && material.envMap.GammaEncoded,
							irrGammaEncoded: material.irradianceMap && material.irradianceMap.GammaEncoded,
							envRGBM: material.envMap && material.envMap.RGBM,
							irrRGBM: material.irradianceMap && material.irradianceMap.RGBM,
							lightMap: !!material.lightMap,
							bumpMap: extensions.get("OES_standard_derivatives") && !!material.bumpMap,
							normalMap: extensions.get("OES_standard_derivatives") && !!material.normalMap,
							specularMap: !!material.specularMap,
							alphaMap: !!material.alphaMap,

							vertexColors: material.vertexColors,
							vertexIds: material.vertexIds,

							useInstancing: material.useInstancing,

							wideLines: material.wideLines,

							fog: fog,
							useFog: material.fog,
							fogExp: fog instanceof THREE.FogExp2,

							sizeAttenuation: material.sizeAttenuation,
							logarithmicDepthBuffer: _logarithmicDepthBuffer,

							maxDirLights: maxLightCount.directional,
							maxPointLights: maxLightCount.point,
							maxSpotLights: maxLightCount.spot,
							maxHemiLights: maxLightCount.hemi,

							alphaTest: material.alphaTest,
							metal: material.metal,
							clearcoat: material.clearcoat,
							wrapAround: material.wrapAround,
							doubleSided: material.side === THREE.DoubleSide,
							flipSided: material.side === THREE.BackSide,

							mrtNormals: material.mrtNormals,
							mrtIdBuffer: material.mrtIdBuffer,
							tonemapOutput: material.tonemapOutput,
							packedNormals: material.packedNormals,
							hatchPattern: !!material.hatchParams,

							// TODO_NOP should not be per mat
							numCutplanes: material.cutplanes ? material.cutplanes.length : 0,

							// texture flags for clamp and invert for simple phong material
							// add as wanted/necessary
							mapInvert: material.map && material.map.invert,
							mapClampS: material.map && material.map.clampS,
							mapClampT: material.map && material.map.clampT,
							bumpMapClampS: material.bumpMap && material.bumpMap.clampS,
							bumpMapClampT: material.bumpMap && material.bumpMap.clampT,
							normalMapClampS: material.normalMap && material.normalMap.clampS,
							normalMapClampT: material.normalMap && material.normalMap.clampT,
							specularMapClampS: material.specularMap && material.specularMap.clampS,
							specularMapClampT: material.specularMap && material.specularMap.clampT,
							alphaMapInvert: material.alphaMap && material.alphaMap.invert,
							alphaMapClampS: material.alphaMap && material.alphaMap.clampS,
							alphaMapClampT: material.alphaMap && material.alphaMap.clampT };



					// texture flags for clamp for PRISM shader
					if (material.isPrismMaterial) {
							getPrismClampFlags(parameters, material);
							parameters.isPrism = true;
					}

					var chunks = [];

					if (shaderID) {

							chunks.push(shaderID);

					} else {

							chunks.push(material.fragmentShader);
							chunks.push(material.vertexShader);

					}

					//Append any custom defines to the shader cache key
					for (var d in material.defines) {

							chunks.push(d);
							chunks.push(material.defines[d]);

					}

					var p, pl;
					for (p in parameters) {

							chunks.push(p);
							chunks.push(parameters[p]);

					}

					var code = chunks.join();

					var program;

					// Check if code has been already compiled

					for (p = 0, pl = _programs.length; p < pl; p++) {

							var programInfo = _programs[p];

							if (programInfo.code === code) {

									program = programInfo;
									program.usedTimes++;

									break;

							}

					}

					if (program === undefined) {

							program = new webglprogram.WebGLProgram(_this, code, material, parameters);
							_programs.push(program);

							_this.info.memory.programs = _programs.length;

					}

					material.program = program;


					material.uniformsList = [];

					for (var u in material.__webglShader.uniforms) {

							var location = material.program.uniforms[u];

							if (location) {
									material.uniformsList.push([material.__webglShader.uniforms[u], location]);
							}

					}

			}

			function setMaterial(material) {

					if (material.transparent === true) {

							state.setBlending(material.blending, material.blendEquation, material.blendSrc, material.blendDst, material.blendEquationAlpha, material.blendSrcAlpha, material.blendDstAlpha);

					}

					state.setDepthTest(material.depthTest);
					state.setDepthWrite(material.depthWrite);
					state.setPolygonOffset(material.polygonOffset, material.polygonOffsetFactor, material.polygonOffsetUnits);

			}


			function setProgram(camera, lights, fog, material, object) {

					_usedTextureUnits = 0;

					if (material.needsUpdate) {

							if (material.program) deallocateMaterial(material);

							initMaterial(material, lights, fog, object);
							material.needsUpdate = false;

					}


					var refreshProgram = false;
					var refreshMaterial = false;
					var refreshLights = false;

					var program = material.program,
					p_uniforms = program.uniforms,
					m_uniforms = material.__webglShader.uniforms;

					if (program.id !== _currentProgram) {

							_gl.useProgram(program.program);
							_currentProgram = program.id;

							refreshProgram = true;
							refreshMaterial = true;
							refreshLights = true;

					}

					if (material.id !== _currentMaterialId) {

							if (_currentMaterialId === -1) refreshLights = true;
							_currentMaterialId = material.id;

							refreshMaterial = true;

					}

					if (refreshProgram || camera !== _currentCamera) {

							_gl.uniformMatrix4fv(p_uniforms.projectionMatrix, false, camera.projectionMatrix.elements);

							if (_logarithmicDepthBuffer) {

									_gl.uniform1f(p_uniforms.logDepthBufFC, 2.0 / (Math.log(camera.far + 1.0) / Math.LN2));

							}

							if (camera !== _currentCamera) _currentCamera = camera;


							// load material specific uniforms
							// (shader material also gets them for the sake of genericity)

							if (material instanceof THREE.ShaderMaterial ||
							material instanceof THREE.MeshPhongMaterial ||
							material.isPrismMaterial ||
							material.envMap) {

									if (p_uniforms.cameraPosition !== null) {

											_vector3.setFromMatrixPosition(camera.matrixWorld);
											_gl.uniform3f(p_uniforms.cameraPosition, _vector3.x, _vector3.y, _vector3.z);

									}

							}

							if (material instanceof THREE.MeshPhongMaterial ||
							material instanceof THREE.MeshLambertMaterial ||
							material instanceof THREE.ShaderMaterial ||
							material.isPrismMaterial ||
							material.skinning) {

									if (p_uniforms.viewMatrix !== null) {

											_gl.uniformMatrix4fv(p_uniforms.viewMatrix, false, camera.matrixWorldInverse.elements);

									}

									//NOTE: viewMatrixInverse is only used for transforming normal vectors
									//for sampling environment textures. This is why we do not use camera.matrixWorld here,
									//but a combination of camera.matrixWorld plus a rotation to make Y the up vector, so that
									//the top of the scene (whichever axis is up) results in sampling the top of the environment map.
									//If viewMatrixInverse is needed for other things in the shader, then we will need a second
									//uniform that does not include the world-up rotation, or apply a consistent world up rotation
									//to all geometries in the scene.
									if (p_uniforms.viewMatrixInverse !== null) {

											_gl.uniformMatrix4fv(p_uniforms.viewMatrixInverse, false, _viewInverseEnv.elements);

									}

									if (p_uniforms.mvpMatrix) {

											_gl.uniformMatrix4fv(p_uniforms.mvpMatrix, false, _projScreenMatrix.elements);

									}

									if (refreshLights) {
											refreshUniformsIBL(m_uniforms, material);
											markUniformsIBLNeedsUpdate(m_uniforms, true);
									} else {
											markUniformsIBLNeedsUpdate(m_uniforms, false);
									}

							}

					}


					if (refreshMaterial) {

							// refresh uniforms common to several materials

							if (fog && material.fog) {

									refreshUniformsFog(m_uniforms, fog);

							}

							if (material instanceof THREE.MeshPhongMaterial ||
							material instanceof THREE.MeshLambertMaterial ||
							material.isPrismMaterial ||
							material.lights) {

									if (_lightsNeedUpdate) {

											refreshLights = true;
											setupLights(lights);
											_lightsNeedUpdate = false;

									}

									if (refreshLights) {
											refreshUniformsLights(m_uniforms, _lights);
											markUniformsLightsNeedsUpdate(m_uniforms, true);
									} else {
											markUniformsLightsNeedsUpdate(m_uniforms, false);
									}

							}

							if (material instanceof THREE.MeshBasicMaterial ||
							material instanceof THREE.MeshLambertMaterial ||
							material instanceof THREE.MeshPhongMaterial) {

									refreshUniformsCommon(m_uniforms, material);
									refreshUniformsIBL(m_uniforms, material);
							}

							// refresh single material specific uniforms

							if (material instanceof THREE.PointCloudMaterial) {

									refreshUniformsPointCloud(m_uniforms, material);

							} else if (material instanceof THREE.LineBasicMaterial) {

									refreshUniformsLine(m_uniforms, material);

							} else if (material instanceof THREE.LineDashedMaterial) {

									refreshUniformsLine(m_uniforms, material);
									refreshUniformsDash(m_uniforms, material);

							} else if (material instanceof THREE.MeshPhongMaterial) {

									refreshUniformsPhong(m_uniforms, material);

							} else if (material instanceof THREE.MeshLambertMaterial) {

									refreshUniformsLambert(m_uniforms, material);

							} else if (material instanceof THREE.MeshDepthMaterial) {

									m_uniforms.mNear.value = camera.near;
									m_uniforms.mFar.value = camera.far;
									m_uniforms.opacity.value = material.opacity;

							} else if (material instanceof THREE.MeshNormalMaterial) {

									m_uniforms.opacity.value = material.opacity;

							} else if (material.isPrismMaterial) {

									refreshUniformsPrism(m_uniforms, material);
									refreshUniformsIBL(m_uniforms, material);

							}
							if (material.wideLines) {
									m_uniforms.view_size.value = new THREE.Vector2(window.innerWidth, window.innerHeight);
							}

							if (shadowmap.ShadowRender && material.shadowMap) {
									shadowmap.ShadowRender.RefreshUniformsShadow(m_uniforms, material);
							}

							// TODO_NOP: direct assignment dangerous?
							var ucp = m_uniforms.cutplanes;
							if (material.cutplanes && material.cutplanes.length > 0 && ucp) {
									ucp.value = material.cutplanes;
									// Currently, Prism is implemented as shader material, its uniform is just init for once.
									// Remove the array component if cutplanes's length changed so it can be re-init.
									if (ucp._array && ucp._array.length != 4 * material.cutplanes)
									ucp._array = undefined;
							}

							if (material.hatchParams && m_uniforms.hatchParams) {
									m_uniforms.hatchParams.value.copy(material.hatchParams);
									m_uniforms.hatchTintColor.value.copy(material.hatchTintColor);
									m_uniforms.hatchTintIntensity.value = material.hatchTintIntensity;
							}

							// load common uniforms

							loadUniformsGeneric(material.uniformsList);

					}

					loadUniformsMatrices(p_uniforms, object, camera);

					if (p_uniforms.modelMatrix !== null) {

							_gl.uniformMatrix4fv(p_uniforms.modelMatrix, false, object.matrixWorld.elements);

					}

					if (p_uniforms.modelId) {

							if (p_uniforms.dbId) {
									var dbId = object.dbId || object.fragId || 0;
									_gl.uniform3f(p_uniforms.dbId, (dbId & 0xff) / 255,
									(dbId >> 8 & 0xff) / 255,
									(dbId >> 16 & 0xff) / 255);
							}
							var modelId = object.modelId;
							_gl.uniform3f(p_uniforms.modelId, (modelId & 0xff) / 255,
							(modelId >> 8 & 0xff) / 255,
							//we can encode the highest bits of the ID here, since the model ID will not really need more than 2 bytes
							(dbId >> 24 & 0xff) / 255);

					} else if (p_uniforms.dbId !== null) {

							var dbId = object.dbId || object.fragId || 0;

							//The dbId is rendered to an RGB target, so the
							//uppermost byte of the dbId is dropped. Use a modelId
							//target if the full range is desired
							_gl.uniform3f(p_uniforms.dbId, (dbId & 0xff) / 255,
							(dbId >> 8 & 0xff) / 255,
							(dbId >> 16 & 0xff) / 255 /*,
	                                ((dbId >> 24) & 0xff) / 255*/);

					}

					// If a theming color uniform is defined, get it from the mesh.
					// Note that theming colors are Vector4 (not THREE.Color), because we need alpha for intensity.
					if (p_uniforms.themingColor) {
							var color = object.themingColor;
							if (color instanceof THREE.Vector4) {
									_gl.uniform4f(p_uniforms.themingColor, color.x, color.y, color.z, color.w);
							} else {
									_gl.uniform4f(p_uniforms.themingColor, 0.0, 0.0, 0.0, 0.0);
							}
					}

					return program;

			}

			// Uniforms (refresh uniforms objects)

			function refreshUniformsCommon(uniforms, material) {

					uniforms.opacity.value = material.opacity;


					uniforms.diffuse.value.copy(material.color);


					uniforms.map.value = material.map;
					uniforms.lightMap.value = material.lightMap;
					uniforms.specularMap.value = material.specularMap;
					uniforms.alphaMap.value = material.alphaMap;

					if (material.bumpMap) {

							uniforms.bumpMap.value = material.bumpMap;
							uniforms.bumpScale.value = material.bumpScale;

					}

					if (material.normalMap) {

							uniforms.normalMap.value = material.normalMap;
							uniforms.normalScale.value.copy(material.normalScale);

					}

					// uv repeat and offset setting priorities
					//	1. color map
					//	2. specular map
					//	3. normal map
					//	4. bump map
					//  5. alpha map

					//NOTE: We deviate from Three.js in that we allow
					//separate scales for diffuse/specular, alpha, and bump

					function setTexTransforms(uniforms, texMatrix, texture) {
							var offset = texture.offset;
							var repeat = texture.repeat;

							if (texMatrix) {
									var uMatrix = texMatrix.value;

									if (texture.matrix)
									uMatrix.copy(texture.matrix);else

									uMatrix.identity();

									uMatrix.elements[6] += offset.x;
									uMatrix.elements[7] += offset.y;
									uMatrix.elements[0] *= repeat.x;
									uMatrix.elements[3] *= repeat.x;
									uMatrix.elements[1] *= repeat.y;
									uMatrix.elements[4] *= repeat.y;
							} else
							{
									uniforms.offsetRepeat.value.set(offset.x, offset.y, repeat.x, repeat.y);
							}
					}

					if (material.alphaMap) {
							setTexTransforms(uniforms, uniforms.texMatrixAlpha, material.alphaMap);
					}

					var uvScaleMapBump;
					if (material.normalMap) {
							uvScaleMapBump = material.normalMap;
					} else if (material.bumpMap) {
							uvScaleMapBump = material.bumpMap;
					}
					if (uvScaleMapBump !== undefined) {
							setTexTransforms(uniforms, uniforms.texMatrixBump, uvScaleMapBump);
					}

					var uvScaleMap;
					if (material.map) {
							uvScaleMap = material.map;
					} else if (material.specularMap) {
							uvScaleMap = material.specularMap;
					}
					if (uvScaleMap !== undefined) {
							setTexTransforms(uniforms, uniforms.texMatrix, uvScaleMap);
					}

					uniforms.envMap.value = material.envMap;
					//uniforms.flipEnvMap.value = ( material.envMap instanceof THREE.WebGLRenderTargetCube ) ? 1 : -1;
					if (uniforms.irradianceMap) {
							uniforms.irradianceMap.value = material.irradianceMap;
					}

					uniforms.reflectivity.value = material.reflectivity;


					uniforms.refractionRatio.value = material.refractionRatio;

			}

			function refreshUniformsPointCloud(uniforms, material) {

					refreshUniformsLine(uniforms, material);
					uniforms.point_size.value = material.size;

			}

			function refreshUniformsLine(uniforms, material) {

					uniforms.diffuse.value = material.color;
					uniforms.opacity.value = material.opacity;

			}

			function refreshUniformsDash(uniforms, material) {

					uniforms.dashSize.value = material.dashSize;
					uniforms.totalSize.value = material.dashSize + material.gapSize;
					uniforms.scale.value = material.scale;

			}

			function refreshUniformsFog(uniforms, fog) {

					uniforms.fogColor.value = fog.color;

					if (fog instanceof THREE.Fog) {

							uniforms.fogNear.value = fog.near;
							uniforms.fogFar.value = fog.far;

					} else if (fog instanceof THREE.FogExp2) {

							uniforms.fogDensity.value = fog.density;

					}

			}

			function refreshUniformsIBL(uniforms, material) {
					if (uniforms.envMap)
					uniforms.envMap.value = material.envMap;
					//uniforms.flipEnvMap.value = ( material.envMap instanceof THREE.WebGLRenderTargetCube ) ? 1 : -1;
					if (uniforms.irradianceMap)
					uniforms.irradianceMap.value = material.irradianceMap;
					if (uniforms.envMapExposure)
					uniforms.envMapExposure.value = material.envMapExposure;
					if (uniforms.envRotationSin && uniforms.envRotationCos) {
							uniforms.envRotationSin.value = material.envRotationSin;
							uniforms.envRotationCos.value = material.envRotationCos;
					}
			}

			function markUniformsIBLNeedsUpdate(uniforms, boolean) {

					if (uniforms.envMap)
					uniforms.envMap.needsUpdate = boolean;
					//uniforms.flipEnvMap.value = ( material.envMap instanceof THREE.WebGLRenderTargetCube ) ? 1 : -1;
					if (uniforms.irradianceMap)
					uniforms.irradianceMap.needsUpdate = boolean;
					if (uniforms.envMapExposure)
					uniforms.envMapExposure.needsUpdate = boolean;
			}


			function refreshUniformsPhong(uniforms, material) {

					uniforms.shininess.value = material.shininess;

					//The environment cube map is blurred with the assumption that
					//max shininess is 2048 and every mip drops that by a factor of 4
					//"float MipmapIndex = log(shininess / 2048.0) / log(0.25);",
					//The simplification below was given in the original source for this method.
					//However, it does not seem to match the equation above, so we use a corrected one.
					//"float MipmapIndex = max(0.0, -1.66096404744368 * logShiny + 5.5);",
					//NOTE: Once roughness maps are supported, the computation will have to move to the shader.
					if (uniforms.reflMipIndex) {
							var logShiny = Math.log(Math.max(1.0 + 1e-10, material.shininess));
							uniforms.reflMipIndex.value = Math.max(0.0, -0.72134752 * logShiny + 5.5);
					}

					if (uniforms.emissive)
					uniforms.emissive.value.copy(material.emissive);

					uniforms.specular.value.copy(material.specular);

					//Not used by LMV
					/*
	    if ( material.wrapAround ) {
	    			uniforms.wrapRGB.value.copy( material.wrapRGB );
	    		}
	    */



					if (uniforms.exposureBias)
					uniforms.exposureBias.value = material.exposureBias;
			}

			function refreshUniformsPrism(uniforms, material) {

					function refreshPrismMapUniforms(uniforms, material, mapName) {
							uniforms[mapName].value = material[mapName];
							// yes, we want "!=" here, not "!==", as we test for both undefined and null
							if (material[mapName] != null)
							{
									uniforms[mapName + "_texMatrix"].value = new THREE.Matrix3().copy(material[mapName].matrix);
									uniforms[mapName + "_invert"].value = material[mapName].invert;
							}
					}

					function refreshPrismBumpMapUniforms(uniforms, material, mapName) {
							uniforms[mapName].value = material[mapName];
							// yes, we want "!=" here, not "!==", as we test for both undefined and null
							if (material[mapName] != null)
							{
									uniforms[mapName + "_texMatrix"].value = new THREE.Matrix3().copy(material[mapName].matrix);
									uniforms[mapName + "_bumpScale"].value = new THREE.Vector2().copy(material[mapName].bumpScale);
									uniforms[mapName + "_bumpmapType"].value = material[mapName].bumpmapType;
							}
					}

					uniforms.exposureBias.value = material.exposureBias;

					//Prism common properties.
					uniforms.surface_albedo.value = new THREE.Color().copy(material.surface_albedo);
					uniforms.surface_roughness.value = material.surface_roughness;
					uniforms.surface_anisotropy.value = material.surface_anisotropy;
					uniforms.surface_rotation.value = material.surface_rotation;

					refreshPrismMapUniforms(uniforms, material, "surface_albedo_map");
					refreshPrismMapUniforms(uniforms, material, "surface_roughness_map");
					refreshPrismMapUniforms(uniforms, material, "surface_cutout_map");
					refreshPrismMapUniforms(uniforms, material, "surface_anisotropy_map");
					refreshPrismMapUniforms(uniforms, material, "surface_rotation_map");

					refreshPrismBumpMapUniforms(uniforms, material, "surface_normal_map");

					//Update Prism properties according to the material type.
					switch (material.prismType) {
							case 'PrismOpaque':
									uniforms.opaque_albedo.value = new THREE.Color().copy(material.opaque_albedo);
									uniforms.opaque_luminance_modifier.value = new THREE.Color().copy(material.opaque_luminance_modifier);
									uniforms.opaque_f0.value = material.opaque_f0;
									uniforms.opaque_luminance.value = material.opaque_luminance;

									refreshPrismMapUniforms(uniforms, material, "opaque_albedo_map");
									refreshPrismMapUniforms(uniforms, material, "opaque_luminance_modifier_map");
									refreshPrismMapUniforms(uniforms, material, "opaque_f0_map");

									break;

							case 'PrismMetal':
									uniforms.metal_f0.value = new THREE.Color().copy(material.metal_f0);

									refreshPrismMapUniforms(uniforms, material, "metal_f0_map");

									break;

							case 'PrismLayered':
									uniforms.layered_f0.value = material.layered_f0;
									uniforms.layered_diffuse.value = new THREE.Color().copy(material.layered_diffuse);
									uniforms.layered_fraction.value = material.layered_fraction;
									uniforms.layered_bottom_f0.value = new THREE.Color().copy(material.layered_bottom_f0);
									uniforms.layered_roughness.value = material.layered_roughness;
									uniforms.layered_anisotropy.value = material.layered_anisotropy;
									uniforms.layered_rotation.value = material.layered_rotation;

									refreshPrismMapUniforms(uniforms, material, "layered_bottom_f0_map");
									refreshPrismMapUniforms(uniforms, material, "layered_f0_map");
									refreshPrismMapUniforms(uniforms, material, "layered_diffuse_map");
									refreshPrismMapUniforms(uniforms, material, "layered_fraction_map");
									refreshPrismMapUniforms(uniforms, material, "layered_roughness_map");
									refreshPrismMapUniforms(uniforms, material, "layered_anisotropy_map");
									refreshPrismMapUniforms(uniforms, material, "layered_rotation_map");

									refreshPrismBumpMapUniforms(uniforms, material, "layered_normal_map");

									break;

							case 'PrismTransparent':
									uniforms.transparent_color.value = new THREE.Color().copy(material.transparent_color);
									uniforms.transparent_distance.value = material.transparent_distance;
									uniforms.transparent_ior.value = material.transparent_ior;

									break;

							case 'PrismWood':
									uniforms.wood_fiber_cosine_enable.value = material.wood_fiber_cosine_enable;
									uniforms.wood_fiber_cosine_bands.value = material.wood_fiber_cosine_bands;
									uniforms.wood_fiber_cosine_weights.value = new THREE.Vector4().copy(material.wood_fiber_cosine_weights);
									uniforms.wood_fiber_cosine_frequencies.value = new THREE.Vector4().copy(material.wood_fiber_cosine_frequencies);

									uniforms.wood_fiber_perlin_enable.value = material.wood_fiber_perlin_enable;
									uniforms.wood_fiber_perlin_bands.value = material.wood_fiber_perlin_bands;
									uniforms.wood_fiber_perlin_weights.value = new THREE.Vector4().copy(material.wood_fiber_perlin_weights);
									uniforms.wood_fiber_perlin_frequencies.value = new THREE.Vector4().copy(material.wood_fiber_perlin_frequencies);
									uniforms.wood_fiber_perlin_scale_z.value = material.wood_fiber_perlin_scale_z;

									uniforms.wood_growth_perlin_enable.value = material.wood_growth_perlin_enable;
									uniforms.wood_growth_perlin_bands.value = material.wood_growth_perlin_bands;
									uniforms.wood_growth_perlin_weights.value = new THREE.Vector4().copy(material.wood_growth_perlin_weights);
									uniforms.wood_growth_perlin_frequencies.value = new THREE.Vector4().copy(material.wood_growth_perlin_frequencies);

									uniforms.wood_latewood_ratio.value = material.wood_latewood_ratio;
									uniforms.wood_earlywood_sharpness.value = material.wood_earlywood_sharpness;
									uniforms.wood_latewood_sharpness.value = material.wood_latewood_sharpness;
									uniforms.wood_ring_thickness.value = material.wood_ring_thickness;

									uniforms.wood_earlycolor_perlin_enable.value = material.wood_earlycolor_perlin_enable;
									uniforms.wood_earlycolor_perlin_bands.value = material.wood_earlycolor_perlin_bands;
									uniforms.wood_earlycolor_perlin_weights.value = new THREE.Vector4().copy(material.wood_earlycolor_perlin_weights);
									uniforms.wood_earlycolor_perlin_frequencies.value = new THREE.Vector4().copy(material.wood_earlycolor_perlin_frequencies);
									uniforms.wood_early_color.value = new THREE.Color().copy(material.wood_early_color);

									uniforms.wood_use_manual_late_color.value = material.wood_use_manual_late_color;
									uniforms.wood_manual_late_color.value = new THREE.Color().copy(material.wood_manual_late_color);

									uniforms.wood_latecolor_perlin_enable.value = material.wood_latecolor_perlin_enable;
									uniforms.wood_latecolor_perlin_bands.value = material.wood_latecolor_perlin_bands;
									uniforms.wood_latecolor_perlin_weights.value = new THREE.Vector4().copy(material.wood_latecolor_perlin_weights);
									uniforms.wood_latecolor_perlin_frequencies.value = new THREE.Vector4().copy(material.wood_latecolor_perlin_frequencies);
									uniforms.wood_late_color_power.value = material.wood_late_color_power;

									uniforms.wood_diffuse_perlin_enable.value = material.wood_diffuse_perlin_enable;
									uniforms.wood_diffuse_perlin_bands.value = material.wood_diffuse_perlin_bands;
									uniforms.wood_diffuse_perlin_weights.value = new THREE.Vector4().copy(material.wood_diffuse_perlin_weights);
									uniforms.wood_diffuse_perlin_frequencies.value = new THREE.Vector4().copy(material.wood_diffuse_perlin_frequencies);
									uniforms.wood_diffuse_perlin_scale_z.value = material.wood_diffuse_perlin_scale_z;

									uniforms.wood_use_pores.value = material.wood_use_pores;
									uniforms.wood_pore_type.value = material.wood_pore_type;
									uniforms.wood_pore_radius.value = material.wood_pore_radius;
									uniforms.wood_pore_cell_dim.value = material.wood_pore_cell_dim;
									uniforms.wood_pore_color_power.value = material.wood_pore_color_power;
									uniforms.wood_pore_depth.value = material.wood_pore_depth;

									uniforms.wood_use_rays.value = material.wood_use_rays;
									uniforms.wood_ray_color_power.value = material.wood_ray_color_power;
									uniforms.wood_ray_seg_length_z.value = material.wood_ray_seg_length_z;
									uniforms.wood_ray_num_slices.value = material.wood_ray_num_slices;
									uniforms.wood_ray_ellipse_z2x.value = material.wood_ray_ellipse_z2x;
									uniforms.wood_ray_ellipse_radius_x.value = material.wood_ray_ellipse_radius_x;

									uniforms.wood_use_latewood_bump.value = material.wood_use_latewood_bump;
									uniforms.wood_latewood_bump_depth.value = material.wood_latewood_bump_depth;

									uniforms.wood_use_groove_roughness.value = material.wood_use_groove_roughness;
									uniforms.wood_groove_roughness.value = material.wood_groove_roughness;
									uniforms.wood_diffuse_lobe_weight.value = material.wood_diffuse_lobe_weight;

									refreshPrismMapUniforms(uniforms, material, "wood_curly_distortion_map");
									if (uniforms["wood_curly_distortion_map"].value != null)
									{
											// This map constains tree space position offsets
											uniforms["wood_curly_distortion_map"].value.minFilter = THREE.NearestFilter;
											uniforms["wood_curly_distortion_map"].value.magFilter = THREE.NearestFilter;
											uniforms.wood_curly_distortion_enable.value = material.wood_curly_distortion_enable;
											uniforms.wood_curly_distortion_scale.value = material.wood_curly_distortion_scale;
									}

									var earlyWood = 1.0 - material.wood_latewood_ratio;
									var earlyWoodSharpness = material.wood_earlywood_sharpness * earlyWood;
									var lateWoodSharpness = material.wood_latewood_sharpness * material.wood_latewood_ratio;
									var riseStart = earlyWood + lateWoodSharpness;
									uniforms.wood_ring_fraction.value = new THREE.Vector4(earlyWood, earlyWoodSharpness, lateWoodSharpness, riseStart);
									uniforms.wood_fall_rise.value = new THREE.Vector2(earlyWood - earlyWoodSharpness, material.wood_latewood_ratio - lateWoodSharpness);

									break;

							default:
									THREE.warn('Unknown prism type: ' + material.prismType);}


					uniforms.envExponentMin.value = material.envExponentMin;
					uniforms.envExponentMax.value = material.envExponentMax;
					uniforms.envExponentCount.value = material.envExponentCount;
			}

			function refreshUniformsLambert(uniforms, material) {

					uniforms.emissive.value.copy(material.emissive);


					if (material.wrapAround) {

							uniforms.wrapRGB.value.copy(material.wrapRGB);

					}

			}

			function refreshUniformsLights(uniforms, lights) {

					uniforms.ambientLightColor.value = lights.ambient;

					uniforms.directionalLightColor.value = lights.directional.colors;
					uniforms.directionalLightDirection.value = lights.directional.positions;

					uniforms.pointLightColor.value = lights.point.colors;
					uniforms.pointLightPosition.value = lights.point.positions;
					uniforms.pointLightDistance.value = lights.point.distances;

					uniforms.spotLightColor.value = lights.spot.colors;
					uniforms.spotLightPosition.value = lights.spot.positions;
					uniforms.spotLightDistance.value = lights.spot.distances;
					uniforms.spotLightDirection.value = lights.spot.directions;
					uniforms.spotLightAngleCos.value = lights.spot.anglesCos;
					uniforms.spotLightExponent.value = lights.spot.exponents;

					uniforms.hemisphereLightSkyColor.value = lights.hemi.skyColors;
					uniforms.hemisphereLightGroundColor.value = lights.hemi.groundColors;
					uniforms.hemisphereLightDirection.value = lights.hemi.positions;

			}

			// If uniforms are marked as clean, they don't need to be loaded to the GPU.

			function markUniformsLightsNeedsUpdate(uniforms, boolean) {

					uniforms.ambientLightColor.needsUpdate = boolean;

					uniforms.directionalLightColor.needsUpdate = boolean;
					uniforms.directionalLightDirection.needsUpdate = boolean;

					uniforms.pointLightColor.needsUpdate = boolean;
					uniforms.pointLightPosition.needsUpdate = boolean;
					uniforms.pointLightDistance.needsUpdate = boolean;

					uniforms.spotLightColor.needsUpdate = boolean;
					uniforms.spotLightPosition.needsUpdate = boolean;
					uniforms.spotLightDistance.needsUpdate = boolean;
					uniforms.spotLightDirection.needsUpdate = boolean;
					uniforms.spotLightAngleCos.needsUpdate = boolean;
					uniforms.spotLightExponent.needsUpdate = boolean;

					uniforms.hemisphereLightSkyColor.needsUpdate = boolean;
					uniforms.hemisphereLightGroundColor.needsUpdate = boolean;
					uniforms.hemisphereLightDirection.needsUpdate = boolean;

			}

			// Uniforms (load to GPU)

			function loadUniformsMatrices(uniforms, object, camera) {

					_objectModelViewMatrix.multiplyMatrices(camera.matrixWorldInverse, object.matrixWorld);

					_gl.uniformMatrix4fv(uniforms.modelViewMatrix, false, _objectModelViewMatrix.elements);

					if (uniforms.normalMatrix) {

							_objectNormalMatrix.getNormalMatrix(_objectModelViewMatrix);

							_gl.uniformMatrix3fv(uniforms.normalMatrix, false, _objectNormalMatrix.elements);

					}

			}

			function getTextureUnit() {

					var textureUnit = _usedTextureUnits;

					if (textureUnit >= _maxTextures) {

							THREE.warn("WebGLRenderer: trying to use " + textureUnit + " texture units while this GPU supports only " + _maxTextures);

					}

					_usedTextureUnits += 1;

					return textureUnit;

			}

			function loadUniformsGeneric(uniforms) {

					var texture, textureUnit, offset;

					for (var j = 0, jl = uniforms.length; j < jl; j++) {

							var uniform = uniforms[j][0];

							// needsUpdate property is not added to all uniforms.
							if (uniform.needsUpdate === false) continue;

							var type = uniform.type;
							var value = uniform.value;
							var location = uniforms[j][1];

							var i, il;

							switch (type) {

									case '1i':
											_gl.uniform1i(location, value);
											break;

									case '1f':
											_gl.uniform1f(location, value);
											break;

									case '2f':
											_gl.uniform2f(location, value[0], value[1]);
											break;

									case '3f':
											_gl.uniform3f(location, value[0], value[1], value[2]);
											break;

									case '4f':
											_gl.uniform4f(location, value[0], value[1], value[2], value[3]);
											break;

									case '1iv':
											_gl.uniform1iv(location, value);
											break;

									case '3iv':
											_gl.uniform3iv(location, value);
											break;

									case '1fv':
											_gl.uniform1fv(location, value);
											break;

									case '2fv':
											_gl.uniform2fv(location, value);
											break;

									case '3fv':
											_gl.uniform3fv(location, value);
											break;

									case '4fv':
											_gl.uniform4fv(location, value);
											break;

									case 'Matrix3fv':
											_gl.uniformMatrix3fv(location, false, value);
											break;

									case 'Matrix4fv':
											_gl.uniformMatrix4fv(location, false, value);
											break;

									//

									case 'i':

											// single integer
											_gl.uniform1i(location, value);

											break;

									case 'f':

											// single float
											_gl.uniform1f(location, value);

											break;

									case 'v2':

											// single THREE.Vector2
											_gl.uniform2f(location, value.x, value.y);

											break;

									case 'v3':

											// single THREE.Vector3
											_gl.uniform3f(location, value.x, value.y, value.z);

											break;

									case 'v4':

											// single THREE.Vector4
											_gl.uniform4f(location, value.x, value.y, value.z, value.w);

											break;

									case 'c':

											// single THREE.Color
											_gl.uniform3f(location, value.r, value.g, value.b);

											break;

									case 'iv1':

											// flat array of integers (JS or typed array)
											_gl.uniform1iv(location, value);

											break;

									case 'iv':

											// flat array of integers with 3 x N size (JS or typed array)
											_gl.uniform3iv(location, value);

											break;

									case 'fv1':

											// flat array of floats (JS or typed array)
											_gl.uniform1fv(location, value);

											break;

									case 'fv':

											// flat array of floats with 3 x N size (JS or typed array)
											_gl.uniform3fv(location, value);

											break;

									case 'v2v':

											// array of THREE.Vector2

											if (uniform._array === undefined) {

													uniform._array = new Float32Array(2 * value.length);

											}

											for (i = 0, il = value.length; i < il; i++) {

													offset = i * 2;

													uniform._array[offset] = value[i].x;
													uniform._array[offset + 1] = value[i].y;

											}

											_gl.uniform2fv(location, uniform._array);

											break;

									case 'v3v':

											// array of THREE.Vector3

											if (uniform._array === undefined) {

													uniform._array = new Float32Array(3 * value.length);

											}

											for (i = 0, il = value.length; i < il; i++) {

													offset = i * 3;

													uniform._array[offset] = value[i].x;
													uniform._array[offset + 1] = value[i].y;
													uniform._array[offset + 2] = value[i].z;

											}

											_gl.uniform3fv(location, uniform._array);

											break;

									case 'v4v':

											// array of THREE.Vector4

											if (uniform._array === undefined) {

													uniform._array = new Float32Array(4 * value.length);

											}

											for (i = 0, il = value.length; i < il; i++) {

													offset = i * 4;

													uniform._array[offset] = value[i].x;
													uniform._array[offset + 1] = value[i].y;
													uniform._array[offset + 2] = value[i].z;
													uniform._array[offset + 3] = value[i].w;

											}

											_gl.uniform4fv(location, uniform._array);

											break;

									case 'm3':

											// single THREE.Matrix3
											_gl.uniformMatrix3fv(location, false, value.elements);

											break;

									case 'm3v':

											// array of THREE.Matrix3

											if (uniform._array === undefined) {

													uniform._array = new Float32Array(9 * value.length);

											}

											for (i = 0, il = value.length; i < il; i++) {

													value[i].flattenToArrayOffset(uniform._array, i * 9);

											}

											_gl.uniformMatrix3fv(location, false, uniform._array);

											break;

									case 'm4':

											// single THREE.Matrix4
											_gl.uniformMatrix4fv(location, false, value.elements);

											break;

									case 'm4v':

											// array of THREE.Matrix4

											if (uniform._array === undefined) {

													uniform._array = new Float32Array(16 * value.length);

											}

											for (i = 0, il = value.length; i < il; i++) {

													value[i].flattenToArrayOffset(uniform._array, i * 16);

											}

											_gl.uniformMatrix4fv(location, false, uniform._array);

											break;

									case 't':

											// single THREE.Texture (2d or cube)

											texture = value;
											textureUnit = getTextureUnit();

											_gl.uniform1i(location, textureUnit);

											if (!texture) continue;

											if (Array.isArray(texture.image) && texture.image.length === 6 || // CompressedTexture can have Array in image :/
											texture instanceof THREE.CubeTexture) {

													if (!texture.needsUpdate) {
															_gl.activeTexture(_gl.TEXTURE0 + textureUnit);
															_gl.bindTexture(_gl.TEXTURE_CUBE_MAP, texture.__webglTextureCube);
													} else {
															setCubeTexture(texture, textureUnit);
													}

											} else if (texture instanceof THREE.WebGLRenderTargetCube) {

													setCubeTextureDynamic(texture, textureUnit);

											} else {

													_this.setTexture(texture, textureUnit);

											}

											break;

									case 'tv':

											// array of THREE.Texture (2d)

											if (uniform._array === undefined) {

													uniform._array = [];

											}

											for (i = 0, il = uniform.value.length; i < il; i++) {

													uniform._array[i] = getTextureUnit();

											}

											_gl.uniform1iv(location, uniform._array);

											for (i = 0, il = uniform.value.length; i < il; i++) {

													texture = uniform.value[i];
													textureUnit = uniform._array[i];

													if (!texture) continue;

													_this.setTexture(texture, textureUnit);

											}

											break;

									default:

											THREE.warn('THREE.WebGLRenderer: Unknown uniform type: ' + type);}



					}

			}

			//

			/* not used
	  function setColorGamma( array, offset, color, intensitySq ) {
	  
	  	array[ offset ]	 = color.r * color.r * intensitySq;
	  	array[ offset + 1 ] = color.g * color.g * intensitySq;
	  	array[ offset + 2 ] = color.b * color.b * intensitySq;
	  
	  }
	  */

			function setColorLinear(array, offset, color, intensity) {

					array[offset] = color.r * intensity;
					array[offset + 1] = color.g * intensity;
					array[offset + 2] = color.b * intensity;

			}

			function setupLights(lights) {

					var l,ll,light,
					r = 0,g = 0,b = 0,
					color,skyColor,groundColor,
					intensity,
					distance,

					zlights = _lights,

					dirColors = zlights.directional.colors,
					dirPositions = zlights.directional.positions,

					pointColors = zlights.point.colors,
					pointPositions = zlights.point.positions,
					pointDistances = zlights.point.distances,

					spotColors = zlights.spot.colors,
					spotPositions = zlights.spot.positions,
					spotDistances = zlights.spot.distances,
					spotDirections = zlights.spot.directions,
					spotAnglesCos = zlights.spot.anglesCos,
					spotExponents = zlights.spot.exponents,

					hemiSkyColors = zlights.hemi.skyColors,
					hemiGroundColors = zlights.hemi.groundColors,
					hemiPositions = zlights.hemi.positions,

					dirLength = 0,
					pointLength = 0,
					spotLength = 0,
					hemiLength = 0,

					dirCount = 0,
					pointCount = 0,
					spotCount = 0,
					hemiCount = 0,

					dirOffset = 0,
					pointOffset = 0,
					spotOffset = 0,
					hemiOffset = 0;

					for (l = 0, ll = lights.length; l < ll; l++) {

							light = lights[l];

							if (light.onlyShadow) continue;

							color = light.color;
							intensity = light.intensity;
							distance = light.distance;

							if (light instanceof THREE.AmbientLight) {

									if (!light.visible) continue;

									r += color.r;
									g += color.g;
									b += color.b;

							} else if (light instanceof THREE.DirectionalLight) {

									dirCount += 1;

									if (!light.visible) continue;

									_direction.setFromMatrixPosition(light.matrixWorld);
									_vector3.setFromMatrixPosition(light.target.matrixWorld);
									_direction.sub(_vector3);
									_direction.normalize();

									dirOffset = dirLength * 3;

									dirPositions[dirOffset] = _direction.x;
									dirPositions[dirOffset + 1] = _direction.y;
									dirPositions[dirOffset + 2] = _direction.z;

									setColorLinear(dirColors, dirOffset, color, intensity);

									dirLength += 1;

							} else if (light instanceof THREE.PointLight) {

									pointCount += 1;

									if (!light.visible) continue;

									pointOffset = pointLength * 3;


									setColorLinear(pointColors, pointOffset, color, intensity);


									_vector3.setFromMatrixPosition(light.matrixWorld);

									pointPositions[pointOffset] = _vector3.x;
									pointPositions[pointOffset + 1] = _vector3.y;
									pointPositions[pointOffset + 2] = _vector3.z;

									pointDistances[pointLength] = distance;

									pointLength += 1;

							} else if (light instanceof THREE.SpotLight) {

									spotCount += 1;

									if (!light.visible) continue;

									spotOffset = spotLength * 3;

									setColorLinear(spotColors, spotOffset, color, intensity);

									_vector3.setFromMatrixPosition(light.matrixWorld);

									spotPositions[spotOffset] = _vector3.x;
									spotPositions[spotOffset + 1] = _vector3.y;
									spotPositions[spotOffset + 2] = _vector3.z;

									spotDistances[spotLength] = distance;

									_direction.copy(_vector3);
									_vector3.setFromMatrixPosition(light.target.matrixWorld);
									_direction.sub(_vector3);
									_direction.normalize();

									spotDirections[spotOffset] = _direction.x;
									spotDirections[spotOffset + 1] = _direction.y;
									spotDirections[spotOffset + 2] = _direction.z;

									spotAnglesCos[spotLength] = Math.cos(light.angle);
									spotExponents[spotLength] = light.exponent;

									spotLength += 1;

							} else if (light instanceof THREE.HemisphereLight) {

									hemiCount += 1;

									if (!light.visible) continue;

									_direction.setFromMatrixPosition(light.matrixWorld);
									_direction.normalize();

									hemiOffset = hemiLength * 3;

									hemiPositions[hemiOffset] = _direction.x;
									hemiPositions[hemiOffset + 1] = _direction.y;
									hemiPositions[hemiOffset + 2] = _direction.z;

									skyColor = light.color;
									groundColor = light.groundColor;

									setColorLinear(hemiSkyColors, hemiOffset, skyColor, intensity);
									setColorLinear(hemiGroundColors, hemiOffset, groundColor, intensity);

									hemiLength += 1;

							}

					}

					// null eventual remains from removed lights
					// (this is to avoid if in shader)

					for (l = dirLength * 3, ll = Math.max(dirColors.length, dirCount * 3); l < ll; l++) {dirColors[l] = 0.0;}
					for (l = pointLength * 3, ll = Math.max(pointColors.length, pointCount * 3); l < ll; l++) {pointColors[l] = 0.0;}
					for (l = spotLength * 3, ll = Math.max(spotColors.length, spotCount * 3); l < ll; l++) {spotColors[l] = 0.0;}
					for (l = hemiLength * 3, ll = Math.max(hemiSkyColors.length, hemiCount * 3); l < ll; l++) {hemiSkyColors[l] = 0.0;}
					for (l = hemiLength * 3, ll = Math.max(hemiGroundColors.length, hemiCount * 3); l < ll; l++) {hemiGroundColors[l] = 0.0;}

					zlights.directional.length = dirLength;
					zlights.point.length = pointLength;
					zlights.spot.length = spotLength;
					zlights.hemi.length = hemiLength;

					zlights.ambient[0] = r;
					zlights.ambient[1] = g;
					zlights.ambient[2] = b;

			}

			// GL state setting

			this.setFaceCulling = function (cullFace, frontFaceDirection) {

					if (cullFace === THREE.CullFaceNone) {

							_gl.disable(_gl.CULL_FACE);

					} else {

							if (frontFaceDirection === THREE.FrontFaceDirectionCW) {

									_gl.frontFace(_gl.CW);

							} else {

									_gl.frontFace(_gl.CCW);

							}

							if (cullFace === THREE.CullFaceBack) {

									_gl.cullFace(_gl.BACK);

							} else if (cullFace === THREE.CullFaceFront) {

									_gl.cullFace(_gl.FRONT);

							} else {

									_gl.cullFace(_gl.FRONT_AND_BACK);

							}

							_gl.enable(_gl.CULL_FACE);

					}

			};


			// NOTE: if you change the .side value of a material itself, you need to set
			// material.needsUpdate = true, so that the material's shaders are recompiled.
			// You definitely want to avoid this recompilation per frame; usually the
			// THREE.DoubleSided setting works fine for both back and front side display,
			// even if the colors of the sides are different (which are simply uniforms
			// being changed, not the programs themselves).
			this.setMaterialFaces = function (material) {

					state.setDoubleSided(material.side === THREE.DoubleSide);
					state.setFlipSided(material.side === THREE.BackSide);

			};

			// Textures


			function setTextureParameters(textureType, texture, isImagePowerOfTwo) {

					var extension;

					if (isImagePowerOfTwo) {

							_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, paramThreeToGL(texture.wrapS));
							_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, paramThreeToGL(texture.wrapT));

							_gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, paramThreeToGL(texture.magFilter));
							_gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, paramThreeToGL(texture.minFilter));

					} else {

							_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_S, _gl.CLAMP_TO_EDGE);
							_gl.texParameteri(textureType, _gl.TEXTURE_WRAP_T, _gl.CLAMP_TO_EDGE);

							if (texture.wrapS !== THREE.ClampToEdgeWrapping || texture.wrapT !== THREE.ClampToEdgeWrapping) {

									THREE.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( ' + texture.sourceFile + ' )');

							}

							_gl.texParameteri(textureType, _gl.TEXTURE_MAG_FILTER, filterFallback(texture.magFilter));
							_gl.texParameteri(textureType, _gl.TEXTURE_MIN_FILTER, filterFallback(texture.minFilter));

							if (texture.minFilter !== THREE.NearestFilter && texture.minFilter !== THREE.LinearFilter) {

									THREE.warn('THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( ' + texture.sourceFile + ' )');

							}

					}

					extension = extensions.get('EXT_texture_filter_anisotropic');

					if (extension && texture.type !== THREE.FloatType && texture.type !== THREE.HalfFloatType) {

							if (texture.anisotropy > 1 || texture.__oldAnisotropy) {

									_gl.texParameterf(textureType, extension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(texture.anisotropy, _this.getMaxAnisotropy()));
									texture.__oldAnisotropy = texture.anisotropy;

							}

					}

			}


			this.uploadTexture = function (texture) {

					if (texture.__webglInit === undefined) {

							texture.__webglInit = true;

							texture.addEventListener('dispose', onTextureDispose);

							texture.__webglTexture = _gl.createTexture();

							_this.info.memory.textures++;

					}

					_gl.bindTexture(_gl.TEXTURE_2D, texture.__webglTexture);

					_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);
					_gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultiplyAlpha);
					_gl.pixelStorei(_gl.UNPACK_ALIGNMENT, texture.unpackAlignment);

					texture.image = clampToMaxSize(texture.image, _maxTextureSize);

					var image = texture.image,
					isImagePowerOfTwo = THREE.Math.isPowerOfTwo(image.width) && THREE.Math.isPowerOfTwo(image.height),
					glFormat = paramThreeToGL(texture.format),
					glType = paramThreeToGL(texture.type);

					setTextureParameters(_gl.TEXTURE_2D, texture, isImagePowerOfTwo);

					var mipmap,mipmaps = texture.mipmaps;
					var i, il;

					if (texture instanceof THREE.DataTexture) {

							// use manually created mipmaps if available
							// if there are no manual mipmaps
							// set 0 level mipmap and then use GL to generate other mipmap levels

							if (mipmaps.length > 0 && isImagePowerOfTwo) {

									for (i = 0, il = mipmaps.length; i < il; i++) {

											mipmap = mipmaps[i];
											_gl.texImage2D(_gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);

									}

									texture.generateMipmaps = false;

							} else {

									_gl.texImage2D(_gl.TEXTURE_2D, 0, glFormat, image.width, image.height, 0, glFormat, glType, image.data);

							}

					} else if (texture instanceof THREE.CompressedTexture) {

							for (i = 0, il = mipmaps.length; i < il; i++) {

									mipmap = mipmaps[i];

									if (texture.format !== THREE.RGBAFormat && texture.format !== THREE.RGBFormat) {

											if (getCompressedTextureFormats().indexOf(glFormat) > -1) {

													_gl.compressedTexImage2D(_gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, mipmap.data);

											} else {

													THREE.warn("Attempt to load unsupported compressed texture format");

											}

									} else {

											_gl.texImage2D(_gl.TEXTURE_2D, i, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);

									}
							}

							// make sure compressed texture pyramids are complete (i.e. include all levels 
							// between what ever was the coarsest level in file and 1x1)
							if (mipmaps.length > 1 && getCompressedTextureFormats().indexOf(glFormat) > -1)
							{
									var w = mipmap.width >> 1,
									h = mipmap.height >> 1,
									l = mipmaps.length;

									var view;

									while (w >= 1 || h >= 1) {
											view = mipmap.width == 4 && mipmap.height == 4 ? mipmap.data : new DataView(
											mipmap.data.buffer,
											mipmap.data.byteOffset,
											mipmap.data.byteLength * (Math.max(w, 4) * Math.max(h, 4)) / (mipmap.width * mipmap.height));


											_gl.compressedTexImage2D(_gl.TEXTURE_2D, l, glFormat, Math.max(w, 1), Math.max(h, 1), 0, view);
											w = w >> 1;
											h = h >> 1;
											++l;
									}
							}

					} else {// regular Texture (image, video, canvas)

							// use manually created mipmaps if available
							// if there are no manual mipmaps
							// set 0 level mipmap and then use GL to generate other mipmap levels

							if (mipmaps.length > 0 && isImagePowerOfTwo) {

									for (i = 0, il = mipmaps.length; i < il; i++) {

											mipmap = globals.rescueFromPolymer(mipmaps[i]);
											_gl.texImage2D(_gl.TEXTURE_2D, i, glFormat, glFormat, glType, mipmap);

									}

									texture.generateMipmaps = false;

							} else {

									_gl.texImage2D(_gl.TEXTURE_2D, 0, glFormat, glFormat, glType, globals.rescueFromPolymer(texture.image));

							}

					}

					if (texture.generateMipmaps && isImagePowerOfTwo) _gl.generateMipmap(_gl.TEXTURE_2D);

					texture.needsUpdate = false;

					if (texture.onUpdate) texture.onUpdate();

			};

			this.setTexture = function (texture, slot) {
					_gl.activeTexture(_gl.TEXTURE0 + slot);
					if (texture.needsUpdate) {
							_this.uploadTexture(texture);
					} else if (texture.__webglTexture) {
							_gl.bindTexture(_gl.TEXTURE_2D, texture.__webglTexture);
					}
			};

			function clampToMaxSize(image, maxSize) {

					if (image.width <= maxSize && image.height <= maxSize) {

							return image;

					}

					// Warning: Scaling through the canvas will only work with images that use
					// premultiplied alpha.

					var maxDimension = Math.max(image.width, image.height);
					var newWidth = Math.floor(image.width * maxSize / maxDimension);
					var newHeight = Math.floor(image.height * maxSize / maxDimension);

					var canvas = document.createElement('canvas');
					canvas.width = newWidth;
					canvas.height = newHeight;

					var ctx = canvas.getContext("2d");
					ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, newWidth, newHeight);

					return canvas;

			}

			function setCubeTexture(texture, slot) {

					if (texture.image.length === 6) {

							if (texture.needsUpdate) {

									if (!texture.__webglTextureCube) {

											texture.addEventListener('dispose', onTextureDispose);

											texture.__webglTextureCube = _gl.createTexture();

											_this.info.memory.textures++;

									}

									_gl.activeTexture(_gl.TEXTURE0 + slot);
									_gl.bindTexture(_gl.TEXTURE_CUBE_MAP, texture.__webglTextureCube);

									_gl.pixelStorei(_gl.UNPACK_FLIP_Y_WEBGL, texture.flipY);

									var isCompressed = texture instanceof THREE.CompressedTexture;
									var isDataTexture = texture.image[0] instanceof THREE.DataTexture;

									var cubeImage = [];

									var i;

									for (i = 0; i < 6; i++) {

											if (_this.autoScaleCubemaps && !isCompressed && !isDataTexture) {

													cubeImage[i] = clampToMaxSize(texture.image[i], _maxCubemapSize);

											} else {

													cubeImage[i] = isDataTexture ? texture.image[i].image : texture.image[i];

											}

									}

									var image = cubeImage[0],
									isImagePowerOfTwo = THREE.Math.isPowerOfTwo(image.width) && THREE.Math.isPowerOfTwo(image.height),
									glFormat = paramThreeToGL(texture.format),
									glType = paramThreeToGL(texture.type);

									setTextureParameters(_gl.TEXTURE_CUBE_MAP, texture, isImagePowerOfTwo);

									for (i = 0; i < 6; i++) {

											if (!isCompressed) {

													if (isDataTexture) {

															_gl.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, cubeImage[i].width, cubeImage[i].height, 0, glFormat, glType, cubeImage[i].data);

													} else {

															_gl.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, glFormat, glFormat, glType, cubeImage[i]);

													}

											} else {

													var mipmap,mipmaps = cubeImage[i].mipmaps;

													for (var j = 0, jl = mipmaps.length; j < jl; j++) {

															mipmap = mipmaps[j];

															if (texture.format !== THREE.RGBAFormat && texture.format !== THREE.RGBFormat) {

																	if (getCompressedTextureFormats().indexOf(glFormat) > -1) {

																			_gl.compressedTexImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, mipmap.data);

																	} else {

																			THREE.warn("Attempt to load unsupported compressed texture format");

																	}

															} else {

																	_gl.texImage2D(_gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, j, glFormat, mipmap.width, mipmap.height, 0, glFormat, glType, mipmap.data);

															}

													}

											}

									}

									if (texture.generateMipmaps && isImagePowerOfTwo) {

											_gl.generateMipmap(_gl.TEXTURE_CUBE_MAP);

									}

									texture.needsUpdate = false;

									if (texture.onUpdate) texture.onUpdate();

							} else {

									_gl.activeTexture(_gl.TEXTURE0 + slot);
									_gl.bindTexture(_gl.TEXTURE_CUBE_MAP, texture.__webglTextureCube);

							}

					}

			}

			function setCubeTextureDynamic(texture, slot) {

					_gl.activeTexture(_gl.TEXTURE0 + slot);
					_gl.bindTexture(_gl.TEXTURE_CUBE_MAP, texture.__webglTexture);

			}

			// Render targets

			this.initFrameBufferMRT = function (renderTargets, verifyFrameBufferWorks) {

					var primaryTarget = renderTargets[0];
					var clearState = false;

					//For MRT, the frame and depth buffer are owned
					//by the first target.
					if (primaryTarget && !primaryTarget.__webglFramebuffer) {

							if (primaryTarget.depthBuffer === undefined) primaryTarget.depthBuffer = true;
							if (primaryTarget.stencilBuffer === undefined) primaryTarget.stencilBuffer = true;

							primaryTarget.__webglFramebuffer = _gl.createFramebuffer();

							_gl.bindFramebuffer(_gl.FRAMEBUFFER, primaryTarget.__webglFramebuffer);

							var renderbuffer;

							//Allocate depth buffer if needed

							if (primaryTarget.shareDepthFrom) {

									renderbuffer = primaryTarget.__webglRenderbuffer = primaryTarget.shareDepthFrom.__webglRenderbuffer;

							} else {

									if (primaryTarget.depthBuffer && !primaryTarget.stencilBuffer) {

											renderbuffer = primaryTarget.__webglRenderbuffer = _gl.createRenderbuffer();

											_gl.bindRenderbuffer(_gl.RENDERBUFFER, renderbuffer);

											_gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.DEPTH_COMPONENT16, primaryTarget.width, primaryTarget.height);

									} else if (primaryTarget.depthBuffer && primaryTarget.stencilBuffer) {

											renderbuffer = primaryTarget.__webglRenderbuffer = _gl.createRenderbuffer();

											_gl.bindRenderbuffer(_gl.RENDERBUFFER, renderbuffer);

											_gl.renderbufferStorage(_gl.RENDERBUFFER, _gl.DEPTH_STENCIL, primaryTarget.width, primaryTarget.height);

									} else {

											//_gl.renderbufferStorage( _gl.RENDERBUFFER, _gl.RGBA4, primaryTarget.width, primaryTarget.height );

									}

							}

							//Bind depth buffer

							if (primaryTarget.depthBuffer && !primaryTarget.stencilBuffer) {

									_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);

							} else if (primaryTarget.depthBuffer && primaryTarget.stencilBuffer) {

									_gl.framebufferRenderbuffer(_gl.FRAMEBUFFER, _gl.DEPTH_STENCIL_ATTACHMENT, _gl.RENDERBUFFER, renderbuffer);

							} else {

							}

							clearState = true;
					}

					var tmpBuf = _currentFramebuffer;
					_gl.bindFramebuffer(_gl.FRAMEBUFFER, primaryTarget.__webglFramebuffer);

					//Create backing textures for all the targets and attach them
					//to the frame buffer.
					var i;
					for (i = 0; i < renderTargets.length; i++) {
							var rt = renderTargets[i];

							if (!rt.__webglTexture) {

									var isTargetPowerOfTwo = THREE.Math.isPowerOfTwo(rt.width) && THREE.Math.isPowerOfTwo(rt.height),
									glFormat = paramThreeToGL(rt.format),
									glType = paramThreeToGL(rt.type);

									rt.addEventListener('dispose', onRenderTargetDispose);

									rt.__webglTexture = _gl.createTexture();

									_this.info.memory.textures++;

									_gl.bindTexture(_gl.TEXTURE_2D, rt.__webglTexture);

									setTextureParameters(_gl.TEXTURE_2D, rt, isTargetPowerOfTwo);

									_gl.texImage2D(_gl.TEXTURE_2D, 0, glFormat, rt.width, rt.height, 0, glFormat, glType, null);

									if (isTargetPowerOfTwo && rt.generateMipmaps)
									_gl.generateMipmap(_gl.TEXTURE_2D);
							}

							_gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.TEXTURE_2D, rt.__webglTexture, 0);
					}

					if (this.supportsMRT()) {
							/*
	                              * IMPORTANT: Up until recently, whenever we would switch from a framebuffer with 3 attachments
	                              * to a framebuffer with 2 attachments, we would just ignore the extraneous attachment, and it
	                              * worked fine.
	                              * As of Chrome version 54, we can no longer do that. If we try to keep the extra attachment
	                              * linked to the framebuffer, Chrome errors out with "framebuffer incomplete".
	                              */
							var maxColorAttachments = _gl.getParameter(_glExtensionDrawBuffers.MAX_COLOR_ATTACHMENTS_WEBGL);
							while (i < maxColorAttachments) {
									_gl.framebufferTexture2D(_gl.FRAMEBUFFER, _gl.COLOR_ATTACHMENT0 + i, _gl.TEXTURE_2D, null, 0);
									i++;
							}

							var bufs = [_glExtensionDrawBuffers.COLOR_ATTACHMENT0_WEBGL];
							for (i = 1; i < renderTargets.length; i++) {
									bufs.push(_glExtensionDrawBuffers.COLOR_ATTACHMENT0_WEBGL + i);
							}
							_glExtensionDrawBuffers.drawBuffersWEBGL(bufs);
					}

					if (verifyFrameBufferWorks) {
							var status = _gl.checkFramebufferStatus(_gl.FRAMEBUFFER);
							if (status !== _gl.FRAMEBUFFER_COMPLETE) {
									THREE.log("Can't use multiple render targets. Falling back to two passes. " + status);
									delete primaryTarget.__webglFramebuffer;
									verifyFrameBufferWorks = false;
							}
					}

					_gl.bindFramebuffer(_gl.FRAMEBUFFER, tmpBuf);


					if (clearState) {
							// Release everything
							_gl.bindTexture(_gl.TEXTURE_2D, null);
							_gl.bindRenderbuffer(_gl.RENDERBUFFER, null);
							_gl.bindFramebuffer(_gl.FRAMEBUFFER, null);
					}

					return verifyFrameBufferWorks;
			};


			//[Firefly] This function is different from Three.js -- it adds
			//support for binding multiple render targets.
			this.setRenderTarget = function (renderTargets) {

					var renderTarget;

					if (Array.isArray(renderTargets)) {
							this.initFrameBufferMRT(renderTargets);
							renderTarget = renderTargets[0];
					} else if (renderTargets) {
							var fb = renderTargets.__webglFramebuffer;
							if (!fb || _currentFramebuffer !== fb) {
									this.initFrameBufferMRT([renderTargets]);
							}
							renderTarget = renderTargets;
					}

					var framebuffer, width, height, vx, vy;

					if (renderTarget) {


							framebuffer = renderTarget.__webglFramebuffer;


							width = renderTarget.width;
							height = renderTarget.height;

							vx = 0;
							vy = 0;

					} else {

							framebuffer = null;

							width = _viewportWidth;
							height = _viewportHeight;

							vx = _viewportX;
							vy = _viewportY;

					}

					if (framebuffer !== _currentFramebuffer) {

							_gl.bindFramebuffer(_gl.FRAMEBUFFER, framebuffer);
							_gl.viewport(vx, vy, width, height);

							_currentFramebuffer = framebuffer;

					}

					_currentWidth = width;
					_currentHeight = height;

			};


			//We need to use more than WebGL 1.0 technically allows -- we use
			//different bit depth sizes for the render targets, which is not
			//legal WebGL 1.0, but will work eventually and some platforms/browsers
			//already allow it. For others, we have to try, check for failure, and disable use of MRT dynamically.
			this.verifyMRTWorks = function (renderTargets) {
					if (this.supportsMRT()) {
							return this.initFrameBufferMRT(renderTargets, true);
					}
					return false;
			};


			this.readRenderTargetPixels = function (renderTarget, x, y, width, height, buffer) {

					if (!(renderTarget instanceof THREE.WebGLRenderTarget)) {

							THREE.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.');
							return;

					}

					if (renderTarget.__webglFramebuffer) {

							//Just a rough sanity check -- different browsers support different combinations
							//The check is for the most restrictive implementation (ANGLE). It can be relaxed once
							//Chrome dumps ANGLE. Note that targets of format RGB and unsigned byte type can be read with readPixels using GL_RGBA
							//as the format parameter (apparently). But this is not the case for float targets -- for those you have
							//to change the code to readPixels with the correct format.
							if (renderTarget.format !== THREE.RGBAFormat &&
							renderTarget.format !== THREE.RGBFormat ||
							renderTarget.type !== THREE.UnsignedByteType) {

									THREE.error('THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not a readable format.');
									return;

							}

							var restore = false;

							if (renderTarget.__webglFramebuffer !== _currentFramebuffer) {

									_gl.bindFramebuffer(_gl.FRAMEBUFFER, renderTarget.__webglFramebuffer);

									restore = true;

							}

							if (renderTarget.canReadPixels || _gl.checkFramebufferStatus(_gl.FRAMEBUFFER) === _gl.FRAMEBUFFER_COMPLETE) {

									_gl.readPixels(x, y, width, height, _gl.RGBA, _gl.UNSIGNED_BYTE, buffer);

							} else {

									THREE.error('THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.');

							}

							if (restore) {

									_gl.bindFramebuffer(_gl.FRAMEBUFFER, _currentFramebuffer);

							}

					}
			};


			function updateRenderTargetMipmap(renderTarget) {

					_gl.bindTexture(_gl.TEXTURE_2D, renderTarget.__webglTexture);
					_gl.generateMipmap(_gl.TEXTURE_2D);
					_gl.bindTexture(_gl.TEXTURE_2D, null);

			}

			// Fallback filters for non-power-of-2 textures

			function filterFallback(f) {

					if (f === THREE.NearestFilter || f === THREE.NearestMipMapNearestFilter || f === THREE.NearestMipMapLinearFilter) {

							return _gl.NEAREST;

					}

					return _gl.LINEAR;

			}

			// Map three.js constants to WebGL constants

			function paramThreeToGL(p) {

					var extension;

					if (p === THREE.RepeatWrapping) return _gl.REPEAT;
					if (p === THREE.ClampToEdgeWrapping) return _gl.CLAMP_TO_EDGE;
					if (p === THREE.MirroredRepeatWrapping) return _gl.MIRRORED_REPEAT;

					if (p === THREE.NearestFilter) return _gl.NEAREST;
					if (p === THREE.NearestMipMapNearestFilter) return _gl.NEAREST_MIPMAP_NEAREST;
					if (p === THREE.NearestMipMapLinearFilter) return _gl.NEAREST_MIPMAP_LINEAR;

					if (p === THREE.LinearFilter) return _gl.LINEAR;
					if (p === THREE.LinearMipMapNearestFilter) return _gl.LINEAR_MIPMAP_NEAREST;
					if (p === THREE.LinearMipMapLinearFilter) return _gl.LINEAR_MIPMAP_LINEAR;

					if (p === THREE.UnsignedByteType) return _gl.UNSIGNED_BYTE;
					if (p === THREE.UnsignedShort4444Type) return _gl.UNSIGNED_SHORT_4_4_4_4;
					if (p === THREE.UnsignedShort5551Type) return _gl.UNSIGNED_SHORT_5_5_5_1;
					if (p === THREE.UnsignedShort565Type) return _gl.UNSIGNED_SHORT_5_6_5;

					if (p === THREE.ByteType) return _gl.BYTE;
					if (p === THREE.ShortType) return _gl.SHORT;
					if (p === THREE.UnsignedShortType) return _gl.UNSIGNED_SHORT;
					if (p === THREE.IntType) return _gl.INT;
					if (p === THREE.UnsignedIntType) return _gl.UNSIGNED_INT;
					if (p === THREE.FloatType) return _gl.FLOAT;
					if (p === THREE.HalfFloatType) return 0x8D61; //_gl.HALF_FLOAT_OES;

					if (p === THREE.AlphaFormat) return _gl.ALPHA;
					if (p === THREE.RGBFormat) return _gl.RGB;
					if (p === THREE.RGBAFormat) return _gl.RGBA;
					if (p === THREE.LuminanceFormat) return _gl.LUMINANCE;
					if (p === THREE.LuminanceAlphaFormat) return _gl.LUMINANCE_ALPHA;

					if (p === THREE.AddEquation) return _gl.FUNC_ADD;
					if (p === THREE.SubtractEquation) return _gl.FUNC_SUBTRACT;
					if (p === THREE.ReverseSubtractEquation) return _gl.FUNC_REVERSE_SUBTRACT;

					if (p === THREE.ZeroFactor) return _gl.ZERO;
					if (p === THREE.OneFactor) return _gl.ONE;
					if (p === THREE.SrcColorFactor) return _gl.SRC_COLOR;
					if (p === THREE.OneMinusSrcColorFactor) return _gl.ONE_MINUS_SRC_COLOR;
					if (p === THREE.SrcAlphaFactor) return _gl.SRC_ALPHA;
					if (p === THREE.OneMinusSrcAlphaFactor) return _gl.ONE_MINUS_SRC_ALPHA;
					if (p === THREE.DstAlphaFactor) return _gl.DST_ALPHA;
					if (p === THREE.OneMinusDstAlphaFactor) return _gl.ONE_MINUS_DST_ALPHA;

					if (p === THREE.DstColorFactor) return _gl.DST_COLOR;
					if (p === THREE.OneMinusDstColorFactor) return _gl.ONE_MINUS_DST_COLOR;
					if (p === THREE.SrcAlphaSaturateFactor) return _gl.SRC_ALPHA_SATURATE;

					extension = extensions.get('WEBGL_compressed_texture_s3tc');

					if (extension !== null) {

							if (p === THREE.RGB_S3TC_DXT1_Format) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
							if (p === THREE.RGBA_S3TC_DXT1_Format) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
							if (p === THREE.RGBA_S3TC_DXT3_Format) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
							if (p === THREE.RGBA_S3TC_DXT5_Format) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;

					}

					extension = extensions.get('WEBGL_compressed_texture_pvrtc');

					if (extension !== null) {

							if (p === THREE.RGB_PVRTC_4BPPV1_Format) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
							if (p === THREE.RGB_PVRTC_2BPPV1_Format) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
							if (p === THREE.RGBA_PVRTC_4BPPV1_Format) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
							if (p === THREE.RGBA_PVRTC_2BPPV1_Format) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

					}

					extension = extensions.get('EXT_blend_minmax');

					if (extension !== null) {

							if (p === THREE.MinEquation) return extension.MIN_EXT;
							if (p === THREE.MaxEquation) return extension.MAX_EXT;

					}

					return 0;

			}

			// Allocations

			function allocateLights(lights) {

					var dirLights = 0;
					var pointLights = 0;
					var spotLights = 0;
					var hemiLights = 0;

					for (var l = 0, ll = lights.length; l < ll; l++) {

							var light = lights[l];

							if (light.onlyShadow) continue;

							if (light instanceof THREE.DirectionalLight) dirLights++;
							if (light instanceof THREE.PointLight) pointLights++;
							if (light instanceof THREE.SpotLight) spotLights++;
							if (light instanceof THREE.HemisphereLight) hemiLights++;

					}

					return { 'directional': dirLights, 'point': pointLights, 'spot': spotLights, 'hemi': hemiLights };

			}

	};

	module.exports = WebGLRenderer;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var WebGLShader = __webpack_require__(69);
	var resolve = __webpack_require__(5).resolve;
	var isIE11 = typeof navigator !== "undefined" && !!navigator.userAgent.match(/Trident\/7\./);

	var PrismMaps = [
	"opaque_luminance_modifier",
	"surface_albedo",
	"surface_roughness",
	"surface_anisotropy",
	"surface_rotation",
	"opaque_f0",
	"opaque_albedo",
	"metal_f0",
	"layered_f0",
	"layered_diffuse",
	"layered_roughness",
	"layered_anisotropy",
	"layered_rotation",
	"layered_bottom_f0",
	"layered_fraction",
	"surface_cutout",
	"wood_curly_distortion"];


	// We test if the UVs are in the bounds when clamping; if not, discard!
	// This is done here because we have access to the clamp parameters. The macro #defined
	// by this method can then be used elsewhere, e.g. GetPrismMapSampleChunk, without knowledge of these parameters.
	// Here is a typical result returned when clamping is on and "opaque_albedo" is passed in for the name:
	// #define OPAQUE_ALBEDO_CLAMP_TEST if (uv_opaque_albedo_map.x < 0.0 || uv_opaque_albedo_map.x > 1.0 || uv_opaque_albedo_map.y < 0.0 || uv_opaque_albedo_map.y > 1.0) { discard; }
	var GetPrismMapChunk = function GetPrismMapChunk(name, clampS, clampT) {
			var uv = "uv_" + name + "_map";
			var conditionChunk = "";
			if (clampS && clampT)
			conditionChunk = "if (" + uv + ".x < 0.0 || " + uv + ".x > 1.0 || " + uv + ".y < 0.0 || " + uv + ".y > 1.0) { discard; }";else
			if (clampS)
			conditionChunk = "if (" + uv + ".x < 0.0 || " + uv + ".x > 1.0) { discard; }";else
			if (clampT)
			conditionChunk = "if (" + uv + ".y < 0.0 || " + uv + ".y > 1.0) { discard; }";
			return "#define " + name.toUpperCase() + "_CLAMP_TEST " + conditionChunk;
	};

	//Based on THREE.WebGLProgram, with some defines added / removed.
	var WebGLProgram = function () {
			'use strict';

			var programIdCount = 0;

			var generateDefines = function generateDefines(defines) {

					var value,chunk,chunks = [];

					for (var d in defines) {

							value = defines[d];
							if (value === false) continue;

							chunk = "#define " + d + " " + value;
							chunks.push(chunk);

					}

					return chunks.join("\n");

			};

			var cacheUniformLocations = function cacheUniformLocations(gl, program, identifiers) {

					var uniforms = {};

					for (var i = 0, l = identifiers.length; i < l; i++) {

							var id = identifiers[i];
							uniforms[id] = gl.getUniformLocation(program, id);

					}

					return uniforms;

			};

			var cacheAttributeLocations = function cacheAttributeLocations(gl, program, identifiers) {

					var attributes = {};

					for (var i = 0, l = identifiers.length; i < l; i++) {

							var id = identifiers[i];
							attributes[id] = gl.getAttribLocation(program, id);

					}

					return attributes;

			};

			// Add clamping and inversion code for the simple Phong material perform any operations needed.
			// This is done here because we have access to the clamp and inversion parameters. The macro #defined
			// by this method can then be used elsewhere without knowledge of these parameters.
			var getMapChunk = function getMapChunk(name, clampS, clampT, invert, emptyChunk) {
					var invertChunk = invert ? "1.0-" : "";
					var readChunk = "texture2D(" + name + ", (UV))";
					var conditionChunk = "";
					emptyChunk = emptyChunk || "vec4(0.0)";
					if (clampS && clampT)
					conditionChunk = "((UV).x < 0.0 || (UV).x > 1.0 || (UV).y < 0.0 || (UV).y > 1.0) ? " + emptyChunk + " : ";else
					if (clampS)
					conditionChunk = "((UV).x < 0.0 || (UV).x > 1.0) ? " + emptyChunk + " : ";else
					if (clampT)
					conditionChunk = "((UV).y < 0.0 || (UV).y > 1.0) ? " + emptyChunk + " : ";
					return "#define GET_" + name.toUpperCase() + "(UV) (" + conditionChunk + invertChunk + readChunk + ")";
			};

			var getPrismMapsChunk = function getPrismMapsChunk(parameters) {

					var result = "\n";

					for (var i = 0; i < PrismMaps.length; i++) {
							var val = parameters[PrismMaps[i]];
							if (val)
							result += GetPrismMapChunk(PrismMaps[i], val.S, val.T) + "\n";
					}

					return result;
			};

			return function (renderer, code, material, parameters) {

					var _this = renderer;
					var _gl = _this.context;

					var defines = material.defines;
					var uniforms = material.__webglShader.uniforms;
					var attributes = material.attributes;

					var vertexShader = resolve(material.__webglShader.vertexShader);
					var fragmentShader = resolve(material.__webglShader.fragmentShader);

					var index0AttributeName = material.index0AttributeName;

					if (index0AttributeName === undefined && parameters.morphTargets === true) {

							// programs with morphTargets displace position out of attribute 0

							index0AttributeName = 'position';

					}

					var envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
					var envMapModeDefine = 'ENVMAP_MODE_REFLECTION';
					var envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';

					if (parameters.envMap) {
							//This will make more sense when we update three.js to R70
							//Currently we don't need any of it anyway, because we only
							//reflect and use cube maps.
							/*
	      			switch ( material.envMap.mapping ) {
	      
	      				case THREE.CubeReflectionMapping:
	      				case THREE.CubeRefractionMapping:
	      					envMapTypeDefine = 'ENVMAP_TYPE_CUBE';
	      					break;
	      
	      				case THREE.EquirectangularReflectionMapping:
	      				case THREE.EquirectangularRefractionMapping:
	      					envMapTypeDefine = 'ENVMAP_TYPE_EQUIREC';
	      					break;
	      
	      				case THREE.SphericalReflectionMapping:
	      					envMapTypeDefine = 'ENVMAP_TYPE_SPHERE';
	      					break;
	      
	      			}
	      
	      			switch ( material.envMap.mapping ) {
	      
	      				case THREE.CubeRefractionMapping:
	      				case THREE.EquirectangularRefractionMapping:
	      					envMapModeDefine = 'ENVMAP_MODE_REFRACTION';
	      					break;
	      
	      			}
	      
	      
	      			switch ( material.combine ) {
	      
	      				case THREE.MultiplyOperation:
	      					envMapBlendingDefine = 'ENVMAP_BLENDING_MULTIPLY';
	      					break;
	      
	      				case THREE.MixOperation:
	      					envMapBlendingDefine = 'ENVMAP_BLENDING_MIX';
	      					break;
	      
	      				case THREE.AddOperation:
	      					envMapBlendingDefine = 'ENVMAP_BLENDING_ADD';
	      					break;
	      
	      			}
	      */
					}

					var gammaFactorDefine = renderer.gammaFactor > 0 ? renderer.gammaFactor : 1.0;

					// THREE.log( "building new program " );

					//

					var customDefines = generateDefines(defines);

					//

					var program = _gl.createProgram();

					var prefix_vertex, prefix_fragment;

					if (material instanceof THREE.RawShaderMaterial) {

							prefix_vertex = '';
							prefix_fragment = '';

					} else {

							prefix_vertex = [

							"precision " + parameters.precision + " float;",
							"precision " + parameters.precision + " int;",

							customDefines,

							parameters.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",

							_this.gammaInput ? "#define GAMMA_INPUT" : "",
							_this.gammaOutput ? "#define GAMMA_OUTPUT" : "",
							'#define GAMMA_FACTOR ' + gammaFactorDefine,

							parameters.mrtNormals ? "#define MRT_NORMALS" : "", //FY
							parameters.mrtIdBuffer ? "#define MRT_ID_BUFFER" : "", //FY

							"#define MAX_DIR_LIGHTS " + parameters.maxDirLights,
							"#define MAX_POINT_LIGHTS " + parameters.maxPointLights,
							"#define MAX_SPOT_LIGHTS " + parameters.maxSpotLights,
							"#define MAX_HEMI_LIGHTS " + parameters.maxHemiLights,

							"#define MAX_BONES " + parameters.maxBones,

							"#define NUM_CUTPLANES " + parameters.numCutplanes,

							parameters.map ? "#define USE_MAP" : "",
							parameters.envMap ? "#define USE_ENVMAP" : "",
							parameters.envMap ? '#define ' + envMapModeDefine : '',
							parameters.irradianceMap ? "#define USE_IRRADIANCEMAP" : "", //FY
							parameters.lightMap ? "#define USE_LIGHTMAP" : "",
							parameters.bumpMap ? "#define USE_BUMPMAP" : "",
							parameters.normalMap ? "#define USE_NORMALMAP" : "",
							parameters.specularMap ? "#define USE_SPECULARMAP" : "",
							parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
							parameters.vertexColors ? "#define USE_COLOR" : "",
							parameters.vertexIds ? "#define USE_VERTEX_ID" : "",

							parameters.useInstancing ? "#define USE_INSTANCING" : "",

							parameters.wideLines ? "#define WIDE_LINES" : "",

							parameters.skinning ? "#define USE_SKINNING" : "",
							parameters.useVertexTexture ? "#define BONE_TEXTURE" : "",

							parameters.morphTargets ? "#define USE_MORPHTARGETS" : "",
							parameters.morphNormals ? "#define USE_MORPHNORMALS" : "",
							parameters.wrapAround ? "#define WRAP_AROUND" : "",
							parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
							parameters.flipSided ? "#define FLIP_SIDED" : "",

							parameters.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",

							parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
							parameters.useFragDepthExt ? "#define USE_LOGDEPTHBUF_EXT" : "",

							parameters.packedNormals ? "#define UNPACK_NORMALS" : "",

							// "#define FLAT_SHADED",  // TODO_NOP: hook up to param

							"uniform mat4 modelMatrix;",
							"uniform mat4 modelViewMatrix;",
							"uniform mat4 projectionMatrix;",
							"uniform mat4 viewMatrix;",
							"uniform mat3 normalMatrix;",
							"uniform vec3 cameraPosition;",

							"attribute vec3 position;",

							"#ifdef UNPACK_NORMALS",
							"attribute vec2 normal;",
							"#else",
							"attribute vec3 normal;",
							"#endif",

							"attribute vec2 uv;",
							"attribute vec2 uv2;",

							"#ifdef PRISMWOOD",
							"attribute vec3 uvw;",
							"#endif",

							"#ifdef USE_COLOR",

							"	attribute vec3 color;",

							"#endif",

							""].

							join('\n');

							prefix_fragment = [
							parameters.bumpMap || parameters.normalMap ? "#extension GL_OES_standard_derivatives : enable" : "",
							(parameters.mrtIdBuffer || parameters.mrtNormals) && !isIE11 ? "#extension GL_EXT_draw_buffers : enable" : "",
							parameters.mrtIdBuffer ? "#define gl_FragColor gl_FragData[0]" : "",

							parameters.haveTextureLod ? "#define HAVE_TEXTURE_LOD" : "",

							customDefines,

							"#define MAX_DIR_LIGHTS " + parameters.maxDirLights,
							"#define MAX_POINT_LIGHTS " + parameters.maxPointLights,
							"#define MAX_SPOT_LIGHTS " + parameters.maxSpotLights,
							"#define MAX_HEMI_LIGHTS " + parameters.maxHemiLights,

							"#define NUM_CUTPLANES " + parameters.numCutplanes,

							parameters.alphaTest ? "#define ALPHATEST " + parameters.alphaTest : "",

							_this.gammaInput ? "#define GAMMA_INPUT" : "",
							_this.gammaOutput ? "#define GAMMA_OUTPUT" : "",
							'#define GAMMA_FACTOR ' + gammaFactorDefine,

							parameters.mrtNormals ? "#define MRT_NORMALS" : "", //FY
							parameters.mrtIdBuffer ? "#define MRT_ID_BUFFER" : "", //FY
							parameters.mrtIdBuffer > 1 ? "#define MODEL_COLOR" : "",

							'#define TONEMAP_OUTPUT ' + (parameters.tonemapOutput || 0),

							parameters.useFog && parameters.fog ? "#define USE_FOG" : "",
							parameters.useFog && parameters.fogExp ? "#define FOG_EXP2" : "",

							parameters.map ? "#define USE_MAP" : "",
							parameters.envMap ? "#define USE_ENVMAP" : "",
							parameters.envMap ? '#define ' + envMapTypeDefine : '',
							parameters.envMap ? '#define ' + envMapModeDefine : '',
							parameters.envMap ? '#define ' + envMapBlendingDefine : '',
							parameters.irradianceMap ? "#define USE_IRRADIANCEMAP" : "", //FY
							parameters.envGammaEncoded ? "#define ENV_GAMMA" : "", //FY
							parameters.irrGammaEncoded ? "#define IRR_GAMMA" : "", //FY
							parameters.envRGBM ? "#define ENV_RGBM" : "", //FY
							parameters.irrRGBM ? "#define IRR_RGBM" : "", //FY
							parameters.lightMap ? "#define USE_LIGHTMAP" : "",
							parameters.bumpMap ? "#define USE_BUMPMAP" : "",
							parameters.normalMap ? "#define USE_NORMALMAP" : "",
							parameters.specularMap ? "#define USE_SPECULARMAP" : "",
							parameters.alphaMap ? "#define USE_ALPHAMAP" : "",
							parameters.vertexColors ? "#define USE_COLOR" : "",
							parameters.vertexIds ? "#define USE_VERTEX_ID" : "",

							parameters.metal ? "#define METAL" : "",
							parameters.clearcoat ? "#define CLEARCOAT" : "",
							parameters.wrapAround ? "#define WRAP_AROUND" : "",
							parameters.doubleSided ? "#define DOUBLE_SIDED" : "",
							parameters.flipSided ? "#define FLIP_SIDED" : "",

							parameters.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
							//parameters.useFragDepthExt ? "#define USE_LOGDEPTHBUF_EXT" : "",

							parameters.hatchPattern ? "#define HATCH_PATTERN" : "",

							parameters.mapInvert ? "#define MAP_INVERT" : "",
							getMapChunk("map", parameters.mapClampS, parameters.mapClampT),
							getMapChunk("bumpMap", parameters.bumpMapClampS, parameters.bumpMapClampT),
							getMapChunk("normalMap", parameters.normalMapClampS, parameters.normalMapClampT),
							getMapChunk("specularMap", parameters.specularMapClampS, parameters.specularMapClampT),
							getMapChunk("alphaMap", parameters.alphaMapClampS, parameters.alphaMapClampT, parameters.alphaMapInvert),

							// "#define FLAT_SHADED",  // TODO_NOP: hook up to param

							"#ifdef USE_ENVMAP",
							"#ifdef HAVE_TEXTURE_LOD",
							"#extension GL_EXT_shader_texture_lod : enable",
							"#endif",
							'#endif',

							"#extension GL_OES_standard_derivatives : enable",

							"precision " + parameters.precisionFragment + " float;",
							"precision " + parameters.precisionFragment + " int;",

							"uniform highp mat4 viewMatrix;",
							"uniform highp mat4 projectionMatrix;",
							"uniform highp vec3 cameraPosition;",

							"#ifdef USE_ENVMAP",

							"uniform mat4 viewMatrixInverse;",

							"#endif",

							""].
							join('\n');

							// now get map chunks for PRISM material
							// mapPrismOpaqueLuminanceModifierClampS etc. are set in WebGLRenderer.js in the parameters
							if (parameters.isPrism)
							prefix_fragment += getPrismMapsChunk(parameters);

					}

					var glVertexShader = new WebGLShader(_gl, _gl.VERTEX_SHADER, prefix_vertex + vertexShader);
					var glFragmentShader = new WebGLShader(_gl, _gl.FRAGMENT_SHADER, prefix_fragment + fragmentShader);

					_gl.attachShader(program, glVertexShader);
					_gl.attachShader(program, glFragmentShader);

					if (index0AttributeName !== undefined) {

							// Force a particular attribute to index 0.
							// because potentially expensive emulation is done by browser if attribute 0 is disabled.
							// And, color, for example is often automatically bound to index 0 so disabling it

							_gl.bindAttribLocation(program, 0, index0AttributeName);

					}

					_gl.linkProgram(program);

					if (false /*avp.DEBUG_SHADERS*/) {

									if (_gl.getProgramParameter(program, _gl.LINK_STATUS) === false) {

											THREE.error('THREE.WebGLProgram: Could not initialise shader.');
											THREE.error('gl.VALIDATE_STATUS', _gl.getProgramParameter(program, _gl.VALIDATE_STATUS));
											THREE.error('gl.getError()', _gl.getError());

									}

									if (_gl.getProgramInfoLog(program) !== '') {

											THREE.warn('THREE.WebGLProgram: gl.getProgramInfoLog()', _gl.getProgramInfoLog(program));

									}

							}

					// clean up

					_gl.deleteShader(glVertexShader);
					_gl.deleteShader(glFragmentShader);

					// cache uniform locations

					var identifiers = [

					'viewMatrix', 'modelViewMatrix', 'projectionMatrix', 'normalMatrix', 'modelMatrix', 'cameraPosition',
					'viewMatrixInverse', 'mvpMatrix', 'dbId' //FY
					];


					if (parameters.logarithmicDepthBuffer) {

							identifiers.push('logDepthBufFC');

					}


					for (var u in uniforms) {

							identifiers.push(u);

					}

					this.uniforms = cacheUniformLocations(_gl, program, identifiers);

					// cache attributes locations

					identifiers = [

					"position", "normal", "uv", "uv2", "tangent", "color",
					"lineDistance", "uvw", "id",
					"instOffset", "instScaling", "instRotation", // instancing
					"prev", "next", "side" // attributes for wide lines
					];

					for (var a in attributes) {

							identifiers.push(a);

					}

					this.attributes = cacheAttributeLocations(_gl, program, identifiers);
					this.attributesKeys = Object.keys(this.attributes);

					//

					this.id = programIdCount++;
					this.code = code;
					this.usedTimes = 1;
					this.program = program;
					this.vertexShader = glVertexShader;
					this.fragmentShader = glFragmentShader;

					return this;

			};

	}();

	module.exports = {
			PrismMaps: PrismMaps,
			GetPrismMapChunk: GetPrismMapChunk,
			WebGLProgram: WebGLProgram };

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var chunks = __webpack_require__(5);
	var utils = __webpack_require__(60);
	var prism = __webpack_require__(83);
	var groundshadow = __webpack_require__(89);
	var GaussianPass = __webpack_require__(61);

	//
	// All shaders related to shadow mapping.
	//
	// Material shader chunks are only active if the USE_SHADOWMAP macro is set and have no effect otherwise.
	// Default values for constant uniforms are specified in ShadowMap.js.
	//
	// How to add shadow-mapping to a material shader:
	//  1. Add ShadowMapDeclareUniforms to uniforms
	//  2. Add ShadowMapVertexDeclaration to the vertex-shader declarations
	//  3. Make sure that these variables are available in the vertex-shader:
	//      - vec3 position;            // vertex-position in model-coords
	//      - uniform mat4 modelMatrix;
	//  4. Add ShadowMapVertexShaderChunk to the vertex-shader.
	//  5. Add ShadowMapFragmentDeclarion to the fragment-shader declarations
	//  6. Now, you can use getShadowValue() in your fragment shader to get the
	//     shadow attenuation value. (see function comment for details)
	//     If the USE_SHADOWMAP macro is not set, it is replaced by a dummy implementation.

	// Shader to render into the shadow map
	var ShadowMapShader = {

	    uniforms: THREE.UniformsUtils.merge([

	    chunks.ShadowMapCommonUniforms,
	    {
	        // all values are set in ShadowMaps.js
	        "shadowMapRangeMin": { type: "f", value: 0.0 },
	        "shadowMapRangeSize": { type: "f", value: 0.0 },
	        "shadowMinOpacity": { type: "f", value: 0.0 },

	        // uniforms needed to use texture sample chunks for Phong
	        "map": { type: "t", value: null },
	        "alphaMap": { type: "t", value: null },
	        "texMatrix": { type: "m3", value: new THREE.Matrix3() },
	        "texMatrixAlpha": { type: "m3", value: new THREE.Matrix3() } },

	    // uniforms needed to use texture sample chunks for Prism
	    prism.GetPrismMapUniforms("surface_cutout_map")]),


	    vertexShader: __webpack_require__(98),
	    fragmentShader: __webpack_require__(99) };


	// Shader to render ground-shadow based on shadow-map.
	// Unlike other shadow receivers, the ground plane itself is not visible - just its shadow is rendered.
	var GroundShadowShader = {

	    uniforms: chunks.ShadowMapUniforms,

	    vertexShader: __webpack_require__(100),
	    fragmentShader: __webpack_require__(101) };


	/**
	                                                                        * ShadowMapOverrideMaterials is used by ShadowMaps to support cutout maps and transparency of individual shapes
	                                                                        * when rendering into the shadow map.
	                                                                        *
	                                                                        * This class manages several customized variants of the shadow map shader material. The goal is:
	                                                                        *  - Fully Invisible/Transparent objects will be excluded (based on threshold)
	                                                                        *  - Prism cutout maps, alpha maps, and alpha channels of rgba maps are considered by override effects.
	                                                                        * @constructor
	                                                                        */
	var ShadowMapOverrideMaterials = function ShadowMapOverrideMaterials() {

	    // contains different macro variant of ShadowMapShader to avoid frequent shader recompile.
	    // indexed by material key (see MaterialFlags.getMaterialIndex() below)
	    // Each effect is reused with different uniforms.
	    var _cachedMaterials = [];

	    // used to derive new effect variants that already know the latest state of common shadow-map uniforms
	    var _prototypeMaterial = utils.createShaderMaterial(ShadowMapShader);

	    // dummy material to exclude shapes completely
	    var _invisibleMaterial = new THREE.Material();
	    _invisibleMaterial.visible = false;

	    // reused array of decal objects. (see getCustomOverrideMaterial)
	    var _overrideDecals = [];

	    // flags to determine which macro-configuration of the override material is needed
	    function MaterialFlags() {

	        this.init = function () {
	            this.isPrism = false;
	            this.alphaMap = false; // for Prism, this flag is used for the cutout map
	            this.alphaClampS = false;
	            this.alphaClampT = false;
	            this.alphaInvert = false;
	            this.rgbaMap = false;
	            this.rgbaClampS = false;
	            this.rgbaClampT = false;
	            this.rgbaInvert = false;
	            this.instanced = false; // for geometry with per-instance transform

	            // Even if the flags above are equal, we cannot reuse the same
	            // override material for different decals: They are
	            // used at the same time but may need different uniforms for the cutout_maps.
	            // Therefore, we use the decal index to make sure that decal effects are
	            // always independent.
	            this.decalIndex = -1;
	        };

	        this.init();

	        // get a unique index for this flag combination
	        this.getMaterialIndex = function () {
	            // Note: When returning the term here directly, i.e., writing "return" instead of "var index =",
	            //       the result would be undefined. The reason is a trap in JS: If a line only contains a single
	            //       "return" statement, JS "helpfully" adds a ; automatically and ignores the rest.
	            var index =
	            (this.isPrism ? 0x01 : 0) | (
	            this.alphaMap ? 0x02 : 0) | (
	            this.alphaClampS ? 0x04 : 0) | (
	            this.alphaClampT ? 0x08 : 0) | (
	            this.alphaInvert ? 0x10 : 0) | (
	            this.rgbaMap ? 0x20 : 0) | (
	            this.rgbaClampS ? 0x40 : 0) | (
	            this.rgbaClampT ? 0x80 : 0) | (
	            this.rgbaInvert ? 0x100 : 0) | (
	            this.instanced ? 0x200 : 0) |
	            (this.decalIndex + 1) * 0x400; // enforce different keys for different decals
	            return index;
	        };
	    };

	    // reused temp object
	    var _tmpFlags = new MaterialFlags();

	    // Creates an appropriate override material or gets it from cache.
	    //  @param   {MaterialFlags}        flags
	    //  @param   {Number}               [decalIndex] - make sure that different decals always use different
	    //                                                 override materials.
	    //  @returns {THREE.ShaderMaterial}
	    function acquireOverrideMaterial(flags, decalIndex) {

	        var key = flags.getMaterialIndex();
	        if (!_cachedMaterials[key]) {
	            // Note:
	            //  - Cloning the prototype makes sure that common shadowmap shader uniforms are also known by new effects.
	            //  - Although we are sometimes creating the same ShaderMaterial here, separate caching still makes sense,
	            //    because FireFlyWebGLProgram will compile different variants depending for each one.
	            //    E.g., with/without USE_ALPHAMAP macro or with different GET_MAP chunks, depending on clamp settings.
	            var newEffect = _prototypeMaterial.clone();

	            // set macro to indicate that we must use prism shader chunks to sample the cutout map
	            if (flags.isPrism && flags.alphaMap) {
	                utils.setMacro(newEffect, "USE_SURFACE_CUTOUT_MAP");

	                // prepend SURFACE_CUTOUT_CLAMP macro function
	                // For Prism materials, FireFlyWebGL does this automatically. But for the shadow map shader, we
	                // have to do it ourselves here.
	                newEffect.fragmentShader =
	                prism.GetPrismMapChunk("surface_cutout", flags.alphaClampS, flags.alphaClampT) +
	                "\n" +
	                newEffect.fragmentShader;
	            }

	            // acitvate hardware instancing
	            if (flags.instanced) {
	                newEffect.useInstancing = true;
	            }

	            _cachedMaterials[key] = newEffect;
	        }
	        return _cachedMaterials[key];
	    };

	    // determines whether a	material should be excluded from shadow-map rendering
	    //  @param {THREE.Material} mat
	    //  @returns {bool}
	    function isInvisibleOrTransparent(mat) {

	        if (mat instanceof THREE.MeshPhongMaterial) {
	            // Phong shaders take opacity directly from the material property
	            return mat.opacity < ShadowConfig.ShadowMinOpacity;
	        } else if (mat.isPrismMaterial) {
	            // For transparent prism materials, the surface opacity may actually vary per fragment depending on
	            // surface orientation and roughness texture. Since we can only make binary decisions in the
	            // shadow map shader, it's better to exclude those shapes completely. Otherwise, they would
	            // rather cast random pixel artifacts than actual shadows.
	            return mat.prismType === 'PrismTransparent';
	        } else if (!mat.visible) {
	            // the original material is set to invisble already
	            return true;
	        }

	        // If we reach this, we don't know anything about transparency.
	        // Therefore, we assume it to be relevant.
	        return false;
	    }

	    // runs a function cb(material) for each override material variant.
	    this.forEachMaterial = function (cb) {

	        // run for all cached effects
	        for (var i = 0; i < _cachedMaterials.length; i++) {
	            var mat = _cachedMaterials[i];
	            if (mat) {
	                cb(mat);
	            }
	        }

	        // apply on prototype, so that new materials inherit changes
	        cb(_prototypeMaterial);

	        // The _invisibleMaterial is excluded here, for two reasons:
	        //  1. It is rather a cached constant without any configuration.
	        //  2. By excluding it, we can safely assume that all materials are variants of
	        //     the ShadowMapShader, so that all expected uniforms exist etc.
	    };

	    // Returns a custom override effect if needed for the given shape material.
	    //  @param {THREE.Material}  origMat      - the original material of the shape to be rendered.
	    //  @param {Number}          [decalIndex] - if orgigMat is from a decal, this must be its index in the decal array
	    //  @returns {null|THREE.Material} returns null if the default override effect can be used.
	    function getOverrideMaterial(origMat, decalIndex) {

	        // handle overall transparency
	        if (isInvisibleOrTransparent(origMat)) {
	            return _invisibleMaterial;
	        }

	        // check for texture alpha
	        var isPhong = origMat instanceof THREE.MeshPhongMaterial;
	        var isPrism = origMat.isPrismMaterial;
	        if (!isPhong && !isPrism) {
	            // cutout/alpha maps are only supported for phong and prism materials
	            return null;
	        }

	        // check for alpha/cutout map
	        var alphaMap = isPhong ? origMat.alphaMap : origMat["surface_cutout_map"];

	        // check for opacity in rgba map (phong only)
	        // we ignore the map is alphaTest is not set.
	        var rgbaMap = isPhong && !!origMat.alphaTest ? origMat.map : null;

	        if (!alphaMap && !rgbaMap && !origMat.useInstancing) {
	            // no custom effect needed
	            return null;
	        }

	        var flags = _tmpFlags;
	        flags.init();
	        flags.isPrism = isPrism;
	        flags.alphaMap = !!alphaMap;
	        flags.rgbaMap = !!rgbaMap;
	        flags.instanced = origMat.useInstancing;
	        flags.decalIndex = decalIndex === undefined ? -1 : decalIndex;

	        // configure clamp & invert flags for alpha map
	        if (alphaMap) {
	            // These properties are set for all textures - no matter if Prism or Phong.
	            // (see convertSimpleTexture/convertPrismTexture in MaterialConverter.js)
	            flags.alphaClampS = alphaMap.clampS;
	            flags.alphaClampT = alphaMap.clampT;
	            flags.alphaInvert = alphaMap.invert;
	        }

	        // same for rgba map
	        if (rgbaMap) {
	            flags.rgbaClampS = rgbaMap.clampS;
	            flags.rgbaClampT = rgbaMap.clampT;
	            flags.rgbaInvert = rgbaMap.invert;
	        }

	        // get material for current macro-combination
	        var override = acquireOverrideMaterial(flags, decalIndex);

	        // configure uniforms
	        if (alphaMap) {
	            if (isPhong) {
	                override.uniforms["alphaMap"].value = alphaMap;
	                override.uniforms["texMatrixAlpha"].value = alphaMap.matrix;

	                // This lets WebGLRenderer set the USE_ALPHAMAP macro and allow the shader to use GET_ALPHAMAP
	                // to handle clamping and invert. Note that we still need to set the uniforms above,
	                // because the renderer does not call refreshUniformsCommon() for generic ShaderMaterials.
	                override.alphaMap = alphaMap;

	                // Get singe/double side setting from original material
	                override.side = origMat.side;
	            } else {
	                // use prism uniforms for this case, so that we can reuse the prism sampling chunk
	                override.uniforms["surface_cutout_map"].value = alphaMap;
	                override.uniforms["surface_cutout_map_texMatrix"].value.copy(alphaMap.matrix);
	                override.uniforms["surface_cutout_map_invert"].value = alphaMap.invert;

	                // Workaround: Double-sided materials are currently only supported for Phong materials
	                // (via "generic_backface_cull" property, see MaterialConverter.js), i.e., Prism materials
	                // always seem to be single-sided. When using cutouts, you usually don't have closed surfaces.
	                // Therefore, the camera and the shadow camera may see the cutout surface from different
	                // directions - which looks confusing because either shadow or surface itself seems to be missing.
	                // A cleaner solution would be to support double-sided for Prism as well. Then, we could
	                // just set override.side = origMat.side like for Phong here.
	                override.side = THREE.DoubleSide;
	            }
	        }

	        // the same for alpha maps (Phong only)
	        if (rgbaMap) {
	            override.uniforms["map"].value = rgbaMap;
	            override.uniforms["texMatrix"].value = rgbaMap.matrix;
	            override.map = rgbaMap;
	        }

	        return override;
	    };

	    // Returns a custom override effect if needed for the given shape material - including decals if needed.
	    //  @param {THREE.Material}  origMat - the original material of the shape to be rendered.
	    //  @returns {null|THREE.Material} returns null if the default override effect can be used.
	    this.getCustomOverrideMaterial = function (origMat) {

	        // check if this shape material requires a custom override material
	        var override = getOverrideMaterial(origMat);

	        // If no custom override is needed, the shape can be assumed to be fully opaque.
	        // Decals cannot change this, so we can ignore them and just use the default shadow-map shader.
	        if (!override) {
	            return null;
	        }

	        // If there are no decals, just use the override material
	        if (!origMat.decals) {
	            override.decals = null;
	            return override;
	        }

	        // Since override is not null, the main material is (maybe partially) transparent. In this case,
	        // any decal may contribute to the shape opacity by defining separate cutouts.
	        // Therefore, we have to add corresponding decals to the override material as well.
	        if (origMat.decals) {

	            _overrideDecals.length = 0;

	            // for each original decal, add a corresponding one to the override material
	            for (var i = 0; i < origMat.decals.length; i++) {
	                var decal = origMat.decals[i];

	                // get override effect for this decal
	                var decalOverride = getOverrideMaterial(decal.material, i);

	                if (!decalOverride) {
	                    // if this decal does not need a custom override, it is fully opaque.
	                    // In this case, the whole shape is rendered to the shadow map anyway and
	                    // we don't need the decals at all.
	                    return null;
	                }

	                // this decal may contribute to the overall shape opacity.
	                // Therefore, we add a corresponding decal to the override matierial as well.
	                _overrideDecals.push({
	                    uv: decal.uv, // share original uv,
	                    material: decalOverride // but with shadowmap material
	                });
	            }
	        }

	        // attach temporary override decals to main override effect
	        override.decals = _overrideDecals;

	        return override;
	    };

	    // dispose all owned GPU resources
	    this.dispose = function () {
	        // dispose all ShaderMaterials
	        this.forEachMaterial(
	        function (mat) {
	            mat.dispose();
	        });

	        // Note that _invisibleMaterial does not need dispose, because it is always skipped
	        // by the renderer anyway.
	    };
	};

	// Toggles and constants
	var ShadowConfig = {
	    // Tweakable constants
	    ShadowMapSize: 1024,
	    ShadowESMConstant: 80.0,
	    ShadowBias: 0.001,
	    ShadowDarkness: 0.7, // shadow intensity. 0.0 => no shadows.
	    ShadowMapBlurRadius: 4.0,

	    ShadowMinOpacity: 0.9, // shapes below this opacity are excluded from shadowmap, i.e. do not cast shadows

	    // Debug toggles
	    UseHardShadows: false, // Fallback to simple hard shadows - helpful to debug artifacts
	    BlurShadowMap: true };


	// Enum for different states of the shadow map during progressive rendering
	var SHADOWMAP_NEEDS_UPDATE = 0;
	var SHADOWMAP_INCOMPLETE = 1;
	var SHADOWMAP_VALID = 2;

	// ShadowParams defines all parameters needed by material shaders to access the shadow map.
	function ShadowParams() {

	    this.shadowMap = undefined;
	    this.shadowMapSize = undefined;
	    this.shadowMatrix = undefined;
	    this.shadowLightDir = undefined;

	    /** @param {THREE.WebGLRenderTarget} */
	    this.init = function (target) {
	        this.shadowMap = target;
	        this.shadowMapSize = new THREE.Vector2(target.width, target.height);
	        this.shadowMatrix = new THREE.Matrix4();
	        this.shadowLightDir = new THREE.Vector3();
	    };

	    /** Set (or remove) uniforms and defines for a material, so that it uses the current shadow map
	        *   @param {THREE.Material} mat
	        */
	    this.apply = function (mat) {

	        mat.shadowMap = this.shadowMap;
	        mat.shadowMatrix = this.shadowMatrix;
	        mat.shadowLightDir = this.shadowLightDir;

	        // add/remove shadow-map macro
	        if (this.shadowMap) {
	            utils.setMacro(mat, "USE_SHADOWMAP");
	            if (ShadowConfig.UseHardShadows) {
	                utils.setMacro(mat, "USE_HARD_SHADOWS");
	            }
	        } else {
	            utils.removeMacro(mat, "USE_SHADOWMAP");
	            utils.removeMacro(mat, "USE_HARD_SHADOWS");
	        }

	        // Note that mat.needsUpdate is not needed here and would cause an expensive shader-recompile.
	        // It is only called when the macro changes (see add/removeMacro).
	    };
	}

	// NoShadows.apply() removes all shadow-map properties from a material.
	var NoShadows = new ShadowParams();

	/** @class Main class to manage ShadowMaps. Responsible for
	                                     *   - creating and updating the shadow map
	                                     *   - support progressive rendering of shadow maps
	                                     *   - update materials to give them access to the shadow map.
	                                     *   - rendering the ground shadow (a transparent plane where only shadow is visible)
	                                     *
	                                     *  How to use it: The main steps to update a shadow map are:
	                                     *   - beginShadowMapUpdate:  prepares the shadow map rendering (clear target, setup camera etc.)
	                                     *   - renderIntoShadowMap:   called for all scenes to be rendered into the shadow map, so that they cast shadows.
	                                     *   - finishShadowMapUpdate: Makes the rendered shadow-map available to all materials.
	                                     *
	                                     *  To support progressive rendering, there are two higher-level functions that work with RenderScene and
	                                     *  use the functions above:
	                                     *   - startUpdate:    Reset render scene to start progressive rendering of the RenderScene into the shadow map
	                                     *   - continueUpdate: Render more stuff into the shadow map. After calling, there are two possible results:
	                                     *                      a) Finished: ShadowMap is ready and materials are configured to use it.
	                                     *                      b) Timeout:  ShadowMaps are temporarily disabled for all materials. More continueUpdate()
	                                     *                                   calls are needed next frame.
	                                     *                     Use this.state to check whether the shadow map is finished.
	                                     **/
	function ShadowMaps(glRenderer) {

	    var _shadowParams = null;
	    var _gaussianPass = null;
	    var _shadowCamera = new THREE.OrthographicCamera();

	    // maximum possible value for exponential shadow map
	    var _ESMMaxValue = Math.exp(ShadowConfig.ShadowESMConstant);

	    // set clear color to maximum possible value in the shadow map
	    var _clearColor = ShadowConfig.UseHardShadows ? new THREE.Color(1, 1, 1) : new THREE.Color(_ESMMaxValue, 1.0, 1.0);

	    var _renderer = glRenderer;

	    // ground-shadow
	    var _groundMaterial = null; // {THREE.ShaderMaterial} ShaderMaterial to render plane with transparent shadow
	    var _groundShape = null; // {THREE.Mesh}           ground plane geometry
	    var _groundScene = null; // {THREE.Scene}          scene containing _groundShape

	    // material used to render into shadow map
	    var _shadowMapMaterial = utils.createShaderMaterial(ShadowMapShader);

	    // attach a callback for _shadowMapMaterial that provides custom variants used for cutout maps and to exclude invisible shapes
	    var _customOverrideMaterials = new ShadowMapOverrideMaterials();
	    _shadowMapMaterial.getCustomOverrideMaterial = _customOverrideMaterials.getCustomOverrideMaterial;

	    // dummy 1x1 pixel shadow-map that we use to temporarily hide shadows during shadow-map update.
	    // switching off shadows instead would require to recompile a lot of material shaders.
	    var _dummyShadowMap = null; // {THREE.WebGLRenderTarget}


	    //
	    // --- Some local helper functions ----
	    //

	    // @param {Number} size - widht/height of shadow target
	    function createShadowTarget(size) {
	        var target = new THREE.WebGLRenderTarget(size, size,
	        { minFilter: THREE.LinearFilter,
	            magFilter: THREE.LinearFilter,
	            format: THREE.RGBAFormat,
	            type: THREE.FloatType,
	            stencilBuffer: false,
	            generateMipmaps: false });

	        // TODO: generateMipmaps is ignored in the option struct
	        target.generateMipmaps = false;
	        return target;
	    };

	    // param {THREE.WebGLRenderTarget}
	    function clearShadowMap(target) {
	        _renderer.setRenderTarget(target);
	        _renderer.setClearColor(_clearColor, 1.0);
	        _renderer.clear();
	    }

	    // make all materials use _dummyShadowMap.
	    // @param {MaterialManager} matman
	    function hideShadows(matman) {
	        // replace actual shadow map by dummy shadow map
	        var shadowMap = _shadowParams.shadowMap;
	        _shadowParams.shadowMap = _dummyShadowMap;

	        // update all materials
	        matman.setShadowParams(_shadowParams);
	        _shadowParams.apply(_groundMaterial);

	        // set _shadowParams back to actual target
	        _shadowParams.shadowMap = shadowMap;
	    }

	    /** Configures the given shadow ortho camera to fit the given worldBox.
	       *   @param {THREE.OrthographicCamera} cam      - camera to be configured
	       *   @param {THREE.Box3}                worldBox - worldBox of the scene that have to be captured by the camera
	       *   @param {THREE.Vector3}             lightDir - direction from which the DirectionalLight comes
	       */
	    var fitShadowCam = function () {
	        // lookAt for shadowCamera. Rotates (0,0,-1) to shadowCam direction
	        var _lookAtMatrix = new THREE.Matrix4();

	        // inverse lookAt. Rotates shadowCam direction to (0,0,-1)
	        var _lookAtInverse = new THREE.Matrix4();

	        // we always use origin as light target
	        var _origin = new THREE.Vector3(0, 0, 0);

	        // bbox to define shadow-camera frustum
	        var _shadowBox = new THREE.Box3();

	        // shadow-camera position in world-space
	        var _shadowCamPos = new THREE.Vector3();

	        // temp use
	        var _tmp = new THREE.Vector3();

	        return function (cam, worldBox, lightDir) {

	            // let initial camera look from light position towards target (pos will be adjusted afterwards)
	            cam.position.copy(lightDir);
	            cam.lookAt(_origin);
	            _lookAtMatrix.makeRotationFromQuaternion(cam.quaternion);
	            _lookAtInverse.getInverse(_lookAtMatrix);

	            // rotate worldBox to shadow-camera space
	            // Note that we need the inverse to transform from worldSpace to shadowCam space
	            _shadowBox.copy(worldBox).applyMatrix4(_lookAtInverse);

	            // get final shadowCam pos in worldCoords: We choose the center of maxZ face.
	            // Note that in camera space, view direction is -z, i.e., +z is pointing towards the camera.
	            _tmp = _shadowBox.center(_tmp);
	            _shadowCamPos.set(_tmp.x, _tmp.y, _shadowBox.max.z);
	            _shadowCamPos.applyMatrix4(_lookAtMatrix);
	            cam.position.copy(_shadowCamPos);

	            // derive ortho-frustum extent from bbox.
	            _tmp = _shadowBox.size(_tmp);
	            cam.left = -0.5 * _tmp.x;
	            cam.right = 0.5 * _tmp.x;
	            cam.bottom = -0.5 * _tmp.y;
	            cam.top = 0.5 * _tmp.y;
	            cam.near = 0.0;
	            cam.far = _tmp.z;

	            // update all affected matrices
	            cam.updateMatrixWorld();
	            cam.matrixWorldInverse.getInverse(cam.matrixWorld);
	            cam.updateProjectionMatrix();
	        };
	    }();

	    /** Sets parameters needed for the Shader to render into the shadow map.
	           *  @param {THREE.Material} mat
	           */
	    function setShadowMapShaderParams(mat) {
	        mat.uniforms["shadowMapRangeMin"].value = _shadowCamera.near;
	        mat.uniforms["shadowMapRangeSize"].value = _shadowCamera.far - _shadowCamera.near;
	        mat.uniforms["shadowESMConstant"].value = ShadowConfig.ShadowESMConstant;
	        mat.uniforms["shadowMinOpacity"].value = ShadowConfig.ShadowMinOpacity;
	    }

	    //
	    // --- Initialization ---
	    //
	    this.init = function () {

	        // init shadow params
	        _shadowParams = new ShadowParams();
	        _shadowParams.init(createShadowTarget(ShadowConfig.ShadowMapSize));

	        // Note that the gauss pass creates its own target - which must use the same format and type as the shadow map.
	        _gaussianPass = ShadowConfig.BlurShadowMap ? new GaussianPass(ShadowConfig.ShadowMapSize, ShadowConfig.ShadowMapSize, ShadowConfig.ShadowMapBlurRadius, 1.0, {
	            type: _shadowParams.shadowMap.type,
	            format: _shadowParams.shadowMap.format }) :
	        undefined;

	        // ground shadow material
	        _groundMaterial = utils.createShaderMaterial(GroundShadowShader);
	        _groundMaterial.depthWrite = false;
	        _groundMaterial.transparent = true;

	        // ground shadow shape
	        _groundShape = groundshadow.createGroundShape(_groundMaterial);
	        _groundScene = new THREE.Scene();
	        _groundScene.add(_groundShape);

	        // needed from outside to adjust far-plane
	        this.groundShapeBox = new THREE.Box3();

	        // dummy 1x1 pixel shadow-map that we use to temporarily hide shadows during shadow-map update.
	        // switching off shadows instead would require to recompile a lot of material shaders.
	        _dummyShadowMap = createShadowTarget(1);
	        clearShadowMap(_dummyShadowMap);
	    };
	    this.init();

	    //
	    // --- Main functions for progressive shadow map update ---
	    //

	    // used to manage state of the shadow-map for progressive update.
	    this.state = SHADOWMAP_NEEDS_UPDATE;

	    /** Clears the shadow map and prepares shadow camera and model for rendering. If possible within the given
	                                          *  frame time, the shadow map will already be finished after calling this function. (use this.state to check).
	                                          *  If not, more calls to continueUpdate() are needed in subsequent frames.
	                                          *
	                                          *  @param {RenderScene}     modelQueue     - Used for progressive rendering into shadow map.
	                                          *  @param {Number}          frameRemaining - Frame budget in milliseconds
	                                          *  @param {THREE.Camera}    camera         - Main camera for scene rendering
	                                          *  @param {THREE.Vector3}   lightDir       - points to the direction where the light comes from (world-space)
	                                          *  @param {MaterialManager} matman
	                                          */
	    this.startUpdate = function (modelQueue, frameRemaining, camera, lightDir, matman) {

	        // clear shadow map and setup shadow map camera
	        var worldBox = modelQueue.getVisibleBounds(true);
	        this.beginShadowMapUpdate(camera, worldBox, lightDir);

	        // reset queue to start progressive render into shadow map
	        modelQueue.reset(_shadowCamera, 3 /*RENDER_SHADOWMAP*/, true);

	        // state is in progress. This may change in the call below if the shadow
	        // map can be fully rendered at once.
	        this.state = SHADOWMAP_INCOMPLETE;

	        // try to render the whole shadow map immediately in the given frame time.
	        frameRemaining = this.continueUpdate(modelQueue, frameRemaining, matman);

	        return frameRemaining;
	    };

	    /** Continues to render into the shadow map. startUpdate must have been called before.
	        *   @param {RenderScene}     modelQueue
	        *   @param {Number}          frameRemaining - available frame time budget in milliseconds
	        *   @param {MaterialManager} matman
	        *   @returns {Number} remaining frame time
	        *
	        *  Note: If other tasks call q.renderSome() or q.reset() on the modelQueue while the shadow-map update is in progress,
	        *        the shadow map update has to be restarted. */
	    this.continueUpdate = function (modelQueue, frameRemaining, matman) {

	        // render some more scenes into shadow map
	        frameRemaining = modelQueue.renderSome(this.renderSceneIntoShadowMap, frameRemaining);

	        // if shadow map rendering is already finished, let's use it in this frame already
	        if (modelQueue.isDone()) {
	            this.state = SHADOWMAP_VALID;
	            this.finishShadowMapUpdate(matman);
	        } else {
	            // model is too big to render shadow map in a single frame.
	            // Hide shadows until shadow map update is finished.
	            hideShadows(matman);
	        }
	        return frameRemaining;
	    };

	    ///
	    /// --- Core functions for shadow-map update ---
	    ///

	    /** Clear shadow target and initialize shadow camera.
	     *   @param {THREE.Camera}  camera
	     *   @param {THREE.Box3}    worldBox
	     *   @param {THREE.Vector3} lightDir - points to the direction where the light comes from (world-space)
	     */
	    this.beginShadowMapUpdate = function (camera, worldBox, lightDir) {

	        fitShadowCam(_shadowCamera, worldBox, lightDir);

	        // update shadowmap shader params
	        setShadowMapShaderParams(_shadowMapMaterial);
	        _customOverrideMaterials.forEachMaterial(setShadowMapShaderParams);

	        // activate hard-shadows fallback if enabled
	        if (ShadowConfig.UseHardShadows) {
	            utils.setMacro(_shadowMapMaterial, "USE_HARD_SHADOWS");
	            _customOverrideMaterials.forEachMaterial(
	            function (mat) {
	                utils.setMacro(mat, "USE_HARD_SHADOWS");
	            });

	        }

	        clearShadowMap(_shadowParams.shadowMap);

	        // render ground shape into shadow map. Although the ground will usually only receive shadow
	        // and not cast it, this is necessary to avoid artifacts with exponential shadow mapping,
	        // because the smoothing usually fails at the boundary to clear-color (=maxDepth) pixels in the shadow map.
	        this.renderSceneIntoShadowMap(_groundScene);
	    };

	    /** @param {THREE.Scene} scene */
	    this.renderSceneIntoShadowMap = function (scene) {
	        scene.overrideMaterial = _shadowMapMaterial;

	        _renderer.render(scene, _shadowCamera, _shadowParams.shadowMap);

	        scene.overrideMaterial = null;
	    };

	    /** @param {MaterialManager} matman */
	    this.finishShadowMapUpdate = function (matman) {

	        // Note that the gaussianPass has its own intermediate target, so that it's okay
	        // to use the same target for input and output.
	        if (_gaussianPass && !ShadowConfig.UseHardShadows) {
	            _gaussianPass.render(_renderer, _shadowParams.shadowMap, _shadowParams.shadowMap);
	        }

	        // compute shadowMatrix param: It maps world-coords to NDC for the shadow-camera
	        _shadowParams.shadowMatrix.multiplyMatrices(_shadowCamera.projectionMatrix, _shadowCamera.matrixWorldInverse);
	        _shadowParams.shadowMapRangeMin = _shadowCamera.near;
	        _shadowParams.shadowMapRangeSize = _shadowCamera.far - _shadowCamera.near;
	        _shadowParams.shadowLightDir.copy(_shadowCamera.position).normalize();

	        // update param on all materials
	        matman.setShadowParams(_shadowParams);

	        // update our own ground shadow shader
	        _shadowParams.apply(_groundMaterial);

	        this.isValid = true;
	    };

	    /**
	        *  Dispose GPU resources of ShadowMaps.
	        *  @param {MaterialManager} matman
	        **/
	    this.cleanup = function (matman) {

	        if (_gaussianPass) {
	            _gaussianPass.cleanup();
	        }
	        if (_shadowParams.shadowMap) {
	            _shadowParams.shadowMap.dispose();
	        }

	        // remove all shadow-map params from materials
	        matman.setShadowParams(NoShadows);

	        // dispose shader for shadow-map rendering
	        _shadowMapMaterial.dispose();
	        _customOverrideMaterials.dispose();

	        // dispose ground shape
	        _groundMaterial.dispose();
	        _groundShape.geometry.dispose();

	        // TODO: Probably LmvShaderPasses should get cleanup() functions as well to dispose targets and geometry?
	    };

	    ///
	    /// --- Ground shadow rendering ---
	    ///

	    this.setGroundShadowTransform = function () {
	        return function (center, size, worldUp, rightAxis) {
	            // update shape transform
	            groundshadow.setGroundShapeTransform(_groundShape, center, size, worldUp, rightAxis);

	            // expose ground shape box (needed for far-plane adjustment)
	            this.groundShapeBox.setFromObject(_groundShape);
	        };
	    }();

	    this.renderGroundShadow = function (camera, target) {
	        _renderer.render(_groundScene, camera, target, false);
	    };

	    /** Returns a corner of the bbox, enumerating from 0=minPoint to 7=maxPoint.
	        * @param {THREE.Box3}    box
	        * @param {Number}        index - in [0,7]
	        * @param {THREE.Vector3} [optionalTarget]
	        * @returns {THREE.Vector3}
	        */
	    function getBoxCorner(box, index, optionalTarget) {
	        var result = optionalTarget || new THREE.Vector3();
	        result.x = index & 1 ? box.max.x : box.min.x;
	        result.y = index & 2 ? box.max.y : box.min.y;
	        result.z = index & 4 ? box.max.z : box.min.z;
	        return result;
	    };

	    /** Expands the given box in xz by its ground shadow, assuming a ground plane { y = inoutBox.min.y } .
	        *   @param {THREE.Box3}    inoutBox  - box to be expanded.
	        *   @param {THREE.Vector3} shadowDir - direction pointing towards the light
	        */
	    this.expandByGroundShadow = function () {

	        var _plane = new THREE.Plane();
	        var _ray = new THREE.Ray();
	        var _tmpCenter = new THREE.Vector3();
	        var _tmpVec = new THREE.Vector3();
	        var _tmpBox = new THREE.Box3();

	        return function (inoutBox, shadowDir) {

	            // y is up vector.
	            _plane.normal.set(0, 1, 0);
	            _plane.constant = -inoutBox.min.y;

	            // note that shadow is the direction pointing towards the light
	            _ray.direction.copy(shadowDir).negate().normalize();

	            // Don't add points if they would grow the box too much
	            var MaxBoxGrow = 100.0;
	            var center = inoutBox.center(_tmpCenter);
	            var maxDist2 = center.distanceToSquared(inoutBox.min) * MaxBoxGrow * MaxBoxGrow;

	            // For all box corners, add the corresponding ground shadow point.
	            _tmpBox.makeEmpty();
	            for (var i = 0; i < 8; i++) {
	                // shoot ray from box corner along the light dir
	                _ray.origin = getBoxCorner(inoutBox, i);

	                var onPlane = _ray.intersectPlane(_plane, _tmpVec);
	                if (!onPlane) {
	                    continue;
	                }

	                // If the hit is too far away, we drop this point. This may happen if the light direction
	                // is close to horizontal. Growing the bbox too much would make the whole rendering fail
	                // (z-buffer artifacts or worse). So it's better to accept the clipped shadow in this case.
	                if (onPlane.distanceToSquared(center) >= maxDist2) {
	                    continue;
	                }

	                // add point to bbox
	                _tmpBox.expandByPoint(onPlane);
	            }

	            // Finally, expand the original box with the shadow extent
	            inoutBox.union(_tmpBox);
	        };
	    }();

	    // used by debugging tools
	    this.getShadowParams = function () {return _shadowParams;};
	    this.getShadowCamera = function () {return _shadowCamera;};
	}

	// Provides functionality needed by FireFlyWebGLRenderer to work with shadow maps.
	function ShadowRender() {}

	ShadowRender.RefreshUniformsShadow = function (uniforms, material) {

	    // may vary at runtime
	    if (uniforms.shadowMap)
	    uniforms.shadowMap.value = material.shadowMap;
	    if (uniforms.shadowMatrix)
	    uniforms.shadowMatrix.value = material.shadowMatrix;
	    if (uniforms.shadowLightDir)
	    uniforms.shadowLightDir.value = material.shadowLightDir;

	    // Currently constant
	    if (uniforms.shadowESMConstant)
	    uniforms.shadowESMConstant.value = ShadowConfig.ShadowESMConstant;
	    if (uniforms.shadowBias)
	    uniforms.shadowBias.value = ShadowConfig.ShadowBias;
	    if (uniforms.shadowMapSize)
	    uniforms.shadowMapSize.value = ShadowConfig.ShadowMapSize;
	    if (uniforms.shadowDarkness)
	    uniforms.shadowDarkness.value = ShadowConfig.ShadowDarkness;
	};

	module.exports = {
	    ShadowMapShader: ShadowMapShader,
	    GroundShadowShader: GroundShadowShader,
	    ShadowMapOverrideMaterials: ShadowMapOverrideMaterials,
	    SHADOWMAP_NEEDS_UPDATE: 0,
	    SHADOWMAP_INCOMPLETE: 1,
	    SHADOWMAP_VALID: 2,
	    ShadowConfig: ShadowConfig, // expose config constants for debugging/tweaking purposes
	    ShadowRender: ShadowRender,
	    ShadowMaps: ShadowMaps };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var utils = __webpack_require__(60);
	var ShaderPass = __webpack_require__(59);

	var GroundDepthShader = {
	    uniforms: {
	        "cutplanes": { type: "v4v", value: [] } },


	    vertexShader: __webpack_require__(90),
	    fragmentShader: __webpack_require__(91) };


	var GroundShadowAOShader = {
	    uniforms: {
	        tDepth: { type: "t", value: null },
	        worldSize: { type: "v3", value: new THREE.Vector3(1, 1, 1) } },


	    defines: {},



	    vertexShader: __webpack_require__(92),
	    fragmentShader: __webpack_require__(93) };



	var GroundShadowBlurShader = {
	    uniforms: {
	        tDepth: { type: "t", value: null } },


	    defines: {
	        //     KERNEL_SCALE:  1.0 / 64.0,
	        //     KERNEL_RADIUS: 7.0
	        //      BOX : 1
	    },

	    vertexShader: __webpack_require__(94),
	    fragmentShader: __webpack_require__(95) };



	var GroundShadowColorShader = {
	    uniforms: {
	        tDepth: { type: "t", value: null },
	        uShadowColor: { type: "v4", value: new THREE.Vector4(0, 0, 0, 1) } },


	    vertexShader: __webpack_require__(96),
	    fragmentShader: __webpack_require__(97) };



	// create plane shape to render shadow on the ground. It is a quad located in the z=0.0 plane
	// with an xy-extent of [-0.5, -0.5].
	function createGroundShape(material) {

	    var planeGeo = new THREE.PlaneBufferGeometry(1, 1);

	    // invert orientation so that it finally faces upwards
	    if (planeGeo.attributes.index.array.reverse) {
	        planeGeo.attributes.index.array.reverse();
	    } else {
	        // IE11...
	        // in-place swapping
	        var tmp;
	        var arr = planeGeo.attributes.index.array;
	        var half = Math.floor(arr.length / 2);
	        for (var i = 0, len = arr.length; i < half; ++i) {
	            tmp = arr[i];
	            arr[i] = arr[len - 1 - i];
	            arr[len - 1 - i] = tmp;
	        }
	    }

	    var planeMesh = new THREE.Mesh(planeGeo, material);
	    return planeMesh;
	}

	var setGroundShapeTransform = function () {
	    var m, from, bottomFaceCenter;
	    return function (mesh, center, size, worldUp, rightAxis) {

	        if (!m) m = new THREE.Matrix4();
	        if (!from) from = new THREE.Vector3();
	        if (!bottomFaceCenter) bottomFaceCenter = new THREE.Vector3();

	        // compute rotation
	        from.subVectors(center, worldUp);
	        m.lookAt(from, center, rightAxis);

	        // the ground shape quad center is the lower-face center of the bbox
	        bottomFaceCenter.copy(worldUp).multiplyScalar(-0.5 * size.y).add(center);

	        // plane transform
	        mesh.position.copy(bottomFaceCenter);
	        mesh.rotation.setFromRotationMatrix(m);
	        mesh.scale.set(size.z, size.x, size.y);
	    };
	}();

	var GroundShadow = function GroundShadow(renderer, params) {

	    var _renderer = renderer;
	    var _camera;
	    var _scene;
	    var _planeMesh;
	    var _targetH, _targetV;
	    var _matDepth, _matColor;
	    var _blurPassH, _blurPassV, _aoPass;
	    var _debugBox;

	    var _bufferValid = false;

	    var USE_AO_PASS = false;

	    // param defaults
	    var _params = {
	        texSize: USE_AO_PASS ? 128.0 : 64.0,
	        pixScale: 1.0,
	        blurRadius: USE_AO_PASS ? 5.0 : 7.0,
	        debug: false };


	    // FUNCTIONS

	    /**
	     * Set transform of the ground shadow system
	     * @param {Vector3} center  center of bounding box
	     * @param {Vector3} size    size in look&up coordinates, look = y
	     * @param {Vector3} lookDir look direction, where ground camera is facing
	     * @param {Vector3} upDir   up direction for ground camera
	     */
	    this.setTransform = function (center, size, lookDir, upDir) {
	        // ortho frustrum
	        _camera.left = -size.z / 2.0;
	        _camera.right = size.z / 2.0;
	        _camera.top = size.x / 2.0;
	        _camera.bottom = -size.x / 2.0;
	        _camera.near = 1.0;
	        _camera.far = size.y + _camera.near;

	        // update projection
	        _camera.updateProjectionMatrix();

	        setGroundShapeTransform(_planeMesh, center, size, lookDir, upDir);

	        // camera transform
	        _camera.position.addVectors(center, lookDir.clone().multiplyScalar(-size.y / 2.0 - _camera.near));
	        if (upDir) _camera.up.set(upDir.x, upDir.y, upDir.z);
	        _camera.lookAt(center);

	        // debug box
	        if (_params.debug) {
	            _debugBox.position.set(center.x, center.y, center.z);
	            _debugBox.rotation.set(_camera.rotation.x, _camera.rotation.y, _camera.rotation.z);
	            _debugBox.scale.set(size.z, size.x, size.y);
	        }

	        _aoPass.uniforms['worldSize'].value.copy(size);
	    };

	    this.renderIntoShadow = function (scene) {
	        //Skip ghosted objects
	        if (scene.overrideMaterial && scene.overrideMaterial.transparent)
	        return;

	        var oldMat = scene.overrideMaterial;
	        scene.overrideMaterial = _matDepth;
	        _renderer.render(scene, _camera, _targetH, false);
	        scene.overrideMaterial = oldMat;

	        // THREE.log("GS render in");
	    };

	    this.prepareGroundShadow = function () {
	        var MAX_PROCESS_FRAMES = 100; // max number of frames over which shadows take to process
	        var MIN_SCENES_PER_FRAME = 10; // minimum number of scenes to process each frame

	        var qScenes;
	        var qSceneCount = 0;
	        var qSceneIdx = 0;
	        var maxScenesPerFrame = 0;

	        return function (viewerImpl) {

	            var modelQueue = viewerImpl.modelQueue();

	            if (!this.enabled || modelQueue.isEmpty())
	            return false;

	            //this will happen once the linear render list is replaced
	            //by the BVH.
	            if (qScenes != modelQueue.getGeomScenes())
	            this.needClear = true;

	            // reset
	            if (this.needClear) {
	                this.clear();
	                this.needClear = false;

	                qScenes = modelQueue.getGeomScenes();
	                qSceneCount = qScenes.length;
	                qSceneIdx = 0;
	                maxScenesPerFrame = Math.max(Math.ceil(qSceneCount / MAX_PROCESS_FRAMES), MIN_SCENES_PER_FRAME);
	            }

	            // ready to render
	            if (this.isValid()) {
	                return true;
	            }

	            // progressive draw into shadow
	            else {
	                    var i = 0;
	                    while (qSceneIdx < qSceneCount && (!viewerImpl.progressiveRender || i < maxScenesPerFrame)) {
	                        var qScene = qScenes[qSceneIdx];

	                        if (qScene) {
	                            // passing forceVisible to WebGLRenderer.projectObject()
	                            qScene.forceVisible = true;
	                            this.renderIntoShadow(qScene);
	                            qScene.forceVisible = false;
	                            i++;
	                        }

	                        qSceneIdx++;
	                    }

	                    // finish
	                    if (qSceneIdx >= qSceneCount) {
	                        this.postprocess();
	                        viewerImpl.invalidate(true, false, true);
	                        return true;
	                    }
	                }

	            return false;
	        };
	    }();


	    this.renderShadow = function (camera, target) {
	        if (!_bufferValid)
	        return;

	        if (target)
	        _renderer.render(_scene, camera, target, false);else

	        _renderer.render(_scene, camera);

	        // THREE.log("GS render out");
	    };

	    this.postprocess = function () {
	        if (USE_AO_PASS) {
	            _aoPass.render(_renderer, _targetV, _targetH);
	            _blurPassV.render(_renderer, _targetH, _targetV);
	            _blurPassH.render(_renderer, _targetV, _targetH);
	        } else {
	            _blurPassV.render(_renderer, _targetV, _targetH);
	            _blurPassH.render(_renderer, _targetH, _targetV);
	        }

	        _bufferValid = true;

	        // THREE.log("GS postprocess");
	    };

	    this.clear = function () {
	        var oldClearColor = _renderer.getClearColor().getHex();
	        var oldClearAlpha = _renderer.getClearAlpha();
	        _renderer.setClearColor(0, 0);
	        _renderer.clearTarget(_targetH, true, true, false);
	        _renderer.setClearColor(oldClearColor, oldClearAlpha);
	        _bufferValid = false;

	        // THREE.log("GS clear");
	    };

	    this.setColor = function (color) {
	        _matColor.uniforms.uShadowColor.value.x = color.r;
	        _matColor.uniforms.uShadowColor.value.y = color.g;
	        _matColor.uniforms.uShadowColor.value.z = color.b;
	    };

	    this.getColor = function () {
	        return new THREE.Color(
	        _matColor.uniforms.uShadowColor.value.x,
	        _matColor.uniforms.uShadowColor.value.y,
	        _matColor.uniforms.uShadowColor.value.z);

	    };

	    this.setAlpha = function (alpha) {
	        _matColor.uniforms.uShadowColor.value.w = alpha;
	    };

	    this.getAlpha = function () {
	        return _matColor.uniforms.uShadowColor.value.w;
	    };

	    this.isValid = function () {
	        return _bufferValid;
	    };

	    // TODO_NOP: hack exposing groundshadow material
	    this.getDepthMaterial = function () {
	        return _matDepth;
	    };

	    // INITIALIZATION

	    if (params) {
	        for (var i in _params) {
	            _params[i] = params[i] || _params[i];
	        }
	    }

	    // init scene
	    _scene = new THREE.Scene();

	    // init camera
	    _camera = new THREE.OrthographicCamera();

	    // init targets

	    _targetH = new THREE.WebGLRenderTarget(_params.texSize, _params.texSize, {
	        minFilter: THREE.LinearFilter,
	        magFilter: THREE.LinearFilter,
	        format: THREE.RGBAFormat,
	        stencilBuffer: false });

	    _targetH.generateMipmaps = false;

	    _targetV = new THREE.WebGLRenderTarget(_params.texSize, _params.texSize, {
	        minFilter: THREE.LinearFilter,
	        magFilter: THREE.LinearFilter,
	        format: THREE.RGBAFormat,
	        stencilBuffer: false });

	    _targetV.generateMipmaps = false;


	    // init materials

	    _matDepth = utils.createShaderMaterial(GroundDepthShader);
	    _matDepth.side = THREE.DoubleSide;
	    _matDepth.blending = THREE.NoBlending;

	    _blurPassH = new ShaderPass(GroundShadowBlurShader, "tDepth");
	    _blurPassV = new ShaderPass(GroundShadowBlurShader, "tDepth");
	    _aoPass = new ShaderPass(GroundShadowAOShader, "tDepth");

	    // write defines
	    _blurPassH.material.defines["KERNEL_SCALE"] = _blurPassV.material.defines["KERNEL_SCALE"] = (_params.pixScale / _params.texSize).toFixed(4);
	    _blurPassH.material.defines["KERNEL_RADIUS"] = _blurPassV.material.defines["KERNEL_RADIUS"] = _params.blurRadius.toFixed(2);

	    //Some standard GL setup for the blur passes.
	    _aoPass.material.blending = _blurPassH.material.blending = _blurPassV.material.blending = THREE.NoBlending;
	    _aoPass.material.depthWrite = _blurPassH.material.depthWrite = _blurPassV.material.depthWrite = false;
	    _aoPass.material.depthTest = _blurPassH.material.depthTest = _blurPassV.material.depthTest = false;
	    _blurPassH.material.defines["HORIZONTAL"] = 1;

	    _matColor = utils.createShaderMaterial(GroundShadowColorShader);
	    _matColor.uniforms.tDepth.value = USE_AO_PASS ? _targetV : _targetH;
	    _matColor.depthWrite = false;
	    _matColor.transparent = true;

	    // init plane
	    _planeMesh = createGroundShape(_matColor);
	    _scene.add(_planeMesh);

	    // init debug box
	    if (_params.debug) {
	        _debugBox = new THREE.Mesh(
	        new THREE.BoxGeometry(1, 1, 1),
	        new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }));

	        _scene.add(_debugBox);
	    }

	    // init with default bounds and up
	    this.setTransform(
	    new THREE.Vector3(0, 0, 0),
	    new THREE.Vector3(1, 1, 1),
	    new THREE.Vector3(0, 1, 0),
	    THREE.Object3D.DefaultUp);

	};

	GroundShadow.prototype.constructor = GroundShadow;

	module.exports = {
	    GroundShadow: GroundShadow,
	    createGroundShape: createGroundShape,
	    setGroundShapeTransform: setGroundShapeTransform };

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "#ifdef USE_LOGDEPTHBUF\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\nvarying float vFragDepth;\r\n#endif\r\nuniform float logDepthBufFC;\r\n#endif\r\n\r\n#if NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n\r\nvoid main() {\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );;\r\n\r\n#if NUM_CUTPLANES > 0\r\n    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n    vWorldPosition = worldPosition.xyz;\r\n#endif\r\n\r\n#ifdef USE_LOGDEPTHBUF\r\n    gl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n    vFragDepth = 1.0 + gl_Position.w;\r\n#else\r\n    gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\r\n#endif\r\n#endif\r\n}\r\n";

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = "#ifdef USE_LOGDEPTHBUF\r\nuniform float logDepthBufFC;\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n#extension GL_EXT_frag_depth : enable\r\nvarying float vFragDepth;\r\n#endif\r\n#endif\r\n\r\n#include<pack_depth>\r\n\r\n#if NUM_CUTPLANES > 0\r\nvarying vec3 vWorldPosition;\r\n#endif\r\n#include<cutplanes>\r\n\r\nvoid main() {\r\n#if NUM_CUTPLANES > 0\r\n    checkCutPlanes(vWorldPosition);\r\n#endif\r\n\r\n#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\r\n    gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\r\n#endif\r\n\r\n#ifdef USE_LOGDEPTHBUF_EXT\r\n    float depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n#else\r\n    float depth = gl_FragCoord.z / gl_FragCoord.w;\r\n#endif\r\n    depth = 1.0 - depth;\r\n    gl_FragColor = packDepth(depth);\r\n}\r\n";

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n    vUv = vec2(uv.x, uv.y);\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}\r\n";

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "#define NUM_SAMPLES 29.0\r\n#define NUM_SPIRAL_TURNS 7.0\r\n\r\nuniform sampler2D tDepth;\r\nuniform vec3 worldSize;\r\n\r\nvarying vec2 vUv;\r\n\r\n\r\n\r\n#ifdef PRESET_2\r\n#define SAMPLE_RADIUS 0.3\r\n#define AO_GAMMA 1.0\r\n#define AO_INTENSITY 1.0\r\n#else\r\n#define SAMPLE_RADIUS 0.2\r\n#define AO_GAMMA 3.0\r\n#define AO_INTENSITY 0.8\r\n#endif\r\n\r\n#include<pack_depth>\r\n\r\n#define PI 3.14159265358979\r\n\r\nfloat rand(vec2 co) {\r\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\r\n}\r\n\r\nfloat getRandomAngle(vec2 pos) {\r\n    return rand(pos) * (2.0 * PI);\r\n}\r\n\r\n\r\nvec2 tapLocation(float sampleNumber, float spinAngle, out float ssR){\r\n\r\n    float alpha = float(sampleNumber + 0.5) * (1.0 / NUM_SAMPLES);\r\n    float angle = alpha * (NUM_SPIRAL_TURNS * PI * 2.0) + spinAngle;\r\n\r\n    ssR = alpha;\r\n    return vec2(cos(angle), sin(angle));\r\n}\r\n\r\n\r\nvec2 sampleAO(vec2 unitDirection, float radius) {\r\n    vec2 sampleOffset = unitDirection * radius;\r\n    float idepth = unpackDepth(texture2D(tDepth, vUv + sampleOffset));\r\n    float depth = 1.0 - idepth;\r\n\r\n    if (depth < 1e-6) {\r\n        if (radius == 0.0)\r\n            return vec2(1.0, 1.0);\r\n        else\r\n            return vec2(0.0, 1.0);\r\n    }\r\n\r\n\r\n    vec3 dir = vec3(sampleOffset.x, depth, sampleOffset.y) * worldSize;\r\n    float distance2 = dot(dir,dir);\r\n    float idistance = 1.0 / sqrt(distance2);\r\n\r\n\r\n    vec3 ndir = dir * idistance;\r\n\r\n\r\n\r\n#ifdef PRESET_2\r\n    float importance = ndir.y * idistance;\r\n#else\r\n    float importance = ndir.y / distance2;\r\n#endif\r\n\r\n    vec2 ret;\r\n    ret.x = (idepth == 0.0) ? 0.0 : importance;\r\n    ret.y = importance;\r\n    return ret;\r\n}\r\n\r\nvoid main() {\r\n    vec2 sum = vec2(0.0);\r\n    float angle = getRandomAngle(vUv);\r\n\r\n\r\n    for (float i = 0.0; i<NUM_SAMPLES; i+= 1.0) {\r\n        float ssR;\r\n        vec2 uv = tapLocation(i, angle, ssR);\r\n        sum += sampleAO(uv, ssR * SAMPLE_RADIUS);\r\n    }\r\n    float ao = sum.x / sum.y;\r\n    gl_FragColor = packDepth(AO_INTENSITY * clamp(pow(ao, AO_GAMMA), 0.0, 0.9999));\r\n}\r\n";

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n    vUv = vec2(uv.x, uv.y);\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}\r\n";

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDepth;\r\n\r\nvarying vec2 vUv;\r\n\r\n#ifdef HORIZONTAL\r\n#define GET_UV(X) vec2(vUv.x + KERNEL_SCALE*(X), vUv.y)\r\n#else\r\n#define GET_UV(Y) vec2(vUv.x, vUv.y + KERNEL_SCALE*(Y))\r\n#endif\r\n\r\n#include<pack_depth>\r\n\r\n#define PI 3.14159265358979\r\n#define SIGMA ((2.0 * KERNEL_RADIUS+1.0) / 6.0)\r\n#define SIGMASQ2 (2.0 * SIGMA * SIGMA)\r\n#ifdef BOX\r\n#define KERNEL_VAL(X) 1.0\r\n#else\r\n#define KERNEL_VAL(X) ( (1.0 / sqrt(PI * SIGMASQ2)) * exp(-(X)*(X)/SIGMASQ2) )\r\n#endif\r\n\r\nvoid main() {\r\n    float depthVal = 0.0;\r\n    float sum = 0.0;\r\n    for (float x=-KERNEL_RADIUS; x<=KERNEL_RADIUS; x+=1.0) {\r\n        depthVal += unpackDepth(texture2D(tDepth, GET_UV(x))) * KERNEL_VAL(x);\r\n        sum += KERNEL_VAL(x);\r\n    }\r\n    gl_FragColor = packDepth(depthVal/sum);\r\n}\r\n";

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "varying vec2 vUv;\r\n\r\nvoid main() {\r\n    vUv = vec2(uv.x, uv.y);\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}\r\n";

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDepth;\r\nuniform vec4 uShadowColor;\r\nvarying vec2 vUv;\r\n\r\n#include<pack_depth>\r\n\r\nvoid main() {\r\n    float depthVal = unpackDepth(texture2D(tDepth, vUv));\r\n\r\n    gl_FragColor = vec4(uShadowColor.rgb, uShadowColor.a * depthVal);\r\n}\r\n";

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "#include<shadowmap_decl_common>\r\n\r\n\r\n\r\nvarying float depth;\r\n\r\n\r\n#ifdef USE_SURFACE_CUTOUT_MAP\r\n\r\nvarying vec2 vUv;\r\n#else\r\n\r\n#ifdef USE_MAP\r\nvarying vec2 vUv;\r\nuniform mat3 texMatrix;\r\n#endif\r\n\r\n\r\n#ifdef USE_ALPHAMAP\r\nvarying vec2 vUvAlpha;\r\nuniform mat3 texMatrixAlpha;\r\n#endif\r\n#endif\r\n\r\n\r\nvoid passCutoutUVCoords() {\r\n#ifdef USE_SURFACE_CUTOUT_MAP\r\n\r\n\r\n    vUv = uv;\r\n#else\r\n\r\n#ifdef USE_MAP\r\n    vUv = (texMatrix * vec3(uv, 1.0)).xy;\r\n#endif\r\n\r\n\r\n#ifdef USE_ALPHAMAP\r\n    vUvAlpha = (texMatrixAlpha * vec3(uv, 1.0)).xy;\r\n#endif\r\n#endif\r\n}\r\n\r\nvoid main() {\r\n\r\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n    vec4 p_Position = projectionMatrix * mvPosition;\r\n    gl_Position = p_Position;\r\n\r\n\r\n    depth = -mvPosition.z;\r\n\r\n\r\n    passCutoutUVCoords();\r\n}\r\n";

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "#include<shadowmap_decl_common>\r\nvarying float depth;\r\n\r\n\r\n#ifdef USE_SURFACE_CUTOUT_MAP\r\n\r\n#include<float3_average>\r\n#prism_uniforms<surface_cutout_map>\r\nvarying vec2 vUv;\r\n#else\r\n\r\n#ifdef USE_MAP\r\nvarying vec2 vUv;\r\nuniform sampler2D map;\r\n#endif\r\n\r\n\r\n#ifdef USE_ALPHAMAP\r\nvarying vec2 vUvAlpha;\r\nuniform sampler2D alphaMap;\r\n#endif\r\n#endif\r\n\r\nuniform float shadowMinOpacity;\r\n\r\n\r\nvoid applyCutoutMaps() {\r\n\r\n    float opacity = 1.0;\r\n#ifdef USE_SURFACE_CUTOUT_MAP\r\n\r\n#prism_sample_texture<surface_cutout, opacity, true, false>\r\n#else\r\n\r\n#ifdef USE_MAP\r\n    opacity *= GET_MAP(vUv).a;\r\n#endif\r\n\r\n\r\n#ifdef USE_ALPHAMAP\r\n    opacity *= GET_ALPHAMAP(vUvAlpha).r;\r\n#endif\r\n#endif\r\n\r\n\r\n#if defined(USE_SURFACE_CUTOUT_MAP) || defined(USE_MAP) || defined(USE_ALPHAMAP)\r\n\r\n\r\n\r\n    if (opacity < shadowMinOpacity) discard;\r\n#endif\r\n}\r\n\r\nvoid main() {\r\n\r\n\r\n\r\n    float normalizedLinearDepth = (depth - shadowMapRangeMin) / shadowMapRangeSize;\r\n\r\n\r\n    float val = exp(shadowESMConstant * normalizedLinearDepth);\r\n\r\n\r\n#ifdef USE_HARD_SHADOWS\r\n    val = normalizedLinearDepth;\r\n#endif\r\n\r\n\r\n    applyCutoutMaps();\r\n\r\n    gl_FragColor = vec4(val, 0, 0, 1);\r\n}\r\n";

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "#include<shadowmap_decl_vert>\r\n\r\nvoid main() {\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n#include<shadowmap_vert>\r\n}\r\n";

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "#include<shadowmap_decl_frag>\r\n\r\nvoid main() {\r\n    float shadowIntensity = 0.5 * (1.0 - getShadowValue());\r\n    gl_FragColor = vec4(0.0, 0.0, 0.0, shadowIntensity);\r\n}\r\n";

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var RenderBatch = __webpack_require__(76);
	var RenderBatchLess = __webpack_require__(103);

	//TODO: better heuristic for group size might be needed
	//But it should be based on polygon count as well as
	//fragment count. But polygon count is not known
	//until we get the meshes later on.
	var MAX_FRAGS_PER_GROUP = 333;

	/**
	                                * All rendering and other scene related data associated with a 3D model or 2D Drawing.
	                                * The "linear" variant uses simple non-hierarchical linear scene traversal when rendering a frame.
	                                * Good for small scenes, incrementally loaded scenes, and 2D drawings where draw order matters.
	                                * @constructor
	                                */
	function ModelIteratorLinear(renderModel) {

	    var _frags = renderModel.getFragmentList();
	    var _model = renderModel;
	    var _fillLast = _model.is2d() && !_frags.onDemandLoadingEnabled();
	    var fragCount = _frags.getCount();

	    // index of the scene in _geomScenes that the next nextBatch() call will return.
	    var _currentScene = 0;

	    //Custom re-order of the fragments for optimized rendering.
	    //those are indices into the immutable vizmeshes fragment list.
	    //NOTE: We use the array container as reference to pass to RenderBatches, because the
	    //typed array can get resized when loading data with unknown size
	    var _fragOrder = [new Int32Array(fragCount)];

	    //Trivial initial order
	    var i;
	    for (i = 0; i < fragCount; i++) {
	        _fragOrder[0][i] = i;
	    }

	    //Create a RenderBatch for each batch of fragments.
	    //We will then draw each batch in turn to get a progressive
	    //effect. The number of fragments per batch should be close
	    //to what we can draw in a single frame while maintaining interactivity.
	    //This linear list of batches is used for 2D scenes and for 3D scenes
	    //while they are loading. After load is done, the linear traversal is replaced
	    //by a view-based bounding volume hierarchy traversal.

	    // choose _fragsPerScene based on scene type and device
	    var fragsPerScene = MAX_FRAGS_PER_GROUP;
	    if (renderModel.is2d())
	    fragsPerScene /= 6; //2d meshes are all fully packed, so we can't draw so many per batch.
	    if (globals.isMobileDevice()) {
	        fragsPerScene /= 3; //This is tuned for ~15fps on Nexus 7.
	        // 2d on mobile is even slower, draw fewer. This assumes that the
	        // 2d buffer size is 32K. If you change the buffer size, you need
	        // to adjust this too.
	        if (renderModel.is2d())
	        fragsPerScene /= 2;
	    }
	    fragsPerScene = fragsPerScene | 0;
	    var _fragsPerScene = fragsPerScene > 0 ? fragsPerScene : MAX_FRAGS_PER_GROUP;

	    // Given the maximum fragCount per batch, compute the required number of batches to fit in all fragments
	    var numScenes = 0 | (fragCount + _fragsPerScene - 1) / _fragsPerScene;

	    // Choose a different render batch class if fragments on demand loading enabled.
	    var onDemandLoadingEnabled = _frags.onDemandLoadingEnabled();
	    var _RBClass = onDemandLoadingEnabled ? RenderBatchLess : RenderBatch;

	    // create array with a RenderBatch per fragment group.
	    // Note that this will only create all batches if the full fragCount is known in advance. Otherwise, they have to be created 
	    // later via addFragment() calls.
	    var _geomScenes = new Array(numScenes);
	    for (i = 0; i < numScenes; i++) {
	        var startIndex = i * _fragsPerScene;
	        var scene = _geomScenes[i] = new _RBClass(_frags, _fragOrder, startIndex, _fragsPerScene);
	        var lastIndex = startIndex + _fragsPerScene;

	        // Crop last batch at the end, so that it does not exceed the fragment count. The last batch has usually not full
	        // length, unless fragCount is a multiple of 
	        if (lastIndex > fragCount)
	        lastIndex = fragCount;
	        scene.lastItem = lastIndex;

	        if (onDemandLoadingEnabled) {
	            // Only try to calculate bounds when it needs to (on demand load need batch bounding box ready ahead of geom loading)
	            scene.calculateBounds();
	        }
	    }


	    // Only needed if the full fragment count is not known in advance.
	    // For incremental loading, this method makes sure that 
	    //  - fragOrder has required size 
	    //  - fragOrder defines trivial orderning of all frags added so far
	    //  - _geomScenes contains a batch containing the new fragment
	    //
	    // Assumptions: Fragments are currently added by increasing fragId. Otherwise, _geomScenes might contain null-elements,
	    //              which may cause exceptions, e.g., in nextBatch() and getVisibleBounds().
	    this.addFragment = function (fragId) {

	        //The frag order indices array will not auto-resize (it's ArrayBuffer)
	        //so we have to do it manually
	        if (_fragOrder[0].length <= fragId)
	        {
	            var nlen = 2 * _fragOrder[0].length;
	            if (nlen <= fragId)
	            nlen = fragId + 1;

	            var ninds = new Int32Array(nlen);
	            ninds.set(_fragOrder[0]);
	            _fragOrder[0] = ninds;

	            //We only set this when the fragment index goes
	            //beyond the initial fragment size -- assuming
	            //that the initial bounds passed into the RenderQueue constructor
	            //is valid for the initial fragment list.
	            this.visibleBoundsDirty = true;
	        }
	        //Note: this assumes trivial ordering
	        //We cannot set/add meshes if reordering of the indices has already happened.
	        //This is OK, because trivial ordering with unknown initial fragment count
	        //happens only for 2D models where we preserve trivial draw order anyway.
	        _fragOrder[0][fragId] = fragId;


	        //Find a parent for the mesh -- in the case of SVF
	        //fragments we just map fragment index to increasing
	        //scene index, since fragments are already ordered
	        //in the way we want to draw them
	        var sceneIndex = 0 | fragId / _fragsPerScene;
	        if (_geomScenes) {
	            var scene = _geomScenes[sceneIndex];
	            if (!scene) {
	                // Note that it's okay that the batch may also reference fragments that were not added yet. 
	                // The RenderBatch does not require all fragments to be in memory already.
	                _geomScenes[sceneIndex] = scene = new _RBClass(_frags, _fragOrder, sceneIndex * _fragsPerScene, _fragsPerScene);
	            }
	            // did scene get set reasonably?
	            if (scene) {
	                // notify batch about new fragment, so that the batch updates internal state like summed bbox and material sorting
	                scene.onFragmentAdded(fragId);
	            }
	        }

	    };

	    this.getFragmentCount = function () {
	        if (!_geomScenes)
	        return 0;
	        var lastItem = _geomScenes[_geomScenes.length - 1].lastItem;
	        while (--lastItem >= 0) {
	            if (_frags.geomids[lastItem] >= 0)
	            break;
	        }
	        return lastItem + 1;
	    };

	    // restart iterator
	    this.reset = function () {
	        _currentScene = 0;
	        if (_fillLast && _geomScenes[0])
	        _geomScenes[0].drawEnd = 0;
	    };

	    /*
	           this.getRenderProgress = function() {
	               return _currentScene / _geomScenes.length;
	           };
	       */
	    this.getSceneCount = function () {
	        return _geomScenes.length;
	    };

	    this.getGeomScenes = function () {
	        return _geomScenes;
	    };

	    this.done = function () {
	        // If we are filling f2d batches, then we aren't done until the model is loaded
	        if (_fillLast && !_model.isLoadDone())
	        return false;
	        // Once the model is loaded, we are done when the last batch is drawn
	        var res;
	        return _currentScene >= _geomScenes.length - 1 && (
	        !(res = _geomScenes[_currentScene]) || res.drawStart >= res.lastItem);
	    };

	    // Returns the next RenderBatch from _geomScenes or null when reaching the end.
	    this.nextBatch = function () {

	        if (_currentScene >= this.getSceneCount())
	        return null;

	        // as long as fragments are added in order of increasing id, res will never be null.
	        var res = _geomScenes[_currentScene];
	        if (!_fillLast)
	        ++_currentScene;else
	        {
	            // 2D scene, so we only want to procede to the next batch when this
	            // current batch is filled.
	            if (res.lastItem >= res.start + res.count) {
	                ++_currentScene;
	                if (_geomScenes[_currentScene])
	                _geomScenes[_currentScene].drawEnd = _geomScenes[_currentScene].start;
	            }
	            res.drawStart = res.drawEnd;
	            res.drawEnd = res.lastItem;
	            if (res.hasOwnProperty("drawStart") && res.lastItem <= res.drawStart)
	            return null; // all object in the batch have been drawn
	        }

	        // Render importance is used to decide what to render next when using progressive rendering with multiple models. (see RenderScene.renderSome)
	        // For linear iterator, is treated as equally important.
	        res.renderImportance = 0;
	        return res;
	    };


	    // Computes the summed bboxes of all batches of the iterator and writes them to the out params:
	    // - visibleBounds:           instanceof THREE.Box3, bbox of all fragments excluding the ghosted ones.
	    // - visibleBoundsWithHidden: instanceof THREE.Box3, bbox of all fragments 
	    //
	    // [HB:] BBoxes are computed without considering MESH_HIDE flag in any way, see RenderBatch.calculateBounds(). Is this intended?
	    this.getVisibleBounds = function (visibleBounds, visibleBoundsWithHidden) {

	        //Case where we are not using BVH

	        var len = this.getSceneCount();
	        for (var i = 0; i < len; i++) {

	            // make sure that the bboxes of the batch is up-to-date
	            _geomScenes[i].calculateBounds();

	            // sum up bbox of fragments excluding ghosted
	            visibleBounds.union(_geomScenes[i].boundingBox);

	            // sum up bbox of all fragments
	            visibleBoundsWithHidden.union(_geomScenes[i].boundingBox);
	            visibleBoundsWithHidden.union(_geomScenes[i].boundingBoxHidden);

	        }

	    };

	    // Perform raycast on all batches. See RenderBatch.raycast() for params.
	    this.rayCast = function (raycaster, intersects, dbIdFilter) {
	        var len = this.getSceneCount();
	        for (var i = 0; i < len; i++) {
	            _geomScenes[i].raycast(raycaster, intersects, dbIdFilter);
	        }
	    };

	}

	module.exports = ModelIteratorLinear;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var globals = __webpack_require__(75);
	var RenderBatch = __webpack_require__(76);

	function RenderBatchLess(frags, fragOrder, start, count) {
	    RenderBatch.call(this, frags, fragOrder, start, count);

	    // visibility flag for scene batch. -1: not check yet, 0: not visible, 1: visible
	    // this is useful when travserse the same batch again in a re-render without reset the iterator, 
	    // that won't apply visibility again.
	    this.visibleStats = -1;
	}

	RenderBatchLess.prototype = Object.create(RenderBatch.prototype);
	RenderBatchLess.prototype.constructor = RenderBatchLess;

	RenderBatchLess.prototype.resetVisStatus = function () {
	    this.visibleStats = -1;
	};

	RenderBatchLess.prototype.forEach = function (callback, drawMode, includeEmpty) {

	    var indices = this.getIndices();

	    var frags = this.frags;
	    var sortByShaderPossible = !this.sortByShaderDone;

	    var pageOutGeometryEnabled = frags.pageOutGeometryEnabled();
	    var onDemandLoadingEnabled = frags.onDemandLoadingEnabled();

	    for (var i = this.start, iEnd = this.lastItem; i < iEnd; i++) {
	        var idx = indices ? indices[i] : i;
	        var m;

	        // Only do this when on demand loading enabled.
	        if (onDemandLoadingEnabled) {

	            // If already traversed for rendering, ignore this fragment.
	            if (frags.isFlagSet(idx, globals.MESH_TRAVERSED) && drawMode == globals.MESH_RENDERFLAG) {

	                // Still need to check sortByShaderPossible even already been traversed,
	                // in case the geom has been paged out.
	                m = frags.getVizmesh(idx);
	                if (sortByShaderPossible && (!m || !m.material || !m.material.program))
	                sortByShaderPossible = false;

	                continue;
	            }

	            m = frags.getVizmesh(idx);

	            // If geometry of this fragment is required...
	            if (!includeEmpty && drawMode && frags.isFlagSet(idx, drawMode)) {

	                if (!m.geometry) {
	                    // Require geometry only when truly need it, so that it is available on later runs.
	                    // Note that m.geometry will usually be null here.
	                    m.geometry = frags.requireGeometry(idx);
	                    if (idx < this.drawOrderRender)
	                    this.drawOrderRender = idx;
	                } else
	                {
	                    // Set traversed flag for this fragment. Don't set it if we are drawing
	                    // fragments out of order. Then they will be drawn again over anything
	                    // that might have been drawn.
	                    var drawn = drawMode == globals.MESH_RENDERFLAG && frags.isFlagSet(idx, globals.MESH_DRAWN);
	                    if (drawMode == globals.MESH_RENDERFLAG) {
	                        if (this.drawOrderRender == undefined || idx < this.drawOrderRender)
	                        frags.setFlagFragment(idx, globals.MESH_DRAWN, true);else
	                        {
	                            // Still need to check sortByShaderPossible even if not drawing,
	                            // in case the geom has been paged out.
	                            m = frags.getVizmesh(idx);
	                            if (sortByShaderPossible && (!m || !m.material || !m.material.program))
	                            sortByShaderPossible = false;

	                            continue; // Don't draw out of order
	                        }
	                    }

	                    // For fragments that may be paged out, check if this fragment was the
	                    // last one 
	                    // Only record candidates for paging if it is enabled. 
	                    if (!drawn && pageOutGeometryEnabled) {

	                        // Only do this if using optimized memory for geometry rendering, 
	                        // and ignore the first FRAGS_PERSISTENT_COUNT fragments that are more improtant
	                        // to persistent in memory all the time.
	                        // let's check whether this geometry has been fully used.
	                        // If so then add it to the traversed geometry list for recycle.

	                        if (frags.pagingProxy) {
	                            frags.pagingProxy.onGeomTraversed(m.geometry);
	                        }

	                    }

	                }
	            }
	        } else
	        {
	            // fragment list is small enough => just get the mesh without any paging work.
	            m = frags.getVizmesh(idx);
	        }

	        if (sortByShaderPossible && (!m || !m.material || !m.material.program))
	        sortByShaderPossible = false;


	        // if drawMode is given, iterate vizflags that match
	        if ((includeEmpty || m && m.geometry) && (
	        !drawMode || frags.isFlagSet(idx, drawMode))) {

	            callback(m, idx);
	        }
	    }

	    //If all materials shaders are already available, we can sort by shader
	    //to minimize shader switches during rendering. This sort will only
	    //execute once and changing materials later will break the sorted order again.
	    if (sortByShaderPossible)
	    this.sortByShader();
	};

	RenderBatchLess.prototype.applyVisibility = function () {

	    var frags, vizflags, frustum, drawMode, fragIdCb, checkCull, allHidden, _tmpBox, done;

	    function evalCulling(checkCull, frustum, frags, idx) {

	        var culled = false;

	        if (!_tmpBox)
	        _tmpBox = new THREE.Box3();

	        frags.getWorldBounds(idx, _tmpBox);
	        if (checkCull && !frustum.intersectsBox(_tmpBox)) {
	            culled = true;
	        } else
	        if (frags.pixelCullingEnable()) {
	            // Check whether the projected area is smaller than a threshold,
	            // if yes, do not render it.
	            // ??? This may impact rendering that need to profile further.
	            var area = frustum.projectedArea(_tmpBox);
	            area *= frustum.areaConv;
	            if (area < frags.pixelCullingThreshold()) {
	                culled = true;
	            }
	        }


	        return culled;
	    }

	    function recordCulled(idx) {
	        // Record culled geometries for paging out.
	        if (frags.pagingProxy && idx > frags.pagingProxy.options.fragsPersistentCount) {
	            // This fragment is culled, then move its geometry to culled geometry list.
	            var geomId = frags.geomids[idx];
	            if (frags.geoms.getGeometry(geomId)) {
	                var map = frags.geomidsmap[geomId];
	                // Let's only record the geometries that are not used by more than one fragments.
	                // As multiple referenced geometry are more important.
	                if (!map)
	                frags.culledGeom.push(geomId);
	            }
	        }
	    }

	    function applyVisCB(m, idx) {
	        if (!m && frags.useThreeMesh) {
	            if (fragIdCb)
	            fragIdCb(idx);
	            return;
	        }

	        var culled = done || evalCulling(checkCull, frustum, frags, idx);

	        if (culled) {
	            if (m) {
	                m.visible = false;
	            } else {
	                THREE.warn("Unexpected null mesh");
	            }
	            vizflags[idx] = vizflags[idx] & ~globals.MESH_RENDERFLAG;

	            if (frags.pageOutGeometryEnabled()) {

	                // Record culled geometries for paging out.
	                // This fragment is culled, then move its geometry to culled geometry list.
	                var geomId = frags.geomids[idx];
	                var geometry = frags.geoms.getGeometry(geomId);

	                if (frags.pagingProxy) {
	                    frags.pagingProxy.onGeomCulled(geometry);
	                }

	            }

	            return;
	        }

	        var v = this.evalVisbility(drawMode, vizflags, idx);

	        if (m)
	        m.visible = !!v;

	        allHidden = allHidden && !v;
	    }

	    return function (drawModeIn, frustumIn, fragIdCbIn) {

	        //Used when parts of the same scene
	        //have to draw in separate passes (e.g. during isolate).
	        //Consider maintaining two render queues instead if the
	        //use cases get too complex, because this approach
	        //is not very scalable as currently done (it traverses
	        //the entire scene twice, plus the flag flipping for each item).

	        allHidden = true;
	        done = false;
	        frustum = frustumIn;
	        drawMode = drawModeIn;
	        fragIdCb = fragIdCbIn;

	        frags = this.frags;

	        //Check if the entire render batch is contained inside
	        //the frustum. This will save per-object checks.
	        var bbox = drawMode === globals.RENDER_HIDDEN ? this.boundingBoxHidden : this.boundingBox;
	        var containment = frustum.intersectsBox(bbox);
	        if (containment === globals.OUTSIDE)
	        done = true; //nothing to draw

	        if (frags.pixelCullingEnable()) {

	            // if this scene get culled by projected area pixel, 
	            // can bail out earlier. 
	            var area = this.renderImportance;
	            if (area == 0) {
	                area = frustum.projectedArea(bbox);
	            }
	            area *= frustum.areaConv;
	            if (area < frags.pixelCullingThreshold()) {
	                done = true;
	            }
	        }

	        vizflags = this.frags.vizflags;
	        checkCull = containment !== globals.CONTAINS;

	        // There is another version of forEach: forEachNoMesh which won't be used in this case.
	        // Also, it seems even in RenderBatch's implementation, forEachNoMesh logic never get called (on 3d or 2d).
	        this.forEach(applyVisCB.bind(this), null, fragIdCb);

	        return allHidden;
	    };
	}();

	module.exports = RenderBatchLess;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var FragmentList = __webpack_require__(105).FragmentList;
	var ConsolidationBuilder = __webpack_require__(78).ConsolidationBuilder;
	var Consolidation = __webpack_require__(78).Consolidation;
	var InstanceBufferBuilder = __webpack_require__(77);

	/**
	                                                                    * This file contains code to create a Consolidation (see Consolidation.js) from all fraqments of a FragmentList.
	                                                                    * Rendering the consolidation instead of the individual fragments can improve rendering performance
	                                                                    * for models containing a large number of small objects.
	                                                                    */

	var MATERIAL_VARIANT = __webpack_require__(80).MATERIAL_VARIANT;

	/**
	                                                                                  *  Creates a consolidated representation for a given list of fragment ids. Consolidation is only done for the
	                                                                                  *  first n elements of the fragIds array, where n is chosen in a way that we stop if a given memory cost limit is reached.
	                                                                                  *
	                                                                                  *  Consolidation is done here by merging fragment Geometries into larger vertex buffers. If multiple fragments share
	                                                                                  *  the same geometry, the geometry is replicated. Therefore, this step is only used for the smaller fragments
	                                                                                  *  with not too many instances.
	                                                                                  *
	                                                                                  *   @param {FragmentList}    fragList
	                                                                                  *   @param {MaterialManager} materials
	                                                                                  *   @param {Int32Array[]}    fragIds
	                                                                                  *   @param {number}          limitInBytes
	                                                                                  *
	                                                                                  *   @returns {Object} Result object containing...
	                                                                                  *                      result.consolidation: Instance of Consolidation
	                                                                                  *                      result.fragIdCount:   Defines a range within fragIds:
	                                                                                  *                                            Only fragIds[0], ... , fragIds[result.fragIdCount-1] were consolidated.
	                                                                                  */
	function createConsolidationMap(fragList, materials, fragIds, limitInBytes) {

	    // reused in loop below
	    var fragBox = new THREE.Box3();

	    var mc = new ConsolidationBuilder();
	    var i = 0;
	    for (; i < fragIds.length; i++) {

	        // stop if we reached our memory limit.
	        if (mc.costs >= limitInBytes) {
	            break;
	        }

	        // get fragId and world box
	        var fragId = fragIds[i];
	        fragList.getWorldBounds(fragId, fragBox);

	        // add mesh to consolidation
	        var geometry = fragList.getGeometry(fragId);
	        var material = fragList.getMaterial(fragId);
	        mc.addGeom(geometry, material, fragBox, fragId);
	    }

	    // create ConsolidationMap
	    return mc.createConsolidationMap(fragIds, i);
	};

	/**
	    * Combines a sequence of fragments with shared geometry and material into an instanced mesh.
	    * This instanced mesh is added to 'result'.
	    *
	    * For fragments that cannot be instanced, we add an individual mesh instead that shares
	    * original geometry and material. This happens if:
	    *
	    *  a) The is just a single instance (range length 1)
	    *  b) The instance has a matrix that cannot be decomposed into pos/scale/rotation.
	    *
	    *  @param {FragmentList}    fragList
	    *  @param {MaterialManager} materials  - needed to create new materials for instanced shapes
	    *  @param {Int32Array}      fragIds
	    *  @param {number}          rangeStart - defines a range within the fragIds array
	    *  @param {number}          rangeEnd
	    *  @param {Consolidation}   result     - collects the resulting mesh.
	    */
	var applyInstancingToRange = function () {

	    var _tempMatrix = null;
	    var _tempSkippedFragments = [];

	    return function (fragList, materials, fragIds, rangeStart, rangeEnd, result) {

	        // init temp matrix
	        if (!_tempMatrix) {_tempMatrix = new THREE.Matrix4();}

	        var firstFrag = fragIds[rangeStart];

	        // get geometry and material (must be the same for all frags in the range)
	        var geom = fragList.getGeometry(firstFrag);
	        var mat = fragList.getMaterial(firstFrag);

	        // just a single instance? => add it directly
	        var rangeLength = rangeEnd - rangeStart;
	        if (rangeLength == 1) {
	            result.addSingleFragment(fragList, firstFrag);
	            return;
	        }

	        // Special-case handling: Use temp array to collect fragIds that we had to skip
	        _tempSkippedFragments.length = 0;

	        // create instanced geometry from geom and all transforms
	        var builder = new InstanceBufferBuilder(geom, rangeLength);
	        for (var i = rangeStart; i < rangeEnd; i++) {

	            var fragId = fragIds[i];

	            // world matrix and dbId
	            fragList.getOriginalWorldMatrix(fragId, _tempMatrix);
	            var dbId = fragList.fragments.fragId2dbId[fragId];

	            // try to process as instanced mesh
	            var valid = builder.addInstance(_tempMatrix, dbId);

	            // If adding this instance failed, its matrix did not allow to
	            // be represented as pos/rotation/scale. In this case, add
	            // the mesh individually.
	            if (!valid) {
	                _tempSkippedFragments.push(fragId);
	            }
	        }

	        var instGeom = builder.finish();

	        // instGeom might be null if all instances had matrices that could not be decomposed.
	        // In this case, all frags have been skipped and will be added individually below
	        if (instGeom) {

	            // create instancing material
	            var instMat = materials.getMaterialVariant(mat, MATERIAL_VARIANT.INSTANCED, fragList.model);

	            // add instanced mesh
	            result.addContainerMesh(instGeom, instMat, fragIds, rangeStart, rangeLength);
	        }

	        // if we had to skip any fragment, add it separately. Note that this must be done after
	        // adding the container, so that fragId2MeshIndex finally refers to the individual geometry.
	        for (var i = 0; i < _tempSkippedFragments.length; i++) {
	            var fragId = _tempSkippedFragments[i];
	            result.addSingleFragment(fragList, fragId);
	        }
	    };
	}();

	/**
	      * Combines fragments with shared geometries into instanced meshes. Note that creating instanced meshes
	      * only makes sense for fragments that share geometry and material. All other fragments will also be
	      * added to the result, but the meshes will share original geometry and material.
	      *
	      * Requirement: fragIds must already be sorted in a way that meshes with identical geometry and material form
	      *              a contiguous range.
	      *
	      * @param {FragmentList}   fragList
	      * @param {MaterialManager} materials
	      * @param {Int32Array}     fragIds
	      * @param [number}         startIndex - Defines the range in fragIds that we process:
	      *                                      fragIds[startIndex], ..., fragIds[fragIds.length-1]
	      * @param {Consolidation} result      - collects all output meshes
	      */
	function applyInstancing(fragList, materials, fragIds, startIndex, result) {

	    if (startIndex >= fragIds.length) {
	        // range empty
	        // This may happen if we could consolidate all fragments per mesh merging already, so
	        // that instancing is not needed anymore.
	        return;
	    }

	    // track ranges of equal geometry and material
	    var rangeStart = startIndex;
	    var lastGeomId = -1;
	    var lastMatId = -1;

	    for (var i = startIndex; i < fragIds.length; i++) {
	        var fragId = fragIds[i];
	        var geomId = fragList.getGeometryId(fragId);
	        var matId = fragList.getMaterialId(fragId);

	        // check if a new range starts here
	        if (geomId != lastGeomId || matId != lastMatId) {

	            // a new range starts at index i
	            // => process previous range [rangeStart, ..., i-1]
	            if (i != startIndex) {
	                applyInstancingToRange(fragList, materials, fragIds, rangeStart, i, result);
	            }

	            // start new range
	            rangeStart = i;
	            lastGeomId = geomId;
	            lastMatId = matId;
	        }
	    }
	    // process final range
	    applyInstancingToRange(fragList, materials, fragIds, rangeStart, fragIds.length, result);
	};

	/**
	    * Creates an array that provides the number of instance for each geometry id.
	    *
	    * @param {FragmentList} fragList
	    * @returns {number[]}   geomInstanceCount
	    */
	function countGeometryInstances(fragList) {

	    var fragCount = fragList.getCount();

	    // count instances of each geometry
	    var geomInstanceCount = [];
	    for (var fragId = 0; fragId < fragCount; fragId++) {
	        var geomId = fragList.getGeometryId(fragId);
	        var numInstances = geomInstanceCount[geomId] | 0;
	        geomInstanceCount[geomId] = numInstances + 1;
	    }
	    return geomInstanceCount;
	};

	/**
	    * Returns an array that enumerates all fragIds in a way that...
	    *
	    *  1. They are ordered by increasing memory costs that it takes to consolidate them.
	    *  2. FragIds with equal geometry and material form a contiguous range.
	    *
	    *   @param {FragmentList} fragList
	    *   @param {number[]}     geomInstanceCount (see countGeometryInstances)
	    *   @returns {Int32Array} ordered list of fragment ids
	    */
	function sortByConsolidationCosts(fragList, geomInstanceCount) {

	    // define sort predicate
	    function fragCompare(fragId1, fragId2) {

	        // compute consolidation costs of both fragments
	        var geom1 = fragList.getGeometry(fragId1);
	        var geom2 = fragList.getGeometry(fragId2);
	        var instCount1 = geomInstanceCount[geom1.id];
	        var instCount2 = geomInstanceCount[geom2.id];
	        var memCost1 = instCount1 * geom1.byteSize;
	        var memCost2 = instCount2 * geom2.byteSize;

	        // 1. memCost
	        if (memCost1 != memCost2) {
	            return memCost1 - memCost2;
	        }

	        // 2. geom id
	        if (geom1.id != geom2.id) {
	            return geom1.id - geom2.id;
	        }

	        // 3. material id
	        var mat1 = fragList.getMaterialId(fragId1);
	        var mat2 = fragList.getMaterialId(fragId2);
	        return mat1 - mat2;
	    };

	    // create fragId array [0,1,2,...]
	    var fragCount = fragList.getCount();
	    var fragIds = new Int32Array(fragCount);
	    for (var i = 0; i < fragCount; i++) {
	        fragIds[i] = i;
	    }

	    // sort by costs
	    if (!fragIds.sort) {
	        // Unfortunately, there is no official polyfill for TypedArray.sort.
	        // Therefore, we just use Array.sort. The extra copy makes it inappropriate
	        // for a general polyfill, but it's sufficient for this case.
	        var thanksIE11ForWastingOurTime = new Array(fragCount);

	        // Just copy by hand to avoid even more compatibility issues
	        for (var i = 0; i < fragCount; i++) {
	            thanksIE11ForWastingOurTime[i] = fragIds[i];
	        }

	        thanksIE11ForWastingOurTime.sort(fragCompare);

	        for (var i = 0; i < fragIds.length; i++) {
	            fragIds[i] = thanksIE11ForWastingOurTime[i];
	        }
	    } else {
	        fragIds.sort(fragCompare);
	    }

	    return fragIds;
	};

	/**
	    * Determines for each geometry whether to store it on GPU or only CPU-side. The heuristic is the same that is
	    * always used by GeometryList. However, when using consolidation, we first spend GPU Ram for the consolidated
	    * meshes (with are used more for rendering). The original fragment geometry is only stored on GPU
	    * if enough budget is left.
	    *
	    *   @param {FragmentList}         fragList
	    *   @param {Consolidation}        consolidation
	    *   @param {number[]}             geomInstanceCount - see countGeometryInstances().
	    *   @param {FireFlyWebGLRenderer} glRenderer        - needed to free GPU memory if needed
	    */
	function chooseMemoryTypes(fragList, consolidation, geomInstanceCount, glRenderer) {

	    var geomList = fragList.geoms;

	    // some geometries are shared by consolidation and original fragments. We track their ids to
	    // make sure that we don't process them twice.
	    var geomShared = [];

	    // track required GPU memory and number of meshes on GPU, because both are restricted (see geomList.chooseMemoryType)
	    var gpuNumMeshes = 0;
	    var gpuMeshMemory = 0;
	    for (var i = 0; i < consolidation.meshes.length; i++) {

	        var mesh = consolidation.meshes[i];
	        var geom = mesh.geometry;

	        // compute byteSize if not available.
	        if (!geom.byteSize) {
	            geom.byteSize = (geom.vb.byteLength || 0) + (geom.ib.byteLength || 0);
	        }

	        // If the mesh has a well-defined fragId, this geometry is shared with a fragment that could
	        // not be consolidated with others.
	        var isSharedFragmentGeometry = Number.isInteger(mesh.fragId);

	        // choose whether to store on GPU or CPU
	        geomList.chooseMemoryType(geom, geom.numInstances, gpuNumMeshes, gpuMeshMemory);

	        // track overall GPU workload
	        if (!geom.streamingDraw) {
	            gpuMeshMemory += geom.byteSize;
	            gpuNumMeshes += 1;

	            // consolidated meshes are purely used for rendering. So, we can discard
	            // the CPU-side copy as soon as the data are on GPU. Note that we must not
	            // do this for shared original fragment geometry - which is exposed to the client.
	            if (!isSharedFragmentGeometry) {
	                geom.discardAfterUpload = true;
	            }
	        }

	        if (isSharedFragmentGeometry) {
	            // this mesh is sharing original fragment geometry.
	            geomShared[geom.id] = true;
	        }
	    }

	    // Finally, revise the memory type for the original GeometryList again. This time, we consider
	    // the workload that we already spent on for the consolidation and only allow geometry to be stored on GPU if
	    // our budget is not consumed yet.
	    for (var i = 1; i < geomList.geoms.length; i++) {// skip index 0, because it is reserved for "invalid geom id"

	        // get next geom
	        var geom = geomList.geoms[i];
	        if (!geom) {
	            continue;
	        }

	        // if this geometry is shared by the consolidation, the memory type has already been set in the loop above.
	        if (geomShared[i]) {
	            continue;
	        }

	        // determine nen tyoe for this geom
	        var numInstances = geomInstanceCount[i];
	        geomList.chooseMemoryType(geom, numInstances, gpuNumMeshes, gpuMeshMemory);

	        if (geom.streamingDraw) {
	            // A geometry might already have been GPU-uploaded and displayed during progressive loading.
	            // If we now decided to keep this geometry CPU side, make sure that we don't keep any of these on GPU anymore.
	            glRenderer.deallocateGeometry(geom);
	        }

	        // track overall GPU workload
	        if (!geom.streamingDraw) {
	            gpuMeshMemory += geom.byteSize;
	            gpuNumMeshes += 1;
	        }
	    }
	};

	/**
	    *  Creates a consolidated representation of a fragments. For each fragment f, there will be a mesh in the result that
	    *  contains it - or shares its geometry if was not mergeable with any other fragment.
	    *
	    *   @param {FragmentList}    fraglist
	    *   @param {MaterialManager} materials           - needed to create new material variants for consolidated/instanced meshes
	    *   @param {number}          [byteLimit = 100MB] - Restricts the amount of memory that we spend in mesh consolidation.
	    *                                                  Note that without this limit, consolidation may consume several times more memory
	    *                                                  than the original model itself, because shared geometries must be replicated.
	    *   @param {ConsolidationMap} [consMap]          - Optional: If available, the intermediate results can be reused from a previous
	    *                                                  consolidation to accelerate preprocessing. Note that a ConsolidationMap
	    *                                                  can only be reused if the FragmentList is exactly the same.
	    *   @param {FireFlyWebGLRenderer} glRenderer
	    *
	    *   @returns {Consolidation}
	    */
	function consolidateFragmentList(fragList, materials, byteLimit, glRenderer, consMap) {

	    // check if we can use hardware instancing
	    var enableInstancing = glRenderer.supportsInstancedArrays();

	    // by default, restrict extra memory consumption to 100 MB
	    var byteLimit = byteLimit || 100 << 20;

	    // check number of instances for each geometry id
	    var geomInstanceCount = countGeometryInstances(fragList);

	    // If not available yet, create ConsolidationMap that describes the mapping from src fragments
	    // into consolidated meshes.
	    if (!consMap) {
	        // sort by costs
	        var sortedFragIds = sortByConsolidationCosts(fragList, geomInstanceCount);

	        // create consolidation map
	        consMap = createConsolidationMap(fragList, materials, sortedFragIds, byteLimit);
	    }

	    // Create Consolidation
	    var result = consMap.buildConsolidation(fragList, materials, fragList.model); // {Consolidation}

	    // the first n=numConsolidated fragments in fragIds are consolidated already.
	    // The remaining fragIds are now processed using instancing.
	    var fragIds = consMap.fragOrder;
	    var numConsolidated = consMap.numConsolidated;

	    if (enableInstancing) {
	        // Optimize the rest with instancing (takes less extra memory)
	        applyInstancing(fragList, materials, fragIds, numConsolidated, result);
	    } else {
	        // We cannot use instancing => Add all remaining fragments individually
	        for (var i = numConsolidated; i < fragIds.length; i++) {
	            var fragId = fragIds[i];
	            result.addSingleFragment(fragList, fragId);
	        }
	    }

	    // determine which geometries we upload to GPU. All remaining ones are stored CPU-side
	    // and rendered using streaming-draw (slower, but better than GPU memory overload)
	    chooseMemoryTypes(fragList, result, geomInstanceCount, glRenderer);

	    // Set modelId for all consolidated meshes (needed to distinguish multiple models via ID-buffer)
	    var modelId = fragList.model.getModelId();
	    for (var i = 0; i < result.meshes.length; i++) {
	        var mesh = result.meshes[i];
	        mesh.modelId = modelId;
	    }

	    return result;
	};

	module.exports = consolidateFragmentList;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"; //var THREE = require('THREE');
	var globals = __webpack_require__(75);

	/**
	                                         * Represents the full list of all geometry instances associated with
	                                         * a particular model. The order in the list is 1:1 with fragment list
	                                         * in the source LMV/SVF package file.
	                                         * @param {Object} fragments - Fragment data parsed from an SVF file.
	                                         * @param {GeometryList} geoms - Geometry data parsed from an SVF file.
	                                         * @param {Object} [pagingProxy] - Object used to manage memory and paging
	                                         * @constructor
	                                         */
	function FragmentList(model, pagingProxy) {

	    this.model = model;
	    this.fragments = model.getData().fragments;
	    this.geoms = model.getGeometryList();

	    this.pagingProxy = pagingProxy;

	    //3D SVF files are of known initial size and known world bounds.
	    //2D F2D files start out with nothing and get filled up as we load.
	    this.isFixedSize = this.fragments.length > 0;
	    if (this.isFixedSize) {
	        this.boxes = this.fragments.boxes; // Float32Array, stores Boxes as 6 floats per fragment (after applying mesh matrix)
	        this.transforms = this.fragments.transforms; // Float32Array, stores transforms as 12 floats per fragment (Matrix4 with omitted last row)
	        this.useThreeMesh = !globals.memoryOptimizedLoading;
	    } else {
	        this.boxes = null;
	        this.transforms = null;
	        this.useThreeMesh = !pagingProxy || !pagingProxy.onDemandLoadingEnabled(); // Don't use THREE mesh when on demand loading
	    }

	    // initial length for arrays of meshes/geometries/flags
	    var initialSize = this.fragments.length;
	    if (initialSize <= 0)
	    initialSize = 1;

	    this.vizflags = new Uint16Array(initialSize); // visibility/highlight mode flags

	    //This will be the list of all mesh instances in the model.
	    //Corresponds to all fragments in the case of SVF.
	    if (this.useThreeMesh)
	    this.vizmeshes = new Array(initialSize);
	    this.geomids = new Int32Array(initialSize); // geomid per fragId. geomids are resolved by this.geoms.GetGeometry(geomid) to obtain BufferGeometry.
	    this.materialids = new Int32Array(initialSize); // material per fragId. matIds  are resolved by this.materialmap[matId] 
	    this.materialmap = {}; // map from material ids to THREE.ShaderMaterial instances

	    // theming (coloring based on id)
	    this.db2ThemingColor = []; // empty if no theming is applied. A theming color db2ThemingColor[dbId] is stored as THREE.Vector4 with values in [0,1].
	    this.originalColors = []; // if vizmesh[i] has modified vertex-colors  due to theming,  originalColors[i]  stores a copy of the original colors.
	    this.themingOrGhostingNeedsUpdate = []; // indicates if vertex-colors of vizmesh[i] needs to be updated based on recent theming or ghosting changes.
	    this.dbIdIsHidden = []; // ids that we hide by setting alpha to 0

	    // ghosting for 2d objects: A ghosted object is reduced in transparency and blended with the pageColor. This
	    this.dbIdIsGhosted = [];

	    // used for on-demand loading and paging
	    // TODO Paging: refactor below three variables to the proxy object of 2d loader.
	    this.reachLimit = false; // Controlled from outside when maximum number of geometries 
	    // in memory is reached (see RenderModel.pageOutIfNeeded). If true, load-requests via requestGeometryCallback are blocked.
	    this.traversedGeom = []; // Array of geometryIds collected in RenderBatch.forEach if globals.pageOutGeometryEnabled
	    // Used in RenderModel to page-out geometry that has been rendered already.
	    this.culledGeom = []; // Array of geometryIds that have been culled in the current frame and are not paged out yet. 
	    // Filled by RenderBatch.applyVisibility. Used by RenderModel for paging decisions 
	    // (see RenderModel.pageOutIfNeeded)

	    this.animxforms = null; // If animation is used, this is a Float32Array storing 10 floats per fragment to describe scale (3), rotation (4), and translation (3).
	    // See this.updateAnimTransform.

	    for (var i = 0; i < initialSize; i++) {
	        this.vizflags[i] = 1; //MESH_VISIBLE initially
	        this.geomids[i] = -1; //0 is a valid geom index, so use -1 as starting value
	    }

	    this.allVisible = true; // see this.areAllVisible(..). Indicates if MESH_VISIBLE flag is set for all meshes (i.e., not considering culling)
	    this.allVisibleDirty = false; // if false, this.allVisible is outdated and must be recomputed in this.areAllVisible.
	    this.nextAvailableFragID = initialSize;
	}

	// [HB:] This method is only used in RenderModel.setFragment(), which seems to be not called at all. Can we remove this?
	//       (including the nextAvailableFragID member and RenderModel.setFragment).
	FragmentList.prototype.getNextAvailableFragmentId = function () {
	    return this.nextAvailableFragID++;
	};

	// [HB:] When does this method ever return true? vizflags is resized in SetMesh, which only used in RenderModel.activateFragment and 
	//       RenderModel.setFragment (never called). RenderModel.activateFragment(..) is only used by loaders when new fragments have been loaded.
	//       However, for SvfLoader, fragments.length is always the full fragments count and for F2D, new stuff is first added to fragments, then
	//       to VisFlags. 
	//       Maybe this should actually be a "<" and is only relevant for F2D case?
	FragmentList.prototype.fragmentsHaveBeenAdded = function () {
	    return this.vizflags.length > this.fragments.length;
	};

	// Returns undefined if fragId has no material 
	FragmentList.prototype.getSvfMaterialId = function (fragId) {
	    var mat = this.getMaterial(fragId);
	    return mat ? mat.svfMatId : undefined;
	};

	// Return true of false, whether on demand loading enabled.
	// This mainly controls how the geometries referenced by the fagments
	// are going to load. 
	//
	// If false, then geometry pack files will load in sequence all at once.
	// if true, then only those geometry pack files that are request to render,
	//          can they start to load *on demand*
	FragmentList.prototype.onDemandLoadingEnabled = function () {

	    return this.pagingProxy && this.pagingProxy.onDemandLoadingEnabled();
	};
	FragmentList.prototype.pageOutGeometryEnabled = function () {
	    return this.pagingProxy && this.pagingProxy.pageOutGeometryEnabled();
	};
	FragmentList.prototype.pixelCullingEnable = function () {
	    return this.pagingProxy && this.pagingProxy.pixelCullingEnable();
	};
	FragmentList.prototype.pixelCullingThreshold = function () {
	    return this.pagingProxy ? this.pagingProxy.pixelCullingThreshold() : 0;
	};

	// Requests the geometry of a fragment for loading, unless it is already in memory or the request limit is reached.
	// If already in memory, it just returns the geometry directly.
	FragmentList.prototype.requireGeometry = function (fragId) {
	    var geom = null;
	    var geomId = this.geomids[fragId];
	    if (geomId >= 0) {
	        // A valid geometry id, then get corresponding geometry
	        geom = this.geoms.getGeometry(geomId);
	    }

	    if (geom == null) {

	        // Request to load this geometry.
	        var packId = this.fragments.packIds ? this.fragments.packIds[fragId] : fragId;

	        if (this.pagingProxy) {
	            this.pagingProxy.loadPackFile(packId);
	        }
	    }

	    return geom;
	};

	/**
	    * Create a promise to download geometry asynchronously
	    * 
	    * This method can be called multiple times and will return a different promise
	    * each time it is called. When the promise fulfills, the argument to the fulfillment
	    * function is an object with model and fragId properties that identify the geometry.
	    * 
	    * Promises returned by this function can be canceled using
	    * FragmentList.cancelPromisedGeometry(promise). A canceled promise is always rejected.
	    * The canceled property of the argument to the rejection function is true when a
	    * promise is canceled.
	    * @param {number} fragId - Fragment whose geometry is to be downloaded
	    * @returns {Promise} - The created promise.
	    */
	FragmentList.prototype.promiseGeometry = function (fragId) {

	    function cancelChain(promise, value) {
	        var then;
	        then = promise.then(function () {
	            if (then) {
	                delete then.lmv_loader_promise;
	                // If this was canceled, then just toss it up the chain
	                if (then.lmv_geom_canceled) {
	                    return Promise.reject({ canceled: true });
	                }
	            }
	            return value;
	        }, function (error) {
	            if (then) {
	                delete then.lmv_loader_promise;
	                // If this was canceled, then just toss it up the chain
	                if (then.lmv_geom_canceled) {
	                    return Promise.reject({ canceled: true });
	                }
	            }
	            // Pass the rejection up the chain
	            return Promise.reject(error);
	        });
	        then.lmv_loader_promise = promise;
	        return then;
	    }

	    var geom = this.getGeometry(fragId);
	    if (geom)
	    return cancelChain(Promise.resolve(), { model: this.model, fragId: fragId });

	    // Request to load this geometry.
	    var _this = this;
	    // See if this packId is already promised
	    var packId = this.fragments.packIds ? this.fragments.packIds[fragId] : fragId;

	    // Reject the promise, if not supported, but allow the rejection to be canceled
	    if (!this.pagingProxy || !this.pagingProxy.promisePackFile)
	    return cancelChain(Promise.reject({ reason: "Not supported" }));

	    // Not promised, so load it
	    var promise = this.pagingProxy.promisePackFile(packId);
	    // Initialize the count of dependant promises
	    if (!promise.hasOwnProperty("lmv_promise_count"))
	    promise.lmv_promise_count = 0;
	    ++promise.lmv_promise_count;

	    // Do a page out just in case we need it to satisfy the promise.
	    this.pagingProxy.pageOut(false, false, this.geoms);

	    return cancelChain(promise, { model: this.model, fragId: fragId });
	};

	/**
	    * Cancel a promise returned by promiseGeometry
	    * 
	    * Canceled promised always reject and the canceled property of the argument
	    * to the rejection function is set to true.
	    * @param {Promise} promise - Promise to be canceled
	    * @returns {boolean} - True if the promise is canceled. False if it isn't canceled.
	    */
	FragmentList.prototype.cancelPromisedGeometry = function (then) {
	    if (!then)
	    return false;
	    var promise = then.lmv_loader_promise;
	    if (!promise)
	    return false; // Finished, or not create by promiseGeometry()
	    if (then.lmv_geom_canceled)
	    return true; // Already canceled
	    then.lmv_geom_canceled = true;
	    // If this is the last cancel, then call the loader
	    if (promise.hasOwnProperty("lmv_promise_count") && --promise.lmv_promise_count <= 0) {
	        // Cancel the promise in the loader. If the pagingProxy supports
	        // promisePackFile, then it must also support cancelPromisedPackFile
	        if (this.pagingProxy && this.pagingProxy.promisePackFile)
	        this.pagingProxy.cancelPromisedPackFile(promise);
	    }
	    return true;
	};


	/**
	    * Set mesh for a fragment, replacing any temporary previous one.
	    * @param {number} fragId - Fragment ID
	    * @param {Object} meshinfo - Object as defined in Viewer3DImpl.setupMesh(..). Contains:
	    *      geometry: instanceof BufferGeometry
	    *      matrix:   instanceof THREE.Matrix4
	    *      isLine:   bool to mark line geometry
	    *      isPoint:   bool to mark point geometry
	    *      is2D:     bool to indicate 2D geometry (e.g., set by F2DLoader) 
	    * @param {bool} updateFragmentData - If true, this.bbox and this.transforms is also updated for this fragment.
	    *      Only allowed if this.isFixedSize==true. (otherwise, this.boxes and this.transforms is null)
	    */
	FragmentList.prototype.setMesh = function (fragId, meshInfo, updateFragmentData) {

	    //Remove any temporary geometry we used for the fragment
	    //while it was loading
	    if (this.vizmeshes) {
	        var oldGeom = this.vizmeshes[fragId];
	        if (oldGeom && oldGeom.parent) {
	            oldGeom.parent.remove(oldGeom);
	        }
	    }

	    //The various data arrays need to be re-sized if the fragment is new
	    //so we have to do it manually in case this happens. 
	    if (this.vizflags.length <= fragId) {

	        // Gradually should only used if isFixedSize is false (as used for F2D geometry)
	        if (this.isFixedSize) {
	            THREE.warn("Attempting to resize a fragments list that was initialized with fixed data. This will have a performance impact.");
	            this.isFixedSize = false;
	        }

	        // determine new length of all per-fragmentId arrays
	        var nlen = Math.ceil(1.5 * this.vizflags.length);
	        if (this.useThreeMesh && nlen < this.vizmeshes.length)
	        nlen = this.vizmeshes.length;

	        // re-allocate vizflags
	        var nflags = new Uint16Array(nlen);
	        nflags.set(this.vizflags);
	        this.vizflags = nflags;

	        // re-allocate other per-fragmentId arrays...

	        if (this.transforms) {
	            var ntransforms = new Float32Array(nlen * 12);
	            ntransforms.set(this.transforms);
	            this.transforms = ntransforms;
	        }

	        if (this.boxes) {
	            var nboxes = new Float32Array(nlen * 6);
	            nboxes.set(this.boxes);
	            this.boxes = nboxes;
	        }

	        if (this.geomids) {
	            var nids = new Int32Array(nlen);
	            nids.set(this.geomids);
	            this.geomids = nids;

	        }

	        if (this.materialids) {
	            var nmids = new Int32Array(nlen);
	            nmids.set(this.materialids);
	            this.materialids = nmids;
	        }
	    }

	    //Remember the mesh in the frag->viz mesh array
	    if (this.useThreeMesh) {
	        var mesh = new THREE.Mesh(meshInfo.geometry, meshInfo.material);

	        // Copy matrix to mesh.matrix and mesh.matrixWorld
	        // [HB:] Why copying twice?
	        if (meshInfo.matrix) {
	            if (mesh.matrix) {
	                mesh.matrix.copy(meshInfo.matrix);
	            }
	            mesh.matrixWorld.copy(meshInfo.matrix);
	        }

	        mesh.is2d = meshInfo.is2d;
	        mesh.isLine = meshInfo.isLine;
	        mesh.isWideLine = meshInfo.isWideLine;
	        mesh.isPoint = meshInfo.isPoint;

	        // If we would leave that true, THREE.js would call UpdateMatrix() for this mesh and 
	        // overwrite the matrix with another one computed by position, scale, and quaternion.
	        mesh.matrixAutoUpdate = false;

	        //Add the mesh to the render group for this fragment
	        //Note each render group renders potentially many fragments.
	        mesh.frustumCulled = false; //we do our own culling in RenderQueue, the renderer doesn't need to

	        // keep fragId and dbId
	        mesh.fragId = fragId;
	        mesh.dbId = this.fragments.fragId2dbId[fragId] | 0;
	        mesh.modelId = this.model.getModelId();

	        // cache the mesh in this.vizmeshes
	        this.vizmeshes[fragId] = mesh;

	    } else {
	        // When not using THREE.Mesh, store ids of BufferGeometry and material instead
	        this.geomids[fragId] = meshInfo.geometry.svfid;
	        this.materialids[fragId] = meshInfo.material.id;

	        // add material to the map (if not known already)
	        if (!this.materialmap[meshInfo.material.id])
	        this.materialmap[meshInfo.material.id] = meshInfo.material;
	    }

	    // Don't override the visibility flag which could be set before geometry is ready.
	    // This can improve the performance when streaming geometry and rendering happen together.
	    var typeFlags = 0;
	    if (meshInfo.isLine) typeFlags = globals.MESH_ISLINE;else
	    if (meshInfo.isWideLine) typeFlags = globals.MESH_ISWIDELINE;else
	    if (meshInfo.isPoint) typeFlags = globals.MESH_ISPOINT;
	    if (!this.isFixedSize) {
	        this.vizflags[fragId] |= globals.MESH_VISIBLE | typeFlags;
	    } else
	    {
	        this.vizflags[fragId] |= typeFlags;
	    }

	    if (updateFragmentData) {
	        // Update transform and bb
	        var transform = meshInfo.matrix;

	        // Copy the transform to the fraglist array
	        // We store in column-major order like the elements of the Matrix4, but skip row 3.
	        var i = fragId * 12;
	        var cur = transform.elements;
	        var orig = this.transforms;
	        orig[i] = cur[0];
	        orig[i + 1] = cur[1];
	        orig[i + 2] = cur[2];
	        orig[i + 3] = cur[4];
	        orig[i + 4] = cur[5];
	        orig[i + 5] = cur[6];
	        orig[i + 6] = cur[8];
	        orig[i + 7] = cur[9];
	        orig[i + 8] = cur[10];
	        orig[i + 9] = cur[12];
	        orig[i + 10] = cur[13];
	        orig[i + 11] = cur[14];


	        // Transform the local BB to world
	        var b = new THREE.Box3();
	        if (meshInfo.geometry && meshInfo.geometry.boundingBox) {
	            b.copy(meshInfo.geometry.boundingBox);
	        } else {
	            this.geoms.getModelBox(this.geomids[fragId], b);
	        }
	        b.applyMatrix4(transform);

	        // Write bounding box to this.boxes
	        var boffset = fragId * 6;
	        var bb = this.boxes;
	        bb[boffset] = b.min.x;
	        bb[boffset + 1] = b.min.y;
	        bb[boffset + 2] = b.min.z;
	        bb[boffset + 3] = b.max.x;
	        bb[boffset + 4] = b.max.y;
	        bb[boffset + 5] = b.max.z;
	    }
	};


	FragmentList.prototype.isFlagSet = function (fragId, flag) {
	    return !!(this.vizflags[fragId] & flag);
	};

	/**
	    * Set/unset flag of a fragment.
	    * Note: Changing MESH_VISIBLE requires to update allVisibleDirty as well => Use setVisibility() for this case.
	    * @param {number} fragId - Fragment ID.
	    * @param {number} flag - Must be one of the flags defined at the beginning of this file, e.g., MESH_HIGHLIGHTED.
	    * @returns {bool} False if nothing changed.
	    */
	FragmentList.prototype.setFlagFragment = function (fragId, flag, value) {

	    // If flag is already defined and has this value, just return false.
	    var old = this.vizflags[fragId];
	    if (!!(old & flag) == value) // "!!" casts to boolean
	        return false;

	    // set or unset flag
	    if (value)
	    this.vizflags[fragId] = old | flag;else

	    this.vizflags[fragId] = old & ~flag;

	    return true;
	};

	/**
	    * Set/unset flag for all fragments, e.g. setFlagGlobal(MESH_VISIBLE, true);
	    * Note: Changing MESH_VISIBLE requires to update allVisibleDirty as well => use setAllVisibility() for this case.
	    * @param {number} flag - Must be one of the flags defined at the beginning of this file, e.g., MESH_HIGHLIGHTED.
	    * @param {bool} value - Value to be set to the flag
	    */
	FragmentList.prototype.setFlagGlobal = function (flag, value) {
	    var vizflags = this.vizflags;
	    var i = 0,iEnd = vizflags.length;
	    if (value) {
	        for (; i < iEnd; i++) {
	            vizflags[i] = vizflags[i] | flag;
	        }
	    } else {
	        var notflag = ~flag;
	        for (; i < iEnd; i++) {
	            vizflags[i] = vizflags[i] & notflag;
	        }
	    }
	};

	/**
	    * Marks all lines as visible or hidden.
	    * Works like this.setFlagGlobal(MESH_HIDE, hide), but only affects fragments with MESH_ISLINE flag.
	    * @param {bool} hide - Desired visibility status.
	    */
	FragmentList.prototype.hideLines = function (hide) {
	    this.hideFragments(globals.MESH_ISLINE, hide);
	    this.hideFragments(globals.MESH_ISWIDELINE, hide);
	};

	/**
	    * Marks all points as visible or hidden.
	    * Works like this.setFlagGlobal(MESH_HIDE, hide), but only affects fragments with MESH_ISPOINT flag.
	    * @param {bool} hide - Desired visibility status.
	    */
	FragmentList.prototype.hidePoints = function (hide) {
	    this.hideFragments(globals.MESH_ISPOINT, hide);
	};

	/**
	    * Marks all fragments with the given flag as visible or hidden.
	    * Works like this.setFlagGlobal(MESH_HIDE, hide), but only affects fragments with given flag.
	    * @param {number} typeFlag - visibility flag of fragments to change
	    * @param {bool} hide - Desired visibility status.
	    */
	FragmentList.prototype.hideFragments = function (typeFlag, hide) {

	    var flag = globals.MESH_HIDE;

	    var vizflags = this.vizflags;
	    var i = 0,iEnd = vizflags.length;
	    if (hide) {
	        for (; i < iEnd; i++) {
	            if (vizflags[i] & typeFlag)
	            vizflags[i] = vizflags[i] | flag;
	        }
	    } else {
	        var notflag = ~flag;
	        for (; i < iEnd; i++) {
	            if (vizflags[i] & typeFlag)
	            vizflags[i] = vizflags[i] & notflag;
	        }
	    }

	    // Mark allVisible as outdated        
	    this.allVisibleDirty = true;
	};

	/**
	    * Checks visibility of a fragment.
	    * @param {number} frag - Fragment ID.
	    * @returns {bool} True if the fragment is visible and not highlighted nor hidden.
	    */
	FragmentList.prototype.isFragVisible = function (frag) {
	    return (this.vizflags[frag] & 7 /*MESH_VISIBLE|MESH_HIGHLIGHTED|MESH_HIDE*/) == 1;
	};

	FragmentList.prototype.isFragOff = function (frag) {
	    return !!(this.vizflags[frag] & globals.MESH_HIDE);
	};

	FragmentList.prototype.isLine = function (frag) {
	    return !!(this.vizflags[frag] & globals.MESH_ISLINE /*MESH_VISIBLE|MESH_HIGHLIGHTED*/);
	};

	FragmentList.prototype.isWideLine = function (frag) {
	    return this.isFlagSet(frag, globals.MESH_ISWIDELINE);
	};

	FragmentList.prototype.isPoint = function (frag) {
	    return this.isFlagSet(frag, globals.MESH_ISPOINT);
	};


	// [HB:] This method does not consider the MESH_HIDE flag, but this.setFragOff seems to expect this, because it sets allVisibleDirty.
	//       Is this a bug?
	FragmentList.prototype.areAllVisible = function () {

	    // update allVisible if any flags have changed
	    if (this.allVisibleDirty) {

	        // allVisible <=> MESH_VISIBLE is set for all fragments
	        var vizflags = this.vizflags;
	        var allVisible = true;
	        for (var i = 0, iEnd = vizflags.length; i < iEnd; i++) {
	            if ((vizflags[i] & 1 /*MESH_VISIBLE*/) === 0) {
	                allVisible = false;
	                break;
	            }
	        }

	        this.allVisible = allVisible;
	        this.allVisibleDirty = false;
	    }

	    return this.allVisible;
	};

	// Swaps r/b channels in a THREE.Color object.
	function swapRBChannels(color) {
	    var tmp = color.r;
	    color.r = color.b;
	    color.b = tmp;
	    return color;
	}

	/** Linear interpolation between original color and theming color based on theming intensity.
	   * @param origColor    {number}        original uint32 color from vertex-buffer. alpha is vertex-opacity
	   * @param themingColor {THREE.Vector4} theming color as vec4f. Channels are (r,g,b,a) where alpha is theming intensity.
	   * @returns finalColor {number}        final color as uint32
	   */
	var applyThemingColorAndVisibility = function () {
	    var tmp1 = null;
	    var tmp2 = null;
	    var rgbMask = parseInt("00FFFFFF", 16);
	    var alphaMask = parseInt("FF000000", 16);
	    return function (origColor, themingColor) {
	        if (!tmp1) {
	            tmp1 = new THREE.Color();
	            tmp2 = new THREE.Color();
	        }

	        tmp1.set(origColor & rgbMask);

	        // THREE.Color denotes uint color in BGRA order (i.e., Blue in the lowest byte).
	        // In the vertex-buffer, we use RGBA - so we have to swap when converting between these two.
	        swapRBChannels(tmp1);

	        if (themingColor) {
	            // set tmp2 to theming color
	            tmp2.setRGB(themingColor.x, themingColor.y, themingColor.z);

	            // blend original color with theming color
	            tmp1.lerp(tmp2, themingColor.w);
	        }

	        // convert back to color-buffer uint32 and preserve original alpha bits
	        return swapRBChannels(tmp1).getHex() | origColor & alphaMask;
	    };
	}();

	// Updates the per-vertex array of a mesh to reflect latest theming and ghosting state.
	// Note that this can only work on F2D meshes with known attributes and interleaved vertex buffer.
	function updateVertexBufferForThemingAndGhosting(fragList, fragId) {

	    // get backup of original per-vertex colors (undef if color array is currently not modified)
	    var origColors = fragList.originalColors[fragId];

	    // check if anything changed
	    if (!fragList.themingOrGhostingNeedsUpdate[fragId]) {
	        return;
	    }

	    // get values to access colors and ids
	    var geom = fragList.getGeometry(fragId);
	    var attr = geom ? geom.attributes : null;
	    var atColors = attr ? attr.color4b : null;
	    var atIds = attr ? attr.dbId4b : null;
	    var atLayerVp = attr ? attr.layerVp4b : null;
	    var atFlags = attr ? attr.flags4b : null;

	    if (!atColors || !atIds || !geom.vb || !atLayerVp || !atFlags) {
	        // we cannot work on this mesh.
	        return;
	    }

	    // get uint32 view on interleaved vertex buffer
	    var vertexData = new Uint32Array(geom.vb.buffer);
	    var stride = geom.vbstride; // elems per vertex
	    var vertexCount = vertexData.length / geom.vbstride;

	    // Track if any colors/layers are affected by theming/ghosting. If not, we can drop the color/layer array backup at the end.
	    var themingApplied = false;

	    // Constants used for ghosting of 2D objects
	    var PaperLayer = 0; // we use the paper layer to determine the paper sheet background (see F2d.js initSheet). This shape must be excluded from ghosting.

	    // update vertex-color for each vertex
	    var colOffset = atColors.itemOffset;
	    var idOffset = atIds.itemOffset;
	    var layerOffset = atLayerVp.itemOffset;
	    var flagsOffset = atFlags.itemOffset;
	    for (var i = 0; i < vertexCount; i++) {

	        // get vertex-id and original color
	        var dbId = vertexData[i * stride + idOffset];
	        var color = origColors ? origColors[i] : vertexData[i * stride + colOffset];
	        var layerVp = vertexData[i * stride + layerOffset];

	        // sign extend the upper byte to get back negative numbers (since per-vertex ids are clamped from 32 bit to 24 bit)
	        dbId = dbId << 8 >> 8;

	        var isPaper = dbId == -1 && (layerVp & parseInt("FFFF", 16)) == PaperLayer;

	        // is this id affected by theming?
	        var themeColor = fragList.db2ThemingColor[dbId];
	        var isHidden = fragList.dbIdIsHidden[dbId];
	        if (!themeColor && !isHidden) {
	            // no theming for this vertex
	            if (origColors) {
	                // restore original color
	                color = origColors[i];
	            } // else: if there is no backup array, the vertex-color is already the original.
	        } else {
	            // this vertex-color will be affected by theming.
	            // make sure that we have backup.
	            if (!origColors) {
	                // backup original colors before we modify them.
	                origColors = new Uint32Array(vertexCount);
	                for (var j = 0; j < vertexCount; j++) {
	                    origColors[j] = vertexData[j * stride + colOffset];
	                }
	                fragList.originalColors[fragId] = origColors;
	            }

	            // replace vertex-color based on theming and visibility
	            if (isHidden) {
	                color = 0;
	            } else {
	                color = applyThemingColorAndVisibility(color, themeColor);
	            }

	            // signal that the color backup array is still needed
	            themingApplied = true;
	        }

	        // color -> vertexBuffer
	        vertexData[i * stride + colOffset] = color;

	        // is this id affected by theming?
	        var isGhosted = fragList.dbIdIsGhosted[dbId] && !isPaper;
	        var flags = vertexData[i * stride + flagsOffset];
	        if (isGhosted)
	        flags |= 0xff << 24;else

	        flags &= ~(0xff << 24);

	        // layer -> vertexBuffer
	        vertexData[i * stride + flagsOffset] = flags;
	    }

	    // if theming is off for all vertices, drop the backup array
	    if (!themingApplied) {
	        fragList.originalColors[fragId] = null;
	    }

	    // trigger refresh of GPU-side vertex buffer
	    geom.vbNeedsUpdate = true;

	    // don't touch this mesh again until new theming changes are done
	    fragList.themingOrGhostingNeedsUpdate[fragId] = false;
	}

	/**
	   * Provides an actual mesh for specific fragment.
	   * NOTE: For (this.useThreeMesh==false), the returned value is volatile and will be overwritten on next call!
	   * @param {number} fragId - Fragment ID.
	   * @returns {THREE.Mesh} Mesh for the given fragment.
	   */
	FragmentList.prototype.getVizmesh = function () {

	    //A scratch object that we fill in and return in the case
	    //we don't use THREE.Mesh for persistent storage. If the caller
	    //needs to hold on to the mesh outside the callback scope, it has to clone it.
	    var m;

	    function init_three() {
	        if (!m) {
	            m = new THREE.Mesh(undefined, undefined, true);
	            m.isTemp = true;
	            m.dbId = 0;
	            m.modelId = 0;
	            m.fragId = -1;
	            m.hide = false;
	            m.isLine = false;
	            m.isWideLine = false;
	            m.isPoint = false;
	        }
	    }

	    return function (fragId) {

	        // make sure that vertex-colors reflect the latest theming-state
	        if (this.model.is2d())
	        updateVertexBufferForThemingAndGhosting(this, fragId);

	        if (this.useThreeMesh) {
	            return this.vizmeshes[fragId];
	        } else {
	            // create temporary mesh object
	            init_three();

	            // init temp mesh object from geometry, material etc. 
	            m.geometry = this.getGeometry(fragId); // BufferGeometry
	            m.material = this.getMaterial(fragId); // THREE.ShaderMaterial
	            m.dbId = this.getDbIds(fragId);
	            m.modelId = this.model.getModelId();
	            m.fragId = fragId;
	            m.visible = true;
	            m.isLine = this.isLine(fragId);
	            m.isWideLine = this.isWideLine(fragId);
	            m.isPoint = this.isPoint(fragId);
	            m.hide = this.isFragOff(fragId);
	            m.themingColor = this.db2ThemingColor[m.dbId];

	            this.getWorldMatrix(fragId, m.matrixWorld);

	            return m;
	        }
	    };

	}();

	/**
	      * Create a promise for a mesh with downloaded geometry
	      * 
	      * When the promise fulfills the argument to the fulfillment function is an
	      * object with model and fragId properties that identify the mesh. We cannot
	      * fulfill using the mesh, because it may be shared and we can't guarantee
	      * execution order of independent promises.
	      * 
	      * Promises returned by this function can be canceled using
	      * FragmentList.cancelPromisedVizmesh(promise). A canceled promise is always rejected.
	      * The canceled property of the argument to the rejection function is true when a
	      * promise is canceled.
	      * @param {number} fragId - Fragment ID.
	      * @returns {Promise} Promise for the mesh for the given fragment.
	      */
	FragmentList.prototype.promiseVizmesh = function (fragId) {
	    // Get a promise for the geometry
	    return this.promiseGeometry(fragId);
	};

	/**
	    * Cancel a promise returned by promiseVizmesh
	    * 
	    * Canceled promised always rejects and the canceled property of the argument
	    * to the rejection function is set to true.
	    * @param {Promise} promise - Promise to be canceled
	    * @returns {boolean} - True if the promise is canceled. False if it isn't canceled.
	    */
	FragmentList.prototype.cancelPromisedVizmesh = function (promise) {
	    return this.cancelPromisedGeometry(promise);
	};

	FragmentList.prototype.getMaterialId = function (fragId) {
	    return this.useThreeMesh ? this.vizmeshes[fragId].material.id : this.materialids[fragId];
	};

	FragmentList.prototype.getMaterial = function (fragId) {
	    // material ids are either stored with vizmeshes or in the material map.
	    return this.useThreeMesh ? this.vizmeshes[fragId].material : this.materialmap[this.materialids[fragId]];
	};

	FragmentList.prototype.getGeometry = function (fragId) {
	    // geometry is either stored in with vizmoeshes or obtained from this.geoms.
	    // Make sure this.vizmesh[fragId] isn't null or undefined
	    var mesh;
	    return this.useThreeMesh ?
	    (mesh = this.vizmeshes[fragId]) ? mesh.geometry : null :
	    this.geoms.getGeometry(this.geomids[fragId]);
	};

	/**
	    * Locks the geometry for fragment with fragment id 'fragId'.
	    * Locked geometry will not be removed when paging out.
	    * Use sparingly if on demand loading is enabled.
	    * @param {int} fragId - Fragment ID
	    * @returns {boolean} True if the geometry was in memory and was locked.
	    */
	FragmentList.prototype.lockGeometry = function (fragId) {
	    // When using THREE.Meshes, all geometry must memory resident
	    return this.useThreeMesh ? true : this.geoms.lockGeometry(this.geomids[fragId]);
	};

	/**
	    * Unlocks the geometry for fragment with fragment id 'fragId'.
	    * Locked geometry will not be removed when paging out.
	    * Call once for each time you call lockGeometry.
	    * @param {int} fragId - Fragment ID
	    * @returns {boolean} True if the geometry was in memory and was locked.
	    */
	FragmentList.prototype.unlockGeometry = function (fragId) {
	    // When using THREE.Meshes, all geometry must memory resident
	    return this.useThreeMesh ? true : this.geoms.unlockGeometry(this.geomids[fragId]);
	};

	/**
	    * Gets the lock count for the geometry for fragment with fragment id 'fragId'.
	    * Geometry is locked if the lock count is > 0.
	    * Locked geometry will not be removed when paging out.
	    * @param {int} fragId - Fragment ID
	    * @returns {int} The lock count of the geometry, or -1 if the geometry is not in memory.
	    */
	FragmentList.prototype.getLockCount = function (fragId) {
	    // When using THREE.Meshes, all geometry must memory resident
	    return this.useThreeMesh ? 0 : this.geoms.getLockCount(this.geomids[fragId]);
	};

	FragmentList.prototype.getGeometryId = function (fragId) {
	    // When using THREE.Meshes, fragIds and geomids are the same and this.geomids is not used.
	    return this.useThreeMesh ? fragId : this.geomids[fragId];
	};

	FragmentList.prototype.setMaterial = function (fragId, material) {

	    if (this.useThreeMesh) {

	        this.vizmeshes[fragId].material = material;

	    } else {

	        this.materialids[fragId] = material.id;
	        this.materialmap[material.id] = material;

	    }
	};

	FragmentList.prototype.getCount = function () {
	    return this.vizflags.length;
	};

	FragmentList.prototype.getDbIds = function (fragId) {
	    return this.fragments.fragId2dbId[fragId];
	};

	// glRenderer: instanceof WebGLRenderer (only neeeded when for this.useThreeMesh==false)
	FragmentList.prototype.dispose = function (glrenderer) {

	    if (this.useThreeMesh) {

	        // dispatch remove event to all meshes and dispose events to all BufferGeometry buffers
	        // This will trigger EventListeners added by WebGLRenderer that deallocate the geometry later.
	        // (see onGeometryDispose(..) in WebGLRenderer.js)
	        var DISPOSE_EVENT = { type: 'dispose' };
	        var REMOVED_EVENT = { type: 'removed' };
	        for (var i = 0; i < this.vizmeshes.length; i++) {
	            var m = this.vizmeshes[i];
	            if (m) {
	                m.dispatchEvent(REMOVED_EVENT);
	                m.geometry.dispatchEvent(DISPOSE_EVENT);
	            }
	        }
	    } else {
	        // Delete all geometry data immediately (see WebGLRenderer.deallocateGeometry)
	        this.geoms.dispose(glrenderer);
	    }
	};

	// This function should probably not be called outside VisibityManager
	// in order to maintain node visibility state.
	FragmentList.prototype.setVisibility = function (fragId, value) {
	    this.setFlagFragment(fragId, globals.MESH_VISIBLE, value);
	    this.allVisibleDirty = true;
	};


	// Note that this function switches whole meshes on/off. It cannot be used to toggle visibility of
	// single 2D objects within a single mesh. For this one, use setObject2DVisible instead.
	FragmentList.prototype.setFragOff = function (fragId, value) {
	    this.setFlagFragment(fragId, globals.MESH_HIDE, value);
	    this.allVisibleDirty = true; // [HB:] Either this should be removed or this.areAllVisible should consider MESH_HIDE
	};


	FragmentList.prototype.setAllVisibility = function (value) {
	    if (this.model.is2d()) {
	        var frags = this.fragments;
	        if (frags && frags.dbId2fragId) {
	            for (var id in frags.dbId2fragId) {
	                this.setObject2DGhosted(id, !value);
	            }
	        }
	    } else {
	        this.setFlagGlobal(globals.MESH_VISIBLE, value);

	        this.allVisible = value;
	        this.allVisibleDirty = false;
	    }
	};

	/**
	    * Updates animation transform of a specific fragment.
	    * Note: 
	    *      - If scale/rotation/translation are all null, the call resets the whole transform, i.e., no anim transform is assigned anymore.
	    *      - Leaving some of them null means to leave them unchanged.
	    * @param {number} fragId - Fragment ID.
	    * @param {Vector3=} scale
	    * @param {Quaternion=} rotationQ
	    * @param {Vector3=} translation
	    */
	FragmentList.prototype.updateAnimTransform = function (fragId, scale, rotationQ, translation) {

	    var ax = this.animxforms;
	    var off;

	    //Allocate animation transforms on first use.
	    if (!ax) {
	        var count = this.getCount();
	        ax = this.animxforms = new Float32Array(10 * count); //3 scale + 4 rotation + 3 translation
	        for (var i = 0; i < count; i++) {
	            // get start index of the anim transform of fragment i
	            off = i * 10;

	            // init as identity transform
	            ax[off] = 1; // scale.x
	            ax[off + 1] = 1; // scale.y
	            ax[off + 2] = 1; // scale.z
	            ax[off + 3] = 0; // rot.x
	            ax[off + 4] = 0; // rot.y
	            ax[off + 5] = 0; // rot.z
	            ax[off + 6] = 1; // rot.w
	            ax[off + 7] = 0; // trans.x
	            ax[off + 8] = 0; // trans.y
	            ax[off + 9] = 0; // trans.z
	        }
	    }

	    off = fragId * 10;
	    var moved = false;

	    if (scale) {
	        ax[off] = scale.x;
	        ax[off + 1] = scale.y;
	        ax[off + 2] = scale.z;
	        moved = true;
	    }

	    if (rotationQ) {
	        ax[off + 3] = rotationQ.x;
	        ax[off + 4] = rotationQ.y;
	        ax[off + 5] = rotationQ.z;
	        ax[off + 6] = rotationQ.w;
	        moved = true;
	    }

	    if (translation) {
	        ax[off + 7] = translation.x;
	        ax[off + 8] = translation.y;
	        ax[off + 9] = translation.z;
	        moved = true;
	    }

	    // Set MESH_MOVED if an animation transform has been assigned. Just if scale/rotation/translation are all null, unset the flag.
	    this.setFlagFragment(fragId, globals.MESH_MOVED, moved);

	    //Assume that if we are called with null everything the caller wants to reset the transform.
	    if (!moved) {
	        // reset to identity transform
	        ax[off] = 1;
	        ax[off + 1] = 1;
	        ax[off + 2] = 1;
	        ax[off + 3] = 0;
	        ax[off + 4] = 0;
	        ax[off + 5] = 0;
	        ax[off + 6] = 1;
	        ax[off + 7] = 0;
	        ax[off + 8] = 0;
	        ax[off + 9] = 0;
	    }
	};

	/**
	    * Returns animation transform of a specific fragment.
	    * @param {number} fragId - Fragment ID.
	    * @param {Vector3=} scale - Output param.
	    * @param {Quaternion=} rotationQ - Output param.
	    * @param {Vector3=} translation - Output param.
	    * @returns {bool} True if an anim transform is assigned to the given fragment.
	    *      If so, it is written to the given out params. False otherwise (outparams not changed).
	    */
	FragmentList.prototype.getAnimTransform = function (fragId, scale, rotationQ, translation) {

	    if (!this.animxforms)
	    return false;

	    if (!this.isFlagSet(fragId, globals.MESH_MOVED))
	    return false;

	    var off = fragId * 10;
	    var ax = this.animxforms;

	    if (scale) {
	        scale.x = ax[off];
	        scale.y = ax[off + 1];
	        scale.z = ax[off + 2];
	    }

	    if (rotationQ) {
	        rotationQ.x = ax[off + 3];
	        rotationQ.y = ax[off + 4];
	        rotationQ.z = ax[off + 5];
	        rotationQ.w = ax[off + 6];
	    }

	    if (translation) {
	        translation.x = ax[off + 7];
	        translation.y = ax[off + 8];
	        translation.z = ax[off + 9];
	    }

	    return true;
	};

	/**
	    * Returns world matrix of a fragment.
	    * @param {number} index - Fragment ID.
	    * @param {THREE.Matrix4} dstMtx - Out param to receive the matrix.
	    */
	FragmentList.prototype.getOriginalWorldMatrix = function (index, dstMtx) {
	    var i = index * 12;

	    var cur = dstMtx.elements;
	    var orig = this.transforms;

	    if (orig) {
	        // If this.transforms is defined, copy transform from this array            

	        // In this.transforms, we only store the upper 3 rows explicitly. 
	        // The last row is alway (0,0,0,1).
	        cur[0] = orig[i];
	        cur[1] = orig[i + 1];
	        cur[2] = orig[i + 2];
	        cur[3] = 0;
	        cur[4] = orig[i + 3];
	        cur[5] = orig[i + 4];
	        cur[6] = orig[i + 5];
	        cur[7] = 0;
	        cur[8] = orig[i + 6];
	        cur[9] = orig[i + 7];
	        cur[10] = orig[i + 8];
	        cur[11] = 0;
	        cur[12] = orig[i + 9];
	        cur[13] = orig[i + 10];
	        cur[14] = orig[i + 11];
	        cur[15] = 1;
	    } else if (this.useThreeMesh) {
	        // get matrix directly from THREE.Mesh
	        var m = this.getVizmesh(index);
	        if (m)
	        dstMtx.copy(m.matrixWorld);else

	        dstMtx.identity();
	    } else {
	        dstMtx.identity();
	    }
	};


	/**
	    * Writes the final world matrix of a fragment to out param dstMtx.
	    * The world matrix results from original transform and anim transform (if any).
	    * @param {number} index - Fragment ID.
	    * @param {THREE.Matrix4} dstMtx - Out param to receive the matrix.
	    */
	FragmentList.prototype.getWorldMatrix = function () {

	    var tmp, pos, rot, scale;

	    function init_three() {
	        tmp = new THREE.Matrix4();
	        pos = new THREE.Vector3();
	        rot = new THREE.Quaternion();
	        scale = new THREE.Vector3();
	    }

	    return function (index, dstMtx) {

	        if (!tmp)
	        init_three();

	        this.getOriginalWorldMatrix(index, dstMtx);

	        //If mesh hasn't moved from its original location, just use that.
	        if (!this.isFlagSet(index, globals.MESH_MOVED)) {
	            return;
	        }

	        //Otherwise construct the overall world matrix
	        this.getAnimTransform(index, scale, rot, pos);

	        // compose matrix from pos, rotation, and scale
	        tmp.compose(pos, rot, scale);

	        // First apply original matrix (in dstMtx), then anim matrix (in tmp).
	        // Note that tmp muist be multipled from left for this.
	        dstMtx.multiplyMatrices(tmp, dstMtx);
	    };

	}();

	/**
	      * Writes the world box to dstBox outparams, considering matrix and anim transform (if specified).
	      * @param {number} index - Fragment ID.
	      * @param {THREE.Box3|LmvBox3}
	      */
	FragmentList.prototype.getWorldBounds = function () {

	    var tmp;

	    function init_three() {
	        tmp = new THREE.Matrix4();
	    }

	    return function (index, dstBox) {

	        if (!tmp)
	        init_three();

	        //Check if the world transform of the mesh is unchanged from
	        //the original LMV file -- in such case we can use the original
	        //bounding box from the LMV package, which is presumably more precise (tighter)
	        //than just transforming the model box.
	        //This is important if we want to keep our bounding volume hierarchy efficient.
	        if (this.boxes && !this.isFlagSet(index, globals.MESH_MOVED)) {
	            var b = this.boxes;
	            var boffset = index * 6;
	            dstBox.min.x = b[boffset];
	            dstBox.min.y = b[boffset + 1];
	            dstBox.min.z = b[boffset + 2];
	            dstBox.max.x = b[boffset + 3];
	            dstBox.max.y = b[boffset + 4];
	            dstBox.max.z = b[boffset + 5];
	            return;
	        }

	        // get original model box
	        if (this.useThreeMesh) {
	            // either from THREE.Mesh
	            var m = this.getVizmesh(index);
	            if (m && m.geometry) {
	                dstBox.copy(m.geometry.boundingBox);
	            }
	        } else
	        {
	            // or from GeometryList
	            this.geoms.getModelBox(this.geomids[index], dstBox);
	        }

	        if (!dstBox.empty()) {
	            // apply world matrix to dstBox
	            this.getWorldMatrix(index, tmp);
	            dstBox.applyMatrix4(tmp);
	        }
	    };

	}();

	// set themingNeedsUpdate flag for all vizmeshes that contain a given dbId
	function setThemingOrGhostingNeedsUpdateFlag(fragList, dbId) {

	    if (!fragList.model.is2d()) {
	        // In this case (3D model), we just have theming colors per mesh and don't need to update vertex buffers.
	        return;
	    }

	    // get id(s) of affected mesh(es) that needs a vertex-color update
	    var fragIds = fragList.fragments.dbId2fragId[dbId];

	    //  trigger update for single id or an array of ids
	    if (Array.isArray(fragIds)) {
	        for (var i = 0; i < fragIds.length; i++) {
	            fragList.themingOrGhostingNeedsUpdate[fragIds[i]] = true;
	        }
	    } else if (typeof fragIds === 'number') {
	        fragList.themingOrGhostingNeedsUpdate[fragIds] = true;
	    }
	}

	/**
	   * Applies a theming color that is blended with the final fragment color of a material shader.
	   * @param {number}        dbId
	   * @param {THREE.Vector4} color - theming color (in xyz) and intensity (in w). All components in [0,1]
	   */
	FragmentList.prototype.setThemingColor = function (dbId, color) {
	    this.db2ThemingColor[dbId] = color;
	    setThemingOrGhostingNeedsUpdateFlag(this, dbId);
	};

	/** Restore original colors for all themed shapes. */
	FragmentList.prototype.clearThemingColors = function () {

	    // When using F2D (model.is2d()==true), we have to update the restore the original
	    // per-vertex colors. For 3D, we can use per-shape colors, so that this step is not
	    // needed.
	    if (this.model.is2d()) {
	        // trigger update for all meshes that were affected by theming before
	        // Note that dbId2fragId only exists for F2D models.
	        for (var i = 1, iEnd = this.fragments.dbId2fragId.length; i < iEnd; i++) {
	            setThemingOrGhostingNeedsUpdateFlag(this, i);
	        }
	    }

	    // clear theming-color map
	    this.db2ThemingColor.length = 0;
	};

	/** Set ghosting flag for a 2D object. This reduces the objects opacity, blends it with pageColor, and excludes it from selection.
	    *  @param {number} dbId
	    *  @param {bool}   state
	    */
	FragmentList.prototype.setObject2DGhosted = function (dbId, state) {
	    this.dbIdIsGhosted[dbId] = state;
	    setThemingOrGhostingNeedsUpdateFlag(this, dbId);
	};

	/** Set hide flag for a 2D object. This sets opacity to 0.0, which also excludes it from selection.
	    *  @param {number} dbId
	    *  @param {bool}   visible
	    */
	FragmentList.prototype.setObject2DVisible = function (dbId, visible) {
	    this.dbIdIsHidden[dbId] = !visible;
	    setThemingOrGhostingNeedsUpdateFlag(this, dbId);
	};

	/**
	    * Convenience class encapsulating a single fragment in a given FragmentList.
	    * Use sparingly, as it is expensive to have those for every fragment in memory.
	    * @constructor
	    */
	function FragmentPointer(frags, fragId) {

	    this.frags = frags; // fragment list
	    this.fragId = fragId; // id of a fragment in frags

	    // used by MeshAnimation
	    this.scale = null;
	    this.quaternion = null;
	    this.position = null;
	}

	FragmentPointer.prototype.getWorldMatrix = function (dst) {
	    this.frags.getWorldMatrix(this.fragId, dst);
	};

	FragmentPointer.prototype.getOriginalWorldMatrix = function (dst) {
	    this.frags.getOriginalWorldMatrix(this.fragId, dst);
	};

	FragmentPointer.prototype.getWorldBounds = function (dst) {
	    return this.frags.getWorldBounds(this.fragId, dst);

	};

	/**
	    * Sets this.scale / this.quaternion / this.position to the anim transform of the the fragment this.fragId.
	    * @returns {bool} True if an animation transform is set. Otherwise, it returns false and transform is set to identity.
	    */
	FragmentPointer.prototype.getAnimTransform = function () {

	    if (!this.scale) {
	        this.scale = new THREE.Vector3(1, 1, 1);
	        this.quaternion = new THREE.Quaternion(0, 0, 0, 1);
	        this.position = new THREE.Vector3(0, 0, 0);
	    }

	    return this.frags.getAnimTransform(this.fragId, this.scale, this.quaternion, this.position);

	};

	// Applies current scale/quaternion/position to the fragment.
	FragmentPointer.prototype.updateAnimTransform = function () {

	    if (!this.scale) {
	        this.scale = new THREE.Vector3(1, 1, 1);
	        this.quaternion = new THREE.Quaternion(0, 0, 0, 1);
	        this.position = new THREE.Vector3(0, 0, 0);
	    }

	    this.frags.updateAnimTransform(this.fragId, this.scale, this.quaternion, this.position);
	};

	FragmentPointer.prototype.getMaterial = function () {

	    return this.frags.getMaterial(this.fragId);

	};

	FragmentPointer.prototype.setMaterial = function (material) {

	    return this.frags.setMaterial(this.fragId, material);

	};

	module.exports = {
	    FragmentPointer: FragmentPointer,
	    FragmentList: FragmentList };

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var mergeGeometries = __webpack_require__(78).mergeGeometries;
	var InstanceBufferBuilder = __webpack_require__(77);

	/**
	                                                                    *  ConsolidationIterator is used by by RenderModel to replace groups of fragments by consolidated meshes whenever possible.
	                                                                    *
	                                                                    *  Note that it is not a ModelIterator - just a helper to iterate over the consolidation in parallel to replace the
	                                                                    *  results of ModelIterators.
	                                                                    *
	                                                                    * Why is it needed?
	                                                                    * -----------------
	                                                                    *
	                                                                    * A consolidated fragment list can strongly accelerate rendering for some models by reducing the per-shape work of the
	                                                                    * WebGLRenderer.
	                                                                    *
	                                                                    * However, just putting the consolidated meshes into a scene and rendering it would introduce several problems:
	                                                                    *  1. Progressive rendering would not work anymore.
	                                                                    *  2. We could not use the BVH for hierarchical visibility culling anymore.
	                                                                    *  3. All individual stuff (setFragOff, ghosting, theming) would stop working.
	                                                                    *
	                                                                    * These problems are addressed by ConsolidationIterator.
	                                                                    *
	                                                                    * How does it work?
	                                                                    * -----------------
	                                                                    *
	                                                                    * There is no perfect solution for the problems above. E.g., progressive rendering with a fine-grained BVH would require
	                                                                    * to permanently vary the shape order - which would completely revert the performance benefit of consolidation.
	                                                                    * Therefore, the goal is to achieve a balanced trade-off between a) consolidating as much as possible and b) keeping
	                                                                    * the advantages of the BVH traversal that is used normally.
	                                                                    *
	                                                                    * For this, the BVHIterator traverses the scene as usual. The normal behavior is to return a RenderBatch with
	                                                                    * individual fragments on each nextBatch call. When using consolidation, we replace each such RenderBatch
	                                                                    * by a THREE scene in a way that:
	                                                                    *
	                                                                    *  - For each fragment f that has not been rendered yet, it contains the consolidated mesh containing f
	                                                                    *  - It is ensured that each consolidated batch is only used once in a traversal.
	                                                                    *
	                                                                    * Note that this means that we have a bit less granularity, i.e., some fragments will be rendered that would be
	                                                                    * culled otherwise, and progressive rendering will render some fragments earlier than normally. However,
	                                                                    * this is a necessary trade-off as explained above.
	                                                                    *
	                                                                    * What about hiding/ghosting/theming?
	                                                                    * ------------------------------------
	                                                                    *
	                                                                    * Another purpose of this class is to keep per-fragment hiding/ghosting/theming working when using a consolidated FragmentList.
	                                                                    * At the moment, we use a very simple fallback for this: Whenever a fragment needs any special treatment
	                                                                    * (e.g., is ghosted), we temporarily disable consolidated meshes and fall back to individual fragments.
	                                                                    *
	                                                                    * Limitation: An obvious drawback of this straightforward solution is that consolidation only improves the
	                                                                    * rendering speed as long as no fragment needs special treatment. As soon as any ghosting/hiding/theming is used,
	                                                                    * we fall back to original speed.
	                                                                    *
	                                                                    * Supporting consolidation and individual fragment modification at once will require some extra work.
	                                                                    *
	                                                                    *
	                                                                    * @constructor
	                                                                    *  @param {FragmentList}  fragList          - Original fragment list
	                                                                    *  @param {Consolidation} fragConsolidation - Consolidated representation of a full FragmentList
	                                                                    */
	function ConsolidationIterator(fragList, fragConsolidation) {

	    // FragmentList
	    var _frags = fragList;

	    // Consolidated fragment list
	    var _fragConsolidation = fragConsolidation;

	    // {Bool[]} Used to track which consolidated shapes have been rendered in the current traversal.
	    var _shapeDone = [];

	    // If true, we must use original fragments in the current traversal. This flag is determined at the beginning
	    // of a traversal and is set whenever a fragment needs special treatment (ghosting/hiding etc.).
	    var _consolidationDisabled = false;

	    // Each scene replaces a RenderBatch that represents a node in the BVH hierarchy.
	    // The RenderBatch of a BVHNode is always the same object. This allows RenderScene to track
	    // average fragme times by attaching the avgFrameTime to each object.
	    // To keep this working when replacing RenderBatches by THREE.Scenes, the THREE.Scene object of a BVHNode
	    // must also keep the same object per bvh node. Therefore, we index the cache by bvhNode index.
	    var _sceneCache = []; // {THREE.Scene[]} Reused per traversal

	    // some reused temp objects
	    var _tempMatrix = new THREE.Matrix4();
	    var _tempBox = new THREE.Box3();

	    // get next scene from cache
	    function acquireScene(index) {
	        // create new scee on first use
	        if (!_sceneCache[index]) {
	            _sceneCache[index] = new THREE.Scene();
	        }
	        var scene = _sceneCache[index];
	        scene.children.length = 0;
	        return scene;
	    };

	    this.getConsolidation = function () {
	        return _fragConsolidation;
	    };

	    /**
	        * Called at the beginning of a scene traversal.
	        */
	    this.reset = function () {

	        // reset state to "not used yet" for all consolidated meshes
	        _shapeDone.length = null;

	        var fragCount = _frags.getCount();

	        // Check if any fragment needs special treatment for this traversal.
	        // If not, we can use consolidation.
	        _consolidationDisabled = false;
	        var themingActive = _frags.db2ThemingColor.length > 0;
	        for (var fragId = 0; fragId < fragCount; fragId++) {

	            var flags = _frags.vizflags[fragId];
	            var isGhosted = (flags & globals.MESH_VISIBLE) == 0;
	            var isHidden = (flags & globals.MESH_HIDE) != 0;
	            var isMoved = (flags & globals.MESH_MOVED) != 0;

	            // consider color theming
	            var isColored = false;
	            if (themingActive) {
	                var dbId = _frags.fragments.fragId2dbId[fragId];
	                isColored = !!_frags.db2ThemingColor[dbId];
	            }

	            if (isGhosted || isHidden || isColored || isMoved) {
	                // one or more fragments of this container need individual handling.
	                // => Fall back to individual fragment rendering.
	                _consolidationDisabled = true;
	                break;
	            }
	        }
	    };

	    this.dispose = function () {

	        for (var i = 0; i < _fragConsolidation.meshes.length; i++) {
	            var mesh = _fragConsolidation.meshes[i];
	            var geom = mesh.geometry;
	            if (geom) {
	                // In case of later reuse, setting needsUpdate is essential to render it again.
	                geom.dispose();
	                geom.needsUpdate = true;
	            }
	        }

	        // Note that all consolidation materials are associated with the owning RenderModel and
	        // are automatically disposed with the other RenderModel resources.
	        // Therefore, we don't dispose them here.
	    };

	    /**
	        * Given a RenderBatch that would normally be rendered next, this function
	        * creates a consolidated scene to replace it in a way that:
	        *
	        *  1. Each fragment f in the batch is included (unless it has already been rendered in this traveral)
	        *  2. During traversal, each consolidated mesh is only used once.
	        *
	        *  @param   {RenderBatch}          renderBatch
	        *  @param   {FrustumInstersector}  frustum
	        *  @returns {THREE.Scene|RenderBatch} If fragments must be rendered individually, the input RenderBatch
	        *           is returned. This happens, e.g., if one or more fragments is ghosted.
	        */
	    this.consolidateNextBatch = function (renderBatch, frustum) {

	        // get bvh node index associated with this RenderBatch. We need this to make sure that
	        // a RenderBatch is always replaced by the same THREE.Scene object.
	        var nodeIndex = renderBatch.nodeIndex;

	        // Fallback: Just use original fragments to make sure that ghosting/hiding/theming keeps working.
	        if (_consolidationDisabled || nodeIndex === undefined) {
	            return renderBatch;
	        }

	        var scene = acquireScene(nodeIndex);

	        // For each fragment: Find the consolidated shape that contains it and add it to the scene.
	        for (var i = renderBatch.start; i < renderBatch.lastItem; i++) {

	            var fragId = renderBatch.indices ? renderBatch.indices[i] : i;

	            // find consolidated shape containing this fragment
	            var meshIndex = _fragConsolidation.fragId2MeshIndex[fragId];
	            var mesh = null;

	            if (meshIndex === -1) {
	                // By design, a FragmentList consolidation must always have replacements for
	                // each fragment. So, something must have failed here.
	                // Note that we cannot simply add single meshes by _frags.getVisMesh(),
	                // because getVizMesh() always return the same (reused) object.
	                THREE.warn("Warning: Missing fragment in consolidation. Consolidation disabled.");
	                return renderBatch;
	            }

	            // Skip consolidated shape if it has already been used in this traversal.
	            if (_shapeDone[meshIndex]) {
	                continue;
	            }

	            // Apply frustum culling. Some related considerations:
	            //
	            //  1. Instead of culling per container mesh, we apply culling based on original fragments.
	            //     Advantages:
	            //      - Since merged fragments may be arbitrarily distributed, the culling granularity
	            //        of original fragments is significantly higher.
	            //      - When using progressive rendering, the per-fragment culling avoids that we
	            //        are rendering containers too early if only distant fragments of them are visible.
	            //
	            //  2. Simply using RenderBatch.applyVisibility() on the original batch caused some noticable
	            //     frame rate hickups for some test models (e.g. NWD with ~284K fragments). Also because the
	            //     BVH cannot be too fine-grained when using consolidation.
	            //
	            //     The advantage of doing it here is: As soon as a single fragment of a consolidated mesh
	            //     passes the frustum test, the frustum check is skipped for all other contained fragments.
	            _frags.getWorldBounds(fragId, _tempBox);
	            if (!frustum.intersectsBox(_tempBox)) {
	                continue;
	            }

	            // use this consolidated mesh
	            mesh = _fragConsolidation.meshes[meshIndex];

	            // mark container mesh as used so that we don't render it again in this traversal
	            _shapeDone[meshIndex] = true;

	            // add container
	            scene.children.push(mesh);
	        }

	        // use original bbox, renderImportance, and camera distance. Note that the consolidation may actually have another bbox,
	        // because it doesn't contain exactly the same fragments. However, recomputing it would
	        // just inappropriately distort priorities, because it may contain instances far outside
	        // the current bvh node.
	        scene.boundingBox = renderBatch.boundingBox;
	        scene.renderImportance = renderBatch.renderImportance;

	        // adopt sortObjects flag from original RenderBatch - so that RenderScene can use it to detect which
	        // scenes contain transparency.
	        scene.sortObjects = renderBatch.sortObjects;

	        return scene;
	    };

	    // enum to describe in which way a fragment has been rendered.
	    var ConsolidationType = {

	        Merged: 1, // Fragment is represented by a merged geometry composed from different fragment geometries.
	        Instanced: 2, // Fragment is represented by an instanced shape that represents multiple fragments that
	        // are sharing the same geometry.
	        Original: 3 // Fragment was not combined with others and is still sharing the original fragment's geometry
	        // and material.
	    };

	    /**
	        *  Checks if a given geometry is instanced, the result of merging, or original fragment geometry.
	        *
	        *   @param {THREE.Mesh} currently used render proxy
	        *   @param {Number}     fragId represented by this proxy
	        **/
	    function getConsolidationType(geom) {
	        if (geom.numInstances) {
	            // This geom combines multiple fragments using instancing
	            // Note that we also enter this section if numInstances==1. This is correct, because numInstances
	            // is always undef if no instance buffer is used.
	            return ConsolidationType.Instanced;
	        } else if (geom.attributes.id) {
	            // When merging fragments, we always use per-vertex ids.
	            return ConsolidationType.Merged;
	        }
	        return ConsolidationType.Original;
	    };

	    /**
	        *   Checks which type of consolidation has been used to represent a given fragment in the last
	        *  rendering traversal.
	        *
	        *   @returns {ConsolidationType}
	        */
	    function getFragmentConsolidationType(fragId) {

	        // Check if consolidation was used for this fragment in last frame.
	        if (_consolidationDisabled) {
	            // The container was not used last frame. The fragment was rendered with original geometry.
	            return ConsolidationType.Original;
	        }

	        // Find consolidated mesh that contains fragId.
	        var meshIndex = _fragConsolidation.fragId2MeshIndex[fragId];

	        // This fragment was represented using a container mesh from the consolidated scene.
	        // If this mesh was created by instancing or merging, it is tagged with a consolidation type.
	        var container = _fragConsolidation.meshes[meshIndex];
	        var geom = container.geometry;
	        return getConsolidationType(geom);
	    };

	    /** Updates a given render proxy mesh to make sure that it matches exactly with the fragment's representation
	        *  used in the last rendered frame.
	        *
	        *   @param {THREE.Mesh} currently used render proxy
	        *   @param {Number}     fragId represented by this proxy
	        **/
	    this.updateRenderProxy = function (proxy, fragId) {

	        // if the proxy has no valid geometry, do nothing
	        if (!proxy.geometry || !proxy.geometry.attributes) {
	            return;
	        }

	        // check which type of geometry has been used in last rendering traversal (See ConsolidationType enum)
	        var requiredType = getFragmentConsolidationType(fragId);
	        var currentType = getConsolidationType(proxy.geometry);

	        // if type is already correct, we are done.
	        if (currentType == requiredType) {
	            return;
	        }

	        // get original fragment geometry
	        var origGeom = _frags.getGeometry(fragId);

	        // get container geometry that represents the fragment in the consolidation
	        var containerIndex = _fragConsolidation.fragId2MeshIndex[fragId];
	        var container = _fragConsolidation.meshes[containerIndex];

	        if (requiredType === ConsolidationType.Original) {

	            // recover original geometry, material, and matrix
	            proxy.geometry = origGeom;
	            proxy.material = _frags.getMaterial(fragId);
	            _frags.getWorldMatrix(fragId, proxy.matrix);


	        } else if (requiredType === ConsolidationType.Instanced) {

	            // This fragment was rendered using an instanced shape.

	            // replace proxy geometry by instanced mesh with single instance
	            _frags.getWorldMatrix(fragId, _tempMatrix);
	            var dbId = _frags.fragments.fragId2dbId[fragId];

	            // create proxy mesh with 1-element instance buffer
	            var builder = new InstanceBufferBuilder(origGeom, 1);
	            builder.addInstance(_tempMatrix, dbId);
	            proxy.geometry = builder.finish();

	            // use container material (needed to activate instancing)
	            proxy.material = container.material;

	            // reset matrix to identity, because the transform is done per instance
	            proxy.matrix.identity();

	        } else {// ConsolidationType.Merged:

	            // This fragment was rendered using a merged shape

	            // create consolidation proxy which just contains the single fragment with baked matrix
	            _frags.getWorldMatrix(fragId, _tempMatrix);
	            _frags.getWorldBounds(fragId, _tempBox);
	            var dbId = _frags.fragments.fragId2dbId[fragId];
	            proxy.geometry = mergeGeometries([origGeom], _tempMatrix.elements, [dbId], _tempBox);

	            // share container material
	            proxy.material = container.material;

	            // reset matrix to identity, because the transform is baked into the vertex buffer
	            proxy.matrix.identity();
	        }

	        // make sure that WebGLRenderer does not keep an outdated cache object. Without this line,
	        // WebGLRenderer will still use the previous GeometryBuffer if it is already cached.
	        proxy.dispatchEvent({ type: 'removed' });
	    };
	}

	module.exports = ConsolidationIterator;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var RenderBatch = __webpack_require__(76);
	var RenderBatchLess = __webpack_require__(103);

	function ModelIteratorBVH() {

	    var _frags;

	    // Nodes in the BVH, in an array for easy access to all of them.
	    // There are up to two trees, one for opaques, one for transparent objects.
	    // These are normally listed top-down, in a flattened list, e.g., if all the objects
	    // in the scene were transparent, _bvhNodes[0] = 0, and the 0 node would have not
	    // children and no primitives, as this node would contain all the opaque fragments,
	    // of which there are none. The transparent tree is always in _bvhNodes[1], and might
	    // look something like this:
	    //     1
	    //  2     3
	    // 4 5   6 7
	    // with the children 4-7 each containing a RenderBatch of some number of fragments. Note
	    // that inner nodes can also have RenderBatches.
	    var _bvhNodes = null;
	    // There's indirection for each RenderBatch. A RenderBatch contains a number of fragments.
	    // Rather than an array per RenderBatch, a single array is accessed by all RenderBatches.
	    // The primitives are in a list sorted by surface area. We preserve this. In this
	    // _bvhFragOrder array we by a flattened list of children fragment indices. So child 4,
	    // above, might have 3 objects, and their indices might be [291 12 55].
	    // primStart and primCount access this array.
	    // Also see bvh_partition and the comment there.
	    var _bvhFragOrder = null;
	    // _bvhScenes is a sparse array of RenderBatches, each RenderBatch has a few fragments.
	    // Only those elements in the array that have a RenderBatch are defined.
	    var _bvhScenes = null;
	    // What is the containment state of this node, if known? Is either CONTAINMENT_UNKNOWN
	    // or INTERSECTS or CONTAINS. If CONTAINS, we don't have to run the frustum cull
	    // test, saving a few percent in speed.
	    var _bvhContainment = null;
	    var _bvhNodeQueue = null,_bvhNodeAreas = null,_bvhHead,_bvhTail;
	    var _bvhLIFO = 1;
	    var _bvhPrioritizeScreenSize = true;
	    var _bvhOpaqueDone = false;
	    var _bvhOpaqueSkipped = false; // true if skipOpaqueShapes has been called in the current traversal.
	    var _tmpBox = new THREE.Box3();
	    var _tmpBox2 = new THREE.Box3();

	    var _frustum;
	    var _done = false;
	    //var _time0 = 0;


	    this.initialize = function (renderModelLinear, nodes, primitives, options) {

	        _frags = renderModelLinear.getFragmentList();

	        if (options && options.hasOwnProperty("prioritize_screen_size")) {
	            _bvhPrioritizeScreenSize = options.prioritize_screen_size;
	        }

	        _bvhFragOrder = primitives;
	        _bvhScenes = new Array(nodes.nodeCount);
	        _bvhContainment = new Int8Array(nodes.nodeCount);
	        _bvhNodes = nodes;
	        _bvhNodeQueue = new Int32Array(nodes.nodeCount + 1);
	        _bvhNodeAreas = new Float32Array(nodes.nodeCount);

	        // Choose a different render batch class if fragments on demand loading enabled.
	        var RBClass = _frags.onDemandLoadingEnabled() ? RenderBatchLess : RenderBatch;

	        // walk through all the nodes in the BVH
	        for (var i = 0; i < nodes.nodeCount; i++) {
	            var primCount = nodes.getPrimCount(i);
	            // does this node have real objects in it?
	            if (primCount) {
	                // This node has real objects in it, typically 2-4, in some arbitrary order.
	                _bvhScenes[i] = new RBClass(_frags, _bvhFragOrder, nodes.getPrimStart(i), primCount);
	                // These are set manually, because we will not be adding fragments to the
	                // render batch one by one -- the fragments are already loaded.
	                _bvhScenes[i].lastItem = _bvhScenes[i].start + primCount;
	                _bvhScenes[i].numAdded = primCount;
	                _bvhScenes[i].nodeIndex = i;
	                if (nodes.getFlags(i) & 8) {
	                    _bvhScenes[i].sortObjects = true; //scene contains transparent objects
	                }
	                nodes.getBoxThree(i, _bvhScenes[i].boundingBox);
	            }
	        }

	    };

	    // note: fragId and mesh are not used in this function
	    this.addFragment = function (fragId, mesh) {
	    };


	    this.reset = function (frustum) {
	        _frustum = frustum;
	        _bvhHead = 0;_bvhTail = 0;
	        // means "unknown containment state"
	        _bvhContainment[0] = _bvhContainment[1] = globals.CONTAINMENT_UNKNOWN;
	        // prime the pump: the first entry is set to BVH node 0,
	        // which is the first node in the first hierarchy (the opaque one) that we'll examine.
	        // The ++ here is just for consistency; we could have set tail to 1
	        // and used 0 as the index. _bvhTail will immediately get decremented to 0 by nextBatch;
	        // it's incremented here to initially pass the while() loop there.
	        _bvhNodeQueue[_bvhTail++] = 0;
	        _bvhOpaqueDone = false;
	        _bvhOpaqueSkipped = false;
	        _done = false;
	        //_time0 = Date.now();
	    };


	    // Used to insert nodes into the (sorted) render queue based on
	    // a heuristic other than strict front to back or back to front order.
	    // Currently we always use this for sorting by screen area.
	    function insertNode(idx) {

	        //This is basically a single sub-loop of an insertion sort.

	        var val = _bvhNodeAreas[idx];
	        var j = _bvhTail;

	        if (_bvhLIFO) {
	            // For LIFO we insert the largest at the end of the list, since they
	            // are the first to be popped
	            while (j > _bvhHead && _bvhNodeAreas[_bvhNodeQueue[j - 1]] > val) {
	                _bvhNodeQueue[j] = _bvhNodeQueue[j - 1];
	                j--;
	            }
	        } else {
	            // For FIFO we insert the largest at the front of the list.
	            while (j > _bvhHead && _bvhNodeAreas[_bvhNodeQueue[j - 1]] < val) {
	                _bvhNodeQueue[j] = _bvhNodeQueue[j - 1];
	                j--;
	            }
	        }

	        _bvhNodeQueue[j] = idx;
	        _bvhTail++;
	    }

	    this.nextBatch = function () {

	        if (!_bvhOpaqueSkipped && !_bvhOpaqueDone && _bvhHead === _bvhTail) {
	            //If we are done with the opaque nodes, queue the transparent ones
	            //before processing the contents of the last opaque node
	            _bvhNodeQueue[_bvhTail++] = 1; //root of transparent subtree is at index 1
	            _bvhOpaqueDone = true;
	        }

	        // _bvhHead and _bvhTail are indices into the BVH node list. For the opaque objects
	        // these start at 0 and 1, respectively. The idea here is to work through the bounding
	        // volume hierarchy, with inner nodes sorted into the list by large-to-small screen area
	        // (or front-to-back, or back-to-front) order as we go. The way this loop ends is when
	        // nothing is on the BVH node stack, or a render batch of stuff to render is found.
	        // The next time this method is called, the current _bvhHead and _bvhTail values pick
	        // up where they left off, continuing to traverse the tree, until another batch is found
	        // or the stack (list) is emptied.
	        // Note: this is a breadth-first traversal, but render batches can and do get returned
	        // before the whole tree is traversed, because these can be found in inner nodes.
	        // This means that there may be nodes with larger screen areas that come later on.
	        while (_bvhHead !== _bvhTail) {

	            // Retrieve node index for what to process in the BVH. _bvhNodeQueue contains the indices
	            // of the node(s) in the BVH that are to be processed. 
	            // For LIFO, for example, when the nodeIdx is first retrieved, _bvhTail initially
	            // goes to 0, and so grabs the index at location 0 in _bvhNodeQueue, typically the top of
	            // the opaque tree. The rest of this loop may add to this queue, and/or return fragments to
	            // render, in which case it exits. If nothing got returned (yet) and the loop continues,
	            // the next time around through this loop, the last
	            // BVH node put on this _bvhNodeQueue stack (if LIFO is true) is retrieved (if not LIFO,
	            // the first object on the list is retrieved and _bvhHead is incremented).
	            // Inner nodes will add their two children in proper order to _bvhNodeQueue and increment _bvhTail, twice.
	            var nodeIdx = _bvhLIFO || _bvhOpaqueDone ? _bvhNodeQueue[--_bvhTail] : _bvhNodeQueue[_bvhHead++];

	            // Is box already found to be contained? This happens when a box's parent is fully contained.
	            // We can then avoid the frustum test.
	            var intersects = _bvhContainment[nodeIdx];
	            if (intersects !== globals.CONTAINS) {
	                // could be outside or intersecting, so do test
	                _bvhNodes.getBoxThree(nodeIdx, _tmpBox);
	                intersects = _frustum.intersectsBox(_tmpBox);
	            }

	            //Node is entirely outside, go on to the next node
	            if (intersects !== globals.OUTSIDE) {
	                var child = _bvhNodes.getLeftChild(nodeIdx);
	                var isInner = child !== -1;
	                var firstIdx, secondIdx;

	                //Is it inner node? Add children for processing.
	                if (isInner) {
	                    var flags = _bvhNodes.getFlags(nodeIdx);
	                    var reverseAxis = _frustum.viewDir[flags & 3] < 0 ? 1 : 0;
	                    var firstChild = flags >> 2 & 1;
	                    var transparent = flags >> 3 & 1;
	                    var depthFirst = _bvhLIFO || _bvhOpaqueDone ? 1 : 0;
	                    var areaFirst = 0,areaSecond = 0;

	                    // For opaque objects, use the screen size to sort the two children,
	                    // or front to back order (back to front for transparent objects).
	                    if (_bvhPrioritizeScreenSize && !_bvhOpaqueDone) {

	                        //If traversing based on visible screen area, we have to
	                        //compute the area for each child and insert them into
	                        //the queue accordingly.

	                        firstIdx = child + firstChild;
	                        secondIdx = child + 1 - firstChild;

	                        _bvhNodes.getBoxThree(firstIdx, _tmpBox);
	                        _bvhNodeAreas[firstIdx] = areaFirst = _frustum.projectedArea(_tmpBox);
	                        _bvhNodes.getBoxThree(secondIdx, _tmpBox);
	                        _bvhNodeAreas[secondIdx] = areaSecond = _frustum.projectedArea(_tmpBox);

	                        // "worst case" containment is recorded for later examination.
	                        _bvhContainment[firstIdx] = _bvhContainment[secondIdx] = intersects;

	                        // Insert each node in the right place based on screen area,
	                        // so that the queue (or stack, if LIFO traversal) is kept sorted
	                        // at every step of the way.
	                        // Note that with LIFO, for example, the larger object is put last on
	                        // the list (a stack), since we want to pop this one off first.
	                        if (areaFirst > 0)
	                        insertNode(firstIdx);

	                        if (areaSecond > 0)
	                        insertNode(secondIdx);
	                    } else {

	                        //Traversal by view direction.

	                        //Reverse order if looking in the negative of the child split axis
	                        //Reverse order if we are traversing last first
	                        //If node contains transparent objects, then reverse the result so we traverse back to front.
	                        //In other words, reverse the order if an odd number of flags are true.
	                        if (reverseAxis ^ depthFirst ^ transparent)
	                        firstChild = 1 - firstChild;

	                        firstIdx = child + firstChild;
	                        secondIdx = child + 1 - firstChild;

	                        _bvhNodeQueue[_bvhTail++] = firstIdx;
	                        _bvhNodeAreas[firstIdx] = -1; //TODO: This has to be something based on camera distance
	                        //so that we can draw transparent back to front when multiple models are mixed

	                        _bvhNodeQueue[_bvhTail++] = secondIdx;
	                        _bvhNodeAreas[secondIdx] = -1;

	                        // "worst case" containment is recorded for later examination.
	                        _bvhContainment[firstIdx] = _bvhContainment[secondIdx] = intersects;
	                    }

	                }

	                // Are there graphics in the node? Then return its scene, i.e. its RenderBatch.
	                // Inner nodes with children can and do have render batches of their own.
	                // This works against a pure screen=area or front-to-back ordering, as
	                // these fragments will always get returned first, before further traversal of the tree.
	                var prims = _bvhNodes.getPrimCount(nodeIdx);
	                if (prims !== 0) {
	                    var scene = _bvhScenes[nodeIdx];

	                    scene.renderImportance = _frustum.projectedArea(scene.boundingBox);

	                    //NOTE: Frustum culling for the RenderBatch is done in
	                    //RenderBatch.applyVisibility, so we don't need it here.
	                    //Just return the batch and it will get cull checked later.
	                    //TODO: May be we want to move the check to here, but then the linear iterator will also need to start checking.
	                    /*
	                     var whichBox = (_drawMode === RENDER_HIDDEN) ? scene.boundingBoxHidden : scene.boundingBox;
	                       //If the geometry is attached to an inner node and we know
	                     //it's not fully contained, we can narrow down the intersection
	                     //by checking the box of just the inner node's geometry.
	                     //The check for the node box itself also includes the children so it could be bigger.
	                     if (intersects !== CONTAINS && isInner)
	                     intersects = _frustum.intersectsBox(whichBox);
	                       //Turn off frustum culling for the batch if it's fully contained
	                     scene.frustumCulled = (intersects !== globals.CONTAINS);
	                       if (intersects !== globals.OUTSIDE)
	                     return scene;
	                     */




	                    return scene;
	                }
	            }

	            if (!_bvhOpaqueDone && !_bvhOpaqueSkipped && _bvhHead === _bvhTail) {
	                //If we are done with the opaque nodes, queue the transparent ones
	                //before processing the contents of the last opaque node
	                _bvhNodeQueue[_bvhTail++] = 1; //root of transparent subtree is at index 1
	                _bvhOpaqueDone = true;
	            }

	        }

	        //var time1 = Date.now();
	        //var msg = "BVH traversal time: " + (time1 - _time0);
	        //console.log(msg);
	        _done = true;
	        return null;
	    };

	    this.skipOpaqueShapes = function () {
	        if (!_bvhOpaqueDone && !_bvhOpaqueSkipped) {
	            // start traversal of transparent hierarchy
	            _bvhHead = 0;
	            _bvhTail = 0;
	            _bvhNodeQueue[_bvhTail++] = 1; //root of transparent subtree is at index 1
	            _bvhOpaqueSkipped = true;
	        }
	    };

	    function updateBVHRec(nodeIdx) {

	        var child = _bvhNodes.getLeftChild(nodeIdx);

	        if (child !== -1) {
	            updateBVHRec(child);
	            updateBVHRec(child + 1);
	        }

	        _tmpBox.makeEmpty();

	        if (child !== -1) {
	            _bvhNodes.getBoxThree(child, _tmpBox2);
	            _tmpBox.union(_tmpBox2);

	            _bvhNodes.getBoxThree(child + 1, _tmpBox2);
	            _tmpBox.union(_tmpBox2);
	        }

	        var prims = _bvhNodes.getPrimCount(nodeIdx);
	        if (prims) {
	            _tmpBox.union(_bvhScenes[nodeIdx].boundingBox);
	            _tmpBox.union(_bvhScenes[nodeIdx].boundingBoxHidden);
	        }

	        _bvhNodes.setBoxThree(nodeIdx, _tmpBox);
	    }

	    this.getVisibleBounds = function (visibleBounds, visibleBoundsWithHidden) {

	        for (var i = 0; i < _bvhScenes.length; i++) {

	            var s = _bvhScenes[i];

	            if (!s)
	            continue;

	            s.calculateBounds();

	            visibleBounds.union(s.boundingBox);

	            visibleBoundsWithHidden.union(s.boundingBox);
	            visibleBoundsWithHidden.union(s.boundingBoxHidden);
	        }

	        //Also update all bounding volume tree nodes' bounds.
	        //If objects move too much this will make the BVH less effective.
	        //However, this only happens during explode or animation, so it shouldn't
	        //be an issue. We can always rebuild the BVH in case objects really move a lot.
	        updateBVHRec(0); //opaque root
	        updateBVHRec(1); //transparent root

	    };

	    this.rayCast = function (raycaster, intersects, dbIdFilter) {

	        var nodeStack = [1, 0];
	        var pt = new THREE.Vector3();

	        while (nodeStack.length) {
	            var nodeIdx = nodeStack.pop();

	            _bvhNodes.getBoxThree(nodeIdx, _tmpBox);

	            // Expand bounding box a bit, to take into account axis aligned lines
	            _tmpBox.expandByScalar(0.5);
	            var xPt = raycaster.ray.intersectBox(_tmpBox, pt);

	            if (xPt === null)
	            continue;

	            var child = _bvhNodes.getLeftChild(nodeIdx);
	            if (child !== -1) {
	                nodeStack.push(child);
	                nodeStack.push(child + 1);
	            }

	            var prims = _bvhNodes.getPrimCount(nodeIdx);
	            if (prims !== 0) {
	                var scene = _bvhScenes[nodeIdx];
	                scene.raycast(raycaster, intersects, dbIdFilter);
	            }
	        }

	    };
	    /*
	           this.getRenderProgress = function() {
	               return _renderCounter / _bvhScenes.length;
	           };
	       */
	    this.getSceneCount = function () {
	        return _bvhScenes.length;
	    };

	    this.getGeomScenes = function () {
	        return _bvhScenes;
	    };

	    this.done = function () {
	        return _done;
	    };

	}

	module.exports = ModelIteratorBVH;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var FrustumIntersector = __webpack_require__(109).FrustumIntersector;

	//TODO: This file is in the process of being refactored into three parts: RenderModel, ModelIteratorBVH and ModelIteratorLinear
	//Please keep this in mind when making changes here

	/**
	 * RenderScene
	 * Represents the full graphical scene.
	 * Used for iterating through the scene for progressive rendering,
	 * hit testing, etc.
	 * @constructor
	 * */
	function RenderScene() {

	    var _needsRender = false; // if true, scene needs a re-render due to a paging-failure in last render traversal

	    var _done = false; // true indicates that progressive rendering has finished 
	    // since last reset call, i.e. all batches have been traversed.

	    var _renderCounter = 0; // counts RenderBatches processed so far in the current render traversal.


	    var _models = []; // {RenderModel[]} - All RenderModels to be rendered.
	    var _candidateScenes = []; // {RenderBatch[]} - _candidateScenes[i] points to the next batch to be rendered from _models[i]. Same length as _models.
	    var _previousScenes = []; // {RenderBatch[]} - _previousScenes[i] points to the previous batch rendered from _models[i]. Same length as _models.
	    var _tmpBox = new THREE.Box3(); // Reused for return values of getVisibleBounds() 

	    var _hiddenModels = []; // {RenderModel[]} - All models that are currently loaded, but excluded from rendering/selection etc.

	    var _frustum = new FrustumIntersector(); // updated for current camera in this.reset().
	    var _raycaster = new THREE.Raycaster();

	    var _frameStamp = 0; // increased with each render traversal restart
	    var _perf = performance; // shortcut to browser-provided performance object
	    var _prevPagingStatus = globals.PAGEOUT_NONE;

	    // During motion, we usually restart rendering at any frame, i.e. a frame is never resumed. When setting this
	    // option, we exploit this to render transparent shapes earlier. (and skip less important opaque ones)
	    this.enableNonResumableFrames = false;

	    // Determines how much of the render budget is reserved for transparent shapes.
	    // E.g., a value of 0.1 means that 10% of the render budget is spent for transparent shapes.
	    this.budgetForTransparent = 0.1;

	    // If true, we assume the current frame not to be resumed and
	    // render some transparent shapes before the opaque ones are done.
	    var _frameWillNotBeResumed = false;

	    // If _frameWillNotBeResumed is true, this array collects transparent scenes and renders them
	    // back-to-front at the end of a frame.
	    var _transparentScenes = []; // {THREE.Scene|RenderBatch}[]

	    // needed for back-to-front sorting of transparent objects (see renderTransparentScenes)
	    var _camera = null;


	    this.frustum = function () {
	        return _frustum;
	    };

	    this.addModel = function (renderModel) {
	        _models.push(renderModel);
	        _candidateScenes.length = _models.length;
	        _previousScenes.length = _models.length;
	    };

	    this.removeModel = function (renderModel) {
	        var idx = _models.indexOf(renderModel);
	        if (idx >= 0) {
	            _models.splice(idx, 1);
	        }
	        _candidateScenes.length = _models.length;
	        _previousScenes.length = _models.length;
	        return idx >= 0;
	    };

	    this.isEmpty = function () {
	        return _models.length === 0;
	    };

	    this.needsRender = function () {
	        return _needsRender;
	    };
	    this.resetNeedsRender = function () {
	        _needsRender = false;
	    };

	    /**
	        *  For each sub-scene, keep a running average of how long it took to render over the
	        *  last few frames.
	        *   @param {THREE.Scene|RenderBatch} scene
	        *   @param {number}                  frameTime - last measured rendering time in ms
	        */
	    function updateAvgFrameTime(scene, frameTime) {
	        if (scene.avgFrameTime === undefined)
	        scene.avgFrameTime = frameTime;else
	        {
	            scene.avgFrameTime = 0.8 * scene.avgFrameTime + 0.2 * frameTime;
	        }
	    }

	    /**
	       *  Renders transparent scenes in back-to-front order.
	       *
	       *  @param {RenderCB}      renderObjectsCB - Called for each element of the scenes array
	       *  @param {UnifiedCamera} camera
	       *  @param {RenderBatch[]} scenes          - Array of RenderBatches (or THREE.Scene with .boundingBox property)
	       */
	    function renderTransparentScenes(scenes, camera, renderObjectCB) {

	        // compute camera distance for each scene
	        for (var i = 0; i < scenes.length; i++) {
	            var scene = scenes[i];
	            scene.cameraDistance = scene.boundingBox.distanceToPoint(camera.position);
	        }

	        // sort by decreasing camera distance
	        var sortOrder = function sortOrder(a, b) {
	            return b.cameraDistance - a.cameraDistance;
	        };
	        scenes.sort(sortOrder);

	        // render each scene and update average frame time
	        var t0 = performance.now();
	        for (var i = 0; i < scenes.length; i++) {

	            // render scene
	            var scene = scenes[i];
	            renderObjectCB(scene);

	            // measure elapsed time
	            var t1 = performance.now();
	            var delta = t1 - t0;
	            t0 = t1;

	            // track average frame time
	            updateAvgFrameTime(scene, delta);
	        }
	    }

	    /**
	       * Indicates if the current traversal is done with the assumption that this frame will not be resumed.
	       *  @returns {boolean}
	       */
	    this.frameResumePossible = function () {
	        return !_frameWillNotBeResumed;
	    };

	    /**
	         * Incrementally render some meshes until we run out of time.
	         *  @param {RenderCB} cb            - Called that does the actual rendering. Called for each RenderBatch to be rendered.
	         *  @param {number}   timeRemaining - Time in milliseconds that can be spend in this function call.
	         *  @returns {number} Remaining time left after the call. Usually <=0.0 if the frame could not be fully finished yet.
	         * 
	         * @callback RenderScene~RenderCB
	         * @param {RenderBatch} scene
	         */
	    this.renderSome = function (renderObjectCB, timeRemaining) {

	        var t0 = _perf.now(),t1;

	        //If the render queue is just starting to render
	        //we will remember how many items we draw on the first pass
	        //and keep drawing the same number of items on subsequent first passes,
	        //until we get to a second renderSome pass. This is to make sure that
	        //while moving the camera in a single motion, the number of items we draw
	        //does not vary, which causes some ugly flashing -- because the render time
	        //per item varies a little from frame to frame.
	        var isBeginFrame = _renderCounter === 0;

	        // reserve some time for transparent shapes.
	        var timeForTransparent = this.budgetForTransparent * timeRemaining;

	        // repeat until time budget is consumed...
	        while (1) {

	            //Find the best candidate render batch to render now -- in case
	            //there are multiple models.
	            //TODO: In case a huge number of models is loaded, we may have to
	            //rethink the linear loop below and use some priority heap or somesuch.
	            var candidateIdx = 0;
	            var scene = null;
	            for (var iq = 0; iq < _candidateScenes.length; iq++) {

	                // candidate is the next RenderBatch to be processed from _models[q] 
	                var candidate = _candidateScenes[iq];
	                var model = _models[iq];
	                if (!candidate)
	                _candidateScenes[iq] = candidate = model.nextBatch();

	                // If the camera is in motion and the time for opaque scenes is over, continue with transparent shapes.
	                var skipOpaque = _frameWillNotBeResumed && timeRemaining < timeForTransparent;
	                if (skipOpaque) {

	                    // check if the next candidate is still an opaque one. Note that the .sortObjects
	                    // flag indicates whether a RenderBatch contains transparent objects.
	                    var isOpaque = candidate && !candidate.sortObjects;

	                    if (isOpaque) {
	                        // skip current candidate and use the first available transparent scene instead
	                        model.skipOpaqueShapes();
	                        candidate = model.nextBatch();
	                    }
	                }

	                if (candidate === null) {
	                    // No more batches to render from this model
	                    continue;
	                }

	                // If all previous candidates were null, _candidateScenes[q] is obviously the best one so far.
	                if (!scene) {
	                    candidateIdx = iq;
	                    scene = candidate;
	                }

	                // Choose current candidate only if its renderImportance is higher.
	                // The renderImportance of RenderBatches is set by model iterators.
	                if (candidate.renderImportance > scene.renderImportance) {
	                    candidateIdx = iq;
	                    scene = candidate;
	                }
	            }

	            // Render the batch we chose above and determine whether to continue the loop
	            if (scene) {
	                // If this is a 2d scene, with onDemandLoading, then we need to
	                // worry about skipping buffers in draw order.
	                if (_models[candidateIdx].is2d() && _models[candidateIdx].getFragmentList() &&
	                _models[candidateIdx].getFragmentList().onDemandLoadingEnabled()) {
	                    var previousScene = _previousScenes[candidateIdx];
	                    // drawOrderRender keeps track of where fragments were drawn out
	                    // of order. If previous buffers drew fragments out of order, then
	                    // all fragments in the buffer are out of order, so we mark the
	                    // out of order position at the start of the scene. Otherwise mark
	                    // the out of order at the end of the scene, where it may be
	                    // modified by RenderBatchLess.forEach. 
	                    scene.drawOrderRender = previousScene && previousScene.drawOrderRender < previousScene.lastItem ?
	                    scene.start : scene.lastItem;
	                    _previousScenes[candidateIdx] = scene;
	                }
	                //Fetch a new render batch from the model that we took the
	                //current batch from.
	                _candidateScenes[candidateIdx] = _models[candidateIdx].nextBatch();

	                // track how many batches we processed in the current traversal.
	                _renderCounter++;

	                // If we are in a non-resumable frame, we try to get the most important ones of opaque and
	                // transparent scenes. Therefore, the traversal of transparent scenes will also be ordered
	                // by decreasing priority just like for opaque ones. For correct rendering, however,
	                // we cannot render them directly here. Instead, we must collect them first and render them
	                // back-to-front at the end of the function.
	                if (scene.sortObjects && _frameWillNotBeResumed) {

	                    // defer to the end of the frame
	                    _transparentScenes.push(scene);

	                    // reserve frame time based on past rendering times. Just for the very first use,
	                    // we use an initial guess value as fallback.
	                    timeRemaining -= scene.avgFrameTime === undefined ? 0.05 : scene.avgFrameTime;

	                } else {

	                    // do the actual rendering
	                    renderObjectCB(scene);
	                    if (scene.hasOwnProperty("drawEnd"))
	                    scene.drawEnd = scene.lastItem;

	                    // get time that we spent for rendering of the last batch
	                    t1 = _perf.now();
	                    var delta = t1 - t0; // in milliseconds
	                    t0 = t1;

	                    //For each sub-scene, keep a running average
	                    //of how long it took to render over the
	                    //last few frames.
	                    updateAvgFrameTime(scene, delta);

	                    // update remaining time
	                    // Note that we don't do accurate timing here, but compute with average values instead.
	                    // In this way, the number of rendered batches is more consistent across different frames
	                    timeRemaining -= scene.avgFrameTime;
	                }

	                if (_models[candidateIdx].getFragmentList() && _models[candidateIdx].getFragmentList().onDemandLoadingEnabled()) {
	                    var start = scene.start,end = scene.lastItem;
	                    var vizflags = _models[candidateIdx].getFragmentList().vizflags;
	                    var indices = scene.getIndices();
	                    var idx;
	                    while (start < end) {
	                        idx = indices ? indices[start] : start;
	                        if (vizflags[idx] & globals.MESH_DRAWN)
	                        vizflags[idx] = (vizflags[idx] | globals.MESH_TRAVERSED) & ~globals.MESH_DRAWN;
	                        ++start;
	                    }
	                }

	                // Check if we should exit the loop...
	                if (timeRemaining <= 0) {
	                    break;
	                }

	            } else {
	                // No more batches => Frame rendering finished, if all models are loaded
	                // While 2d models are loading we don't consider them done. This means
	                // that the model iterators and loaders can't add a batch to their
	                // scene list, until the batch is filled.
	                _done = true;
	                for (var i = 0; i < _models.length; ++i) {
	                    var model = _models[i];
	                    if (model && model.is2d() && !model.isLoadDone() && !model.getFragmentList().onDemandLoadingEnabled()) {
	                        _done = false;
	                        break;
	                    }
	                }
	                break;
	            }
	        }

	        // Don't quite work on multiple models yet, so now only do paging update on whatever first model.
	        // ??? Some possible ways of improving this, 
	        // ??? 1. always do paging on the biggest one according to fragments count.
	        // ??? 2. or can try to paging equal percentage of geometry from each model until the totally number below the limit.
	        // ??? 
	        var pagingStatus = _models[0].frameUpdatePaging(isBeginFrame);
	        if (_prevPagingStatus != pagingStatus || _models[0].needResumeNextFrame()) {
	            _needsRender = true;
	            _prevPagingStatus = pagingStatus;
	        }

	        // Render some deferred transparent shapes (_transparentShapes). Note that this array will
	        // usually be empty if _frameWillNotBeResumed is false
	        if (_transparentScenes.length > 0) {

	            renderTransparentScenes(_transparentScenes, _camera, renderObjectCB);

	            // all scenes processed. Clear array.
	            _transparentScenes.length = 0;
	        }

	        return timeRemaining;
	    };


	    /** Resets the scene traversal 
	        *   @param  {UnifiedCamera} 
	        *   @param  {number}        drawMode - E.g., globals.RENDER_NORMAL. See Viewer3DImpl.js
	        *   @param  {bool}          moved    - Must be set to true if scene or camera have changed. see RenderModel.resetIterator
	        */
	    this.reset = function (camera, drawMode, moved) {
	        _frameStamp++;
	        _done = false;

	        _renderCounter = 0;
	        this.resetNeedsRender();

	        //Calculate the viewing frustum
	        //TODO: same math is done in the renderer also. We could unify
	        _frustum.reset(camera);
	        _frustum.areaCullThreshold = globals.PIXEL_CULLING_THRESHOLD;

	        if (!_models.length)
	        return;

	        // If the camera is in-motion, we assume the frame not to be resumed. This allows us to render transparent shapes
	        // earlier. This special treatment is only used/needed for the main scene pass.
	        _frameWillNotBeResumed = this.enableNonResumableFrames && moved && drawMode === globals.RENDER_NORMAL;

	        _camera = camera;

	        //Begin the frustum based scene iteration process per model.
	        //A "Model" is all the objects to display. There's typically one model in a scene, so length is 1. 
	        for (var i = 0; i < _models.length; i++) {
	            // decide what iterator to use, usually the BVH iterator
	            _models[i].resetIterator(camera, _frustum, drawMode, moved);
	            // get the first RenderBatch (some set of fragments) to render.
	            _candidateScenes[i] = _models[i].nextBatch();
	            _previousScenes[i] = null;
	        }
	    };


	    this.isDone = function () {
	        return _done || this.isEmpty();
	    };

	    // Visibility and highlighting methods: see RenderModel.js for details.

	    this.setAllVisibility = function (value) {
	        for (var i = 0; i < _models.length; i++) {
	            _models[i].setAllVisibility(value);}
	    };

	    this.hideLines = function (hide) {
	        for (var i = 0; i < _models.length; i++) {
	            _models[i].hideLines(hide);}
	    };

	    this.hidePoints = function (hide) {
	        for (var i = 0; i < _models.length; i++) {
	            _models[i].hidePoints(hide);}
	    };

	    this.hasHighlighted = function () {
	        for (var i = 0; i < _models.length; i++) {
	            if (_models[i].hasHighlighted())
	            return true;}

	        return false;
	    };

	    this.areAllVisible = function () {
	        for (var i = 0; i < _models.length; i++) {
	            if (!_models[i].areAllVisible())
	            return false;}

	        return true;
	    };

	    /** Trigger bbox recomputation. See RenderModel.js for details. */
	    this.invalidateVisibleBounds = function () {
	        for (var i = 0; i < _models.length; i++) {
	            _models[i].visibleBoundsDirty = true;}
	    };

	    /**
	       * @param:  {bool}        includeGhosted
	       * @returns {THREE.Box3} 
	       *
	       * NOTE: The returned box object is always the same, i.e. later calls
	       *       affect previously returned values. E.g., for
	       *        var box1 = getVisibleBounds(true);
	       *        var box2 = getVisibleBounds(false);
	       *       the second call would also change box1.
	       */
	    this.getVisibleBounds = function (includeGhosted) {
	        if (_models.length === 1)
	        return _models[0].getVisibleBounds(includeGhosted);

	        _tmpBox.makeEmpty();
	        for (var i = 0; i < _models.length; i++) {
	            _tmpBox.union(_models[i].getVisibleBounds(includeGhosted));}

	        return _tmpBox;
	    };

	    this.findModel = function (modelId) {
	        for (var i = 0; i < _models.length; i++) {
	            if (_models[i].getModelId() === modelId)
	            return _models[i];}

	        return null;
	    };

	    /**
	        * @param {THREE.Vector3} position            - Ray origin.
	        * @param {THREE.Vector3} direction           - Ray direction.
	        * @param {bool}          [ignoreTransparent] - Shoot trough transparent objects.
	        * @param {number[]}      [dbIds]             - Optional filter of fragments to be considered for testing. see RenderModel.rayIntersect().
	        *
	        * @returns {Object|null} Intersection result obect (see RenderModel.rayIntersect)
	        */
	    // Add "meshes" parameter, after we get meshes of the object using id buffer,
	    // then we just need to ray intersect this object instead of all objects of the model.
	    this.rayIntersect = function (position, direction, ignoreTransparent, dbIds, modelIds) {

	        // init raycaster
	        _raycaster.set(position, direction);

	        // For multiple RenderModels, perform raytest on each of them and find the closest one.
	        if (_models.length > 1) {

	            // Collect raytest result objects from each 3D model
	            var modelHits = [];

	            if (modelIds) {
	                for (var i = 0; i < modelIds.length; i++) {
	                    var model = this.findModel(modelIds[i]);
	                    if (model) {
	                        model.rayIntersect(_raycaster, ignoreTransparent, [dbIds[i]]);
	                    }
	                }
	            } else {
	                for (var i = 0; i < _models.length; i++) {

	                    // Skip 2D models
	                    if (_models[i].is2d())
	                    continue;

	                    // Perform raytest on model i                        
	                    var res = _models[i].rayIntersect(_raycaster, ignoreTransparent, dbIds);
	                    if (res)
	                    modelHits.push(res);
	                }
	            }

	            if (!modelHits.length)
	            return null;

	            // return closest hit
	            modelHits.sort(function (a, b) {return a.distance - b.distance;});
	            return modelHits[0];

	        } else {
	            // If we don't have any 3D RenderModel, just return null.
	            if (!_models.length || _models[0].is2d())
	            return null;

	            // If we only have a single 3D RenderModel, just call rayIntersect() on it.
	            return _models[0].rayIntersect(_raycaster, ignoreTransparent, dbIds);
	        }
	    };

	    /**
	        *  Progress of current frame rendering. 
	        *  @returns {number} Value in [0,1], where 1 means finished.
	        */
	    this.getRenderProgress = function () {
	        return _models[0].getRenderProgress();
	    };

	    /** @returns {RenderModel[]} */
	    this.getModels = function () {
	        return _models;
	    };

	    /** @returns {RenderModel[]} */
	    this.getHiddenModels = function () {
	        return _hiddenModels;
	    };

	    // ----------------------------
	    // Warning: The methods in the section below assume that there is exactly one RenderModel.
	    //          They will ignore any additional models and cause an exception if the model list is empty.
	    // 

	    // Direct access to FragmentList, GeometryList, and total number of RenderBatches.
	    //
	    // Note: 
	    //  - The methods do only care for model 0 and ignore any additional ones.
	    //  - Will cause an error when called if the RenderModel array is empty.
	    this.getFragmentList = function () {
	        return _models[0].getFragmentList();
	    };
	    this.getGeometryList = function () {
	        return _models[0].getGeometryList();
	    };
	    this.getSceneCount = function () {
	        return _models[0].getSceneCount();
	    };

	    //Used by ground shadow update
	    //TODO: we need to allow multiple iterators over the render queue        
	    this.getGeomScenes = function () {
	        // Note that ground shadow will currently only work on RenderModel 0.
	        return _models[0].getGeomScenes();
	    };

	    /** Used by SvfLoader to decide which fragments to load next.  */
	    this.geomPacksMissingLastFrame = function () {
	        return _models[0].geomPacksMissingLastFrame();
	    };

	    // ---------------- End of section of functions without support for multiple RenderModels

	    /** Sets animation transforms for all fragments to create an "exploded view": Each fragment is displaced  
	      * away from the model bbox center, so that you can distuinguish separate components. 
	      *
	      * If the model data provides a model hierarchy (given via model.getData().instanceTree), it is also considered for the displacement.
	      * In this case, we recursively shift each object away from the center of its parent node's bbox. 
	      *
	      * @param {number} scale - In [0,1]. 0 means no displacement (= reset animation transforms). 
	      *                                   1 means maximum displacement, where the shift distance of an object varies 
	      *                                   depending on distance to model center and hierarchy level.
	      */
	    this.explode = function (scale) {

	        if (!_models.length)
	        return;

	        var pt = new THREE.Vector3();

	        for (var q = 0; q < _models.length; q++) {

	            var model = _models[q];

	            var it = model.getData().instanceTree;

	            var fragList = model.getFragmentList();

	            var mc = model.getVisibleBounds(true).center();


	            //Input scale is in the range 0-1, where 0
	            //means no displacement, and 1 maximum reasonable displacement.
	            scale *= 2;

	            //If we have a full part hierarchy we can use a
	            //better grouping strategy when exploding
	            if (it && it.nodeAccess.nodeBoxes && scale !== 0) {

	                // If scale is small (close to 0), the shift is only applied to the topmost levels of the hierarchy.
	                // With increasing s, we involve more and more hierarchy levels, i.e., children are recursively shifted 
	                // away from their parent node centers.
	                // Since explodeValue is integer, it will behave discontinous during a transition from s=0 to s=1.
	                // To keep the overall transition continuous, we use the fractional part of scaledExplodeDepth
	                // to smoothly fade-in the transition at each hierarchy level. 

	                // levels beyond explodeDepth, we stop shifting children away from their parent.
	                // 
	                var scaledExplodeDepth = scale * (it.maxDepth - 1) + 1;
	                var explodeDepth = 0 | scaledExplodeDepth;
	                var currentSegmentFraction = scaledExplodeDepth - explodeDepth;

	                var tmpBox = new Float32Array(6);

	                // Define recursive function to traverse object hierarchy. Each object is shifted away 
	                // from the bbox center of its parent.
	                //  number nodeId:   dbId of the current instanceTree node
	                //  int depth:       tracks hierarchy level (0 for root)
	                //  vec3 (cx,cy,cz): center of the parent object (after applying the displacement to the parent object) 
	                //  vec3 (ox,oy,oz): accumuled displacement from all parents on the path to root
	                (function explodeRec(nodeId, depth, cx, cy, cz, ox, oy, oz) {

	                    var oscale = scale * 2; //TODO: also possibly related to depth
	                    if (depth == explodeDepth)
	                    oscale *= currentSegmentFraction; //smooth transition of this tree depth from non-exploded to exploded state

	                    // get bbox center of this node
	                    it.getNodeBox(nodeId, tmpBox);
	                    var mycx = 0.5 * (tmpBox[0] + tmpBox[3]);
	                    var mycy = 0.5 * (tmpBox[1] + tmpBox[4]);
	                    var mycz = 0.5 * (tmpBox[2] + tmpBox[5]);

	                    // The root node (depth==0) has no parent to shift away from.
	                    // For child nodes with level > explodDepth, we don't apply additional displacement anymore - just pass the displacement of the parents.
	                    if (depth > 0 && depth <= explodeDepth) {
	                        // add displacement to move this object away from its parent's bbox center (cx, cy, cz)
	                        var dx = (mycx - cx) * oscale;
	                        var dy = (mycy - cy) * oscale;
	                        var dz = (mycz - cz) * oscale;

	                        //var omax = Math.max(dx, Math.max(dy, dz));
	                        // sum up offsets: The final displacement of a node is accumulated by its own shift and 
	                        // the shifts of all nodes up to the root.
	                        ox += dx;
	                        oy += dy;
	                        oz += dz;
	                    }

	                    // continue recursion with child objects (if any)
	                    it.enumNodeChildren(nodeId, function (dbId) {
	                        explodeRec(dbId, depth + 1, mycx, mycy, mycz, ox, oy, oz);
	                    }, false);

	                    pt.x = ox;
	                    pt.y = oy;
	                    pt.z = oz;

	                    // set translation as anim transform for all fragments associated with the current node
	                    it.enumNodeFragments(nodeId, function (fragId) {

	                        fragList.updateAnimTransform(fragId, null, null, pt);

	                    }, false);

	                })(it.getRootId(), 0, mc.x, mc.y, mc.x, 0, 0, 0); // run on root to start recursion
	            } else
	            {
	                // Float32Array array with 6 floats per bbox.
	                var boxes = fragList.fragments.boxes;

	                for (var i = 0, iEnd = fragList.getCount(); i < iEnd; i++) {

	                    if (scale == 0) {
	                        // reset to unexploded state, i.e., remove all animation transforms
	                        fragList.updateAnimTransform(i);

	                    } else {

	                        // get start index of the bbox for fragment i. 
	                        var box_offset = i * 6;

	                        // get bbox center of fragment i
	                        var cx = 0.5 * (boxes[box_offset] + boxes[box_offset + 3]);
	                        var cy = 0.5 * (boxes[box_offset + 1] + boxes[box_offset + 4]);
	                        var cz = 0.5 * (boxes[box_offset + 2] + boxes[box_offset + 5]);

	                        // compute translation vector for this fragment:
	                        // We shift the fragment's bbox center c=(cx,cy,cz) away from the overall model center mc,
	                        // so that the distance between the two will finally be scaled up by a factor of (1.0 + scale).
	                        //
	                        pt.x = scale * (cx - mc.x);
	                        pt.y = scale * (cy - mc.y);
	                        pt.z = scale * (cz - mc.z);

	                        fragList.updateAnimTransform(i, null, null, pt);
	                    }
	                }
	            }

	        }

	        this.invalidateVisibleBounds();

	    };

	    /** 
	        *  @params  {number} timeStamp
	        *  @returns {bool}   true if any of the models needs a redraw
	        */
	    this.update = function (timeStamp) {

	        // call update for all RenderModels and track
	        // if any of these needs a redraw
	        var needsRedraw = false;
	        for (var q = 0; q < _models.length; q++) {
	            var model = _models[q];
	            needsRedraw = needsRedraw || model.update(timeStamp);
	        }
	        return needsRedraw;
	    };

	    /*
	        *  Move model from visible models to hidden models
	        *   @param {number} modelId - id of a currently visible model
	        *   @returns {bool} true on success
	        */
	    this.hideModel = function (modelId) {

	        // find model in the list of visible ones
	        for (var i = 0; i < _models.length; i++) {
	            var model = _models[i];
	            if (model && model.id === modelId) {
	                // move model from visible to hidden models
	                this.removeModel(model);
	                _hiddenModels.push(model);
	                return true;
	            }
	        }
	        // modelID does not refer to any visible model
	        return false;
	    };

	    /*
	        * Move previously hidden model to the array of rendered models.
	        *  @param {number} modelId - id of a RenderModel in hiddenModels array
	        *  @returns {bool} true on success
	        */
	    this.showModel = function (modelId) {

	        // find model in list of hidden models
	        for (var i = 0; i < _hiddenModels.length; ++i) {
	            var model = _hiddenModels[i];
	            if (model && model.id === modelId) {
	                // mode model from hidden to visible models
	                this.addModel(model);
	                _hiddenModels.splice(i, 1);
	                return true;
	            }
	        }
	        // modelId does not refer to a hidden model
	        return false;
	    };
	}


	module.exports = RenderScene;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);

	//Encapsulates frustum-box intersection logic
	function FrustumIntersector() {
	    this.frustum = new THREE.Frustum();
	    this.viewProj = new THREE.Matrix4();
	    this.viewDir = [0, 0, 1];
	    this.ar = 1.0;
	    this.viewport = new THREE.Vector3(1, 1, 1);
	    this.areaConv = 1;
	    this.areaCullThreshold = 1; // The pixel size of the object projected on screen, will be culled if less than this value.
	}

	FrustumIntersector.prototype.reset = function (camera) {
	    this.viewProj.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
	    this.frustum.setFromMatrix(this.viewProj);
	    var vm = camera.matrixWorldInverse.elements;
	    this.ar = camera.aspect;
	    this.viewDir[0] = -vm[2];
	    this.viewDir[1] = -vm[6];
	    this.viewDir[2] = -vm[10];
	    this.areaConv = camera.clientWidth * camera.clientHeight / 4;
	};

	FrustumIntersector.prototype.projectedArea = function () {

	    var points;
	    var tmpBox;

	    function init_three() {
	        if (!points) {
	            points = [
	            new THREE.Vector3(),
	            new THREE.Vector3(),
	            new THREE.Vector3(),
	            new THREE.Vector3(),
	            new THREE.Vector3(),
	            new THREE.Vector3(),
	            new THREE.Vector3(),
	            new THREE.Vector3()];

	            tmpBox = new THREE.Box2();
	        }
	    }

	    function applyProjection(p, m) {

	        var x = p.x,y = p.y,z = p.z;
	        var e = m.elements;

	        var w = e[3] * x + e[7] * y + e[11] * z + e[15];

	        //This is the difference between this function and
	        //the normal THREE.Vector3.applyProjection. We avoid
	        //inverting the positions of point behind the camera,
	        //otherwise our screen area computation can result in
	        //boxes getting clipped out when they are in fact partially visible.
	        if (w < 0)
	        w = -w;

	        var d = 1.0 / w;

	        p.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * d;
	        p.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * d;

	        //We also don't need the Z
	        //p.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * d;
	    }

	    return function (box) {

	        init_three();

	        if (box.empty())
	        return 0;

	        var matrix = this.viewProj;

	        // NOTE: I am using a binary pattern to specify all 2^3 combinations below
	        points[0].set(box.min.x, box.min.y, box.min.z); // 000
	        points[1].set(box.min.x, box.min.y, box.max.z); // 001
	        points[2].set(box.min.x, box.max.y, box.min.z); // 010
	        points[3].set(box.min.x, box.max.y, box.max.z); // 011
	        points[4].set(box.max.x, box.min.y, box.min.z); // 100
	        points[5].set(box.max.x, box.min.y, box.max.z); // 101
	        points[6].set(box.max.x, box.max.y, box.min.z); // 110
	        points[7].set(box.max.x, box.max.y, box.max.z); // 111

	        for (var i = 0; i < 8; i++) {
	            applyProjection(points[i], matrix);}

	        tmpBox.makeEmpty();
	        tmpBox.setFromPoints(points);

	        // Clamp both min and max value between [-1.0, 1.0]
	        if (tmpBox.min.x < -1.0)
	        tmpBox.min.x = -1.0;
	        if (tmpBox.min.x > 1.0)
	        tmpBox.min.x = 1.0;
	        if (tmpBox.min.y < -1.0)
	        tmpBox.min.y = -1.0;
	        if (tmpBox.min.y > 1.0)
	        tmpBox.min.y = 1.0;

	        if (tmpBox.max.x > 1.0)
	        tmpBox.max.x = 1.0;
	        if (tmpBox.max.x < -1.0)
	        tmpBox.max.x = -1.0;
	        if (tmpBox.max.y > 1.0)
	        tmpBox.max.y = 1.0;
	        if (tmpBox.max.y < -1.0)
	        tmpBox.max.y = -1.0;

	        return (tmpBox.max.x - tmpBox.min.x) * (tmpBox.max.y - tmpBox.min.y);
	    };

	}();

	FrustumIntersector.prototype.estimateDepth = function (bbox) {

	    var e = this.viewProj.elements;

	    // Take center of box and find its distance from the eye.
	    var x = (bbox.min.x + bbox.max.x) / 2.0;
	    var y = (bbox.min.y + bbox.max.y) / 2.0;
	    var z = (bbox.min.z + bbox.max.z) / 2.0;

	    var w = e[3] * x + e[7] * y + e[11] * z + e[15];

	    var d = 1.0 / (e[3] * x + e[7] * y + e[11] * z + e[15]);

	    return (e[2] * x + e[6] * y + e[10] * z + e[14]) * d;

	};


	FrustumIntersector.prototype.intersectsBox = function () {

	    //Copied from three.js and modified to return separate
	    //value for full containment versus intersection.
	    //Return values: 0 -> outside, 1 -> intersects, 2 -> contains
	    var p1, p2;

	    function init_three() {
	        if (!p1) {
	            p1 = new THREE.Vector3();
	            p2 = new THREE.Vector3();
	        }
	    }

	    return function (box) {

	        init_three();

	        var planes = this.frustum.planes;
	        var contained = 0;

	        for (var i = 0; i < 6; i++) {

	            var plane = planes[i];

	            p1.x = plane.normal.x > 0 ? box.min.x : box.max.x;
	            p2.x = plane.normal.x > 0 ? box.max.x : box.min.x;
	            p1.y = plane.normal.y > 0 ? box.min.y : box.max.y;
	            p2.y = plane.normal.y > 0 ? box.max.y : box.min.y;
	            p1.z = plane.normal.z > 0 ? box.min.z : box.max.z;
	            p2.z = plane.normal.z > 0 ? box.max.z : box.min.z;

	            var d1 = plane.distanceToPoint(p1);
	            var d2 = plane.distanceToPoint(p2);

	            // if both outside plane, no intersection

	            if (d1 < 0 && d2 < 0) {

	                return globals.OUTSIDE;

	            }

	            if (d1 > 0 && d2 > 0) {

	                contained++;

	            }
	        }

	        return contained == 6 ? globals.CONTAINS : globals.INTERSECTS;
	    };


	}();

	module.exports = {
	    FrustumIntersector: FrustumIntersector };

/***/ },
/* 110 */
/***/ function(module, exports) {

	"use strict"; /**
	               * Maintains a sorted list of objects or values. 
	               * If objects are used, less must be a function(a,b) that 
	               * defines an order on all objects. 
	               * 
	               * It is valid to add multiple object that are equal wrt. to less operator.
	               *
	               * @constructor
	               */
	var SortedList = function SortedList(less) {

	    // use custom or default less operator    
	    var _less = less ? less : function (a, b) {return a < b;};

	    // all inserted objects, not sorted
	    var _values = [];

	    // array of indices into values, sorted by less operator
	    var _orderIndices = [];

	    // Returns an index to the first element in this.orderIndices that points to
	    // an object o that is greater or equal than the given value, i.e. !less(o, value)
	    // If no such object is found, it returns the range end index.
	    function binarySearch(
	    value, // object to search for
	    rangeBegin, // int: define range in this.orderIndices. highEnd is exclusive
	    rangeEnd // 
	    ) {
	        // use full array by default
	        if (!rangeBegin) rangeBegin = 0;
	        if (!rangeEnd) rangeEnd = _orderIndices.length;

	        // handle empty range
	        if (rangeBegin >= rangeEnd) {
	            return rangeEnd;
	        }

	        // simple case: range contains just a single value
	        if (rangeEnd === rangeBegin + 1) {

	            // get only elem in this range
	            var elem = _values[_orderIndices[rangeBegin]];

	            if (_less(elem, value)) {
	                // object is still smaller. 
	                return rangeEnd;
	            } else {
	                return rangeBegin;
	            }
	        }

	        // split range in the middle
	        var mid = parseInt(rangeBegin + (rangeEnd - rangeBegin) / 2);

	        // Note: mid-1 is always valid, because the rangeLength is always >2 when reaching this

	        // get last value of lower half-range
	        var lowerRangeMax = _values[_orderIndices[mid - 1]];

	        if (_less(value, lowerRangeMax)) {
	            // max of lower range is already greater => result index must be in the lower half
	            return binarySearch(value, rangeBegin, mid);
	        } else if (_less(lowerRangeMax, value)) {
	            // evenl lower-range max is still smaller => mid object must be in the upper range
	            return binarySearch(value, mid, rangeEnd);
	        } else {
	            // last object in the lower range is identical with value
	            return mid - 1;
	        }
	    };

	    this.add = function (val) {

	        // find index into this.orderIndices that points to the last
	        // object with identical or lower value.
	        var index = binarySearch(val);

	        if (index == _orderIndices.length) {
	            // value is not in the list yet and is larger than all values so far
	            // => append order index 
	            _values.push(val);
	            _orderIndices.push(_values.length - 1);
	            return;
	        }

	        // append new object and insert sort index at the right position
	        _values.push(val);
	        _orderIndices.splice(index, 0, _values.length - 1);
	    };

	    this.size = function () {return _orderIndices.length;};

	    // enables to traverse by ascending order using indices 0,...,size()-1
	    this.get = function (index) {
	        return _values[_orderIndices[index]];
	    };

	    // removes the element at the given index in 0,...,size()-1.
	    // Note that the index of an object may vary when inserting others,
	    // because the indices are defined via the sorting order.
	    // E.g., removeAt(0) removes the smallest value.
	    this.removeAt = function (i) {
	        var index = _orderIndices[i];

	        // remove value at index. Note that the indexing of this.values
	        // must not be changed, because our sort-indices would become invalid.
	        _values[index] = undefined;

	        // remove order index 
	        _orderIndices.splice(i, 1);
	    };

	    // returns a string that enumerates all values.
	    // (only works for numeric values)
	    this.toString = function () {
	        var string = "";
	        for (var i = 0, iEnd = this.size(); i < iEnd; ++i) {
	            string += this.get(i);
	            if (i < iEnd - 1) string += ", ";
	        }
	        return string;
	    };
	};

	module.exports = SortedList;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var GeometryList = __webpack_require__(74);
	var FragmentList = __webpack_require__(105).FragmentList;
	var RenderBatch = __webpack_require__(76);
	var consolidateFragmentList = __webpack_require__(104);
	var ConsolidationIterator = __webpack_require__(106);
	var ModelIteratorLinear = __webpack_require__(102);
	var ModelIteratorBVH = __webpack_require__(107);
	var ModelIteratorTexQuad = __webpack_require__(112).ModelIteratorTexQuad;
	var VBIntersector = __webpack_require__(73);

	// TODO: move the logic that decides whether or not to stream somewhere closer to SVF;
	// Ideally, RenderModel and GeometryList should be agnostic to the file format.
	/*
	 * Helper function to determine whether we should enable streamingDraw or upload the whole model to GPU.
	 *
	 * This function uses values from an SVF package to estimate the expected GPU load. If it is
	 * small enough, it returns false. This means that the whole model is uploaded to GPU.
	 *
	 * If the model size is larger or unknown, we use a heuristic to determine which models are uploaded
	 * to GPU and which are rendered from CPU-memory using the (slower) streamingDraw.
	 *  @param {number} packFileTotalSize
	 *  @param {number} numPrimitives
	 *  @param {number} numObjects
	 */
	function needsStreamingDraw(packFileTotalSize, numPrimitives, numObjects) {
	    if (packFileTotalSize) {
	        //In pack files, primitive indices use 4 byte integers,
	        //while we use 2 byte integers for rendering, so make this
	        //correction when estimating GPU usage for geometry
	        var estimatedGPUMem = packFileTotalSize - numPrimitives * 3 * 2;

	        //If the model is certain to be below a certain size,
	        //we will skip the heuristics that upload some meshes to
	        //GPU and keep other in system mem, and just push it all to the GPU.
	        if (estimatedGPUMem <= globals.GPU_MEMORY_LIMIT && numObjects < globals.GPU_OBJECT_LIMIT) {
	            // We don't need streaming draw - model is small enough
	            return false;
	        }
	    }

	    return true;
	};

	// Counter to assign individual numbers to RenderModel in order of their creation
	var nextModelId = 1;

	/** @class Extends application Model class by functionality for WebGL rendering.
	                      *         Currently produced by loaders (F2DLoader, SvfLoader)
	                      *
	                      *  @constructor
	                      */
	function RenderModel() {
	    var _this = this;

	    // Cached bboxes.
	    var _visibleBounds = new THREE.Box3(); // excluding ghosted once
	    var _visibleBoundsWithHidden = new THREE.Box3(); // full bbox
	    var _tmpBox = new THREE.Box3(); // temp for internal use

	    this.visibleBoundsDirty = false; // triggers recomputation of _visibleBounds and _visibleBoundsWithHidden, e.g., if fragment visibility changes.
	    this.enforceBvh = false; // currently ignored, see this.resetIterator()

	    var _numHighlighted = 0; // number of currently highlighted fragments.    

	    this.id = nextModelId++; // use next free Model id

	    var _geoms = null; // {GeometryList} 
	    var _frags = null; // {FragmentList}

	    // Iterators used for scene traversal. 
	    var _linearIterator = null; // {ModelIteratorLinear}, used by default and created in this.initialize()
	    var _bvhIterator = null; // {ModelIteratorBVH},    used if setBVH() has been called and no new fragments have been added since then.
	    var _iterator = null; // currently used iterator. points to one of the iterators above

	    // Only used for consolidated models.
	    var _consolidationIterator = null; // {ConsolidationIterator}
	    var _consolidationMap = null; // cached intermediate results of consolidation pre-processing. Enables to quickly rebuild
	    // _consolidationIterator when we had to temporarily remove it to free memory.

	    // Maintained per scene traversal, initialized in ResetIterator()
	    var _renderCounter = 0; // number of batches rendered since last resetIterator() call. Used to indicate rendering progress for progressive rendering.
	    var _frustum = null; // {FrustumIntersector}. Assigned in this.ResetIterator(). Passed to RenderBatches for culling and depth-sorting. 
	    var _drawMode = globals.RENDER_NORMAL; // drawMode used in this traversal. See Viewer3DImpl.js
	    var _bvhOn = false; // true when using _bvhiterator in the current traversal. [HB:] Shouldn't this better be local variable in ResetIterator()?


	    // Paging variables maintained per scene traversal:
	    var _pageOutGeomCount = 0; // number of geometries paged out within the current traversal
	    var _pageOutStatus = globals.PAGEOUT_NONE; // always PAGEOUT_NONE when starting to draw. During traveral, it may change to
	    //  - PAGEOUT_SUCCESS: if any geometry has been paged out
	    //  - PAGEOUT_FAIL:    geometry has been paged out, but not enough yet.


	    // Note: GeometryList or FragmentList are maintained by the RenderModel and should not be modified from outside.
	    //       E.g., setting visibility or highlighting flags on FragmentList directly would break some state tracking. (e.g. see this.setVibility or this.setHighlighted)
	    //       The only current exception is done by loaders that add geometry to _geoms directly.
	    this.getGeometryList = function () {return _geoms;};
	    this.getFragmentList = function () {return _frags;};
	    this.getModelId = function () {return this.id;};

	    /**
	                                                     *  @param {Object} [pagingProxy] - Object used to manage memory and paging
	                                                     */
	    this.initialize = function (pagingProxy) {
	        // alloc GeometryList. Initially empty, but exposed via GetGeometryList().
	        // The loaders use this to add LmvGeometryBuffers directly to the GeometryList later.
	        // TODO: Make RenderModel agnostic to the SVF file format.
	        var svf = this.getData();
	        var numObjects = svf.numGeoms || 0;
	        var disableStreaming = !needsStreamingDraw(svf.packFileTotalSize, svf.primitiveCount, numObjects);
	        _geoms = new GeometryList(numObjects, this.is2d(), disableStreaming);

	        _frags = new FragmentList(this, pagingProxy);

	        var initialBbox = this.getBoundingBox();
	        if (initialBbox) {
	            _visibleBounds.copy(initialBbox);
	            _visibleBoundsWithHidden.copy(initialBbox);
	        }

	        _iterator = _linearIterator = new ModelIteratorLinear(this);
	    };

	    /**
	        * Initialize from custom iterator. In this case, _geoms and _frags are not used and the 
	        * iterator implementation is responsible for producing and maintaining the geometry.
	        *
	        *  @param {ModelIterator} iterator - iterator.nextBatch may return RenderBatch or THREE.Scene instances.
	        *
	        * Note: When using a custom iterator, per-fragment visiblity is not supported.
	        */
	    this.initFromCustomIterator = function (iterator) {
	        _iterator = iterator;
	        this.visibleBoundsDirty = true; // make sure that bbox is obtained from iterator
	    };

	    /** 
	        *  Deletes all GPU resources.
	        *
	        *  @param {FireflyWebGLRenderer} glRenderer
	        */
	    this.dtor = function (glrenderer) {
	        if (_frags) {
	            _frags.dispose(glrenderer);
	        }
	        // Custom iterators may have own GPU resources (see ModelIteratorTexQuad)
	        if (_iterator && _iterator.dtor) {
	            _iterator.dtor();
	        }
	        // If this model was consolidated, dispose GPU memory of consolidation as well
	        if (_consolidationIterator) {
	            _consolidationIterator.dispose();
	        }
	    };


	    /** 
	        * Activating a fragment means:
	        *  - Store geometry in the FragmentList
	        *  - Update summed RenderModel boxes
	        *  - Add fragment to iterator, so that it is considered in next traversal
	        * See FragmentList.setMesh(..) for param details.
	        *
	        * Note:
	        *  - Can only be used with LinearIterator
	        */
	    this.activateFragment = function (fragId, meshInfo, overrideTransform) {
	        if (!_frags) {
	            return;
	        }

	        _frags.setMesh(fragId, meshInfo, overrideTransform);

	        //The linear iterator can be updated to add meshes incrementally.
	        //The BVH iterator is not mutable, yet.
	        _iterator.addFragment(fragId);

	        //update the world bbox
	        {
	            _frags.getWorldBounds(fragId, _tmpBox);
	            _visibleBounds.union(_tmpBox);
	            _visibleBoundsWithHidden.union(_tmpBox);
	        }

	    };

	    // Used by the Fusion collaboration client
	    this.setFragment = function (fragId, mesh) {

	        if (fragId === undefined)
	        fragId = this.getFragmentList().getNextAvailableFragmentId();

	        _frags.setMesh(fragId, mesh, true);

	        //The linear iterator can be updated to add meshes incrementally.
	        //The BVH iterator is not mutable, yet.
	        if (_linearIterator)
	        _linearIterator.addFragment(fragId);
	        if (_bvhIterator && !_frags.fragmentsHaveBeenAdded())
	        _bvhIterator.addFragment(fragId);

	        //update the world bbox
	        {
	            _frags.getWorldBounds(fragId, _tmpBox);
	            _visibleBounds.union(_tmpBox);
	            _visibleBoundsWithHidden.union(_tmpBox);
	        }

	        return fragId;
	    };


	    /** Replaces the default LinearIterator by a BVH iterator. */
	    this.setBVH = function (nodes, primitives, options) {

	        // Note that ResetIterator() might still set _iterator back to 
	        // the linear one if the BVH one cannot be used.
	        _iterator = _bvhIterator = new ModelIteratorBVH();

	        _iterator.initialize(this, nodes, primitives, options);

	    };

	    /** 
	        *  Starts the scene draw traversal, so that nextBatch() will return the first batch to render.
	        *   @param: {UnifiedCamera}      camera   - camera.position was needed for the heuristic to choose between linear iterator and BVH.
	        *                                           [HB:] The code is currently outcommented, so the param is currently unused.
	        *   @param: {FrustumIntersector} frustum  - used by RenderBatches for frustum culling and z-sorting.
	        *   @param: {number}             drawMode - E.g., RENDER_NORMAL. See Viewer3DImpl.js
	        *   @param: {bool}               [moved]  - Must be set to true if scene or camera have changed. When using paging, this 
	        *                                           will discard any outdated information about which meshes are currently culled etc.
	        */
	    this.resetIterator = function (camera, frustum, drawMode, moved) {

	        _pageOutGeomCount = 0;

	        // If scene/camera has changed, we have to rebuild some data that we collected for paging, because the set of currently 
	        // needed fragments may change.
	        // Note that frags will be null when using a custom iterator. In this case, this
	        // paging-related code is not used and can be skipped.
	        if (moved) {

	            if (_frags && _frags.onDemandLoadingEnabled()) {

	                // reset MESH_TRAVERSED flag 
	                _frags.setFlagGlobal(globals.MESH_TRAVERSED, false);

	            }

	            if (_frags && _frags.pageOutGeometryEnabled()) {
	                // restart tracking of paging status
	                _pageOutStatus = globals.PAGEOUT_NONE;

	                // reset lists of culled and traversed geometry
	                _frags.traversedGeom.length = 0;
	                _frags.culledGeom.length = 0;
	                _frags.pagingProxy && _frags.pagingProxy.reset();

	                var i, len;
	                // Reset each render batch visible stats
	                var scenes = _iterator.getGeomScenes();
	                len = scenes.length;
	                for (i = 0; i < len; i++) {
	                    var scene = scenes[i];
	                    if (scene && scene.resetVisStatus) {
	                        scene.resetVisStatus();
	                    }
	                }
	            }

	        }

	        //Decide whether to use the BVH for traversal
	        //If we are far out from the scene, use pure big-to-small
	        //importance order instead of front to back.
	        _bvhOn = false;
	        if (_bvhIterator && !_frags.fragmentsHaveBeenAdded()) {
	            //TODO: BVH always on when available, because the linear iteration
	            //does not respect transparent objects drawing last -- it just
	            //draws in the order the fragments come in the SVF package
	            /*
	                if(this.enforceBvh || !_linearIterator) {
	                    _bvhOn = true;
	                } else {
	                    var diag = _visibleBoundsWithHidden.size().length();
	                    var center = _visibleBoundsWithHidden.center();
	                    var dist = camera.position.distanceTo(center);
	                    if (dist < diag * 0.5)
	                        _bvhOn = true;
	                }
	                */
	            _bvhOn = true;
	        }

	        // Note _linearIterator may also be null if a custom iterator is used.
	        // in this case, we must leave _iterator unchanged.
	        if (_bvhOn) {
	            _iterator = _bvhIterator;
	        } else if (_linearIterator) {
	            _iterator = _linearIterator;
	        }

	        _renderCounter = 0;
	        _drawMode = drawMode;
	        _frustum = frustum;
	        _iterator.reset(frustum, camera);

	        // notify consolidation iterator that a new traversal has started
	        if (_consolidationIterator) {
	            _consolidationIterator.reset();
	        }
	        return _iterator;
	    };



	    // Used for accumulating geom pack IDs that were needed in this frame, but were not in memory.
	    function fragIdCallback(fragId) {
	        var packId = _this.getFragmentList().fragments.packIds[fragId];

	        if (_frags.pagingProxy) {
	            _frags.pagingProxy.addGeomPackMissingLastFrame(packId);
	        }

	    }

	    /** Returns the next RenderBatch for scene rendering travseral. Used in RenderScene.renderSome().
	       *   Use this.resetIterator() to start traversal first.
	       *
	       *   @returns {RenderBatch|null} Next batch to render or null if traversal is finished.
	       */
	    this.nextBatch = function () {

	        // If the next batch of the iterator is fully invisble, we inc it until we 
	        // find a relevant batch to render or reach the end.
	        while (1) {
	            // get next batch from iterator
	            var scene = _iterator.nextBatch();

	            // update render progress counter
	            _renderCounter++;

	            // stop if iterator reached the end           
	            if (!scene)
	            return null;

	            // replace RenderBatch (= individual fragments) by consolidated scene, if available
	            if (_consolidationIterator && scene instanceof RenderBatch) {
	                scene = _consolidationIterator.consolidateNextBatch(scene, _frustum);
	            }

	            if (scene instanceof THREE.Scene) {
	                // The code for fragment visibility and sorting is only defined if scene is a RenderBatch.
	                // For the case of THREE.Scene, we are done here, because
	                //   - Sorting in THREE.Scene is done by FireFlyRenderer.
	                //   - Per-fragment visiblity is not supported in this case
	                return scene;
	            }

	            // If visible stats undefined or its -1, means always apply visibility check.
	            if (scene.visibleStats === undefined || scene.visibleStats == -1) {

	                //TODO: move this into the iterator?
	                var allHidden = scene.applyVisibility(
	                _drawMode,
	                _frustum,
	                this.getFragmentList().fragments.packIds ? fragIdCallback : function () {});
	                if (scene.visibleStats !== undefined) {
	                    scene.visibleStats = allHidden ? 0 : 1;
	                }

	                // For 3D scenes, sort fragments of this batch. 
	                // Note that fragments of F2D scenes must be drawn in original order.
	                //TODO: Move this to the iterator?
	                if (!allHidden && !this.is2d()) {
	                    //Generally opaque batches are sorted once by material, while
	                    //transparent batches are sorted back to front each frame
	                    if (scene.sortObjects && !this.getFragmentList().useThreeMesh)
	                    scene.sortByDepth(_frustum);else
	                    if (!scene.sortDone)
	                    scene.sortByMaterial();
	                }

	            } else
	            {
	                allHidden = scene.visibleStats == 0;
	            }

	            if (!allHidden)
	            return scene;
	        }
	    };

	    /**
	        * @param:  {bool}        includeGhosted
	        * @returns {THREE.Box3} 
	        *
	        * NOTE: The returned box is just a pointer to a member, not a copy!
	        */
	    this.getVisibleBounds = function (includeGhosted) {

	        if (this.visibleBoundsDirty) {

	            _visibleBounds.makeEmpty();
	            _visibleBoundsWithHidden.makeEmpty();

	            _iterator.getVisibleBounds(_visibleBounds, _visibleBoundsWithHidden, includeGhosted);


	            this.visibleBoundsDirty = false;

	        }

	        return includeGhosted ? _visibleBoundsWithHidden : _visibleBounds;
	    };


	    /**
	        * Performs a raytest and returns an object providing information about the closest hit. 
	        * 
	        * NOTE: We currently ignore hitpoints of fragments that are visible (MESH_VISIBLE==true) and not highlighted (MESH_HIGHLIGHTED==false). 
	        *
	        * @param {THREE.RayCaster} raycaster
	        * @param [bool]            ignoreTransparent 
	        * @param {number[]}       [dbIds]             - Array of dbIds. If specified, only fragments with dbIds inside the filter are checked.
	        *                                                If the model data has no instanceTree, this is just a whitelist of explicit fragment ids.
	        *                                                Note that a hitpoint will also be returned if it's actually occluded by a fragment outside the filter.
	        *
	        * @returns {Object|null}   Intersection result object r providing information about closest hit point. Properties:
	        *                           - {number}   fragId
	        *                           - {Vector3}  point
	        *                           - {number}   dbId
	        *                           - {model}    model - pointer to this RenderModel
	        *                          (created/filled in VBIntersector.js, see for details)
	        */
	    // Add "meshes" parameter, after we get meshes of the object using id buffer,
	    // then we just need to ray intersect this object instead of all objects of the model.
	    this.rayIntersect = function (raycaster, ignoreTransparent, dbIds) {

	        // make sure that the cached overall bboxes are up-to-date.
	        // [HB:] Why are they updated here, but not used in this method?
	        if (this.visibleBoundsDirty)
	        this.getVisibleBounds();

	        // alloc array to collect intersection results
	        var intersects = [];
	        var i;

	        // Restrict search to certain dbIds if specified...
	        if (dbIds && dbIds.length > 0) {

	            //Collect the mesh fragments for the given database ID node filter.
	            var it = this.getInstanceTree();
	            var fragIds = [];
	            if (it) {
	                for (i = 0; i < dbIds.length; i++) {
	                    it.enumNodeFragments(dbIds[i], function (fragId) {
	                        fragIds.push(fragId);
	                    }, true);
	                }
	            } else {
	                //No instance tree -- treat dbIds as fragIds
	                fragIds = dbIds;
	            }

	            //If there are multiple fragments it pays to still use
	            //the bounding volume hierarchy to do the intersection,
	            //because it can cull away entire fragments by bounding box,
	            //instead of checking every single fragment triangle by triangle
	            if (fragIds.length > 2) {//2 is just an arbitrary value, assuming checking 2 fragments is still cheap than full tree traversal
	                _iterator.rayCast(raycaster, intersects, dbIds);
	            } else {
	                // The filter restricted the search to a very small number of fragments.
	                // => Perform raytest on these fragments directly instead.
	                for (i = 0; i < fragIds.length; i++) {
	                    var mesh = _frags.getVizmesh(fragIds[i]);
	                    if (!mesh)
	                    continue;
	                    var res = VBIntersector.rayCast(mesh, raycaster, intersects);
	                    if (res) {
	                        intersects.push(res);
	                    }
	                }
	            }

	        } else {
	            // no filter => perform raytest on all fragments
	            _iterator.rayCast(raycaster, intersects);
	        }

	        // stop here if no hit was found
	        if (!intersects.length)
	        return null;

	        // sort results by distance. 
	        intersects.sort(function (a, b) {return a.distance - b.distance;});

	        //pick the nearest object that is visible as the selected.
	        var result;
	        for (i = 0; i < intersects.length; i++) {
	            var fragId = intersects[i].fragId;

	            //skip past f2d consolidated meshes.
	            //TODO: we should completely avoid intersecting those in the ray caster.
	            if (this.is2d())
	            continue;

	            var isVisible = this.isFragVisible(fragId); //visible set,

	            // [HB:] Since we skip all meshes that are not flagged as visible, shouldn't we 
	            //       better exclude them from the raycast in the first place?
	            if (isVisible) {

	                // skip transparent hits if specified
	                var material = _frags.getMaterial(fragId);
	                if (ignoreTransparent && material.transparent)
	                continue;

	                result = intersects[i];

	                // check against cutplanes
	                var isCut = false;
	                var intersectPoint = intersects[i].point;
	                if (material.cutplanes) {
	                    for (var j = 0; j < material.cutplanes.length; j++) {
	                        isCut = isCut || material.cutplanes[j].dot(new THREE.Vector4(
	                        intersectPoint.x, intersectPoint.y, intersectPoint.z, 1.0)) >
	                        1e-6;
	                    }
	                }
	                if (isCut) {
	                    result = null;
	                } else
	                {
	                    // result is the closest hit that passed all tests => done.
	                    break;
	                }
	            }
	        }

	        // We might use multiple RenderModels => add this pointer as well.
	        if (result)
	        result.model = this;

	        return result;
	    };


	    /** Set highlighting flag for a fragment. 
	        *   @param   {number} fragId
	        *   @param   {bool}   value
	        *   @returns {bool}   indicates if flag state changed
	        */
	    this.setHighlighted = function (fragId, value) {
	        if (!_frags) {
	            return false;
	        }

	        var changed = _frags.setFlagFragment(fragId, globals.MESH_HIGHLIGHTED, value);

	        if (changed) {
	            if (value)
	            _numHighlighted++;else

	            _numHighlighted--;
	        }

	        return changed;
	    };

	    /** Sets MESH_VISIBLE flag for a fragment (true=visible, false=ghosted) */
	    // This function should probably not be called outside VisibityManager
	    // in order to maintain node visibility state.
	    this.setVisibility = function (fragId, value) {
	        if (_frags) {
	            _frags.setVisibility(fragId, value);
	            this.visibleBoundsDirty = true;
	        }
	    };

	    /** Sets MESH_VISIBLE flag for all fragments (true=visible, false=ghosted) */
	    this.setAllVisibility = function (value) {
	        if (_frags) {
	            _frags.setAllVisibility(value);
	            this.visibleBoundsDirty = true;
	        }
	    };

	    /** Sets the MESH_HIDE flag for all fragments that a flagged as line geometry. 
	        *  Note that the MESH_HIDE flag is independent of the MESH_VISIBLE flag (which switches between ghosted and fully visible) 
	        *
	        *  @param {bool} hide - value to which the MESH_HIDE flag will be set. Note that omitting this param would SHOW the lines, so
	        *                       that you should always provide it to avoid confusion.
	        */
	    this.hideLines = function (hide) {
	        if (_frags) {
	            _frags.hideLines(hide);
	        }
	    };

	    /** Sets the MESH_HIDE flag for all fragments that a flagged as point geometry. 
	        *  Note that the MESH_HIDE flag is independent of the MESH_VISIBLE flag (which switches between ghosted and fully visible) 
	        *
	        *  @param {bool} hide - value to which the MESH_HIDE flag will be set. Note that omitting this param would SHOW the points, so
	        *                       that you should always provide it to avoid confusion.
	        */
	    this.hidePoints = function (hide) {
	        if (_frags) {
	            _frags.hidePoints(hide);
	        }
	    };

	    /** Returns if one or more fragments are highlighed. 
	        *   returns {bool}
	        *
	        * Note: This method will only work correctly as long as all highlighting changes are done via this.setHighlighted, not on FragmentList directly.
	        */
	    this.hasHighlighted = function () {
	        return !!_numHighlighted;
	    };

	    /** Returns true if a fragment is tagged as MESH_VISIBLE and not as MESH_HIGHLIGHTED. */
	    // 
	    // [HB:] It's seems a bit unintuitive that the MESH_HIGHLIGHTED flag is checked here, but not considered by the other visibility-related methods.
	    //       For instance, consider the following scenarioes:
	    //        - After calling setVibility(frag, true), isFragVisible(frag) will still return false if frag was highlighed.
	    //        - If areAllVisible() returns true, there may still be fragments for which isFragVisible(frag) returns false.
	    this.isFragVisible = function (frag) {
	        return _frags.isFragVisible(frag);
	    };

	    /** Returns true if MESH_VISIBLE flag is set for all fragments. */
	    this.areAllVisible = function () {

	        // When using a custom iterator, we don't have per-fragment visibility control. 
	        // We assume constantly true in this case.
	        if (!_frags) {
	            return true;
	        }

	        return _frags.areAllVisible();
	    };
	    /*
	           this.getRenderProgress = function() {
	               return _iterator.getRenderProgress();
	           };
	       */

	    /** Direct access to all RenderBatches. Used by ground shadows and ground reflection.
	            * @returns {RenderBatch[]}
	            */
	    this.getGeomScenes = function () {return _iterator.getGeomScenes();};

	    /** Get progress of current rendering traversal.
	                                                                            *  @returns {number} in [0,1]
	                                                                            */
	    this.getRenderProgress = function () {
	        return _renderCounter / _iterator.getSceneCount();
	    };

	    /** Page geometry out if memory is under pressure. This method is internally
	        *  used by this.frameUpdatePaging() below. 
	        *   @param [bool] iterationDone - indicates whether the iteration is done or not.
	        *   @param [bool] forcePageOut  - By default, fragments can only be paged out if already traversed.
	        *                                 If forcePageOut is set, we also allow to page-out geometry 
	        *                                 of fragments that were not traversed yet.
	        *   @returns {number} pageState - Possible values:
	        *                                   PAGEOUT_SUCCESS: We paged out enough, so that the number 
	        *                                                        of geometries is within the limit.
	        *                                   PAGEOUT_FAIL:    Still exceeding the limit.
	        */
	    this.pageOutIfNeeded = function (iterationDone, forcePageOut) {

	        return _frags.pagingProxy ? _frags.pagingProxy.pageOut(iterationDone, forcePageOut, _geoms) : globals.PAGEOUT_NONE;
	    };

	    /** 
	        *  Triggers paging out of geometry if necessary.
	        * 
	        *  In each frame update, some more batches of the overall scene are rendered until time runs out. 
	        *  This function is called at the end of each such frame update to page out stuff if needed.
	        *  (see RenderScene.renderSome)
	        *
	        *   &param [bool] isBeginFrame - Indicates if the current frame update was the first one.
	        *                                TODO: isbeginFrame can be removed.
	        */
	    this.frameUpdatePaging = function (isBeginFrame) {

	        // Check if we should use paging.
	        var pagingEnabled = _frags && _frags.pageOutGeometryEnabled();
	        if (!pagingEnabled) {
	            return _pageOutStatus;
	        }

	        if (_pageOutStatus == globals.PAGEOUT_FAIL) {
	            // The last attempt at paging out failed, which means that
	            // a small part of the model get traversed, then let's wait until
	            // enough geometries are ready to recycle.
	            // ??? TODO: not sure whether this still needed.
	            // Only way to get here is if _frags.pagingProxy != null
	            var pcount = _frags.pagingProxy.options.geomCountLimit * _frags.pagingProxy.options.pageOutPercentage;
	            if (_frags.reachLimit &&
	            _frags.traversedGeom.length > pcount * 0.05) {
	                _pageOutStatus = this.pageOutIfNeeded(false);
	            } else
	            if (_frags.traversedGeom.length > pcount * 0.2) {
	                _pageOutStatus = this.pageOutIfNeeded(false);
	            }

	        } else
	        {
	            _pageOutStatus = this.pageOutIfNeeded(false);
	        }

	        // When scene rendering traversal is finished and we did not page out enough
	        // in the previous frame updates yet, do some final paging-out and make sure that it succeeds.
	        if (_iterator.done()) {
	            // We will give a last try of paging out,
	            // if still fail and traversed geometry is not empty, then will need another render.
	            // otherwise, need a hard page out no matter geometry get traversed or not.
	            _pageOutStatus = this.pageOutIfNeeded(true, false);
	            if (_pageOutStatus == globals.PAGEOUT_FAIL) {
	                _pageOutStatus = this.pageOutIfNeeded(true, true);
	            }
	        }

	        return _pageOutStatus;
	    };


	    /** Used by SvfLoader to decide which fragments to load next.
	        *  @returns {number[]} pack ids of all fragments that were missing in last frame.
	        */
	    this.geomPacksMissingLastFrame = function () {
	        return _frags && _frags.pagingProxy ? _frags.pagingProxy.geomPacksMissingLastFrame() : [];
	    };

	    /** Explicitly add the pack as missing from last frame. 
	        *  Used by SvfLoader to delay-load fragments for which on-demand-load failed because all workers
	        *  were busy.
	        *   &param {number} packId
	        */
	    this.addGeomPackMissingLastFrame = function (packId) {
	        return _frags && _frags.pagingProxy ? _frags.pagingProxy.addGeomPackMissingLastFrame(packId) : true;
	    };

	    this.needResumeNextFrame = function () {
	        return _frags && _frags.pagingProxy ? _frags.pagingProxy.needResumeNextFrame() : false;
	    };

	    /** 
	        *  @params  {number} timeStamp
	        *  @returns {bool}   true if the model needs a redraw
	        */
	    this.update = function (timeStamp) {
	        // if there is an iterator that implements update method...
	        if (_iterator && _iterator.update) {
	            return _iterator.update(timeStamp);
	        }
	        // assume constant scene otherwise
	        return false;
	    };


	    /** Highlight an object with a theming color that is blended with the original object's material.
	        *   @param {number}        dbId
	        *   @param {THREE.Vector4} themingColor (r, g, b, intensity), all in [0,1]
	        */
	    this.setThemingColor = function (dbId, color) {
	        if (_frags) {
	            _frags.setThemingColor(dbId, color);
	        } else {
	            THREE.warn("Theming colors are not supported by this model type.");
	        }
	    };

	    /** Revert all theming colors.
	        *   @param {number}        dbId
	        *   @param {THREE.Vector4} themingColor (r, g, b, intensity), all in [0,1]
	        */
	    this.clearThemingColors = function () {
	        if (_frags) {
	            _frags.clearThemingColors();
	        }
	    };

	    /** Access to leaflet-specific functionality. Returns null if RenderModel is no leaflet. */
	    this.getLeaflet = function () {
	        if (_iterator instanceof ModelIteratorTexQuad) {
	            return _iterator;
	        }
	        return null;
	    };

	    /**
	        * This function creates an internal copy of the FragmentList that is consolidated to reduce the
	        * shape count as far as possible. This takes more memory, but may strongly accelerate rendering
	        * for models with many small shapes.
	        *
	        * NOTE: For making consolidation effective, it should ideally be activated via the load options already.
	        *       This will automatically adjust the depth of the spatial hierarchy. Without that, the scene traversal
	        *       may still be slow and the performance gain much smaller.
	        *
	        * @param {MaterialManager} materials
	        * @param {number}          [byteLimit = 100 << 20} - Merging geometries is the most efficient technique in terms
	        *                                                    of rendering performance. But, it can strongly increase
	        *                                                    the memory consumption, particularly because merged
	        *                                                    geometry cannot be shared, i.e. multiple instances of
	        *                                                    a single geometry must be replicated per instance for merging.
	        *                                                    Therefore, the memory spent for merging is restricted.
	        *                                                    A higher value may make rendering faster, but increases (also GPU) memory
	        *                                                    workload.
	        * @param {FireFlyWebGLRenderer} glRenderer
	        */
	    this.consolidate = function (materials, byteLimit, glRenderer) {

	        // consolidate fragment list
	        var consolidation = consolidateFragmentList(_frags, materials, byteLimit, glRenderer, _consolidationMap);

	        // make BVHIterator use the consolidation when possible
	        _consolidationIterator = new ConsolidationIterator(_frags, consolidation);

	        // cache some intermediate results. Consolidations are memory-intensive, so it can be necessary to temporarily
	        // remove them to free memory. By caching intermediate results, we can rebuild them faster.
	        _consolidationMap = consolidation.consolidationMap;
	    };

	    /**
	        * Removes consolidation to free memory. Just some compact intermediate results are cached, so that the
	           * consolidation can be rebuilt quickly.
	           */
	    this.unconsolidate = function () {
	        if (!_consolidationIterator) {
	            return;
	        }

	        _consolidationIterator.dispose();
	        _consolidationIterator = null;
	    };

	    this.isConsolidated = function () {
	        return !!_consolidationIterator;
	    };

	    this.getConsolidation = function () {
	        return _consolidationIterator ? _consolidationIterator.getConsolidation() : null;
	    };

	    // Implementation expected to be provided by an inheriting class
	    this.getInstanceTree = function () {
	        throw 'Method has not been implemented';
	    };

	    // Implementation expected to be provided by an inheriting class
	    this.getBoundingBox = function () {
	        throw 'Method has not been implemented';
	    };

	    // Implementation expected to be provided by an inheriting class
	    this.is2d = function () {
	        throw 'Method has not been implemented';
	    };

	    /**
	        * This function is only needed if...
	        *
	        *   1. You want to draw a fragment to an overlay scene that overdraws the original fragment, and
	        *   2. Consolidation is used for this model.
	        *
	        *  To avoid flickering artifacts, the geometry used for the overlay scene must exactly match with the
	        *  one used for the main scene rendering. However, when consolidation is used, this geometry may vary
	        *  and (slightly) differ from the original fragment geometry.
	        *
	        *  This function updates the given render proxy to make it exactly match with the geometry used for the
	        *  the last main scene rendering. This involves to replace geometry, material, and matrix when necessary.
	        *
	        *  NOTE: An updated proxy can exclusively be used for rendering. Do not use this function if you want to
	        *        access any vertex data directly.
	        *
	        *   @param {THREE.Mesh} proxy  - currently used proxy mesh to represent the fragment
	        *   @param {Number}     fragId - fragment represented by this proxy */
	    this.updateRenderProxy = function (proxy, fragId) {

	        if (!_consolidationIterator) {
	            // nothing to do - rendering will always use the original geometry anyway.
	            return;
	        }

	        // fragment might be consolidated.
	        _consolidationIterator.updateRenderProxy(proxy, fragId);
	    };

	    this.skipOpaqueShapes = function () {
	        if (_iterator && _iterator.skipOpaqueShapes) {
	            _iterator.skipOpaqueShapes();
	        }
	    };
	}

	module.exports = RenderModel;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; //var THREE = require('THREE');
	var globals = __webpack_require__(75);
	var tc = __webpack_require__(113);
	var SortedList = __webpack_require__(110);

	var TileState_Missing = 0;
	var TileState_Loading = 1;
	var TileState_Loaded = 2;

	var TileInfo = function TileInfo(timeStamp, mesh) {

	    this.timeStamp = timeStamp; // {number} frame timeStamp of last usage 
	    this.mesh = mesh; // {THREE.Mesh}
	    this.state = TileState_Missing;
	};


	// @param {THREE.Vector3} p
	// @param {THREE.Vector3} bboxMin
	// @param {THREE.Vector3} bboxMax
	// @returns {Number} Squared distance of the bbox to p
	function point2BoxDistance2(p, boxMin, boxMax) {

	    // compute the point within bbox that is nearest to p by clamping against box
	    var nearest = p.clone();
	    nearest.max(boxMin);
	    nearest.min(boxMax);

	    // return squared length of the difference vector
	    return nearest.distanceToSquared(p);
	};

	// @param {THREE.Vector3} camPos
	// @param {THREE.Vector3} camDir - must be normalized
	// @param {THREE.Vector3} bboxMin
	// @param {THREE.Vector3} bboxMax
	// @returns {Number} Projected z-distance of a bbox from the camera
	function projectedBoxDistance(camPos, camDir, boxMin, boxMax) {
	    // compute the point within bbox that is nearest to p by clamping against box
	    var nearest = camPos.clone();
	    nearest.max(boxMin);
	    nearest.min(boxMax);

	    return nearest.sub(camPos).dot(camDir);
	}

	function TexQuadConfig() {
	    this.urlPattern = null; // string pattern for image URLs, e.g., http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg
	    this.tileSize = null; // in;  width/height of tile images (always squared) in pixels. E.g., 256
	    this.maxLevel = null; // int; maximum hierarchy level, e.g., 10    

	    this.textureLoader = null; // user-provided function for loading images

	    // texture extent at max resolution. Must be integer between 1 and 2^(maxLevel)
	    this.texWidth = 0;
	    this.texHeight = 0;

	    // Restrict number of tiles that are forced keep in memory at once. As a minimum, we only keep in memory
	    // what we need to display the currently visible tiles. Higher values allow to spend more memory
	    // on prefetching tiles.
	    this.maxActiveTiles = globals.isMobileDevice() ? 0 : 400;

	    // LRU cache size (given as max number of tiles)
	    this.cacheSize = globals.isMobileDevice() ? 0 : 150;

	    // {function()} optional callback that is triggered when the root image is loaded.
	    // This is used when loading single images (maxLevel=0), where we obtain texWidth, texHeight, and tileSize
	    // are obtained from the image dimensions.
	    this.onRootLoaded = null;

	    // In this code, root level 0 contains is defined as the largest miplevel for which whole image fits into a single tile. The translation service
	    // currently produces additional levels with smaller mipmaps of this single tiles, which we don't use here. E.g., the actual root tile of our hierarchy
	    // might be in a folder "9" instead of "0". Therefore, whenever we do image load requests, we add this level offset to the tile level to derive the image URL.
	    this.levelOffset = 0;

	    // On some devices, render targets may be larger than indicated by canvasWidth/canvasHeight. E.g., retina displays
	    // often have a pixelRatio of 2.0. To make full use of the available display resolution, pixelRatio should be
	    // set to the same value that is used by WebGLRenderer/RenderContext.
	    this.pixelRatio = 1.0;

	    this.getRootTileSize = function () {
	        // the root tile covers a squared pixel region of size tileSize * 2^maxLevel
	        return 1.0 * (this.tileSize << this.maxLevel);
	    };
	    this.getQuadWidth = function () {return 1.0 * this.texWidth / this.getRootTileSize();};
	    this.getQuadHeight = function () {return 1.0 * this.texHeight / this.getRootTileSize();};

	    /** @returns {LmvMatrix4} Converts from quad geometry coords to paper units. */
	    this.getPageToModelTransform = function (paperWidth, paperHeight) {

	        // scale from page to model units
	        var sx = paperWidth / this.getQuadWidth();
	        var sy = paperHeight / this.getQuadHeight();

	        return new LmvMatrix4(true).set(
	        sx, 0, 0, 0,
	        0, sy, 0, 0,
	        0, 0, 1, 0,
	        0, 0, 0, 1);

	    };

	    // The root tile corresponds to [0,1] in x/y. The actual image may be smaller.
	    this.getBBox = function () {

	        // the image dimensions determine which fraction of the root tile is actually used.
	        var quadWidth = this.getQuadWidth();
	        var quadHeight = this.getQuadHeight();

	        // If quadHeight is <1.0, it means that not the full root tile height is used by the image.
	        // Since pixel y and worldY directions are opposite, the unused part of the [0,1] region is at 
	        // the lower end of the y-range. 
	        var cropYShift = 1.0 - quadHeight;

	        return new THREE.Box3(new THREE.Vector3(0, cropYShift, 0), new THREE.Vector3(quadWidth, 1.0, 0.0));
	    };

	    this.valid = function () {
	        return typeof this.urlPattern == 'string' && this.urlPattern.length > 0 &&
	        typeof this.tileSize == 'number' && this.tileSize > 0 &&
	        typeof this.maxLevel == 'number' && this.maxLevel > 0 &&
	        typeof this.texWidth == 'number' && this.texWidth > 0 &&
	        typeof this.texHeight == 'number' && this.texHeight > 0;
	    };

	    /** Configures the iterator to display a single image file without leaflet hierarchy.
	        *  For this case, the image dimensions are not known in advance, but set as soon as 
	        *  the root tile is loaded. 
	        *   @params {string}     imagePath
	        *   @params {function()} [onImageLoaded] Called as soon as the root has been loaded and 
	        *                        the image dimensions are available.
	        */
	    this.initForSimpleImage = function (imagePath, onImageLoaded) {

	        // The urlPattern read from bubble may have been URL encoded.
	        // This can happen if the bubble comes from EMEA data center.
	        this.urlPattern = decodeURIComponent(imagePath);
	        this.maxLevel = 0;
	        this.levelOffset = 0;

	        // indicate that these values are not available yet.
	        // The iterator will set them based on the image extensions as soon as it is loaded
	        this.tileSize = -1;
	        this.texWidth = -1;
	        this.texHeight = -1;

	        // inform caller when actual extents are avaialble
	        this.onRootLoaded = onImageLoaded;
	    };

	    // Returns the required maxLevel for a given texture resolution.
	    // All params are int.
	    function computeMaxLevel(w, h, tileSize) {

	        // compute maxLevel that we would get for 1x1 resolution at level 0
	        var lx = Math.ceil(Math.log2(w));
	        var ly = Math.ceil(Math.log2(h));
	        var maxLevel = Math.max(lx, ly);

	        // since the actual root tile has tileSize x tileSize, we subtract the skipped levels.
	        return maxLevel - Math.log2(tileSize);
	    }

	    // If a maxLevel is specified that is smaller than the one that we computed for the given
	    // resolution, texWidth and texHeight must be set to the smaller resolution at this level.
	    function applyMaxLevel(config, actualMaxLevel, restrictedMaxLevel) {
	        var levelDiff = actualMaxLevel - restrictedMaxLevel;
	        if (levelDiff > 0) {
	            config.texWidth >>= levelDiff;
	            config.texHeight >>= levelDiff;
	            config.maxLevel = restrictedMaxLevel;
	        }
	    }

	    /** Extracts all required params from a given options dictionary.
	       * @param {string} urlPattern
	       * @param {Object} options Parameter dictionary
	       * @param {function} textureLoader User-provided function for loading image resources.
	       *   The function has the following signature: function(imageURL, onSuccess, onError).
	       *   In case of success, `onSuccess` callback should be called with the texture as a single argument.
	       *   In case of failure, `onError` callback should be called with a description of the error.
	       */
	    this.initFromLoadOptions = function (urlPattern, options, textureLoader) {

	        // The urlPattern read from bubble may have been URL encoded.
	        // This can happen if the bubble comes from EMEA data center.
	        this.urlPattern = decodeURIComponent(urlPattern);
	        this.textureLoader = textureLoader;

	        if (options) {
	            this.tileSize = options.tileSize;
	            this.maxLevel = computeMaxLevel(options.texWidth, options.texHeight, options.tileSize);
	            this.texWidth = options.texWidth;
	            this.texHeight = options.texHeight;
	            this.levelOffset = options.levelOffset;

	            // If maxLevel is specified, scale down texSize to the resolution at this level
	            if (typeof options.maxLevel == 'number') {
	                applyMaxLevel(this, this.maxLevel, options.maxLevel);
	            }

	            // allow to override default memory settings via load options
	            this.maxActiveTiles = options.maxActiveTiles || this.maxActiveTiles;
	            this.cacheSize = options.cacheSize || this.cacheSize;
	        }
	    };
	};

	/** @classDesc Produces a quad that is textured with a large image. 
	    *             The image is stored as a hierarchy of image tiles, where each tile is stored as a separate file (e.g. jpg or png).
	    *             Each hierarchy level represents a miplevel of the overall texture, subdivided into squared tiles 
	    *             of fixed size (e.g., 256 x 256). Level 0 contains a single tile that represents the whole texture as a single tile at lowest resolution.
	    *             At the leaf level n, the texture is represented at full resolution as a tile grid of up to (2^n x 2^n) tiles. 
	    *
	    *             Note that some tiles may be unused or cropped if the overall resolution is not squared and a pow2-multiple of the tilesize.
	    *             
	    * @class 
	    *   @param {TexQuadConfig}   config
	    *   @param {MaterialManager} materials
	    */
	function ModelIteratorTexQuad(config, materials) {

	    var _config = config;

	    // The bbox of the quad keeps the same, because it is independent on how we subdivide the quad geometry.
	    // However, for single images, its correct initialization will be deferred until the image is loaded.
	    var _bbox = config.getBBox();

	    // reused scene that we reconfigure on each iterator reset.
	    var _scene = new THREE.Scene();

	    // {MaterialManager}
	    var _materials = materials;

	    // This iterator returns only a single scene. Therefore, _done is set to false when on iteration start (this.reset()) 
	    // and set to true again after first call of nextBatch. 
	    var _done = true;

	    // array of TileInfos for all tiles that are currently available for rendering.
	    // caching of generated tiles. Tiles are addressed by int indices
	    // computed by tile2Index (see TileCoords.js)
	    var _tiles = [];

	    // increased with each iterator reset. used for LRU timestamps.
	    var _timeStamp = 0;

	    // for each update cycle, we track the number of tiles for which we updated the timeStamp.
	    // The purpose of this is to control the memory consumption, because all active tiles are
	    // kept in memory and protected from cache cleanup.
	    var _numActiveTiles = 0;

	    // used to limit the number of simultaneously loaded tiles
	    var _maxRequests = 5;
	    var _numRequests = 0; // currently running requests

	    // For each frame, limit the number of new textures that enter the scene.
	    // Otherwise, texture decode/upload in FireFlyRenderer may take too long.
	    var _maxTextureUpdatesPerFrame = 5;

	    // used to trigger redraw when new tiles are loaded
	    var _needsRedraw = false;

	    // each callback is called once when the scene is fully refined.
	    var _onRefinedCallbacks = [];

	    // Shared THREE.Geometry. A unit quad in xy plane with uv coords. Used for all tiles.
	    var _quadGeom = null;

	    // reused geometry for on-the-fly generated fallback tiles, which require individual uv-coords
	    // It would be better to share _quadGeom for these as well. But this is would require a solution
	    // first how we can use the same texture with different uvTransforms in a single frame.
	    var _reusedGeoms = []; // {THREE.Geometry}

	    // index to the first elem in _reusedGeoms that has not been used for the current frame yet.
	    var _nextFreeGeom = 0;

	    // get image resolution at a given hierarchy level. We have full resolution at maxLevel and reduce it by half with each level. 
	    function getMipmapWidth(level) {
	        var levelDiff = _config.maxLevel - level;
	        return _config.texWidth >> levelDiff;
	    }
	    function getMipmapHeight(level) {
	        var levelDiff = _config.maxLevel - level;
	        return _config.texHeight >> levelDiff;
	    }

	    // returns true if the pixel region of the tile is outside the given image dimensions.
	    //  @param {TileCoords} tile
	    //  @returns {bool}
	    function tileOutside(tile) {
	        // get dimensions
	        var levelWidth = getMipmapWidth(tile.level);
	        var levelHeight = getMipmapHeight(tile.level);

	        // compute minPixel of the tile's pixel region
	        var minPixelX = tile.x * _config.tileSize;
	        var minPixelY = tile.y * _config.tileSize;

	        return minPixelX >= levelWidth || minPixelY >= levelHeight;
	    }

	    // The width/height of a mipLevel cannot be assumed to be a multiple of tileSize. Therefore, tiles containing the image boundary 
	    // are cropped to the relevant pixels. E.g., the width of a boundary tile might be 500 while the tileSize is 512.
	    // Since the image is cropped, we have to scale down the geometry as well to avoid stretching. This function contains the scale
	    // factor in x/y to be applied to the geometry.
	    //
	    // @returns {THREE.Vector2} 
	    function getCropScale(tile) {
	        // get dimensions
	        var levelWidth = getMipmapWidth(tile.level);
	        var levelHeight = getMipmapHeight(tile.level);

	        // compute first minPixel covered by this tile
	        var minPixelX = tile.x * _config.tileSize;
	        var minPixelY = tile.y * _config.tileSize;

	        // crop tile to image dimensions
	        var croppedWidth = 1.0 * Math.max(0, Math.min(_config.tileSize, levelWidth - minPixelX));
	        var croppedHeight = 1.0 * Math.max(0, Math.min(_config.tileSize, levelHeight - minPixelY));

	        var ts = 1.0 * _config.tileSize;

	        return new THREE.Vector2(1.0 * croppedWidth / ts, croppedHeight / ts);
	    }

	    /** @returns {THREE.Scene|null} */
	    this.nextBatch = function () {

	        // first call since reset => return _scene 
	        if (!_done) {
	            _done = true;
	            return _scene;
	        }
	        return null;
	    };

	    this.getSceneCount = function () {
	        // TexQuadIterators are always rendered as a single batch
	        return 1;
	    };

	    /** @returns {bool} */
	    this.done = function () {return _done;};

	    /** Perform raycast on the quad. 
	                                               * @param {THREE.RayCaster} raycaster
	                                               * @param {Object[]}        intersects - An object array that contains intersection result objects.
	                                               *                                       Each result r stores properties like r.point, r.fragId, r.dbId. (see VBIntersector.js for details)
	                                               */
	    this.rayCast = function (raycaster, intersects) {

	        // not implemented yet
	        return null;
	    };

	    /** Copies visible bbox into the given output params. Since per-fragment visibility is not supported
	        *  by this iterator, both bboxes are always identical.
	        *
	        *   @param {THREE.Box3} [visibleBounds]
	        *   @param {THREE.Box3} [visibleBoundsWithHidden]
	        */
	    this.getVisibleBounds = function (visibleBounds, visibleBoundsWithHidden) {
	        if (visibleBounds) visibleBounds.copy(_bbox);
	        if (visibleBoundsWithHidden) visibleBoundsWithHidden.copy(_bbox);
	    };

	    // compute width/height of a tile, assuming that the root corresponds to [0,1]^2 in xy.
	    // level is int.
	    function getTileScale(level) {return 1.0 / (1 << level);};

	    // Simple helper to describe uv offset and scale
	    function UVTransform() {
	        this.offsetX = 0.0;
	        this.offsetY = 0.0;
	        this.scaleX = 1.0;
	        this.scaleY = 1.0;
	    }
	    var _uvTransformIdentity = new UVTransform();

	    // Given a tile to be rendered and a (n-th-order) parent from which we use the material,
	    // this method computes offset and scale in uv coords that we need to compute the texture coords.
	    //  @returns {UVTransform}
	    function getUVOffsetAndScale(tile, parentTile) {

	        // compute the level difference between tile and parent
	        var levelDiff = tile.level - parentTile.level;

	        // at tile.level, compute the number of tiles in x and y that share the same parent tile
	        var levelDiffScale = 1 << levelDiff;

	        // compute width/height in uv-space
	        var uvScaleX = 1.0 / levelDiffScale;
	        var uvScaleY = uvScaleX;

	        // uvScale means here: "which extent in the uv-space of the parent corresponds to a the size of a single tile at tile.level"
	        // If the parent tile is cropped, the uvScale needs to be upscaled accordingly.        
	        var parentCropScale = getCropScale(parentTile);
	        uvScaleX /= parentCropScale.x; // Note that cropScale.x and cropScale.y are always >0. Otherwise, the whole parent tile would 
	        uvScaleY /= parentCropScale.y; // be outside the image extent and it wouldn't make sense to compute any uv coords.

	        // For l=tile.level, find the minimum x and y among all subtiles of parent at level l.
	        var firstX = parentTile.x * levelDiffScale;
	        var firstY = parentTile.y * levelDiffScale;

	        // compute offsetX/Y within the subtile grid of size [levelDiffScale]^2
	        var offsetX = tile.x - firstX;
	        var offsetY = tile.y - firstY;

	        // uvScale as computed above is the size of a full tile at tile.level, given in uv space of the parent.
	        // If the (child) tile is cropped, its geometry will be cropped as well, so that its extent is less than a full tile
	        // at this level. Therefore, we have to consider the cropScale of the tile for the final scale factor.
	        var cropScale = getCropScale(tile);

	        // transform offset from tile-grid to uv
	        offsetX *= uvScaleX;
	        offsetY *= uvScaleY;

	        // apply y-flip. Note that a simple y-flip (1.0-val) swaps min/max v-value of the tile.
	        // E.g., the uv-offset of the first tile would be 1.0 after the swap - which should actually 
	        // the max-v of the tile. Since offset has to be the min-uv, we have to subtract the
	        // v-extent of the tile afterwards.
	        offsetY = 1.0 - offsetY - uvScaleY * cropScale.y;

	        var result = new UVTransform();
	        result.offsetX = offsetX;
	        result.offsetY = offsetY;
	        result.scaleX = uvScaleX * cropScale.x;
	        result.scaleY = uvScaleY * cropScale.y;
	        return result;
	    };

	    // tile: TileCoords
	    // Returns: float
	    function getTileMinX(tile) {
	        var tileScale = getTileScale(tile.level);

	        return tileScale * tile.x;
	    };

	    // see getTileMinX
	    function getTileMinY(tile) {
	        var tileScale = getTileScale(tile.level);

	        // invert tile order to match image layout.
	        var maxY = (1 << tile.level) - 1;
	        var yFlipped = maxY - tile.y;

	        return tileScale * yFlipped;
	    };

	    // @returns {TileInfo|null}
	    function getTileInfo(tile) {
	        return _tiles[tc.tile2Index(tile)];
	    };

	    // Returns a true if a tile texture is in memory
	    function tileLoaded(tile) {
	        var tileInfo = getTileInfo(tile);
	        return tileInfo instanceof TileInfo && tileInfo.state == TileState_Loaded;
	    };

	    // Finds a parent tile for which a texture is a available
	    // Takes and returns TileCoord (or null if nothing found)
	    //  @param {bool} [disableNewTextures] if true, we enforce to use a texture that
	    //                                     has been used before and doesn't need to be decoded/uloaded anymore.
	    function findLoadedParent(tile, disableNewTextures) {

	        // step up the parent path until we find one in memory
	        var parent = tile.getParent();
	        while (parent) {
	            var info = getTileInfo(parent);

	            // tile loaded?
	            var found = info && info.state == TileState_Loaded;

	            // if loaded, are we allowed to use the texture?
	            if (found && disableNewTextures) {

	                // don't allow adding new tiles. Just the root is always accepted.
	                if (info.mesh.material.map.needsUpdate && parent.level > 0) {
	                    found = false;
	                }
	            }

	            // stop if we found a usable parent
	            if (found) {
	                break;
	            }

	            // Continue with next parent. Latest at the root,
	            // we will usually succeed.
	            parent = parent.getParent();
	        }

	        return parent;
	    };

	    /** Updates the uv-coords for a given quad geometry.
	        *   @param {THREE.Geometry} geom
	        *   @param {UVTransform}    [uvTransform] - default: identity
	        */
	    function setUVCoords(geom, uvTransform) {

	        var tf = uvTransform ? uvTransform : _uvTransformIdentity;

	        var uvs = [];
	        uvs.push(new THREE.Vector2(tf.offsetX, tf.offsetY));
	        uvs.push(new THREE.Vector2(tf.offsetX + tf.scaleX, tf.offsetY));
	        uvs.push(new THREE.Vector2(tf.offsetX + tf.scaleX, tf.offsetY + tf.scaleY));
	        uvs.push(new THREE.Vector2(tf.offsetX, tf.offsetY + tf.scaleY));

	        geom.faceVertexUvs[0].length = 0;
	        geom.faceVertexUvs[0].push([uvs[0], uvs[1], uvs[2]]);
	        geom.faceVertexUvs[0].push([uvs[0], uvs[2], uvs[3]]);

	        geom.uvsNeedUpdate = true;
	    }

	    /** 
	       *  @param {UVTransform} [uvTransform]
	       *  @returns {THREE.Geometry} 
	       */
	    function createQuadGeom(uvTransform) {

	        // vertices
	        var geom = new THREE.Geometry();
	        geom.vertices.push(
	        new THREE.Vector3(0.0, 0.0, 0.0),
	        new THREE.Vector3(1.0, 0.0, 0.0),
	        new THREE.Vector3(1.0, 1.0, 0.0),
	        new THREE.Vector3(0.0, 1.0, 0.0));


	        // indices
	        geom.faces.push(new THREE.Face3(0, 1, 2));
	        geom.faces.push(new THREE.Face3(0, 2, 3));

	        setUVCoords(geom, uvTransform);

	        geom.computeFaceNormals();

	        return geom;
	    };

	    /** 
	        * Returns a reusable geometry and recomputes its uv coords based on given scale and offset.
	        *  @param   {UVTransform}    [uvOffsetX]
	        *  @returns {THREE.Geometry} A geometry from _reusedGeoms
	        */
	    function acquireQuadGeom(uvTransform) {

	        // get next reusable mesh and increase counter
	        var geom = _reusedGeoms[_nextFreeGeom];

	        // if not available yet, create it
	        if (!geom) {
	            geom = createQuadGeom(uvTransform);

	            // keep it for reuse in later frames
	            _reusedGeoms[_nextFreeGeom] = geom;
	        } else {
	            // reuse old geom and just update uv 
	            setUVCoords(geom, uvTransform);
	        }

	        // inc counter so that this geom is not used for any other tile in this frame
	        _nextFreeGeom++;
	        return geom;
	    }

	    // creates a single quad shape (THREE.Mesh) representing a tile of the image.
	    // If no image is provided, we use the material of a lower-resolution tile.
	    function createTileShape(
	    tile, // TileCoords
	    material, // THREE.Material
	    disableNewTextures // If material is null, this optional flag enforces that 
	    // we use a fallback texture that does not require decode/upload
	    ) {
	        var geom;
	        // for tiles with own texture, we can use the shared quad shape
	        if (material) {
	            // create shared quad geom on first use
	            if (!_quadGeom) {
	                _quadGeom = createQuadGeom();
	            }

	            geom = _quadGeom;

	        } else {
	            // share texture of lower-resolution tile

	            // if we have no image, find a parent tile from which we can reuse the material as a fallback
	            var parentTile = findLoadedParent(tile);

	            // by construction, parent is the first parent with texture 
	            // in memory. So, parentShape must always be available.            
	            var parentShape = getTileShape(parentTile);

	            material = parentShape.material;

	            // configure uv transform, because we are only using a subset of 
	            // the texture for this tile
	            var tmp = getUVOffsetAndScale(tile, parentTile, disableNewTextures);

	            geom = acquireQuadGeom(tmp);
	        }

	        var mesh = new THREE.Mesh(geom, material);

	        var tileScale = getTileScale(tile.level);

	        // for boundary tiles with cropped images, scale down geometry accordingly. No effect for non-cropped tiles.
	        var cropScaleFactor = getCropScale(tile);

	        // since pixel y and worldY directions are opposite, y-cropped tiles also needs to be shifted.
	        var cropYShift = (1.0 - cropScaleFactor.y) * tileScale;

	        // compute offset and scale of the tile, where [0,1]^2 corresponds to the root
	        var tileOffsetX = getTileMinX(tile);
	        var tileOffsetY = getTileMinY(tile);
	        mesh.position.set(tileOffsetX, tileOffsetY + cropYShift, 0.0);
	        mesh.scale.set(tileScale * cropScaleFactor.x, tileScale * cropScaleFactor.y, 1.0);

	        return mesh;
	    };

	    // Returns the URL string to request a single tile image
	    function getTileTextureURL(tile) {

	        var levelOffset = _config.levelOffset ? _config.levelOffset : 0;

	        var url = _config.urlPattern.
	        replace("{x}", tile.x).
	        replace("{y}", tile.y).
	        replace("{z}", tile.level + levelOffset);
	        return url;
	    };

	    var _this = this;

	    // As soon as a tile is loaded, it will be available via getTileShape(tile).
	    function requestTile(tile) {

	        // get tileInfo
	        var tileIndex = tc.tile2Index(tile);
	        var tileInfo = _tiles[tileIndex];

	        // if tile is already loading or in memory, do nothing
	        if (tileInfo && tileInfo.state != TileState_Missing) {
	            return;
	        }

	        // make sure that tileInfo exists
	        if (!tileInfo) {
	            tileInfo = new TileInfo(_timeStamp);
	            _tiles[tileIndex] = tileInfo;
	        }

	        // mark tile as loading, so that we don't request it again
	        tileInfo.state = TileState_Loading;

	        var path = getTileTextureURL(tile);

	        // Callback that updates the tile-shape as soon as the texture is loaded
	        var onTexLoaded = function onTexLoaded(tex) {// tex = THREE.Texture.

	            // drop texture if the iterator has been deleted meanwhile
	            if (!_this) {
	                return;
	            }

	            // when using the iterator for displaying a single image, we get texWidth/texHeihgt/tileSize
	            // from the actual image dimensions.
	            if (_config.maxLevel == 0) {
	                if (_config.texWidth == -1) _config.texWidth = tex.image.width;
	                if (_config.texHeight == -1) _config.texHeight = tex.image.height;
	                if (_config.tileSize == -1) _config.tileSize = Math.max(tex.image.width, tex.image.height);

	                // update bbox - which depends on texture dimensions
	                _bbox = config.getBBox();
	            }

	            // use linear filter, so that we can use non-pow2 textures.
	            tex.minFilter = THREE.LinearFilter;
	            tex.magFilter = THREE.LinearFilter;

	            // create material
	            var material = new THREE.MeshBasicMaterial({ color: 0xFFFFFFFF });
	            material.map = tex;

	            // set material name that we use to find and unregister 
	            // this material in MaterialManager later
	            // NOTE: Using the image URL as material name is simple,
	            //       but would produce a trap if we ever use different 
	            //       RenderModels that load from the same source.
	            //       It would be safer to find some individual prefix for
	            //       this iterator.
	            material.name = path;

	            // By default, MaterialManager assigns the environment texture for reflection to all
	            // materials that support it. Setting this flag avoids this.
	            material.disableEnvMap = true;

	            // Activate transparency for PNG images - which might make use of the alpha channel.
	            // This is the same heuristic as we apply for F2D/SVF materials (see MaterialManager.addMaterial)
	            if (path.toLowerCase().indexOf(".png")) {
	                material.transparent = true;
	                material.alphaTest = 0.01;
	            }

	            // add material to material manager to make sure that the shader is
	            // correctly configured. E.g., to configure in which render targets to write etc.
	            _materials.addMaterial(material.name, material, true);

	            // create tile mesh
	            var mesh = createTileShape(tile, material);

	            // make new tile available
	            tileInfo.mesh = mesh;

	            // mark tile as loaded, so that we know that its own texture is in memory.
	            tileInfo.state = TileState_Loaded;

	            // request finished
	            _numRequests--;

	            // trigger scene update
	            _needsRedraw = true;

	            // we take care of caching ourselves. To keep consumed memory under control, make sure
	            // that no texture is left behind in THREE's internal loader cache
	            // Note that we cannot always use 'path' here, because the final image url might differ due
	            // to additional credential stuff.
	            var texUrl = tex && tex.image ? tex.image.src : null;
	            if (texUrl && THREE.Cache && THREE.Cache.get(texUrl)) {
	                THREE.Cache.remove(texUrl);
	            }

	            // trigger custom callback when root is available
	            if (tile.level == 0 && _config.onRootLoaded) {
	                _config.onRootLoaded();
	            }
	        };

	        // track number of open requests
	        _numRequests++;

	        // load tile texture
	        _config.textureLoader(path, function (texture) {
	            onTexLoaded(texture);
	        }, function (err) {
	            console.error(err);
	        });
	    }

	    // root tile is always needed
	    requestTile(new tc.TileCoords(0, 0, 0));

	    // returns a tile shape from memory cache. Returns null if the tile's own
	    // texture is not loaded yet.
	    function getTileShape(tile) {

	        var index = tc.tile2Index(tile);
	        var tileInfo = _tiles[index];

	        if (!tileInfo || tileInfo.state != TileState_Loaded) {
	            return null;
	        }

	        return tileInfo.mesh;
	    };

	    // tile:   TileCoords
	    // outMin: Vector3 (z=0.0)
	    function getTileMin(tile, outMin) {
	        var x = getTileMinX(tile);
	        var y = getTileMinY(tile);
	        outMin.set(x, y, 0);
	    };

	    function getTileMax(tile, outMax) {
	        var scale = getTileScale(tile.level);
	        var x = getTileMinX(tile) + scale;
	        var y = getTileMinY(tile) + scale;
	        outMax.set(x, y, 0);
	    };

	    // Returns true if a tile intersects the view frustum
	    var tileInFrustum = function () {
	        var tileMin = new THREE.Vector3();
	        var tileMax = new THREE.Vector3();
	        var tileBox = new THREE.Box3();

	        return function (
	        tile, // {TileCoords}
	        frustum // {FrustumIntersector}
	        ) {
	            // get tile box
	            getTileMin(tile, tileMin);
	            getTileMax(tile, tileMax);
	            tileBox.set(tileMin, tileMax);

	            return frustum.intersectsBox(tileBox) > 0;
	        };
	    }();

	    // Computes the priority of a tile based on camera distance and tile size.
	    var computeTilePriority = function () {
	        var tileMin = new THREE.Vector3();
	        var tileMax = new THREE.Vector3();

	        return function (
	        tile, // {TileCoords}
	        frustum, // {FrustumIntersector}
	        camPos // {THREE.Vector3}
	        ) {
	            // compute xy-distance from camera
	            var tileScale = getTileScale(tile.level);
	            getTileMin(tile, tileMin);
	            getTileMax(tile, tileMax);
	            var dist2 = point2BoxDistance2(camPos, tileMin, tileMax);

	            // scale-up priority for visible tiles
	            var tileVisible = tileInFrustum(tile, frustum);
	            var frustumFactor = tileVisible ? 100.0 : 1.0;

	            // avoid division by zero: for tiles below this distance, 
	            // we only distinguish based on tile level
	            var MinDist2 = 0.0001;
	            dist2 = Math.max(dist2, MinDist2);

	            // squared tile size
	            var tileScale2 = tileScale * tileScale;

	            // Priority = tileSize/dist 
	            var priority = frustumFactor * tileScale2 / dist2;

	            return priority;
	        };
	    }();

	    // Estimates for a tile the current screen size in pixels 
	    var estimateScreenSize = function () {

	        var tileMin = new THREE.Vector3();
	        var tileMax = new THREE.Vector3();

	        return function (
	        tile, // {TileCoords}
	        camPos, // {THREE.Vector3}
	        camDir, // {THREE.Vector3]
	        camFov, // in degrees
	        canvasHeight // in pixels
	        ) {
	            // get tile distance - projected along the view direction
	            getTileMin(tile, tileMin);
	            getTileMax(tile, tileMax);
	            var dist = projectedBoxDistance(camPos, camDir, tileMin, tileMax);

	            var edgeLength = tileMax.x - tileMin.x;

	            // get tan(phi/2) for horizontal aperture angle
	            // Note that the same code keeps correct for OrthoCameras, because tanPhiHalf is 0.5 for this case.
	            var tanPhiHalf = Math.tan(THREE.Math.degToRad(camFov / 2.0));

	            var projLength = edgeLength / (tanPhiHalf * dist);

	            return 0.5 * projLength * canvasHeight;
	        };
	    }();

	    // helper struct used to order tiles based on refinement priority
	    function Candidate(tile, prio) {
	        this.tile = tile;
	        this.prio = prio;
	    };

	    // compare op to sort candidates by decreasing priority
	    function moreImportant(c1, c2) {
	        return c1.prio > c2.prio;
	    };

	    // Updates the timeStamp of the tile to the latest value.
	    // If the tile is unknown, it has no effect.
	    function updateTimeStamp(tile) {
	        var tileInfo = _tiles[tc.tile2Index(tile)];
	        if (tileInfo) {
	            if (tileInfo.timeStamp != _timeStamp) {
	                tileInfo.timeStamp = _timeStamp;

	                // track number of tiles for which we updated the
	                _numActiveTiles++;
	            }
	        }
	    };

	    // Given a list of required tiles, this method determines the most
	    // important ones and triggers as many requests as simultaneously allowed.
	    // Returns the number of newly sent requests
	    function requestTiles(tiles, frustum, camPos) {

	        // sort by decreasing priority
	        tiles.sort(function (a, b) {
	            var pa = computeTilePriority(a, frustum, camPos);
	            var pb = computeTilePriority(b, frustum, camPos);
	            return pb - pa;
	        });

	        // send as many requests as simultaneously allowed
	        var newRequests = 0;
	        for (var i = 0; i < tiles.length; i++) {

	            // skip tiles for which there is already a running request
	            var tileInfo = getTileInfo(tiles[i]);
	            if (tileInfo && tileInfo.state == TileState_Loading) {
	                continue;
	            }

	            // wait for some requests to finish before we request more
	            if (_numRequests >= _maxRequests) {
	                break;
	            }

	            requestTile(tiles[i]);

	            newRequests++;
	        }
	        return newRequests;
	    };

	    function disposeMaterial(tileInfo) {
	        // nothing to do if there is no material
	        if (!tileInfo || !tileInfo.mesh || !tileInfo.mesh.material) {
	            return;
	        }

	        // don't leak material in MaterialManager
	        var mat = tileInfo.mesh.material;
	        _materials.removeMaterial(mat.name);

	        // free GPU resource. We need the memory right now and should
	        // not wait for the garbage collector.
	        mat.map.dispose();
	        mat.map.needsUpdate = true;

	        // dispose shader program etc.
	        var DISPOSE_EVENT = { type: 'dispose' };
	        mat.dispatchEvent(DISPOSE_EVENT);
	        mat.needsUpdate = true;
	    }

	    /** Unregister all material from material texture and disposes textures. 
	          Must be called when removing a RenderModel with this iterator.
	       */
	    this.dispose = function () {
	        for (var i in _tiles) {
	            disposeMaterial(_tiles[i]);
	        }

	        if (_quadGeom) {
	            _quadGeom.dispose();
	            _quadGeom.needsUpdate = true;
	        }

	        for (var i = 0; i < _reusedGeoms.length; i++) {
	            var geom = _reusedGeoms[i];
	            if (geom) {
	                geom.dispose();
	                geom.needsUpdate = true;
	            }
	        }
	    };

	    this.dtor = function () {
	        this.dispose();

	        // ignore any remaining textureLoad callbacks
	        _this = null;

	        // unref MaterialManager right now in case we are the last one holding it.
	        _materials = null;
	    };

	    // Delete tiles cached from previous frames to give space for new ones without
	    // exceeding the maximum cache size.
	    //
	    //  @param {number}             requiredFreeSlots 
	    //  @param {FrustumIntersector} frustum
	    //  @param {THREE.Vector3}      camPos
	    function cacheCleanup(requiredFreeSlots, frustum, camPos) {

	        // collect indices of all tiles in memory
	        var tileIndices = Object.keys(_tiles);

	        // check how many free slots we have already
	        var numTilesInMemory = tileIndices.length;
	        var availableSlots = _config.cacheSize - numTilesInMemory;
	        var missingSlots = requiredFreeSlots - availableSlots;

	        if (missingSlots <= 0) {
	            // No need to delete any tile from cache
	            return;
	        }

	        // sort by increasing timeStamp and tile priority
	        tileIndices.sort(function (a, b) {

	            // compare based on timeStamps
	            var tsa = _tiles[a].timeStamp;
	            var tsb = _tiles[b].timeStamp;
	            if (tsa != tsb) return tsa - tsb;

	            // if timeStamps are equal, use priorites instead
	            var tileA = tc.index2Tile(a);
	            var tileB = tc.index2Tile(b);
	            var prioA = computeTilePriority(tileA, frustum, camPos);
	            var prioB = computeTilePriority(tileB, frustum, camPos);
	            return prioA - prioB;
	        });

	        // delete tiles 
	        var tilesToDelete = Math.min(missingSlots, tileIndices.length);
	        for (var i = 0; i < tilesToDelete; i++) {
	            var index = tileIndices[i];

	            // Skip any tile that is not in memory. Deleting anything else
	            // would not make sense here anyway. But, more important, it is essential never to delete
	            // _tiles[] entries for tiles in loading state. Otherwise, the newly arriving textures
	            // would get lost.
	            if (_tiles[index].state != TileState_Loaded) {
	                continue;
	            }

	            // don't remove tiles that are currently in use. It's better to
	            // exceed the cache limit a bit than to permanently delete and load
	            // the same tiles.
	            if (_tiles[index].timeStamp == _timeStamp) {
	                break;
	            }

	            // dispose texture and unregister material from MaterialManager
	            // Note that it is important here that each material is unique per tile.
	            disposeMaterial(_tiles[index]);

	            delete _tiles[index];
	        }
	    };

	    /** Start iterator 
	        *   @param: {FrustumIntersector} frustum  
	        *   @param: {UnifiedCamera}      camera
	        */
	    this.reset = function (frustum, camera) {

	        // Make sure that no mesh objects are leaked in WebGLRenderer. It would be more efficient to do this
	        // only once per tile. But since we also create temporary placeholder meshes for tiles displayed at lower
	        // resolution, this solution is the simplest and safest. The overhead is not signficiant, because
	        // the number of rendered tiles is limited and these events do not dispose geometry or material
	        // (which would be expensive)
	        for (var i = 0; i < _scene.children.length; i++) {
	            var obj = _scene.children[i];
	            obj.dispatchEvent({ type: 'removed' });
	        }

	        // clear scene
	        _scene.children.length = 0;

	        // track iterator restarts for LRU cache cleanup
	        _timeStamp++;

	        // reset counter of tiles that we mark as "currently used" by updating their timestamp
	        _numActiveTiles = 0;

	        // reset counter for reused temp geometry.
	        _nextFreeGeom = 0;

	        // scene is empty as long as the root tile is not loaded
	        var root = new tc.TileCoords(0, 0, 0);
	        if (!tileLoaded(root)) {
	            _done = true;
	            return;
	        }

	        // Set of candidates, sorted by decreasing priority.                
	        var candidates = new SortedList(moreImportant);

	        // start with root tile as only candidate
	        var rootTile = new tc.TileCoords(0, 0, 0);
	        var prio = computeTilePriority(rootTile, frustum, camera.position);
	        candidates.add(new Candidate(rootTile, prio));

	        // normalized view direction
	        var camDir = camera.getWorldDirection();

	        // get canvas height - measured in phyisical device pixels
	        var canvasHeight = 0 | camera.clientHeight * _config.pixelRatio;

	        // In this loop, we recursively traverse the tile hierarchy to find relevant tiles for the current view.
	        // As a result, the three arrays below will be filled.
	        // By construction, all arrays will be sorted by decreasing priority.
	        var visibleTiles = []; // visible tiles that we will use for rendering
	        var culledTiles = []; // tiles at appropriate resolution, but outside the view frustum (good prefetching candidates)
	        var missingTiles = []; // tiles that are not in memory, but required for current view. This includes parents of tiles in use.
	        while (candidates.size() > 0) {

	            // get and remove max-priority candidate
	            var candidate = candidates.get(0);
	            var tile = candidate.tile;
	            candidates.removeAt(0);

	            // skip tiles outside the image dimensions
	            if (tileOutside(tile)) {
	                continue;
	            }

	            var refine = true;

	            // stop if we reached a leaf tile
	            if (tile.level == _config.maxLevel) {
	                // this is a leaf tile.
	                refine = false;
	            }

	            // if the screen size of the tile is already smaller than its
	            // image resolution, there is no point in further refinement.
	            var screenSize = estimateScreenSize(tile, camera.position, camDir, camera.fov, canvasHeight);
	            if (screenSize < _config.tileSize) {
	                // tile does not need more refinement
	                refine = false;
	            }

	            // For all tiles in frustum...
	            var visible = tileInFrustum(tile, frustum);
	            if (visible) {

	                // Request tile if missing
	                if (!tileLoaded(tile)) {
	                    missingTiles.push(tile);
	                }

	                // protect it from removal due to cleanuop
	                updateTimeStamp(tile);
	            }

	            // Block refinement if we collected enough tiles
	            if (!visible && visibleTiles.length + culledTiles.length > _config.maxActiveTiles) {
	                refine = false;
	            }

	            // Note that we also refine tiles that are not in memory. This is done to ensure that the
	            // traversal is stable: In this way, required tiles always get the latest timeStamp,
	            // no matter whether their parents are missing or not.

	            // Traverse children or collect the tile
	            if (refine) {
	                // refine tile into its 4 children
	                for (var c = 0; c < 4; c++) {
	                    var child = tile.getChild(c);
	                    var prio = computeTilePriority(child, frustum, camera.position);

	                    // consider child as new candidate
	                    candidates.add(new Candidate(child, prio));
	                }
	            } else {
	                // Collect tile and stop refinement
	                if (visible) {
	                    visibleTiles.push(tile);
	                } else {
	                    culledTiles.push(tile);
	                }
	            }
	        }

	        // track how many new textures we add in this frame.
	        var numNewTextures = 0;

	        // any redraws would produce the same result until a new tile arrives.
	        _needsRedraw = false;

	        // track if all required tiles are available for rendering
	        var sceneComplete = true;

	        // add tile shapes for all visible tiles to the scene
	        for (var i = 0; i < visibleTiles.length; ++i) {
	            var tile = visibleTiles[i];
	            var shape = getTileShape(tile);

	            if (shape && shape.material.map.needsUpdate) {
	                // this shape will trigger a new texture decode/upload in FireFlyRenderer
	                if (numNewTextures < _maxTextureUpdatesPerFrame) {
	                    // just track number of new textures
	                    numNewTextures++;
	                } else {
	                    // don't allow more texture upload in this frame.
	                    // use a fallback texture instead.
	                    shape = createTileShape(tile, null, true);

	                    // trigger redraw, so that the remaining texture uploads
	                    // are done in subsequent frames.
	                    _needsRedraw = true;

	                    // don't fire sceneComplete callback yet, before all
	                    // required textures are uploaded.
	                    sceneComplete = false;
	                }
	            }

	            // Some tiles might not be loaded yet, but already needed in 
	            // order to show their loaded siblings at higher resolution.
	            if (!shape) {
	                // For these tiles, we create a "fallback" tile that
	                // is using the material of a lower-resolution parent,
	                // but is instantly available. This makes tile loading significantly 
	                // faster, because we don't have wait for all siblings of tiles we need.
	                shape = createTileShape(tile, null);

	                sceneComplete = false;
	            }
	            _scene.add(shape);
	        }

	        // return _scene in next nextBatch() call.
	        _done = false;

	        // send requests for missing visible tiles
	        var numNewRequests = requestTiles(missingTiles, frustum, camera.position);

	        // tiles that are currently being loaded are also considered as being active, because
	        // they will soon require some memory as well
	        _numActiveTiles += _numRequests;

	        // Process some tiles outside the frustum for prefetching (if our budget allows it)
	        var prefetchRequests = [];
	        for (var i = 0; i < culledTiles.length; i++) {

	            // stop if our active tile limit is reached
	            if (_numActiveTiles >= _config.maxActiveTiles) {
	                break;
	            }

	            var tile = culledTiles[i];

	            if (!tileLoaded(tile)) {
	                // tile is not in memory yet => consider for request
	                prefetchRequests.push(tile);
	                _numActiveTiles++;
	            } else {
	                // tile is already in memory. Just set its timestamp to keep it in memory
	                // mark this tile and its parents as active if our budget allows it.
	                for (var level = 0; level <= tile.level; level++) {
	                    // mark parent as active
	                    var parent = tile.getParentAtLevel(level);
	                    updateTimeStamp(parent);

	                    // stop if we reached the limit
	                    if (_numActiveTiles > _config.maxActiveTiles) {
	                        break;
	                    }
	                }
	            }
	        }
	        // add some more requests for prefetching of tiles close to the view frustum
	        numNewRequests += requestTiles(prefetchRequests, frustum, camera.position);

	        // clear tiles from LRU cache if needed
	        // Note that we must not dispose any material that is used in this
	        // frame. This is ensured, because we never delete tiles with
	        // the current frame timestamp.
	        cacheCleanup(numNewRequests, frustum, camera.position);

	        // trigger callback if
	        if (sceneComplete && _onRefinedCallbacks.length > 0) {
	            // Note: At this point, we are usually in the middle of a rendering cycle. Although the scene is now
	            // fully refined, it is not visible on screen yet. Therefore, we defer the event so that the
	            // current animation cycle can be finished first.
	            var callbacks = _onRefinedCallbacks.splice(0, _onRefinedCallbacks.length);
	            setTimeout(function () {
	                for (var i = 0; i < callbacks.length; i++) {
	                    callbacks[i]();
	                }
	            }, 1);
	        }
	    };

	    /** @param {function} cb - A callback without params or return value. Called once as soon as all textures have
	        *                         been refined to the required resolution for the current view. */
	    this.callWhenRefined = function (cb) {
	        _onRefinedCallbacks.push(cb);
	    };

	    /** @returns {bool} Indicates that a full redraw is required to see the latest state. */
	    this.update = function () {
	        return _needsRedraw;
	    };
	}

	module.exports = {
	    ModelIteratorTexQuad: ModelIteratorTexQuad,
	    TexQuadConfig: TexQuadConfig };

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict"; /** 
	               * Helper struct to work with tile quadtree structure.
	               * @constructor
	               */
	function TileCoords(level, x, y) {
	    this.level = level;
	    this.x = x;
	    this.y = y;
	}

	TileCoords.prototype = {

	    constructor: TileCoords,

	    copy: function copy() {
	        return new TileCoords(level, x, y);
	    },

	    /** returns {bool} */
	    isValid: function isValid() {
	        return Number.isInteger(this.level) && this.level >= 0 && Number.isInteger(this.x) && Number.isInteger(this.y);
	    },

	    /* @param   {number}     child - must be in [0,3] 
	        * @returns {TileCoords} 
	        */
	    getChild: function getChild(child) {

	        var xOffset = child & 1 ? 1 : 0;
	        var yOffset = child & 2 ? 1 : 0;
	        return new TileCoords(
	        this.level + 1,
	        this.x * 2 + xOffset,
	        this.y * 2 + yOffset);

	    },

	    /**
	        *  @returns {TileCoords|null} Parent tile or null if this tile was root or invalid.
	        */
	    getParent: function getParent() {
	        if (this.level == 0) {
	            return null;
	        }
	        return new TileCoords(this.level - 1, Math.floor(this.x / 2), Math.floor(this.y / 2));
	    },

	    /**
	        *   Computes the subtree root at a given level. 'level' must be <= the current level.
	        *    @param {number} level
	        *    @returns {TileCoords|null}
	        */
	    getParentAtLevel: function getParentAtLevel(level) {
	        if (level < 0 || level > this.level) {
	            return null;
	        }

	        // compute level difference
	        var levelDiff = this.level - level;

	        // compute column and row at this level
	        var c = Math.floor(this.x >> levelDiff);
	        var r = Math.floor(this.y >> levelDiff);

	        return new TileCoords(level, c, r);
	    },

	    /** @returns {string} E.g., "(1,1,2)" */
	    toString: function toString() {
	        return "(" + this.level + ", " + this.x + ", " + this.y + ")";
	    },

	    /** 
	        * Can be called either with a single TileCoords param or with (level, x, y) as integers.
	        *   @param {TileCoords|number} levelOrTile
	        *   @param {number}            [x] 
	        *   @param {number}            [y]
	        *   @returns {bool} 
	        */
	    equals: function equals(levelOrTile, x, y) {

	        if (levelOrTile instanceof TileCoords) {
	            return this.equals(levelOrTile.level, levelOrTile.x, levelOrTile.y);
	        }

	        return this.level === levelOrTile && this.x === x && this.y === y;
	    } };


	/** Computes the number of tiles at a given level, assuming a complete tree.
	          *   @param   {number} level must be >=0
	          *   @returns {number} 
	          */
	var tilesAtLevel = function tilesAtLevel(level) {
	    return 1 << level;
	};

	/** 
	    * Inverse of index2Tile (see below).
	    * Note that this is only possible as long as all tiles share a common root tile (0,0,0).
	    *  @param   {TileCoords} 
	    *  @returns {number}
	    */
	var tile2Index = function tile2Index(tile) {

	    // level 0 has 1 tile and the number of tiles grows by factor 4 with each level.
	    // Using geometric sum formular, we obtain the summed number of tiles for 
	    // levels 0,...,tile.level-1 as:
	    var firstTileInLevel = ((1 << 2 * tile.level) - 1) / 3;

	    // compute individual index per row/column pair
	    var tilesPerRow = 1 << tile.level;

	    return firstTileInLevel + tile.y * tilesPerRow + tile.x;
	};

	/** 
	    * Enumerates all tiles of a complete quadtree in breadth-first order. 
	    *  @param   {number} int >= 0
	    *  @returns {TileCoords}
	    */
	var index2Tile = function index2Tile(index) {

	    var tile = new TileCoords(0, 0, 0);

	    // find level maximum level for which the index is <= the target index
	    while (tile2Index(tile) <= index) {
	        tile.level++;
	    }
	    tile.level--;

	    // compute the local index inside this level
	    var localIndex = index - tile2Index(tile);

	    // Having the level, we can compute index and column
	    var tilesPerRow = 1 << tile.level;
	    tile.y = Math.floor(localIndex / tilesPerRow);
	    tile.x = localIndex % tilesPerRow;

	    return tile;
	};

	module.exports = {
	    TileCoords: TileCoords,
	    tile2Index: tile2Index,
	    index2Tile: index2Tile };

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	//var THREE = require('THREE');

	//Shader used to convert the normals+depth texture into a smaller texture containing only depth
	//Since it packs depth into RGBA8 target it also maps it to the range 0-1 then packs that float

	var SAOMinifyFirstShader = {

	    uniforms: {
	        "tDiffuse": { type: "t", value: null }, //Initial normals+depth texture

	        "cameraNear": { type: "f", value: 1 },
	        "cameraInvNearFar": { type: "f", value: 100 },

	        "resolution": { type: "v2", value: new THREE.Vector2(1.0 / 512, 1.0 / 512) } //1/size of lower mip level
	    },

	    vertexShader: __webpack_require__(115),
	    fragmentShader: __webpack_require__(116) };



	//Shader used to generate mip levels for the depth texture (used by the SAO shader)
	var SAOMinifyShader = {

	    uniforms: {
	        "tDiffuse": { type: "t", value: null }, //Lower mip level
	        "resolution": { type: "v2", value: new THREE.Vector2(1.0 / 512, 1.0 / 512) } //1/size of lower mip level
	    },

	    vertexShader: __webpack_require__(117),
	    fragmentShader: __webpack_require__(118) };



	module.exports = {
	    SAOMinifyFirstShader: SAOMinifyFirstShader,
	    SAOMinifyShader: SAOMinifyShader };

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\nvoid main() {\r\n\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n";

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDiffuse;\r\nuniform vec2 resolution;\r\nuniform float cameraNear;\r\nuniform float cameraInvNearFar;\r\n\r\n\r\n\r\n#include<pack_depth>\r\n\r\nvoid main() {\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec2 ssP = vec2(gl_FragCoord.xy);\r\n    ssP = ssP * 2.0 + mod(ssP, 2.0);\r\n    ssP = (ssP + 0.5) * resolution * 0.5;\r\n\r\n\r\n    float depth = texture2D(tDiffuse, ssP).z;\r\n\r\n    if (depth != 0.0)\r\n        depth = (depth + cameraNear) * cameraInvNearFar;\r\n    gl_FragColor = packDepth(depth);\r\n\r\n}\r\n";

/***/ },
/* 117 */
/***/ function(module, exports) {

	module.exports = "\r\n\r\nvoid main() {\r\n\r\n\r\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n";

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "uniform sampler2D tDiffuse;\r\nuniform vec2 resolution;\r\n\r\n\r\n\r\nvoid main() {\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    vec2 ssP = vec2(gl_FragCoord.xy);\r\n    ssP = ssP * 2.0 + mod(ssP, 2.0);\r\n    ssP = (ssP + 0.5) * resolution * 0.5;\r\n    gl_FragColor = texture2D(tDiffuse, ssP);\r\n\r\n\r\n\r\n}\r\n";

/***/ },
/* 119 */
/***/ function(module, exports) {

	"use strict"; //var THREE = require('THREE');

	var fbuf = new Float32Array(1);
	var ibuf = new Uint32Array(fbuf.buffer);
	var tmp = new Uint16Array(1);
	var hp = new Uint16Array(1);

	var FloatToHalf = function FloatToHalf(f) {

	    fbuf[0] = f;
	    var x = ibuf[0];
	    var i = 0;

	    if ((x & 0x7FFFFFFF) === 0) {// Signed zero
	        hp[i++] = x >> 16; // Return the signed zero
	    } else {// Not zero
	        var xs = x & 0x80000000; // Pick off sign bit
	        var xe = x & 0x7F800000; // Pick off exponent bits
	        var xm = x & 0x007FFFFF; // Pick off mantissa bits
	        if (xe === 0) {// Denormal will underflow, return a signed zero
	            hp[i++] = xs >> 16;
	        } else if (xe == 0x7F800000) {// Inf or NaN (all the exponent bits are set)
	            if (xm === 0) {// If mantissa is zero ...
	                hp[i++] = xs >> 16 | 0x7C00; // Signed Inf
	            } else {
	                hp[i++] = 0xFE00; // NaN, only 1st mantissa bit set
	            }
	        } else {// Normalized number
	            var hm, he;
	            var hs = xs >> 16; // Sign bit
	            var hes = (0 | xe >> 23) - 127 + 15; // Exponent unbias the single, then bias the halfp
	            if (hes >= 0x1F) {// Overflow
	                hp[i++] = xs >> 16 | 0x7C00; // Signed Inf
	            } else if (hes <= 0) {// Underflow
	                if (14 - hes > 24) {// Mantissa shifted all the way off & no rounding possibility
	                    hm = 0; // Set mantissa to zero
	                } else {
	                    xm |= 0x00800000; // Add the hidden leading bit
	                    hm = xm >> 14 - hes; // Mantissa
	                    tmp[0] = hm;hm = tmp[0];

	                    if (xm >> 13 - hes & 0x00000001) // Check for rounding
	                        hm += 1; // Round, might overflow into exp bit, but this is OK
	                }
	                hp[i++] = hs | hm; // Combine sign bit and mantissa bits, biased exponent is zero
	            } else {
	                he = hes << 10; // Exponent
	                tmp[0] = he;he = tmp[0];

	                hm = xm >> 13; // Mantissa
	                tmp[0] = hm;hm = tmp[0];

	                if (xm & 0x00001000) // Check for rounding
	                    hp[i++] = (hs | he | hm) + 1; // Round, might overflow to inf, this is OK
	                else
	                    hp[i++] = hs | he | hm; // No rounding
	            }
	        }
	    }

	    return hp[0];
	};


	var HalfToFloat = function HalfToFloat(source)
	{
	    var target;

	    var h = source & 0xFFFF;
	    if ((h & 0x7FFF) === 0) {// Signed zero
	        target = h << 16; // Return the signed zero
	    } else {// Not zero
	        var hs = h & 0x8000; // Pick off sign bit
	        var he = h & 0x7C00; // Pick off exponent bits
	        var hm = h & 0x03FF; // Pick off mantissa bits
	        if (he === 0) {// Denormal will convert to normalized
	            var e = -1; // The following loop figures out how much extra to adjust the exponent
	            do {
	                e++;
	                hm <<= 1;
	            } while ((hm & 0x0400) === 0); // Shift until leading bit overflows into exponent bit
	            var xs = hs << 16; // Sign bit
	            var xes = (he << 16 >> 26) - 15 + 127 - e; // Exponent unbias the halfp, then bias the single
	            var xe = xes << 23; // Exponent
	            var xm = (hm & 0x03FF) << 13; // Mantissa
	            target = xs | xe | xm; // Combine sign bit, exponent bits, and mantissa bits
	        } else if (he == 0x7C00) {// Inf or NaN (all the exponent bits are set)
	            if (hm === 0) {// If mantissa is zero ...
	                target = hs << 16 | 0x7F800000; // Signed Inf
	            } else {
	                target = 0xFFC00000; // NaN, only 1st mantissa bit set
	            }
	        } else {// Normalized number
	            xs = hs << 16; // Sign bit
	            xes = (he << 16 >> 26) - 15 + 127; // Exponent unbias the halfp, then bias the single
	            xe = xes << 23; // Exponent
	            xm = hm << 13; // Mantissa
	            target = xs | xe | xm; // Combine sign bit, exponent bits, and mantissa bits
	        }
	    }

	    ibuf[0] = target;
	    return fbuf[0];
	};

	var HALF_INT_MAX = 58 * 1024 - 2;

	var IntToHalf = function IntToHalf(i) {

	    if (i > HALF_INT_MAX - 1 || i < 0) {
	        THREE.log("out of range");
	        return FloatToHalf(NaN);
	    }

	    if (i === 0)
	    return 0;

	    var negate = false;
	    if (i > HALF_INT_MAX / 2 - 1) {
	        negate = true;
	        i -= HALF_INT_MAX / 2 - 1;
	    }

	    var bucket = Math.abs(i / 1024) | 0;
	    var base = Math.pow(2, bucket - 13);

	    var mapped = base + (i - bucket * 1024) * base / 1024;

	    if (negate)
	    mapped = -mapped;

	    return FloatToHalf(mapped);
	};

	var HalfToInt = function HalfToInt(half) {

	    if (half === 0)
	    return 0;

	    var f = HalfToFloat(half);

	    var negate = false;
	    if (f < 0) {
	        negate = true;
	        f = -f;
	    }

	    var bucket = 0 | Math.floor(Math.log(f) / Math.log(2));
	    var base = Math.pow(2, bucket);

	    var decoded = (f - base) / base * 1024 + (bucket + 13) * 1024;

	    if (negate)
	    decoded += HALF_INT_MAX / 2 - 1;

	    return decoded;
	};

	var HalfTest = function HalfTest() {

	    var tests = [-1 / 255, -0.17, -75, -1789, -0.005];

	    for (var i = 0; i < tests.length; i++) {

	        THREE.log("input", tests[i], "encoded", FloatToHalf(tests[i]), "decoded", HalfToFloat(FloatToHalf(tests[i])));

	    }

	    for (var i = 0; i < HALF_INT_MAX; i++) {
	        var roundtrip = HalfToInt(IntToHalf(i));
	        if (roundtrip !== i) {
	            THREE.log("Roundtrip failed for", i, roundtrip);
	        }
	    }

	};

	module.exports = {
	    FloatToHalf: FloatToHalf,
	    HalfToFloat: HalfToFloat,
	    IntToHalf: IntToHalf,
	    HalfToInt: HalfToInt,
	    HalfTest: HalfTest };

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";var NODE_TYPE_ASSEMBLY = 0x0, // Real world object as assembly of sub-objects
	NODE_TYPE_INSERT = 0x1, // Insert of multiple-instanced object
	NODE_TYPE_LAYER = 0x2, // A layer (specific abstraction collection)
	NODE_TYPE_COLLECTION = 0x3, // An abstract collection of objects (e.g. “Doors”)
	NODE_TYPE_COMPOSITE = 0x4, // A real world object whose internal structure is not relevant to end user
	NODE_TYPE_MODEL = 0x5, // Root of tree representing an entire Model. An aggregate model can contain multiple nested models.
	NODE_TYPE_GEOMETRY = 0x6, // Leaf geometry node
	NODE_TYPE_BITS = 0x7, //mask for all bits used by node type

	NODE_FLAG_NOSELECT = 0x20000000,
	NODE_FLAG_OFF = 0x40000000,
	NODE_FLAG_HIDE = 0x80000000;

	var SelectionMode = {
	    LEAF_OBJECT: 0,
	    FIRST_OBJECT: 1,
	    LAST_OBJECT: 2 };



	function InstanceTree(nodeAccess, objectCount, maxDepth) {

	    this.nodeAccess = nodeAccess;
	    this.maxDepth = maxDepth;
	    this.objectCount = objectCount;
	    this.numHidden = 0;
	    this.numOff = 0;
	}


	InstanceTree.prototype.setFlagNode = function (dbId, flag, value) {

	    var old = this.nodeAccess.getNodeFlags(dbId);

	    // "!!" converts to bool
	    if (!!(old & flag) == value)
	    return false;

	    if (value)
	    this.nodeAccess.setNodeFlags(dbId, old | flag);else

	    this.nodeAccess.setNodeFlags(dbId, old & ~flag);

	    return true;
	};

	InstanceTree.prototype.setFlagGlobal = function (flag, value) {
	    var na = this.nodeAccess;

	    var i = 0,iEnd = na.numNodes;
	    if (value) {
	        for (; i < iEnd; i++) {
	            na.setNodeFlags(i, na.getNodeFlags(i) | flag);
	        }
	    } else {
	        var notflag = ~flag;
	        for (; i < iEnd; i++) {
	            na.setNodeFlags(i, na.getNodeFlags(i) & notflag);
	        }
	    }
	};

	/**
	    * When a node is OFF, it is completely skipped for display purposes
	    */
	InstanceTree.prototype.setNodeOff = function (dbId, value) {
	    var res = this.setFlagNode(dbId, NODE_FLAG_OFF, value);
	    if (res) {
	        if (value)
	        this.numOff++;else

	        this.numOff--;
	    }
	    return res;
	};

	InstanceTree.prototype.isNodeOff = function (dbId) {
	    return !!(this.nodeAccess.getNodeFlags(dbId) & NODE_FLAG_OFF);
	};


	/**
	    * When a node is HIDDEN it will display in ghosted style
	    * if display of hidden objects is on
	    */
	InstanceTree.prototype.setNodeHidden = function (dbId, value) {
	    var res = this.setFlagNode(dbId, NODE_FLAG_HIDE, value);
	    if (res) {
	        if (value)
	        this.numHidden++;else

	        this.numHidden--;
	    }
	    return res;
	};

	InstanceTree.prototype.isNodeHidden = function (dbId) {
	    return !!(this.nodeAccess.getNodeFlags(dbId) & NODE_FLAG_HIDE);
	};

	InstanceTree.prototype.getNodeType = function (dbId) {
	    return this.nodeAccess.getNodeFlags(dbId) & NODE_TYPE_BITS;
	};

	InstanceTree.prototype.isNodeSelectable = function (dbId) {
	    return !(this.nodeAccess.getNodeFlags(dbId) & NODE_FLAG_NOSELECT);
	};

	InstanceTree.prototype.getNodeParentId = function (dbId) {
	    return this.nodeAccess.getParentId(dbId);
	};

	InstanceTree.prototype.getRootId = function () {
	    return this.nodeAccess.rootId;
	};

	InstanceTree.prototype.getNodeName = function (dbId) {
	    return this.nodeAccess.name(dbId);
	};

	InstanceTree.prototype.getChildCount = function (dbId) {
	    return this.nodeAccess.getNumChildren(dbId);
	};

	InstanceTree.prototype.getNodeBox = function (dbId, dst) {
	    this.nodeAccess.getNodeBox(dbId, dst);
	};



	InstanceTree.prototype.enumNodeFragments = function (node, callback, recursive) {

	    //TODO: Temporary until we are consistently using dbId
	    var dbId;
	    if (typeof node == "number")
	    dbId = node;else
	    if (node)
	    dbId = node.dbId;

	    var self = this;

	    function traverse(dbId) {

	        self.nodeAccess.enumNodeFragments(dbId, callback);

	        if (recursive) {
	            self.enumNodeChildren(dbId, function (child_dbId) {
	                traverse(child_dbId);
	            });
	        }
	    }

	    traverse(dbId);

	};


	InstanceTree.prototype.enumNodeChildren = function (node, callback, recursive) {

	    //TODO: Temporary until we are consistently using dbId
	    var dbId;
	    if (typeof node == "number")
	    dbId = node;else
	    if (node)
	    dbId = node.dbId;

	    var self = this;

	    if (recursive) {
	        callback(dbId);
	    }

	    function traverse(dbId) {

	        self.nodeAccess.enumNodeChildren(dbId, function (childId) {
	            callback(childId);

	            if (recursive)
	            traverse(childId);
	        });

	    }

	    traverse(dbId);
	};


	//Given a leaf node, find the correct parent
	//node to select according to the given selection mode
	InstanceTree.prototype.findNodeForSelection = function (dbId, selectionMode) {

	    //Default legacy mode -- select exactly the node we got asked for.
	    if (selectionMode === SelectionMode.LEAF_OBJECT)
	    return dbId;

	    var res = dbId;
	    var node, nt;

	    if (selectionMode === SelectionMode.FIRST_OBJECT) {
	        //1. Find the leaf node of the selection tree containing it and then follow the chain of parents all the way up to the root to get the complete path from root to leaf node.
	        //2. Start at the root and walk down the path until the first node that is not a Model, Layer or Collection. Select it.
	        var idpath = [];

	        node = dbId;
	        while (node) {
	            idpath.push(node);
	            node = this.getNodeParentId(node);
	        }

	        for (var i = idpath.length - 1; i >= 0; i--) {
	            nt = this.getNodeType(idpath[i]);
	            if (nt !== NODE_TYPE_MODEL &&
	            nt !== NODE_TYPE_LAYER &&
	            nt !== NODE_TYPE_COLLECTION) {
	                res = idpath[i];
	                break;
	            }
	        }
	    } else

	    if (selectionMode === SelectionMode.LAST_OBJECT) {
	        // Start at the leaf and walk up the path until the first node that is Composite. Select it. If there’s no Composite node in the path select the leaf.

	        node = dbId;
	        while (node) {
	            nt = this.getNodeType(node);
	            if (nt === NODE_TYPE_COMPOSITE) {
	                res = node;
	                break;
	            }
	            node = this.getNodeParentId(node);
	        }

	    }

	    return res;

	};

	module.exports = {
	    InstanceTree: InstanceTree,
	    SelectionMode: SelectionMode };

/***/ },
/* 121 */
/***/ function(module, exports) {

	"use strict"; //
	// struct Node {
	//     int dbId;
	//	   int parentDbId;
	//	   int firstChild; //if negative it's a fragment list
	//     int numChildren;
	//     int flags;	
	// };
	// sizeof(Node) == 20
	var SIZEOF_NODE = 5, //integers
	OFFSET_DBID = 0,
	OFFSET_PARENT = 1,
	OFFSET_FIRST_CHILD = 2,
	OFFSET_NUM_CHILD = 3,
	OFFSET_FLAGS = 4;

	// note: objectCount and fragmentCount are not used
	function NodeArray(objectCount, fragmentCount) {

		this.nodes = [];
		this.nextNode = 0;

		this.children = [];
		this.nextChild = 0;

		this.dbIdToIndex = {};

		this.names = [];
		this.s2i = {}; //duplicate string pool
		this.strings = [];
		this.nameSuffixes = []; //integers

		//Occupy index zero so that we can use index 0 as undefined
		this.getIndex(0);
	}

	NodeArray.prototype.getIndex = function (dbId) {

		var index = this.dbIdToIndex[dbId];

		if (index)
		return index;

		index = this.nextNode++;

		//Allocate space for new node
		this.nodes.push(dbId); //store the dbId as first integer in the Node structure
		//Add four blank integers to be filled by setNode
		for (var i = 1; i < SIZEOF_NODE; i++) {
			this.nodes.push(0);}

		this.dbIdToIndex[dbId] = index;

		return index;
	};

	NodeArray.prototype.setNode = function (dbId, parentDbId, name, flags, childrenIds, fragIds) {

		var index = this.getIndex(dbId);

		var baseOffset = index * SIZEOF_NODE;

		var numChildren = childrenIds.length;
		var hasFragments = fragIds && fragIds.length;
		if (hasFragments) {
			numChildren += fragIds.length;
		}

		this.nodes[baseOffset + OFFSET_PARENT] = parentDbId;
		this.nodes[baseOffset + OFFSET_FIRST_CHILD] = this.nextChild;
		this.nodes[baseOffset + OFFSET_NUM_CHILD] = hasFragments ? -numChildren : numChildren;
		this.nodes[baseOffset + OFFSET_FLAGS] = flags;

		for (var i = 0; i < childrenIds.length; i++) {
			this.children[this.nextChild++] = this.getIndex(childrenIds[i]);}

		//Store fragIds as negative numbers so we can differentiate them when looking through
		//the array later.
		if (hasFragments) {
			for (var i = 0; i < fragIds.length; i++) {
				this.children[this.nextChild++] = -fragIds[i] - 1;} //index 0 stored as -1, etc., since 0 is not negative
		}

		if (this.nextChild > this.children.length) {
			// TODO: this code may run in a worker, replace console with something else
			console.error("Child index out of bounds -- should not happen");
		}

		this.processName(index, name);
	};

	NodeArray.prototype.processName = function (index, name) {

		//Attempt to decompose the name into a base string + integer,
		//like for example "Base Wall [12345678]" or "Crank Shaft:1"
		//We will try to reduce memory usage by storing "Base Wall" just once.
		var base;
		var suffix;

		//Try Revit style [1234] first
		var iStart = -1;
		var iEnd = -1;

		if (name) {//name should not be empty, but hey, it happens.
			iEnd = name.lastIndexOf("]");
			iStart = name.lastIndexOf("[");

			//Try Inventor style :1234
			if (iStart === -1 || iEnd === -1) {
				iStart = name.lastIndexOf(":");
				iEnd = name.length;
			}
		}

		//TODO: Any other separators? What does AutoCAD use?

		if (iStart >= 0 && iEnd > iStart) {
			base = name.slice(0, iStart + 1);
			var ssuffix = name.slice(iStart + 1, iEnd);
			suffix = parseInt(ssuffix, 10);

			//make sure we get the same thing back when
			//converting back to string, otherwise don't 
			//decompose it.
			if (!suffix || suffix + "" !== ssuffix) {
				base = name;
				suffix = 0;
			}
		} else {
			base = name;
			suffix = 0;
		}


		var idx = this.s2i[base];
		if (idx === undefined) {
			this.strings.push(base);
			idx = this.strings.length - 1;
			this.s2i[base] = idx;
		}

		this.names[index] = idx;
		this.nameSuffixes[index] = suffix;
	};


	function arrayToBuffer(a) {
		var b = new Int32Array(a.length);
		b.set(a);
		return b;
	}

	// note none of these arguments are used
	NodeArray.prototype.flatten = function (dbId, parentDbId, name, flags, childrenIds, isLeaf) {
		this.nodes = arrayToBuffer(this.nodes);
		this.children = arrayToBuffer(this.children);
		this.names = arrayToBuffer(this.names);
		this.nameSuffixes = arrayToBuffer(this.nameSuffixes);
		this.s2i = null; //we don't need this temporary map once we've built the strings list
	};



	function InstanceTreeAccess(nodeArray, rootId, nodeBoxes) {
		this.nodes = nodeArray.nodes;
		this.children = nodeArray.children;
		this.dbIdToIndex = nodeArray.dbIdToIndex;
		this.names = nodeArray.names;
		this.nameSuffixes = nodeArray.nameSuffixes;
		this.strings = nodeArray.strings;
		this.rootId = rootId;
		this.numNodes = this.nodes.length / SIZEOF_NODE;
		this.visibleIds = null;


		this.nodeBoxes = nodeBoxes || new Float32Array(6 * this.numNodes);
	}

	// note dbId is not used
	InstanceTreeAccess.prototype.getNumNodes = function (dbId) {
		return this.numNodes;
	};

	InstanceTreeAccess.prototype.getIndex = function (dbId) {
		return this.dbIdToIndex[dbId];
	};

	InstanceTreeAccess.prototype.name = function (dbId) {
		var idx = this.dbIdToIndex[dbId];
		var base = this.strings[this.names[idx]];
		var suffix = this.nameSuffixes[idx];
		if (suffix) {
			//NOTE: update this logic if more separators are supported in processName above
			var lastChar = base.charAt(base.length - 1);
			if (lastChar === "[")
			return base + suffix + "]";else

			return base + suffix;
		} else {
			return base;
		}
	};

	InstanceTreeAccess.prototype.getParentId = function (dbId) {
		return this.nodes[this.dbIdToIndex[dbId] * SIZEOF_NODE + OFFSET_PARENT];
	};

	InstanceTreeAccess.prototype.getNodeFlags = function (dbId) {
		return this.nodes[this.dbIdToIndex[dbId] * SIZEOF_NODE + OFFSET_FLAGS];
	};

	InstanceTreeAccess.prototype.setNodeFlags = function (dbId, flags) {
		this.nodes[this.dbIdToIndex[dbId] * SIZEOF_NODE + OFFSET_FLAGS] = flags;
	};

	InstanceTreeAccess.prototype.getNumChildren = function (dbId) {

		var idx = this.dbIdToIndex[dbId];
		var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

		//If numChildren is non-negative, then all children are nodes (not fragments)
		if (numChildren >= 0)
		return numChildren;

		//Node has mixed fragments and child nodes, so we have to loop and collect just the node children
		var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];

		numChildren = Math.abs(numChildren);

		var numNodeChildren = 0;

		for (var i = 0; i < numChildren; i++) {
			var childIdx = this.children[firstChild + i];

			//did we reach the fragment ids sub-list?
			if (childIdx < 0)
			break;

			numNodeChildren++;
		}

		return numNodeChildren;
	};

	InstanceTreeAccess.prototype.getNumFragments = function (dbId) {
		var idx = this.dbIdToIndex[dbId];

		var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

		//If numChildren is non-negative, there aren't any fragments belonging to this node
		if (numChildren >= 0)
		return 0;

		//Node has mixed fragments and child nodes, so we have to loop and collect just the node children
		var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];

		numChildren = Math.abs(numChildren);

		var numFragChildren = 0;

		//Iterate backwards, because fragment children are at the back of the children list
		for (var i = numChildren - 1; i >= 0; i--) {
			var childIdx = this.children[firstChild + i];

			//did we reach the inner node children ids sub-list?
			if (childIdx >= 0)
			break;

			numFragChildren++;
		}

		return numFragChildren;
	};

	InstanceTreeAccess.prototype.getNodeBox = function (dbId, dst) {
		var off = this.getIndex(dbId) * 6;
		for (var i = 0; i < 6; i++) {
			dst[i] = this.nodeBoxes[off + i];}
	};

	//Returns an array containing the dbIds of all objects
	//that are physically represented in the scene. Not all
	//objects in the property database occur physically in each graphics viewable.
	InstanceTreeAccess.prototype.getVisibleIds = function () {
		if (!this.visibleIds) {
			this.visibleIds = Object.keys(this.dbIdToIndex).map(function (k) {return parseInt(k);});
		}

		return this.visibleIds;
	};


	InstanceTreeAccess.prototype.enumNodeChildren = function (dbId, callback) {
		var idx = this.dbIdToIndex[dbId];
		var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];
		var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

		numChildren = Math.abs(numChildren);

		for (var i = 0; i < numChildren; i++) {
			var childIdx = this.children[firstChild + i];

			//did we reach the fragment ids sub-list?
			if (childIdx < 0)
			break;

			var childDbId = this.nodes[childIdx * SIZEOF_NODE + OFFSET_DBID];
			callback(childDbId, dbId, idx);
		}
	};

	InstanceTreeAccess.prototype.enumNodeFragments = function (dbId, callback) {
		var idx = this.dbIdToIndex[dbId];
		var firstChild = this.nodes[idx * SIZEOF_NODE + OFFSET_FIRST_CHILD];
		var numChildren = this.nodes[idx * SIZEOF_NODE + OFFSET_NUM_CHILD];

		//If numChildren is negative, it means there are fragments in the node
		if (numChildren < 0) {
			numChildren = -numChildren;
			for (var i = 0; i < numChildren; i++) {
				var childIdx = this.children[firstChild + i];

				//skip past children that are inner nodes (not fragments)
				if (childIdx > 0)
				continue;

				//Convert fragId from -1 based negative back to the actual fragId
				callback(-childIdx - 1, dbId, idx);
			}
		}
	};

	InstanceTreeAccess.prototype.computeBoxes = function (fragBoxes) {

		var nodeAccess = this;
		var idx = nodeAccess.getIndex(nodeAccess.rootId);
		var nodeBoxes = nodeAccess.nodeBoxes;

		function traverseChildren(child_dbId, parentDbID, parentIdx) {

			var childIdx = nodeAccess.getIndex(child_dbId);

			//Recurse, then add all child boxes to make this node's box
			computeTreeBBoxesRec(child_dbId, childIdx);

			var box_offset = parentIdx * 6;
			var child_box_offset = childIdx * 6;
			for (var k = 0; k < 3; k++) {
				if (nodeBoxes[box_offset + k] > nodeBoxes[child_box_offset + k])
				nodeBoxes[box_offset + k] = nodeBoxes[child_box_offset + k];
				if (nodeBoxes[box_offset + k + 3] < nodeBoxes[child_box_offset + k + 3])
				nodeBoxes[box_offset + k + 3] = nodeBoxes[child_box_offset + k + 3];
			}
		}

		function traverseFragments(fragId, dbId, idx) {
			var frag_box_offset = fragId * 6;
			var box_offset = idx * 6;

			for (var k = 0; k < 3; k++) {
				if (nodeBoxes[box_offset + k] > fragBoxes[frag_box_offset + k])
				nodeBoxes[box_offset + k] = fragBoxes[frag_box_offset + k];
				if (nodeBoxes[box_offset + k + 3] < fragBoxes[frag_box_offset + k + 3])
				nodeBoxes[box_offset + k + 3] = fragBoxes[frag_box_offset + k + 3];
			}
		}

		function computeTreeBBoxesRec(dbId, idx) {

			var box_offset = idx * 6;
			nodeBoxes[box_offset] = nodeBoxes[box_offset + 1] = nodeBoxes[box_offset + 2] = Infinity;
			nodeBoxes[box_offset + 3] = nodeBoxes[box_offset + 4] = nodeBoxes[box_offset + 5] = -Infinity;

			if (nodeAccess.getNumChildren(dbId)) {
				nodeAccess.enumNodeChildren(dbId, traverseChildren, true);
			}

			//Leaf node -- don't think it's possible for a node to have
			//both children and leaf fragments, but we do handle that here.
			if (nodeAccess.getNumFragments(dbId)) {
				nodeAccess.enumNodeFragments(dbId, traverseFragments);
			}

		}

		computeTreeBBoxesRec(nodeAccess.rootId, idx);
	};

	module.exports = {
		InstanceTreeStorage: NodeArray,
		InstanceTreeAccess: InstanceTreeAccess };

/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict"; /**
	               * BVH definitions:
	               *
	               * BVH Node: if this was C (the only real programming language), it would go something like this,
	               * but with better alignment.
	               *
	               * This is definition for "fat" nodes (for rasterization),
	               * i.e. when inner nodes also contain primitives.
	               * struct Node {                                                            byte/short/int offset
	               *      float worldBox[6]; //world box of the node node                         0/0/0
	               *      int leftChildIndex; //pointer to left child node (right is left+1)     24/12/6
	               *      ushort primCount; //how many fragments are at this node                28/14/7
	               *      ushort flags; //bitfield of good stuff                                 30/15/7.5
	               *
	               *      int primStart; //start of node's own primitives (fragments) list       32/16/8
	               * };
	               * => sizeof(Node) = 36 bytes
	              
	               * Definition for lean nodes (for ray casting): when a node is either inner node (just children, no primitives)
	               * or leaf (just primitives, no children).
	               * struct Node {
	               *      float worldBox[6]; //world box of the node
	               *      union {
	               *          int leftChildIndex; //pointer to left child node (right is left+1)
	               *          int primStart; //start of node's own primitives (fragments) list
	               *      };
	               *      ushort primCount; //how many fragments are at this node
	               *      ushort flags; //bitfield of good stuff
	               * };
	               * => sizeof(Node) = 32 bytes
	               *
	               * The class below encapsulates an array of such nodes using ArrayBuffer as backing store.
	               *
	               * @param {ArrayBuffer|number} initialData  Initial content of the NodeArray, or initial allocation of empty nodes
	               * @param {boolean} useLeanNode Use minimal node structure size. Currently this parameter must be set to false.
	               * @constructor
	               */
	function NodeArray(initialData, useLeanNode) {
	    'use strict';

	    if (useLeanNode) {
	        this.bytes_per_node = 32;
	    } else {
	        this.bytes_per_node = 36;
	    }

	    var initialCount;
	    var initialBuffer;

	    if (initialData instanceof ArrayBuffer) {
	        initialCount = initialData.byteLength / this.bytes_per_node;
	        initialBuffer = initialData;
	        this.nodeCount = initialCount;
	    } else
	    {
	        initialCount = initialData | 0;
	        initialBuffer = new ArrayBuffer(this.bytes_per_node * initialCount);
	        this.nodeCount = 0;
	    }

	    this.nodeCapacity = initialCount;
	    this.nodesRaw = initialBuffer;

	    this.is_lean_node = useLeanNode;
	    this.node_stride = this.bytes_per_node / 4;
	    this.node_stride_short = this.bytes_per_node / 2;

	    //Allocate memory buffer for all tree nodes
	    this.nodesF = new Float32Array(this.nodesRaw);
	    this.nodesI = new Int32Array(this.nodesRaw);
	    this.nodesS = new Uint16Array(this.nodesRaw);
	}

	NodeArray.prototype.setLeftChild = function (nodeidx, childidx) {
	    this.nodesI[nodeidx * this.node_stride + 6] = childidx;
	};
	NodeArray.prototype.getLeftChild = function (nodeidx) {
	    return this.nodesI[nodeidx * this.node_stride + 6];
	};

	NodeArray.prototype.setPrimStart = function (nodeidx, start) {
	    if (this.is_lean_node)
	    this.nodesI[nodeidx * this.node_stride + 6] = start;else

	    this.nodesI[nodeidx * this.node_stride + 8] = start;
	};
	NodeArray.prototype.getPrimStart = function (nodeidx) {
	    if (this.is_lean_node)
	    return this.nodesI[nodeidx * this.node_stride + 6];else

	    return this.nodesI[nodeidx * this.node_stride + 8];
	};

	NodeArray.prototype.setPrimCount = function (nodeidx, count) {
	    this.nodesS[nodeidx * this.node_stride_short + 14] = count;
	};
	NodeArray.prototype.getPrimCount = function (nodeidx) {
	    return this.nodesS[nodeidx * this.node_stride_short + 14];
	};

	NodeArray.prototype.setFlags = function (nodeidx, axis, isFirst, isTransparent) {
	    this.nodesS[nodeidx * this.node_stride_short + 15] = isTransparent << 3 | isFirst << 2 | axis & 0x3;
	};
	NodeArray.prototype.getFlags = function (nodeidx) {
	    return this.nodesS[nodeidx * this.node_stride_short + 15];
	};

	NodeArray.prototype.setBox0 = function (nodeidx, src) {
	    var off = nodeidx * this.node_stride;
	    var dst = this.nodesF;
	    dst[off] = src[0];
	    dst[off + 1] = src[1];
	    dst[off + 2] = src[2];
	    dst[off + 3] = src[3];
	    dst[off + 4] = src[4];
	    dst[off + 5] = src[5];
	};
	NodeArray.prototype.getBoxThree = function (nodeidx, dst) {
	    var off = nodeidx * this.node_stride;
	    var src = this.nodesF;
	    dst.min.x = src[off];
	    dst.min.y = src[off + 1];
	    dst.min.z = src[off + 2];
	    dst.max.x = src[off + 3];
	    dst.max.y = src[off + 4];
	    dst.max.z = src[off + 5];
	};
	NodeArray.prototype.setBoxThree = function (nodeidx, src) {
	    var off = nodeidx * this.node_stride;
	    var dst = this.nodesF;
	    dst[off] = src.min.x;
	    dst[off + 1] = src.min.y;
	    dst[off + 2] = src.min.z;
	    dst[off + 3] = src.max.x;
	    dst[off + 4] = src.max.y;
	    dst[off + 5] = src.max.z;
	};




	NodeArray.prototype.makeEmpty = function (nodeidx) {

	    var off = nodeidx * this.node_stride;
	    var dst = this.nodesI;

	    //No point to makeEmpty here, because the box gets set
	    //directly when the node is initialized in bvh_subdivide.
	    //box_make_empty(this.nodesF, off);

	    //_this.setLeftChild(nodeidx,-1);
	    dst[off + 6] = -1;

	    //both prim count and flags to 0
	    dst[off + 7] = 0;

	    //_this.setPrimStart(nodeidx, -1);
	    if (!this.is_lean_node)
	    dst[off + 8] = -1;

	};

	NodeArray.prototype.realloc = function (extraSize) {
	    if (this.nodeCount + extraSize > this.nodeCapacity) {
	        var nsz = 0 | this.nodeCapacity * 3 / 2;
	        if (nsz < this.nodeCount + extraSize)
	        nsz = this.nodeCount + extraSize;

	        var nnodes = new ArrayBuffer(nsz * this.bytes_per_node);
	        var nnodesI = new Int32Array(nnodes);
	        nnodesI.set(this.nodesI);

	        this.nodeCapacity = nsz;
	        this.nodesRaw = nnodes;
	        this.nodesF = new Float32Array(nnodes);
	        this.nodesI = nnodesI;
	        this.nodesS = new Uint16Array(nnodes);
	    }
	};

	NodeArray.prototype.nextNodes = function (howMany) {

	    this.realloc(howMany);

	    var res = this.nodeCount;
	    this.nodeCount += howMany;

	    for (var i = 0; i < howMany; i++) {
	        this.makeEmpty(res + i);
	    }

	    return res;
	};

	NodeArray.prototype.getRawData = function () {
	    return this.nodesRaw.slice(0, this.nodeCount * this.bytes_per_node);
	};

	var POINT_STRIDE = 3;
	var BOX_EPSILON = 1e-5;
	var BOX_SCALE_EPSILON = 1e-5;
	var MAX_DEPTH = 15; /* max tree depth */
	var MAX_BINS = 16;

	/**
	                   * Bounding Volume Hierarchy build algorithm.
	                   * Uses top down binning -- see "On fast Construction of SAH-based Bounding Volume Hierarchies" by I.Wald
	                   * Ported from the C version here: https://git.autodesk.com/stanevt/t-ray/blob/master/render3d/t-ray/t-core/t-bvh.c
	                   * Optimized for JavaScript.
	                   */
	var BVHModule = function () {
	    //There be dragons in this closure.

	    "use strict";


	    /**
	                   * Utilities for manipulating bounding boxes stored
	                   * in external array (as sextuplets of float32)
	                   */


	    function box_get_centroid(dst, dst_off, src, src_off) {
	        dst[dst_off] = 0.5 * (src[src_off] + src[src_off + 3]);
	        dst[dst_off + 1] = 0.5 * (src[src_off + 1] + src[src_off + 4]);
	        dst[dst_off + 2] = 0.5 * (src[src_off + 2] + src[src_off + 5]);
	    }

	    function box_add_point_0(dst, src, src_off) {

	        if (dst[0] > src[src_off]) dst[0] = src[src_off];
	        if (dst[3] < src[src_off]) dst[3] = src[src_off];

	        if (dst[1] > src[src_off + 1]) dst[1] = src[src_off + 1];
	        if (dst[4] < src[src_off + 1]) dst[4] = src[src_off + 1];

	        if (dst[2] > src[src_off + 2]) dst[2] = src[src_off + 2];
	        if (dst[5] < src[src_off + 2]) dst[5] = src[src_off + 2];

	    }

	    function box_add_box_0(dst, src, src_off) {

	        if (dst[0] > src[src_off]) dst[0] = src[src_off];
	        if (dst[1] > src[src_off + 1]) dst[1] = src[src_off + 1];
	        if (dst[2] > src[src_off + 2]) dst[2] = src[src_off + 2];

	        if (dst[3] < src[src_off + 3]) dst[3] = src[src_off + 3];
	        if (dst[4] < src[src_off + 4]) dst[4] = src[src_off + 4];
	        if (dst[5] < src[src_off + 5]) dst[5] = src[src_off + 5];
	    }

	    function box_add_box_00(dst, src) {
	        if (dst[0] > src[0]) dst[0] = src[0];
	        if (dst[1] > src[1]) dst[1] = src[1];
	        if (dst[2] > src[2]) dst[2] = src[2];

	        if (dst[3] < src[3]) dst[3] = src[3];
	        if (dst[4] < src[4]) dst[4] = src[4];
	        if (dst[5] < src[5]) dst[5] = src[5];
	    }

	    function box_get_size(dst, dst_off, src, src_off) {
	        for (var i = 0; i < 3; i++) {
	            dst[dst_off + i] = src[src_off + 3 + i] - src[src_off + i];
	        }
	    }

	    //function box_copy(dst, dst_off, src, src_off) {
	    //    for (var i=0; i<6; i++) {
	    //        dst[dst_off+i] = src[src_off+i];
	    //    }
	    //}

	    // unwound version of box_copy
	    function box_copy_00(dst, src) {
	        dst[0] = src[0];
	        dst[1] = src[1];
	        dst[2] = src[2];
	        dst[3] = src[3];
	        dst[4] = src[4];
	        dst[5] = src[5];
	    }

	    var dbl_max = Infinity;

	    //function box_make_empty(dst, dst_off) {
	    //        dst[dst_off]   =  dbl_max;
	    //        dst[dst_off+1] =  dbl_max;
	    //        dst[dst_off+2] =  dbl_max;
	    //        dst[dst_off+3] = -dbl_max;
	    //        dst[dst_off+4] = -dbl_max;
	    //        dst[dst_off+5] = -dbl_max;
	    //}

	    function box_make_empty_0(dst) {
	        dst[0] = dbl_max;
	        dst[1] = dbl_max;
	        dst[2] = dbl_max;
	        dst[3] = -dbl_max;
	        dst[4] = -dbl_max;
	        dst[5] = -dbl_max;
	    }

	    function box_area(src, src_off) {

	        var dx = src[src_off + 3] - src[src_off];
	        var dy = src[src_off + 4] - src[src_off + 1];
	        var dz = src[src_off + 5] - src[src_off + 2];

	        if (dx < 0 || dy < 0 || dz < 0)
	        return 0;

	        return 2.0 * (dx * dy + dy * dz + dz * dx);
	    }

	    function box_area_0(src) {

	        var dx = src[3] - src[0];
	        var dy = src[4] - src[1];
	        var dz = src[5] - src[2];

	        if (dx < 0 || dy < 0 || dz < 0)
	        return 0;

	        return 2.0 * (dx * dy + dy * dz + dz * dx);
	    }





	    function bvh_split_info() {
	        this.vb_left = new Float32Array(6);
	        this.vb_right = new Float32Array(6);
	        this.cb_left = new Float32Array(6);
	        this.cb_right = new Float32Array(6);
	        this.num_left = 0;
	        this.best_split = -1;
	        this.best_cost = -1;
	        this.num_bins = -1;
	    }

	    bvh_split_info.prototype.reset = function () {
	        this.num_left = 0;
	        this.best_split = -1;
	        this.best_cost = -1;
	        this.num_bins = -1;
	    };


	    function bvh_bin() {
	        this.box_bbox = new Float32Array(6); // bbox of all primitive bboxes
	        this.box_centroid = new Float32Array(6); // bbox of all primitive centroids
	        this.num_prims = 0; // number of primitives in the bin
	    }

	    bvh_bin.prototype.reset = function () {
	        this.num_prims = 0; // number of primitives in the bin
	        box_make_empty_0(this.box_bbox);
	        box_make_empty_0(this.box_centroid);
	    };

	    function accum_bin_info() {
	        this.BL = new Float32Array(6);
	        this.CL = new Float32Array(6);
	        this.NL = 0;
	        this.AL = 0;
	    }

	    accum_bin_info.prototype.reset = function () {
	        this.NL = 0;
	        this.AL = 0;

	        box_make_empty_0(this.BL);
	        box_make_empty_0(this.CL);
	    };


	    //Scratch variables used by bvh_bin_axis
	    //TODO: can be replaced by a flat ArrayBuffer
	    var bins = [];
	    var i;
	    for (i = 0; i < MAX_BINS; i++) {
	        bins.push(new bvh_bin());
	    }

	    //TODO: can be replaced by a flat ArrayBuffer
	    var ai = [];
	    for (i = 0; i < MAX_BINS - 1; i++) {
	        ai.push(new accum_bin_info());}

	    var BR = new Float32Array(6);
	    var CR = new Float32Array(6);


	    function assign_bins(bvh, start, end, axis, cb, cbdiag, num_bins) {

	        var centroids = bvh.centroids;
	        var primitives = bvh.primitives;
	        var boxes = bvh.finfo.boxes;
	        var boxStride = bvh.finfo.boxStride;

	        /* bin assignment */
	        var k1 = num_bins * (1.0 - BOX_SCALE_EPSILON) / cbdiag[axis];
	        var cbaxis = cb[axis];
	        var sp = bvh.sort_prims;

	        for (var j = start; j <= end; j++)
	        {
	            /* map array index to primitive index -- since primitive index array gets reordered by the BVH build*/
	            /* while the primitive info array is not reordered */
	            var iprim = primitives[j] | 0;

	            var fpbin = k1 * (centroids[iprim * 3 /*POINT_STRIDE*/ + axis] - cbaxis);
	            var binid = fpbin | 0; //Truncate to int is algorithmic -> not an optimization thing!

	            /* possible floating point problems */
	            if (binid < 0)
	            {
	                binid = 0;
	                //debug("Bin index out of range " + fpbin);
	            } else
	            if (binid >= num_bins)
	            {
	                binid = num_bins - 1;
	                //debug("Bin index out of range. " + fpbin);
	            }

	            /* Store the bin index for the partitioning step, so we don't recompute it there */
	            sp[j] = binid;

	            /* update other bin data with the new primitive */
	            //var bin = bins[binid];
	            bins[binid].num_prims++;

	            box_add_box_0(bins[binid].box_bbox, boxes, iprim * boxStride);
	            box_add_point_0(bins[binid].box_centroid, centroids, iprim * 3 /*POINT_STRIDE*/);
	        }
	        /* at this point all primitves are assigned to a bin */
	    }


	    function bvh_bin_axis(bvh, start, end, axis, cb, cbdiag, split_info) {

	        /* if size is near 0 on this axis, cost of split is infinite */
	        if (cbdiag[axis] < bvh.scene_epsilon)
	        {
	            split_info.best_cost = Infinity;
	            return;
	        }

	        var num_bins = MAX_BINS;
	        if (num_bins > end - start + 1)
	        num_bins = end - start + 1;

	        var i;
	        for (i = 0; i < num_bins; i++) {
	            bins[i].reset();}

	        for (i = 0; i < num_bins - 1; i++) {
	            ai[i].reset();}

	        split_info.num_bins = num_bins;

	        assign_bins(bvh, start, end, axis, cb, cbdiag, num_bins);


	        /* now do the accumulation sweep from left to right */
	        box_copy_00(ai[0].BL, bins[0].box_bbox);
	        box_copy_00(ai[0].CL, bins[0].box_centroid);
	        ai[0].AL = box_area_0(ai[0].BL);
	        ai[0].NL = bins[0].num_prims;
	        var bin;
	        for (i = 1; i < num_bins - 1; i++)
	        {
	            bin = bins[i];
	            var aii = ai[i];
	            box_copy_00(aii.BL, ai[i - 1].BL);
	            box_add_box_00(aii.BL, bin.box_bbox);
	            aii.AL = box_area_0(aii.BL);

	            box_copy_00(aii.CL, ai[i - 1].CL);
	            box_add_box_00(aii.CL, bin.box_centroid);

	            aii.NL = ai[i - 1].NL + bin.num_prims;
	        }

	        /* sweep from right to left, keeping track of lowest cost and split */
	        i = num_bins - 1;
	        box_copy_00(BR, bins[i].box_bbox);
	        box_copy_00(CR, bins[i].box_centroid);
	        var AR = box_area_0(BR);
	        var NR = bins[i].num_prims;

	        var best_split = i;
	        var best_cost = AR * NR + ai[i - 1].AL * ai[i - 1].NL;
	        box_copy_00(split_info.vb_right, BR);
	        box_copy_00(split_info.cb_right, bins[i].box_centroid);
	        box_copy_00(split_info.vb_left, ai[i - 1].BL);
	        box_copy_00(split_info.cb_left, ai[i - 1].CL);
	        split_info.num_left = ai[i - 1].NL;

	        for (i = i - 1; i >= 1; i--)
	        {
	            bin = bins[i];
	            box_add_box_00(BR, bin.box_bbox);
	            box_add_box_00(CR, bin.box_centroid);
	            AR = box_area_0(BR);
	            NR += bin.num_prims;

	            var cur_cost = AR * NR + ai[i - 1].AL * ai[i - 1].NL;

	            if (cur_cost <= best_cost)
	            {
	                best_cost = cur_cost;
	                best_split = i;

	                box_copy_00(split_info.vb_right, BR);
	                box_copy_00(split_info.cb_right, CR);
	                box_copy_00(split_info.vb_left, ai[i - 1].BL);
	                box_copy_00(split_info.cb_left, ai[i - 1].CL);
	                split_info.num_left = ai[i - 1].NL;
	            }
	        }

	        split_info.best_split = best_split;
	        split_info.best_cost = best_cost;
	    }

	    function bvh_partition(bvh, start, end, axis, cb, cbdiag, split_info) {

	        //At this point, the original algorithm does an in-place NON-STABLE partition
	        //to move primitives to the left and right sides of the split plane
	        //into contiguous location of the primitives list for use by
	        //the child nodes. But, we want to preserve the ordering by size
	        //without having to do another sort, so we have to use
	        //a temporary storage location to copy into. We place right-side primitives
	        //in temporary storage, then copy back into the original storage in the right order.
	        //Left-side primitives are still put directly into the destination location.
	        var primitives = bvh.primitives;
	        //var centroids = bvh.centroids;
	        var i, j;

	        //sort_prims contains bin indices computed during the split step.
	        //Here we read those and also use sort_prims as temporary holding
	        //of primitive indices. Hopefully the read happens before the write. :)
	        //In C it was cheap enough to compute this again...
	        //var k1 = split_info.num_bins * (1.0 - BOX_SCALE_EPSILON) / cbdiag[axis];
	        //var cbaxis = cb[axis];
	        var sp = bvh.sort_prims;

	        var right = 0;
	        var left = start | 0;
	        var best_split = split_info.best_split | 0;

	        for (i = start; i <= end; i++) {
	            var iprim = primitives[i] | 0;
	            //var fpbin = (k1 * (centroids[3/*POINT_STRIDE*/ * iprim + axis] - cbaxis));
	            var binid = sp[i]; /* fpbin|0; */

	            if (binid < best_split) {
	                primitives[left++] = iprim;
	            } else {
	                sp[right++] = iprim;
	            }
	        }

	        //if ((left-start) != split_info.num_left)
	        //    debug("Mismatch between binning and partitioning.");

	        //Copy back the right-side primitives into main primitives array, while
	        //maintaining order
	        for (j = 0; j < right; j++) {
	            primitives[left + j] = sp[j];
	        }
	        /* at this point the binning is complete and we have computed a split */
	    }


	    function bvh_fatten_inner_node(bvh, nodes, nodeidx, start, end, cb, cbdiag, poly_cut_off) {

	        var primitives = bvh.primitives;
	        var centroids = bvh.centroids;

	        //Take the first few items to place into the inner node,
	        //but do not go over the max item or polygon count.
	        var prim_count = end - start + 1;

	        if (prim_count > bvh.frags_per_inner_node)
	        prim_count = bvh.frags_per_inner_node;

	        if (prim_count > poly_cut_off)
	        prim_count = poly_cut_off;


	        nodes.setPrimStart(nodeidx, start);
	        nodes.setPrimCount(nodeidx, prim_count);
	        start += prim_count;

	        //Because we take some primitives off the input, we have to recompute
	        //the bounding box used for computing the node split.
	        box_make_empty_0(cb);
	        for (var i = start; i <= end; i++) {
	            box_add_point_0(cb, centroids, 3 /*POINT_STRIDE*/ * primitives[i]);
	        }

	        //Also update the split axis -- it could possibly change too.
	        box_get_size(cbdiag, 0, cb, 0);
	        //Decide which axis to split on. Done purely by longest.
	        var axis = 0;
	        if (cbdiag[1] > cbdiag[0])
	        axis = 1;
	        if (cbdiag[2] > cbdiag[axis])
	        axis = 2;

	        return axis;
	    }


	    var cbdiag = new Float32Array(3); //scratch variable used in bvh_subdivide

	    function bvh_subdivide(bvh,
	    nodeidx, /* current parent node to consider splitting */
	    start, end, /* primitive sub-range to be considered at this recursion step */
	    vb, /* bounding volume of the primitives' bounds in the sub-range */
	    cb, /* bounding box of primitive centroids in this range */
	    transparent, /* does the node contain opaque or transparent objects */
	    depth /* recursion depth */)

	    {
	        box_get_size(cbdiag, 0, cb, 0);
	        var nodes = bvh.nodes;
	        var frags_per_leaf = transparent ? bvh.frags_per_leaf_node_transparent : bvh.frags_per_leaf_node;
	        var frags_per_inner = transparent ? bvh.frags_per_inner_node_transparent : bvh.frags_per_inner_node;
	        var polys_per_node = bvh.max_polys_per_node;

	        //Decide which axis to split on.
	        var axis = 0;
	        if (cbdiag[1] > cbdiag[0])
	        axis = 1;
	        if (cbdiag[2] > cbdiag[axis])
	        axis = 2;

	        //Whether the node gets split or not, it gets
	        //the same overall bounding box.
	        nodes.setBox0(nodeidx, vb);

	        //Check the expected polygon count of the node. This figures out the maximum number of fragments
	        // we can put at the node as determined by polys_per_node
	        var poly_count = 0;
	        var poly_cut_off = 0;
	        var prim_count = end - start + 1;

	        // If we have the number of triangles in each mesh, limit the number of primitives in an inner node.
	        if (bvh.finfo.hasPolygonCounts && bvh.frags_per_inner_node) {
	            // Walk through primitives, add up the counts until we reach polys_per_node (10000), or run through
	            // frags_per_inner_node (usually 32).
	            // We know that later on we'll limit the number to frags_per_inner_node, so also do it here.
	            var shorten_end = prim_count <= bvh.frags_per_inner_node ? end : start + bvh.frags_per_inner_node - 1;
	            for (var i = start; i <= shorten_end; i++) {
	                poly_count += bvh.finfo.getPolygonCount(bvh.primitives[i]);
	                poly_cut_off++;
	                if (poly_count > polys_per_node)
	                break;
	            }
	        }

	        var isSmall = prim_count <= frags_per_leaf && poly_count < polys_per_node ||
	        prim_count === 1;

	        //Decide whether to terminate recursion
	        if (isSmall ||
	        depth > MAX_DEPTH || //max recursion depth
	        cbdiag[axis] < bvh.scene_epsilon) //node would be way too tiny for math to make sense (a point)
	            {
	                nodes.setLeftChild(nodeidx, -1);
	                nodes.setPrimStart(nodeidx, start);
	                nodes.setPrimCount(nodeidx, end - start + 1);
	                nodes.setFlags(nodeidx, 0, 0, transparent ? 1 : 0);
	                return;
	            }

	        //Pick the largest (first) primitives to live in this node
	        //NOTE: this assumes primitives are sorted by size.
	        //NOTE: This step is an optional departure from the original, and we also do a check for it above
	        // to compute poly_cut_off.
	        if (frags_per_inner) {
	            axis = bvh_fatten_inner_node(bvh, nodes, nodeidx, start, end, cb, cbdiag, poly_cut_off);
	            start = start + nodes.getPrimCount(nodeidx);
	        }

	        var split_info = new bvh_split_info();

	        //Do the binning of the remaining primitives to go into child nodes
	        bvh_bin_axis(bvh, start, end, axis, cb, cbdiag, split_info);

	        if (split_info.num_bins < 0) {
	            //Split was too costly, so add all objects to the current node and bail
	            nodes.setPrimCount(nodeidx, nodes.getPrimCount(nodeidx) + end - start + 1);
	            return;
	        }

	        bvh_partition(bvh, start, end, axis, cb, cbdiag, split_info);

	        var child_idx = nodes.nextNodes(2);

	        /* set info about split into the node */
	        var cleft = (split_info.vb_left[3 + axis] + split_info.vb_left[axis]) * 0.5;
	        var cright = (split_info.vb_right[3 + axis] + split_info.vb_right[axis]) * 0.5;

	        nodes.setFlags(nodeidx, axis, cleft < cright ? 0 : 1, transparent ? 1 : 0);
	        nodes.setLeftChild(nodeidx, child_idx);


	        /* validate split */
	        /*
	                             if (true) {
	                                 for (var i=start; i< start+num_left; i++)
	                                 {
	                                     //int binid = (int)(k1 * (info->prim_info[info->bvh->iprims[i]].centroid.v[axis] - cb->min.v[axis]));
	                                     var cen = primitives[i] * POINT_STRIDE;
	                                     if (   centroids[cen] < split_info.cb_left[0]
	                                         || centroids[cen] > split_info.cb_left[3]
	                                         || centroids[cen+1] < split_info.cb_left[1]
	                                         || centroids[cen+1] > split_info.cb_left[4]
	                                         || centroids[cen+2] < split_info.cb_left[2]
	                                         || centroids[cen+2] > split_info.cb_left[5])
	                                     {
	                                         debug ("wrong centroid box");
	                                     }
	                                 }
	                                   for (i=start+num_left; i<=end; i++)
	                                 {
	                                     //int binid = (int)(k1 * (info->prim_info[info->bvh->iprims[i]].centroid.v[axis] - cb->min.v[axis]));
	                                     var cen = primitives[i] * POINT_STRIDE;
	                                     if (   centroids[cen] < split_info.cb_right[0]
	                                         || centroids[cen] > split_info.cb_right[3]
	                                         || centroids[cen+1] < split_info.cb_right[1]
	                                         || centroids[cen+1] > split_info.cb_right[4]
	                                         || centroids[cen+2] < split_info.cb_right[2]
	                                         || centroids[cen+2] > split_info.cb_right[5])
	                                     {
	                                         debug ("wrong centroid box");
	                                     }
	                                 }
	                             }
	                             */


	        /* recurse */
	        //bvh_subdivide(bvh, child_idx, start, start + split_info.num_left - 1, split_info.vb_left, split_info.cb_left, transparent, depth+1);
	        //bvh_subdivide(bvh, child_idx + 1, start + split_info.num_left, end, split_info.vb_right, split_info.cb_right, transparent, depth+1);

	        //Iterative stack-based recursion for easier profiling
	        bvh.recursion_stack.push([bvh, child_idx + 1, start + split_info.num_left, end, split_info.vb_right, split_info.cb_right, transparent, depth + 1]);
	        bvh.recursion_stack.push([bvh, child_idx, start, start + split_info.num_left - 1, split_info.vb_left, split_info.cb_left, transparent, depth + 1]);

	    }


	    function compute_boxes(bvh) {

	        var boxv_o = bvh.boxv_o;
	        var boxc_o = bvh.boxc_o;
	        var boxv_t = bvh.boxv_t;
	        var boxc_t = bvh.boxc_t;

	        box_make_empty_0(boxv_o);
	        box_make_empty_0(boxc_o);
	        box_make_empty_0(boxv_t);
	        box_make_empty_0(boxc_t);

	        var c = bvh.centroids;
	        var b = bvh.finfo.boxes;
	        var boxStride = bvh.finfo.boxStride;

	        for (var i = 0, iEnd = bvh.prim_count; i < iEnd; i++) {


	            box_get_centroid(c, 3 /*POINT_STRIDE*/ * i, b, boxStride * i);

	            if (i >= bvh.first_transparent) {

	                box_add_point_0(boxc_t, c, 3 /*POINT_STRIDE*/ * i);
	                box_add_box_0(boxv_t, b, boxStride * i);

	            } else {

	                box_add_point_0(boxc_o, c, 3 /*POINT_STRIDE*/ * i);
	                box_add_box_0(boxv_o, b, boxStride * i);

	            }
	        }

	        box_get_size(cbdiag, 0, bvh.boxv_o, 0);
	        var maxsz = Math.max(cbdiag[0], cbdiag[1], cbdiag[2]);
	        bvh.scene_epsilon = BOX_EPSILON * maxsz;
	    }




	    //Module exports
	    return {
	        bvh_subdivide: bvh_subdivide,
	        compute_boxes: compute_boxes,
	        box_area: box_area };


	}();


	function FragInfo(fragments, materialDefs) {
	    //Invariants
	    this.boxes = fragments.boxes; //Array of Float32, each bbox is a sextuplet
	    this.polygonCounts = fragments.polygonCounts;
	    this.hasPolygonCounts = !!this.polygonCounts;
	    this.materials = fragments.materials; //material indices (we need to know which fragments are transparent)
	    this.materialDefs = materialDefs;
	    this.count = fragments.length;
	    this.boxStride = 6;
	}

	FragInfo.prototype.getCount = function () {
	    return this.count;
	};

	FragInfo.prototype.isTransparent = function (i) {
	    return this.materialDefs && this.materialDefs[this.materials[i]] ? this.materialDefs[this.materials[i]].transparent : false;
	};

	FragInfo.prototype.getPolygonCount = function (i) {
	    return this.polygonCounts[i];
	};

	/**
	    * Given a list of LMV fragments, builds a spatial index for view-dependent traversal and hit testing.
	    * @constructor
	    */
	function BVHBuilder(fragments, materialDefs, finfo) {

	    //Initialize the inputs (bboxes, transparent flags, polygon counts)
	    this.finfo = finfo || new FragInfo(fragments, materialDefs);

	    this.prim_count = this.finfo.getCount();

	    //To be initialized by build() function based on build options
	    this.frags_per_leaf_node = -1;
	    this.frags_per_inner_node = -1;
	    this.nodes = null;

	    this.work_buf = new ArrayBuffer(this.prim_count * 4);
	    this.sort_prims = new Int32Array(this.work_buf);

	    //Allocate memory buffer for re-ordered fragment primitive indices,
	    //which will be sorted by node ownership and point to the index
	    //of the fragment data.
	    this.primitives = new Int32Array(this.prim_count);

	    //The BVH split algorithm works based on centroids of the bboxes.
	    this.centroids = new Float32Array(POINT_STRIDE * this.prim_count);

	    //BBoxes and centroid bboxes for opaque and transparent primitive sets
	    this.boxv_o = new Float32Array(6);
	    this.boxc_o = new Float32Array(6);
	    this.boxv_t = new Float32Array(6);
	    this.boxc_t = new Float32Array(6);


	    this.recursion_stack = [];
	}

	BVHBuilder.prototype.sortPrimitives = function () {

	    var prim_sizes = new Float32Array(this.work_buf);
	    var primitives = this.primitives;
	    var numTransparent = 0;

	    //Sort the input objects by size
	    //We assume all LMV SVF files come
	    //sorted by draw priority already, so in theory we can skip this step.
	    //This turns out to not be the case - some fragments are badly sorted.
	    //Part of the reason may be that the surface area of the geometry itself,
	    //not its bounding box, is used to sort by physical size in LMVTK.
	    //In any case, the transparent objects do not always come last (bug in LMVTK?),
	    //so we still have to pull them out to the end of the list, so some sorting
	    //takes place no matter how this value is set.
	    // Turning this option on will mean that the BVH building process as a whole
	    // will be 45% to 75% longer, for large models - full sorting takes awhile.
	    // In absolute terms this is an increase of a maximum of 1.15 seconds for a
	    // very large model (one with over 1 million fragments, i.e., mesh instances).
	    // This cost may be acceptable. For smaller models - "only" 70K instances -
	    // the cost is 0.05 seconds. For 130k instances, 0.1 seconds. The rise is
	    // slightly more than linear, but not excessively slow. I think it's acceptable,
	    // given that the cost is still much less than loading even a small part of the
	    // model.
	    var WANT_SORT = true;

	    // console.log("BVH sort is " + WANT_SORT);

	    var i, iEnd;
	    for (i = 0, iEnd = this.prim_count; i < iEnd; i++) {

	        //Start with trivial 1:1 order of the indices array
	        primitives[i] = i;

	        var transparent = this.finfo.isTransparent(i);

	        if (transparent)
	        numTransparent++;

	        if (WANT_SORT) {
	            prim_sizes[i] = BVHModule.box_area(this.finfo.boxes, this.finfo.boxStride * i);

	            //In order to make transparent objects appear last,
	            //we give them a negative size, so that they are naturally
	            //sorted last in the sort by size.
	            if (transparent)
	            prim_sizes[i] = -prim_sizes[i];
	        } else {
	            //We still need the transparency flag for the loop below
	            //where we find the last opaque item, but we can
	            //short-cut the size computation.
	            prim_sizes[i] = transparent ? -1 : 1;
	        }
	    }


	    if (WANT_SORT) {
	        Array.prototype.sort.call(this.primitives, function (a, b) {
	            return prim_sizes[b] - prim_sizes[a];
	        });
	    } else {
	        if (numTransparent && numTransparent < this.prim_count) {

	            var tmpTransparent = new Int32Array(numTransparent);
	            var oidx = 0,tidx = 0;

	            for (i = 0, iEnd = this.prim_count; i < iEnd; i++) {
	                if (prim_sizes[i] >= 0)
	                primitives[oidx++] = primitives[i];else

	                tmpTransparent[tidx++] = primitives[i];
	            }

	            primitives.set(tmpTransparent, this.prim_count - numTransparent);
	        }
	    }

	    this.first_transparent = this.prim_count - numTransparent;
	};


	BVHBuilder.prototype.build = function (options) {
	    //Kick off the BVH build.

	    var useSlimNodes = options && !!options.useSlimNodes;

	    var self = this;
	    function assign_option(name, defaultVal) {
	        if (options.hasOwnProperty(name))
	        self[name] = options[name];else

	        self[name] = defaultVal;
	    }

	    // note: frags_per_leaf_node does *not* make an upper limit for the number of frags per node.

	    //options for build optimized for rasterization renderer scenes
	    if (useSlimNodes) {
	        assign_option("frags_per_leaf_node", 1);
	        assign_option("frags_per_inner_node", 0);
	        assign_option("frags_per_leaf_node_transparent", 1);
	        assign_option("frags_per_inner_node_transparent", 0);
	        assign_option("max_polys_per_node", Infinity);
	    } else {
	        var multiplier = options.isWeakDevice ? 0.5 : 1.0;

	        //TODO: tune these constants
	        assign_option("frags_per_leaf_node", 0 | 32 * multiplier);
	        //Placing fragments at inner nodes places more emphasis on bigger objects during tree traversal
	        //but it can only be done for opaque objects. Transparent objects have to be strictly back to front
	        //traversal regardless of size, unless a unified traversal
	        assign_option("frags_per_inner_node", 0 | this.frags_per_leaf_node);
	        assign_option("frags_per_leaf_node_transparent", this.frags_per_leaf_node);
	        assign_option("frags_per_inner_node_transparent", 0);
	        assign_option("max_polys_per_node", 0 | 10000 * multiplier);
	    }

	    //Reuse existing node array if there
	    if (this.nodes && this.nodes.is_lean_node == useSlimNodes)
	    this.nodes.nodeCount = 0;else
	    {
	        var est_nodes = this.prim_count / this.frags_per_leaf_node;
	        var num_nodes = 1;
	        while (num_nodes < est_nodes) {
	            num_nodes *= 2;}

	        this.nodes = new NodeArray(num_nodes, options ? options.useSlimNodes : false);
	    }

	    this.sortPrimitives();

	    BVHModule.compute_boxes(this);

	    //Init the root nodes at 0 for opaque
	    //and 1 for transparent objects
	    var root = this.nodes.nextNodes(2);

	    //Now kick off the recursive tree build

	    //Opaque
	    BVHModule.bvh_subdivide(this, root, 0, this.first_transparent - 1, this.boxv_o, this.boxc_o, false, 0);

	    var a;
	    while (this.recursion_stack.length) {
	        a = this.recursion_stack.pop();
	        BVHModule.bvh_subdivide(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
	    }

	    //Transparent
	    BVHModule.bvh_subdivide(this, root + 1, this.first_transparent, this.prim_count - 1, this.boxv_t, this.boxc_t, true, 0);

	    while (this.recursion_stack.length) {
	        a = this.recursion_stack.pop();
	        BVHModule.bvh_subdivide(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7]);
	    }
	};

	module.exports = {
	    NodeArray: NodeArray,
	    BVHBuilder: BVHBuilder };

/***/ }
/******/ ]);
if (typeof module !== "undefined" && module.exports) module.exports = WGS;
