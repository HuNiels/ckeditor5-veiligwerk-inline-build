/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
import { Bold, Italic, Strikethrough, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontFamily, FontSize, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize, ImageResizeHandles, ImageResizeEditing, ImageResizeButtons, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { ListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { PageBreak } from '@ckeditor/ckeditor5-page-break';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { SpecialCharacters } from '@ckeditor/ckeditor5-special-characters';
import { SpecialCharactersCurrency, SpecialCharactersMathematical, SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersArrows } from '@ckeditor/ckeditor5-special-characters';
import { Table, TableToolbar, TableProperties, TableCellProperties } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { FileRepository } from "@ckeditor/ckeditor5-upload";
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
declare class InlineEditor extends InlineEditorBase {
    static builtinPlugins: (typeof Alignment | typeof Autoformat | typeof BlockQuote | typeof Bold | typeof Base64UploadAdapter | typeof CloudServices | typeof Essentials | typeof FontFamily | typeof FontSize | typeof Heading | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageResize | typeof ImageResizeHandles | typeof ImageResizeEditing | typeof ImageResizeButtons | typeof Indent | typeof Italic | typeof Link | typeof List | typeof ListProperties | typeof MediaEmbed | typeof PageBreak | typeof Paragraph | typeof PictureEditing | typeof RemoveFormat | typeof SpecialCharacters | typeof SpecialCharactersEssentials | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof SpecialCharactersLatin | typeof SpecialCharactersArrows | typeof Strikethrough | typeof Table | typeof TableToolbar | typeof TableProperties | typeof TableCellProperties | typeof TextTransformation | typeof Underline | typeof FileRepository | typeof HorizontalLine | typeof FontColor | typeof FontBackgroundColor | typeof Subscript | typeof Superscript)[];
    static defaultConfig: {
        toolbar: (string | {
            label: string;
            icon: string;
            items: string[];
        })[];
        language: string;
        image: {
            resizeOptions: ({
                name: string;
                value: null;
                icon: string;
            } | {
                name: string;
                value: string;
                icon: string;
            })[];
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
            tableProperties: {
                borderColors: {
                    color: string;
                    label: string;
                }[];
                backgroundColors: {
                    color: string;
                    label: string;
                }[];
            };
            tableCellProperties: {
                borderColors: {
                    color: string;
                    label: string;
                }[];
                backgroundColors: {
                    color: string;
                    label: string;
                }[];
            };
        };
        list: {
            properties: {
                startIndex: boolean;
                reversed: boolean;
                styles: boolean;
            };
        };
        fontSize: {
            options: (string | number)[];
        };
        link: {
            defaultProtocol: string;
            addTargetToExternalLinks: boolean;
            decorators: {
                isExternal: {
                    mode: "automatic";
                    callback: (url: string | null) => boolean;
                    attributes: {
                        target: string;
                        rel: string;
                    };
                };
            };
        };
    };
}
declare class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: (typeof Alignment | typeof Autoformat | typeof BlockQuote | typeof Bold | typeof Base64UploadAdapter | typeof CloudServices | typeof Essentials | typeof FontFamily | typeof FontSize | typeof Heading | typeof Image | typeof ImageCaption | typeof ImageStyle | typeof ImageToolbar | typeof ImageUpload | typeof ImageResize | typeof ImageResizeHandles | typeof ImageResizeEditing | typeof ImageResizeButtons | typeof Indent | typeof Italic | typeof Link | typeof List | typeof ListProperties | typeof MediaEmbed | typeof PageBreak | typeof Paragraph | typeof PictureEditing | typeof RemoveFormat | typeof SpecialCharacters | typeof SpecialCharactersEssentials | typeof SpecialCharactersCurrency | typeof SpecialCharactersMathematical | typeof SpecialCharactersLatin | typeof SpecialCharactersArrows | typeof Strikethrough | typeof Table | typeof TableToolbar | typeof TableProperties | typeof TableCellProperties | typeof TextTransformation | typeof Underline | typeof FileRepository | typeof HorizontalLine | typeof FontColor | typeof FontBackgroundColor | typeof Subscript | typeof Superscript)[];
    static defaultConfig: {
        toolbar: (string | {
            label: string;
            icon: string;
            items: string[];
        })[];
        language: string;
        image: {
            resizeOptions: ({
                name: string;
                value: null;
                icon: string;
            } | {
                name: string;
                value: string;
                icon: string;
            })[];
            toolbar: string[];
        };
        table: {
            contentToolbar: string[];
            tableProperties: {
                borderColors: {
                    color: string;
                    label: string;
                }[];
                backgroundColors: {
                    color: string;
                    label: string;
                }[];
            };
            tableCellProperties: {
                borderColors: {
                    color: string;
                    label: string;
                }[];
                backgroundColors: {
                    color: string;
                    label: string;
                }[];
            };
        };
        list: {
            properties: {
                startIndex: boolean;
                reversed: boolean;
                styles: boolean;
            };
        };
        fontSize: {
            options: (string | number)[];
        };
        link: {
            defaultProtocol: string;
            addTargetToExternalLinks: boolean;
            decorators: {
                isExternal: {
                    mode: "automatic";
                    callback: (url: string | null) => boolean;
                    attributes: {
                        target: string;
                        rel: string;
                    };
                };
            };
        };
    };
}
declare const _default: {
    ClassicEditor: typeof ClassicEditor;
    InlineEditor: typeof InlineEditor;
};
export default _default;
