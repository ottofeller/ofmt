/* eslint-disable max-len, max-lines -- disabling file length limitation for compactness. */
const groups = [
  {
    members: [
      {members: 'line\\-clamp\\-(none|(?<value>${lineClamp}))', type: 'Line Clamp'},

      {
        members: [
          {members: 'prose', type: 'prose'},
          {members: 'prose(\\-(?<value>${typography}))?', type: 'prose-modifier'},
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
      {members: '(space\\-x\\-(?<value>${space})|\\-space\\-x\\-(?<negativeValue>${-space}))', type: 'space-x'},
      {members: '(space\\-y\\-(?<value>${space})|\\-space\\-y\\-(?<negativeValue>${-space}))', type: 'space-y'},

      // Divide.
      {members: 'divide\\-x\\-reverse', type: 'divide-x-reverse'},
      {members: 'divide\\-y\\-reverse', type: 'divide-y-reverse'},
      {members: 'divide\\-x(\\-(?<value>${divideWidth}))?', type: 'divide-x'},
      {members: 'divide\\-y(\\-(?<value>${divideWidth}))?', type: 'divide-y'},
      {members: 'divide\\-(solid|dashed|dotted|double|none)', type: 'Divide Style'},
      {members: 'divide\\-(?<value>${divideColor})', type: 'Divide Color'},

      // Screen readers.
      {members: '(not\\-)?sr\\-only', type: 'Screen Readers'},
    ],

    type: 'Official hacks',
  },

  {
    members: [

      // Hover, Focus, & Other States.
      {members: 'group', type: 'Group'},
      {members: 'peer', type: 'Peer'},

      // Dark Mode.
      {members: '${dark}', type: 'Dark Mode'},

      // Arbitrary properties.
      {members: '${arbitraryProperties}', type: 'Arbitrary properties'},
    ],

    type: 'Core Concepts',
  },

  {
    members: [

      // Content.
      {members: 'content\\-(?<value>${content})', type: 'Content'},

      // Order.
      {members: '(order\\-(?<value>${order})|\\-order\\-(?<negativeValue>${-order}))', type: 'Order'},

      // Grid col / row.
      {members: 'area-span-full', type: 'area-span-full'},
      {members: 'col\\-(?<value>${gridColumn})', type: 'grid-column'},
      {members: 'col\\-start\\-(?<value>${gridColumnStart})', type: 'grid-column-start'},
      {members: 'col\\-end\\-(?<value>${gridColumnEnd})', type: 'grid-column-end'},
      {members: 'row\\-(?<value>${gridRow})', type: 'grid-row'},
      {members: 'row\\-start\\-(?<value>${gridRowStart})', type: 'grid-row-start'},
      {members: 'row\\-end\\-(?<value>${gridRowEnd})', type: 'grid-row-end'},

      // Place.
      {members: 'place\\-self\\-(auto|start|end|center|stretch)', type: 'Place Self'},
      {members: 'justify\\-self\\-(auto|start|end|center|stretch)', type: 'Justify Self'},
      {members: 'self\\-(auto|start|end|center|stretch|baseline)', type: 'Align Self'},

      // Margin.
      {body: 'm', members: '(m\\-(?<value>${margin})|\\-m\\-(?<negativeValue>${-margin}))', shorthand: 'all', type: 'm'},
      {body: 'mx', members: '(mx\\-(?<value>${margin})|\\-mx\\-(?<negativeValue>${-margin}))', shorthand: 'x', type: 'mx'},
      {body: 'my', members: '(my\\-(?<value>${margin})|\\-my\\-(?<negativeValue>${-margin}))', shorthand: 'y', type: 'my'},
      {body: 'ml', members: '(ml\\-(?<value>${margin})|\\-ml\\-(?<negativeValue>${-margin}))', shorthand: 'l', type: 'ml'},
      {body: 'mr', members: '(mr\\-(?<value>${margin})|\\-mr\\-(?<negativeValue>${-margin}))', shorthand: 'r', type: 'mr'},
      {body: 'mt', members: '(mt\\-(?<value>${margin})|\\-mt\\-(?<negativeValue>${-margin}))', shorthand: 't', type: 'mt'},
      {body: 'mb', members: '(mb\\-(?<value>${margin})|\\-mb\\-(?<negativeValue>${-margin}))', shorthand: 'b', type: 'mb'},

      // Float.
      {members: 'float\\-(?<value>right|left|none)', type: 'Floats'},

      // Clear.
      {members: 'clear\\-(?<value>left|right|both|none)', type: 'Clear'},

      // Visibility.
      {members: '(in)?visible', type: 'Visibility'},

      // Appearance.
      {members: 'appearance\\-none', type: 'Appearance'},

      // Touch Action.
      {members: 'touch\\-(auto|none|pan\\-(x|left|right|y|up|down)|pinch\\-zoom|manipulation)', type: 'Touch Action'},

      // Overflow / Scroll.
      {members: 'scroll\\-(auto|smooth)', type: 'Scroll Behavior'},
      {members: 'scrollbar-hidden', type: 'scrollbar-hidden'},
      {body: 'overflow', members: 'overflow\\-(?<value>auto|hidden|clip|visible|scroll)', shorthand: 'all', type: 'overflow'},
      {body: 'overflow-x', members: 'overflow\\-x\\-(?<value>auto|hidden|clip|visible|scroll)', shorthand: 'x', type: 'overflow-x'},
      {body: 'overflow-y', members: 'overflow\\-y\\-(?<value>auto|hidden|clip|visible|scroll)', shorthand: 'y', type: 'overflow-y'},
      {members: 'overscroll\\-(?<value>auto|contain|none)', type: 'overscroll'},
      {body: 'overscroll-x', members: 'overscroll\\-x\\-(?<value>auto|contain|none)', shorthand: 'x', type: 'overscroll-x'},
      {body: 'overscroll-y', members: 'overscroll\\-y\\-(?<value>auto|contain|none)', shorthand: 'y', type: 'overscroll-y'},
      {members: 'scroll-m\\-(?<value>${scrollMargin})|\\-scroll-m\\-(?<negativeValue>${-scrollMargin})', type: 'scroll-m'},
      {members: 'scroll-mx\\-(?<value>${scrollMargin})|\\-scroll-mx\\-(?<negativeValue>${-scrollMargin})', type: 'scroll-mx'},
      {members: 'scroll-my\\-(?<value>${scrollMargin})|\\-scroll-my\\-(?<negativeValue>${-scrollMargin})', type: 'scroll-my'},
      {members: 'scroll-ml\\-(?<value>${scrollMargin})|\\-scroll-ml\\-(?<negativeValue>${-scrollMargin})', type: 'scroll-ml'},
      {members: 'scroll-mr\\-(?<value>${scrollMargin})|\\-scroll-mr\\-(?<negativeValue>${-scrollMargin})', type: 'scroll-mr'},
      {members: 'scroll-mt\\-(?<value>${scrollMargin})|\\-scroll-mt\\-(?<negativeValue>${-scrollMargin})', type: 'scroll-mt'},
      {members: 'scroll-mb\\-(?<value>${scrollMargin})|\\-scroll-mb\\-(?<negativeValue>${-scrollMargin})', type: 'scroll-mb'},
      {members: 'scroll-p\\-(?<value>${scrollPadding})', type: 'scroll-p'},
      {members: 'scroll-px\\-(?<value>${scrollPadding})', type: 'scroll-px'},
      {members: 'scroll-py\\-(?<value>${scrollPadding})', type: 'scroll-py'},
      {members: 'scroll-pl\\-(?<value>${scrollPadding})', type: 'scroll-pl'},
      {members: 'scroll-pr\\-(?<value>${scrollPadding})', type: 'scroll-pr'},
      {members: 'scroll-pt\\-(?<value>${scrollPadding})', type: 'scroll-pt'},
      {members: 'scroll-pb\\-(?<value>${scrollPadding})', type: 'scroll-pb'},

      // Snap points.
      {members: 'snap\\-(none|x|y|both)', type: 'Scroll Snap Type'},
      {members: 'snap\\-(mandatory|proximity)', type: 'Scroll Snap Type Strictness'},
      {members: 'snap\\-(normal|always)', type: 'Scroll Snap Stop'},
      {members: 'snap\\-(start|end|center|align-none)', type: 'Scroll Snap Align'},

      // Position.
      {members: 'static|fixed|absolute|relative|sticky', type: 'Position'},
      {members: '(z\\-(?<value>${zIndex})|\\-z\\-(?<negativeValue>${-zIndex}))', type: 'Z-Index'},
      {body: 'inset', members: '(inset\\-(?<value>${inset})|\\-inset\\-(?<negativeValue>${-inset}))', shorthand: 'all', type: 'inset'},
      {body: 'inset-x', members: '(inset\\-x\\-(?<value>${inset})|\\-inset\\-x\\-(?<negativeValue>${-inset}))', shorthand: 'x', type: 'inset-x'},
      {body: 'inset-y', members: '(inset\\-y\\-(?<value>${inset})|\\-inset\\-y\\-(?<negativeValue>${-inset}))', shorthand: 'y', type: 'inset-y'},
      {body: 'left', members: '(left\\-(?<value>${inset})|\\-left\\-(?<negativeValue>${-inset}))', shorthand: 'l', type: 'left'},
      {body: 'right', members: '(right\\-(?<value>${inset})|\\-right\\-(?<negativeValue>${-inset}))', shorthand: 'r', type: 'right'},
      {body: 'top', members: '(top\\-(?<value>${inset})|\\-top\\-(?<negativeValue>${-inset}))', shorthand: 't', type: 'top'},
      {body: 'bottom', members: '(bottom\\-(?<value>${inset})|\\-bottom\\-(?<negativeValue>${-inset}))', shorthand: 'b', type: 'bottom'},

      // Display box.
      {members: 'box\\-(?<value>border|content)', type: 'Box Sizing'},

      // Table.
      {members: 'border\\-(collapse|separate)', type: 'Border Collapse'},
      {members: 'table\\-(auto|fixed)', type: 'Table Layout'},

      // Display.
      {members: 'block|flex|grid|flow\\-root|contents|hidden|inline(\\-(block|flex|table|grid))?|table\\-(column|footer|header|row)\\-group|table(\\-(caption|row|cell|column))?|list\\-item', type: 'Display'},

      // Lists.
      {members: 'list\\-(in|out)side', type: 'List Style Position'},
      {members: 'list\\-(?<value>${listStyleType})', type: 'List Style Type'},

      // Gap.
      {body: 'gap', members: 'gap\\-(?<value>${gap})', shorthand: 'all', type: 'gap'},
      {body: 'gap-x', members: 'gap\\-x\\-(?<value>${gap})', shorthand: 'x', type: 'column-gap'},
      {body: 'gap-y', members: 'gap\\-y\\-(?<value>${gap})', shorthand: 'y', type: 'row-gap'},

      // Grid.
      {members: 'grid\\-flow\\-(row|col)(\\-dense)?', type: 'Grid Auto Flow'},
      {members: 'grid\\-cols\\-(?<value>${gridTemplateColumns})', type: 'Grid Template Columns'},
      {members: 'auto\\-cols\\-(?<value>${gridAutoColumns})', type: 'Grid Auto Columns'},
      {members: 'grid\\-rows\\-(?<value>${gridTemplateRows})', type: 'Grid Template Rows'},
      {members: 'auto\\-rows\\-(?<value>${gridAutoRows})', type: 'Grid Auto Rows'},

      // Flex.
      {members: 'flex\\-(row|col)(\\-reverse)?', type: 'Flex Direction'},
      {members: 'flex\\-(wrap(\\-reverse)?|nowrap)', type: 'Flex Wrap'},
      {members: 'flex\\-(?<value>${flex})', type: 'Flex'},
      {members: 'grow(\\-(?<value>${flexGrow}))?', type: 'Flex Grow'},
      {deprecated: true, members: 'flex\\-grow(\\-(?<value>${flexGrow}))?', type: 'Deprecated Flex Grow'},
      {members: 'shrink(\\-(?<value>${flexShrink}))?', type: 'Flex Shrink'},
      {deprecated: true, members: 'flex\\-shrink(\\-(?<value>${flexShrink}))?', type: 'Deprecated Flex Shrink'},
      {members: 'basis\\-(?<value>${flexBasis})', type: 'Flex Basis'},

      // Columns.
      {members: 'columns\\-(?<value>${columns})', type: 'Columns'},
      {members: 'break\\-before\\-(?<value>auto|avoid|all|avoid\\-page|page|left|right|column)', type: 'Break Before'},
      {members: 'break\\-inside\\-(?<value>auto|avoid|avoid\\-page|avoid\\-column)', type: 'Break Inside'},
      {members: 'break\\-after\\-(?<value>auto|avoid|all|avoid\\-page|page|left|right|column)', type: 'Break After'},

      // Placement.
      {members: 'place\\-content\\-(center|start|end|between|around|evenly|stretch)', type: 'Place Content'},
      {members: 'place\\-items\\-(start|end|center|stretch)', type: 'Place Items'},
      {members: 'justify\\-(start|end|center|between|around|evenly)', type: 'Justify Content'},
      {members: 'content\\-(center|start|end|between|around|evenly)', type: 'Align Content'},
      {members: 'justify\\-items\\-(start|end|center|stretch)', type: 'Justify Items'},
      {members: 'items\\-(start|end|center|baseline|stretch)', type: 'Align Items'},

      // Border.
      {body: 'border', members: 'border(\\-(?<value>${borderWidth}))?', shorthand: 'all', type: 'border-width'},
      {body: 'border-x', members: 'border\\-x(\\-(?<value>${borderWidth}))?', shorthand: 'x', type: 'border-x-width'},
      {body: 'border-y', members: 'border\\-y(\\-(?<value>${borderWidth}))?', shorthand: 'y', type: 'border-y-width'},
      {body: 'border-l', members: 'border\\-l(\\-(?<value>${borderWidth}))?', shorthand: 'l', type: 'border-left-width'},
      {body: 'border-r', members: 'border\\-r(\\-(?<value>${borderWidth}))?', shorthand: 'r', type: 'border-right-width'},
      {body: 'border-t', members: 'border\\-t(\\-(?<value>${borderWidth}))?', shorthand: 't', type: 'border-top-width'},
      {body: 'border-b', members: 'border\\-b(\\-(?<value>${borderWidth}))?', shorthand: 'b', type: 'border-bottom-width'},
      {members: 'border\\-(solid|dashed|dotted|double|hidden|none)', type: 'Border Style'},
      {body: 'border', members: 'border\\-(?<value>${borderColor})', shorthand: 'all', type: 'border-color'},
      {deprecated: true, members: 'border\\-opacity\\-(?<value>${borderOpacity})', type: 'Deprecated Border Opacity'},
      {body: 'border-x', members: 'border\\-x\\-(?<value>${borderColor})', shorthand: 'x', type: 'border-x-color'},
      {body: 'border-y', members: 'border\\-y\\-(?<value>${borderColor})', shorthand: 'y', type: 'border-y-color'},
      {body: 'border-l', members: 'border\\-l\\-(?<value>${borderColor})', shorthand: 'l', type: 'border-left-color'},
      {body: 'border-r', members: 'border\\-r\\-(?<value>${borderColor})', shorthand: 'r', type: 'border-right-color'},
      {body: 'border-t', members: 'border\\-t\\-(?<value>${borderColor})', shorthand: 't', type: 'border-top-color'},
      {body: 'border-b', members: 'border\\-b\\-(?<value>${borderColor})', shorthand: 'b', type: 'border-bottom-color'},

      // Aspect Ratio.
      {members: 'aspect\\-(?<value>${aspectRatio})', type: 'Aspect Ratio'},

      // Size.
      {members: 'w\\-(?<value>${width})', type: 'Width'},
      {members: 'min\\-w\\-(?<value>${minWidth})', type: 'Min-Width'},
      {members: 'max\\-w\\-(?<value>${maxWidth})', type: 'Max-Width'},
      {members: 'h\\-(?<value>${height})', type: 'Height'},
      {members: 'min\\-h\\-(?<value>${minHeight})', type: 'Min-Height'},
      {members: 'max\\-h\\-(?<value>${maxHeight})', type: 'Max-Height'},

      // Padding.
      {body: 'p', members: 'p\\-(?<value>${padding})', shorthand: 'all', type: 'p'},
      {body: 'px', members: 'px\\-(?<value>${padding})', shorthand: 'x', type: 'px'},
      {body: 'py', members: 'py\\-(?<value>${padding})', shorthand: 'y', type: 'py'},
      {body: 'pl', members: 'pl\\-(?<value>${padding})', shorthand: 'l', type: 'pl'},
      {body: 'pr', members: 'pr\\-(?<value>${padding})', shorthand: 'r', type: 'pr'},
      {body: 'pt', members: 'pt\\-(?<value>${padding})', shorthand: 't', type: 'pt'},
      {body: 'pb', members: 'pb\\-(?<value>${padding})', shorthand: 'b', type: 'pb'},

      // Font.
      {members: 'text\\-(ellipsis|clip)', type: 'Text Overflow'},
      {deprecated: true, members: 'overflow\\-(ellipsis|clip)', type: 'Deprecated Text Overflow'},
      {members: 'text\\-(left|center|right|justify)', type: 'Text Alignment'},
      {members: '(indent\\-(?<value>${textIndent})|\\-indent\\-(?<negativeValue>${-textIndent}))', type: 'Text Indent'},
      {members: 'align\\-(baseline|top|middle|bottom|text\\-(top|bottom)|sub|super)', type: 'Vertical Alignment'},
      {members: 'leading\\-(?<value>${lineHeight})', type: 'Line Height'},
      {members: 'text\\-(?<value>${fontSize})', type: 'Font Size'},
      {members: '(tracking\\-(?<value>${letterSpacing})|\\-tracking\\-(?<negativeValue>${-letterSpacing}))', type: 'Letter Spacing'},
      {members: 'font\\-(?<value>${fontWeight})', type: 'Font Weight'},
      {members: 'whitespace\\-(normal|nowrap|pre(\\-(line|wrap))?)', type: 'Whitespace'},
      {members: 'break\\-(normal|words|all)', type: 'Word Break'},
      {members: 'font\\-(?<value>${fontFamily})', type: 'Font Family'},
      {members: '(upper|lower|normal\\-)case|capitalize', type: 'Text Transform'},
      {members: '(not\\-)?italic', type: 'Font Style'},
      {members: '(normal|lining|oldstyle|proportional|tabular)\\-nums|ordinal|slashed-zero|(diagonal|stacked)\\-fractions', type: 'Font Variant Numeric'},
      {members: '(no\\-)?underline|overline|line\\-through', type: 'Text Decoration'},
      {members: 'underline\\-offset\\-(?<value>${textUnderlineOffset})', type: 'Text Underline Offset'},
      {members: 'decoration\\-(?<value>${textDecorationThickness})', type: 'Text Decoration Thickness'},
      {members: 'decoration\\-(solid|double|dotted|dashed|wavy)', type: 'Text Decoration Style'},
      {members: 'decoration\\-(?<value>${textDecorationColor})', type: 'Text Decoration Color'},
      {members: 'text\\-(?<value>${textColor})', type: 'Text Color'},
      {members: '(subpixel\\-)?antialiased', type: 'Font Smoothing'},

      // Stroke.
      {members: 'stroke\\-(?<value>${strokeWidth})', type: 'Stroke Width'},
      {members: 'stroke\\-(?<value>${stroke})', type: 'Stroke'},

      // Fill.
      {members: 'fill\\-(?<value>${fill})', type: 'Fill'},

      // Image.
      {members: 'object\\-(?<value>contain|cover|fill|none|scale\\-down)', type: 'Object Fit'},
      {members: 'object\\-(?<value>${objectPosition})', type: 'Object Position'},

      // Background.
      {members: 'bg\\-clip\\-(border|padding|content|text)', type: 'Background Clip'},
      {members: 'from\\-(?<value>${gradientColorStops})', type: 'from'},
      {members: 'via\\-(?<value>${gradientColorStops})', type: 'via'},
      {members: 'to\\-(?<value>${gradientColorStops})', type: 'to'},
      {members: 'bg\\-(?<value>${backgroundImage})', type: 'Background Image'},
      {members: 'bg\\-(?<value>${backgroundSize})', type: 'Background Size'},
      {members: 'bg\\-origin\\-(border|padding|content)', type: 'Background Origin'},
      {members: 'bg\\-(?<value>${backgroundPosition})', type: 'Background Position'},
      {members: 'bg\\-(no\\-repeat|repeat(\\-(x|y|round|space))?)', type: 'Background Repeat'},
      {members: 'bg\\-(fixed|local|scroll)', type: 'Background Attachment'},
      {members: 'bg\\-(?<value>${backgroundColor})', type: 'Background Color'},
      {deprecated: true, members: 'bg\\-opacity\\-(?<value>${backgroundOpacity})', type: 'Deprecated Background Opacity'},

      // Accent Color.
      {members: 'accent\\-(?<value>${accentColor})', type: 'Accent Color'},

      // Caret Color.
      {members: 'caret\\-(?<value>${caretColor})', type: 'Caret Color'},

      // Border-radius.
      {body: 'rounded', members: 'rounded(\\-(?<value>${borderRadius}))?', shorthand: 'all', type: 'border-radius'},
      {body: 'rounded-l', members: 'rounded\\-l(\\-(?<value>${borderRadius}))?', shorthand: 'l', type: 'border-radius-left'},
      {body: 'rounded-r', members: 'rounded\\-r(\\-(?<value>${borderRadius}))?', shorthand: 'r', type: 'border-radius-right'},
      {body: 'rounded-t', members: 'rounded\\-t(\\-(?<value>${borderRadius}))?', shorthand: 't', type: 'border-radius-top'},
      {body: 'rounded-b', members: 'rounded\\-b(\\-(?<value>${borderRadius}))?', shorthand: 'b', type: 'border-radius-bottom'},
      {body: 'rounded-tl', members: 'rounded\\-tl(\\-(?<value>${borderRadius}))?', shorthand: 'tl', type: 'border-radius-top-left'},
      {body: 'rounded-tr', members: 'rounded\\-tr(\\-(?<value>${borderRadius}))?', shorthand: 'tr', type: 'border-radius-top-right'},
      {body: 'rounded-bl', members: 'rounded\\-bl(\\-(?<value>${borderRadius}))?', shorthand: 'bl', type: 'border-radius-bottom-left'},
      {body: 'rounded-br', members: 'rounded\\-br(\\-(?<value>${borderRadius}))?', shorthand: 'br', type: 'border-radius-bottom-right'},

      // Outline.
      {members: 'outline\\-offset\\-(?<value>${outlineOffset})', type: 'Outline Offset'},
      {members: 'outline\\-(?<value>${outlineWidth})', type: 'Outline Width'},
      {members: 'outline(\\-(none|dashed|dotted|double|hidden))?', type: 'Outline Style'},
      {members: 'outline\\-(?<value>${outlineColor})', type: 'Outline Color'},

      // Box-shadow.
      {members: 'box\\-decoration\\-(?<value>clone|slice)', type: 'Box Decoration Break'},
      {deprecated: true, members: 'decoration\\-(?<value>clone|slice)', type: 'Deprecated Box Decoration Break'},
      {members: 'ring(\\-(?<value>${ringWidth}))?', type: 'ring'},
      {members: 'ring\\-(?<value>${ringColor})', type: 'Ring Color'},
      {deprecated: true, members: 'ring\\-opacity\\-(?<value>${ringOpacity})', type: 'Deprecated Ring Opacity'},
      {members: 'ring\\-offset\\-(?<value>${ringOffsetWidth})', type: 'Ring Offset Width'},
      {members: 'ring\\-offset\\-(?<value>${ringOffsetColor})', type: 'Ring Offset Color'},
      {members: 'ring\\-inset', type: 'Ring inset'},
      {members: 'shadow(\\-(?<value>${boxShadow}))?', type: 'Box Shadow'},
      {members: 'shadow(\\-(?<value>${boxShadowColor}))?', type: 'Box Shadow Color'},

      // Opacity.
      {members: 'opacity\\-(?<value>${opacity})', type: 'Opacity'},

      // Transform.
      {members: 'origin\\-(?<value>${transformOrigin})', type: 'Transform Origin'},
      {deprecated: true, members: 'transform', type: 'Deprecated Transform'},
      {members: 'transform\\-gpu', type: 'transform-gpu'},
      {members: 'transform\\-none', type: 'transform-none'},
      {members: '(translate\\-x\\-(?<value>${translate})|\\-translate\\-x\\-(?<negativeValue>${-translate}))', type: 'translate-x'},
      {members: '(translate\\-y\\-(?<value>${translate})|\\-translate\\-y\\-(?<negativeValue>${-translate}))', type: 'translate-y'},
      {members: '(rotate\\-(?<value>${rotate})|\\-rotate\\-(?<negativeValue>${-rotate}))', type: 'Rotate'},
      {body: 'scale', members: 'scale\\-(?<value>${scale})|\\-scale\\-(?<negativeValue>${-scale})', shorthand: 'all', type: 'scale'},
      {body: 'scale-x', members: 'scale\\-x\\-(?<value>${scale})|\\-scale\\-x\\-(?<negativeValue>${-scale})', shorthand: 'x', type: 'scale-x'},
      {body: 'scale-y', members: 'scale\\-y\\-(?<value>${scale})|\\-scale\\-y\\-(?<negativeValue>${-scale})', shorthand: 'y', type: 'scale-y'},
      {members: '(skew\\-x\\-(?<value>${skew})|\\-skew\\-x\\-(?<negativeValue>${-skew}))', type: 'skew-x'},
      {members: '(skew\\-y\\-(?<value>${skew})|\\-skew\\-y\\-(?<negativeValue>${-skew}))', type: 'skew-y'},

      // Blend mode.
      {members: '(isolate|isolation\\-auto)', type: 'Isolation'},
      {members: 'mix\\-blend\\-(normal|multiply|screen|overlay|darken|lighten|color\\-(burn|dodge)|(hard|soft)\\-light|difference|exclusion|hue|saturation|color|luminosity)', type: 'Mix Blend Mode'},
      {members: 'bg\\-blend\\-(normal|multiply|screen|overlay|darken|lighten|color\\-(dodge|burn)|(hard|soft)\\-light|difference|exclusion|hue|saturation|color|luminosity)', type: 'Background Blend Mode'},

      // Filters.
      {deprecated: true, members: 'filter', type: 'Deprecated Filter'},
      {members: 'blur(\\-(?<value>${blur}))?', type: 'Blur'},
      {members: 'brightness\\-(?<value>${brightness})', type: 'Brightness'},
      {members: 'contrast\\-(?<value>${contrast})', type: 'Contrast'},
      {members: 'drop\\-shadow(\\-(?<value>${dropShadow}))?', type: 'Drop Shadow'},
      {members: 'grayscale(\\-(?<value>${grayscale}))?', type: 'Grayscale'},
      {members: 'hue\\-rotate\\-(?<value>${hueRotate})|\\-hue\\-rotate\\-(?<negativeValue>${-hueRotate})', type: 'Hue Rotate'},
      {members: 'invert(\\-(?<value>${invert}))?', type: 'Invert'},
      {members: 'saturate\\-(?<value>${saturate})', type: 'Saturate'},
      {members: 'sepia(\\-(?<value>${sepia}))?', type: 'Sepia'},

      // Backdrop filter.
      {members: 'backdrop\\-blur(\\-(?<value>${backdropBlur}))?', type: 'Backdrop Blur'},
      {members: 'backdrop\\-brightness\\-(?<value>${backdropBrightness})', type: 'Backdrop Brightness'},
      {members: 'backdrop\\-contrast\\-(?<value>${backdropContrast})', type: 'Backdrop Contrast'},
      {members: 'backdrop\\-grayscale(\\-(?<value>${backdropGrayscale}))?', type: 'Backdrop Grayscale'},
      {members: 'backdrop\\-hue\\-rotate\\-(?<value>${backdropHueRotate})|\\-backdrop\\-hue\\-rotate\\-(?<negativeValue>${-backdropHueRotate})', type: 'Backdrop Hue Rotate'},
      {members: 'backdrop\\-invert(\\-(?<value>${backdropInvert}))?', type: 'Backdrop Invert'},
      {members: 'backdrop\\-opacity\\-(?<value>${backdropOpacity})', type: 'Backdrop Opacity'},
      {members: 'backdrop\\-saturate\\-(?<value>${backdropSaturate})', type: 'Backdrop Saturate'},
      {members: 'backdrop\\-sepia(\\-(?<value>${backdropSepia}))?', type: 'Backdrop Sepia'},

      // Animation.
      {members: 'transition(\\-(?<value>${transitionProperty}))?', type: 'Transition Property'},
      {members: 'duration(\\-(?<value>${transitionDuration}))?', type: 'Transition Duration'},
      {members: 'ease(\\-(?<value>${transitionTimingFunction}))?', type: 'Transition Timing Function'},
      {members: 'delay\\-(?<value>${transitionDelay})', type: 'Transition Delay'},
      {members: 'animate\\-(?<value>${animation})', type: 'Animation'},

      // Will Change.
      {members: 'will\\-change\\-(?<value>${willChange})', type: 'Will Change'},

      // User select.
      {members: 'select\\-(none|text|all|auto)', type: 'User Select'},

      // Pointer-events.
      {members: 'pointer\\-events\\-(none|auto)', type: 'Pointer Events'},

      // Resize.
      {members: 'resize(\\-(none|x|y))?', type: 'Resize'},

      // Cursor.
      {members: 'cursor\\-(?<value>${cursor})', type: 'Cursor'},
    ],

    type: 'General rules',
  },
]

module.exports = {
  env    : {browser: true, jest: true, node: false},
  plugins: ['tailwindcss'],

  rules: {
    'tailwindcss/classnames-order'          : ['error', {groupByResponsive: false, groups, prependCustom: true}],
    'tailwindcss/enforces-shorthand'        : ['error'],
    'tailwindcss/migration-from-tailwind-2' : ['error'],
    'tailwindcss/no-contradicting-classname': ['error'],
    'tailwindcss/no-custom-classname'       : ['error', {whitelist: ['area-span-full', 'scrollbar-hidden']}],
  },

  settings: {
    tailwindcss: {callees: ['cn']},
  },
}
