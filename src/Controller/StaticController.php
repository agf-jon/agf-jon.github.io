<?php

namespace Drupal\wyg_static\Controller;

use Drupal\wyg_static\AssociationData;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Render\HtmlResponse;


/**
 * Class StaticController.
 *
 * @package Drupal\wyg_static\Controller
 */
class StaticController extends ControllerBase
{
  private $template_path;
  private $twig;

  public function __construct() {
    $this->template_path = drupal_get_path('module', 'wyg_static') . '/templates';
    $this->twig = \Drupal::service('twig');
  }

  private function createTwigResponse($template, $vars = []) {
    // there's got to be a more drupally way to do render arbitrary templates. this feels too raw.
    $template = $this->twig->loadTemplate($this->template_path . '/' . $template);
    $vars['template_directory'] = $this->template_path;
    // die(var_dump($vars));

    $html = $template->render($vars);
    return new HtmlResponse($html);
  }

  private function preparePageData($key = '') {
    $allData = AssociationData::data;

    if (!array_key_exists($key, $allData)) {
      $key = 'example';
    }

    $pageData = $allData[$key];
    $pageData['logo'] = '/' . drupal_get_path('module', 'wyg_static') . '/img/logos/' . $pageData['logo_filename'];

    return $pageData;
  }

  // Static
  public function splash() {
    return $this->createTwigResponse('splash.html.twig');
  }

  public function splashArticle1() {
    return $this->createTwigResponse('splash--article1.html.twig');
  }

  public function splashArticle2() {
    return $this->createTwigResponse('splash--article2.html.twig');
  }

  public function splashArticle3() {
    return $this->createTwigResponse('splash--article3.html.twig');
  }

  public function splashRedirect() {
    return $this->createTwigResponse('splash--redirect.html.twig');
  }

  // Uses Model
  public function acaArticle1($name = '') {
    $pageData = $this->preparePageData($name);
    return $this->createTwigResponse('aca--article1.html.twig', $pageData);
  }

  public function acaArticle2($name = '') {
    $pageData = $this->preparePageData($name);
    return $this->createTwigResponse('aca--article2.html.twig', $pageData);
  }

  public function acaArticle3($name = '') {
    $pageData = $this->preparePageData($name);
    return $this->createTwigResponse('aca--article3.html.twig', $pageData);
  }

  public function aca($name = '') {
    $pageData = $this->preparePageData($name);
    return $this->createTwigResponse('aca.html.twig', $pageData);
  }

  public function contact($name = '') {
    $pageData = $this->preparePageData($name);
    return $this->createTwigResponse('contact.html.twig', $pageData);
  }

  public function thanksContact($name = '') {
    $pageData = $this->preparePageData($name);
    return $this->createTwigResponse('thanks--contact.html.twig', $pageData);
  }

  public function thanksDownload($name = '') {
    $pageData = $this->preparePageData($name);
    return $this->createTwigResponse('thanks--download.html.twig', $pageData);
  }
}
