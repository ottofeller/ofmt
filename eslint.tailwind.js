/* eslint-disable max-len, max-lines */
const groups = [
  {
    members: [
      {
        members: [
          {members: 'aspect\\-(none|w\\-${aspectRatio})', type: 'aspect-w'},
          {members: 'aspect\\-h\\-${aspectRatio}', type: 'aspect-h'},
        ],

        type: 'Aspect Ratio',
      },

      {members: 'line\\-clamp\\-(none|${lineClamp})', type: 'Line Clamp'},

      {
        members: [
          {members: 'prose', type: 'prose'},
          {members: 'prose(\\-${typography})?', type: 'prose-modifier'},
        ],

        type: 'Typography',
      },
    ],

    type: 'Official plugins',
  },

  {
    members: [

      // Container.
      {members: 'container', type: 'Container'},

      // Text-overflow.
      {members: 'truncate', type: 'Text Overflow'},

      // Space.
      {members: 'space\\-x\\-reverse', type: 'space-x-reverse'},
      {members: 'space\\-y\\-reverse', type: 'space-y-reverse'},
      {members: '(space\\-x\\-${space}|\\-space\\-x\\-${-space})', type: 'space-x'},
      {members: '(space\\-y\\-${space}|\\-space\\-y\\-${-space})', type: 'space-y'},

      // Divide.
      {members: 'divide\\-x\\-reverse', type: 'divide-x-reverse'},
      {members: 'divide\\-y\\-reverse', type: 'divide-y-reverse'},
      {members: 'divide\\-x(\\-${divideWidth})?', type: 'divide-x'},
      {members: 'divide\\-y(\\-${divideWidth})?', type: 'divide-y'},
      {members: 'divide\\-(solid|dashed|dotted|double|none)', type: 'Divide Style'},
      {members: 'divide\\-${divideColor}', type: 'Divide Color'},
      {members: 'divide\\-opacity\\-${divideOpacity}', type: 'Divide Opacity'},

      // Screen readers.
      {members: '(not\\-)?sr\\-only', type: 'Screen Readers'},
    ],

    type: 'Official hacks',
  },

  {
    members: [

      // Group.
      {members: 'group', type: 'Hover, Focus, & Other States'},

      // Theme.
      {members: '${dark}', type: 'Dark Mode'},

      // Order.
      {members: '(order\\-${order}|\\-order\\-${-order})', type: 'Order'},

      // Grid col / row.
      {members: 'area-span-full', type: 'area-span-full'},
      {members: 'col\\-${gridColumn}', type: 'grid-column'},
      {members: 'col\\-start\\-${gridColumnStart}', type: 'grid-column-start'},
      {members: 'col\\-end\\-${gridColumnEnd}', type: 'grid-column-end'},
      {members: 'row\\-${gridRow}', type: 'grid-row'},
      {members: 'row\\-start\\-${gridRowStart}', type: 'grid-row-start'},
      {members: 'row\\-end\\-${gridRowEnd}', type: 'grid-row-end'},

      // Place.
      {members: 'place\\-self\\-(auto|start|end|center|stretch)', type: 'Place Self'},
      {members: 'justify\\-self\\-(auto|start|end|center|stretch)', type: 'Justify Self'},
      {members: 'self\\-(auto|start|end|center|stretch)', type: 'Align Self'},

      // Margin.
      {members: '(m\\-${margin}|\\-m\\-${-margin})', type: 'm'},
      {members: '(mx\\-${margin}|\\-mx\\-${-margin})', type: 'mx'},
      {members: '(my\\-${margin}|\\-my\\-${-margin})', type: 'my'},
      {members: '(ml\\-${margin}|\\-ml\\-${-margin})', type: 'ml'},
      {members: '(mr\\-${margin}|\\-mr\\-${-margin})', type: 'mr'},
      {members: '(mt\\-${margin}|\\-mt\\-${-margin})', type: 'mt'},
      {members: '(mb\\-${margin}|\\-mb\\-${-margin})', type: 'mb'},

      // Float.
      {members: 'float\\-(right|left|none)', type: 'Floats'},

      // Clear.
      {members: 'clear\\-(left|right|both|none)', type: 'Clear'},

      // Visibility.
      {members: '(in)?visible', type: 'Visibility'},

      // Appearance.
      {members: 'appearance\\-none', type: 'Appearance'},

      // Overflow.
      {members: 'scrollbar-hidden', type: 'scrollbar-hidden'},
      {members: 'overflow\\-(auto|hidden|visible|scroll)', type: 'overflow'},
      {members: 'overflow\\-x\\-(auto|hidden|visible|scroll)', type: 'overflow-x'},
      {members: 'overflow\\-y\\-(auto|hidden|visible|scroll)', type: 'overflow-y'},
      {members: 'overscroll\\-(auto|contain|none)', type: 'overscroll'},
      {members: 'overscroll\\-x\\-(auto|contain|none)', type: 'overscroll-x'},
      {members: 'overscroll\\-y\\-(auto|contain|none)', type: 'overscroll-y'},

      // Position.
      {members: 'static|fixed|absolute|relative|sticky', type: 'Position'},
      {members: '(z\\-${zIndex}|\\-z\\-${-zIndex})', type: 'Z-Index'},
      {members: '(inset\\-${inset}|\\-inset\\-${-inset})', type: 'inset'},
      {members: '(inset\\-x\\-${inset}|\\-inset\\-x\\-${-inset})', type: 'inset-x'},
      {members: '(inset\\-y\\-${inset}|\\-inset\\-y\\-${-inset})', type: 'inset-y'},
      {members: '(left\\-${inset}|\\-left\\-${-inset})', type: 'left'},
      {members: '(right\\-${inset}|\\-right\\-${-inset})', type: 'right'},
      {members: '(top\\-${inset}|\\-top\\-${-inset})', type: 'top'},
      {members: '(bottom\\-${inset}|\\-bottom\\-${-inset})', type: 'bottom'},

      // Display box.
      {members: 'box\\-(border|content)', type: 'Box Sizing'},

      // Table.
      {members: 'border\\-(collapse|separate)', type: 'Border Collapse'},
      {members: 'table\\-(auto|fixed)', type: 'Table Layout'},

      // Display.
      {members: 'block|flex|grid|flow\\-root|contents|hidden|inline(\\-(block|flex|table|grid))?|table\\-(column|footer|header|row)\\-group|table(\\-(caption|row|cell|column))?|list\\-item', type: 'Display'},

      // Lists.
      {members: 'list\\-(in|out)side', type: 'List Style Position'},
      {members: 'list\\-${listStyleType}', type: 'List Style Type'},

      // Gap.
      {members: 'gap\\-${gap}', type: 'gap'},
      {members: 'gap\\-x\\-${gap}', type: 'column-gap'},
      {members: 'gap\\-y\\-${gap}', type: 'row-gap'},

      // Grid.
      {members: 'grid\\-flow\\-(row|col)(\\-dense)?', type: 'Grid Auto Flow'},
      {members: 'grid\\-cols\\-${gridTemplateColumns}', type: 'Grid Template Columns'},
      {members: 'auto\\-cols\\-${gridAutoColumns}', type: 'Grid Auto Columns'},
      {members: 'grid\\-rows\\-${gridTemplateRows}', type: 'Grid Template Rows'},
      {members: 'auto\\-rows\\-${gridAutoRows}', type: 'Grid Auto Rows'},

      // Flex.
      {members: 'flex\\-(row|col)(\\-reverse)?', type: 'Flex Direction'},
      {members: 'flex\\-(wrap(\\-reverse)?|nowrap)', type: 'Flex Wrap'},
      {members: 'flex\\-${flex}', type: 'Flex'},
      {members: 'flex\\-grow(\\-${flexGrow})?', type: 'Flex Grow'},
      {members: 'flex\\-shrink(\\-${flexShrink})?', type: 'Flex Shrink'},

      // Placement.
      {members: 'place\\-content\\-(center|start|end|between|around|evenly|stretch)', type: 'Place Content'},
      {members: 'place\\-items\\-(auto|start|end|center|stretch)', type: 'Place Items'},
      {members: 'justify\\-(start|end|center|between|around|evenly)', type: 'Justify Content'},
      {members: 'content\\-(center|start|end|between|around|evenly)', type: 'Align Content'},
      {members: 'justify\\-items\\-(auto|start|end|center|stretch)', type: 'Justify Items'},
      {members: 'items\\-(start|end|center|baseline|stretch)', type: 'Align Items'},

      // Border.
      {members: 'border(\\-${borderWidth})?', type: 'border-width'},
      {members: 'border\\-l(\\-${borderWidth})?', type: 'border-left-width'},
      {members: 'border\\-r(\\-${borderWidth})?', type: 'border-right-width'},
      {members: 'border\\-t(\\-${borderWidth})?', type: 'border-top-width'},
      {members: 'border\\-b(\\-${borderWidth})?', type: 'border-bottom-width'},
      {members: 'border\\-(solid|dashed|dotted|double|none)', type: 'Border Style'},
      {members: 'border\\-${borderColor}', type: 'border-color'},
      {members: 'border\\-l\\-${borderColor}', mode: 'jit', type: 'border-left-color'},
      {members: 'border\\-r\\-${borderColor}', mode: 'jit', type: 'border-right-color'},
      {members: 'border\\-t\\-${borderColor}', mode: 'jit', type: 'border-top-color'},
      {members: 'border\\-b\\-${borderColor}', mode: 'jit', type: 'border-bottom-color'},
      {members: 'border\\-opacity\\-${borderOpacity}', type: 'Border Opacity'},

      // Size.
      {members: 'w\\-${width}', type: 'Width'},
      {members: 'min\\-w\\-${minWidth}', type: 'Min-Width'},
      {members: 'max\\-w\\-${maxWidth}', type: 'Max-Width'},
      {members: 'h\\-${height}', type: 'Height'},
      {members: 'min\\-h\\-${minHeight}', type: 'Min-Height'},
      {members: 'max\\-h\\-${maxHeight}', type: 'Max-Height'},

      // Padding.
      {members: 'p\\-${padding}', type: 'p'},
      {members: 'px\\-${padding}', type: 'px'},
      {members: 'py\\-${padding}', type: 'py'},
      {members: 'pl\\-${padding}', type: 'pl'},
      {members: 'pr\\-${padding}', type: 'pr'},
      {members: 'pt\\-${padding}', type: 'pt'},
      {members: 'pb\\-${padding}', type: 'pb'},

      // Font.
      {members: 'overflow\\-(ellipsis|clip)', type: 'Text Overflow'},
      {members: 'text\\-(left|center|right|justify)', type: 'Text Alignment'},
      {members: 'align\\-(baseline|top|middle|bottom|text\\-(top|bottom))', type: 'Vertical Alignment'},
      {members: 'leading\\-${lineHeight}', type: 'Line Height'},
      {members: 'text\\-${fontSize}', type: 'Font Size'},
      {members: 'tracking\\-${letterSpacing}', type: 'Letter Spacing'},
      {members: 'font\\-${fontWeight}', type: 'Font Weight'},
      {members: 'whitespace\\-(normal|nowrap|pre(\\-(line|wrap))?)', type: 'Whitespace'},
      {members: 'break\\-(normal|words|all)', type: 'Word Break'},
      {members: 'font\\-${fontFamily}', type: 'Font Family'},
      {members: '(upper|lower|normal\\-)case|capitalize', type: 'Text Transform'},
      {members: '(not\\-)?italic', type: 'Font Style'},
      {members: '(normal|lining|oldstyle|proportional|tabular)\\-nums|ordinal|slashed-zero|(diagonal|stacked)\\-fractions', type: 'Font Variant Numeric'},
      {members: '(no\\-)?underline|line\\-through', type: 'Text Decoration'},
      {members: 'text\\-${textColor}', type: 'Text Color'},
      {members: 'text\\-opacity\\-${textOpacity}', type: 'Text Opacity'},
      {members: '(subpixel\\-)?antialiased', type: 'Font Smoothing'},

      // Stroke.
      {members: 'stroke\\-${stroke}', type: 'Stroke'},
      {members: 'stroke\\-${strokeWidth}', type: 'Stroke Width'},

      // Fill.
      {members: 'fill\\-${fill}', type: 'Fill'},

      // Image.
      {members: 'object\\-(contain|cover|fill|none|scale\\-down)', type: 'Object Fit'},
      {members: 'object\\-${objectPosition}', type: 'Object Position'},

      // Background.
      {members: 'from\\-${gradientColorStops}', type: 'from'},
      {members: 'via\\-${gradientColorStops}', type: 'via'},
      {members: 'to\\-${gradientColorStops}', type: 'to'},
      {members: 'bg\\-${backgroundImage}', type: 'Background Image'},
      {members: 'bg\\-${backgroundSize}', type: 'Background Size'},
      {members: 'bg\\-clip\\-(border|padding|content|text)', type: 'Background Clip'},
      {members: 'bg\\-${backgroundPosition}', type: 'Background Position'},
      {members: 'bg\\-(no\\-repeat|repeat(\\-(x|y|round|space))?)', type: 'Background Repeat'},
      {members: 'bg\\-(fixed|local|scroll)', type: 'Background Attachment'},
      {members: 'bg\\-${backgroundColor}', type: 'Background Color'},
      {members: 'bg\\-opacity\\-${backgroundOpacity}', type: 'Background Opacity'},

      // Border-radius.
      {members: 'rounded(\\-${borderRadius})?', type: 'border-radius'},
      {members: 'rounded\\-l(\\-${borderRadius})?', type: 'border-radius-left'},
      {members: 'rounded\\-r(\\-${borderRadius})?', type: 'border-radius-right'},
      {members: 'rounded\\-t(\\-${borderRadius})?', type: 'border-radius-top'},
      {members: 'rounded\\-b(\\-${borderRadius})?', type: 'border-radius-bottom'},
      {members: 'rounded\\-tl(\\-${borderRadius})?', type: 'border-radius-top-left'},
      {members: 'rounded\\-tr(\\-${borderRadius})?', type: 'border-radius-top-right'},
      {members: 'rounded\\-bl(\\-${borderRadius})?', type: 'border-radius-bottom-left'},
      {members: 'rounded\\-br(\\-${borderRadius})?', type: 'border-radius-bottom-right'},

      // Outline.
      {members: 'outline\\-${outline}', type: 'Outline'},

      // Box-shadow.
      {members: 'decoration\\-(slice|clone)', type: 'Box Decoration Break'},
      {members: 'ring(\\-${ringWidth})?', type: 'ring'},
      {members: 'ring\\-${ringColor}', type: 'Ring Color'},
      {members: 'ring\\-opacity\\-${ringOpacity}', type: 'Ring Opacity'},
      {members: 'ring\\-offset\\-${ringOffsetWidth}', type: 'Ring Offset Width'},
      {members: 'ring\\-offset\\-${ringOffsetColor}', type: 'Ring Offset Color'},
      {members: 'ring\\-inset', type: 'ring-inset'},
      {members: 'shadow(\\-${boxShadow})?', type: 'Box Shadow'},

      // Opacity.
      {members: 'opacity\\-${opacity}', type: 'Opacity'},

      // Transform.
      {members: 'origin\\-${transformOrigin}', type: 'Transform Origin'},
      {members: 'transform(\\-(gpu|none))?', type: 'Transform'},
      {members: '(translate\\-x\\-${translate}|\\-translate\\-x\\-${-translate})', type: 'translate-x'},
      {members: '(translate\\-y\\-${translate}|\\-translate\\-y\\-${-translate})', type: 'translate-y'},
      {members: '(rotate\\-${rotate}|\\-rotate\\-${-rotate})', type: 'Rotate'},
      {members: 'scale\\-${scale}', type: 'scale'},
      {members: 'scale\\-x\\-${scale}', type: 'scale-x'},
      {members: 'scale\\-y\\-${scale}', type: 'scale-y'},
      {members: '(skew\\-x\\-${skew}|\\-skew\\-x\\-${-skew})', type: 'skew-x'},
      {members: '(skew\\-y\\-${skew}|\\-skew\\-y\\-${-skew})', type: 'skew-y'},

      // Blend mode.
      {members: '(isolate|isolation\\-auto)', type: 'Isolation'},
      {members: 'mix\\-blend\\-(normal|multiply|screen|overlay|darken|lighten|color\\-(burn|dodge)|(hard|soft)\\-light|difference|exclusion|hue|saturation|color|luminosity)', type: 'Mix Blend Mode'},
      {members: 'bg\\-blend\\-(normal|multiply|screen|overlay|darken|lighten|color\\-(dodge|burn)|(hard|soft)\\-light|difference|exclusion|hue|saturation|color|luminosity)', type: 'Background Blend Mode'},

      // Filters.
      {members: 'filter(\\-none)?', type: 'Filter'},
      {members: 'blur(\\-${blur})?', type: 'Blur'},
      {members: 'brightness\\-${brightness}', type: 'Brightness'},
      {members: 'contrast\\-${contrast}', type: 'Contrast'},
      {members: 'drop\\-shadow(\\-${dropShadow})?', type: 'Drop Shadow'},
      {members: 'grayscale(\\-${grayscale})?', type: 'Grayscale'},
      {members: '(\\-)?hue\\-rotate\\-${hueRotate}', type: 'Hue Rotate'},
      {members: 'invert(\\-${invert})?', type: 'Invert'},
      {members: 'saturate\\-${saturate}', type: 'Saturate'},
      {members: 'sepia(\\-${sepia})?', type: 'Sepia'},

      // Backdrop filter.
      {members: 'backdrop\\-filter(\\-none)?', type: 'Backdrop Filter'},
      {members: 'backdrop\\-blur(\\-${backdropBlur})?', type: 'Backdrop Blur'},
      {members: 'backdrop\\-brightness\\-${backdropBrightness}', type: 'Backdrop Brightness'},
      {members: 'backdrop\\-contrast\\-${backdropContrast}', type: 'Backdrop Contrast'},
      {members: 'backdrop\\-grayscale(\\-${backdropGrayscale})?', type: 'Backdrop Grayscale'},
      {members: '(\\-)?backdrop\\-hue\\-rotate\\-${backdropHueRotate}', type: 'Backdrop Hue Rotate'},
      {members: 'backdrop\\-invert(\\-${backdropInvert})?', type: 'Backdrop Invert'},
      {members: 'backdrop\\-opacity\\-${backdropOpacity}', type: 'Backdrop Opacity'},
      {members: 'backdrop\\-saturate\\-${backdropSaturate}', type: 'Backdrop Saturate'},
      {members: 'backdrop\\-sepia(\\-${backdropSepia})?', type: 'Backdrop Sepia'},

      // Animation.
      {members: 'transition(\\-${transitionProperty})?', type: 'Transition Property'},
      {members: 'duration(\\-${transitionDuration})?', type: 'Transition Duration'},
      {members: 'ease(\\-${transitionTimingFunction})?', type: 'Transition Timing Function'},
      {members: 'delay\\-${transitionDelay}', type: 'Transition Delay'},
      {members: 'animate\\-${animation}', type: 'Animation'},

      // User select.
      {members: 'select\\-(none|text|all|auto)', type: 'User Select'},

      // Pointer-events.
      {members: 'pointer\\-events\\-(none|auto)', type: 'Pointer Events'},

      // Resize.
      {members: 'resize(\\-(none|x|y))?', type: 'Resize'},

      // Cursor.
      {members: 'cursor\\-${cursor}', type: 'Cursor'},

      // Placeholder.
      {members: 'placeholder\\-${placeholderColor}', type: 'Placeholder Color'},
      {members: 'placeholder\\-opacity\\-${placeholderOpacity}', type: 'Placeholder Opacity'},
    ],

    type: 'General rules',
  },
]

module.exports = {
  env: {browser: true, jest: true, node: false},
  extends: './eslint.base.js',
  plugins: ['tailwindcss'],

  rules: {
    'tailwindcss/classnames-order'          : ['warn', {groups, prependCustom: true}],
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/no-custom-classname'       : ['warn', {whitelist: ['area-span-full', 'scrollbar-hidden']}],
  },

  settings: {
    tailwindcss: {callees: ['cn']},
  },
}
