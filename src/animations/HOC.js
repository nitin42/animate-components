// @flow

import React, { Component } from 'react';

type Props = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string,
  children: React$Element<*>
};

type DefaultProps = {
  duration: string,
  timingFunction: string,
  delay: string,
  direction: string,
  iterations: string,
  backfaceVisible: string,
  fillMode: string,
  playState: string
};

type State = {
  styles: Object
};

/**
 * High Order Component
 * @param {string} componentName - Name of the animation component
 * @param {string} keyframes - Keyframes defined for the animation 
 */
let HOC = (ComposedComponent: string, AnimationName: string) =>
	class extends Component<DefaultProps, Props, State> {
		state = {
			styles: {}
		};

		static defaultProps = {
			duration: "1s",
			timingFunction: "ease",
			delay: "0s",
			direction: "normal",
			iterations: "1",
			backfaceVisible: "visible",
			fillMode: "none",
			playState: "running"
		};

		componentDidMount = () => {
			const {
        duration,
				timingFunction,
				delay,
				direction,
				iterations,
				backfaceVisible,
				fillMode,
				playState
      } = this.props;

			this.setState({
				styles: {
					animation: `
            ${AnimationName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} 
            ${fillMode} ${playState}
          `,
					backfaceVisibility: `${backfaceVisible}`
				}
			});
		}

    // Performance bottleneck (avoid re-render)
    // shouldComponentUpdate(nextProps: Props, nextState: State) {
    //   const currentProps = this.props;

    //   switch(currentProps) {
    //     case (currentProps.duration === nextProps.duration):
    //       return false;
    //     case (currentProps.timingFunction === nextProps.timingFunction):
    //       return false;
    //     case (currentProps.delay === nextProps.delay):
    //       return false;
    //     case (currentProps.direction === nextProps.direction):
    //       return false;
    //     case (currentProps.iterations === nextProps.iterations):
    //       return false;
    //     case (currentProps.backfaceVisible === nextProps.backfaceVisible):
    //       return false;
    //     case (currentProps.fillMode === nextProps.fillMode):
    //       return false;
    //     case (currentProps.playState === nextProps.playState):
    //       return false;
    //     default:
    //       return true;
    //   }
    // }

		renderRootWithBlock = (): ?React$Element<*> => {
      const styles = Object.assign({}, this.state.styles, {position: "relative"});

			return (
				<div style={styles}>
					{this.props.children}
				</div>
			);
		}

		renderRootWithInline = (): ?React$Element<*> => {
      const styles = Object.assign({}, this.state.styles, {display: "inline-block"});

			return (
				<span style={styles}>
					{this.props.children}
				</span>
			);
		}

		render(): ?React$Element<*> {
			return this.props.block ? this.renderRootWithBlock() : this.renderRootWithInline()
		}
	}

export default HOC;
