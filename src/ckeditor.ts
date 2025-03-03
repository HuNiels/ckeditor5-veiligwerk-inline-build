/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Base64UploadAdapter} from "@ckeditor/ckeditor5-upload";
import { Bold, Italic, Strikethrough, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontFamily, FontSize, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
    ImageResize,
    ImageResizeHandles,
    ImageResizeEditing,
    ImageResizeButtons,
	PictureEditing
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { ListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
// import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SpecialCharacters } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersCurrency, SpecialCharactersMathematical, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersArrows } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableToolbar, TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { FileRepository } from "@ckeditor/ckeditor5-upload";
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';


// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.
const plugins = [
    Alignment,
    Autoformat,
    BlockQuote,
    Bold,
    Base64UploadAdapter,
    CloudServices,
    Essentials,
    FontFamily,
    FontSize,
    Heading,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    ImageResize,
    ImageResizeHandles,
    ImageResizeEditing,
    ImageResizeButtons,
    Indent,
    Italic,
    Link,
    List,
    ListProperties,
    MediaEmbed,
    PageBreak,
    Paragraph,
    // PasteFromOffice,
    PictureEditing,
    RemoveFormat,
    SpecialCharacters,
    SpecialCharactersEssentials,
    SpecialCharactersCurrency,
    SpecialCharactersMathematical,
    SpecialCharactersLatin,
    SpecialCharactersArrows,
    Strikethrough,
    Table,
    TableToolbar,
    TableProperties,
    TableCellProperties,
    TextTransformation,
    Underline,
    FileRepository,
    HorizontalLine,
    FontColor,
    FontBackgroundColor,
    Subscript,
    Superscript

];

const customColorPalette = [
    { color: '#000000', label: 'Black' },
    { color: '#545454', label: 'Dark Gray' },
    { color: '#A9A9A9', label: 'Gray' },
    { color: '#D3D3D3', label: 'Light Gray' },
    { color: '#FFFFFF', label: 'White' },
    { color: '#FF0000', label: 'Red' },
    { color: '#FF8C00', label: 'Orange' },
    { color: '#FFD700', label: 'Yellow' },
    { color: '#008000', label: 'Green' },
    { color: '#00FFFF', label: 'Cyan' },
    { color: '#0000FF', label: 'Blue' },
    { color: '#8A2BE2', label: 'Purple' }
];

const config = {
    toolbar: [
        'undo',
        'redo',
        '|',
        'heading',
        '|',
        'fontSize',
        'fontColor',
        'fontBackgroundColor',
        '|',

        {
            label: 'More basic styles',
            icon:  'bold',
            items: [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'subscript',
                'superscript',
                'blockQuote',
                'removeFormat' 
            ]
        },
        '|',
        'horizontalLine',
        'pageBreak',
        'link',
        'imageUpload',
        'insertTable',
        'alignment',
        '|',
         'bulletedList', 'numberedList',
        {
            label: 'lists',
            icon: 'threeVerticalDots',
            items: [  
              
            ]
        },
        '|',
        'specialCharacters',
        'findAndReplace',
        'selectAll',
        'accessibilityHelp'
       
    ],
    language: 'en',
    image: {
        resizeOptions: [
            {
                name: 'resizeImage:original',
                value: null,
                icon: 'original'
            },
            {
                name: 'resizeImage:25',
                value: '25',
                icon: 'small'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
            },
            {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
            }
        ],
        toolbar: [
            // 'resizeImage:50',
            // 'resizeImage:75',
            // 'resizeImage:original',
            'resizeImage',
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side'
            // More toolbar options.
            // ...
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn', 'tableRow', 'mergeTableCells',
            'tableProperties', 'tableCellProperties'
        ],

        tableProperties: {
            borderColors: customColorPalette,
            backgroundColors: customColorPalette
        },

        tableCellProperties: {
            borderColors: customColorPalette,
            backgroundColors: customColorPalette
        }
    },
    list: {
        properties: {
            startIndex: true,
            reversed: true,
            styles: true
        }
    },
    fontSize: {
        options: [
            10,
            12,
            14,
            'default',
            18,
            20,
            22
        ]
    },
    
};

class InlineEditor extends InlineEditorBase {
	public static override builtinPlugins = plugins
	public static override defaultConfig = config
}

class ClassicEditor extends ClassicEditorBase {
    public static override builtinPlugins = plugins
	public static override defaultConfig = config
}

export default {
    ClassicEditor, InlineEditor
};