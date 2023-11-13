<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'W^`>11Th0FFIa[A$x=exFaXQ#T!{KQN0RKNrSfl}0E(&Q,(hG;csMBg|5-4up7yq' );
define( 'SECURE_AUTH_KEY',   '*ir;d%ukpGeOUpMlx63)&#F^{l@&C<X#o,P@Q4iv@4cfUw)vvLhmxbk=ddfDdNHg' );
define( 'LOGGED_IN_KEY',     'vKO)lpWM4QtU.1Ud@$$S&R3W{GzciV`Ra?b<L{y?r;@{/XpRE|vF_7PDgc|fC+v0' );
define( 'NONCE_KEY',         'DbYPN2sDloQUARnbLt~2>yWb<Xk4Da1w5Z-4!cU(}bwrrn8H@U8*Ywt?$O)Y^16|' );
define( 'AUTH_SALT',         'NHuEfLSDLj:Q{I0Qfd_T&ju[~;iY(7@DmD~o!8FsHX^|CxtVd%< H%BiU9@; UbY' );
define( 'SECURE_AUTH_SALT',  '1LTlVAjC$p%|Xge$V55+nF!QHH_eCGXPl@$ffT1IpX13d%N-RUQ#Py b]ZsCaF*Z' );
define( 'LOGGED_IN_SALT',    'Hkb5VGm&X d``-wWV-l<?!{z5nkI![&g{8^Q!l#N~[8=Rq <;c!CpjBe^<j-iHaC' );
define( 'NONCE_SALT',        'BxrDrsx(F!BMKRg)#w:-7*G#Sb{[}.}I9Cs2G=GmElezWS]JW+u<[C0w%3iiX:jP' );
define( 'WP_CACHE_KEY_SALT', '2rsKZAH%Ub/,A$<;)VB>nCb/@xBchDnI&/PKNfc[NMytk.:Hmx_x4X8&R_w|tF4L' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
