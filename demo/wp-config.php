<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do MySQL
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/pt-br:Editando_wp-config.php
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('DB_NAME', 'u683321496_demo');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'u683321496_demo');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'anknga26');

/** Nome do host do MySQL */
define('DB_HOST', 'mysql.hostinger.com.br');

/** Charset do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+#1g7lk(L}{9pG1OIs[ `S5z3Hk{n*)_1pC*(gvYG2/}NKv)4}zZLbnXr}(dmo.D');
define('SECURE_AUTH_KEY',  '#sk+bU;f3;jjO&>%5D#w(X3xvS<4ps,ybM^C/%b73xOY{B1c%,C#{{[mKtDyYw3C');
define('LOGGED_IN_KEY',    'pi{IW>*IawgnG@% 8ltI$MVh,m`tj&nkR)S7 ;V%^|NtH _O?6i4:q `uP|7%A.R');
define('NONCE_KEY',        '-G 0#qA]Pn>#+(16R[2@iTp,v%N6up<)gYeJr)=C20>G9-Ypo;]zE2JM]y+tWTgJ');
define('AUTH_SALT',        '1rQ-GptVqQpAW3#QnEZ8ER8Gp^f6b^LJb+xa/bBq]-]AYU@i!fKBl,}j%A-GM%}>');
define('SECURE_AUTH_SALT', 'ZZW}0!v|[wy*|F`+t?+h5h-&|r%c+&55)fQ]Y^u.d=B8&#GUT`QU~C`&f.][Bu=m');
define('LOGGED_IN_SALT',   ' N#r2e?y8L#g?wgT`+3*5^if#+9)Ss}>0V/aKPTEaC~BJZFS,x)*TM=/ngkyZUJH');
define('NONCE_SALT',       'AprNn{}exfY7U+_)OmmmKlzAebrxwkvK2hJd?sW}F>9Ib2HM!vrPQU?u/B0?nsC8');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://codex.wordpress.org/pt-br:Depura%C3%A7%C3%A3o_no_WordPress
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis e arquivos do WordPress. */
require_once(ABSPATH . 'wp-settings.php');
