/**
 * The options that are available for an instance of Intervaly along with defaults for any options
 * that have default values.
 */
export default class Options {
    /**
     * The interval that the timer should tick at.
     *
     * @property {number}
     *
     * @default 1000
     */
    interval: number;
    /**
     * Indicates whether or not Intervaly will start the timer as soon as it its initialized.
     *
     * @property {boolean}
     *
     * @default false
     */
    autostart: boolean;
    /**
     * @property {Object} options The initialization options passed to Intervaly.
     * @property {number} [options.interval=1000] The amount of time that should pass between ticks of the timer.
     * @property {boolean} [options.autostart=false] Indicates whether or not Intervaly will start the timer as soon as it its initialized.
     */
    constructor(options: Object);
}
