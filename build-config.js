/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict';

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'ClassicEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',

		'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-basic-styles/src/strikethrough',
		'@ckeditor/ckeditor5-basic-styles/src/underline',
		'@ckeditor/ckeditor5-block-quote/src/blockquote',
		'@ckeditor/ckeditor5-easy-image/src/easyimage',
		'@ckeditor/ckeditor5-heading/src/heading',
		'@ckeditor/ckeditor5-image/src/image',
		'@ckeditor/ckeditor5-image/src/imagecaption',
		'@ckeditor/ckeditor5-image/src/imagestyle',
		'@ckeditor/ckeditor5-image/src/imagetoolbar',
		'@ckeditor/ckeditor5-image/src/imageupload',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph',
		'@ckeditor/ckeditor5-table/src/table',
		'@ckeditor/ckeditor5-table/src/tabletoolbar',
		'@ckeditor/ckeditor5-highlight/src/highlight',
		'@ckeditor/ckeditor5-font/src/font',
		'@ckeditor/ckeditor5-alignment/src/alignment',
	],

	// Editor config.
	config: {
		toolbar: {
			items: [
				'heading',
				'|',
				'fontSize',
				'fontFamily',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'highlight',
				'|',
				'bulletedList',
				'numberedList',
				'alignment',
				'|',
				'link',
				'blockQuote',
				'imageUpload',
				'insertTable',
				'|',
				'undo',
				'redo'
			]
		},

		fontSize: {
			options: [
				9,
				12,
				14,
				16,
				18,
				22,
				26,
				30,
				36
			]
		},

		fontFamily: {
			options: [
				'微软雅黑, "Microsoft YaHei", STXihei',
				'宋体, SimSun, STSong',
				'新宋体, NSimSun',
				'仿宋, FangSong_GB2312, FangSong, STFangsong',
				'楷体, KaiTi_GB2312, KaiTi, STKaiti',
				'黑体, SimHei, STHeiti',
				'Arial, Helvetica, sans-serif',
				'Courier New, Courier, monospace',
				'Georgia, serif',
				'Lucida Sans Unicode, Lucida Grande, sans-serif',
				'Tahoma, Geneva, sans-serif',
				'Times New Roman, Times, serif',
				'Trebuchet MS, Helvetica, sans-serif',
				'Verdana, Geneva, sans-serif'
			]
		},

		image: {
			styles: [
				'full',
				'alignLeft',
				'alignRight'
			],
			toolbar: [ 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight', '|', 'imageTextAlternative' ]
		},

		table: {
			toolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
		},

		// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
		language: 'zh-cn'
	}
};
