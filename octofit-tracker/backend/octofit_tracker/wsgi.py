"""Minimal wsgi placeholder for octofit tracker starter backend."""
def application(environ, start_response):
    start_response('200 OK', [('Content-Type', 'text/plain')])
    return [b'Octofit Tracker starter backend placeholder']
