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
	PictureEditing
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
// import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SpecialCharacters } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersCurrency, SpecialCharactersMathematical, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
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
    Indent,
    Italic,
    Link,
    List,
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
    Strikethrough,
    Table,
    TableToolbar,
    TextTransformation,
    Underline,
    FileRepository,
    HorizontalLine,
    FontColor,
    FontBackgroundColor,
    Subscript,
    Superscript

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
        {
            label: 'Special',
            icon: 'threeVerticalDots',
            items: [  
                'specialCharacters',
                'findAndReplace',
                'selectAll',
                'accessibilityHelp'
            ]
        }
    ],
    language: 'en',
    image: {
        toolbar: [
            // 'ckbox',
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side'
        ]
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
        ]
    },
    list: {
        properties: {
            startIndex: true,
            reversed: true,
            styles: true
        }
    }
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