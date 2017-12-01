<?php
require __DIR__ . '/vendor/autoload.php';

$params = json_decode(file_get_contents("parameters.json"), true);
$time = time();

$centrifugoParams = $params['centrifugo'];
$centrifugoUrl = $centrifugoParams['url'];
$client = new \phpcent\Client($centrifugoUrl);
$userId = (string) uniqid();
$timestamp = $time;
$token = $client->setSecret($centrifugoParams['secret'])->generateClientToken($userId, $timestamp);

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    'token' => $token,
    'userId' => $userId,
    'timestamp' => (string) $timestamp,
    'centrifugoUrl' => $centrifugoParams['wsUrl'],
]);